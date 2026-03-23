"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  { 
    title: "Cold Chain Precision", 
    specs: ["GDP Compliant", "Pharma Certified", "Real-time Telemetry"],
    detail: "Management of sensitive cargo requires infrastructure, not just transport. Our 70-trailer reefer fleet features dedicated gensets and mobile power backups."
  },
  { 
    title: "Customs Solutions", 
    specs: ["ICD Dadri Rank #1", "EDI Integrated", "Project Cargo Expertise"],
    detail: "Fast-track clearances through strategic hub positioning. Consistently ranked the top partner at North India's primary dry ports since 2007."
  },
  { 
    title: "Freight Forwarding", 
    specs: ["Global Network", "Multimodal Ops", "In-house CHA"],
    detail: "Seamless integration across Air, Sea, and Rail. We leverage two decades of carrier relationships to optimize your global supply chain logic."
  },
  { 
    title: "Automobile Logistics", 
    specs: ["OEM Standards", "Zero-Damage Transit", "Dedicated Fleet"],
    detail: "Specialized transit logic for the automotive sector, including OEM components and finished vehicles across the subcontinent."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-sans">
      {/* Inner Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <h1 className="text-6xl md:text-[9rem] font-black text-[var(--color-brand-blue)] leading-[0.8] mb-8 uppercase font-display tracking-tighter">
             Services <br />
             <span className="text-[var(--color-brand-orange)]">Modularized.</span>
           </h1>
           <p className="text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto font-medium leading-relaxed">
             From temperature-critical pharma to massive automobile infrastructure, we deploy modular logistics logic at any scale.
           </p>
         </motion.div>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
         {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-20",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
               <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em]">0{i+1} / DIV</span>
                     <div className="h-[1px] flex-1 bg-black/5" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter leading-none">
                     {service.title}
                  </h2>
                  <p className="text-xl text-[var(--color-text-secondary)] font-medium leading-relaxed">
                     {service.detail}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                     {service.specs.map(spec => (
                        <span key={spec} className="px-4 py-2 bg-[var(--color-surface-light)] rounded-lg text-xs font-black uppercase tracking-widest text-[var(--color-brand-blue)]">
                           {spec}
                        </span>
                     ))}
                  </div>
               </div>
               <div className="flex-1 aspect-video bg-[var(--color-surface-light)] rounded-[3rem] relative overflow-hidden group shadow-xl">
                  <img 
                    src={i === 0 ? "/images/cold-chain-tech.png" : i === 3 ? "/images/auto-logistics.png" : "/images/dadri-hub.png"} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-blue)]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-[6rem] font-black text-white/10 font-display uppercase -rotate-12 italic">{service.title.split(" ")[0]}</span>
                  </div>
               </div>
            </motion.div>
         ))}
      </section>
    </main>
  );
}
