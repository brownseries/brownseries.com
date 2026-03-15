"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import type { AccountBadge } from "@/types";

interface Story {
  id: string;
  label: string;
  image: string;
  href: string;
  account: AccountBadge;
}

interface StoryViewerProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
}

export default function StoryViewer({
  stories,
  initialIndex,
  onClose,
}: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  const story = stories[currentIndex];
  const duration = 5000;

  useEffect(() => {
    const interval = 50;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black md:bg-black/90 md:backdrop-blur-xl flex items-center justify-center"
    >
      <div className="relative w-full h-full md:h-[90vh] md:max-w-[450px] md:rounded-[40px] md:overflow-hidden bg-background">
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-50 flex gap-1">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{
                  width:
                    idx === currentIndex
                      ? `${progress}%`
                      : idx < currentIndex
                        ? "100%"
                        : "0%",
                }}
                transition={{ ease: "linear" }}
              />
            </div>
          ))}
        </div>

        {/* Header — account info */}
        <div className="absolute top-8 left-4 right-4 z-50 flex items-center justify-between">
          <Link
            href={`/u/${story.account.username}`}
            onClick={onClose}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-lg">
              {story.account.avatar}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-white text-sm font-semibold drop-shadow-md group-hover:text-accent transition-colors">
                  {story.account.displayName}
                </span>
                {story.account.verified && (
                  <BadgeCheck
                    size={14}
                    className="text-white drop-shadow-md"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                )}
              </div>
              <span className="text-white/50 text-[11px] drop-shadow-md">
                {story.label}
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full h-full"
          >
            <Image
              src={story.image}
              alt={story.label}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-20 z-50">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white font-bold drop-shadow-lg"
              >
                {story.label}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Triggers (Invisible) */}
        <div className="absolute inset-0 z-40 flex">
          <div className="w-[30%] h-full" onClick={handlePrev} />
          <div className="w-[70%] h-full" onClick={handleNext} />
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 z-50 flex flex-col items-center gap-4 px-4">
          <Link
            href={story.href}
            className="w-full flex items-center justify-center gap-2 bg-warm-white text-background py-2 rounded-full font-medium active:scale-95 transition-transform"
          >
            <ShoppingBag size={18} />
            Shop the Look
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {currentIndex < stories.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
