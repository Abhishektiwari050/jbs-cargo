"use client";

import React from "react";
import { motion } from "framer-motion";

const BRANDS = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "BlueDart", color: "#EEDC00" },
  { name: "Delhivery", color: "#000000" },
  { name: "Reliance", color: "#E21E26" },
  { name: "Tata", color: "#1B4D9C" },
  { name: "Samsung", color: "#1428A0" },
  { name: "Maruti Suzuki", color: "#2E3192" },
  { name: "Airtel", color: "#E11900" },
  { name: "HDFC Bank", color: "#004C8F" },
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
         <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">
            Trusted by Industry Leaders
         </p>
      </div>
      <div className="flex relative overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-16 mx-8">
              {BRANDS.map((brand) => (
                <div 
                  key={`${setIndex}-${brand.name}`}
                  className="flex items-center gap-3 group transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-xs shadow-lg"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name[0]}
                  </div>
                  <span className="text-xl font-black text-[var(--color-brand-blue)] tracking-tighter uppercase font-display">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
