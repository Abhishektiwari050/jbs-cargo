"use client";

import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TracingBeam } from "@/components/ui/tracing-beam";

const services = [
  { 
    title: "Air & Surface Cargo", 
    specs: ["Domestic Flights", "Road Transit", "Real-time Tracking", "Pan-India Coverage"],
    detail: "High-speed surface and air cargo solutions tailored for mission-critical shipments across India. From document courier to bulk freight.",
    bg: "bg-gradient-to-br from-[#0d1b2a] to-[#1a2744]",
    image: "/assets/images/express-cargo.png"
  },
  { 
    title: "Residential & Office Relocation", 
    specs: ["Professional Packing", "Safe Transit", "Unpacking Support", "Corporate Shifting"],
    detail: "Premium packers and movers service for seamless home and office transitions. Vetted teams ensure zero damage and minimal downtime.",
    bg: "bg-gradient-to-br from-[#1a0d1a] to-[#2a1529]",
    image: "/assets/images/self-storage.png"
  },
  { 
    title: "Train Cargo", 
    specs: ["Railway Networks", "Bulk Transit", "Cost-Effective", "Reliable Schedules"],
    detail: "Leveraging India's vast railway network for reliable, cost-effective long-distance transport of heavy and commercial cargo.",
    bg: "bg-gradient-to-br from-[#1a0a00] to-[#2a1500]",
    image: "/assets/images/freight.png"
  },
  { 
    title: "Commercial Courier", 
    specs: ["B2B Deliveries", "Bulk Courier", "Corporate Accounts", "Secure Routing"],
    detail: "Specialized bulk and commercial courier services for corporate partners. Tailored for safe, scheduled, and documented deliveries.",
    bg: "bg-gradient-to-br from-[#0a1a0d] to-[#142a19]",
    image: "/assets/images/consolidation.png"
  },
  { 
    title: "Express Cargo", 
    specs: ["Time-Definite", "Door-to-Door", "Expedited", "24/7 Operations"],
    detail: "Premium expedited cargo handling for time-sensitive deliveries. Door-to-door service with zero downtime, powered by 24/7 logistics logic.",
    bg: "bg-gradient-to-br from-[#2a1500] to-[#3a2510]",
    image: "/assets/images/warehousing.png"
  },
  { 
    title: "Self-Storage", 
    specs: ["Secure Units", "Flexible Terms", "Climate Controlled", "24/7 Access"],
    detail: "New specialized self-storage solutions for businesses and individuals. Secure, scalable, and conveniently located storage nodes in South West Delhi.",
    bg: "bg-gradient-to-br from-[#0d1b2a] to-[#1a1c2c]",
    image: "/assets/images/heritage-hero.png"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white pt-28 pb-24 font-sans overflow-hidden">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 md:mb-6 block">Logistics Network</span>
          <h1 className="text-4xl md:text-[9rem] font-black text-[var(--color-brand-blue)] leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 uppercase font-display tracking-tighter">
            Services <br className="hidden md:block" />
            <span className="text-[var(--color-brand-orange)]">Integrated.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl font-medium leading-relaxed">
            From premier cargo solutions to expert relocation services, we deploy integrated operational logic at any scale.
          </p>
        </motion.div>
      </section>

      {/* Services with Wobble Cards */}
      <TracingBeam className="px-4 md:px-6">
        <div className="space-y-6 md:space-y-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <WobbleCard containerClassName="w-full" className={`${service.bg} p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem]`}>
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em]">0{i+1} / DIV</span>
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-white uppercase font-display tracking-tighter leading-none mb-4 md:mb-6">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-white/50 font-medium leading-relaxed max-w-xl mb-6 md:mb-8">
                      {service.detail}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                      {service.specs.map(spec => (
                        <span key={spec} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[var(--color-brand-orange)] hover:text-white transition-all transform hover:scale-105">
                      EXPLORE DETAILS
                    </button>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-[32rem] aspect-video lg:aspect-square bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden relative border border-white/5">
                    <span className="text-[6rem] md:text-[8rem] font-black text-white/[0.03] font-display uppercase -rotate-12 absolute">{service.title.split(" ")[0]}</span>
                    <picture className="absolute inset-0 z-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60 transition-opacity duration-700 hover:opacity-100"
                      />
                    </picture>
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="w-full h-full border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center bg-black/5">
                         <span className="text-white/40 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase">Visual Node 0{i+1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </main>
  );
}
