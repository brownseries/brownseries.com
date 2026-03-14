"use client";

import { useMemo } from "react";
import { Flame, Star, Zap } from "lucide-react";

interface HotNowIndicatorProps {
    productId: number;
    className?: string;
}

export default function HotNowIndicator({ productId, className = "" }: HotNowIndicatorProps) {
    // Generate stable pseudo-random data based on ID
    const data = useMemo(() => {
        const seed = productId * 1337;
        const viewing = 12 + (seed % 48); // 12-60 people
        const type = seed % 3; // 0: Viewed, 1: Trending, 2: Limited
        
        return { viewing, type };
    }, [productId]);

    return (
        <div className={`flex items-center gap-1.5 px-2 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 w-fit ${className}`}>
            <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            
            {data.type === 0 && (
                <p className="text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-2.5 h-2.5 text-accent fill-accent" />
                    {data.viewing} viewing now
                </p>
            )}
            {data.type === 1 && (
                <p className="text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 text-accent fill-accent" />
                    Trending
                </p>
            )}
            {data.type === 2 && (
                <p className="text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-accent fill-accent" />
                    Low Stock
                </p>
            )}
        </div>
    );
}
