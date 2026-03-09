export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px] animate-pulse-glow"
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Decorative line */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-line-expand" />
        </div>

        {/* Coming Soon */}
        <p className="text-xs tracking-[0.5em] uppercase text-muted font-light mb-6 animate-fade-in-up delay-200">
          Coming Soon
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-8 animate-fade-in-up delay-400">
          <span className="block">Something</span>
          <span className="block mt-2 animate-shimmer font-light">
            Extraordinary
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted font-light leading-relaxed max-w-md mx-auto mb-12 animate-fade-in-up delay-600">
          We&apos;re crafting a new chapter in contemporary fashion.
          <br className="hidden sm:block" />
          Stay tuned for something truly special.
        </p>

        {/* Decorative line bottom */}
        <div className="flex justify-center mt-2 animate-fade-in delay-800">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>

        {/* Optional: Email notify */}
        <div className="mt-14 animate-fade-in-up delay-1000">
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 bg-surface border border-border rounded-full text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-colors duration-300"
            />
            <button className="w-full sm:w-auto px-7 py-3 bg-accent/10 border border-accent/30 text-accent text-sm tracking-wider uppercase rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer whitespace-nowrap">
              Notify Me
            </button>
          </div>
          <p className="text-[11px] text-muted/50 mt-4 font-light">
            Be the first to know when we launch.
          </p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-px h-16 bg-gradient-to-b from-accent/20 to-transparent animate-fade-in delay-800" />
      <div className="absolute top-24 left-8 h-px w-16 bg-gradient-to-r from-accent/20 to-transparent animate-fade-in delay-800" />

      <div className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-t from-accent/20 to-transparent animate-fade-in delay-800" />
      <div className="absolute bottom-8 right-8 h-px w-16 bg-gradient-to-l from-accent/20 to-transparent animate-fade-in delay-800" />
    </main>
  );
}
