"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Tracking", href: "/track" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-md rounded-2xl px-8 py-3 border border-white/10">
        {/* Logo Lockup */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[var(--color-brand-blue)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-brand-orange)] transition-colors duration-500 shadow-xl shadow-black/20">
             <span className="text-white font-black text-xl">J</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-[var(--color-brand-blue)] font-display uppercase leading-none">
              JBS<span className="text-[var(--color-brand-orange)]">Cargo</span>
            </span>
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">since 2005</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative flex items-center gap-2 text-xs font-black text-[var(--color-brand-blue)]/60 hover:text-[var(--color-brand-blue)] uppercase tracking-widest transition-colors"
            >
              {link.name === "Tracking" && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]"></span>
                </span>
              )}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-6 py-2.5 bg-[var(--color-brand-blue)] text-white rounded-xl font-black text-xs hover:bg-[var(--color-brand-orange)] transition-all shadow-2xl hover:shadow-[var(--color-brand-orange)]/30 uppercase tracking-tighter"
          >
            Terminal Login
          </button>
        </nav>

        {/* Mobile Toggle (Placeholder for now) */}
        <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
          <div className="w-full h-0.5 bg-[var(--color-brand-blue)]" />
          <div className="w-full h-0.5 bg-[var(--color-brand-blue)]" />
        </div>
      </div>
    </motion.header>
  );
}
