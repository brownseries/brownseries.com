"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { Heart, MessageCircle } from "lucide-react";

export default function InstagramExploreGrid({ products }: { products: Product[] }) {
    // Generate an extended array to ensure the grid has enough items to loop the layout pattern
    const displayItems = [...products, ...products, ...products, ...products].slice(0, 24);

    const getGridClasses = (index: number) => {
        // Instagram-style explore grid pattern of 10 items
        const pattern = index % 10;
        
        // Items taking 2x2 spots
        if (pattern === 0) return "col-span-2 row-span-2 aspect-square"; 
        if (pattern === 9) return "col-span-2 row-span-2 aspect-square";

        // Normal 1x1 items
        return "col-span-1 row-span-1 aspect-square";
    };

    return (
        <div className="w-full">
            <h2 className="text-[20px] text-warm-white font-bold mb-4 px-1">
                Explore
            </h2>
            <div className="grid grid-cols-3 gap-1 md:gap-1.5 grid-flow-row-dense">
                {displayItems.map((product, i) => (
                    <Link
                        key={`${product.id}-${i}`}
                        href={`/shop/${product.id}`}
                        className={`relative group bg-muted/20 overflow-hidden ${getGridClasses(i)}`}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 33vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-200 z-10">
                            <div className="flex items-center gap-1.5 text-white text-sm md:text-base font-bold">
                                <Heart className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                                <span>{(product.id * 127) % 999}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-white text-sm md:text-base font-bold">
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                                <span>{(product.id * 19) % 99}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
