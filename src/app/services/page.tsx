"use client";

import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";

const services = [
  { 
    title: "Cold Chain Precision", 
    specs: ["GDP Compliant", "Pharma Certified", "Real-time Telemetry", "-18°C to +25°C"],
    detail: "Management of sensitive cargo requires infrastructure, not just transport. Our 70-trailer reefer fleet features dedicated gensets and mobile power backups.",
    bg: "bg-gradient-to-br from-[#0d1b2a] to-[#1a2744]"
  },
  { 
    title: "Customs Solutions", 
    specs: ["ICD Dadri Rank #1", "EDI Integrated", "Project Cargo", "Priority Clearance"],
    detail: "Fast-track clearances through strategic hub positioning. Consistently ranked the top partner at North India's primary dry ports since 2007.",
    bg: "bg-gradient-to-br from-[#1a0d1a] to-[#2a1529]"
  },
  { 
    title: "Freight Forwarding", 
    specs: ["Global Network", "Multimodal Ops", "In-house CHA", "Air · Sea · Rail"],
    detail: "Seamless integration across Air, Sea, and Rail. We leverage two decades of carrier relationships to optimize your global supply chain logic.",
    bg: "bg-gradient-to-br from-[#1a0a00] to-[#2a1500]"
  },
  { 
    title: "Automobile Logistics", 
    specs: ["OEM Standards", "Zero-Damage Transit", "Dedicated Fleet", "Subcontinent Coverage"],
    detail: "Specialized transit logic for the automotive sector, including OEM components and finished vehicles across the subcontinent.",
    bg: "bg-gradient-to-br from-[#0a1a0d] to-[#142a19]"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-6 block">Modular Infrastructure</span>
          <h1 className="text-6xl md:text-[9rem] font-black text-[var(--color-brand-blue)] leading-[0.8] mb-8 uppercase font-display tracking-tighter">
            Services <br />
            <span className="text-[var(--color-brand-orange)]">Modularized.</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl font-medium leading-relaxed">
            From temperature-critical pharma to massive automobile infrastructure, we deploy modular logistics logic at any scale.
          </p>
        </motion.div>
      </section>

      {/* Services with Wobble Cards */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <WobbleCard containerClassName="w-full" className={`${service.bg} p-10 md:p-16`}>
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em]">0{i+1} / DIV</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-display tracking-tighter leading-none mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-white/50 font-medium leading-relaxed max-w-xl mb-8">
                    {service.detail}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.specs.map(spec => (
                      <span key={spec} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/60">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-80 aspect-square bg-white/5 rounded-3xl flex items-center justify-center overflow-hidden relative">
                  <span className="text-[8rem] font-black text-white/[0.03] font-display uppercase -rotate-12">{service.title.split(" ")[0]}</span>
                </div>
              </div>
            </WobbleCard>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
