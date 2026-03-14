"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const FEED_ITEMS = [
    {
        id: 1,
        image: "/hero_eid_collection.png",
        title: "Eid Collection",
        subtitle: "Festive lookbook",
        saves: 2140,
        tags: ["#EidLooks", "#FestiveFashion"],
        href: "/shop/eid-collections",
        aspect: "tall",   // aspect-[3/4]
    },
    {
        id: 2,
        image: "/hero_indian_winter.png",
        title: "Winter Knits",
        subtitle: "Cold-weather essentials",
        saves: 983,
        tags: ["#WinterWear", "#QuietLuxury"],
        href: "/shop/cozy-looks",
        aspect: "short",  // aspect-square
    },
    {
        id: 3,
        image: "/hero.png",
        title: "Classic Style",
        subtitle: "Everyday staples",
        saves: 1562,
        tags: ["#EarthTone", "#Modest"],
        href: "/shop/classic-style",
        aspect: "short",
    },
    {
        id: 4,
        image: "/hero_indian_accessories.png",
        title: "Premium Accessories",
        subtitle: "Finishing touches",
        saves: 741,
        tags: ["#Accessories", "#LayeredLooks"],
        href: "/shop/timeless-accessory",
        aspect: "tall",
    },
    {
        id: 5,
        image: "/hero_indian_essentials.png",
        title: "Everyday Essentials",
        subtitle: "Capsule wardrobe",
        saves: 1893,
        tags: ["#Essentials", "#EarthTone"],
        href: "/shop/classic-style",
        aspect: "tall",
    },
    {
        id: 6,
        image: "/trending_hijabi_skirt.png",
        title: "Textured Midi Skirt",
        subtitle: "Statement bottoms",
        saves: 612,
        tags: ["#Bottoms", "#Modest"],
        href: "/shop/1",
        aspect: "short",
    },
    {
        id: 7,
        image: "/hero-2.png",
        title: "Leather Tote",
        subtitle: "Carry everything",
        saves: 447,
        tags: ["#Bags", "#Accessories"],
        href: "/shop/2",
        aspect: "short",
    },
    {
        id: 8,
        image: "/hero_indian_new_arrivals.png",
        title: "Modern Silhouettes",
        subtitle: "New season drop",
        saves: 2304,
        tags: ["#NewIn", "#QuietLuxury"],
        href: "/shop/4",
        aspect: "tall",
    },
];

function FeedCard({ item }: { item: typeof FEED_ITEMS[0] }) {
    const [saved, setSaved] = useState(false);
    const [liked, setLiked] = useState(false);
    const [localSaves, setLocalSaves] = useState(item.saves);

    const handleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        setSaved(s => !s);
        setLocalSaves(n => saved ? n - 1 : n + 1);
    };

    const handleLike = (e: React.MouseEvent) => {
        e.preventDefault();
        setLiked(l => !l);
    };

    return (
        <Link href={item.href} className="block group active:scale-[0.98] transition-transform">
            {/* Image */}
            <div className={`relative w-full overflow-hidden rounded-2xl bg-surface ${item.aspect === "tall" ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="50vw"
                    className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-500"
                />

                {/* Action buttons only — no text overlay */}
                <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
                    <button
                        onClick={handleSave}
                        className="p-2 rounded-full bg-black/30 backdrop-blur-sm active:scale-110 transition-transform"
                        aria-label="Save"
                    >
                        <Bookmark
                            size={14}
                            className={`transition-colors ${saved ? "fill-accent text-accent" : "text-white/80"}`}
                        />
                    </button>
                    <button
                        onClick={handleLike}
                        className="p-2 rounded-full bg-black/30 backdrop-blur-sm active:scale-110 transition-transform"
                        aria-label="Like"
                    >
                        <Heart
                            size={14}
                            className={`transition-colors ${liked ? "fill-red-400 text-red-400" : "text-white/70"}`}
                        />
                    </button>
                </div>
            </div>

            {/* Text content below the image — never covers the photo */}
            <div className="pt-2 px-0.5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-1">
                    {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] text-foreground/40 bg-white/5 px-1.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-[12px] font-semibold text-warm-white leading-snug">
                    {item.title}
                </h3>
                <span className="text-[10px] text-foreground/40 flex items-center gap-1 mt-0.5">
                    <Bookmark size={9} className="inline" />
                    {localSaves >= 1000 ? `${(localSaves / 1000).toFixed(1)}k` : localSaves} saves
                </span>
            </div>
        </Link>
    );
}

export default function MasonryFeed() {
    // Utility to distribute items into columns for the masonry effect
    const distributeItems = (items: typeof FEED_ITEMS, numCols: number) => {
        const columns: (typeof FEED_ITEMS)[] = Array.from({ length: numCols }, () => []);
        items.forEach((item, index) => {
            columns[index % numCols].push(item);
        });
        return columns;
    };

    const mobileCols = distributeItems(FEED_ITEMS, 2);
    const desktopCols = distributeItems(FEED_ITEMS, 4);

    return (
        <section className="px-3 md:px-8 pt-4 md:pt-8 pb-4 max-w-7xl mx-auto">
            {/* Section header */}
            <div className="flex items-center justify-between mb-4 md:mb-6 px-1">
                <div>
                    <h2 className="text-2xl md:text-2xl text-warm-white font-bold">
                        Discover
                    </h2>
                    <p className="text-[11px] text-foreground/40 mt-0.5">
                        Curated looks &amp; collections
                    </p>
                </div>
                <Link
                    href="/shop"
                    className="text-[11px] text-accent uppercase tracking-widest hover:text-warm-white transition-colors"
                >
                    See all →
                </Link>
            </div>

            {/* ── Mobile: 2-column ── */}
            <motion.div
                className="flex md:hidden gap-3 items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {mobileCols.map((col, colIdx) => (
                    <div key={colIdx} className="flex-1 flex flex-col gap-3" style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}>
                        {col.map((item, i) => (
                            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (colIdx * 0.05) + i * 0.07 }}>
                                <FeedCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </motion.div>

            {/* ── Desktop: 4-column ── */}
            <motion.div
                className="hidden md:flex gap-4 items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {desktopCols.map((col, colIdx) => (
                    <div key={colIdx} className="flex-1 flex flex-col gap-4" style={{ marginTop: colIdx % 2 === 1 ? "2.5rem" : 0 }}>
                        {col.map((item, i) => (
                            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (colIdx * 0.05) + i * 0.07 }}>
                                <FeedCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
