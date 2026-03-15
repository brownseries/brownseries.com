"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CompleteTheLook from "@/components/CompleteTheLook";
import { useCartStore } from "@/store/useCartStore";
import { Bookmark, Heart, ShoppingCart, BadgeCheck, Star } from "lucide-react";
import { ALL_PRODUCTS } from "@/app/search/constants";
import { FEED_ITEMS } from "@/data/feed";
import { BUSINESS_ACCOUNTS } from "@/data/accounts";

export default function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(props.params);
  const slug = params.slug;

  const [selectedColor, setSelectedColor] = useState("espresso");
  const [selectedSize, setSelectedSize] = useState("M");
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(1247);
  const [liked, setLiked] = useState(false);
  const { openCart, getTotalItems } = useCartStore();
  const cartCount = getTotalItems();

  // Find the product from ALL_PRODUCTS or FEED_ITEMS
  const product = ALL_PRODUCTS.find(
    (p) =>
      p.id === Number(slug) ||
      p.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );
  const feedItem = FEED_ITEMS.find(
    (f) =>
      f.id === Number(slug) ||
      f.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );
  const productAccount = feedItem?.account ?? product?.account;
  const fullAccount = productAccount
    ? BUSINESS_ACCOUNTS.find((a) => a.id === productAccount.id)
    : null;

  // Use the feed item image first (since user clicked from feed), fall back to product
  const primaryImage = feedItem?.image ?? product?.image ?? "/hero.png";
  const images = [primaryImage];

  // Format the slug for display purposes
  const title =
    feedItem?.title ??
    product?.name ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const MOOD_TAGS = feedItem?.tags ?? [
    "#QuietLuxury",
    "#EarthTone",
    "#Modest",
    "#Outerwear",
  ];

  const colors = [
    { id: "espresso", hex: "#1a1512", name: "Deep Espresso" },
    { id: "sand", hex: "#d9cbb8", name: "Warm Sand" },
    { id: "terracotta", hex: "#c15c3d", name: "Terracotta" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-24 md:pb-0 selection:bg-accent/30 selection:text-warm-white">
      <Navbar />

      {/* Floating cart button — replaces nav tab cart on product pages */}
      <button
        onClick={openCart}
        className="md:hidden fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-surface border border-white/10 shadow-xl flex items-center justify-center active:scale-95 transition-transform"
        aria-label="View cart"
      >
        <ShoppingCart size={18} className="text-warm-white" strokeWidth={1.5} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-background text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      <div className="w-full max-w-7xl mx-auto md:px-8 mt-0 md:mt-24 md:grid md:grid-cols-2 md:gap-12">
        {/* Image Gallery - Native Swipeable on Mobile, Grid on Desktop */}
        <div className="w-full relative">
          {/* overflow-hidden wrapper isolates the swipe region so min-w-[100vw] items
                        don't break the outer page layout on mobile */}
          <div className="overflow-hidden md:overflow-visible">
            <div className="flex md:grid md:grid-cols-2 gap-1 md:gap-4 overflow-x-auto hide-scrollbar overscroll-x-contain snap-x snap-mandatory h-[65vh] md:h-auto md:min-h-[80vh] md:w-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`relative w-full min-w-[100vw] md:min-w-0 md:w-full h-full snap-start snap-always ${index === 0 ? "md:col-span-2 md:aspect-[4/5]" : "md:aspect-square"} bg-surface`}
                >
                  <Image
                    src={src}
                    alt={`${title} - view ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Mobile pagination dots (aesthetic) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-warm-white" : "bg-warm-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="px-6 py-8 md:py-0 md:pr-0 pb-32 md:pb-16 flex flex-col md:sticky md:top-24 md:h-fit">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest mb-4">
            <Link
              href="/shop"
              className="hover:text-warm-white transition-colors"
            >
              Shop
            </Link>
            <span>/</span>
            <Link
              href="#outerwear"
              className="hover:text-warm-white transition-colors"
            >
              Outerwear
            </Link>
            <span>/</span>
            <span className="text-warm-white truncate">{title}</span>
          </div>

          {/* Account card */}
          {productAccount && (
            <Link
              href={`/u/${productAccount.username}`}
              className="flex items-center gap-3 mb-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <span className="w-9 h-9 rounded-full bg-surface border border-white/10 flex items-center justify-center text-base">
                {productAccount.avatar}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] text-warm-white font-medium group-hover:text-accent transition-colors">
                    {productAccount.displayName}
                  </span>
                  {productAccount.verified && (
                    <BadgeCheck
                      size={13}
                      className="text-accent flex-shrink-0"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  )}
                </div>
                {fullAccount?.businessInfo && (
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="flex items-center gap-0.5 text-[10px] text-foreground/40">
                      <Star size={9} className="text-accent" />{" "}
                      {fullAccount.businessInfo.rating}
                    </span>
                    <span className="text-[10px] text-foreground/30">·</span>
                    <span className="text-[10px] text-foreground/40">
                      {fullAccount.businessInfo.totalSales} sales
                    </span>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest border border-accent/30 px-3 py-1.5 rounded-full group-hover:bg-accent group-hover:text-background transition-all">
                Follow
              </span>
            </Link>
          )}

          <h1 className="text-2xl md:text-4xl text-warm-white mb-2 leading-tight tracking-wide font-semibold">
            {title}
          </h1>

          {/* Mood tags */}
          <div className="flex flex-wrap gap-1.5 mb-3 pt-1">
            {MOOD_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-foreground/50 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price + save/like row */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg md:text-xl text-foreground/90 font-light">
              $185.00
            </p>
            <div className="flex items-center gap-3">
              {/* Save count */}
              <button
                onClick={() => {
                  setSaved((s) => !s);
                  setSaveCount((n) => (saved ? n - 1 : n + 1));
                }}
                className="flex items-center gap-1.5 active:scale-105 transition-transform"
                aria-label="Save"
              >
                <Bookmark
                  size={20}
                  className={`transition-colors ${saved ? "fill-accent text-accent" : "text-foreground/50"}`}
                />
                <span className="text-[12px] text-foreground/50">
                  {saveCount >= 1000
                    ? `${(saveCount / 1000).toFixed(1)}k`
                    : saveCount}
                </span>
              </button>
              {/* Like */}
              <button
                onClick={() => setLiked((l) => !l)}
                className="active:scale-110 transition-transform"
                aria-label="Like"
              >
                <Heart
                  size={20}
                  className={`transition-colors ${liked ? "fill-red-400 text-red-400" : "text-foreground/50"}`}
                />
              </button>
            </div>
          </div>

          <p className="text-sm text-foreground/70 leading-relaxed mb-8">
            An elevated essential designed for timeless wear. Crafted with
            premium, sustainably sourced materials to provide unmatched comfort
            and an elegant drape across the silhouette.
          </p>

          {/* Color Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-warm-white/90 uppercase tracking-widest font-medium">
                Color
              </span>
              <span className="text-xs text-foreground/50">
                {colors.find((c) => c.id === selectedColor)?.name}
              </span>
            </div>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedColor === color.id ? "ring-1 ring-offset-2 ring-offset-background ring-warm-white" : "ring-1 ring-border/20 hover:ring-border/50"}`}
                  aria-label={`Select ${color.name}`}
                >
                  <span
                    className="w-8 h-8 rounded-full border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-warm-white/90 uppercase tracking-widest font-medium">
                Size
              </span>
              <button className="text-[10px] uppercase tracking-widest text-foreground/50 underline underline-offset-4 hover:text-warm-white transition-colors">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3.5 flex items-center justify-center text-xs tracking-wider transition-colors ${selectedSize === size ? "bg-warm-white text-background font-medium" : "border border-border/50 text-foreground hover:border-warm-white/40"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <button className="flex w-full bg-accent hover:bg-accent/90 text-warm-white py-4 items-center justify-center text-xs tracking-[0.2em] font-medium transition-colors mb-12 active:scale-[0.98]">
            ADD TO BAG - $185
          </button>

          {/* Accordions */}
          <div className="border-t border-border/30">
            {/* Details */}
            <div className="border-b border-border/30">
              <button
                onClick={() => toggleAccordion("details")}
                className="w-full py-5 flex items-center justify-between text-sm uppercase tracking-widest text-warm-white/90"
              >
                Size & Fit
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${openAccordion === "details" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-sm text-foreground/60 ${openAccordion === "details" ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="list-disc pl-4 space-y-2">
                  <li>Fits true to size. Take your normal size.</li>
                  <li>Designed for a relaxed, slightly oversized fit.</li>
                  <li>Mid-weight, non-stretchy fabric.</li>
                  <li>Model is 185cm/6'1" and is wearing a size M.</li>
                </ul>
              </div>
            </div>

            {/* Care */}
            <div className="border-b border-border/30">
              <button
                onClick={() => toggleAccordion("care")}
                className="w-full py-5 flex items-center justify-between text-sm uppercase tracking-widest text-warm-white/90"
              >
                Materials & Care
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${openAccordion === "care" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-sm text-foreground/60 ${openAccordion === "care" ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p>
                  100% Organic Cotton. Dry clean only to preserve structure and
                  color. Do not tumble dry. Cool iron inside out.
                </p>
              </div>
            </div>

            {/* Shipping */}
            <div className="border-b border-border/30">
              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full py-5 flex items-center justify-between text-sm uppercase tracking-widest text-warm-white/90"
              >
                Shipping & Returns
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${openAccordion === "shipping" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-sm text-foreground/60 ${openAccordion === "shipping" ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p>
                  Complimentary express global shipping on orders over $200.
                  Returns accepted within 14 days of receipt in original, unworn
                  condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete the Look */}
      <CompleteTheLook />
    </main>
  );
}
