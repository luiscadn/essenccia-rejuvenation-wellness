'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/clinic-data';
import { useCart } from '@/context/cart-context';

export const MarketplaceSection: React.FC = () => {
  const { addItem } = useCart();

  return (
    <section id="boutique" className="py-24 bg-[#f0efec] border-t border-[#a2a1ba]/25 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header (Stem Beauty Inspired) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#484774] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d7a761]" />
            The Skincare Apothecary
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#484774]">
            Clinical formulations crafted to <span className="italic text-[#739cd2]">extend</span> in-clinic results.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Pure botanical stem cells, bio-identical ceramides, and copper peptides formulated to nurture and protect your skin’s delicate lipid barrier between clinic visits.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#a2a1ba]/25 hover:border-[#d7a761] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Imagery */}
                <div className="relative aspect-square overflow-hidden bg-[#f7f7f4] p-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#484774] text-[#f7f7f4] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-700 text-[11px] font-medium px-2 py-0.5 rounded border border-stone-200">
                    {product.size}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-amber-600 text-xs">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-stone-500 text-[11px] font-medium">
                      ({product.reviewsCount})
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#484774] group-hover:text-[#739cd2] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-xs uppercase tracking-wider font-medium">
                    {product.subtitle}
                  </p>

                  <p className="text-stone-600 text-xs font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Ingredients Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {product.keyIngredients.slice(0, 3).map((ingredient, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#f0efec] text-stone-700 px-2 py-0.5 rounded-full font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Add to Bag CTA */}
              <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans tracking-wide text-2xl font-light text-[#484774] tabular-nums">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-stone-400 line-through tabular-nums">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addItem(product)}
                  className="px-4 py-2.5 bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-xs uppercase tracking-[0.16em] font-medium transition-all rounded-lg flex items-center gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#d7a761]"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#d7a761]" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
