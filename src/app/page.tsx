"use client";

import { useState, useCallback } from "react";
import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";
import ShopByCategory from "@/components/home/ShopByCategory";
import MasonryFeed from "@/components/home/MasonryFeed";
import StoryStrip from "@/components/home/StoryStrip";
import PullToRefresh from "@/components/home/PullToRefresh";

export default function HomePage() {
  const [feedLoading, setFeedLoading] = useState(false);

  const handleRefresh = useCallback(async () => {
    setFeedLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setFeedLoading(false);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0 overflow-x-hidden selection:bg-accent/30 selection:text-warm-white">
      <Navbar />
      <StoryStrip />

      <PullToRefresh onRefresh={handleRefresh}>
        <div className="w-full">
          <MasonryFeed loading={feedLoading} />
          {/* <FeaturesCarousel /> */}
          <ShopByCategory />
          <TrendingItems />
        </div>
      </PullToRefresh>
    </main>
  );
}
