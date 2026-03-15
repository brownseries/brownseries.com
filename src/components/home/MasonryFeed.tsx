"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import { Heart, Bookmark, Flame, Star, Zap, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AVATARS = [
  { name: "Amira S.", avatar: "🧕" },
  { name: "Layla K.", avatar: "👩" },
  { name: "Noor H.", avatar: "👩‍🦱" },
  { name: "Fatima R.", avatar: "🧕" },
  { name: "Zara M.", avatar: "👩‍🦰" },
  { name: "Hana B.", avatar: "👩" },
  { name: "Yasmin D.", avatar: "🧕" },
  { name: "Sara A.", avatar: "👩‍🦱" },
];

export const FEED_ITEMS = [
  {
    id: 1,
    image: "/hero_eid_collection.png",
    title: "Eid Collection",
    subtitle: "Festive lookbook",
    saves: 2140,
    likes: 3420,
    tags: ["#EidLooks", "#FestiveFashion"],
    href: "/shop/eid-collections",
    aspect: "tall" as const,
    hot: true,
  },
  {
    id: 2,
    image: "/hero_indian_winter.png",
    title: "Winter Knits",
    subtitle: "Cold-weather essentials",
    saves: 983,
    likes: 1540,
    tags: ["#WinterKnits", "#QuietLuxury"],
    href: "/shop/cozy-looks",
    aspect: "short" as const,
    hot: false,
  },
  {
    id: 3,
    image: "/hero.png",
    title: "Classic Style",
    subtitle: "Everyday staples",
    saves: 1562,
    likes: 2780,
    tags: ["#EarthTone", "#Modest"],
    href: "/shop/classic-style",
    aspect: "short" as const,
    hot: false,
  },
  {
    id: 4,
    image: "/hero_indian_accessories.png",
    title: "Premium Accessories",
    subtitle: "Finishing touches",
    saves: 741,
    likes: 1120,
    tags: ["#Accessories", "#LayeredLooks"],
    href: "/shop/timeless-accessory",
    aspect: "tall" as const,
    hot: true,
  },
  {
    id: 5,
    image: "/hero_indian_essentials.png",
    title: "Everyday Essentials",
    subtitle: "Capsule wardrobe",
    saves: 1893,
    likes: 3100,
    tags: ["#Essentials", "#EarthTone"],
    href: "/shop/classic-style",
    aspect: "tall" as const,
    hot: false,
  },
  {
    id: 6,
    image: "/trending_hijabi_skirt.png",
    title: "Textured Midi Skirt",
    subtitle: "Statement bottoms",
    saves: 612,
    likes: 890,
    tags: ["#Bottoms", "#Modest"],
    href: "/shop/1",
    aspect: "short" as const,
    hot: false,
  },
  {
    id: 7,
    image: "/hero-2.png",
    title: "Leather Tote",
    subtitle: "Carry everything",
    saves: 447,
    likes: 670,
    tags: ["#Bags", "#Accessories"],
    href: "/shop/2",
    aspect: "short" as const,
    hot: false,
  },
  {
    id: 8,
    image: "/hero_indian_new_arrivals.png",
    title: "Modern Silhouettes",
    subtitle: "New season drop",
    saves: 2304,
    likes: 4150,
    tags: ["#NewIn", "#QuietLuxury"],
    href: "/shop/4",
    aspect: "tall" as const,
    hot: true,
  },
];

// Hot Now badge component (inline, replaces separate file dependency)
function HotBadge({ itemId }: { itemId: number }) {
  const seed = itemId * 1337;
  const viewing = 12 + (seed % 48);
  const type = seed % 3;

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 w-fit">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
      </span>
      <p className="text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
        {type === 0 && (
          <>
            <Flame className="w-2.5 h-2.5 text-accent fill-accent" />
            {viewing} viewing
          </>
        )}
        {type === 1 && (
          <>
            <Star className="w-2.5 h-2.5 text-accent fill-accent" />
            Trending
          </>
        )}
        {type === 2 && (
          <>
            <Zap className="w-2.5 h-2.5 text-accent fill-accent" />
            Low Stock
          </>
        )}
      </p>
    </div>
  );
}

// Skeleton loader for feed cards
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

function FeedCard({
  item,
  index,
  showAttribution = false,
}: {
  item: (typeof FEED_ITEMS)[0];
  index: number;
  showAttribution?: boolean;
}) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(item.likes);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const lastTapRef = useRef(0);

  // Double-tap to like
  const handleDoubleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        e.preventDefault();
        if (!liked) {
          setLiked(true);
          setShowHeartBurst(true);
          setTimeout(() => setShowHeartBurst(false), 900);
        }
      }
      lastTapRef.current = now;
    },
    [liked],
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
    <Link
      href={item.href}
      className="block group active:scale-[0.98] transition-transform"
      onClick={handleDoubleTap}
    >
      {/* Image */}
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

        {/* Double-tap heart burst animation */}
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
      </div>

      {/* Text content below image */}
      <div className="pt-2 px-0.5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-foreground/40 bg-white/5 px-1.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[12px] font-semibold text-warm-white leading-snug">
          {item.title}
        </h3>

        <div className="flex items-center gap-3 mt-1.5">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 active:scale-110 transition-transform"
            aria-label="Like"
          >
            <Heart
              size={18}
              className={`transition-colors ${liked ? "fill-red-400 text-red-400" : "text-foreground/40"}`}
            />
            <span
              className={`text-[11px] ${liked ? "text-red-400" : "text-foreground/40"}`}
            >
              {localLikes >= 1000
                ? `${(localLikes / 1000).toFixed(1)}k`
                : localLikes}
            </span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1 active:scale-110 transition-transform"
            aria-label="Save"
          >
            <Bookmark
              size={18}
              className={`transition-colors ${saved ? "fill-accent text-accent" : "text-foreground/40"}`}
            />
          </button>
        </div>
        {showAttribution && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[13px]">
              {AVATARS[item.id % AVATARS.length].avatar}
            </span>
            <span className="text-[10px] text-foreground/50">
              {AVATARS[item.id % AVATARS.length].name}
            </span>
          </div>
        )}
      </div>
    </Link>
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

  const distributeItems = (sourceItems: typeof FEED_ITEMS, numCols: number) => {
    const columns: (typeof FEED_ITEMS)[] = Array.from(
      { length: numCols },
      () => [],
    );
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
      {/* Section header */}
      <div className="flex items-center justify-between mb-4 md:mb-6 px-1">
        <div>
          <h2 className="text-2xl md:text-2xl text-warm-white font-bold">
            Discover
          </h2>
          <p className="text-[11px] text-foreground/40 mt-0.5">
            Personalized picks
          </p>
        </div>
        <Link
          href="/following"
          className="flex items-center gap-1.5 text-[11px] text-accent font-medium bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full px-3 py-1.5 transition-colors"
        >
          <Users size={13} />
          Following
        </Link>
      </div>

      {/* Mobile: 2-column */}
      <motion.div
        className="flex md:hidden gap-2 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={activeTag || "all"}
      >
        {mobileCols.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 flex flex-col gap-2"
            style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}
          >
            {col.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.05 + i * 0.07 }}
              >
                <FeedCard item={item} index={i} />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Desktop: 4-column */}
      <motion.div
        className="hidden md:flex gap-4 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={`desktop-${activeTag || "all"}`}
      >
        {desktopCols.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex-1 flex flex-col gap-4"
            style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}
          >
            {col.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.05 + i * 0.07 }}
              >
                <FeedCard item={item} index={i} />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
