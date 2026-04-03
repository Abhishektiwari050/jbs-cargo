"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

export function WobbleCard({ children, containerClassName, className }: WobbleCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setMousePosition({ x, y });
    
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--spotlight-x", `${x}px`);
      spotlightRef.current.style.setProperty("--spotlight-y", `${y}px`);
      spotlightRef.current.style.setProperty("--spotlight-radius", "350px");
      spotlightRef.current.style.setProperty("--spotlight-color", "rgba(255,255,255,0.06)");
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        transform: isHovered
          ? `translate3d(${mousePosition.x / 20}px, ${mousePosition.y / 20}px, 0) scale3d(1.03, 1.03, 1)`
          : "translate3d(0, 0, 0) scale3d(1, 1, 1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative overflow-hidden rounded-3xl",
        containerClassName
      )}
    >
      <div
        className="relative h-full overflow-hidden sm:mx-0 sm:rounded-3xl"
      >
        <motion.div
          animate={{
            boxShadow: isHovered 
              ? "0 20px 40px rgba(34, 42, 53, 0.2)" 
              : "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
        />
        <div
          ref={spotlightRef}
          className={cn(
            "pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 dynamic-spotlight",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        <div className={cn("relative h-full", className)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
