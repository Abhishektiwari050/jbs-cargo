"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timeline = [
  { year: "2004", event: "JSB Cargo Movers Foundation", detail: "Inception by J.S. Bisht specializing in cold-chain reefer logistics." },
  { year: "2007", event: "ICD Dadri Rank #1", detail: "Consistently ranked as the leading logistics partner at ICD Dadri." },
  { year: "2015", event: "Fleet Modernization", detail: "Transitioned to a self-owned fleet of 70 trailers with dedicated gensets." },
  { year: "2020+", event: "Infrastructure Logic", detail: "Managing 8,000+ annual reefer units for global pharma and FMCG giants." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-sans">
      {/* Inner Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
         <div className="absolute top-0 right-10 text-[10rem] font-black text-black/[0.02] select-none font-display uppercase tracking-tighter">HERITAGE</div>
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10"
         >
           <h1 className="text-6xl md:text-[8rem] font-black text-[var(--color-brand-blue)] leading-[0.8] mb-8 uppercase font-display tracking-tighter">
             The JSB <br />
             <span className="text-[var(--color-brand-orange)]">Infrastructure.</span>
           </h1>
           <p className="text-2xl text-[var(--color-text-secondary)] max-w-2xl font-medium leading-relaxed">
             Two decades of engineering the primary transit routes for global trade. We don't just move cargo; we manage infrastructure.
           </p>
         </motion.div>
      </section>

      {/* Grid Specs */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
         {[
            { label: "Fleet Size", value: "70 Units", detail: "Self-owned trailers with built-in gensets." },
            { label: "Operation", value: "24/7/365", detail: "Continuous monitoring for sensitive cargo." },
            { label: "Legacy", value: "20+ Years", detail: "Established in 2004, scaling global logistics." },
         ].map((spec, i) => (
            <div key={i} className="p-10 border border-black/5 rounded-[2.5rem] bg-[var(--color-surface-light)] group hover:bg-[var(--color-brand-blue)] transition-all duration-500">
               <p className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-orange)] mb-4">{spec.label}</p>
               <p className="text-4xl font-black text-[var(--color-brand-blue)] group-hover:text-white mb-4 font-display">{spec.value}</p>
               <p className="text-sm text-gray-500 group-hover:text-gray-300 font-medium">{spec.detail}</p>
            </div>
         ))}
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-brand-blue)] py-40 rounded-[4rem] mx-4 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-white mb-24 uppercase font-display tracking-tighter">The Milestone Engine</h2>
            <div className="space-y-24 relative">
               <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10" />
               {timeline.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-16 items-start"
                  >
                     <div className="w-16 h-16 shrink-0 rounded-2xl bg-[var(--color-brand-orange)] flex items-center justify-center text-white font-black z-10 shadow-xl shadow-orange-500/20">
                        {item.year.slice(0,4)}
                     </div>
                     <div>
                        <h3 className="text-3xl font-black text-white mb-2 uppercase font-display tracking-tight">{item.event}</h3>
                        <p className="text-xl text-gray-400 max-w-2xl font-medium">{item.detail}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
         {/* Kinetic Decor */}
         <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/[0.02] select-none uppercase -rotate-12 translate-y-20">JSB</div>
      </section>
    </main>
  );
}
