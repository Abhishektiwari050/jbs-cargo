"use client";

import { motion } from "framer-motion";

const regions = [
  { name: "Kathmandu, NP", x: "70%", y: "40%", status: "Active" },
  { name: "Dadri Hub, IN", x: "50%", y: "45%", status: "HQ" },
  { name: "Bhutan, BT", x: "75%", y: "42%", status: "Active" },
  { name: "Dhaka, BD", x: "80%", y: "55%", status: "Active" },
  { name: "Mumbai Port, IN", x: "40%", y: "65%", status: "Transit" },
];

export function CoverageMap() {
  return (
    <div className="w-full h-[600px] bg-neutral-900 rounded-[4rem] relative overflow-hidden group">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
         <span className="text-[12rem] font-black text-white/5 -rotate-12 uppercase tracking-[2rem]">SAARC NETWORK</span>
      </div>

      <div className="absolute top-12 left-12 z-20">
         <h3 className="text-4xl font-black text-white uppercase tracking-tighter font-display mb-2">Cross-Border <span className="text-[var(--color-brand-orange)]">Architecture.</span></h3>
         <p className="text-gray-500 font-medium">Global hub coordinates and border transit telemetry.</p>
      </div>

      {/* Simplified Map Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[800px] h-[500px] relative">
            <svg viewBox="0 0 800 500" className="w-full h-full text-white/5">
                <path d="M200 100 Q 400 50 600 100 T 700 300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M300 400 Q 500 450 700 400" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
            
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin"
                style={{ left: region.x, top: region.y }}
              >
                <div className="relative">
                   <div className="w-4 h-4 bg-[var(--color-brand-orange)] rounded-full shadow-[0_0_20px_var(--color-brand-orange)] relative z-10" />
                   <div className="absolute -inset-2 bg-[var(--color-brand-orange)] rounded-full animate-ping opacity-20" />
                   
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-x-2 group-hover/pin:translate-x-0">
                      <p className="text-xs font-black text-white uppercase tracking-widest leading-none mb-1">{region.name}</p>
                      <p className="text-[8px] font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em]">{region.status}</p>
                   </div>
                </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Map UI Elements */}
      <div className="absolute bottom-12 right-12 flex gap-8">
         <div className="text-right">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Border Status</p>
            <p className="text-xl font-black text-green-500 uppercase">Clearance: High</p>
         </div>
         <div className="text-right">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Network Capacity</p>
            <p className="text-xl font-black text-white uppercase">98.2% Optimal</p>
         </div>
      </div>
    </div>
  );
}
