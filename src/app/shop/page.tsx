import Image from "next/image";
import Link from "next/link";
import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function ShopPage() {
    const products = [
        {
            id: 1, name: "Everyday Essentials", price: "₹180", image: "/hero_indian_essentials.png"
        },
        {
            id: 2, name: "Winter Collection", price: "₹320", image: "/hero_indian_winter.png"
        },
        {
            id: 3, name: "Premium Accessories", price: "₹240", image: "/hero_indian_accessories.png"
        },
        {
            id: 4, name: "Modern Silhouettes", price: "₹450", image: "/hero_indian_new_arrivals.png"
        },
        {
            id: 5, name: "Eid Collections", price: "₹560", image: "/hero_eid_collection.png"
        },
        {
            id: 6, name: "Textured Midi Skirt", price: "₹240", image: "/trending_hijabi_skirt.png"
        },
        {
            id: 7, name: "Oversized Linen Coat", price: "₹450", image: "/hero.png"
        },
        { id: 8, name: "Classic Leather Tote", price: "₹560", image: "/hero-2.png" },
    ];

    return (
        <main className="min-h-screen bg-background pb-safe md:pb-8 flex flex-col">
            <Navbar />

            {/* Page Header */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <h1 className="text-4xl md:text-5xl text-warm-white font-medium mb-4">
                    The Collection
                </h1>
                <p className="text-[14px] text-foreground/60 max-w-xl">
                    Explore our curated selection of premium aesthetics. Deep earth tones, elegant silhouettes, and quiet luxury.
                </p>

                {/* Minimal Filters */}
                <div className="flex gap-4 mt-8 overflow-x-auto hide-scrollbar touch-pan-x">
                    {["All", "New Arrivals", "Outerwear", "Knitwear", "Bottoms", "Accessories"].map((filter, i) => (
                        <button key={i} className={`text-[11px] uppercase tracking-widest whitespace-nowrap px-5 py-2 rounded-full transition-colors ${i === 0 ? "bg-warm-white text-background font-medium" : "bg-surface text-foreground/70 hover:bg-white/10"}`}>
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Shop Grid */}
            <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 pb-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="cursor-pointer group active:scale-[0.98] transition-transform flex flex-col">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-none bg-surface mb-3">
                                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center filter brightness-90 md:brightness-100 md:group-hover:scale-105 transition-transform duration-700" />
                                <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-[14px] text-warm-white font-medium truncate">{product.name}</h3>
                                <p className="text-[13px] text-foreground/60 mt-0.5">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile Bottom Navigation Bar (iOS App Style) */}
            <MobileBottomNav />
        </main>
    );
}
