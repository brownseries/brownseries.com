"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_ON = ["/profile", "/login"];

export default function Footer() {
    const pathname = usePathname();
    if (HIDDEN_ON.includes(pathname)) return null;
    return (
        <footer className="bg-[#0a0807] border-t border-white/5 pt-12 pb-24 md:pb-16 text-warm-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                    {/* Brand & Newsletter — full width on mobile */}
                    <div className="md:col-span-5 flex flex-col items-start text-left">
                        <h2 className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.4em] uppercase text-accent font-medium mb-5">
                            Brown Series
                        </h2>
                        <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 mb-7 max-w-sm leading-relaxed">
                            Join the collective. Subscribe for early access to new collections, exclusive events, and styling inspiration.
                        </p>
                        <div className="w-full max-w-md flex border-b border-white/20 pb-2 focus-within:border-accent transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none outline-none text-[13px] font-[family-name:var(--font-outfit)] w-full placeholder:text-foreground/40 text-warm-white"
                            />
                            <button className="font-[family-name:var(--font-outfit)] text-[11px] font-medium tracking-widest uppercase text-accent hover:text-warm-white transition-colors cursor-pointer pl-4">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Mobile: 2-col side-by-side link groups | Desktop: individual columns */}
                    <div className="grid grid-cols-2 md:contents gap-8">

                        {/* Explore Links */}
                        <div className="md:col-span-2 md:col-start-7 flex flex-col items-start text-left gap-4">
                            <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase text-warm-white/90 tracking-widest mb-1 font-medium">Explore</h3>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Our Story</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Collections</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Journal</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Careers</Link>
                        </div>

                        {/* Support Links */}
                        <div className="md:col-span-2 flex flex-col items-start text-left gap-4">
                            <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase text-warm-white/90 tracking-widest mb-1 font-medium">Support</h3>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Contact Us</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Shipping & Returns</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">Care Guide</Link>
                            <Link href="#" className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/60 hover:text-accent transition-colors">FAQ</Link>
                        </div>

                    </div>

                    {/* Socials & Legal */}
                    <div className="md:col-span-2 flex flex-col items-start text-left gap-4">
                        <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase text-warm-white/90 tracking-widest mb-1 font-medium">Connect</h3>
                        <div className="flex gap-5">
                            <a href="https://www.instagram.com/brown.series/" target="_blank" className="text-foreground/60 hover:text-warm-white transition-colors">
                                {/* Instagram */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-warm-white transition-colors">
                                {/* X / Twitter */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-warm-white transition-colors">
                                {/* TikTok */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.41-2.92 5.75-1.74 1.3-4.08 1.72-6.19 1.12-2.17-.61-4.01-2.22-4.81-4.32-.79-2.07-.61-4.48.56-6.38 1.15-1.9 3.2-3.1 5.4-3.32v4.06c-1.14.07-2.24.64-2.91 1.54-.66.88-.86 2.06-.5 3.09.34.99 1.19 1.78 2.19 2.09.99.3 2.11.19 2.99-.34.84-.52 1.38-1.42 1.48-2.39.11-1.1.04-2.2.04-3.3V.02h3.61z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-2 text-[11px] font-[family-name:var(--font-outfit)] text-foreground/40">
                            <p>© 2026 Brown Series</p>
                            <p className="mt-1">All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
