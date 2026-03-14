"use client";

import Image from "next/image";
import { COMMUNITY_BOARDS } from "@/app/search/constants";

export default function ExploreMoodBoards() {
    return (
        <section className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                    Community Mood Boards
                </p>
                <button className="text-[10px] text-accent font-bold uppercase tracking-widest">See All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x">
                {COMMUNITY_BOARDS.map((board) => (
                    <button
                        key={board.id}
                        className="relative flex-shrink-0 w-[80vw] md:w-[260px] flex flex-col gap-3 group snap-center"
                    >
                        <div className="grid grid-cols-5 gap-1 aspect-square rounded-[32px] overflow-hidden bg-surface shadow-sm">
                            {/* Left (60%) */}
                            <div className="col-span-3 relative h-full">
                                <Image src={board.images[0]} alt="m1" fill className="object-cover" />
                            </div>
                            {/* Right (40%) */}
                            <div className="col-span-2 grid grid-rows-2 gap-1 h-full">
                                <div className="relative">
                                    <Image src={board.images[1]} alt="m2" fill className="object-cover" />
                                </div>
                                <div className="relative">
                                    <Image src={board.images[2]} alt="m3" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5 px-0.5">
                            <h4 className="text-[14px] text-warm-white font-semibold text-left">{board.title}</h4>
                            <div className="flex items-center justify-between">
                                <p className="text-[11px] text-foreground/45">by {board.creator}</p>
                                <span className="text-[10px] text-accent font-bold tracking-wider uppercase">{board.items} Items</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
