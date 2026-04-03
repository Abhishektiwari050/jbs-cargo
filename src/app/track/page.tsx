"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const TRACKING_STEPS = [
  { label: "Gateway Dispatch", location: "Delhi NCR Processing", time: "10:45 AM", status: "Done", done: true },
  { label: "Regional Sorting Center", location: "North Hub Operations", time: "02:30 PM", status: "Done", done: true },
  { label: "In Transit", location: "National Highway 9 Corridor", time: "06:15 PM", status: "Active", done: true },
  { label: "Inter-state Transit", location: "State Border Checkpoint", time: "Pending", status: "Awaited", done: false },
  { label: "Final Delivery", location: "Destination Warehouse", time: "Pending", status: "Awaited", done: false },
];

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<"IDLE" | "SEARCHING" | "FOUND" | "ERROR">("IDLE");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setStatus("SEARCHING");
    setTimeout(() => {
      setStatus(trackingId.includes("JBS") ? "FOUND" : "ERROR");
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-28 pb-24 bg-white relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 opacity-50 z-0 select-none pointer-events-none">
        <img src="/assets/images/timeline-2026.png" alt="Tracking Background" className="w-full h-full object-cover grayscale opacity-[0.05] md:opacity-10" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 block">Mission Control</span>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-[var(--color-brand-blue)] mb-4 uppercase font-display leading-[0.9] md:leading-[0.85]">
            Track <span className="text-[var(--color-brand-orange)]">Cargo.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl font-medium">
            Real-time visibility into the domestic cargo network. Enter your JBS Tracking ID below.
          </p>
        </motion.div>

        {/* Premium Search */}
        <div className="mb-12 md:mb-16">
          <PlaceholdersAndVanishInput
            placeholders={[
              "Enter JBS Tracking ID...",
              "JBS-2026-X89HQ",
              "Track your domestic cargo",
              "Monitor gateway status",
            ]}
            onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
            onSubmit={handleSearch}
          />
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {status === "SEARCHING" && (
             <motion.div
               key="searching"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="flex flex-col items-center justify-center py-20"
             >
               <div className="w-12 h-12 border-4 border-[var(--color-brand-orange)] border-t-transparent rounded-full animate-spin mb-4" />
               <p className="text-xs font-black uppercase tracking-widest text-gray-400">Syncing with Hubs...</p>
             </motion.div>
          )}

          {status === "FOUND" && (
            <motion.div 
              key="found"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-black/5 p-6 md:p-10 rounded-3xl mb-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl md:text-8xl font-black text-black/[0.02] font-display uppercase select-none pointer-events-none">VALIDATED</div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/5 pb-8 mb-10 gap-8">
                <div>
                  <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-green-600 uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> In Transit
                  </span>
                  <p className="text-3xl md:text-4xl font-black text-[var(--color-brand-blue)] font-display tracking-tighter">{trackingId}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Arrival</p>
                  <p className="text-xl md:text-2xl font-black text-[var(--color-brand-orange)]">March 25, 2026</p>
                </div>
              </div>
 
              {/* Timeline Steps */}
              <div className="space-y-0 px-2 md:px-4">
                {TRACKING_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-3.5 h-3.5 md:w-4 h-4 rounded-full ring-4 ${step.done ? 'bg-[var(--color-brand-orange)] ring-orange-100' : 'bg-gray-200 ring-gray-100'}`} />
                      {i < TRACKING_STEPS.length - 1 && (
                        <div className={`w-[1px] h-14 md:h-16 ${step.done ? 'bg-gradient-to-b from-orange-200 to-transparent' : 'bg-gray-100'}`} />
                      )}
                    </div>
                    <div className="pb-8 md:pb-10 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <h4 className={`font-black text-base md:text-lg uppercase font-display tracking-tighter ${step.done ? 'text-[var(--color-brand-blue)]' : 'text-gray-300'}`}>{step.label}</h4>
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${step.done ? 'border-orange-100 text-[var(--color-brand-orange)] bg-orange-50' : 'border-gray-100 text-gray-300 bg-gray-50'} w-fit`}>{step.status}</span>
                      </div>
                      <p className="text-gray-400 font-medium text-xs md:text-sm mt-0.5">{step.location}</p>
                      <time className={`text-[10px] md:text-xs font-bold mt-1 block ${step.done ? 'text-[var(--color-brand-orange)]' : 'text-gray-300'}`}>{step.time}</time>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {status === "ERROR" && (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-red-50 border border-red-100 text-red-600 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-16"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="font-black text-lg md:text-xl uppercase tracking-tighter">Authentication Failure</p>
                <p className="opacity-70 font-medium text-sm md:text-base">Tracking ID not recognized. Check your manifest.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
