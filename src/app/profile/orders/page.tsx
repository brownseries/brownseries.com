"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import { ChevronLeft, Package, Clock, CheckCircle2, Truck, ChevronRight } from "lucide-react";

// Mock data for orders
const mockOrders = [
    {
        id: "ORD-9824-XV",
        date: "Oct 24, 2026",
        status: "delivered",
        total: "$124.00",
        items: [
            {
                name: "Textured Knit Sweater",
                color: "Oatmeal",
                size: "M",
                image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&auto=format&fit=crop&q=60",
                qty: 1,
                price: "$124.00"
            }
        ]
    },
    {
        id: "ORD-8712-YK",
        date: "Oct 12, 2026",
        status: "shipped",
        total: "$89.50",
        items: [
            {
                name: "Classic Linen Shirt",
                color: "White",
                size: "L",
                image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
                qty: 1,
                price: "$89.50"
            }
        ]
    },
    {
        id: "ORD-6541-JZ",
        date: "Sep 28, 2026",
        status: "processing",
        total: "$250.00",
        items: [
            {
                name: "Tailored Trousers",
                color: "Charcoal",
                size: "32",
                image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60",
                qty: 1,
                price: "$140.00"
            },
            {
                name: "Silk Pocket Square",
                color: "Navy Pattern",
                size: "OS",
                image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&auto=format&fit=crop&q=60",
                qty: 1,
                price: "$110.00"
            }
        ]
    }
];

const tabs = ["All", "Processing", "Shipped", "Delivered"];

const getStatusBadge = (status: string) => {
    switch (status) {
        case "delivered":
            return {
                icon: <CheckCircle2 size={12} className="text-[#a8c7ba]" />,
                label: "Delivered",
                bg: "bg-[#a8c7ba]/10",
                text: "text-[#a8c7ba]"
            };
        case "shipped":
            return {
                icon: <Truck size={12} className="text-[#b8c5d6]" />,
                label: "On the way",
                bg: "bg-[#b8c5d6]/10",
                text: "text-[#b8c5d6]"
            };
        case "processing":
            return {
                icon: <Clock size={12} className="text-[#d9cbb8]" />,
                label: "Processing",
                bg: "bg-[#d9cbb8]/10",
                text: "text-[#d9cbb8]"
            };
        default:
            return {
                icon: <Package size={12} className="text-foreground/50" />,
                label: "Unknown",
                bg: "bg-surface",
                text: "text-foreground/70"
            };
    }
};

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredOrders = mockOrders.filter(order =>
        activeTab === "All" || order.status.toLowerCase() === activeTab.toLowerCase()
    );

    return (
        <main className="min-h-screen bg-background text-foreground pb-safe md:pb-8 flex flex-col selection:bg-accent/30 selection:text-warm-white">
            <Navbar />

            <div className="w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col flex-1 pb-24 md:pt-24 pt-6">

                {/* Header Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3">
                        <Link
                            href="/profile"
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface hover:bg-white/5 active:scale-95 transition-all"
                        >
                            <ChevronLeft size={20} className="text-warm-white" strokeWidth={1.5} />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl md:text-5xl text-warm-white font-medium tracking-wide">
                            Your Orders
                        </h1>
                        <p className="text-sm text-foreground/50">
                            Track, return, or buy items again.
                        </p>
                    </div>

                    {/* Custom Tabs */}
                    <div className="flex items-center gap-6 border-b border-white/5 pb-0 overflow-x-auto hide-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative pb-4 text-sm whitespace-nowrap transition-colors ${activeTab === tab ? "text-warm-white font-medium" : "text-foreground/50 hover:text-foreground/80"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="ordersTabActive"
                                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-warm-white"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Orders List */}
                <div className="mt-8 flex flex-col gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredOrders.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center py-20 px-4 text-center mt-12 bg-surface/30 rounded-3xl border border-white/5"
                            >
                                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-6 shadow-xl">
                                    <Package size={24} strokeWidth={1.5} className="text-warm-white/40" />
                                </div>
                                <h2 className="text-[18px] text-warm-white font-medium mb-2">No {activeTab.toLowerCase()} orders</h2>
                                <p className="text-[15px] text-foreground/50 max-w-[260px] leading-relaxed">
                                    When you place an order, it will show up here.
                                </p>
                                <Link
                                    href="/shop"
                                    className="mt-8 bg-warm-white hover:bg-warm-white/90 text-background px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-transform active:scale-95"
                                >
                                    Explore Collection
                                </Link>
                            </motion.div>
                        ) : (
                            filteredOrders.map((order, index) => {
                                const badge = getStatusBadge(order.status);

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        key={order.id}
                                    >
                                        <Link
                                            href={`/profile/orders/${order.id}`}
                                            className="block bg-surface/40 hover:bg-surface/60 border border-white/5 rounded-[24px] p-5 md:p-6 overflow-hidden transition-all group"
                                        >
                                            {/* Order Header */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <p className="text-[11px] uppercase tracking-widest text-foreground/40 mb-1.5">
                                                        Order {order.id}
                                                    </p>
                                                    <p className="text-[16px] text-warm-white font-light">
                                                        {order.date}
                                                    </p>
                                                </div>
                                                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badge.bg} backdrop-blur-md`}>
                                                    {badge.icon}
                                                    <span className={`text-[11px] font-medium uppercase tracking-wide ${badge.text}`}>
                                                        {badge.label}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Order Items Gallery */}
                                            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 overscroll-x-contain">
                                                {order.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative w-24 h-32 md:w-32 md:h-40 rounded-xl overflow-hidden bg-white/5 flex-shrink-0"
                                                    >
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                            sizes="(max-width: 768px) 96px, 128px"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Order Footer */}
                                            <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/5">
                                                <div className="flex flex-col">
                                                    <span className="text-[12px] text-foreground/50 mb-0.5">
                                                        {order.items.length} {order.items.length === 1 ? 'Item' : 'Items'}
                                                    </span>
                                                    <span className="text-[16px] text-warm-white font-medium">
                                                        {order.total}
                                                    </span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-warm-white group-hover:text-background group-hover:border-transparent transition-all">
                                                    <ChevronRight size={18} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <MobileBottomNav />
        </main>
    );
}
