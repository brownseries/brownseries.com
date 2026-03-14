"use client";

import Image from "next/image";
import { SPOTLIGHT } from "@/app/search/constants";

export default function ExploreSpotlight() {
    return (
        <section className="bg-surface/40 rounded-[40px] p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-accent/20 p-1 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image
                            src={SPOTLIGHT.image}
                            alt={SPOTLIGHT.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
                    Curator Spotlight
                </span>
                <h3 className="text-2xl  text-warm-white font-bold mb-3">
                    &ldquo;{SPOTLIGHT.quote}&rdquo;
                </h3>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-foreground/80 font-medium">{SPOTLIGHT.name}</span>
                    <span className="text-[11px] text-foreground/40">{SPOTLIGHT.role} • {SPOTLIGHT.lookCount} Looks</span>
                </div>
                <button className="mt-6 px-8 py-2.5 bg-warm-white text-background rounded-full text-xs font-bold active:scale-95 transition-all">
                    Visit Profile
                </button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
        </section>
    );
}
