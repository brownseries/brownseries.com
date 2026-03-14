"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Bell, Heart, Bookmark, ShoppingBag, Tag, Sparkles, ChevronRight } from "lucide-react";
import ActivityItem from "@/components/activity/ActivityItem";
import { motion } from "framer-motion";

const ACTIVITY = [
    {
        id: 1,
        group: "Today",
        type: "save",
        icon: Bookmark,
        accent: "text-accent",
        bg: "bg-accent/10",
        text: "Your saved look **Eid Collection** is trending — 2.1k saves this week",
        time: "2m ago",
        image: "/hero_eid_collection.png",
        actionLabel: "View Board"
    },
    {
        id: 2,
        group: "Today",
        type: "drop",
        icon: Tag,
        accent: "text-emerald-400",
        bg: "bg-emerald-400/10",
        text: "New drop: **Winter Collection 2026** is now available",
        time: "1h ago",
        image: "/hero_indian_winter.png",
        actionLabel: "Shop Drop",
        isLive: true
    },
    {
        id: 3,
        group: "Today",
        type: "like",
        icon: Heart,
        accent: "text-red-400",
        bg: "bg-red-400/10",
        text: "**47 people** liked the Everyday Essentials look you saved",
        time: "3h ago",
        image: "/hero_indian_essentials.png",
        actionLabel: "See who"
    },
    {
        id: 4,
        group: "Yesterday",
        type: "restock",
        icon: ShoppingBag,
        accent: "text-amber-400",
        bg: "bg-amber-400/10",
        text: "**Oversized Linen Coat** in your saved items is back in stock",
        time: "Yesterday",
        image: "/hero.png",
        actionLabel: "Add to Bag",
        isLive: true
    },
    {
        id: 5,
        group: "Yesterday",
        type: "save",
        icon: Bookmark,
        accent: "text-accent",
        bg: "bg-accent/10",
        text: "**Modern Silhouettes** is now one of the most saved looks this month",
        time: "Yesterday",
        image: "/hero_indian_new_arrivals.png",
        actionLabel: "Inspire Me"
    },
    {
        id: 6,
        group: "Earlier",
        type: "drop",
        icon: Tag,
        accent: "text-emerald-400",
        bg: "bg-emerald-400/10",
        text: "Exclusive early access: **Eid 2026 Collection** drops in 3 days",
        time: "3 days ago",
        actionLabel: "Set Reminder"
    },
];

export default function ActivityPage() {
    const groups = ["Today", "Yesterday", "Earlier"];

    return (
        <main className="min-h-screen bg-background pb-32">
            <Navbar />

            <div className="w-full max-w-2xl mx-auto px-4 md:px-8 pt-10">
                {/* Header */}
                <div className="flex flex-col gap-2 mb-10">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Stay Updated</span>
                        <div className="h-px w-8 bg-accent/30" />
                    </div>
                    <h1 className="text-2xl text-warm-white font-bold">
                        Activity & Vibes
                    </h1>
                </div>

                {/* Curator Highlight Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 relative overflow-hidden rounded-[40px] bg-surface/30 border border-white/5 p-8 group cursor-pointer"
                >
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Curator Alert</span>
                        </div>
                        <h2 className="text-xl text-warm-white font-bold max-w-[240px] leading-tight">
                            Zahra Ahmed shared a new story: <span className="font-normal">&ldquo;Summer Pastels&rdquo;</span>
                        </h2>
                        <button className="flex items-center gap-2 text-[11px] text-warm-white font-bold uppercase tracking-widest mt-2 group-hover:gap-4 transition-all">
                            Check it out
                            <ChevronRight className="w-4 h-4 text-accent" />
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 bottom-0 w-1/3 opacity-40 group-hover:opacity-60 transition-opacity">
                        <div className="relative h-full w-full">
                            <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10" />
                            <Image src="/hero_indian_winter.png" alt="Highlight" fill className="object-cover grayscale" />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 blur-[80px] rounded-full" />
                </motion.div>

                {/* Feed Sections */}
                <div className="flex flex-col gap-12">
                    {groups.map((groupName) => (
                        <div key={groupName} className="flex flex-col gap-6">
                            <h3 className="text-[11px] text-foreground/30 uppercase tracking-[0.2em] font-bold border-b border-white/5 pb-3">
                                {groupName}
                            </h3>
                            <div className="flex flex-col gap-2">
                                {ACTIVITY.filter(item => item.group === groupName).map((item) => (
                                    <ActivityItem key={item.id} item={item as any} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <MobileBottomNav />
        </main>
    );
}
