"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LeadForm } from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24 font-sans overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 md:mb-6 block">Network Access</span>
            <h1 className="text-4xl md:text-[7rem] font-black text-[var(--color-brand-blue)] leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 uppercase font-display tracking-tighter">
              Connect <br className="hidden md:block" />
              <span className="text-[var(--color-brand-orange)]">Hubs.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 md:mb-12 font-medium leading-relaxed">
              Strategic logistics access. Connect with our New Delhi HQ or North India hubs.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {/* HQ Card with Spotlight */}
              <CardSpotlight className="p-8 md:p-10 border border-black/5 rounded-[2rem]" color="orange">
                <h3 className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-4 md:mb-6">Corporate Headquarters</h3>
                <p className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] font-display uppercase tracking-tight mb-2">JBS Cargo Movers India</p>
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                  1/413, Vaishali, Ghaziabad<br />
                  Delhi NCR - 110001
                </p>
                <div className="mt-8 flex flex-col gap-3 md:gap-2 text-sm font-bold text-[var(--color-brand-blue)]">
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[var(--color-brand-blue)]/5 border border-black/5 rounded-lg flex items-center justify-center text-[10px]">📞</span>
                    +91 (0) 11 4050 6700
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[var(--color-brand-blue)]/5 border border-black/5 rounded-lg flex items-center justify-center text-[10px]">✉️</span>
                    ops@jbscargo.com
                  </p>
                </div>
              </CardSpotlight>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-2">
                <div className="group cursor-crosshair">
                  <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4 border border-black/5">
                    <img src="/assets/images/hub-dadri.png" alt="ICD Dadri" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-1 font-sans">Operations Hub</p>
                  <p className="text-lg md:text-xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tight">ICD Dadri</p>
                </div>
                <div className="group cursor-crosshair">
                  <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4 border border-black/5">
                    <img src="/assets/images/hub-loni.png" alt="ICD Loni" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-1 font-sans">Regional Hub</p>
                  <p className="text-lg md:text-xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tight">ICD Loni</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 bg-[var(--color-brand-orange)]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative bg-[var(--color-surface-light)] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] mb-2 uppercase font-display tracking-tighter leading-tight">Filing Logistics Inquiry</h2>
              <p className="text-xs md:text-sm text-gray-500 mb-8 font-medium">Enterprise-grade response within 4 business hours.</p>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
