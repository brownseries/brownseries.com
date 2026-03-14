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
    { label: "New Arrivals", tag: "new", image: "/hero_indian_new_arrivals.png", color: "bg-[#7A5A40]" },
    { label: "Outerwear", tag: "outerwear", image: "/hero.png", color: "bg-[#4A3728]" },
    { label: "Accessories", tag: "accessories", image: "/hero_indian_accessories.png", color: "bg-[#9B6B43]" },
    { label: "Bottoms", tag: "bottoms", image: "/trending_hijabi_skirt.png", color: "bg-[#5D4037]" },
    { label: "Eid Collection", tag: "eid", image: "/hero_eid_collection.png", color: "bg-[#8D6E63]" },
    { label: "Essentials", tag: "essentials", image: "/hero_indian_essentials.png", color: "bg-[#3E2723]" },
];

const FEATURED_COLLECTIONS = [
    { id: "eid-glow", title: "Eid Glow '26", items: 24, image: "/hero_eid_collection.png", color: "from-[#9B6B43] to-[#D2B48C]" },
    { id: "monochrome", title: "The Monochrome Edit", items: 18, image: "/hero.png", color: "from-[#2C2C2C] to-[#4A4A4A]" },
    { id: "linen-luxury", title: "Linen Luxury", items: 12, image: "/hero_indian_essentials.png", color: "from-[#D2B48C] to-[#E5D3B3]" },
];

const SPOTLIGHT = {
    name: "Zahra Ahmed",
    role: "Senior Curator",
    image: "/hero_indian_winter.png",
    quote: "Modesty is not about hiding, it's about revealing your dignity.",
    lookCount: 42
};

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
                            className="w-full pl-10 pr-9 py-2.5 bg-surface rounded-xl text-[14px] text-warm-white placeholder:text-foreground/35 focus:outline-none transition-all"
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
                            className="text-[14px] text-foreground/60 active:text-warm-white transition-colors flex-shrink-0"
                        >
                            Cancel
                        </button>
                    )}
                </div>

                {/* Category chips */}
                {!focused && (
                    <div className="max-w-7xl mx-auto flex gap-2 px-4 md:px-8 pt-2 pb-3 overflow-x-auto hide-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => applyCategory(cat)}
                                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all ${activeCategory === cat
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
                                    <p className="text-[11px] uppercase tracking-widest text-foreground/35 flex items-center gap-1.5">
                                        <Clock className="w-3 h-3" /> Recent
                                    </p>
                                    <button onClick={clearRecent} className="text-[11px] text-foreground/35 active:text-foreground/70">
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
                                        <span className="text-[14px] text-foreground/75">{term}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div>
                            <p className="text-[11px] uppercase tracking-widest text-foreground/35 flex items-center gap-1.5 mb-2">
                                <TrendingUp className="w-3 h-3" /> Trending
                            </p>
                            {TRENDING.map((term, i) => (
                                <button
                                    key={term}
                                    onMouseDown={() => doSearch(term)}
                                    className="w-full flex items-center gap-4 py-3 border-b border-white/5 last:border-0 active:bg-white/5 text-left"
                                >
                                    <span className="text-[12px] w-4 text-foreground/25 font-medium">{i + 1}</span>
                                    <span className="text-[14px] text-foreground/75">{term}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Browse & Discovery (default blank state) ── */}
                {showBrowse && (
                    <div className="pt-2 flex flex-col gap-10">
                        {/* Featured High-Impact Section */}
                        <section>
                            <p className="text-[11px] uppercase tracking-widest text-foreground/35 mb-4">
                                Featured Collections
                            </p>
                            <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x">
                                {FEATURED_COLLECTIONS.map((col) => (
                                    <button
                                        key={col.id}
                                        className="relative flex-shrink-0 w-[280px] aspect-[16/10] overflow-hidden rounded-[32px] bg-surface snap-center active:scale-[0.98] transition-all"
                                    >
                                        <Image
                                            src={col.image}
                                            alt={col.title}
                                            fill
                                            className="object-cover object-center brightness-[0.85]"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${col.color} opacity-40 mix-blend-multiply`} />
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold mb-1">
                                                {col.items} Items
                                            </span>
                                            <h3 className="text-xl text-white font-bold leading-tight">
                                                {col.title}
                                            </h3>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Horizontal Categories */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                                    Browse by Category
                                </p>
                            </div>
                            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                                {BROWSE_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.label}
                                        onClick={() => applyCategory(cat.tag)}
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

                        {/* Designer Spotlight / Curator Box */}
                        <section className="bg-surface/40 rounded-[40px] p-8 relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full border-2 border-accent/20 p-1 mb-4">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <Image 
                                            src={SPOTLIGHT.image} 
                                            alt={SPOTLIGHT.name} 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
                                    Curator Spotlight
                                </span>
                                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-warm-white italic font-bold mb-3">
                                    &ldquo;{SPOTLIGHT.quote}&rdquo;
                                </h3>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-foreground/80 font-medium">{SPOTLIGHT.name}</span>
                                    <span className="text-[11px] text-foreground/40">{SPOTLIGHT.role} • {SPOTLIGHT.lookCount} Looks</span>
                                </div>
                                <button className="mt-6 px-8 py-2.5 bg-warm-white text-background rounded-full text-xs font-bold active:scale-95 transition-all">
                                    Visit Profile
                                </button>
                            </div>
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all duration-700" />
                        </section>

                        {/* Shop the Look / Editorial Card */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                                    Shop the Look
                                </p>
                                <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Seasonal Edit</span>
                            </div>
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden group">
                                <Image 
                                    src="/hero_indian_winter.png" 
                                    alt="Winter Shop the Look" 
                                    fill 
                                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h4 className="text-2xl font-[family-name:var(--font-cormorant)] text-white italic font-bold mb-4">
                                        Winter Minimalism
                                    </h4>
                                    <div className="flex gap-2">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex items-center gap-3 border border-white/10">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                                                <Image src="/hero_indian_winter.png" alt="item" fill className="object-cover" />
                                            </div>
                                            <div className="pr-4">
                                                <p className="text-[10px] text-white/60">Knit Sweater</p>
                                                <p className="text-xs text-white font-bold">₹320</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Trending Drops Section (Grid) */}
                        <section>
                            <p className="text-[11px] uppercase tracking-widest text-foreground/35 mb-4">
                                Discover More
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {ALL_PRODUCTS.slice(4, 8).map((product) => (
                                    <Link key={product.id} href={`/shop/${product.id}`}
                                        className="group flex flex-col active:scale-[0.98] transition-transform">
                                        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-surface mb-3">
                                            <Image src={product.image} alt={product.name} fill sizes="50vw"
                                                className="object-cover object-center brightness-90 group-hover:scale-110 transition-all duration-700" />
                                        </div>
                                        <h3 className="text-sm text-warm-white font-medium truncate mb-0.5">{product.name}</h3>
                                        <p className="text-xs text-foreground/40 font-bold">{product.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* ── Search results ── */}
                {showResults && !noResults && (
                    <div className="pt-2">
                        <p className="text-[11px] text-foreground/30 mb-3 uppercase tracking-widest">
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
                                    <h3 className="text-[13px] text-warm-white font-medium truncate px-1">{product.name}</h3>
                                    <p className="text-[12px] text-foreground/50 mt-0.5 px-1">{product.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Empty state ── */}
                {noResults && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                        <Search className="w-10 h-10 text-foreground/20" strokeWidth={1} />
                        <p className="text-2xl text-warm-white font-medium">No results</p>
                        <p className="text-[13px] text-foreground/40">
                            Nothing matched &ldquo;{query}&rdquo;
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mt-3">
                            {TRENDING.map((term) => (
                                <button key={term} onClick={() => doSearch(term)}
                                    className="text-[12px] px-4 py-2 bg-surface rounded-full text-foreground/55 active:bg-white/10">
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
