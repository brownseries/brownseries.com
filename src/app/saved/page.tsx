"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { SAVED_ITEMS } from "@/app/search/constants";
import SavedGridItem from "@/components/saved/SavedGridItem";
import SavedCollections from "@/components/saved/SavedCollections";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Layout, Share2 } from "lucide-react";

export default function SavedPage() {
    const [activeTab, setActiveTab] = useState<"items" | "boards">("items");

    return (
        <main className="min-h-screen bg-background pb-32 flex flex-col">
            <Navbar />

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Page Header */}
                <div className="pt-12 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Your Curated Space</span>
                            <div className="h-px w-8 bg-accent/30" />
                        </div>
                        <h1 className="text-xl md:text-2xl text-warm-white font-bold">
                            Curated Collections
                        </h1>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-warm-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all self-start md:self-auto">
                        <Share2 className="w-4 h-4" />
                        Share Closet
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-white/5 mb-10 overflow-x-auto hide-scrollbar">
                    <button
                        onClick={() => setActiveTab("items")}
                        className={`pb-4 text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative flex items-center gap-2 ${activeTab === "items" ? "text-warm-white" : "text-foreground/30 hover:text-foreground/60"
                            }`}
                    >
                        <Grid className="w-4 h-4" />
                        All Items ({SAVED_ITEMS.length})
                        {activeTab === "items" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("boards")}
                        className={`pb-4 text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative flex items-center gap-2 ${activeTab === "boards" ? "text-warm-white" : "text-foreground/30 hover:text-foreground/60"
                            }`}
                    >
                        <Layout className="w-4 h-4" />
                        Personal Boards (2)
                        {activeTab === "boards" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                    </button>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "items" ? (
                            <motion.div
                                key="items"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
                            >
                                {SAVED_ITEMS.map((product) => (
                                    <SavedGridItem key={product.id} product={product} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="boards"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <SavedCollections />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {SAVED_ITEMS.length === 0 && activeTab === "items" && (
                        <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center">
                                <Grid className="w-8 h-8 text-foreground/20" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl text-warm-white font-medium">Your wishlist is empty</h2>
                                <p className="text-[13px] text-foreground/60 max-w-xs mx-auto">Tap the heart icon on any item in the shop to save it here.</p>
                            </div>
                            <Link href="/shop" className="px-8 py-4 bg-warm-white text-background rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                                Explore Shop
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <MobileBottomNav />
        </main>
    );
}
