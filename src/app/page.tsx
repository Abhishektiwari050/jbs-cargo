"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { GlowingCard } from "@/components/ui/glowing-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { CountUpStats } from "@/components/CountUpStats";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";
import { LeadForm } from "@/components/LeadForm";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { ShipmentTracker } from "@/components/ShipmentTracker";
import { WorldMap } from "@/components/ui/world-map";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";

const JBS_ROUTES = [
  { start: { lat: 28.6, lng: 77.2, label: "Delhi HQ" }, end: { lat: 27.7, lng: 85.3, label: "Kathmandu" } },
  { start: { lat: 28.6, lng: 77.2, label: "Delhi" }, end: { lat: 27.5, lng: 89.6, label: "Thimphu" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 23.8, lng: 90.4, label: "Dhaka" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 19.1, lng: 72.9, label: "Mumbai" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 25.3, lng: 55.3, label: "Dubai" } },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-[var(--color-surface-white)] font-sans">
      {/* ═══════════════════════════════════════════
          HERO SECTION — Cinematic Film-Poster Layout 
          ═══════════════════════════════════════════ */}
      <section id="hero" className="relative h-screen flex items-end overflow-hidden bg-[var(--color-brand-blue)]">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-reefer.png" 
            alt="JBS Cargo Reefer Fleet"
            className="w-full h-full object-cover brightness-[0.3] scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)] via-[var(--color-brand-blue)]/50 to-transparent" />
        </div>

        {/* Spotlight Beams */}
        <Spotlight 
          className="-top-40 left-0 md:-top-20 md:left-60" 
          fill="var(--color-brand-orange)" 
        />
        <Spotlight 
          className="-top-40 -right-10 md:-top-20 md:right-20" 
          fill="white" 
        />

        {/* Left-Aligned Content — Film Poster Aesthetic */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <TextGenerateEffect 
              words="Infrastructure Logic." 
              className="text-5xl md:text-[clamp(5rem,11vw,10rem)] font-black leading-[0.85] text-white mb-6 tracking-tighter uppercase font-display text-left"
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl font-medium leading-relaxed text-left"
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
              className="group px-10 py-4 border-2 border-white/20 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-all"
            >
              Live Tracking
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator — Vertical Pulse Line */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
          <motion.div 
            className="w-[1px] bg-white/20 overflow-hidden"
            style={{ height: 60 }}
          >
            <motion.div 
              className="w-full bg-[var(--color-brand-orange)]"
              animate={{ height: [0, 60, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
          TRUST TICKER — Infinite Client Badges 
          ═══════════════════════════════════ */}
      <section className="py-6 bg-[var(--color-brand-blue)] border-t border-white/5 overflow-hidden">
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
          STATS STRIP — Glowing Effect Cards
          ═══════════════════════════════ */}
      <section className="py-24 bg-[#060d1b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAwIDAgTCA0MCAwIiByeD0iMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Annual Reefers", value: "6,000+", icon: "❄️" },
            { label: "Precision Fleet", value: "70+", icon: "🚛" },
            { label: "Years of Heritage", value: "20+", icon: "🏛️" },
            { label: "Infrastructure Ops", value: "24/7", icon: "⚡" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowingCard className="bg-white/[0.03] border border-white/5 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-[40px] h-[1px] bg-[var(--color-brand-orange)] mb-6 transition-all duration-500" />
                  <span className="text-4xl md:text-5xl font-black text-white mb-2 font-display tracking-tighter">
                    <CountUpStats value={stat.value} />
                  </span>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          HERITAGE TIMELINE — Scroll Beam 
          ════════════════════════════════ */}
      <section id="heritage" className="bg-white">
        <HeritageTimeline />
      </section>

      {/* ═══════════════════════════════════
          SERVICES — Wobble Cards with Depth 
          ═══════════════════════════════════ */}
      <section id="services" className="py-32 bg-[#060d1b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[6rem] font-black tracking-tighter text-white uppercase font-display leading-[0.85] mb-4"
          >
            Logistics <br /><span className="text-[var(--color-brand-orange)]">Modularized.</span>
          </motion.h2>
          <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
            From temperature-critical pharma to massive automobile infrastructure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Cold Chain Precision", desc: "GDP-compliant temperature management across 70+ reefer trailers with real-time telemetry.", bg: "bg-gradient-to-br from-[#0d1b2a] to-[#1a2744]", tags: ["GDP COMPLIANT", "PHARMA CERTIFIED", "-18°C TO +25°C"] },
            { title: "Freight Forwarding", desc: "Seamless integration across Air, Sea, and Rail with 20+ years of carrier relationships.", bg: "bg-gradient-to-br from-[#1a0a00] to-[#2a1500]", tags: ["GLOBAL NETWORK", "MULTIMODAL", "IN-HOUSE CHA"] },
            { title: "Cross-Border Ops", desc: "Strategic SAARC corridor management — Nepal, Bhutan, Bangladesh with priority clearance.", bg: "bg-gradient-to-br from-[#1a0d1a] to-[#2a1529]", tags: ["SAARC CORRIDOR", "PRIORITY CLEARANCE", "BONDED TRANSIT"] },
            { title: "Automobile Logistics", desc: "OEM-grade transit logic for automotive components and finished vehicles.", bg: "bg-gradient-to-br from-[#0a1a0d] to-[#142a19]", tags: ["OEM STANDARDS", "ZERO-DAMAGE", "DEDICATED FLEET"] },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <WobbleCard containerClassName="min-h-[250px]" className={`${service.bg} p-8 md:p-10`}>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 block">0{i+1} / DIV</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase font-display tracking-tighter mb-4">{service.title}</h3>
                  <p className="text-white/50 font-medium mb-6 max-w-md">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white/60 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════
          WORLD MAP — Route Architecture 
          ═══════════════════════════════ */}
      <section className="py-24 bg-[#060d1b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase font-display mb-4">
              Cross-Border <span className="text-[var(--color-brand-orange)]">Architecture.</span>
            </h2>
            <p className="text-lg text-white/40 font-medium max-w-2xl mx-auto">
              Global hub coordinates and SAARC corridor telemetry.
            </p>
          </div>
          <WorldMap dots={JBS_ROUTES} />
        </div>
      </section>

      {/* ═══════════════════════════════
          SHIPMENT TRACKING — Terminal UI
          ═══════════════════════════════ */}
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

      {/* Certifications */}
      <CertificationsCarousel />

      {/* ═══════════════════════
          TESTIMONIALS 
          ═══════════════════════ */}
      <section className="bg-white py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display">
            The Industry <span className="text-[var(--color-brand-orange)]">Voice.</span>
          </h2>
        </div>
        <InfiniteTestimonialMarquee />
      </section>

      {/* ═══════════════════
          CONTACT / LEAD GEN
          ═══════════════════ */}
      <section id="contact" className="py-32 bg-[var(--color-surface-light)] px-6 mb-12 rounded-[4rem] mx-4">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
