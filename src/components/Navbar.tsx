"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Tracking", href: "/track" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 200);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          "max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 md:px-8 py-3 transition-all duration-500",
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/5"
            : "bg-white/5 backdrop-blur-md border border-white/10"
        )}
      >
        {/* Logo */}
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

          {/* Moving Border CTA */}
          <MovingBorder
            onClick={() => window.location.href = '/contact'}
            borderRadius="0.75rem"
            containerClassName="h-10"
            className="px-6 py-2"
          >
            <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Terminal Login
            </span>
          </MovingBorder>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
          <div className="w-full h-0.5 bg-[var(--color-brand-blue)]" />
          <div className="w-full h-0.5 bg-[var(--color-brand-blue)]" />
        </div>
      </div>
    </motion.header>
  );
}
