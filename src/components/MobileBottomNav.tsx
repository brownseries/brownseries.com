"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            path: "/home",
            icon: (
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path stroke="none" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            name: "Shop",
            path: "/shop",
            icon: (
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path stroke="none" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            )
        },
        {
            name: "Saved",
            path: "/saved",
            icon: (
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            )
        },
        {
            name: "Profile",
            path: "/profile",
            icon: (
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" stroke="none" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" clipRule="evenodd" /></svg>
            )
        }
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-xl border-t border-white/5 pb-safe z-50">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.path || (pathname === "/" && item.path === "/home");

                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex flex-col items-center justify-center w-full h-full active:opacity-50 transition-colors ${isActive ? "text-warm-white" : "text-foreground/60"
                                }`}
                        >
                            {isActive ? item.activeIcon : item.icon}
                            <span className="text-[10px] font-[family-name:var(--font-outfit)] font-medium">
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}
