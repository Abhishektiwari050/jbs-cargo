"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2005",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">JBS Cargo Movers Founded</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Inception by J.S. Bisht in Delhi NCR, specializing in cold-chain reefer logistics for the pharmaceutical sector.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5">
          <img src="/assets/images/timeline-2005.png" alt="Founding" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Cold Chain</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Delhi NCR</span>
        </div>
      </div>
    ),
  },
  {
    title: "2007",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">ICD Dadri Rank #1</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Consistently ranked as the leading logistics partner at North India&apos;s primary dry port. Established strategic hub positioning for fast-track customs clearance.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5">
          <img src="/assets/images/hub-dadri.png" alt="ICD Dadri Hub" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">ICD Dadri</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Customs</span>
        </div>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">Fleet Modernization</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Transitioned to a fully self-owned fleet of 70+ trailers with dedicated gensets and mobile power backups. Zero dependency on third-party transport.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5">
          <img src="/assets/images/automobile.png" alt="Fleet" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">70+ Fleet</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Gensets</span>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">Cross-Border Expansion</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Opened strategic SAARC corridors: Nepal, Bhutan, and Bangladesh. Priority clearance protocols for bonded transit cargo across 3 international borders.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5">
          <img src="/assets/images/timeline-2020.png" alt="Mountain Pass" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Nepal</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Bhutan</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Bangladesh</span>
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">Infrastructure Logic</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Managing 6,000+ annual reefer units for global pharma and FMCG enterprises. Multi-division logistics powerhouse with 24/7 infrastructure operations.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5">
          <img src="/assets/images/timeline-2026.png" alt="Future Nodes" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-brand-orange)]/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)]">6,000+ Reefers</span>
          <span className="px-3 py-1.5 bg-[var(--color-brand-orange)]/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)]">24/7 Ops</span>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-sans">
      {/* Inner Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-20 relative overflow-hidden">
        <div className="absolute top-0 -right-10 text-[6rem] md:text-[10rem] font-black text-black/[0.015] select-none font-display uppercase tracking-tighter pointer-events-none">HERITAGE</div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 order-2 lg:order-1">
              <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-6 block">Est. 2005</span>
              <h1 className="text-4xl md:text-[8rem] font-black text-[var(--color-brand-blue)] leading-[0.9] md:leading-[0.8] mb-8 uppercase font-display tracking-tighter">
                The JBS <br className="hidden md:block" />
                <span className="text-[var(--color-brand-orange)]">Infrastructure.</span>
              </h1>
              <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-2xl font-medium leading-relaxed">
                Two decades of engineering the primary transit routes for global trade. We don&apos;t just move cargo; we manage infrastructure.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 aspect-video bg-gray-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
            >
              <img src="/assets/images/heritage-hero.png" alt="Heritage" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Cards with Glowing Effect */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { label: "Fleet Size", value: "70 Units", detail: "Self-owned trailers with built-in gensets." },
          { label: "Operation", value: "24/7/365", detail: "Continuous monitoring for sensitive cargo." },
          { label: "Legacy", value: "20+ Years", detail: "Established in 2005, scaling global logistics." },
        ].map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlowingCard className="border border-black/5 bg-[var(--color-surface-light)] p-8 md:p-10 group hover:bg-[var(--color-brand-blue)] transition-all duration-500 rounded-[2rem]" glowColor="var(--color-brand-orange)">
              <p className="text-xs font-black uppercase tracking-widest text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-orange)] mb-4 transition-colors">{spec.label}</p>
              <p className="text-3xl md:text-4xl font-black text-[var(--color-brand-blue)] group-hover:text-white mb-4 font-display transition-colors">{spec.value}</p>
              <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 font-medium transition-colors">{spec.detail}</p>
            </GlowingCard>
          </motion.div>
        ))}
      </section>

      {/* Heritage Timeline */}
      <section className="bg-white overflow-hidden">
        <Timeline data={timelineData} />
      </section>
    </main>
  );
}
