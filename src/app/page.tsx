import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Full-screen hero section with image */}
      <section className="relative h-screen flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src="/hero.png"
            alt="BROWNSERIES editorial fashion"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-[#0e0c0a]/50 to-transparent" />
          <div className="absolute inset-0 bg-[#0e0c0a]/30" />
        </div>

        {/* Hero text overlaid on image */}
        <div className="relative z-10 w-full px-8 sm:px-12 md:px-20 pb-20 sm:pb-28">
          <div className="max-w-2xl">
            {/* Small tag */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up delay-200">
              <div className="h-px w-10 bg-accent animate-reveal-line delay-300" />
              <span className="font-[family-name:var(--font-outfit)] text-[10px] sm:text-xs tracking-[0.4em] uppercase text-accent font-light">
                Coming Soon
              </span>
            </div>

            {/* Main editorial heading */}
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-warm-white mb-6 animate-fade-in-up delay-500">
              Rooted in
              <br />
              Earth Tones
            </h1>

            {/* Subtext */}
            <p className="font-[family-name:var(--font-outfit)] text-sm sm:text-base text-foreground/60 font-extralight leading-relaxed max-w-md mb-10 animate-fade-in-up delay-700">
              Contemporary fashion designed for those who wear intention.
              Our debut collection is almost here.
            </p>

            {/* Email signup */}
            <div className="animate-fade-in-up delay-900">
              <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 text-sm text-warm-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors duration-500 font-[family-name:var(--font-outfit)] font-light tracking-wide"
                />
                <button className="px-7 py-3 bg-accent text-background text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] font-normal hover:bg-accent-light transition-colors duration-500 cursor-pointer whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-[11px] text-muted/50 mt-4 font-light tracking-wide">
                Be the first to shop the collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
