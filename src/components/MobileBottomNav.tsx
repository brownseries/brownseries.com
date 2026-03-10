"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Heart, User } from "lucide-react";

export default function MobileBottomNav() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            path: "/home",
            Icon: Home,
        },
        {
            name: "Shop",
            path: "/shop",
            Icon: ShoppingBag,
        },
        {
            name: "Saved",
            path: "/saved",
            Icon: Heart,
        },
        {
            name: "Profile",
            path: "/profile",
            Icon: User,
        },
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
                            <item.Icon
                                size={22}
                                strokeWidth={1.5}
                                className={`mb-1 transition-all ${isActive ? "fill-current" : ""}`}
                            />
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
