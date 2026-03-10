import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-background pb-safe md:pb-8 flex flex-col">
            <Navbar />

            {/* Page Header & User Card */}
            <div className="w-full max-w-3xl mx-auto px-4 md:px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-4 px-1 pb-2">
                    <h1 className="font-[family-name:var(--font-cormorant)] text-[2rem] text-warm-white font-medium">
                        Profile
                    </h1>
                </div>

                {/* Simulated logged-in user state / Profile Card */}
                <Link href="#edit" className="flex items-center gap-4 bg-surface p-4 rounded-2xl active:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-14 h-14 rounded-full border border-white/5 overflow-hidden bg-background flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-foreground/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div className="flex-grow">
                        <h2 className="font-[family-name:var(--font-outfit)] text-[17px] text-warm-white font-medium">Guest User</h2>
                        <p className="font-[family-name:var(--font-outfit)] text-[14px] text-foreground/50 mt-0.5">
                            Sign in to sync your saved items
                        </p>
                    </div>
                    <svg className="w-5 h-5 text-foreground/30 flex-shrink-0 group-active:text-warm-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
            </div>

            {/* iOS Style Menu List */}
            <div className="flex-grow w-full max-w-3xl mx-auto px-4 md:px-6 pb-20 flex flex-col gap-5 mt-2">

                {/* Orders & Activity */}
                <section>
                    <h3 className="font-[family-name:var(--font-outfit)] text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-medium">Activity</h3>
                    <div className="bg-surface rounded-2xl overflow-hidden">
                        <Link href="#orders" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-6 flex justify-center items-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Orders</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <div className="h-[1px] bg-white/5 ml-[52px]" />
                        <Link href="#addresses" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-6 flex justify-center items-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Addresses</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
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
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <div className="h-[1px] bg-white/5 ml-[52px]" />
                        <Link href="#coupons" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-6 flex justify-center items-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Coupons</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
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
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved Cards</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <div className="h-[1px] bg-white/5 ml-[52px]" />
                        <Link href="#saved-upi" className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-6 flex justify-center items-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Saved UPI</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
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
                                    <svg className="w-5 h-5 text-warm-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                </div>
                                <span className="font-[family-name:var(--font-outfit)] text-[15px] text-warm-white mb-0.5">Contact Us</span>
                            </div>
                            <svg className="w-5 h-5 text-foreground/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </section>

                {/* Logout Button */}
                <div className="pt-3">
                    <button className="w-full font-[family-name:var(--font-outfit)] text-[15px] font-medium text-red-500 bg-surface/80 active:bg-surface border border-white/5 py-4 rounded-2xl transition-colors">
                        Log Out
                    </button>
                </div>
            </div>

            {/* Mobile Bottom Navigation Bar (iOS App Style) */}
            <MobileBottomNav />
        </main>
    );
}
