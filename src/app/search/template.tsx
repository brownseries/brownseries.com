"use client";

import MobileBottomNav from "@/components/MobileBottomNav";

// Override root template — no Footer on the search screen
export default function SearchTemplate({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <MobileBottomNav />
        </>
    );
}
