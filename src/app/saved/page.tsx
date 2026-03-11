import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function SavedPage() {
    const savedItems = [
        {
            id: 1, name: "Everyday Essentials", price: "₹180", image: "/hero_indian_essentials.png"
        },
        {
            id: 4, name: "Modern Silhouettes", price: "₹450", image: "/hero_indian_new_arrivals.png"
        },
        { id: 8, name: "Classic Leather Tote", price: "₹560", image: "/hero-2.png" },
    ];

    return (
        <main className="min-h-screen bg-background pb-safe md:pb-8 flex flex-col">
            <Navbar />

            {/* Single outer wrapper */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">

                {/* Page Header */}
                <div className="py-8 md:py-12 border-b border-white/5">
                    <h1 className="text-xl md:text-2xl text-warm-white font-bold mb-4">
                        Saved Items
                    </h1>
                    <p className="text-[14px] text-foreground/60 max-w-xl">
                        Your personal collection. Items you've curated for your future wardrobe.
                    </p>
                </div>

                {/* Saved Grid */}
                <div className="flex-grow py-12">
                    {savedItems.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                            {savedItems.map((product) => (
                                <div key={product.id} className="cursor-pointer group active:scale-[0.98] transition-transform flex flex-col">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-none bg-surface mb-3">
                                        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-center filter brightness-90 md:brightness-100 md:group-hover:scale-105 transition-transform duration-700" />
                                        <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                                            {/* Filled Heart Icon for Saved */}
                                            <svg className="w-4 h-4 fill-warm-white text-warm-white" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-[14px] text-warm-white font-medium truncate">{product.name}</h3>
                                        <p className="text-[13px] text-foreground/60 mt-0.5">{product.price}</p>
                                    </div>
                                    <button className="mt-4 text-[11px] font-medium tracking-widest uppercase text-background bg-warm-white py-2.5 rounded-none md:hover:bg-accent transition-colors">
                                        MOVE TO CART
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <svg className="w-12 h-12 text-foreground/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            <h2 className="text-2xl text-warm-white font-medium mb-2">Your wishlist is empty</h2>
                            <p className="text-[13px] text-foreground/60 mb-8 max-w-sm">Tap the heart icon on any item to save it for later.</p>
                            <Link href="/shop" className="text-[11px] font-medium tracking-widest uppercase border border-warm-white/40 text-warm-white px-8 py-3 hover:bg-warm-white hover:text-background transition-colors">
                                EXPLORE SHOP
                            </Link>
                        </div>
                    )}
                </div>

            </div>{/* end outer wrapper */}

            {/* Mobile Bottom Navigation Bar (iOS App Style) */}
            <MobileBottomNav />
        </main>
    );
}
