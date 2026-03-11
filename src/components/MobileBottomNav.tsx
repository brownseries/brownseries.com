"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bookmark, Bell, User } from "lucide-react";

const NAV_ITEMS = [
    { name: "Home", path: "/home", Icon: Home },
    { name: "Explore", path: "/search", Icon: Search },
    { name: "Saved", path: "/saved", Icon: Bookmark },
    { name: "Activity", path: "/activity", Icon: Bell },
    { name: "Profile", path: "/profile", Icon: User },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-xl border-t border-white/5 pb-safe z-50">
            <div className="flex justify-around items-center h-16 px-1">
                {NAV_ITEMS.map(({ name, path, Icon }) => {
                    const isActive =
                        pathname === path ||
                        (pathname === "/" && path === "/home");

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
