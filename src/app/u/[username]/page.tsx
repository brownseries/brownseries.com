"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { BUSINESS_ACCOUNTS } from "@/data/accounts";
import { ALL_PRODUCTS } from "@/app/search/constants";
import { FEED_ITEMS } from "@/data/feed";
import { BadgeCheck, MapPin, Star, Grid, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessProfilePage(props: {
  params: Promise<{ username: string }>;
}) {
  const params = use(props.params);
  const username = decodeURIComponent(params.username);
  const account = BUSINESS_ACCOUNTS.find((a) => a.username === username);

  if (!account) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center text-warm-white">
        <Navbar />
        <p className="text-foreground/60 mt-20">Account not found</p>
        <Link href="/" className="text-accent mt-4 text-sm">
          Go home
        </Link>
        <MobileBottomNav />
      </main>
    );
  }

  const products = ALL_PRODUCTS.filter((p) => p.account.id === account.id);
  const pins = FEED_ITEMS.filter((p) => p.account.id === account.id);
  const [activeTab, setActiveTab] = useState<"pins" | "shop">("pins");
  const biz = account.businessInfo;

  return (
    <main className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
        {/* Profile header */}
        <div className="pt-8 pb-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-surface border border-white/10 flex items-center justify-center text-3xl mb-4">
            {account.avatar}
          </div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl text-warm-white font-bold">
              {account.displayName}
            </h1>
            {account.verified && (
              <BadgeCheck
                size={18}
                className="text-accent fill-accent stroke-background"
              />
            )}
          </div>
          <p className="text-[13px] text-foreground/50">@{account.username}</p>
          {account.bio && (
            <p className="text-[13px] text-foreground/60 mt-2 max-w-xs">
              {account.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-8 mt-5">
            <div className="flex flex-col items-center">
              <span className="text-lg text-warm-white font-bold">
                {(account.followers / 1000).toFixed(1)}k
              </span>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg text-warm-white font-bold">
                {account.following}
              </span>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                Following
              </span>
            </div>
            {biz && (
              <div className="flex flex-col items-center">
                <span className="text-lg text-warm-white font-bold">
                  {biz.totalSales}
                </span>
                <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                  Sales
                </span>
              </div>
            )}
          </div>

          {/* Business pills */}
          {biz && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {biz.location && (
                <span className="flex items-center gap-1 text-[11px] text-foreground/50 bg-white/5 px-3 py-1 rounded-full">
                  <MapPin size={11} /> {biz.location}
                </span>
              )}
              <span className="flex items-center gap-1 text-[11px] text-foreground/50 bg-white/5 px-3 py-1 rounded-full">
                <Star size={11} className="text-accent" /> {biz.rating}
              </span>
              <span className="text-[11px] text-foreground/50 bg-white/5 px-3 py-1 rounded-full">
                {biz.category}
              </span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-6 w-full max-w-xs">
            <button className="flex-1 py-2.5 bg-accent text-background text-[12px] font-bold uppercase tracking-widest rounded-xl active:scale-95 transition-transform">
              Follow
            </button>
            <button className="flex-1 py-2.5 bg-white/5 border border-white/10 text-warm-white text-[12px] font-bold uppercase tracking-widest rounded-xl active:scale-95 transition-transform">
              Message
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-white/5 mb-6">
          {(["pins", "shop"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative flex items-center gap-2 ${activeTab === tab ? "text-warm-white" : "text-foreground/30 hover:text-foreground/60"}`}
            >
              {tab === "pins" ? <Grid size={15} /> : <ShoppingBag size={15} />}
              {tab === "pins"
                ? `Pins (${pins.length})`
                : `Shop (${products.length})`}
              {activeTab === tab && (
                <motion.div
                  layoutId="profile-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "pins" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {pins.map((pin) => (
              <Link key={pin.id} href={pin.href} className="group">
                <div
                  className={`relative overflow-hidden rounded-xl bg-surface ${pin.aspect === "tall" ? "aspect-[3/4]" : "aspect-square"}`}
                >
                  <Image
                    src={pin.image}
                    alt={pin.title}
                    fill
                    sizes="33vw"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
                <p className="text-[12px] text-warm-white font-medium mt-1.5 truncate">
                  {pin.title}
                </p>
              </Link>
            ))}
            {pins.length === 0 && (
              <p className="text-foreground/40 text-sm col-span-full text-center py-12">
                No pins yet
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="33vw"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
                <h3 className="text-[13px] text-warm-white font-medium mt-2 truncate">
                  {product.name}
                </h3>
                <p className="text-[12px] text-foreground/50">
                  {product.price}
                </p>
              </Link>
            ))}
            {products.length === 0 && (
              <p className="text-foreground/40 text-sm col-span-full text-center py-12">
                No products yet
              </p>
            )}
          </div>
        )}
      </div>
      <MobileBottomNav />
    </main>
  );
}
