"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";

const NAV_LINKS = [
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "TRACKING", href: "/track" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 200 && !isMobileMenuOpen);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 md:px-8 py-3 transition-all duration-500 relative z-50",
          scrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm"
            : "bg-white/40 backdrop-blur-md border border-white/10"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative h-12 w-24 flex items-center justify-center">
            {/* Oval Logo Base */}
            <div className="absolute inset-0 border-2 border-[var(--color-brand-orange)] rounded-full group-hover:border-[var(--color-brand-blue)] transition-colors duration-500" />
            <span className="text-2xl font-black text-[var(--color-brand-orange)] group-hover:text-[var(--color-brand-blue)] transition-colors duration-500 font-display tracking-tighter">
              JBS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-[var(--color-brand-blue)] font-display uppercase leading-none">
              <span className="text-[var(--color-brand-orange)]">JBS</span> Cargo Movers
            </span>
            <span className="text-[7px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">Cargo & Workforce · All Over India</span>
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
              {link.name === "TRACKING" && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
              )}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}


        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer relative z-50 p-2 rounded-xl bg-[var(--color-brand-blue)]/5 hover:bg-[var(--color-brand-blue)]/10 transition-colors"
          aria-label="Toggle Menu"
          suppressHydrationWarning={true}
        >
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[var(--color-brand-blue)] rounded-full origin-center" 
          />
          <motion.div 
            animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-[var(--color-brand-blue)] rounded-full" 
          />
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-[var(--color-brand-blue)] rounded-full origin-center" 
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col p-8 pt-32"
            >
              <div className="flex flex-col gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-3xl font-black text-[var(--color-brand-blue)] uppercase tracking-tighter"
                    >
                      <span className="flex items-center gap-4">
                        {link.name}
                        {link.name === "TRACKING" && (
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                          </span>
                        )}
                      </span>
                      <span className="text-[var(--color-brand-orange)] transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-8">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-black/5">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Support & Ops</p>
                  <p className="text-sm font-bold text-[var(--color-brand-blue)] mb-2">+91 9582566995</p>
                  <p className="text-sm font-bold text-[var(--color-brand-blue)]">jbscargomovers@gmail.com</p>
                </div>
                

                <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  JBS Cargo Movers © 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
