import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";
import ShopByCategory from "@/components/home/ShopByCategory";
import MasonryFeed from "@/components/home/MasonryFeed";
import StoryStrip from "@/components/home/StoryStrip";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0 overflow-x-hidden selection:bg-accent/30 selection:text-warm-white">
            <Navbar />
            <StoryStrip />
            <div className="w-full">
                <MasonryFeed />
                <FeaturesCarousel />
                <ShopByCategory />
                <TrendingItems />
            </div>
        </main>
    );
}
