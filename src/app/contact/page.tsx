"use client";

import React from "react";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-sans">
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-[8rem] font-black text-[var(--color-brand-blue)] leading-[0.8] mb-8 uppercase font-display tracking-tighter">
                Connect <br />
                <span className="text-[var(--color-brand-orange)]">Hubs.</span>
              </h1>
              <p className="text-2xl text-[var(--color-text-secondary)] mb-12 font-medium leading-relaxed">
                Strategic infrastructure access. Connect with our New Delhi HQ or North India hubs.
              </p>
              
              <div className="space-y-12">
                 <div className="p-10 border border-black/5 rounded-[2.5rem] bg-[var(--color-surface-light)]">
                    <h3 className="text-xs font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-6">Corporate Headquarters</h3>
                    <p className="text-2xl font-black text-[var(--color-brand-blue)] font-display uppercase tracking-tight mb-2">JBS Cargo Movers India</p>
                    <p className="text-gray-500 font-medium leading-relaxed">
                       1/413, Vaishali, Ghaziabad<br />
                       Delhi NCR - 110001
                    </p>
                    <div className="mt-8 flex flex-col gap-2 text-sm font-bold text-[var(--color-brand-blue)]">
                       <p>Tel: +91 (0) 11 4050 6700</p>
                       <p>Email: ops@jbscargo.com</p>
                    </div>
                 </div>

                 <div className="flex gap-20 px-4">
                    <div>
                       <p className="text-xs font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-4">Operations Hub</p>
                       <p className="text-xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tight">ICD Dadri</p>
                    </div>
                    <div>
                       <p className="text-xs font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-4">Regional Hub</p>
                       <p className="text-xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tight">ICD Loni</p>
                    </div>
                 </div>
              </div>
            </motion.div>

            <div className="relative">
               <div className="absolute inset-0 bg-[var(--color-brand-orange)]/5 blur-3xl rounded-full" />
               <div className="relative bg-[var(--color-surface-light)] p-8 md:p-12 rounded-[3.5rem] border border-black/5 shadow-2xl">
                  <h2 className="text-3xl font-black text-[var(--color-brand-blue)] mb-8 uppercase font-display tracking-tighter">Filing Logistics Inquiry</h2>
                  <LeadForm />
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
