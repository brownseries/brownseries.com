"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { CURRENT_USER } from "@/data/accounts";
import { SAVED_ITEMS } from "@/app/search/constants";
import { FEED_ITEMS } from "@/data/feed";
import { motion } from "framer-motion";
import {
  Settings,
  Grid,
  Bookmark,
  Heart,
  ChevronRight,
  ShoppingBag,
  Store,
  BarChart3,
  Package,
  Share2,
  Edit3,
  User,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<
    "posts" | "saved" | "liked" | "settings"
  >("posts");
  const user = CURRENT_USER;

  // Mock user posts (items the user has shared/pinned)
  const userPosts = FEED_ITEMS.slice(0, 6);

  // Mock liked items (first 4 feed items)
  const likedItems = FEED_ITEMS.slice(2, 6);

  return (
    <main className="min-h-screen bg-background pb-24 md:pb-8">
      <Navbar />

      <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
        {/* Profile header */}
        <div className="pt-8 pb-2 flex flex-col items-center text-center">
          {/* Settings gear — top right */}
          <div className="w-full flex justify-end mb-2">
            <button
              onClick={() => setActiveTab("settings")}
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Settings"
            >
              <Settings
                size={20}
                className="text-foreground/50"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-surface border-2 border-white/10 flex items-center justify-center text-4xl mb-4">
            {user.avatar}
          </div>

          {/* Name & username */}
          <h1 className="text-xl text-warm-white font-bold">
            {user.displayName}
          </h1>
          <p className="text-[13px] text-foreground/50 mt-0.5">
            @{user.username}
          </p>

          {/* Account type badge */}
          <span className="text-[9px] bg-white/10 text-foreground/60 px-3 py-1 rounded-full font-bold uppercase tracking-wider mt-2">
            {user.accountType} account
          </span>

          {/* Bio */}
          {user.bio && (
            <p className="text-[13px] text-foreground/60 mt-3 max-w-xs">
              {user.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-10 mt-5">
            <div className="flex flex-col items-center">
              <span className="text-lg text-warm-white font-bold">
                {userPosts.length}
              </span>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                Posts
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg text-warm-white font-bold">
                {user.followers}
              </span>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg text-warm-white font-bold">
                {user.following}
              </span>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                Following
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-6 w-full max-w-xs">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 text-warm-white text-[12px] font-bold uppercase tracking-widest rounded-xl active:scale-95 transition-transform">
              <Edit3 size={14} />
              Edit Profile
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-white/10 text-warm-white text-[12px] font-bold uppercase tracking-widest rounded-xl active:scale-95 transition-transform">
              <Share2 size={14} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-white/5 mt-6 mb-6">
          {[
            { id: "posts" as const, icon: Grid, label: "Posts" },
            { id: "saved" as const, icon: Bookmark, label: "Saved" },
            { id: "liked" as const, icon: Heart, label: "Liked" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative flex items-center gap-2 ${activeTab === tab.id
                  ? "text-warm-white"
                  : "text-foreground/30 hover:text-foreground/60"
                }`}
            >
              <tab.icon size={15} />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="profile-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "posts" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-1"
          >
            {userPosts.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="33vw"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
              </Link>
            ))}
            {userPosts.length === 0 && (
              <div className="col-span-3 flex flex-col items-center py-16 text-center gap-3">
                <Grid size={32} className="text-foreground/20" />
                <p className="text-foreground/40 text-sm">No posts yet</p>
                <p className="text-foreground/30 text-xs">
                  Share your first look
                </p>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "saved" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-1"
          >
            {SAVED_ITEMS.map((item) => (
              <Link key={item.id} href={`/shop/${item.id}`} className="group">
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="33vw"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
              </Link>
            ))}
            {SAVED_ITEMS.length === 0 && (
              <div className="col-span-3 flex flex-col items-center py-16 text-center gap-3">
                <Bookmark size={32} className="text-foreground/20" />
                <p className="text-foreground/40 text-sm">Nothing saved yet</p>
                <Link href="/search" className="text-accent text-sm">
                  Discover something
                </Link>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "liked" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-1"
          >
            {likedItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div
                  className={`relative overflow-hidden bg-surface ${item.aspect === "tall" ? "aspect-[3/4]" : "aspect-square"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="33vw"
                    className="object-cover brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
              </Link>
            ))}
            {likedItems.length === 0 && (
              <div className="col-span-3 flex flex-col items-center py-16 text-center gap-3">
                <Heart size={32} className="text-foreground/20" />
                <p className="text-foreground/40 text-sm">No likes yet</p>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-5"
          >
            {/* Activity */}
            <section>
              <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
                Activity
              </h3>
              <div className="bg-surface rounded-2xl overflow-hidden">
                {(
                  [
                    {
                      href: "/profile/orders",
                      icon: ShoppingBag,
                      label: "Orders",
                    },
                    { href: "/saved", icon: Bookmark, label: "Saved Items" },
                  ] as const
                ).map((item, i) => (
                  <div key={item.label}>
                    {i > 0 && <div className="h-[1px] bg-white/5 ml-[52px]" />}
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 flex justify-center items-center flex-shrink-0">
                          <item.icon
                            size={20}
                            strokeWidth={1.5}
                            className="text-warm-white/80"
                          />
                        </div>
                        <span className="text-[15px] text-warm-white">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-foreground/30 flex-shrink-0"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Business */}
            <section>
              <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
                Business
              </h3>
              <div className="bg-surface rounded-2xl overflow-hidden">
                <Link
                  href="/coming-soon"
                  className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                      <Store
                        size={20}
                        strokeWidth={1.5}
                        className="text-accent"
                      />
                    </div>
                    <div>
                      <span className="text-[15px] text-warm-white block">
                        Switch to Business
                      </span>
                      <span className="text-[11px] text-foreground/40">
                        Start selling on Brown Series
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-foreground/30 flex-shrink-0"
                  />
                </Link>
                <div className="h-[1px] bg-white/5 ml-[52px]" />
                {(
                  [
                    {
                      href: "/coming-soon",
                      icon: BarChart3,
                      label: "Creator Dashboard",
                    },
                    {
                      href: "/coming-soon",
                      icon: Package,
                      label: "My Listings",
                    },
                  ] as const
                ).map((item, i) => (
                  <div key={item.label}>
                    {i > 0 && <div className="h-[1px] bg-white/5 ml-[52px]" />}
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 flex justify-center items-center flex-shrink-0">
                          <item.icon
                            size={20}
                            strokeWidth={1.5}
                            className="text-warm-white/80"
                          />
                        </div>
                        <span className="text-[15px] text-warm-white">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-foreground/30 flex-shrink-0"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Support */}
            <section>
              <h3 className="text-[12px] uppercase tracking-wider text-foreground/40 mb-2.5 px-3 font-bold">
                Support
              </h3>
              <div className="bg-surface rounded-2xl overflow-hidden">
                <Link
                  href="#contact"
                  className="flex items-center justify-between py-4 px-4 active:bg-white/5 transition-colors w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex justify-center items-center flex-shrink-0">
                      <User
                        size={20}
                        strokeWidth={1.5}
                        className="text-warm-white/80"
                      />
                    </div>
                    <span className="text-[15px] text-warm-white">
                      Help & Support
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-foreground/30 flex-shrink-0"
                  />
                </Link>
              </div>
            </section>

            {/* Logout */}
            <div className="pt-1 pb-4">
              <button className="w-full text-[15px] font-medium text-red-500 bg-surface/80 active:bg-surface border border-white/5 py-4 rounded-2xl transition-colors">
                Log Out
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <MobileBottomNav />
    </main>
  );
}
