"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RefreshCw } from "lucide-react";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

const THRESHOLD = 80;

export default function PullToRefresh({
  onRefresh,
  children,
}: PullToRefreshProps) {
  const [refreshing, setRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const pulling = useRef(false);
  const y = useMotionValue(0);

  const indicatorOpacity = useTransform(y, [0, 40, THRESHOLD], [0, 0.5, 1]);
  const indicatorScale = useTransform(y, [0, THRESHOLD], [0.5, 1]);
  const indicatorRotate = useTransform(y, [0, THRESHOLD], [0, 180]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const el = containerRef.current;
      if (!el || refreshing) return;
      // Only activate if scrolled to top
      if (el.scrollTop <= 0) {
        startY.current = e.touches[0].clientY;
        pulling.current = true;
      }
    },
    [refreshing],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!pulling.current || refreshing) return;
      const delta = Math.max(0, e.touches[0].clientY - startY.current);
      // Apply resistance
      const dampened = Math.min(delta * 0.4, THRESHOLD + 20);
      y.set(dampened);
    },
    [refreshing, y],
  );

  const handleTouchEnd = useCallback(async () => {
    if (!pulling.current) return;
    pulling.current = false;

    if (y.get() >= THRESHOLD && !refreshing) {
      setRefreshing(true);
      animate(y, 50, { type: "spring", stiffness: 300, damping: 30 });
      await onRefresh();
      setRefreshing(false);
    }
    animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
  }, [y, refreshing, onRefresh]);

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative"
    >
      {/* Pull indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity, scale: indicatorScale }}
        className="absolute top-0 left-0 right-0 flex justify-center py-4 z-20 pointer-events-none"
      >
        <motion.div
          style={{ rotate: refreshing ? undefined : indicatorRotate }}
          animate={refreshing ? { rotate: 360 } : {}}
          transition={
            refreshing
              ? { repeat: Infinity, duration: 0.8, ease: "linear" }
              : {}
          }
          className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur-sm border border-white/10 flex items-center justify-center"
        >
          <RefreshCw size={14} className="text-accent" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
