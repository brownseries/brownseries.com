"use client";

import { motion } from "framer-motion";

interface FeedTabsProps {
  activeTab: "foryou" | "following";
  onTabChange: (tab: "foryou" | "following") => void;
}

export default function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  return (
    <div className="flex items-center justify-center gap-6 py-3 sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-white/5">
      {(["foryou", "following"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative text-[13px] font-semibold tracking-wide transition-colors pb-1 ${
            activeTab === tab ? "text-warm-white" : "text-foreground/40"
          }`}
        >
          {tab === "foryou" ? "For You" : "Following"}
          {activeTab === tab && (
            <motion.div
              layoutId="feedTabIndicator"
              className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
