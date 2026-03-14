"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FEATURED_COLLECTIONS } from "@/app/search/constants";

export default function ExploreFeaturedCollections() {
    const featuredRef = useRef<HTMLDivElement>(null);
    const [featuredIndex, setFeaturedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!featuredRef.current) return;
            
            setFeaturedIndex((prev) => {
                const next = (prev + 1) % FEATURED_COLLECTIONS.length;
                if (featuredRef.current) {
                    const scrollContainer = featuredRef.current;
                    const itemWidth = 260 + 16; // w-[260px] + gap-4
                    scrollContainer.scrollTo({
                        left: next * itemWidth,
                        behavior: "smooth"
                    });
                }
                return next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                    Featured Collections
                </p>
                <div className="flex gap-1.5">
                    {FEATURED_COLLECTIONS.map((_, i) => (
                        <div 
                            key={i}
                            className={`w-1 h-1 rounded-full transition-colors ${featuredIndex === i ? "bg-accent" : "bg-white/10"}`} 
                        />
                    ))}
                </div>
            </div>
            <div 
                ref={featuredRef}
                className="flex gap-4 overflow-x-auto hide-scrollbar snap-x scroll-smooth"
            >
                {FEATURED_COLLECTIONS.map((col) => (
                    <button
                        key={col.id}
                        className="group relative flex-shrink-0 w-[85vw] md:w-[260px] aspect-[16/10] overflow-hidden rounded-[32px] bg-surface snap-center active:scale-[0.98] transition-all"
                    >
                        <Image
                            src={col.image}
                            alt={col.title}
                            fill
                            className="object-cover object-center brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <video 
                                src={col.videoUrl} 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className={`absolute inset-0 bg-gradient-to-t ${col.color} opacity-40 mix-blend-multiply transition-opacity group-hover:opacity-20`} />
                        
                        <div className="absolute top-4 right-4 z-10 px-2.1 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] uppercase tracking-widest text-white font-bold">Preview</span>
                        </div>

                        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold mb-1">
                                {col.items} Items
                            </span>
                            <h3 className="text-xl text-white font-bold leading-tight">
                                {col.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
