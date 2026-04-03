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
            <p className="text-gray-600 font-medium max-w-xl mb-10 md:mb-12">
              Strategic logistics access. Connect with our New Delhi HQ or regional hubs.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {/* HQ Card with Spotlight */}
              <CardSpotlight className="p-8 md:p-10 border border-black/5 rounded-[2rem]" color="orange">
                <h3 className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-widest mb-4 md:mb-6">Corporate Headquarters</h3>
                <p className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] font-display uppercase tracking-tight mb-2">JBS Cargo Movers</p>
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                  Plot No 6, Kh No 349, VPO Shahbad Mohamadpur,<br />
                  Bijwasan Sub Post Office, South West Delhi, Delhi - 110061
                </p>
                <div className="mt-8 flex flex-col gap-3 md:gap-2 text-sm font-bold text-[var(--color-brand-blue)]">
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[var(--color-brand-blue)]/5 border border-black/5 rounded-lg flex items-center justify-center text-[10px]">📞</span>
                    +91 84602 46040 / 93223 33333
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[var(--color-brand-blue)]/5 border border-black/5 rounded-lg flex items-center justify-center text-[10px]">✉️</span>
                    jbscargomovers@gmail.com
                  </p>
                </div>
              </CardSpotlight>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-2">
                <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-orange)]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  <h4 className="text-lg font-bold text-[var(--color-brand-blue)] mb-2 relative z-10">Delhi NCR Hub</h4>
                  <p className="text-sm text-gray-500 font-medium mb-4 relative z-10">Regional processing and rail cargo interchange.</p>
                  <div className="flex items-center text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-wider relative z-10">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-orange)]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                  <h4 className="text-lg font-bold text-[var(--color-brand-blue)] mb-2 relative z-10">North India Hub</h4>
                  <p className="text-sm text-gray-500 font-medium mb-4 relative z-10">Strategic transit point for northern distribution.</p>
                  <div className="flex items-center text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-wider relative z-10">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
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
