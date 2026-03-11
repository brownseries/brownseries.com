"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Search, X, Clock, TrendingUp, ArrowRight } from "lucide-react";

const ALL_PRODUCTS = [
    { id: 1, name: "Everyday Essentials", price: "₹180", image: "/hero_indian_essentials.png", tag: "essentials" },
    { id: 2, name: "Winter Collection", price: "₹320", image: "/hero_indian_winter.png", tag: "winter" },
    { id: 3, name: "Premium Accessories", price: "₹240", image: "/hero_indian_accessories.png", tag: "accessories" },
    { id: 4, name: "Modern Silhouettes", price: "₹450", image: "/hero_indian_new_arrivals.png", tag: "new" },
    { id: 5, name: "Eid Collection", price: "₹560", image: "/hero_eid_collection.png", tag: "eid" },
    { id: 6, name: "Textured Midi Skirt", price: "₹240", image: "/trending_hijabi_skirt.png", tag: "bottoms" },
    { id: 7, name: "Oversized Linen Coat", price: "₹450", image: "/hero.png", tag: "outerwear" },
    { id: 8, name: "Classic Leather Tote", price: "₹560", image: "/hero-2.png", tag: "accessories" },
];

const TRENDING = ["Eid Collection", "Linen Coat", "Knitwear", "Accessories"];

const RECENT_KEY = "bs_recent_searches";

function getRecent(): string[] {
    try {
        return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveRecent(term: string) {
    const prev = getRecent().filter((t) => t !== term);
    localStorage.setItem(RECENT_KEY, JSON.stringify([term, ...prev].slice(0, 6)));
}

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(ALL_PRODUCTS);
    const [recent, setRecent] = useState<string[]>([]);
    const [searched, setSearched] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setRecent(getRecent());
        // Auto-focus on mount
        inputRef.current?.focus();
    }, []);

    const doSearch = (term: string) => {
        setQuery(term);
        setSearched(true);
        if (term.trim()) {
            saveRecent(term.trim());
            setRecent(getRecent());
            const q = term.toLowerCase();
            setResults(
                ALL_PRODUCTS.filter(
                    (p) => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
                )
            );
        } else {
            setResults(ALL_PRODUCTS);
        }
    };

    const clearSearch = () => {
        setQuery("");
        setSearched(false);
        setResults(ALL_PRODUCTS);
        inputRef.current?.focus();
    };

    const clearRecent = () => {
        localStorage.removeItem(RECENT_KEY);
        setRecent([]);
    };

    const showEmpty = searched && query.trim() && results.length === 0;
    const showResults = searched && query.trim() && results.length > 0;
    const showDefault = !searched || !query.trim();

    return (
        <main className="min-h-screen bg-background pb-24 flex flex-col">
            <Navbar />

            {/* Search Header */}
            <div className="sticky top-[56px] md:top-[64px] z-40 bg-background/95 backdrop-blur-xl border-b border-white/5 px-4 py-3">
                <div className="relative flex items-center gap-3 max-w-2xl mx-auto">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => doSearch(e.target.value)}
                            placeholder="Search products, collections…"
                            className="w-full pl-11 pr-10 py-3 bg-surface/80 border border-white/5 rounded-2xl text-[14px] font-[family-name:var(--font-outfit)] text-warm-white placeholder:text-foreground/30 focus:outline-none focus:border-white/20 focus:bg-surface transition-all"
                        />
                        {query && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-foreground/40 hover:text-foreground/80 transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">

                {/* Default State: Recents + Trending */}
                {showDefault && (
                    <>
                        {/* Recent Searches */}
                        {recent.length > 0 && (
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5" />
                                        Recent
                                    </span>
                                    <button
                                        onClick={clearRecent}
                                        className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors"
                                    >
                                        Clear
                                    </button>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    {recent.map((term) => (
                                        <button
                                            key={term}
                                            onClick={() => doSearch(term)}
                                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 active:bg-white/5 transition-colors text-left group"
                                        >
                                            <span className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/70 group-hover:text-warm-white transition-colors">
                                                {term}
                                            </span>
                                            <ArrowRight className="w-3.5 h-3.5 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Trending */}
                        <div>
                            <span className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/40 flex items-center gap-2 mb-3">
                                <TrendingUp className="w-3.5 h-3.5" />
                                Trending
                            </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {TRENDING.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => doSearch(term)}
                                        className="font-[family-name:var(--font-outfit)] text-[12px] px-4 py-2 bg-surface border border-white/5 rounded-full text-foreground/70 hover:text-warm-white hover:border-white/15 active:bg-white/10 transition-all"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Empty State */}
                {showEmpty && (
                    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-2">
                            <Search className="w-7 h-7 text-foreground/30" />
                        </div>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium">
                            No results found
                        </h2>
                        <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/50 max-w-xs">
                            We couldn't find anything for &quot;{query}&quot;. Try a different term.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mt-2">
                            {TRENDING.map((term) => (
                                <button
                                    key={term}
                                    onClick={() => doSearch(term)}
                                    className="font-[family-name:var(--font-outfit)] text-[12px] px-4 py-2 bg-surface border border-white/5 rounded-full text-foreground/60 hover:text-warm-white hover:border-white/15 transition-all"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Results Grid */}
                {showResults && (
                    <>
                        <p className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/40 mb-4">
                            {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {results.map((product) => (
                                <Link
                                    href={`/shop/${product.id}`}
                                    key={product.id}
                                    className="group flex flex-col active:scale-[0.97] transition-transform"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface mb-2">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 50vw, 25vw"
                                            className="object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-outfit)] text-[13px] text-warm-white font-medium truncate">
                                        {product.name}
                                    </h3>
                                    <p className="font-[family-name:var(--font-outfit)] text-[12px] text-foreground/50 mt-0.5">
                                        {product.price}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
