import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-white/5 safe-area-top">
            <div className="flex items-center justify-between px-4 h-14 md:h-16 max-w-7xl mx-auto">
                {/* Menu / Leading Icon - Mobile */}
                <button className="md:hidden flex-shrink-0 p-2 -ml-2 text-warm-white bg-transparent active:bg-white/5 rounded-full transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
                </button>

                {/* Logo (Centered on mobile, left on desktop) */}
                <Link href="/home" className="font-[family-name:var(--font-outfit)] text-lg md:text-xl font-bold tracking-widest uppercase text-warm-white flex-1 md:flex-none text-center md:text-left">
                    BROWN SERIES
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 justify-center flex-1 font-[family-name:var(--font-outfit)] text-[13px] text-foreground/80 font-medium">

                    {/* Shop Dropdown */}
                    <div className="relative group/nav py-5">
                        <Link href="/shop" className="hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
                            Shop
                            <svg className="w-3.5 h-3.5 text-foreground/40 group-hover/nav:text-accent transition-transform group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>

                        {/* Dropdown Menu Container */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                            <div className="w-48 bg-surface/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-2 flex flex-col gap-0.5">
                                <Link href="/shop" className="px-4 py-2.5 rounded-xl text-foreground hover:text-warm-white hover:bg-white/5 transition-colors font-medium">All Products</Link>
                                <div className="h-[1px] bg-white/5 my-1 mx-2" />
                                <Link href="/shop?filter=new" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">New Arrivals</Link>
                                <Link href="/shop?filter=outerwear" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Outerwear</Link>
                                <Link href="/shop?filter=knitwear" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Knitwear</Link>
                                <Link href="/shop?filter=bottoms" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Bottoms</Link>
                                <Link href="/shop?filter=accessories" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Accessories</Link>
                            </div>
                        </div>
                    </div>

                    {/* Collections Dropdown */}
                    <div className="relative group/nav py-5">
                        <Link href="/shop" className="hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
                            Collections
                            <svg className="w-3.5 h-3.5 text-foreground/40 group-hover/nav:text-accent transition-transform group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>

                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                            <div className="w-56 bg-surface/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-2 flex flex-col gap-0.5">
                                <Link href="/shop?collection=eid" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors flex items-center justify-between group/link">
                                    <span>Eid Collection</span>
                                    <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity font-bold uppercase tracking-wider">New</span>
                                </Link>
                                <Link href="/shop?collection=winter" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Winter Collection</Link>
                                <Link href="/shop?collection=essentials" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Everyday Essentials</Link>
                                <Link href="/shop?collection=premium" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Premium Accessories</Link>
                            </div>
                        </div>
                    </div>

                    {/* Explore Dropdown */}
                    <div className="relative group/nav py-5">
                        <Link href="#explore" className="hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
                            Explore
                            <svg className="w-3.5 h-3.5 text-foreground/40 group-hover/nav:text-accent transition-transform group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>

                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                            <div className="w-48 bg-surface/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-2 flex flex-col gap-0.5">
                                <Link href="#about" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">About Us</Link>
                                <Link href="#journal" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Journal & Blog</Link>
                                <Link href="#sustainability" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Sustainability</Link>
                                <div className="h-[1px] bg-white/5 my-1 mx-2" />
                                <Link href="#contact" className="px-4 py-2 rounded-xl text-foreground/70 hover:text-warm-white hover:bg-white/5 transition-colors">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
                    {/* Expanded Search Input */}
                    <div className="relative hidden sm:block w-48 lg:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block w-full pl-9 pr-4 py-2 bg-surface/80 border border-white/5 rounded-full text-[13px] font-[family-name:var(--font-outfit)] text-warm-white placeholder:text-foreground/30 focus:outline-none focus:border-white/20 focus:bg-surface transition-all"
                        />
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative group hidden sm:block py-5 -my-5">
                        <div className="p-2 text-foreground/80 hover:text-warm-white bg-transparent hover:bg-white/5 rounded-full transition-colors flex items-center">
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>

                        {/* Dropdown Menu Container */}
                        <div className="absolute right-0 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="w-56 bg-surface/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col py-2">
                                {/* User header */}
                                <div className="px-4 py-3 border-b border-white/5 mb-2">
                                    <p className="font-[family-name:var(--font-outfit)] text-[14px] text-warm-white font-medium">Guest User</p>
                                    <Link href="/login" className="font-[family-name:var(--font-outfit)] text-[12px] text-accent hover:text-warm-white transition-colors mt-0.5 inline-block">Sign In</Link>
                                </div>

                                <Link href="/profile#orders" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Orders</Link>
                                <Link href="/profile#addresses" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Addresses</Link>
                                <Link href="/saved" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Saved Items</Link>
                                <Link href="/profile#coupons" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Coupons</Link>

                                <div className="h-[1px] bg-white/5 my-2" />

                                <Link href="/profile#saved-cards" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Saved Cards</Link>
                                <Link href="/profile#saved-upi" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Saved UPI</Link>

                                <div className="h-[1px] bg-white/5 my-2" />

                                <Link href="/profile#contact" className="px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-foreground/80 hover:text-warm-white hover:bg-white/5 transition-colors">Contact Us</Link>

                                <div className="h-[1px] bg-white/5 my-2" />

                                <button className="w-full text-left px-4 py-2 font-[family-name:var(--font-outfit)] text-[14px] text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors">Log Out</button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Icon */}
                    <button className="relative p-2 text-foreground/80 hover:text-warm-white bg-transparent active:bg-white/5 rounded-full transition-colors">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        <span className="absolute top-1 right-1 bg-accent text-background text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
