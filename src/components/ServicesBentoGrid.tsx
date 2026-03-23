"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cold Chain Logistics",
    description: "Temperature-controlled precision for Pharma & Food industries.",
    color: "bg-[var(--color-brand-blue)]",
    textColor: "text-[#F8FAFC]",
    span: "md:col-span-2",
  },
  {
    title: "Freight Forwarding",
    description: "End-to-end Air, Sea, and Rail global transport.",
    color: "bg-white",
    textColor: "text-[var(--color-brand-blue)]",
    span: "md:col-span-1",
  },
  {
    title: "Relocation Services",
    description: "Seamless B2C and corporate office shifting.",
    color: "bg-white",
    textColor: "text-[var(--color-brand-blue)]",
    span: "md:col-span-1",
  },
  {
    title: "Cross-Border Transit",
    description: "Dedicated routes to Nepal, Bhutan & Bangladesh.",
    color: "bg-[var(--color-brand-orange)]",
    textColor: "text-white",
    span: "md:col-span-2",
  },
];

export function ServicesBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          className={cn(
            "relative overflow-hidden rounded-[2.5rem] p-10 min-h-[350px] flex flex-col justify-end group transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-black/5 border border-black/5",
            service.color,
            service.span
          )}
        >
          {/* Kinetic Corner Decor */}
          <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={service.textColor}><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </div>

          <div className="z-10 relative">
            <h3 className={cn("text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase font-display leading-none", service.textColor)}>
              {service.title}
            </h3>
            <p className={cn("text-lg font-medium mb-6 max-w-xs", service.textColor, i === 1 || i === 2 ? "opacity-70" : "opacity-80")}>
              {service.description}
            </p>
            
            <div className={cn("flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2", service.textColor)}>
               <span>Explore Technicals</span>
               <div className={cn("w-8 h-[2px]", i === 0 || i === 3 ? "bg-white" : "bg-[var(--color-brand-blue)]")} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
