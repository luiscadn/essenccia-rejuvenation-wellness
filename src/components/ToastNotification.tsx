'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '@/context/cart-context';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <aside
      aria-live="polite"
      aria-label="Cart notification"
      className="fixed bottom-6 right-6 z-50 bg-[#484774] text-[#f7f7f4] px-5 py-3.5 rounded-xl shadow-2xl border border-[#d7a761]/40 flex items-center gap-3 animate-fade-in text-xs tracking-wide"
    >
      <div className="w-5 h-5 rounded-full bg-[#d7a761]/20 text-[#d7a761] flex items-center justify-center flex-shrink-0">
        <Check className="w-3.5 h-3.5" />
      </div>
      <span>{toastMessage}</span>
    </aside>
  );
};
