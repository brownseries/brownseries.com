import Image from "next/image";
import Link from "next/link";
import TrendingItems from "@/components/TrendingItems";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import HeroGrid from "@/components/home/HeroGrid";
import FeaturesCarousel from "@/components/home/FeaturesCarousel";
import ShopByCategory from "@/components/home/ShopByCategory";
import Footer from "@/components/Footer";
export default function HomePage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0 overflow-x-hidden selection:bg-accent/30 selection:text-warm-white">
            {/* Main Navigation Bar */}
            <Navbar />

            {/* Main Content Area - Scrollable */}
            <div className="w-full">
                {/* Mobile-Friendly Grid (Stacked on mobile, 3-col on desktop) */}
                <HeroGrid />

                {/* Features Carousel (Horizontal Scroll on Mobile) */}
                <FeaturesCarousel />

                {/* Shop by Category (Horizontal Scroll on Mobile) */}
                <ShopByCategory />

                {/* Trending Items Component */}
                <TrendingItems />

                {/* Premium Dark Theme Footer */}
                <Footer />
            </div>

            {/* Mobile Bottom Navigation Bar (iOS App Style) */}
            <MobileBottomNav />
        </main>
    );
}
