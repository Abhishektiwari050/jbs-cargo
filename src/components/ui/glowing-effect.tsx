"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({ children, className, glowColor = "var(--color-brand-orange)" }: GlowingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden rounded-3xl", className)}
    >
      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}33, transparent 40%)`,
        }}
      />
      {/* Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}44, transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
