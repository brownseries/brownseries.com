import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import HeroGrid from "@/components/home/HeroGrid";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";
import ShopByCategory from "@/components/home/ShopByCategory";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0 overflow-x-hidden selection:bg-accent/30 selection:text-warm-white">
            <Navbar />
            <div className="w-full">
                <HeroGrid />
                <FeaturesCarousel />
                <ShopByCategory />
                <TrendingItems />
            </div>
        </main>
    );
}
