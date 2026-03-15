"use client";

import { createElement } from "react";
import * as icons from "lucide-react";
import { GRID_CATEGORIES } from "@/app/search/constants";

interface ExploreCategoryCardsProps {
    onSelectCategory: (tag: string) => void;
}

export default function ExploreCategoryCards({ onSelectCategory }: ExploreCategoryCardsProps) {
    return (
        <section className="px-1">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[20px] text-warm-white font-bold">
                    Top categories
                </h2>
                <button className="text-[13px] text-foreground/60 hover:text-warm-white transition-colors flex items-center gap-1">
                    See all categories
                    <icons.ChevronRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {GRID_CATEGORIES.map((cat) => {
                    const IconComponent = (icons as any)[cat.iconName];

                    return (
                        <button
                            key={cat.title}
                            onClick={() => onSelectCategory(cat.tag)}
                            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.04] active:scale-[0.98] transition-all text-left group"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${cat.color} group-hover:scale-105 transition-transform`}>
                                {IconComponent && <IconComponent className="w-6 h-6" strokeWidth={1.5} />}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-[14px] font-semibold text-warm-white mb-0.5 truncate">
                                    {cat.title}
                                </h3>
                                <p className="text-[12px] text-foreground/45 truncate">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
