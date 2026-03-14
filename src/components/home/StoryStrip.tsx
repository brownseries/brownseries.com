"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StoryViewer from "./StoryViewer";

const STORIES = [
    {
        id: "new-in",
        label: "New In",
        image: "/hero_indian_new_arrivals.png",
        href: "/shop?filter=new",
        active: true,
    },
    {
        id: "eid-2026",
        label: "Eid 2026",
        image: "/hero_eid_collection.png",
        href: "/shop?collection=eid",
        active: true,
    },
    {
        id: "trending",
        label: "Trending",
        image: "/hero_indian_winter.png", 
        href: "/search",
        active: false,
    },
    {
        id: "bts",
        label: "BTS",
        image: "/hero.png",
        href: "/about",
        active: false,
    },
    {
        id: "lookbook",
        label: "Lookbook",
        image: "/hero_indian_essentials.png",
        href: "/search",
        active: false,
    },
    {
        id: "lifestyle",
        label: "Lifestyle",
        image: "/hero_indian_accessories.png",
        href: "/search",
        active: false,
    },
];

export default function StoryStrip() {
    const [viewingIndex, setViewingIndex] = useState<number | null>(null);

    return (
        <>
            <section className="w-full bg-background pt-4 pb-2 border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto md:px-8">
                    <div className="flex gap-4 px-4 md:justify-center overflow-x-auto hide-scrollbar scroll-smooth">
                        {STORIES.map((story, index) => (
                            <button
                                key={story.id}
                                onClick={() => setViewingIndex(index)}
                                className="flex flex-col items-center gap-1.5 flex-shrink-0 group py-1 outline-none"
                            >
                                {/* Story Ring */}
                                <div className="relative">
                                    <div className={`w-[72px] h-[72px] rounded-full p-[2.5px] ${
                                        story.active 
                                        ? "bg-gradient-to-tr from-[#9B6B43] via-[#D2B48C] to-[#E5D3B3]" 
                                        : "bg-foreground/10"
                                    }`}>
                                        <div className="w-full h-full rounded-full border-2 border-background overflow-hidden relative">
                                            <Image
                                                src={story.image}
                                                alt={story.label}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Label */}
                                <span className={`text-[11px] font-[family-name:var(--font-outfit)] font-medium ${
                                    story.active ? "text-warm-white" : "text-foreground/50"
                                }`}>
                                    {story.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Viewer Overlay */}
            <AnimatePresence>
                {viewingIndex !== null && (
                    <StoryViewer 
                        stories={STORIES}
                        initialIndex={viewingIndex}
                        onClose={() => setViewingIndex(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
