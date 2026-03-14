"use client";

import Image from "next/image";
import { BROWSE_CATEGORIES } from "@/app/search/constants";

interface ExploreCategoryListProps {
    onSelectCategory: (tag: string) => void;
}

export default function ExploreCategoryList({ onSelectCategory }: ExploreCategoryListProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                    Browse by Category
                </p>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                {BROWSE_CATEGORIES.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => onSelectCategory(cat.tag)}
                        className="flex-shrink-0 group flex flex-col items-center gap-3"
                    >
                        <div className={`relative w-24 h-24 rounded-full overflow-hidden ${cat.color} active:scale-95 transition-all`}>
                            <Image
                                src={cat.image}
                                alt={cat.label}
                                fill
                                sizes="100px"
                                className="object-cover object-center brightness-90 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-[12px] text-foreground/60 font-medium tracking-tight">
                            {cat.label}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}
