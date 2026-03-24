"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { GlowingCard } from "@/components/ui/glowing-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { CountUpStats } from "@/components/CountUpStats";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";
import { LeadForm } from "@/components/LeadForm";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { ShipmentTracker } from "@/components/ShipmentTracker";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";
import { AnimatedGlobe } from "@/components/ui/globe";

const LOADER_STATES = [
  { text: "Connecting to Infrastructure..." },
  { text: "Loading Fleet Telemetry..." },
  { text: "Fetching Route Network..." },
  { text: "Initializing Temperature Sensors..." },
  { text: "Ready." },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Site Loader */}
      <MultiStepLoader loadingStates={LOADER_STATES} loading={loading} duration={1500} loop={false} />

      <main className="min-h-screen bg-white text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-white font-sans">
        {/* ═══════════════════════════════════════════
            HERO SECTION — Light Theme with BackgroundLines 
            ═══════════════════════════════════════════ */}
        <BackgroundLines className="relative min-h-screen flex items-center bg-white overflow-hidden">
          {/* Subtle gradient accent at top */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.5em] mb-8 block">
                Since 2005 · Delhi Infrastructure Hub
              </span>
              <TextGenerateEffect 
                words="Infrastructure Logic." 
                className="text-5xl md:text-[clamp(5rem,11vw,10rem)] font-black leading-[0.85] text-[var(--color-brand-blue)] mb-6 tracking-tighter uppercase font-display text-left"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl font-medium leading-relaxed text-left"
            >
              Precision freight forwarding for{" "}
              <FlipWords 
                words={["Pharma.", "FMCG.", "Government.", "Enterprise."]} 
                className="text-[var(--color-brand-orange)] font-black"
                duration={2500}
              />
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button 
                onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative px-10 py-4 bg-[var(--color-brand-orange)] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20"
              >
                Enterprise Inquiry
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button 
                onClick={() => { const el = document.getElementById('track'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group px-10 py-4 border-2 border-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-xl font-black text-sm uppercase tracking-widest hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-all"
              >
                Live Tracking
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>

            {/* Stat highlights inline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="flex gap-12 mt-16 pt-8 border-t border-black/5"
            >
              {[
                { num: "6,000+", label: "Reefer Shipments / Year" },
                { num: "70+", label: "Fleet Vehicles" },
                { num: "20+", label: "Years of Legacy" },
              ].map((s, i) => (
                <div key={i} className="text-left">
                  <span className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] font-display tracking-tighter">{s.num}</span>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">Scroll</span>
            <motion.div className="w-[1px] bg-gray-200 overflow-hidden" style={{ height: 60 }}>
              <motion.div 
                className="w-full bg-[var(--color-brand-orange)]"
                animate={{ height: [0, 60, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </BackgroundLines>

        {/* ═══════════════════════════════════
            TRUST TICKER
            ═══════════════════════════════════ */}
        <section className="py-4 bg-[var(--color-brand-blue)] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, set) => (
              <div key={set} className="flex items-center gap-16 mx-8">
                {["LEADING PHARMA", "FMCG GLOBAL", "TECH ENTERPRISE", "GOVT INFRA", "RETAIL GIANT", "AUTO OEM", "COLD CHAIN"].map((client) => (
                  <span key={`${set}-${client}`} className="text-xs font-black tracking-[0.3em] text-white/20 uppercase font-display flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-[var(--color-brand-orange)] rounded-full" />
                    {client}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════
            STATS STRIP
            ═══════════════════════════════ */}
        <section className="py-24 bg-[var(--color-surface-light)] relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Annual Reefers", value: "6,000+" },
              { label: "Precision Fleet", value: "70+" },
              { label: "Years of Heritage", value: "20+" },
              { label: "Infrastructure Ops", value: "24/7" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlowingCard className="bg-white border border-black/5 p-8 rounded-3xl shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[40px] h-[1px] bg-[var(--color-brand-orange)] mb-6" />
                    <span className="text-4xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 font-display tracking-tighter">
                      <CountUpStats value={stat.value} />
                    </span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</span>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            HERITAGE TIMELINE 
            ════════════════════════════════ */}
        <section id="heritage" className="bg-white">
          <HeritageTimeline />
        </section>

        {/* ═══════════════════════════════════
            SERVICES — CanvasRevealEffect Cards
            ═══════════════════════════════════ */}
        <section id="services" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[6rem] font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display leading-[0.85] mb-4"
            >
              Logistics <br /><span className="text-[var(--color-brand-orange)]">Modularized.</span>
            </motion.h2>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
              From temperature-critical pharma to massive automobile infrastructure.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Cold Chain Precision", desc: "GDP-compliant temperature management across 70+ reefer trailers.", colors: [[6, 182, 212], [59, 130, 246]] as [number, number, number][], bg: "bg-emerald-900", tags: ["GDP COMPLIANT", "PHARMA", "-18°C TO +25°C"] },
              { title: "Freight Forwarding", desc: "Seamless integration across Air, Sea, and Rail.", colors: [[249, 115, 22], [234, 88, 12]] as [number, number, number][], bg: "bg-black", tags: ["GLOBAL NETWORK", "MULTIMODAL", "IN-HOUSE CHA"] },
              { title: "Cross-Border Ops", desc: "Strategic SAARC corridor — Nepal, Bhutan, Bangladesh.", colors: [[99, 102, 241], [139, 92, 246]] as [number, number, number][], bg: "bg-sky-600", tags: ["SAARC", "PRIORITY CLEARANCE", "BONDED"] },
              { title: "Automobile Logistics", desc: "OEM-grade transit logic for automotive components.", colors: [[34, 197, 94], [22, 163, 74]] as [number, number, number][], bg: "bg-emerald-800", tags: ["OEM STANDARDS", "ZERO-DAMAGE", "DEDICATED"] },
            ].map((service, i) => (
              <ServiceRevealCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════
            GLOBE — Route Visualization 
            ═══════════════════════════════ */}
        <section className="relative bg-[var(--color-brand-blue)] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase font-display mb-4">
                Cross-Border <span className="text-[var(--color-brand-orange)]">Architecture.</span>
              </h2>
              <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
                Global hub coordinates and SAARC corridor telemetry.
              </p>
            </div>
            <AnimatedGlobe className="max-w-xl mx-auto" />
          </div>
        </section>

        {/* ═══════════════════════════════
            SHIPMENT TRACKING
            ═══════════════════════════════ */}
        <section id="track" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display mb-4">
              Live <span className="text-[var(--color-brand-orange)]">Transit</span> Monitoring.
            </h2>
            <p className="text-lg font-medium text-gray-400 max-w-2xl mx-auto">
              Real-time hub coordinates, border clearance status, and precise temperature telemetry.
            </p>
          </div>
          <ShipmentTracker />
        </section>

        {/* Certifications */}
        <CertificationsCarousel />

        {/* TESTIMONIALS */}
        <section className="bg-[var(--color-surface-light)] py-32">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display">
              The Industry <span className="text-[var(--color-brand-orange)]">Voice.</span>
            </h2>
          </div>
          <InfiniteTestimonialMarquee />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 bg-white px-6">
          <div className="max-w-4xl mx-auto bg-[var(--color-surface-light)] p-8 md:p-16 rounded-[3rem] border border-black/5 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 uppercase font-display tracking-tighter text-center">Filing Logistics Inquiry</h2>
            <p className="text-sm text-gray-400 mb-10 font-medium text-center">Enterprise-grade response within 4 business hours.</p>
            <LeadForm />
          </div>
        </section>
      </main>
    </>
  );
}

/* ═══════════════════════════════
   Service Card with Canvas Reveal 
   ═══════════════════════════════ */
function ServiceRevealCard({ service, index }: { service: { title: string; desc: string; colors: [number, number, number][]; bg: string; tags: string[] }; index: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group border border-black/[0.08] rounded-3xl flex flex-col justify-between min-h-[320px] p-8 md:p-10 overflow-hidden cursor-pointer bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Canvas Reveal on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName={service.bg}
              colors={service.colors}
              dotSize={3}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(500px_at_center,white,transparent)] bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static content */}
      <div className="relative z-10">
        <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 block">0{index + 1} / DIV</span>
        <h3 className={`text-3xl md:text-4xl font-black uppercase font-display tracking-tighter mb-4 transition-colors duration-300 ${hovered ? 'text-white' : 'text-[var(--color-brand-blue)]'}`}>
          {service.title}
        </h3>
        <p className={`font-medium mb-6 max-w-md transition-colors duration-300 ${hovered ? 'text-white/60' : 'text-gray-400'}`}>
          {service.desc}
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${hovered ? 'bg-white/10 border border-white/20 text-white/70' : 'bg-gray-50 border border-black/5 text-gray-400'}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
