import React from 'react';
import { NEWS_ITEMS } from '@/data/clinic-data';

export const NewsTicker: React.FC = () => {
  const loop = [...NEWS_ITEMS, ...NEWS_ITEMS];
  return (
    <section aria-label="Clinic news" className="bg-[#484774] text-[#f7f7f4] border-y border-[#f7f7f4]/10 overflow-hidden">
      <div className="flex items-stretch">
        <span className="shrink-0 flex items-center px-5 sm:px-8 bg-[#d7a761] text-[#484774] text-[10px] uppercase tracking-[0.2em] font-semibold">
          News
        </span>
        <div className="overflow-hidden flex-1">
          <ul className="flex w-max animate-marquee py-4">
            {loop.map((item, i) => (
              <li
                key={i}
                aria-hidden={i >= NEWS_ITEMS.length}
                className="flex items-center gap-4 px-8 text-xs tracking-[0.08em] whitespace-nowrap"
              >
                <span className="tabular-nums text-[#a2a1ba] uppercase tracking-[0.15em]">{item.date}</span>
                <span className="border border-[#739cd2]/60 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#739cd2]">
                  {item.tag}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
