"use client";

import { BROWSE_CATEGORIES } from "@/app/search/constants";

interface ExploreCategoryListProps {
    onSelectCategory: (tag: string) => void;
}

export default function ExploreCategoryList({ onSelectCategory }: ExploreCategoryListProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-4 mt-2 px-1">
                <p className="text-[14px] font-medium text-warm-white">
                    Browse Categories
                </p>
            </div>
            <div className="flex flex-wrap gap-2 px-1">
                {BROWSE_CATEGORIES.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => onSelectCategory(cat.tag)}
                        className="px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-foreground hover:bg-white/10 transition-colors active:scale-95"
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </section>
    );
}
