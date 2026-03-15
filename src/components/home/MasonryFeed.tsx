"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback, useRef } from "react";
import { Heart, Bookmark, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AccountBadgeComponent from "@/components/AccountBadge";
import { FEED_ITEMS } from "@/data/feed";
import type { FeedItem } from "@/types";

function FeedCardSkeleton({ tall }: { tall: boolean }) {
  return (
    <div className="animate-pulse">
      <div
        className={`w-full rounded-2xl bg-surface/60 ${tall ? "aspect-[3/4]" : "aspect-square"}`}
      />
      <div className="pt-2 px-0.5 space-y-1.5">
        <div className="h-3.5 w-24 bg-surface/50 rounded" />
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-surface/40" />
          <div className="h-2.5 w-16 bg-surface/30 rounded" />
        </div>
      </div>
    </div>
  );
}

function FeedCard({ item }: { item: FeedItem }) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(item.likes);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (tapTimerRef.current) {
        // Second tap came in — double tap = like
        clearTimeout(tapTimerRef.current);
        tapTimerRef.current = null;
        if (!liked) {
          setLiked(true);
          setLocalLikes((n) => n + 1);
          setShowHeartBurst(true);
          setTimeout(() => setShowHeartBurst(false), 900);
        }
      } else {
        // First tap — wait to see if double tap follows
        tapTimerRef.current = setTimeout(() => {
          tapTimerRef.current = null;
          router.push(item.href);
        }, 250);
      }
    },
    [liked, item.href, router],
  );

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved((s) => !s);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((l) => {
      setLocalLikes((n) => (l ? n - 1 : n + 1));
      return !l;
    });
  };

  return (
    <div
      className="block group active:scale-[0.98] transition-transform cursor-pointer"
      onClick={handleTap}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-surface ${item.aspect === "tall" ? "aspect-[3/4]" : "aspect-square"}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="50vw"
          className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-500"
        />
        <AnimatePresence>
          {showHeartBurst && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <Heart
                size={56}
                className="fill-red-400 text-red-400 drop-shadow-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hashtags on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-white/90 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content below image */}
      <div className="pt-2 px-0.5 overflow-hidden">
        {/* Account + actions row */}
        <div className="flex items-center justify-between gap-1">
          <div className="min-w-0 flex-1 overflow-hidden">
            <AccountBadgeComponent account={item.account} size="sm" />
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 p-1 -m-1 active:scale-110 cursor-pointer transition-transform group/like"
              aria-label="Like"
            >
              <Heart
                size={20}
                className={`transition-colors ${liked ? "fill-red-400 text-red-400" : "text-foreground/40 group-hover/like:text-foreground/60"}`}
              />
              <span className={`hidden md:inline text-[11px] font-bold transition-colors ${liked ? "text-red-400" : "text-foreground/40 group-hover/like:text-foreground/60"}`}>
                {localLikes >= 1000
                  ? (localLikes / 1000).toFixed(1) + "k"
                  : localLikes}
              </span>
            </button>
            <button
              onClick={handleSave}
              className="p-1 -m-1 active:scale-110 cursor-pointer transition-transform"
              aria-label="Save"
            >
              <Bookmark
                size={20}
                className={`transition-colors ${saved ? "fill-accent text-accent" : "text-foreground/40"}`}
              />
            </button>
          </div>
        </div>

        <h3 className="text-[12px] font-semibold text-warm-white leading-snug mt-1 truncate">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

interface MasonryFeedProps {
  activeTag?: string | null;
  loading?: boolean;
}

export default function MasonryFeed({
  activeTag = null,
  loading = false,
}: MasonryFeedProps) {
  const filteredItems = activeTag
    ? FEED_ITEMS.filter((item) => {
        if (activeTag === "trending") return item.hot;
        return item.tags.some((t) =>
          t.toLowerCase().includes(activeTag.toLowerCase()),
        );
      })
    : FEED_ITEMS;

  const items = filteredItems.length > 0 ? filteredItems : FEED_ITEMS;

  const distributeItems = (sourceItems: FeedItem[], numCols: number) => {
    const columns: FeedItem[][] = Array.from({ length: numCols }, () => []);
    sourceItems.forEach((item, index) => {
      columns[index % numCols].push(item);
    });
    return columns;
  };

  const mobileCols = distributeItems(items, 2);
  const desktopCols = distributeItems(items, 4);

  if (loading) {
    return (
      <section className="px-2 md:px-8 pt-4 pb-4 max-w-7xl mx-auto">
        <div className="flex md:hidden gap-2 items-start">
          {[0, 1].map((col) => (
            <div
              key={col}
              className="flex-1 flex flex-col gap-2"
              style={{ marginTop: col % 2 === 1 ? "2.5rem" : 0 }}
            >
              {[0, 1, 2, 3].map((i) => (
                <FeedCardSkeleton key={i} tall={i % 2 === 0} />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-2 md:px-8 pt-4 md:pt-8 pb-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4 md:mb-6 px-1">
        <div>
          <h2 className="text-2xl md:text-2xl text-warm-white font-bold">
            Discover
          </h2>
          <p className="text-[11px] text-foreground/40 mt-0.5">
            From creators you&apos;ll love
          </p>
        </div>
        <Link
          href="/search"
          className="flex items-center gap-1.5 text-[11px] text-accent font-medium bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full px-3 py-1.5 transition-colors"
        >
          <Users size={13} />
          Following
        </Link>
      </div>

      {/* Mobile: 2-column */}
      <motion.div
        className="flex md:hidden gap-2 items-start overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={activeTag || "all"}
      >
        {mobileCols.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 min-w-0 flex flex-col gap-2"
            style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}
          >
            {col.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.05 + i * 0.07 }}
              >
                <FeedCard item={item} />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Desktop: 4-column */}
      <motion.div
        className="hidden md:flex gap-4 items-start overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={`desktop-${activeTag || "all"}`}
      >
        {desktopCols.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 min-w-0 flex flex-col gap-4"
            style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}
          >
            {col.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.05 + i * 0.07 }}
              >
                <FeedCard item={item} />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
