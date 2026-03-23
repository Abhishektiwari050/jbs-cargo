"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServicesBentoGrid } from "@/components/ServicesBentoGrid";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-[var(--color-surface-white)] font-sans">
      {/* 
        HERO SECTION
        Massive, architectural entrance featuring intentionally offset typography 
      */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a192f08_1px,transparent_1px),linear-gradient(to_bottom,#0a192f08_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="z-10 text-left md:text-center max-w-7xl mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] text-[var(--color-brand-blue)] mb-8 tracking-tighter uppercase font-display">
              Infrastructure <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-orange-400">
                Logic.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-3xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Award-winning freight forwarding and cold chain infrastructure for the global enterprise.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-[var(--color-brand-blue)] text-white rounded-xl font-bold text-lg hover:bg-[var(--color-brand-orange)] transition-all duration-500 shadow-2xl hover:shadow-[var(--color-brand-orange)]/40 hover:-translate-y-1">
              Enterprise Inquiry
            </button>
            <button className="px-10 py-5 bg-white text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/10 rounded-xl font-bold text-lg hover:bg-[var(--color-surface-light)] transition-all shadow-sm">
              Live Logistics Tracking
            </button>
          </div>
        </div>
      </section>

      {/* 
        STATS SECTION
        Sleek, pristine white cards with accent hover
      */}
      <section className="py-24 bg-[var(--color-surface-white)] relative z-20 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Annual Reefers", value: "6,000+" },
            { label: "Active Fleet", value: "70+" },
            { label: "Years Experience", value: "20+" },
            { label: "Operations", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[var(--color-surface-light)] border border-[var(--color-brand-blue)]/5 hover:border-[var(--color-brand-orange)]/40 transition-colors group cursor-default shadow-sm hover:shadow-md">
              <span className="text-4xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 
        BENTO GRID SECTION
        Interactive services display
      */}
      <section className="py-24 bg-[var(--color-surface-light)]">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[var(--color-brand-blue)] drop-shadow-sm">
            Logistics, <span className="text-[var(--color-brand-orange)]">Modularized.</span>
          </h2>
        </div>
        <ServicesBentoGrid />
      </section>

      {/* 
        TESTIMONIALS SECTION
      */}
      <section className="bg-[var(--color-surface-white)] pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--color-brand-blue)]">
            Trusted by Industry Leaders
          </h2>
        </div>
        <InfiniteTestimonialMarquee />
      </section>
    </main>
  );
}
