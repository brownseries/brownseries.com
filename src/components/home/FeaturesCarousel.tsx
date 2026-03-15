export default function FeaturesCarousel() {
  const features = [
    { icon: "🚚", label: "Free Delivery over $20" },
    { icon: "⭐", label: "4.9 / 5 TrustScore" },
    { icon: "🔒", label: "Secure Payments" },
    { icon: "✓", label: "Authentic Brands" },
  ];

  return (
    <section className="bg-surface/30 border-y border-white/5 py-3 md:py-10">
      {/* Mobile: compact inline scroll */}
      <div className="md:hidden flex gap-2 px-3 overflow-x-auto hide-scrollbar overscroll-x-contain touch-pan-x snap-x snap-mandatory">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-1.5 flex-shrink-0 snap-center bg-surface/50 px-3 py-2 rounded-full"
          >
            <span className="text-[12px]">{f.icon}</span>
            <span className="text-[11px] font-medium text-foreground/70 whitespace-nowrap">
              {f.label}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid max-w-7xl mx-auto px-8 grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-3 justify-center text-center"
          >
            <span className="text-lg">{f.icon}</span>
            <span className="text-[14px] font-light text-foreground/90">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
