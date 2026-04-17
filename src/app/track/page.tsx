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

        {/* Coming Soon Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-black/5 p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 p-12 text-6xl md:text-9xl font-black text-black/[0.02] font-display uppercase select-none pointer-events-none tracking-tighter">ESTABLISHING LINK</div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-[var(--color-brand-blue)] text-white px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl animate-pulse">
              System Integration Phase
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-[var(--color-brand-blue)] uppercase font-display tracking-tighter mb-6 leading-none">
              Live Network <br/>
              <span className="text-[var(--color-brand-orange)]">Telemetry.</span>
            </h2>
            
            <p className="max-w-xl text-gray-500 font-medium text-lg leading-relaxed mb-12">
              Our next-generation tracking portal is currently undergoing secure gateway synchronization. Real-time fleet triangulation and predictive arrival intelligence will be active shortly.
            </p>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
              <input 
                type="text" 
                disabled 
                placeholder="Enter Email for API Access" 
                className="flex-1 bg-neutral-50 border-2 border-neutral-100 px-8 py-5 rounded-2xl outline-none text-sm font-bold placeholder:text-neutral-300"
              />
              <button className="bg-[var(--color-brand-blue)] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[var(--color-brand-orange)] transition-all shadow-xl">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
