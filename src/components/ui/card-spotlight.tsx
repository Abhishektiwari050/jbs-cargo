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
  const [isHovered, setIsHovered] = useState(false);
  const [relativePos, setRelativePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isHovered && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setRelativePos({
        x: mousePosition.x - rect.left,
        y: mousePosition.y - rect.top,
      });
    }
  }, [mousePosition, isHovered]);

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
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
        animate={{
          background: `radial-gradient(${radius}px circle at ${relativePos.x}px ${relativePos.y}px, ${
            color === "orange" ? "rgba(221, 92, 0, 0.15)" : "rgba(10, 25, 47, 0.15)"
          }, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
