"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { GlowingCard } from "@/components/ui/glowing-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CountUpStats } from "@/components/CountUpStats";
import { InfiniteTestimonialMarquee } from "@/components/InfiniteTestimonialMarquee";
import { LeadForm } from "@/components/LeadForm";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { ShipmentTracker } from "@/components/ShipmentTracker";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), { ssr: false });

const globeConfig = {
  pointSize: 4,
  globeColor: "#f8fafc",
  showAtmosphere: true,
  atmosphereColor: "#3b82f6",
  atmosphereAltitude: 0.1,
  emissive: "#ffffff",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255, 255, 255, 0.15)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 28.6, lng: 77.2 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 10, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 10, startLat: 34.0522, startLng: -118.2437, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 11, startLat: 41.9028, startLng: 12.4964, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 11, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 12, startLat: 34.0522, startLng: -118.2437, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 12, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 13, startLat: 52.52, startLng: 13.405, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 13, startLat: 11.986597, startLng: 8.571831, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
];



export default function Home() {


  return (
    <>


      <main className="min-h-screen bg-white text-[var(--foreground)] selection:bg-[var(--color-brand-orange)] selection:text-white font-sans">
        {/* ═══════════════════════════════════════════
            HERO SECTION — Light Theme with BackgroundLines 
            ═══════════════════════════════════════════ */}
        <BackgroundLines className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden w-full">
          {/* Subtle gradient accent at top */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-full"
            >
              <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.3em] mb-4 block text-center">
                Since 2005 · Delhi Infrastructure Hub
              </span>
              <h1 className="text-4xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.9] md:leading-[0.8] tracking-tighter uppercase font-display text-center mb-8">
                <span className="text-[var(--color-brand-blue)]">Infrastructure</span>
                <br />
                <span className="text-[var(--color-brand-orange)]">Logic.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-2xl text-gray-500 mb-8 max-w-3xl font-medium leading-relaxed text-center px-4"
            >
              Precision freight forwarding for{" "}
              <br className="block sm:hidden" />
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6"
            >
              <button 
                onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto group relative px-10 py-4 bg-[var(--color-brand-orange)] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20"
              >
                ENTERPRISE INQUIRY
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button 
                onClick={() => { const el = document.getElementById('track'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto group px-10 py-4 border-2 border-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-xl font-black text-sm uppercase tracking-widest hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-all"
              >
                LIVE TRACKING
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>

            {/* Stat highlights inline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-black/5"
            >
              {[
                { num: "6,000+", label: "Reefer Shipments / Year" },
                { num: "70+", label: "Fleet Vehicles" },
                { num: "20+", label: "Years of Legacy" },
                { num: "24/7", label: "Infrastructure Ops" },
              ].map((s, i) => (
                <div key={i} className="text-center">
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
              className="text-4xl md:text-[6rem] font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display leading-[0.9] md:leading-[0.85] mb-4"
            >
              Services <br /><span className="text-[var(--color-brand-orange)]">Modularized.</span>
            </motion.h2>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
              From temperature-critical pharma to massive automobile infrastructure.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Cold Chain Precision", desc: "GDP-compliant temperature management across 70+ reefer trailers.", colors: [[221, 92, 0]] as [number, number, number][], bg: "bg-white", tags: ["GDP COMPLIANT", "PHARMA", "-18°C TO +25°C"] },
              { title: "Freight Forwarding", desc: "Seamless integration across Air, Sea, and Rail.", colors: [[10, 25, 47]] as [number, number, number][], bg: "bg-slate-50", tags: ["GLOBAL NETWORK", "MULTIMODAL", "IN-HOUSE CHA"] },
              { title: "Cross-Border Ops", desc: "Strategic SAARC corridor — Nepal, Bhutan, Bangladesh.", colors: [[221, 92, 0]] as [number, number, number][], bg: "bg-white", tags: ["SAARC", "PRIORITY CLEARANCE", "BONDED"] },
              { title: "Automobile Logistics", desc: "OEM-grade transit logic for automotive components.", colors: [[10, 25, 47]] as [number, number, number][], bg: "bg-slate-50", tags: ["OEM STANDARDS", "ZERO-DAMAGE", "DEDICATED"] },
            ].map((service, i) => (
              <ServiceRevealCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════
            GLOBE — 3D Route Visualization 
            ═══════════════════════════════ */}
        <section className="relative bg-[#050505] overflow-hidden py-32">
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[20vw] md:text-[20vw] opacity-[0.03] font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap">
              GLOBAL INFRASTRUCTURE
            </span>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase font-display mb-4">
                Cross-Border <br className="block md:hidden" />
                <span className="text-[var(--color-brand-orange)]">Architecture.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-2xl mx-auto px-4">
                Global hub coordinates and SAARC corridor telemetry.
              </p>
            </div>
            <div className="relative w-full h-[350px] md:h-[700px]">
              <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#050505] z-40" />
              <div className="absolute w-full -bottom-10 md:-bottom-20 h-72 md:h-full z-10">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            SHIPMENT TRACKING
            ═══════════════════════════════ */}
        <section id="track" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display mb-4">
              Live <span className="text-[var(--color-brand-orange)]">Transit</span> <br className="block md:hidden" /> Monitoring.
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-400 max-w-2xl mx-auto px-4">
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
          <div className="max-w-4xl mx-auto bg-[var(--color-surface-light)] p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 shadow-xl">
            <h2 className="text-2xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2 uppercase font-display tracking-tighter text-center leading-tight">Filing Logistics Inquiry</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-10 font-medium text-center">Enterprise-grade response within 4 business hours.</p>
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
      className="relative group border border-black/[0.08] rounded-3xl flex flex-col justify-between min-h-[280px] md:min-h-[320px] p-6 md:p-10 overflow-hidden cursor-pointer bg-white hover:shadow-xl transition-shadow duration-300"
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
              animationSpeed={3}
              containerClassName={service.bg}
              colors={service.colors}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-white/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static content */}
      <div className="relative z-10">
        <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 block">0{index + 1} / DIV</span>
        <h3 className="text-2xl md:text-4xl font-black uppercase font-display tracking-tighter mb-4 transition-colors duration-300 text-[var(--color-brand-blue)]">
          {service.title}
        </h3>
        <p className="font-medium mb-6 max-w-md transition-colors duration-300 text-gray-500 text-sm md:text-base">
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
