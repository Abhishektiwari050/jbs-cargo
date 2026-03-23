"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cold Chain Logistics",
    description: "Temperature-controlled precision for Pharma & Food industries.",
    color: "bg-[var(--color-brand-blue)]",
    textColor: "text-white",
    span: "md:col-span-2",
  },
  {
    title: "Freight Forwarding",
    description: "End-to-end Air, Sea, and Rail global transport.",
    color: "bg-[var(--color-surface-white)]",
    textColor: "text-[var(--color-brand-blue)]",
    span: "md:col-span-1",
  },
  {
    title: "Relocation Services",
    description: "Seamless B2C and corporate office shifting.",
    color: "bg-[var(--color-surface-white)]",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 0.98 }}
          className={cn(
            "relative overflow-hidden rounded-3xl p-8 min-h-[300px] flex flex-col justify-end group transition-all cursor-pointer",
            service.color,
            service.span
          )}
        >
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-black/5 group-hover:bg-white/10 transition-colors duration-700" />
          
          <div className="z-10 relative">
            <h3 className={cn("text-3xl font-black mb-3 tracking-tighter uppercase font-display", service.textColor)}>
              {service.title}
            </h3>
            <p className={cn("text-lg opacity-80 font-medium", service.textColor)}>
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
