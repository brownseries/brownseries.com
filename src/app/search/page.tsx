"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Search, X, Clock, TrendingUp } from "lucide-react";

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

const CATEGORIES = ["All", "New", "Outerwear", "Knitwear", "Bottoms", "Accessories", "Eid"];
const TRENDING = ["Eid Collection", "Linen Coat", "Knitwear", "Accessories", "Winter Wear"];

const BROWSE_CATEGORIES = [
    { label: "New Arrivals", tag: "new", image: "/hero_indian_new_arrivals.png" },
    { label: "Outerwear", tag: "outerwear", image: "/hero.png" },
    { label: "Accessories", tag: "accessories", image: "/hero_indian_accessories.png" },
    { label: "Bottoms", tag: "bottoms", image: "/trending_hijabi_skirt.png" },
    { label: "Eid Collection", tag: "eid", image: "/hero_eid_collection.png" },
    { label: "Essentials", tag: "essentials", image: "/hero_indian_essentials.png" },
];
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
    }, []);

    /* ── helpers ── */
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
        setQuery("");
        setFocused(false);
        inputRef.current?.blur();
        setResults(
            cat === "All"
                ? ALL_PRODUCTS
                : ALL_PRODUCTS.filter(p =>
                    p.tag.toLowerCase().includes(cat.toLowerCase()) ||
                    p.name.toLowerCase().includes(cat.toLowerCase())
                )
        );
    };

    const clearSearch = () => {
        setQuery("");
        setResults(ALL_PRODUCTS);
        setActiveCategory("All");
        inputRef.current?.focus();
    };

    const clearRecent = () => { localStorage.removeItem(RECENT_KEY); setRecent([]); };

    /* derived state */
    const showSuggestions = focused && !query.trim();
    const showResults = !!query.trim();
    const showBrowse = !focused && !query.trim();
    const noResults = showResults && results.length === 0;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* ── Top bar ── */}
            <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-2 flex items-center gap-3">
                    {/* Search input */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => doSearch(e.target.value)}
                            onFocus={() => setFocused(true)}
                            placeholder="Search"
                            className="w-full pl-10 pr-9 py-2.5 bg-surface rounded-xl text-[14px] font-[family-name:var(--font-outfit)] text-warm-white placeholder:text-foreground/35 focus:outline-none transition-all"
                        />
                        {query && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Cancel — slides in on focus */}
                    {(focused || query) && (
                        <button
                            onMouseDown={() => { setFocused(false); clearSearch(); inputRef.current?.blur(); }}
                            className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/60 active:text-warm-white transition-colors flex-shrink-0"
                        >
                            Cancel
                        </button>
                    )}
                </div>

                {/* Category chips */}
                {!focused && (
                    <div className="max-w-7xl mx-auto flex gap-2 px-4 md:px-8 pb-3 overflow-x-auto hide-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => applyCategory(cat)}
                                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-[family-name:var(--font-outfit)] font-medium transition-all ${activeCategory === cat
                                    ? "bg-warm-white text-background"
                                    : "bg-surface text-foreground/55 active:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Single outer wrapper for all body content ── */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col flex-1 pb-24">

                {/* ── Suggestions panel (focused, no text) ── */}
                {showSuggestions && (
                    <div className="flex-1 py-4 flex flex-col gap-6">
                        {recent.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/35 flex items-center gap-1.5">
                                        <Clock className="w-3 h-3" /> Recent
                                    </p>
                                    <button onClick={clearRecent} className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/35 active:text-foreground/70">
                                        Clear all
                                    </button>
                                </div>
                                {recent.map((term) => (
                                    <button
                                        key={term}
                                        onMouseDown={() => doSearch(term)}
                                        className="w-full flex items-center gap-3 py-3 border-b border-white/5 last:border-0 active:bg-white/5 text-left"
                                    >
                                        <Clock className="w-4 h-4 text-foreground/25 flex-shrink-0" />
                                        <span className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/75">{term}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div>
                            <p className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/35 flex items-center gap-1.5 mb-2">
                                <TrendingUp className="w-3 h-3" /> Trending
                            </p>
                            {TRENDING.map((term, i) => (
                                <button
                                    key={term}
                                    onMouseDown={() => doSearch(term)}
                                    className="w-full flex items-center gap-4 py-3 border-b border-white/5 last:border-0 active:bg-white/5 text-left"
                                >
                                    <span className="font-[family-name:var(--font-outfit)] text-[12px] w-4 text-foreground/25 font-medium">{i + 1}</span>
                                    <span className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/75">{term}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Browse by Category (default blank state) ── */}
                {showBrowse && (
                    <div className="pt-2">
                        <p className="font-[family-name:var(--font-outfit)] text-[11px] uppercase tracking-widest text-foreground/35 mb-4">
                            Browse by Category
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {BROWSE_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.label}
                                    onClick={() => applyCategory(cat.tag)}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface active:scale-[0.97] transition-transform text-left"
                                >
                                    <Image
                                        src={cat.image}
                                        alt={cat.label}
                                        fill
                                        sizes="50vw"
                                        className="object-cover object-center brightness-75"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <span className="absolute bottom-3 left-3 font-[family-name:var(--font-outfit)] text-[13px] text-white font-semibold tracking-wide">
                                        {cat.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Search results ── */}
                {showResults && !noResults && (
                    <div className="pt-2">
                        <p className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/30 mb-3 uppercase tracking-widest">
                            {results.length} item{results.length !== 1 ? "s" : ""}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {results.map((product) => (
                                <Link key={product.id} href={`/shop/${product.id}`}
                                    className="group flex flex-col active:scale-[0.97] transition-transform">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface mb-2">
                                        <Image src={product.image} alt={product.name} fill sizes="50vw"
                                            className="object-cover object-center brightness-90 group-active:brightness-75 transition-all" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-outfit)] text-[13px] text-warm-white font-medium truncate px-1">{product.name}</h3>
                                    <p className="font-[family-name:var(--font-outfit)] text-[12px] text-foreground/50 mt-0.5 px-1">{product.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Empty state ── */}
                {noResults && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                        <Search className="w-10 h-10 text-foreground/20" strokeWidth={1} />
                        <p className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium">No results</p>
                        <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/40">
                            Nothing matched &ldquo;{query}&rdquo;
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mt-3">
                            {TRENDING.map((term) => (
                                <button key={term} onClick={() => doSearch(term)}
                                    className="font-[family-name:var(--font-outfit)] text-[12px] px-4 py-2 bg-surface rounded-full text-foreground/55 active:bg-white/10">
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

            </div>{/* end outer wrapper */}
        </div>
    );
}
