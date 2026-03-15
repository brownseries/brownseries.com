"use client";

import { motion } from "framer-motion";

interface FeedToggleProps {
  active: boolean;
  onToggle: (active: boolean) => void;
}

export default function FeedToggle({ active, onToggle }: FeedToggleProps) {
  return (
    <div className="flex items-center gap-2.5 px-1">
      <span
        className={`text-[11px] font-medium transition-colors ${!active ? "text-warm-white" : "text-foreground/40"}`}
      >
        Discover
      </span>
      <button
        onClick={() => onToggle(!active)}
        className="relative w-10 h-[22px] rounded-full bg-surface border border-white/10 transition-colors"
        aria-label="Toggle For You feed"
      >
        <motion.div
          className="absolute top-[2px] w-4 h-4 rounded-full bg-accent"
          animate={{ left: active ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className={`text-[11px] font-medium transition-colors ${active ? "text-warm-white" : "text-foreground/40"}`}
      >
        For You
      </span>
    </div>
  );
}
