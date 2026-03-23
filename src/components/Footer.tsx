"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-blue)] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50" />
      
      {/* Dynamic Background Glow */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[var(--color-brand-orange)]/10 rounded-full blur-[10rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/5 shadow-2xl">
                <span className="text-white font-black text-xl">J</span>
              </div>
              <span className="text-2xl font-black tracking-tighter font-display uppercase">
                JBS<span className="text-[var(--color-brand-orange)]">Cargo</span>
              </span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Industrial-grade freight forwarding and cool-chain logistics infrastructure for the global enterprise.
            </p>
            <div className="flex gap-4">
               {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-orange)] transition-all cursor-pointer">
                     <div className="w-3 h-3 bg-white/40" />
                  </div>
               ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-brand-orange)] mb-8">Infrastructure</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Commercial Cold Chain</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Freight Forwarding</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Relocation Services</Link></li>
              <li><Link href="#track" className="text-gray-300 hover:text-white transition-colors font-medium">Live Tracking</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-brand-orange)] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About JBS</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Corporate History</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Industry Focus</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-brand-orange)] mb-8">Headquarters</h4>
            <address className="not-italic space-y-4 text-gray-300 font-medium">
              <p>Industrial Hub, Delhi NCR<br />India - 110001</p>
              <p>Email: <Link href="mailto:ops@jbscargo.com" className="hover:text-white transition-colors">ops@jbscargo.com</Link></p>
              <p>Phone: +91 (0) 11 4050 6700</p>
            </address>
          </div>
        </motion.div>

        {/* Legal Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-bold px-0">
          <p>© 2026 JBS Cargo Movers. All Infrastructure Reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest text-[10px] items-center">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link href="#" className="hover:text-white transition-colors">GST: 07AAAJB1234F1Z5</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
