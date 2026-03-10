"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';

export default function CartDrawer() {
    const {
        isOpen,
        closeCart,
        items,
        removeItem,
        updateQuantity,
        getTotalPrice
    } = useCartStore();

    // Setup hydration safety for Zustand states
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white text-stone-900 shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 pt-[calc(1.5rem+env(safe-area-inset-top))] border-b border-stone-200">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6" />
                                Your Bag
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-3 -mr-1 hover:bg-stone-100 rounded-full transition-colors active:scale-95"
                            >
                                <X className="w-5 h-5 text-stone-500" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                                    <ShoppingBag className="w-16 h-16 opacity-20" />
                                    <p className="text-lg">Your bag is empty.</p>
                                    <button
                                        onClick={closeCart}
                                        className="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={`${item.id}-${item.size}-${item.color}`}
                                        className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100"
                                    >
                                        {/* Item Image */}
                                        <div className="relative w-24 h-24 bg-stone-200 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-stone-300 animate-pulse" />
                                            )}
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start gap-2">
                                                <div>
                                                    <h3 className="font-semibold text-stone-800 line-clamp-1">{item.name}</h3>
                                                    {item.color && <p className="text-sm text-stone-500">Color: {item.color}</p>}
                                                    {item.size && <p className="text-sm text-stone-500">Size: {item.size}</p>}
                                                </div>
                                                <p className="font-bold text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center bg-white rounded-full border border-stone-200 shadow-sm overflow-hidden">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 px-2 hover:bg-stone-100 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 px-2 hover:bg-stone-100 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                {/* Remove Action */}
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-stone-50 border-t border-stone-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-10">
                                <div className="flex justify-between mb-4 text-stone-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-stone-900">${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-6 text-stone-600">
                                    <span>Shipping</span>
                                    <span className="text-sm text-stone-400">Calculated at checkout</span>
                                </div>

                                <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all active:scale-[0.98] shadow-lg shadow-stone-900/20">
                                    Checkout Now
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
