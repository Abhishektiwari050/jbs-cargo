"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServicesBentoGrid } from "@/components/ServicesBentoGrid";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";
import { LeadForm } from "@/components/LeadForm";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CountUpStats } from "@/components/CountUpStats";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { ShipmentTracker } from "@/components/ShipmentTracker";
import { CoverageMap } from "@/components/CoverageMap";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-[var(--color-surface-white)] font-sans">
      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <AuroraBackground className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="/images/hero-reefer.png" 
            alt="Hero Reefer"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] opacity-80 z-0"
          />
        </AuroraBackground>

        <div className="z-10 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <TextGenerateEffect 
              words="Infrastructure Logic." 
              className="text-4xl md:text-[clamp(4rem,10vw,9rem)] font-black leading-[0.85] text-white mb-8 tracking-tighter uppercase font-display"
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Award-winning freight forwarding and cold chain infrastructure for the global enterprise.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ShimmerButton 
              onClick={() => window.location.href = '#contact'}
              className="w-full sm:w-[280px]"
              background="var(--color-brand-orange)"
            >
              <span className="font-bold text-lg uppercase tracking-widest">Enterprise Inquiry</span>
            </ShimmerButton>
            
            <ShimmerButton 
              onClick={() => window.location.href = '#track'}
              className="w-full sm:w-[280px]"
              background="rgba(255,255,255,0.1)"
            >
              <span className="font-bold text-lg uppercase tracking-widest">Live Tracking</span>
            </ShimmerButton>
          </div>
        </div>

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

      {/* TRUST BAR */}
      <section className="py-12 border-y border-black/5 bg-white relative z-30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               {["LEADING PHARMA", "FMCG GLOBAL", "TECH ENTERPRISE", "GOVT INFRA", "RETAIL GIANT"].map((client) => (
                  <span key={client} className="text-lg font-black tracking-widest font-display">{client}</span>
               ))}
            </div>
         </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-[var(--color-surface-white)] relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Annual Reefers / Year", value: "6,000+" },
            { label: "Precision Fleet Units", value: "70+" },
            { label: "Years of Heritage", value: "20+" },
            { label: "Infrastructure Ops", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[var(--color-surface-light)] hover:bg-white transition-all group cursor-default shadow-sm hover:shadow-2xl hover:shadow-[var(--color-brand-blue)]/5 border border-transparent hover:border-[var(--color-brand-orange)]/20">
              <span className="text-4xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 group-hover:scale-110 transition-transform duration-500 font-display tracking-tighter">
                <CountUpStats value={stat.value} />
              </span>
              <span className="text-[10px] font-black text-[var(--color-text-secondary)] uppercase tracking-[0.2em] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE TIMELINE */}
      <section id="heritage" className="bg-white">
         <HeritageTimeline />
      </section>

      {/* BENTO GRID */}
      <section id="services" className="py-32 bg-[var(--color-surface-light)] rounded-[4rem] mx-4 my-8">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-5xl md:text-[6rem] font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display leading-[0.85] mb-8">
            Logistics <br /><span className="text-[var(--color-brand-orange)]">Modularized.</span>
          </h2>
        </div>
        <ServicesBentoGrid />
      </section>

      {/* COVERAGE MAP */}
      <section className="px-4 mb-32">
         <div className="max-w-7xl mx-auto">
            <CoverageMap />
         </div>
      </section>

      {/* SHIPMENT TRACKING */}
      <section id="track" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display mb-4">
            Live <span className="text-[var(--color-brand-orange)]">Transit</span> Monitoring.
          </h2>
          <p className="text-lg font-medium text-gray-500 max-w-2xl mx-auto">
            Real-time hub coordinates, border clearance status, and precise temperature telemetry.
          </p>
        </div>
        <ShipmentTracker />
      </section>

      {/* CERTIFICATIONS */}
      <CertificationsCarousel />

      {/* TESTIMONIALS */}
      <section className="bg-white py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display">
            The Industry <span className="text-[var(--color-brand-orange)]">Voice.</span>
          </h2>
        </div>
        <InfiniteTestimonialMarquee />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-[var(--color-surface-light)] px-6 mb-12 rounded-[4rem] mx-4">
        <div className="max-w-4xl mx-auto">
           <LeadForm />
        </div>
      </section>
    </main>
  );
}
