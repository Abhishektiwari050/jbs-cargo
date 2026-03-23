"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "JBS revolutionized our cold chain logistics. Zero temperature excursions across 500+ shipments.",
    author: "Director of Operations, Leading Pharma",
  },
  {
    quote: "Their cross-border efficiency to Nepal cut our transit times by 30%. True professionals.",
    author: "Supply Chain Head, FMCG Brand",
  },
  {
    quote: "Relocating our entire corporate office was seamless. Highly recommend their B2B services.",
    author: "CEO, Tech Enterprise",
  },
];

export const InfiniteTestimonialMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden group bg-[var(--color-surface-light)] py-24 border-y border-[var(--color-brand-blue)]/5">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-surface-light)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-surface-light)] to-transparent z-10" />
      
      <div className="flex animate-marquee gap-8 items-center px-4 w-max">
        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
          <div 
            key={idx} 
            className="w-[400px] md:w-[600px] shrink-0 bg-[var(--color-surface-white)] p-10 rounded-3xl border border-[var(--color-brand-blue)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <p className="text-xl md:text-2xl text-[var(--color-text-primary)] font-medium mb-6 italic leading-relaxed">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-brand-blue)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {item.author.charAt(0)}
              </div>
              <p className="text-[var(--color-text-secondary)] font-semibold text-sm uppercase tracking-wider">
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
