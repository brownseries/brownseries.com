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
                        <h1 className="font-[family-name:var(--font-cormorant)] text-[2rem] text-warm-white font-medium">
                            Profile
                        </h1>
                    </div>

                    {/* Simulated logged-in user state / Profile Card */}
                    <Link href="#edit" className="flex items-center gap-4 bg-surface p-4 rounded-2xl active:bg-white/5 transition-colors cursor-pointer group">
                        <div className="w-14 h-14 rounded-full border border-white/5 overflow-hidden bg-background flex items-center justify-center flex-shrink-0">
                            <User size={24} strokeWidth={1.5} className="text-foreground/40" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="font-[family-name:var(--font-outfit)] text-[17px] text-warm-white font-medium">Guest User</h2>
                            <p className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/50 mt-0.5">
                                Sign in to sync your saved items
                            </p>
                        </div>
                        <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0 group-active:text-warm-white transition-colors" />
                    </Link>
                </div>

                {/* iOS Style Menu List */}
                <div className="flex flex-col gap-5 mt-2">

                    {/* Orders & Activity */}
                    <section>
                        <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">Activity</h3>
                        <div className="bg-surface rounded-2xl overflow-hidden">
                            <Link href="#orders" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <ShoppingBag size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Orders</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                            <div className="h-[1px] bg-white/5 ml-[52px]" />
                            <Link href="#addresses" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <MapPin size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Addresses</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                        </div>
                    </section>

                    {/* Personal & Perks */}
                    <section>
                        <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">Personal</h3>
                        <div className="bg-surface rounded-2xl overflow-hidden">
                            <Link href="/saved" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <Heart size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                            <div className="h-[1px] bg-white/5 ml-[52px]" />
                            <Link href="#coupons" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <Ticket size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Coupons</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                        </div>
                    </section>

                    {/* Payments */}
                    <section>
                        <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">Payments</h3>
                        <div className="bg-surface rounded-2xl overflow-hidden">
                            <Link href="#saved-cards" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <CreditCard size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved Cards</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                            <div className="h-[1px] bg-white/5 ml-[52px]" />
                            <Link href="#saved-upi" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <Smartphone size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved UPI</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                        </div>
                    </section>

                    {/* Support & Legal */}
                    <section>
                        <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">Support</h3>
                        <div className="bg-surface rounded-2xl overflow-hidden">
                            <Link href="#contact" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                                        <MessageCircle size={20} strokeWidth={1.5} className="text-warm-white/80" />
                                    </div>
                                    <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Contact Us</span>
                                </div>
                                <ChevronRight size={20} strokeWidth={1.5} className="text-foreground/30 flex-shrink-0" />
                            </Link>
                        </div>
                    </section>

                    {/* Logout Button */}
                    <div className="pt-3">
                        <button className="w-full font-[family-name:var(--font-outfit)] text-[15px] font-medium text-red-500 bg-surface/80 active:bg-surface border border-white/5 py-4 rounded-2xl transition-colors">
                            Log Out
                        </button>
                    </div>
                </div>{/* end menu list */}
            </div>{/* end outer wrapper */}

            {/* Mobile Bottom Navigation Bar (iOS App Style) */}
            <MobileBottomNav />
        </main>
    );
}
