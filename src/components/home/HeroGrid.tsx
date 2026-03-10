"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 25 } }
} as const;

export default function HeroGrid() {
    return (
        <section className="bg-background w-full">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-[2px] bg-white/5 p-1 md:p-0"
            >

                {/* Card 1 */}
                <motion.div variants={cardVariants} className="relative w-full aspect-[4/5] md:h-[60vh] md:aspect-auto group overflow-hidden bg-surface rounded-xl md:rounded-none">
                    <Image
                        src="/hero.png"
                        alt="Classic Style"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top opacity-90 md:group-hover:scale-105 transition-transform duration-[1.5s] ease-out will-change-transform"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:to-transparent/5" />
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 w-full flex flex-col justify-end">
                        <span className="font-[family-name:var(--font-outfit)] text-[11px] md:text-[12px] text-accent mb-1 font-medium tracking-wider uppercase">
                            Everyday Essentials
                        </span>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-warm-white mb-4 font-light tracking-wide leading-tight">
                            Classic style
                        </h2>
                        <div>
                            <Link href="/shop/classic-style" className="inline-block font-[family-name:var(--font-outfit)] text-[10px] md:text-[11px] tracking-widest px-6 py-2.5 md:px-8 md:py-3 bg-warm-white text-background active:bg-accent rounded-full md:rounded-none md:bg-transparent md:border md:border-warm-white/40 md:text-warm-white hover:bg-warm-white hover:text-background transition-colors duration-200">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={cardVariants} className="relative w-full aspect-[4/5] md:h-[60vh] md:aspect-auto group overflow-hidden bg-surface rounded-xl md:rounded-none">
                    <Image
                        src="/hero-2.png"
                        alt="Cozy looks"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center opacity-90 md:group-hover:scale-105 transition-transform duration-[1.5s] ease-out will-change-transform"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:to-transparent/5" />
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 w-full flex flex-col justify-end">
                        <span className="font-[family-name:var(--font-outfit)] text-[11px] md:text-[12px] text-accent mb-1 font-medium tracking-wider uppercase">
                            Winter Collection
                        </span>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-warm-white mb-4 font-light tracking-wide leading-tight">
                            Cozy looks
                            <br className="md:hidden" /> for any season
                        </h2>
                        <div>
                            <Link href="/shop/cozy-looks" className="inline-block font-[family-name:var(--font-outfit)] text-[10px] md:text-[11px] tracking-widest px-6 py-2.5 md:px-8 md:py-3 bg-warm-white text-background active:bg-accent rounded-full md:rounded-none md:bg-transparent md:border md:border-warm-white/40 md:text-warm-white hover:bg-warm-white hover:text-background transition-colors duration-200">
                                DISCOVER MORE
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div variants={cardVariants} className="relative w-full aspect-[4/5] md:h-[60vh] md:aspect-auto group overflow-hidden bg-surface rounded-xl md:rounded-none">
                    <Image
                        src="/hero_indian_essentials.png"
                        alt="Timeless accessory"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-[center_35%] opacity-90 md:group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter brightness-75 sepia-[0.3] will-change-transform"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:to-transparent/5" />
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 w-full flex flex-col justify-end">
                        <span className="font-[family-name:var(--font-outfit)] text-[11px] md:text-[12px] text-accent mb-1 font-medium tracking-wider uppercase">
                            Premium Accessories
                        </span>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-warm-white mb-4 font-light tracking-wide leading-tight">
                            Timeless accessory
                        </h2>
                        <div>
                            <Link href="/shop/timeless-accessory" className="inline-block font-[family-name:var(--font-outfit)] text-[10px] md:text-[11px] tracking-widest px-6 py-2.5 md:px-8 md:py-3 bg-warm-white text-background active:bg-accent rounded-full md:rounded-none md:bg-transparent md:border md:border-warm-white/40 md:text-warm-white hover:bg-warm-white hover:text-background transition-colors duration-200">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Card 4 (Eid Collections) */}
                <motion.div variants={cardVariants} className="relative w-full aspect-[4/5] md:h-[60vh] md:aspect-auto group overflow-hidden bg-surface rounded-xl md:rounded-none">
                    <Image
                        src="/hero_eid_collection.png"
                        alt="Eid Collections"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-top opacity-90 md:group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter brightness-85 will-change-transform"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:to-transparent/5" />
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 flex flex-col justify-end">
                        <span className="font-[family-name:var(--font-outfit)] text-[11px] md:text-[12px] text-accent mb-1 font-medium tracking-wider uppercase">
                            Festive Season
                        </span>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-warm-white mb-4 font-light tracking-wide leading-tight">
                            Eid Collections
                        </h2>
                        <div>
                            <Link href="/shop/eid-collections" className="inline-block font-[family-name:var(--font-outfit)] text-[10px] md:text-[11px] tracking-widest px-6 py-2.5 md:px-8 md:py-3 bg-warm-white text-background active:bg-accent rounded-full md:rounded-none md:bg-transparent md:border md:border-warm-white/40 md:text-warm-white hover:bg-warm-white hover:text-background transition-colors duration-200">
                                VIEW COLLECTION
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
