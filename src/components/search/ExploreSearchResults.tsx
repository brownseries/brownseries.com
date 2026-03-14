"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { TRENDING } from "@/app/search/constants";
import HotNowIndicator from "./HotNowIndicator";

interface ExploreSearchResultsProps {
    results: any[];
    query: string;
    activeCategory: string;
    onApplyCategory: (cat: string) => void;
    onSearch: (term: string) => void;
    showResults: boolean;
    showCategoryResults: boolean;
    noResults: boolean;
}

export default function ExploreSearchResults({
    results,
    query,
    activeCategory,
    onApplyCategory,
    onSearch,
    showResults,
    showCategoryResults,
    noResults
}: ExploreSearchResultsProps) {
    if (noResults) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-12">
                <Search className="w-10 h-10 text-foreground/20" strokeWidth={1} />
                <p className="text-2xl text-warm-white font-medium">No results</p>
                <p className="text-[13px] text-foreground/40">
                    Nothing matched &ldquo;{query}&rdquo;
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {TRENDING.map((term) => (
                        <button key={term} onClick={() => onSearch(term)}
                            className="text-[12px] px-4 py-2 bg-surface rounded-full text-foreground/55 active:bg-white/10">
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (!showResults && !showCategoryResults) return null;

    return (
        <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] text-foreground/30 uppercase tracking-widest">
                    {results.length} item{results.length !== 1 ? "s" : ""} {activeCategory !== "All" && `in ${activeCategory}`}
                </p>
                {activeCategory !== "All" && (
                    <button onClick={() => onApplyCategory("All")} className="text-[10px] text-accent font-bold uppercase tracking-widest">
                        Clear Filter
                    </button>
                )}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-left">
                {results.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`}
                        className="group flex flex-col active:scale-[0.97] transition-transform">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface mb-2">
                            <Image src={product.image} alt={product.name} fill sizes="50vw"
                                className="object-cover object-center brightness-90 group-active:brightness-75 transition-all" />
                            <HotNowIndicator productId={product.id} className="absolute bottom-2 left-2 z-10" />
                        </div>
                        <h3 className="text-[13px] text-warm-white font-medium truncate px-1">{product.name}</h3>
                        <p className="text-[12px] text-foreground/50 mt-0.5 px-1">{product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
