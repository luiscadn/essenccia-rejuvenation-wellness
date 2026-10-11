'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Sparkles,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { useCart } from '@/context/cart-context';

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    freeShippingThreshold,
    freeShippingRemaining,
    freeShippingProgress,
    upsellProducts,
    addItem,
    promoCode,
    discount,
    applyPromoCode,
  } = useCart();

  const [inputPromo, setInputPromo] = useState('');
  const [promoError, setPromoError] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPromo.trim()) return;
    const success = applyPromoCode(inputPromo);
    if (!success) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2500);
    } else {
      setInputPromo('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        setCheckoutComplete(false);
        clearCart();
        closeCart();
      }, 3500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity animate-fade-in"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Your Shopping Bag"
        className="relative w-full max-w-md bg-[#f7f7f4] shadow-2xl z-10 flex flex-col h-full animate-slide-in-right border-l border-[#a2a1ba]/25"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#a2a1ba]/25 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#484774]" />
            <h2 className="font-serif text-xl font-light text-[#484774]">
              Your Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart drawer"
            className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#d7a761]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Free Shipping & Gift Progress Bar */}
        <div className="bg-[#f0efec] px-5 py-3.5 border-b border-[#a2a1ba]/25">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            {freeShippingRemaining > 0 ? (
              <span className="text-stone-700 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#484774]" />
                Add <span className="font-bold text-[#484774] tabular-nums">${freeShippingRemaining}</span> more for Free Shipping
              </span>
            ) : (
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Complimentary Shipping & VIP Sample Unlocked!
              </span>
            )}
            <span className="text-stone-500 text-[11px] tabular-nums font-semibold">
              ${subtotal} / ${freeShippingThreshold}
            </span>
          </div>
          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d7a761] to-[#484774] transition-all duration-500 ease-out rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f0efec] flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8 stroke-1" />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-xl font-light text-[#484774]">Your bag is empty</p>
                <p className="text-xs text-stone-500">Discover our clinical restorative formulations below.</p>
              </div>
              <button
                onClick={closeCart}
                className="mt-4 px-6 py-2.5 bg-[#484774] text-[#f7f7f4] text-xs uppercase tracking-wider font-medium"
              >
                Browse Skincare Boutique
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3.5 rounded-xl border border-[#a2a1ba]/25 flex gap-3.5 shadow-sm"
                >
                  <div className="relative w-20 h-20 bg-[#f0efec] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif text-sm font-medium text-[#484774] leading-tight">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          aria-label={`Remove ${item.product.name} from bag`}
                          className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">{item.product.size}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50 text-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 hover:bg-stone-200 transition-colors"
                        >
                          <Minus className="w-3 h-3 text-stone-600" />
                        </button>
                        <span className="px-2 font-medium text-stone-800 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 hover:bg-stone-200 transition-colors"
                        >
                          <Plus className="w-3 h-3 text-stone-600" />
                        </button>
                      </div>

                      <span className="font-sans tracking-wide text-base font-light text-[#484774] tabular-nums">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DYNAMIC UPSELLING MODULE (Stem Beauty Inspired) */}
          {upsellProducts.length > 0 && (
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#484774] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Curated Ritual Pairings
                </span>
                <span className="text-[10px] text-stone-400">1-Click Add</span>
              </div>

              <div className="space-y-2.5">
                {upsellProducts.map((upsell) => (
                  <div
                    key={upsell.id}
                    className="p-3 bg-white rounded-xl border border-dashed border-[#d7a761]/60 flex items-center justify-between gap-3 hover:border-[#484774] transition-colors"
                  >
                    <div className="relative w-12 h-12 bg-[#f0efec] rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={upsell.image}
                        alt={upsell.name}
                        fill
                        sizes="48px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-[#484774] truncate">
                          {upsell.name}
                        </p>
                      </div>
                      <p className="text-[10px] text-stone-500 truncate">{upsell.subtitle}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="font-sans tracking-wide text-xs font-light text-[#484774] tabular-nums">
                          ${upsell.price}
                        </span>
                        {upsell.originalPrice && (
                          <span className="text-[10px] text-stone-400 line-through tabular-nums">
                            ${upsell.originalPrice}
                          </span>
                        )}
                        {upsell.badge && (
                          <span className="text-[9px] bg-[#f0efec] text-[#484774] px-1.5 py-0.2 rounded font-medium">
                            {upsell.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => addItem(upsell)}
                      className="px-3 py-1.5 bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-[11px] uppercase tracking-wider font-medium rounded transition-all flex-shrink-0 flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3 text-[#d7a761]" />
                      <span>Add</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Promo Code Accordion / Input */}
          {items.length > 0 && (
            <div className="pt-2">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (try: ESSENCCIA10)"
                  value={inputPromo}
                  onChange={(e) => setInputPromo(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#d7a761]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs uppercase tracking-wider font-medium rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoError && (
                <p className="text-[11px] text-rose-600 mt-1">Invalid code. Try ESSENCCIA10</p>
              )}
              {promoCode && (
                <p className="text-[11px] text-emerald-700 mt-1 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Code “{promoCode}” active (10% VIP savings)
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#a2a1ba]/25 bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium text-stone-900 tabular-nums">${subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>VIP Privilege Discount</span>
                  <span className="tabular-nums">-10%</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>Insured Nationwide Shipping</span>
                <span className="tabular-nums">
                  {freeShippingRemaining === 0 ? 'FREE' : '$9.00'}
                </span>
              </div>
              <div className="flex justify-between text-stone-900 pt-2 border-t border-stone-100 font-semibold text-sm">
                <span className="font-sans text-xs uppercase tracking-[0.18em]">Estimated Total</span>
                <span className="font-sans tracking-wide text-lg tabular-nums">
                  ${freeShippingRemaining === 0 ? subtotal : subtotal + 9}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            {checkoutComplete ? (
              <div className="w-full py-3.5 bg-emerald-700 text-white text-xs uppercase tracking-[0.2em] font-medium text-center rounded-lg flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Order Placed! Thank You</span>
              </div>
            ) : (
              <button
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full py-4 bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-xs uppercase tracking-[0.2em] font-medium transition-all rounded-lg flex items-center justify-center gap-2 shadow-md focus-visible:ring-2 focus-visible:ring-[#d7a761]"
              >
                {isCheckingOut ? (
                  <span className="animate-pulse">Securing Order…</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#d7a761]" />
                  </>
                )}
              </button>
            )}

            {/* Trust Badges */}
            <div className="pt-1 flex items-center justify-center gap-4 text-[10px] text-stone-500 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                256-Bit SSL Encrypted
              </span>
              <span>•</span>
              <span>Westport Clinic Pickup</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
