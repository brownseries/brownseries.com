"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HIERARCHICAL_CATEGORIES } from "@/app/search/constants";

interface ExploreCategoryDropdownsProps {
    onSelectCategory: (tag: string) => void;
}

export default function ExploreCategoryDropdowns({ onSelectCategory }: ExploreCategoryDropdownsProps) {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <section className="px-1">
            <h2 className="text-[20px] text-warm-white font-bold mb-4">
                Categories
            </h2>
            <div className="flex flex-col gap-2">
                {HIERARCHICAL_CATEGORIES.map((cat) => {
                    const isOpen = openCategory === cat.category;
                    return (
                        <div key={cat.category} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                            <button
                                onClick={() => toggleCategory(cat.category)}
                                className="w-full flex items-center justify-between p-4 text-warm-white hover:bg-white/[0.02] transition-colors"
                            >
                                <span className="font-semibold text-lg">{cat.category}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <div 
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-4 pt-0 flex flex-wrap gap-2">
                                        {cat.subcategories.map((sub) => (
                                            <button
                                                key={sub.label}
                                                onClick={() => onSelectCategory(sub.tag)}
                                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-foreground transition-colors active:scale-95"
                                            >
                                                {sub.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
