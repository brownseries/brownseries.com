"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { CATEGORIES } from "@/app/search/constants";
import { motion, AnimatePresence } from "framer-motion";

const PLACEHOLDERS = [
    "'modest outfits'",
    "'men'",
    "'women'",
    "'eid'",
    "'onam'",
    "'abayas'",
];

interface ExploreSearchHeaderProps {
    query: string;
    setQuery: (query: string) => void;
    focused: boolean;
    setFocused: (focused: boolean) => void;
    onCancel: () => void;
    onClear: () => void;
    activeCategory: string;
    onSelectCategory: (cat: string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    doSearch: (term: string) => void;
}

export default function ExploreSearchHeader({
    query,
    focused,
    setFocused,
    onCancel,
    onClear,
    activeCategory,
    onSelectCategory,
    inputRef,
    doSearch
}: ExploreSearchHeaderProps) {
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        if (focused || query) return;

        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [focused, query]);

    return (
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2 flex items-center gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => doSearch(e.target.value)}
                        onFocus={() => setFocused(true)}
                        placeholder={focused ? "Search" : ""}
                        className="w-full pl-10 pr-9 py-2.5 bg-surface rounded-xl text-[14px] text-warm-white placeholder:text-foreground/35 focus:outline-none transition-all duration-500 ease-in-out"
                    />
                    {!focused && !query && (
                        <div className="absolute left-10 right-9 top-0 bottom-0 flex items-center pointer-events-none overflow-hidden overflow-y-hidden text-[14px] text-foreground/35 gap-1">
                            <span>Search for</span>
                            <div className="relative flex-1 h-full flex items-center">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={placeholderIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute"
                                    >
                                        {PLACEHOLDERS[placeholderIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                    {query && (
                        <button
                            onClick={onClear}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {(focused || query) && (
                    <button
                        onMouseDown={onCancel}
                        className="text-[14px] text-foreground/60 active:text-warm-white transition-colors flex-shrink-0"
                    >
                        Cancel
                    </button>
                )}
            </div>

            {/* {!focused && (
                <div className="max-w-7xl mx-auto flex gap-2 px-4 md:px-8 pt-2 pb-3 overflow-x-auto hide-scrollbar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelectCategory(cat)}
                            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all ${activeCategory === cat
                                ? "bg-warm-white text-background"
                                : "bg-surface text-foreground/55 active:bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )} */}
        </div>
    );
}
