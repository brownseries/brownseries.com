"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ALL_PRODUCTS, TRENDING } from "./constants";

// Modular Components
import ExploreSearchHeader from "@/components/search/ExploreSearchHeader";
import ExploreSuggestions from "@/components/search/ExploreSuggestions";
import ExploreFeaturedCollections from "@/components/search/ExploreFeaturedCollections";
import ExploreCategoryList from "@/components/search/ExploreCategoryList";
import ExploreMoodBoards from "@/components/search/ExploreMoodBoards";
import ExploreSpotlight from "@/components/search/ExploreSpotlight";
import ShopTheLook from "@/components/search/ShopTheLook";
import ExploreStyleQuiz from "@/components/search/ExploreStyleQuiz";
import ExploreSearchResults from "@/components/search/ExploreSearchResults";
import HotNowIndicator from "@/components/search/HotNowIndicator";

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
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
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
    const showBrowse = !focused && !query.trim() && activeCategory === "All";
    const showCategoryResults = !focused && !query.trim() && activeCategory !== "All";
    const showResults = !!query.trim();
    const noResults = (showResults || showCategoryResults) && results.length === 0;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* ── Top bar component ── */}
            <ExploreSearchHeader
                query={query}
                setQuery={setQuery}
                focused={focused}
                setFocused={setFocused}
                activeCategory={activeCategory}
                onSelectCategory={applyCategory}
                onCancel={() => { setFocused(false); clearSearch(); inputRef.current?.blur(); }}
                onClear={clearSearch}
                inputRef={inputRef}
                doSearch={doSearch}
            />

            {/* ── Main content area ── */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col flex-1 pb-24">

                {/* Suggestions overlay */}
                {showSuggestions && (
                    <ExploreSuggestions
                        recent={recent}
                        onClearRecent={clearRecent}
                        onSearch={doSearch}
                    />
                )}

                {/* Discovery sections */}
                {showBrowse && (
                    <div className="pt-6 flex flex-col gap-14">
                        <ExploreMoodBoards />
                        <ExploreFeaturedCollections />
                        <ExploreCategoryList onSelectCategory={applyCategory} />
                        <ExploreSpotlight />
                        <ExploreStyleQuiz />
                        <ShopTheLook
                            activeHotspot={activeHotspot}
                            setActiveHotspot={setActiveHotspot}
                        />

                        {/* Discover More / Trending Drops */}
                        <section className="border-t border-white/5 pt-10">
                            <h2 className="text-[20px] font-[family-name:var(--font-cormorant)] text-warm-white font-bold mb-6">
                                Discover More
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {ALL_PRODUCTS.slice(4, 8).map((product) => (
                                    <Link key={product.id} href={`/shop/${product.id}`}
                                        className="group flex flex-col active:scale-[0.98] transition-transform">
                                        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-surface mb-3">
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                                className="object-cover object-center brightness-90 group-hover:scale-110 transition-all duration-700"
                                            />
                                            <HotNowIndicator productId={product.id} className="absolute bottom-3 left-3 z-10 scale-90 origin-bottom-left" />
                                        </div>
                                        <h3 className="text-sm text-warm-white font-medium truncate mb-0.5">{product.name}</h3>
                                        <p className="text-xs text-foreground/40 font-bold">{product.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* Grid Results (Search and Categories) */}
                <ExploreSearchResults
                    results={results}
                    query={query}
                    activeCategory={activeCategory}
                    onApplyCategory={applyCategory}
                    onSearch={doSearch}
                    showResults={showResults}
                    showCategoryResults={showCategoryResults}
                    noResults={noResults}
                />

            </div>
        </div>
    );
}
