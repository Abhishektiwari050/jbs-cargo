"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "GDP COMPLIANT", body: "PHARMA LOGISTICS", year: "2024" },
  { name: "ISO 9001:2015", body: "QUALITY MGMT", year: "ACTIVE" },
  { name: "WCA WORLD", body: "REGISTERED AGENT", year: "PREMIUM" },
  { name: "IATA", body: "CARGO AGENT", year: "VALID" },
  { name: "CUSTOMS", body: "AUTHORIZED CARRIER", year: "DOMESTIC" },
];

export function CertificationsCarousel() {
  return (
    <div className="w-full py-12 overflow-hidden bg-[var(--color-surface-light)] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em] mb-12">Industrial Compliance & Validations</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
           {certifications.map((cert, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col items-center group cursor-default"
             >
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm group-hover:shadow-xl group-hover:border-[var(--color-brand-orange)]/20 transition-all duration-500 mb-4">
                  <div className="w-8 h-8 bg-[var(--color-brand-blue)]/10 rounded-lg flex items-center justify-center">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[var(--color-brand-blue)]" strokeWidth="3"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                  </div>
               </div>
               <p className="text-xs font-black text-[var(--color-brand-blue)] uppercase tracking-widest text-center">{cert.name}</p>
               <p className="text-[8px] font-bold text-neutral-400 tracking-widest mt-1">{cert.body} — {cert.year}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
