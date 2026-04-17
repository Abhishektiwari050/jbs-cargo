"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const timelineData = [
  {
    title: "2023",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">JBS Cargo Movers Founded</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Founded by Lalit Saini in South West Delhi to redefine domestic logistics with 24/7 reliability and a 5.0-star service standard.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5 relative">
          <Image src="/assets/images/timeline-2005.png" alt="Founding" fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Air Cargo</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Delhi NCR</span>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">Operational Excellence</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Established a direct-to-enterprise network across National Highway 9 and major rail hubs, ensuring pre-defined delivery schedules.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5 relative">
          <Image src="/assets/images/hub-dadri.png" alt="ICD Dadri Hub" fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Train Cargo</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Surface Hubs</span>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">Pan-India Integration</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Expanding specialized bulk courier and sampling services to 28+ states, backed by excellent communication and transparency.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5 relative">
          <Image src="/assets/images/automobile.png" alt="Fleet" fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">70+ Fleet</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Bulk Courier</span>
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">The Future Roadmap</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Integrating AI-driven routing and real-time dashboarding to maintain our perfect 5.0 Justdial rating at scale. Specialized in Bulk Courier and Sampling services.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5 relative">
          <Image src="/assets/images/consolidation.png" alt="Strategic Operations" fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Bulk Courier</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Sampling</span>
          <span className="px-3 py-1.5 bg-[var(--color-surface-light)] rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">Enterprise</span>
        </div>
      </div>
    ),
  },
  {
    title: "Current Status",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-3">5.0 Star Presence</h3>
        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6">Delivering professional excellence with 24/7 support. Recommended by clients across Delhi NCR for on-time performance and safe handling.</p>
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-black/5 relative">
          <Image src="/assets/images/timeline-2026.png" alt="Future Nodes" fill className="object-cover" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-[var(--color-brand-orange)]/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)]">6,000+ Shipments</span>
          <span className="px-3 py-1.5 bg-[var(--color-brand-orange)]/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-orange)]">Pan-India</span>
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
              <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-6 block">Est. 2023</span>
              <h1 className="text-4xl md:text-[8rem] font-black text-[var(--color-brand-blue)] leading-[0.9] md:leading-[0.8] mb-8 uppercase font-display tracking-tighter">
                The JBS <br className="hidden md:block" />
                <span className="text-[var(--color-brand-orange)]">Reality.</span>
              </h1>
              <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-2xl font-medium leading-relaxed">
                Management led by Lalit and Preet Saini. Unmatched precision in domestic transit. A 5.0-star rated logistics partner (GST: 07BVLPB3047B2Z1) for the modern enterprise.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 aspect-video bg-gray-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white relative"
            >
              <Image 
                src="/assets/images/heritage-hero.png" 
                alt="Heritage" 
                fill 
                priority 
                className="object-cover" 
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Cards with Glowing Effect */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { label: "Fleet Size", value: "70+ Units", detail: "Self-owned commercial delivery network." },
          { label: "Operation", value: "24/7/365", detail: "Continuous monitoring for priority shipments." },
          { label: "Premium", value: "2023", detail: "Established with a vision for modern logistics." },
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
