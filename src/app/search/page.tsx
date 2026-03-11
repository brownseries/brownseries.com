"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Clock, TrendingUp, ArrowUpRight } from "lucide-react";

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

const CATEGORIES = ["All", "New Arrivals", "Outerwear", "Knitwear", "Bottoms", "Accessories", "Eid"];
const TRENDING = ["Eid Collection", "Linen Coat", "Knitwear", "Accessories", "Winter Wear"];

const RECENT_KEY = "bs_recent_searches";

function getRecent(): string[] {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]"); }
    catch { return []; }
}
function saveRecent(term: string) {
    const prev = getRecent().filter((t) => t !== term);
    localStorage.setItem(RECENT_KEY, JSON.stringify([term, ...prev].slice(0, 5)));
}

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [results, setResults] = useState(ALL_PRODUCTS);
    const [recent, setRecent] = useState<string[]>([]);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setRecent(getRecent());
        setTimeout(() => inputRef.current?.focus(), 100);
    }, []);

    const doSearch = (term: string) => {
        setQuery(term);
        if (term.trim()) {
            saveRecent(term.trim());
            setRecent(getRecent());
            const q = term.toLowerCase();
            setResults(ALL_PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
            ));
        } else {
            setResults(ALL_PRODUCTS);
        }
    };

    const applyCategory = (cat: string) => {
        setActiveCategory(cat);
        if (cat === "All") {
            setResults(ALL_PRODUCTS);
        } else {
            setResults(ALL_PRODUCTS.filter(p =>
                p.tag.toLowerCase().includes(cat.toLowerCase()) ||
                p.name.toLowerCase().includes(cat.toLowerCase())
            ));
        }
        setQuery("");
    };

    const clearSearch = () => {
        setQuery("");
        setResults(ALL_PRODUCTS);
        setActiveCategory("All");
        inputRef.current?.focus();
    };

    const clearRecent = () => {
        localStorage.removeItem(RECENT_KEY);
        setRecent([]);
    };

    const showDefault = !query.trim();
    const showResults = !!query.trim();
    const showEmpty = showResults && results.length === 0;

    // Split products into two columns for staggered masonry effect
    const leftCol = results.filter((_, i) => i % 2 === 0);
    const rightCol = results.filter((_, i) => i % 2 !== 0);

    return (
        <main className="min-h-screen bg-background flex flex-col pb-24">

            {/* ── App-style Search Header ── */}
            <div className="sticky top-0 z-40 bg-background pt-safe-top">
                <div className="px-4 pt-4 pb-3">
                    <h1 className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium mb-3">
                        Discover
                    </h1>
                    {/* Search Bar */}
                    <div className="relative flex items-center gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => doSearch(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                placeholder="Search products, collections…"
                                className="w-full pl-11 pr-10 py-3.5 bg-surface rounded-2xl text-[14px] font-[family-name:var(--font-outfit)] text-warm-white placeholder:text-foreground/30 focus:outline-none transition-all border border-transparent focus:border-white/10"
                            />
                            {query && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-foreground/60"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Category chips — always visible */}
                <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => applyCategory(cat)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-[family-name:var(--font-outfit)] font-medium transition-all ${activeCategory === cat
                                    ? "bg-warm-white text-background"
                                    : "bg-surface text-foreground/60 active:bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Default State ── */}
            {showDefault && (
                <div className="px-4 mt-2 flex flex-col gap-8">

                    {/* Recent Searches */}
                    {recent.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/40 flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" /> Recent
                                </span>
                                <button
                                    onClick={clearRecent}
                                    className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/40 active:text-foreground/70"
                                >
                                    Clear
                                </button>
                            </div>
                            <div className="flex flex-col rounded-2xl overflow-hidden bg-surface divide-y divide-white/5">
                                {recent.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => doSearch(term)}
                                        className="flex items-center justify-between px-4 py-3.5 active:bg-white/5 text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-4 h-4 text-foreground/30 flex-shrink-0" />
                                            <span className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80">
                                                {term}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-foreground/30" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Trending */}
                    <div>
                        <span className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/40 flex items-center gap-1.5 mb-3">
                            <TrendingUp className="w-3 h-3" /> Trending now
                        </span>
                        <div className="flex flex-col rounded-2xl overflow-hidden bg-surface divide-y divide-white/5">
                            {TRENDING.map((term, i) => (
                                <button
                                    key={term}
                                    onClick={() => doSearch(term)}
                                    className="flex items-center justify-between px-4 py-3.5 active:bg-white/5 text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="font-[family-name:var(--font-outfit)] text-[11px] w-5 text-foreground/30 font-medium">
                                            {i + 1}
                                        </span>
                                        <span className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80">
                                            {term}
                                        </span>
                                    </div>
                                    <TrendingUp className="w-3.5 h-3.5 text-foreground/30" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Empty State ── */}
            {showEmpty && (
                <div className="flex flex-col items-center justify-center flex-1 px-8 py-20 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center">
                        <Search className="w-6 h-6 text-foreground/30" />
                    </div>
                    <div>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium mb-1">
                            No results
                        </h2>
                        <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/40">
                            Nothing matched &ldquo;{query}&rdquo;
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                        {TRENDING.map((term) => (
                            <button
                                key={term}
                                onClick={() => doSearch(term)}
                                className="font-[family-name:var(--font-outfit)] text-[12px] px-4 py-2 bg-surface rounded-full text-foreground/60 active:bg-white/10 transition-all"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Results: staggered two-column grid ── */}
            {showResults && !showEmpty && (
                <div className="px-3 pt-4">
                    <p className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/30 mb-4 px-1">
                        {results.length} result{results.length !== 1 ? "s" : ""}
                    </p>
                    <div className="flex gap-3 items-start">
                        {/* Left column */}
                        <div className="flex-1 flex flex-col gap-3">
                            {leftCol.map((product) => (
                                <ProductCard key={product.id} product={product} tall />
                            ))}
                        </div>
                        {/* Right column — offset for stagger */}
                        <div className="flex-1 flex flex-col gap-3 mt-8">
                            {rightCol.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

function ProductCard({ product, tall }: { product: typeof ALL_PRODUCTS[0]; tall?: boolean }) {
    return (
        <Link
            href={`/shop/${product.id}`}
            className="group flex flex-col active:scale-[0.97] transition-transform"
        >
            <div className={`relative w-full overflow-hidden rounded-2xl bg-surface ${tall ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="45vw"
                    className="object-cover object-center brightness-90 group-active:brightness-75 transition-all"
                />
            </div>
            <div className="mt-2 px-1">
                <h3 className="font-[family-name:var(--font-outfit)] text-[13px] text-warm-white font-medium leading-snug line-clamp-2">
                    {product.name}
                </h3>
                <p className="font-[family-name:var(--font-outfit)] text-[12px] text-foreground/50 mt-0.5">
                    {product.price}
                </p>
            </div>
        </Link>
    );
}
