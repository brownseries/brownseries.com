import Image from "next/image";
import Link from "next/link";

export default function TrendingItems() {
    return (
        <section className="bg-background pt-10 pb-16 md:pt-20 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                    <h2 className="text-2xl md:text-3xl text-warm-white font-medium tracking-wide">
                        Trending Items
                    </h2>
                    <Link href="#all" className="text-[12px] md:text-[13px] font-medium text-accent hover:text-warm-white active:opacity-50 transition-colors">
                        View all
                    </Link>
                </div>

                {/* Native Mobile App Horizontal Scrolling Row */}
                <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto hide-scrollbar overscroll-x-contain touch-pan-x snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
                    {/* Product 1 */}
                    <div className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.98] transition-transform">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-none bg-surface mb-3">
                            <Image src="/hero.png" alt="Oversized Knit Sweater" fill sizes="(max-width: 768px) 70vw, 25vw" className="object-cover object-top filter brightness-90 md:brightness-100" />
                            <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-[14px] text-warm-white font-medium truncate">Oversized Linen Coat</h3>
                            <p className="text-[13px] text-foreground/60 mt-0.5">$450</p>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.98] transition-transform">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-none bg-surface mb-3">
                            <Image src="/hero_indian_new_arrivals.png" alt="Linen Button-Down" fill sizes="(max-width: 768px) 70vw, 25vw" className="object-cover filter brightness-90 md:brightness-100" />
                            <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-[14px] text-warm-white font-medium truncate">Pleated Wool Trousers</h3>
                            <p className="text-[13px] text-foreground/60 mt-0.5">$280</p>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.98] transition-transform">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-none bg-surface mb-3">
                            <Image src="/trending_hijabi_skirt.png" alt="Textured Midi Skirt" fill sizes="(max-width: 768px) 70vw, 25vw" className="object-cover object-center filter brightness-90 md:brightness-100" />
                            <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-[14px] text-warm-white font-medium truncate">Textured Wool Midi Skirt</h3>
                            <p className="text-[13px] text-foreground/60 mt-0.5">$240</p>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.98] transition-transform">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-none bg-surface mb-3">
                            <Image src="/hero-2.png" alt="Classic Leather Tote" fill sizes="(max-width: 768px) 70vw, 25vw" className="object-cover object-[center_30%] filter grayscale-[0.2]" />
                            <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div>
                            <h3 className="text-[14px] text-warm-white font-medium truncate">Classic Leather Tote</h3>
                            <p className="text-[13px] text-foreground/60 mt-0.5">$560</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
