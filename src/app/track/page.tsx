"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { WorldMap } from "@/components/ui/world-map";

const JBS_ROUTES = [
  { start: { lat: 28.6, lng: 77.2, label: "Delhi HQ" }, end: { lat: 27.7, lng: 85.3, label: "Kathmandu" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 27.5, lng: 89.6, label: "Thimphu" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 23.8, lng: 90.4, label: "Dhaka" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 19.1, lng: 72.9, label: "Mumbai" } },
  { start: { lat: 28.6, lng: 77.2 }, end: { lat: 25.3, lng: 55.3, label: "Dubai" } },
];

const TRACKING_STEPS = [
  { label: "Gateway Dispatch", location: "Delhi Infrastructure Hub", time: "10:45 AM", done: true },
  { label: "ICD Dadri Processing", location: "Customs Clearance Zone", time: "02:30 PM", done: true },
  { label: "In Transit", location: "National Highway 9 Corridor", time: "06:15 PM", done: true },
  { label: "Border Checkpoint", location: "Sunauli / Bhairahawa Gate", time: "Pending", done: false },
  { label: "Final Delivery", location: "Destination Warehouse", time: "Pending", done: false },
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
    <main className="min-h-screen pt-28 pb-24 bg-[#060d1b] relative overflow-hidden font-sans">
      {/* Spotlight Beams */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-40" fill="var(--color-brand-orange)" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="trackgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trackgrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.4em] mb-4 block">Mission Control</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 uppercase font-display leading-[0.85]">
            Track <span className="text-[var(--color-brand-orange)]">Cargo.</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl font-medium">
            Real-time visibility into global infrastructure. Enter your JBS Tracking ID below.
          </p>
        </motion.div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative w-full max-w-3xl mb-16">
          <div className="relative flex items-center bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 focus-within:border-[var(--color-brand-orange)]/30 transition-colors">
            <input 
              type="text"
              placeholder="JBS-2026-X89HQ"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
              className="w-full px-6 py-5 text-xl font-bold bg-transparent text-white outline-none placeholder:text-white/20 font-display uppercase tracking-widest"
            />
            <button 
              type="submit"
              disabled={status === "SEARCHING"}
              className="px-10 py-4 bg-[var(--color-brand-orange)] text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all disabled:opacity-50 shadow-xl shadow-orange-500/20 whitespace-nowrap"
            >
              {status === "SEARCHING" ? (
                <span className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  Locating...
                </span>
              ) : "Track"}
            </button>
          </div>
        </form>

        {/* Results */}
        <AnimatePresence mode="wait">
          {status === "FOUND" && (
            <motion.div 
              key="found"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-10 rounded-3xl mb-16"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-8 mb-10 gap-6">
                <div>
                  <span className="text-xs font-black tracking-[0.2em] text-green-500 uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> In Transit
                  </span>
                  <p className="text-4xl font-black text-white font-display tracking-tighter">{trackingId}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Estimated Arrival</p>
                  <p className="text-2xl font-black text-[var(--color-brand-orange)]">March 25, 2026</p>
                </div>
              </div>
 
              {/* Timeline Steps */}
              <div className="space-y-0">
                {TRACKING_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ring-4 ${step.done ? 'bg-[var(--color-brand-orange)] ring-orange-500/20' : 'bg-white/10 ring-white/5'}`} />
                      {i < TRACKING_STEPS.length - 1 && (
                        <div className={`w-[1px] h-16 ${step.done ? 'bg-gradient-to-b from-orange-500/30 to-transparent' : 'bg-white/5'}`} />
                      )}
                    </div>
                    <div className="pb-10">
                      <h4 className={`font-black text-lg uppercase font-display tracking-tighter ${step.done ? 'text-white' : 'text-white/30'}`}>{step.label}</h4>
                      <p className="text-white/40 font-medium text-sm">{step.location}</p>
                      <time className={`text-xs font-bold mt-1 block ${step.done ? 'text-[var(--color-brand-orange)]' : 'text-white/20'}`}>{step.time}</time>
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
              className="bg-red-500/10 border border-red-500/20 text-red-400 p-8 rounded-3xl flex items-center gap-6 mb-16"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="font-black text-xl uppercase tracking-tighter">Authentication Failure</p>
                <p className="opacity-70 font-medium">Tracking ID not recognized. Check your manifest.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* World Map */}
        <div className="mt-8">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Active Route Network</p>
          <WorldMap dots={JBS_ROUTES} />
        </div>
      </div>
    </main>
  );
}
