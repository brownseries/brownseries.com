"use client";

import { motion } from "framer-motion";

const TRENDING_TAGS = [
  { label: "All", tag: null },
  { label: "🔥 Trending", tag: "trending" },
  { label: "#EidLooks", tag: "EidLooks" },
  { label: "#QuietLuxury", tag: "QuietLuxury" },
  { label: "#WinterKnits", tag: "WinterKnits" },
  { label: "#Modest", tag: "Modest" },
  { label: "#EarthTone", tag: "EarthTone" },
  { label: "#Accessories", tag: "Accessories" },
  { label: "#NewIn", tag: "NewIn" },
];

interface TrendingPillsProps {
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TrendingPills({
  activeTag,
  onTagChange,
}: TrendingPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar px-3 md:px-8 py-3 -mx-0">
      {TRENDING_TAGS.map((item) => {
        const isActive = activeTag === item.tag;
        return (
          <button
            key={item.label}
            onClick={() => onTagChange(item.tag)}
            className={`relative flex-shrink-0 text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-colors active:scale-95 ${
              isActive
                ? "bg-accent text-background"
                : "bg-white/5 text-foreground/60 hover:bg-white/10"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="trendingPillBg"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
