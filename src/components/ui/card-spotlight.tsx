"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "orange",
  className,
}: {
  children: React.ReactNode;
  radius?: number;
  color?: string;
  className?: string;
}) => {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (isHovered && containerRef.current && spotlightRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      
      spotlightRef.current.style.setProperty("--spotlight-x", `${x}px`);
      spotlightRef.current.style.setProperty("--spotlight-y", `${y}px`);
      spotlightRef.current.style.setProperty("--spotlight-radius", `${radius}px`);
      spotlightRef.current.style.setProperty(
        "--spotlight-color", 
        color === "orange" ? "rgba(221, 92, 0, 0.15)" : "rgba(10, 25, 47, 0.15)"
      );
    }
  }, [mousePosition, isHovered, radius, color]);

  const spotlightColor = color === "orange" ? "rgba(221, 92, 0, 0.08)" : "rgba(10, 25, 47, 0.08)";

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-3xl border border-black/5 bg-white overflow-hidden group",
        className
      )}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition duration-300 group-hover:opacity-100 dynamic-spotlight"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
