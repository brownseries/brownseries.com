"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import HotNowIndicator from "@/components/search/HotNowIndicator";

interface SavedGridItemProps {
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
    };
}

export default function SavedGridItem({ product }: SavedGridItemProps) {
    return (
        <div className="group relative flex flex-col bg-surface/30 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all p-3">
            <Link href={`/shop/${product.id}`} className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000" 
                />
                
                {/* Hot Now Signal */}
                <HotNowIndicator productId={product.id} className="absolute bottom-3 left-3 z-10" />
                
                {/* Heart Button Overlay */}
                <button className="absolute top-3 right-3 p-2 bg-black/20 backdrop-blur-md rounded-full text-warm-white hover:bg-accent transition-all z-10 border border-white/10">
                    <Heart className="w-4 h-4 fill-warm-white text-warm-white" />
                </button>
            </Link>

            <div className="flex flex-col gap-1 px-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-[14px] text-warm-white font-medium truncate pr-2">{product.name}</h3>
                    <span className="text-[13px] text-warm-white font-bold">{product.price}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">In 12 Boards</span>
                    <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <button className="w-full py-2.5 rounded-xl bg-warm-white text-background text-[10px] font-bold uppercase tracking-widest active:scale-95 transition-all">
                        Move to Bag
                    </button>
                    <button className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground/60 text-[10px] font-bold uppercase tracking-widest hover:text-warm-white active:scale-95 transition-all">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
