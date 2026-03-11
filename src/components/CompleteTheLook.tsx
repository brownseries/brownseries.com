"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const LOOK_ITEMS = [
    { id: 1, name: "Everyday Essentials", price: "₹180", image: "/hero_indian_essentials.png" },
    { id: 7, name: "Oversized Linen Coat", price: "₹450", image: "/hero.png" },
    { id: 3, name: "Premium Accessories", price: "₹240", image: "/hero_indian_accessories.png" },
    { id: 6, name: "Textured Midi Skirt", price: "₹240", image: "/trending_hijabi_skirt.png" },
];

export default function CompleteTheLook() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-white/5">
            <div className="mb-4">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-warm-white font-medium">
                    Complete the Look
                </h2>
                <p className="font-[family-name:var(--font-outfit)] text-[12px] text-foreground/40 mt-0.5">
                    Styled to go together
                </p>
            </div>

            <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 md:-mx-8 md:px-8 pb-2">
                {LOOK_ITEMS.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex-shrink-0 w-36"
                    >
                        <Link href={`/shop/${item.id}`} className="block group active:scale-[0.97] transition-transform">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface mb-2">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="144px"
                                    className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-500"
                                />
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className="absolute bottom-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full text-warm-white active:bg-accent transition-colors z-10"
                                    aria-label={`Quick add ${item.name}`}
                                >
                                    <ShoppingBag size={13} />
                                </button>
                            </div>
                            <p className="font-[family-name:var(--font-outfit)] text-[12px] text-warm-white font-medium truncate">
                                {item.name}
                            </p>
                            <p className="font-[family-name:var(--font-outfit)] text-[11px] text-foreground/50 mt-0.5">
                                {item.price}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
