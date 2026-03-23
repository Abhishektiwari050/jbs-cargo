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
    <div className="relative flex overflow-x-hidden group bg-white py-12">
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-12 items-center px-4 w-max">
        {[...testimonials, ...testimonials].map((item, idx) => (
          <div 
            key={idx} 
            className="w-[450px] md:w-[700px] shrink-0 bg-[var(--color-surface-light)] p-12 rounded-[3rem] border border-black/5 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5 group/card"
          >
            <div className="mb-10 opacity-20">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-brand-blue)]"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 2H12.017V3V6C12.017 8.20914 10.2261 10 8.017 10H5.017C4.46472 10 4.017 10.4477 4.017 11V17C4.017 17.5523 4.46472 18 5.017 18H8.017C9.12157 18 10.017 18.8954 10.017 20V21H12.017V20V17C12.017 14.7909 13.8079 13 16.017 13H19.017" /></svg>
            </div>
            <p className="text-2xl md:text-3xl text-[var(--color-brand-blue)] font-black mb-10 tracking-tight leading-tight uppercase font-display">
              "{item.quote}"
            </p>
            <div className="flex items-center justify-between border-t border-black/5 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--color-brand-blue)] group-hover/card:bg-[var(--color-brand-orange)] transition-colors duration-500 rounded-lg flex items-center justify-center text-white font-black text-xs">
                  {item.author.split(",")[0].split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                   <p className="text-[var(--color-brand-blue)] font-black text-sm uppercase tracking-widest leading-none mb-1">
                     {item.author.split(",")[0]}
                   </p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     {item.author.split(",")[1]}
                   </p>
                </div>
              </div>
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(s => (
                    <div key={s} className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" />
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
