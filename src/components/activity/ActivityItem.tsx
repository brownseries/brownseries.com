"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
    item: {
        id: number;
        type: string;
        icon: LucideIcon;
        accent: string;
        bg: string;
        text: string;
        time: string;
        image?: string;
        actionLabel?: string;
        isLive?: boolean;
    };
}

function renderText(text: string) {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1
            ? <span key={i} className="text-warm-white font-bold">{part}</span>
            : <span key={i}>{part}</span>
    );
}

export default function ActivityItem({ item }: ActivityItemProps) {
    const Icon = item.icon;

    return (
        <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex gap-4 p-4 rounded-[24px] hover:bg-white/3 active:bg-white/5 transition-all border border-transparent hover:border-white/5"
        >
            {/* Icon & Live Indicator */}
            <div className="relative flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg} backdrop-blur-md`}>
                    <Icon size={20} className={item.accent} strokeWidth={1.5} />
                </div>
                {item.isLive && (
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col pt-1">
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[13.5px] text-foreground/75 leading-relaxed">
                        {renderText(item.text)}
                    </p>
                    {item.image && (
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-surface border border-white/10 shadow-lg">
                            <Image src={item.image} alt="Activity" width={56} height={56} className="object-cover h-full" />
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 mt-3">
                    <span className="text-[11px] text-foreground/35 font-medium">
                        {item.time}
                    </span>
                    {item.actionLabel && (
                        <>
                            <div className="w-1 h-1 rounded-full bg-white/10" />
                            <button className="text-[10px] text-accent font-bold uppercase tracking-widest hover:text-warm-white transition-colors">
                                {item.actionLabel}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
