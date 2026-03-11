import Image from "next/image";
import Link from "next/link";

export default function ShopByCategory() {
    return (
        <section className="bg-background pt-12 md:pt-16 pb-4 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                    <h2 className="text-xl md:text-xl text-warm-white font-bold tracking-wide">
                        Shop by Category
                    </h2>
                </div>

                {/* Native Mobile App Horizontal Scrolling Row */}
                <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto hide-scrollbar overscroll-x-contain touch-pan-x snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
                    {/* Category 1 */}
                    <Link href="#outerwear" className="min-w-[40vw] sm:min-w-[25vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.96] transition-transform block">
                        <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-none bg-surface">
                            <Image src="/category-outerwear.png" alt="Outerwear" fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover object-top filter brightness-75 md:brightness-[0.85] md:group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/40 transition-colors duration-500" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-[15px] tracking-widest uppercase text-warm-white font-medium z-10">
                                Outerwear
                            </h3>
                        </div>
                    </Link>

                    {/* Category 2 */}
                    <Link href="#bottoms" className="min-w-[40vw] sm:min-w-[25vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.96] transition-transform block">
                        <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-none bg-surface">
                            <Image src="/category-bottoms.png" alt="Bottoms" fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover object-center filter grayscale-[0.3] brightness-75 md:brightness-[0.85] md:group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/40 transition-colors duration-500" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-[15px] tracking-widest uppercase text-warm-white font-medium z-10">
                                Bottoms
                            </h3>
                        </div>
                    </Link>

                    {/* Category 3 */}
                    <Link href="#knitwear" className="min-w-[40vw] sm:min-w-[25vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.96] transition-transform block">
                        <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-none bg-surface">
                            <Image src="/category-knitwear.png" alt="Knitwear" fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover object-center filter sepia-[0.3] brightness-75 md:brightness-[0.85] md:group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/40 transition-colors duration-500" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-[15px] tracking-widest uppercase text-warm-white font-medium z-10">
                                Knitwear
                            </h3>
                        </div>
                    </Link>

                    {/* Category 4 */}
                    <Link href="#accessories" className="min-w-[40vw] sm:min-w-[25vw] md:min-w-0 snap-start md:snap-align-none cursor-pointer group active:scale-[0.96] transition-transform block">
                        <div className="relative aspect-square overflow-hidden rounded-2xl md:rounded-none bg-surface">
                            <Image src="/category-accessories.png" alt="Accessories" fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover object-[center_30%] filter grayscale-[0.8] brightness-75 md:brightness-[0.85] md:group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/40 transition-colors duration-500" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-[15px] tracking-widest uppercase text-warm-white font-medium z-10">
                                Accessories
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
