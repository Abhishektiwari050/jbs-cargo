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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Lockup */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[var(--color-brand-blue)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-brand-orange)] transition-colors duration-500">
             <span className="text-white font-black text-xl">J</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[var(--color-brand-blue)] font-display uppercase">
            JBS<span className="text-[var(--color-brand-orange)]">Cargo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[var(--color-brand-blue)]/70 hover:text-[var(--color-brand-blue)] uppercase tracking-widest transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-6 py-2.5 bg-[var(--color-brand-blue)] text-white rounded-lg font-bold text-sm hover:bg-[var(--color-brand-orange)] transition-all shadow-lg hover:shadow-[var(--color-brand-orange)]/20"
          >
            Get Quote
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
