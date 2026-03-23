"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<"IDLE" | "SEARCHING" | "FOUND" | "ERROR">("IDLE");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setStatus("SEARCHING");
    
    // Simulate API Call for Tracking System
    setTimeout(() => {
      setStatus(trackingId.includes("JBS") ? "FOUND" : "ERROR");
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[var(--color-surface-light)] relative overflow-hidden flex flex-col items-center">
      {/* Background Animated Lines for Tracking Vibe */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M -100 200 Q 300 100 600 300 T 1200 200" 
            fill="none" 
            stroke="var(--color-brand-blue)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[var(--color-brand-blue)] mb-6 uppercase font-display">
            Track <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-orange-400">
              Cargo.
            </span>
          </h1>
        </motion.div>
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-12 font-medium max-w-2xl leading-relaxed">
          Real-time visibility into global infrastructure. Enter your JBS Tracking ID below.
        </p>

        {/* Improved Vanishing Text Interaction */}
        <form onSubmit={handleSearch} className="relative w-full max-w-2xl group mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-orange)] rounded-2xl blur-2xl opacity-10 group-focus-within:opacity-25 transition-opacity duration-1000" />
          <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-[var(--color-brand-blue)]/5">
            <input 
              type="text"
              placeholder="JBS-2026-X89HQ"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
              className="w-full px-6 py-5 text-xl font-bold bg-transparent text-[var(--color-brand-blue)] outline-none placeholder:text-gray-300 font-display uppercase tracking-widest"
            />
            <button 
              type="submit"
              disabled={status === "SEARCHING"}
              className="px-10 py-5 bg-[var(--color-brand-blue)] text-white rounded-xl font-black text-lg hover:bg-[var(--color-brand-orange)] transition-all duration-500 disabled:opacity-50 shadow-xl"
            >
              {status === "SEARCHING" ? "LOCATING..." : "TRACK"}
            </button>
          </div>
        </form>

        {/* Tracking Results UI */}
        <div className="w-full max-w-3xl min-h-[400px]">
          <AnimatePresence mode="wait">
            {status === "FOUND" && (
              <motion.div 
                key="found"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="surface-lift p-10 rounded-[2.5rem] w-full text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                   <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" title="Active Stream" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-8 mb-8 gap-6">
                  <div>
                    <h3 className="text-xs font-black tracking-[0.2em] text-[var(--color-brand-orange)] uppercase mb-3 px-3 py-1 bg-[var(--color-brand-orange)]/5 rounded-full inline-block">In Transit</h3>
                    <p className="text-4xl font-black text-[var(--color-brand-blue)] font-display tracking-tighter">{trackingId}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</p>
                    <p className="text-2xl font-black text-[var(--color-brand-blue)]">March 25, 2026</p>
                  </div>
                </div>
                
                {/* Technical Timeline */}
                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-brand-orange)] ring-4 ring-orange-100" />
                      <div className="w-1 h-16 bg-gradient-to-b from-orange-100 to-transparent" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-[var(--color-brand-blue)] font-display uppercase tracking-tighter">Gateway Dispatch</h4>
                      <p className="text-gray-500 font-medium">Origin Warehouse • Delhi Infrastructure Hub</p>
                      <time className="text-sm font-bold text-[var(--color-brand-blue)]/60 mt-2 block">10:45 AM LOCAL</time>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {status === "ERROR" && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-red-50 text-red-600 p-8 rounded-3xl border border-red-100 flex items-center justify-center gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-black text-xl uppercase tracking-tighter">Authentication Failure</p>
                  <p className="opacity-80 font-medium">Tracking ID not recognized in global infrastructure sync. Check your manifest.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
