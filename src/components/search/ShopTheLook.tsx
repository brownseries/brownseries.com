"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ShopTheLookProps {
    activeHotspot: number | null;
    setActiveHotspot: (id: number | null) => void;
}

export default function ShopTheLook({ activeHotspot, setActiveHotspot }: ShopTheLookProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] uppercase tracking-widest text-foreground/35">
                    Shop the Look
                </p>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Seasonal Edit</span>
            </div>
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl">
                <Image 
                    src="/hero_indian_winter.png" 
                    alt="Winter Shop the Look" 
                    fill 
                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Hotspots */}
                <div className="absolute inset-0">
                    {/* Item 1 Hotspot: Knit Sweater */}
                    <div className="absolute top-[40%] left-[50%]">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setActiveHotspot(activeHotspot === 1 ? null : 1); }}
                            className="relative w-12 h-12 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                        >
                            <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                            <span className="relative w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] border-2 border-accent" />
                        </button>
                        
                        <AnimatePresence>
                            {activeHotspot === 1 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                                    className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[160px] bg-background/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 z-50 pointer-events-auto shadow-2xl"
                                >
                                    <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-2.5">
                                        <Image src="/hero_indian_winter.png" alt="Sweater" fill className="object-cover" />
                                    </div>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-wider mb-0.5 font-bold">Knit Sweater</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-warm-white font-bold">₹320</span>
                                        <Link href="/shop/2" className="text-[10px] text-accent font-bold uppercase tracking-widest">View</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Item 2 Hotspot: Winter Coat */}
                    <div className="absolute top-[60%] left-[30%]">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setActiveHotspot(activeHotspot === 2 ? null : 2); }}
                            className="relative w-12 h-12 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                        >
                            <span className="absolute inset-0 rounded-full bg-white/40 animate-ping animate-delay-300" />
                            <span className="relative w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] border-2 border-accent" />
                        </button>
                        
                        <AnimatePresence>
                            {activeHotspot === 2 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                                    className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[160px] bg-background/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 z-50 pointer-events-auto shadow-2xl"
                                >
                                    <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-2.5">
                                        <Image src="/hero.png" alt="Coat" fill className="object-cover" />
                                    </div>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-wider mb-0.5 font-bold">Linen Coat</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-warm-white font-bold">₹450</span>
                                        <Link href="/shop/16" className="text-[10px] text-accent font-bold uppercase tracking-widest">View</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-2xl font-[family-name:var(--font-cormorant)] text-white font-bold mb-4">
                        Winter Minimalism
                    </h4>
                    <button 
                        className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/10 text-white text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform"
                        onClick={() => setActiveHotspot(activeHotspot ? null : 1)}
                    >
                        {activeHotspot ? "Close Tags" : "Shop This Look"}
                    </button>
                </div>
            </div>
        </section>
    );
}
