"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, User, Bookmark } from "lucide-react";

const NAV_ITEMS = [
    { name: "Home", path: "/", Icon: Home },
    { name: "Explore", path: "/search", Icon: Search },
    { name: "Saved", path: "/saved", Icon: Bookmark },
    { name: "Activity", path: "/activity", Icon: Bell },
    { name: "Profile", path: "/profile", Icon: User },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    const isBlackBg = pathname === "/" || pathname === "/login";

    return (
        <nav className={`md:hidden fixed bottom-0 left-0 right-0 z-50 border-t pb-safe
            ${isBlackBg ? "bg-background/90" : "bg-surface/90"}
            backdrop-blur-xl border-white/5 transition-colors duration-300`}>
            <div className="flex items-center justify-around h-16 px-2">
                {NAV_ITEMS.map(({ name, path, Icon }) => {
                    const isActive = pathname === path ||
                        (pathname === "/" && path === "/");

                    return (
                        <Link
                            key={name}
                            href={path}
                            className={`flex flex-col items-center justify-center flex-1 h-full active:opacity-50 transition-colors ${isActive ? "text-warm-white" : "text-foreground/45"
                                }`}
                        >
                            <Icon
                                size={22}
                                strokeWidth={isActive ? 2 : 1.5}
                                className="mb-1 transition-all"
                            />
                            <span className="text-[10px] font-[family-name:var(--font-outfit)] font-medium">
                                {name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
