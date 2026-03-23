"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServicesBentoGrid } from "@/components/ServicesBentoGrid";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-[var(--color-surface-white)] font-sans">
      {/* 
        HERO SECTION
        Massive, architectural entrance featuring intentionally offset typography 
      */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a192f08_1px,transparent_1px),linear-gradient(to_bottom,#0a192f08_1px,transparent_1px)] bg-[size:64px_64px] z-10" />
        <img 
          src="/images/hero-reefer.png" 
          alt="Hero Reefer"
          className="absolute inset-0 w-full h-full object-cover brightness-110 opacity-10"
        />
        
        <div className="z-10 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-[clamp(4rem,10vw,9rem)] font-black leading-[0.85] text-[var(--color-brand-blue)] mb-8 tracking-tighter uppercase font-display max-w-[95vw] md:max-w-none mx-auto break-words">
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
            className="text-lg md:text-3xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Award-winning freight forwarding and cold chain infrastructure for the global enterprise.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-[280px] px-10 py-5 bg-[var(--color-brand-blue)] text-white rounded-xl font-bold text-lg hover:bg-[var(--color-brand-orange)] transition-all duration-500 shadow-2xl hover:shadow-[var(--color-brand-orange)]/40 hover:-translate-y-1"
            >
              Enterprise Inquiry
            </button>
            <button 
              onClick={() => window.location.href = '/track'}
              className="w-full sm:w-[280px] px-10 py-5 bg-white text-[var(--color-brand-blue)] border border-[var(--color-brand-blue)]/10 rounded-xl font-bold text-lg hover:bg-[var(--color-surface-light)] transition-all shadow-sm"
            >
              Live Tracking
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-brand-blue)]/30"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
        </motion.div>
      </section>

      {/* 
        TRUST BAR - CLIENT LOGOS
      */}
      <section className="py-12 border-y border-black/5 bg-white relative z-30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               {["LEADING PHARMA", "FMCG GLOBAL", "TECH ENTERPRISE", "GOVT INFRA", "RETAIL GIANT"].map((client) => (
                  <span key={client} className="text-lg font-black tracking-widest font-display">{client}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 
        STATS SECTION
        Sleek, pristine white cards with accent hover
      */}
      <section className="py-24 bg-[var(--color-surface-white)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Annual Reefers / Year", value: "6,000+" },
            { label: "Precision Fleet Units", value: "70+" },
            { label: "Years of Heritage", value: "20+" },
            { label: "Infrastructure Ops", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[var(--color-surface-light)] hover:bg-white transition-all group cursor-default shadow-sm hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/5 border border-transparent hover:border-[var(--color-brand-orange)]/20">
              <span className="text-4xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 group-hover:scale-110 transition-transform duration-500 font-display tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] font-black text-[var(--color-text-secondary)] uppercase tracking-[0.2em] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ABOUT US SECTION
      */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-brand-orange)]/5 rounded-full blur-3xl" />
             <h2 className="text-5xl md:text-7xl font-black text-[var(--color-brand-blue)] mb-8 tracking-tighter uppercase font-display leading-[0.9]">
               Engineering <br />
               <span className="text-[var(--color-brand-orange)]">The Future</span> <br />
               of Transit.
             </h2>
             <p className="text-xl text-[var(--color-text-secondary)] mb-8 font-medium leading-relaxed">
               Founded on the principles of industrial precision, JBS Cargo Movers has spent two decades constructing the primary infrastructure for global trade.
             </p>
             <div className="flex gap-4 mb-8">
                <div className="w-1 h-32 bg-gradient-to-b from-[var(--color-brand-orange)] to-transparent" />
                <div className="space-y-4">
                   <p className="text-sm font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Our Heritage</p>
                   <p className="text-gray-500 font-medium">Started in 2004 as a boutique cold-chain specialist, now a multi-division logistics powerhouse spanning air, sea, and land.</p>
                </div>
             </div>
             <button 
                onClick={() => window.location.href = '/about'}
                className="px-8 py-4 border border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-blue)] hover:text-white transition-all"
             >
                The Full Story
             </button>
          </div>
          <div className="aspect-square bg-[var(--color-surface-light)] rounded-[3rem] relative overflow-hidden group shadow-2xl">
             <img 
               src="/images/dadri-hub.png" 
               alt="ICD Dadri Hub" 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/40 to-transparent" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-black tracking-[1em] text-white opacity-40 uppercase -rotate-90">Architectural Engine</span>
             </div>
          </div>
        </div>
      </section>

      {/* 
        BENTO GRID SECTION
        Interactive services display
      */}
      <section id="services" className="py-32 bg-[var(--color-surface-light)] rounded-[4rem] mx-4 my-8">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-5xl md:text-[6rem] font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display leading-[0.85] mb-8">
            Logistics <br /><span className="text-[var(--color-brand-orange)]">Modularized.</span>
          </h2>
          <button 
            onClick={() => window.location.href = '/services'}
            className="px-8 py-4 bg-[var(--color-brand-blue)] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-orange)] transition-all"
          >
            View Detailed Specs
          </button>
        </div>
        <ServicesBentoGrid />
      </section>

      {/* 
        TESTIMONIALS SECTION
      */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display">
            The Industry <span className="text-[var(--color-brand-orange)]">Voice.</span>
          </h2>
        </div>
        <InfiniteTestimonialMarquee />
      </section>

      {/* 
        CONTACT / LEAD GEN SECTION
      */}
      <section id="contact" className="py-32 bg-[var(--color-surface-light)] px-6 mb-12 rounded-[4rem] mx-4">
        <div className="max-w-4xl mx-auto">
           <LeadForm />
        </div>
      </section>
    </main>
  );
}
