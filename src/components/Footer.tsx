"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_ON = ["/profile", "/login"];

export default function Footer() {
    const pathname = usePathname();
    if (HIDDEN_ON.includes(pathname)) return null;
    return (
        <footer className="bg-[#0a0807] border-t border-white/5 pt-8 pb-24 md:pt-10 md:pb-12 text-warm-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center md:flex-row md:justify-between gap-6">

                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.3em] uppercase text-accent font-semibold mb-1">
                        Brown Series
                    </h2>
                    <p className="text-[10px] font-[family-name:var(--font-outfit)] text-foreground/40">
                        © 2026 Brown Series. All rights reserved.
                    </p>
                </div>

                {/* Minimal Links & Socials */}
                <div className="flex flex-col items-center md:items-end gap-5">
                    <div className="flex items-center gap-6 font-[family-name:var(--font-outfit)] text-[11px] text-foreground/50 tracking-wider">
                        <Link href="#" className="hover:text-warm-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-warm-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-warm-white transition-colors">Help</Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/brown.series/" target="_blank" className="text-foreground/50 hover:text-warm-white transition-colors">
                            {/* Instagram */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-foreground/50 hover:text-warm-white transition-colors">
                            {/* X / Twitter */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a href="#" className="text-foreground/50 hover:text-warm-white transition-colors">
                            {/* TikTok */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.41-2.92 5.75-1.74 1.3-4.08 1.72-6.19 1.12-2.17-.61-4.01-2.22-4.81-4.32-.79-2.07-.61-4.48.56-6.38 1.15-1.9 3.2-3.1 5.4-3.32v4.06c-1.14.07-2.24.64-2.91 1.54-.66.88-.86 2.06-.5 3.09.34.99 1.19 1.78 2.19 2.09.99.3 2.11.19 2.99-.34.84-.52 1.38-1.42 1.48-2.39.11-1.1.04-2.2.04-3.3V.02h3.61z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
