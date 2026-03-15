import Image from "next/image";
import Link from "next/link";
import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { ALL_PRODUCTS } from "@/app/search/constants";
import AccountBadge from "@/components/AccountBadge";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background pb-safe md:pb-8 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-xl md:text-2xl text-warm-white font-bold mb-4">
          The Collection
        </h1>
        <p className="text-[14px] text-foreground/60 max-w-xl">
          Explore curated picks from creators and brands across the platform.
        </p>

        {/* Minimal Filters */}
        <div className="flex gap-4 mt-8 overflow-x-auto hide-scrollbar touch-pan-x">
          {[
            "All",
            "New Arrivals",
            "Outerwear",
            "Knitwear",
            "Bottoms",
            "Accessories",
          ].map((filter, i) => (
            <button
              key={i}
              className={`text-[11px] uppercase tracking-widest whitespace-nowrap px-5 py-2 rounded-full transition-colors ${i === 0 ? "bg-warm-white text-background font-medium" : "bg-surface text-foreground/70 hover:bg-white/10"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Shop Grid */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {ALL_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer group active:scale-[0.98] transition-transform flex flex-col"
            >
              <Link href={`/shop/${product.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-none bg-surface mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center filter brightness-90 md:brightness-100 md:group-hover:scale-105 transition-transform duration-700"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-background/40 backdrop-blur-md rounded-full text-warm-white active:bg-accent active:scale-110 transition-all z-10">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
              <div className="mt-auto">
                <AccountBadge account={product.account} size="sm" />
                <h3 className="text-[14px] text-warm-white font-medium truncate mt-0.5">
                  {product.name}
                </h3>
                <p className="text-[13px] text-foreground/60 mt-0.5">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </main>
  );
}
