import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import {
  User,
  ChevronRight,
  ShoppingBag,
  MapPin,
  Heart,
  Ticket,
  CreditCard,
  Smartphone,
  MessageCircle,
  ShoppingCart,
  Store,
  BarChart3,
  Package,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background pb-safe md:pb-8 flex flex-col">
      <Navbar />

      {/* Single outer wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col flex-1 pb-20 mt-2">
        {/* Page Header & User Card */}
        <div className="pt-6 pb-2">
          <div className="flex items-center justify-between mb-4 px-1 pb-2">
            <h1 className="text-2xl text-warm-white font-bold">Profile</h1>
          </div>

          {/* Simulated logged-in user state / Profile Card */}
          <Link
            href="#edit"
            className="flex items-center gap-4 bg-surface p-4 rounded-2xl active:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-full border border-white/5 overflow-hidden bg-background flex items-center justify-center flex-shrink-0">
              <User
                size={24}
                strokeWidth={1.5}
                className="text-foreground/40"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] text-warm-white font-medium">
                  Adam John
                </h2>
                <span className="text-[9px] bg-white/10 text-foreground/60 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Personal
                </span>
              </div>
              <p className="text-[14px] text-foreground/50 mt-0.5">
                @adam.john
              </p>
            </div>
            <ChevronRight
              size={20}
              strokeWidth={1.5}
              className="text-foreground/30 flex-shrink-0 group-active:text-warm-white transition-colors"
            />
          </Link>
        </div>

        {/* iOS Style Menu List */}
        <div className="flex flex-col gap-5 mt-2">
          {/* Orders & Activity */}
          <section>
            <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
              Activity
            </h3>
            <div className="bg-surface rounded-2xl overflow-hidden">
              <Link
                href="/profile/orders"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <ShoppingCart
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Cart
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <Link
                href="/profile/orders"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <ShoppingBag
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Orders
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <div className="h-[1px] bg-white/5 ml-[52px]" />
              <Link
                href="#addresses"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <MapPin
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Addresses
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
            </div>
          </section>

          {/* Personal & Perks */}
          <section>
            <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
              Personal
            </h3>
            <div className="bg-surface rounded-2xl overflow-hidden">
              <Link
                href="/saved"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <Heart
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Saved
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <div className="h-[1px] bg-white/5 ml-[52px]" />
              <Link
                href="#coupons"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <Ticket
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Coupons
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
            </div>
          </section>

          {/* Payments */}
          <section>
            <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
              Payments
            </h3>
            <div className="bg-surface rounded-2xl overflow-hidden">
              <Link
                href="#saved-cards"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <CreditCard
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Saved Cards
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <div className="h-[1px] bg-white/5 ml-[52px]" />
              <Link
                href="#saved-upi"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <Smartphone
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Saved UPI
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
            </div>
          </section>

          {/* Business Tools */}
          <section>
            <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
              Business
            </h3>
            <div className="bg-surface rounded-2xl overflow-hidden">
              <Link
                href="/coming-soon"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <Store
                      size={20}
                      strokeWidth={1.5}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <span className="text-[15px] text-warm-white block">
                      Switch to Business
                    </span>
                    <span className="text-[11px] text-foreground/40">
                      Start selling on Brown Series
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <div className="h-[1px] bg-white/5 ml-[52px]" />
              <Link
                href="/coming-soon"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <BarChart3
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white">
                    Creator Dashboard
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
              <div className="h-[1px] bg-white/5 ml-[52px]" />
              <Link
                href="/coming-soon"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <Package
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white">
                    My Listings
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
            </div>
          </section>

          {/* Support & Legal */}
          <section>
            <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">
              Support
            </h3>
            <div className="bg-surface rounded-2xl overflow-hidden">
              <Link
                href="#contact"
                className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 flex justify-center items-center flex-shrink-0">
                    <MessageCircle
                      size={20}
                      strokeWidth={1.5}
                      className="text-warm-white/80"
                    />
                  </div>
                  <span className="text-[15px] text-warm-white mb-0.5">
                    Contact Us
                  </span>
                </div>
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-foreground/30 flex-shrink-0"
                />
              </Link>
            </div>
          </section>

          {/* Logout Button */}
          <div className="pt-3">
            <button className="w-full text-[15px] font-medium text-red-500 bg-surface/80 active:bg-surface border border-white/5 py-4 rounded-2xl transition-colors">
              Log Out
            </button>
          </div>
        </div>
        {/* end menu list */}
      </div>
      {/* end outer wrapper */}

      {/* Mobile Bottom Navigation Bar (iOS App Style) */}
      <MobileBottomNav />
    </main>
  );
}
