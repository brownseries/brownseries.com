export default function FeaturesCarousel() {
    return (
        <section className="bg-surface/30 md:border-y md:border-white/5 py-6 md:py-10">
            {/* Scrollable container for native app horizontal swipe feel */}
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scrollbar overscroll-x-contain touch-pan-x snap-x snap-mandatory flex md:grid md:grid-cols-4 gap-4 md:gap-8 pb-2 md:pb-0">
                {/* Feature 1 */}
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center text-center md:text-left min-w-[200px] md:min-w-0 snap-center bg-surface/50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                    <svg className="w-8 h-8 md:w-6 md:h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    <span className="font-[family-name:var(--font-outfit)] text-[13px] md:text-[14px] font-medium md:font-light text-foreground/90">Free Delivery over $20</span>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center text-center md:text-left min-w-[200px] md:min-w-0 snap-center bg-surface/50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                    <svg className="w-8 h-8 md:w-6 md:h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span className="font-[family-name:var(--font-outfit)] text-[13px] md:text-[14px] font-medium md:font-light text-foreground/90">4.9 / 5 TrustScore</span>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center text-center md:text-left min-w-[200px] md:min-w-0 snap-center bg-surface/50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                    <svg className="w-8 h-8 md:w-6 md:h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    <span className="font-[family-name:var(--font-outfit)] text-[13px] md:text-[14px] font-medium md:font-light text-foreground/90">Secure Payments</span>
                </div>
                {/* Feature 4 */}
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center text-center md:text-left min-w-[200px] md:min-w-0 snap-center bg-surface/50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                    <svg className="w-8 h-8 md:w-6 md:h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    <span className="font-[family-name:var(--font-outfit)] text-[13px] md:text-[14px] font-medium md:font-light text-foreground/90">Authentic Brands</span>
                </div>
            </div>
        </section>
    );
}
