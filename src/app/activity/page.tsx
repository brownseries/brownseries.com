import Navbar from "@/components/Navbar";
import { Bell, Heart, Bookmark, ShoppingBag, Tag } from "lucide-react";

const ACTIVITY = [
    {
        id: 1,
        type: "save",
        icon: Bookmark,
        accent: "text-accent",
        bg: "bg-accent/10",
        text: "Your saved look **Eid Collection** is trending — 2.1k saves this week",
        time: "2m ago",
    },
    {
        id: 2,
        type: "drop",
        icon: Tag,
        accent: "text-emerald-400",
        bg: "bg-emerald-400/10",
        text: "New drop: **Winter Collection 2026** is now available",
        time: "1h ago",
    },
    {
        id: 3,
        type: "like",
        icon: Heart,
        accent: "text-red-400",
        bg: "bg-red-400/10",
        text: "**47 people** liked the Everyday Essentials look you saved",
        time: "3h ago",
    },
    {
        id: 4,
        type: "restock",
        icon: ShoppingBag,
        accent: "text-amber-400",
        bg: "bg-amber-400/10",
        text: "**Oversized Linen Coat** in your saved items is back in stock",
        time: "5h ago",
    },
    {
        id: 5,
        type: "save",
        icon: Bookmark,
        accent: "text-accent",
        bg: "bg-accent/10",
        text: "**Modern Silhouettes** is now one of the most saved looks this month",
        time: "Yesterday",
    },
    {
        id: 6,
        type: "drop",
        icon: Tag,
        accent: "text-emerald-400",
        bg: "bg-emerald-400/10",
        text: "Exclusive early access: **Eid 2026 Collection** drops in 3 days",
        time: "Yesterday",
    },
];

function renderText(text: string) {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1
            ? <span key={i} className="text-warm-white font-medium">{part}</span>
            : <span key={i}>{part}</span>
    );
}

export default function ActivityPage() {
    return (
        <main className="min-h-screen bg-background pb-24">
            <Navbar />

            <div className="max-w-xl mx-auto px-4 pt-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <Bell className="w-5 h-5 text-foreground/50" strokeWidth={1.5} />
                    <h1 className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium">
                        Activity
                    </h1>
                </div>

                {/* Feed */}
                <div className="flex flex-col gap-1">
                    {ACTIVITY.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex items-start gap-4 px-4 py-4 rounded-2xl hover:bg-white/3 active:bg-white/5 transition-colors"
                            >
                                {/* Icon bubble */}
                                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${item.bg}`}>
                                    <Icon size={16} className={item.accent} strokeWidth={1.5} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/70 leading-relaxed">
                                        {renderText(item.text)}
                                    </p>
                                    <span className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/35 mt-1 block">
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
