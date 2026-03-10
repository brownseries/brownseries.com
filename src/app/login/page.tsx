import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30 selection:text-warm-white flex flex-col relative">
            {/* Background Image with heavy overlay for aesthetic native feel */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
                <Image
                    src="/hero.png"
                    alt="Login Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-top opacity-50 filter grayscale-[0.5]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            </div>

            {/* Top Navigation Bar / Back button */}
            <nav className="relative z-50 w-full pt-safe">
                <div className="flex items-center px-4 h-14 md:h-16 max-w-7xl mx-auto w-full">
                    <Link href="/home" className="p-2 -ml-2 text-foreground/80 hover:text-warm-white bg-transparent active:bg-white/5 rounded-full transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                    </Link>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex flex-col justify-end sm:justify-center px-6 pb-12 sm:pb-24 max-w-md mx-auto w-full mt-10">

                {/* Brand Text */}
                <div className="mb-10 sm:mb-12">

                    <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-warm-white font-light leading-[1.1] mb-4 animate-fade-in-up delay-200">
                        Login to your account
                    </h2>
                    <p className="font-[family-name:var(--font-outfit)] text-[13px] text-foreground/70 font-light leading-relaxed max-w-[280px] animate-fade-in-up delay-300">
                        Enter your mobile number to sign in or create a new account.
                    </p>
                </div>

                {/* Form Input Area */}
                <div className="w-full space-y-6 animate-fade-in-up delay-500">
                    <div className="relative flex items-center bg-surface/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden focus-within:border-accent/60 focus-within:ring-1 focus-within:ring-accent/30 transition-all duration-300 group">

                        {/* Country Code Selector (Visual Only) */}
                        <div className="flex items-center gap-1.5 pl-4 pr-3 py-4 border-r border-white/10 text-warm-white select-none cursor-pointer active:bg-white/5 transition-colors">
                            <span className="font-[family-name:var(--font-outfit)] text-[15px] font-light">+91</span>
                            <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>

                        {/* Mobile Number Input */}
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="px-4 py-4 w-full bg-transparent text-[15px] text-warm-white placeholder:text-muted font-[family-name:var(--font-outfit)] font-light focus:outline-none tracking-wide"
                            autoFocus
                        />
                    </div>

                    <button className="w-full py-4 bg-warm-white text-background flex items-center justify-center gap-2 rounded-xl active:scale-[0.98] transition-all duration-200 font-[family-name:var(--font-outfit)] text-[13px] font-medium tracking-widest uppercase hover:bg-accent hover:text-warm-white relative overflow-hidden group">
                        <span className="relative z-10">Continue</span>
                        <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* Legal Disclaimer */}
                <p className="font-[family-name:var(--font-outfit)] text-[11px] text-muted text-center mt-8 font-light leading-relaxed animate-fade-in-up delay-700">
                    By continuing, you agree to our <Link href="#" className="underline underline-offset-2 decoration-white/20 hover:text-warm-white transition-colors">Terms of Service</Link> and <Link href="#" className="underline underline-offset-2 decoration-white/20 hover:text-warm-white transition-colors">Privacy Policy</Link>. Standard message and data rates may apply.
                </p>

            </div>
        </main>
    );
}
