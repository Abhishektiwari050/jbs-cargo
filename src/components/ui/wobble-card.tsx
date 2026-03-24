"use client";

import React, { useState } from "react";
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

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `translate3d(${mousePosition.x / 20}px, ${mousePosition.y / 20}px, 0) scale3d(1.03, 1.03, 1)`
          : "translate3d(0, 0, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "relative overflow-hidden rounded-3xl",
        containerClassName
      )}
    >
      <div
        className="relative h-full overflow-hidden sm:mx-0 sm:rounded-3xl"
        style={{
          boxShadow: "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl"
          style={{
            background: isHovered
              ? `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 80%)`
              : "none",
          }}
        />
        <div className={cn("relative h-full", className)}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
