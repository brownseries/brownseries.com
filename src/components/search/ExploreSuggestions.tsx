"use client";

import { Clock, TrendingUp } from "lucide-react";
import { TRENDING } from "@/app/search/constants";

interface ExploreSuggestionsProps {
    recent: string[];
    onClearRecent: () => void;
    onSearch: (term: string) => void;
}

export default function ExploreSuggestions({
    recent,
    onClearRecent,
    onSearch
}: ExploreSuggestionsProps) {
    return (
        <div className="flex-1 py-4 flex flex-col gap-6">
            {recent.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] uppercase tracking-widest text-foreground/35 flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> Recent
                        </p>
                        <button onClick={onClearRecent} className="text-[11px] text-foreground/35 active:text-foreground/70">
                            Clear all
                        </button>
                    </div>
                    {recent.map((term) => (
                        <button
                            key={term}
                            onMouseDown={() => onSearch(term)}
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
                        onMouseDown={() => onSearch(term)}
                        className="w-full flex items-center gap-4 py-3 border-b border-white/5 last:border-0 active:bg-white/5 text-left"
                    >
                        <span className="text-[12px] w-4 text-foreground/25 font-medium">{i + 1}</span>
                        <span className="text-[14px] text-foreground/75">{term}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
