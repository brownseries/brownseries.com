"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { PERSONAL_BOARDS } from "@/app/search/constants";

export default function SavedCollections() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Create New Board */}
            <button className="flex items-center gap-6 p-6 rounded-[40px] bg-surface/30 border-2 border-dashed border-white/5 hover:border-accent/40 transition-all group">
                <div className="w-24 h-24 rounded-[24px] bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Plus className="w-8 h-8 text-warm-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-left">
                    <h3 className="text-lg text-warm-white font-bold mb-1">New Collection</h3>
                    <p className="text-[13px] text-foreground/40">Curate a new mood board</p>
                </div>
            </button>

            {/* Personal Boards */}
            {PERSONAL_BOARDS.map((board) => (
                <button key={board.id} className="flex items-center gap-6 p-6 rounded-[40px] bg-surface/30 border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative">
                    <div className="flex-shrink-0 w-24 h-24 rounded-[24px] overflow-hidden bg-surface relative grid grid-cols-2 gap-0.5">
                        <div className="relative h-full">
                            <Image src={board.images[0]} alt="b1" fill className="object-cover" />
                        </div>
                        <div className="grid grid-rows-2 gap-0.5 h-full">
                            <div className="relative h-full">
                                <Image src={board.images[1]} alt="b2" fill className="object-cover" />
                            </div>
                            <div className="relative h-full">
                                <Image src={board.images[2]} alt="b3" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col text-left z-10">
                        <h3 className="text-lg text-warm-white font-bold mb-1">{board.title}</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-accent font-bold uppercase tracking-widest">{board.items} Items</span>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-[11px] text-foreground/40 font-medium">Personal</span>
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            ))}
        </div>
    );
}
