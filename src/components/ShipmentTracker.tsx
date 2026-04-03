"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ShipmentTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-blue)] rounded-bl-[5rem] opacity-[0.03]" />
      
      <div className="flex flex-col md:flex-row items-end gap-6 relative z-10">
        <div className="flex-1 space-y-4 w-full">
          <label className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-brand-blue)] ml-2">Shipment ID / LRN Number</label>
          <div className="relative group">
             <input 
               type="text"
               value={trackingId}
               onChange={(e) => setTrackingId(e.target.value)}
               placeholder="e.g. JB-99827-X"
               className="w-full bg-neutral-50 px-8 py-6 rounded-[2rem] border-2 border-transparent focus:border-[var(--color-brand-blue)] outline-none transition-all text-xl font-bold uppercase placeholder:text-neutral-300"
               suppressHydrationWarning={true}
             />
             <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
             </div>
          </div>
        </div>
        <button 
          onClick={handleTrack}
          className="bg-[var(--color-brand-blue)] text-white px-12 py-6 rounded-[2rem] font-black uppercase text-sm tracking-widest hover:bg-[var(--color-brand-orange)] transition-all shadow-xl hover:shadow-[var(--color-brand-orange)]/30 disabled:opacity-50"
          suppressHydrationWarning={true}
          disabled={!trackingId || loading}
        >
          {loading ? "querying..." : "Analyze Transit"}
        </button>
      </div>

      <div className="mt-12 pt-12 border-t border-black/5 flex flex-wrap gap-12">
         <div className="space-y-1">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Active Fleet</p>
            <p className="text-2xl font-black text-[var(--color-brand-blue)]">482 Units</p>
         </div>
         <div className="space-y-1">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Border Status</p>
            <p className="text-2xl font-black text-[var(--color-brand-orange)]">Clear</p>
         </div>
         <div className="space-y-1">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Precise Temp</p>
            <p className="text-2xl font-black text-green-600">Locked</p>
         </div>
      </div>
    </div>
  );
}
