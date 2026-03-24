"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MapDot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

interface WorldMapProps {
  dots: MapDot[];
  lineColor?: string;
  className?: string;
}

// Simple lat/lng to SVG coordinates (Mercator-like projection)
function projectPoint(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * 800;
  const y = ((90 - lat) / 180) * 400;
  return { x, y };
}

function generateCurvedPath(
  start: { x: number; y: number },
  end: { x: number; y: number }
): string {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50; // Arc upward
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

export function WorldMap({ dots, lineColor = "#F97316", className }: WorldMapProps) {
  return (
    <div className={cn("relative w-full aspect-[2/1] bg-neutral-950 rounded-3xl overflow-hidden", className)}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Map SVG */}
      <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full">
        {/* World outline dots - simplified */}
        {Array.from({ length: 2000 }, (_, i) => {
          const x = (i % 80) * 10 + Math.random() * 5;
          const y = Math.floor(i / 80) * 16 + Math.random() * 5;
          // Simple land mass check (very rough)
          const isLand = (
            (x > 350 && x < 550 && y > 80 && y < 280) || // South Asia
            (x > 300 && x < 400 && y > 60 && y < 200) ||  // Middle East
            (x > 100 && x < 350 && y > 50 && y < 250) ||  // Europe/Africa
            (x > 550 && x < 750 && y > 80 && y < 300)     // SE Asia  
          );
          if (!isLand || Math.random() > 0.3) return null;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1"
              fill="white"
              opacity="0.15"
            />
          );
        })}

        {/* Animated Route Arcs */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          const path = generateCurvedPath(start, end);
          
          return (
            <g key={i}>
              {/* Background Path */}
              <path d={path} fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.2" />
              
              {/* Animated Path */}
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: "easeInOut" }}
              />
              
              {/* Start Dot */}
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 }}
              />
              <circle cx={start.x} cy={start.y} r="8" fill={lineColor} opacity="0.2">
                <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* End Dot */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 + 1.5 }}
              />

              {/* Labels */}
              {dot.start.label && (
                <motion.text
                  x={start.x + 8}
                  y={start.y - 8}
                  fill="white"
                  fontSize="8"
                  fontWeight="bold"
                  opacity="0.6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 + 0.5 }}
                >
                  {dot.start.label}
                </motion.text>
              )}
              {dot.end.label && (
                <motion.text
                  x={end.x + 8}
                  y={end.y - 8}
                  fill="white"
                  fontSize="8"
                  fontWeight="bold"
                  opacity="0.6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 + 1.8 }}
                >
                  {dot.end.label}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Corner UI */}
      <div className="absolute top-6 left-6 z-10">
        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">JBS Network</p>
        <p className="text-xs font-bold text-white/20">Live Route Arcs</p>
      </div>
      <div className="absolute bottom-6 right-6 z-10 text-right">
        <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">● System Online</p>
      </div>
    </div>
  );
}
