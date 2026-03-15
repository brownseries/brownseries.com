"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, BadgeCheck } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getItemsByAccount,
  } = useCartStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const accountGroups = getItemsByAccount();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white text-stone-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pt-[calc(1.5rem+env(safe-area-inset-top))] border-b border-stone-200">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingBag size={22} /> Bag
                <span className="text-sm font-normal text-stone-400">
                  ({items.length})
                </span>
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items grouped by account */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-stone-400">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-lg">Your bag is empty</p>
                  <button
                    onClick={closeCart}
                    className="text-sm text-stone-900 underline underline-offset-4"
                  >
                    Continue browsing
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {Array.from(accountGroups.entries()).map(
                    ([accountId, accountItems]) => {
                      const acct = accountItems[0]?.account;
                      return (
                        <div key={accountId} className="py-4">
                          {/* Account header */}
                          {acct && (
                            <Link
                              href={`/u/${acct.username}`}
                              onClick={closeCart}
                              className="flex items-center gap-2 px-6 pb-3 group"
                            >
                              <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs">
                                {acct.avatar}
                              </span>
                              <span className="text-[13px] font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                                {acct.displayName}
                              </span>
                              {acct.verified && (
                                <BadgeCheck
                                  size={13}
                                  className="text-blue-500"
                                  fill="currentColor"
                                  strokeWidth={0}
                                />
                              )}
                            </Link>
                          )}
                          {/* Items */}
                          {accountItems.map((item) => (
                            <div key={item.id} className="flex gap-4 px-6 py-3">
                              <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-medium truncate">
                                  {item.name}
                                </h3>
                                {(item.color || item.size) && (
                                  <p className="text-xs text-stone-400 mt-0.5">
                                    {[item.color, item.size]
                                      .filter(Boolean)
                                      .join(" · ")}
                                  </p>
                                )}
                                <p className="text-sm font-bold mt-1">
                                  ₹{item.price}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex items-center gap-2 border border-stone-200 rounded-full">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity - 1,
                                        )
                                      }
                                      className="p-1.5 hover:bg-stone-100 rounded-full transition-colors"
                                      aria-label="Decrease quantity"
                                    >
                                      <Minus size={14} />
                                    </button>
                                    <span className="text-sm font-medium w-6 text-center">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity + 1,
                                        )
                                      }
                                      className="p-1.5 hover:bg-stone-100 rounded-full transition-colors"
                                      aria-label="Increase quantity"
                                    >
                                      <Plus size={14} />
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                                    aria-label="Remove item"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    },
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-stone-200 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <button className="w-full bg-stone-900 text-white py-4 rounded-2xl font-medium hover:bg-stone-800 active:scale-[0.98] transition-all">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
