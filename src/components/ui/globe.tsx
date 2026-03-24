"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlobeRoute {
  from: string;
  to: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
}

interface AnimatedGlobeProps {
  routes?: GlobeRoute[];
  className?: string;
}

// Project lat/lng onto a circular view
function projectToSphere(lat: number, lng: number, cx: number, cy: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = cx + r * Math.sin(phi) * Math.cos(theta);
  const y = cy - r * Math.cos(phi);
  return { x, y, visible: Math.sin(phi) * Math.sin(theta) > -0.2 };
}

const DEFAULT_ROUTES: GlobeRoute[] = [
  { from: "Delhi", to: "Kathmandu", fromLat: 28.6, fromLng: 77.2, toLat: 27.7, toLng: 85.3 },
  { from: "Delhi", to: "Thimphu", fromLat: 28.6, fromLng: 77.2, toLat: 27.5, toLng: 89.6 },
  { from: "Delhi", to: "Dhaka", fromLat: 28.6, fromLng: 77.2, toLat: 23.8, toLng: 90.4 },
  { from: "Delhi", to: "Mumbai", fromLat: 28.6, fromLng: 77.2, toLat: 19.1, toLng: 72.9 },
  { from: "Delhi", to: "Dubai", fromLat: 28.6, fromLng: 77.2, toLat: 25.3, toLng: 55.3 },
  { from: "Delhi", to: "Singapore", fromLat: 28.6, fromLng: 77.2, toLat: 1.3, toLng: 103.8 },
  { from: "Mumbai", to: "Dubai", fromLat: 19.1, fromLng: 72.9, toLat: 25.3, toLng: 55.3 },
];

export function AnimatedGlobe({ routes = DEFAULT_ROUTES, className }: AnimatedGlobeProps) {
  const cx = 250, cy = 250, r = 200;

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="w-full aspect-square max-w-[500px] mx-auto"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Globe sphere */}
          <defs>
            <radialGradient id="globeGrad" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#1a3a5c" />
              <stop offset="50%" stopColor="#0a192f" />
              <stop offset="100%" stopColor="#040d1a" />
            </radialGradient>
            <radialGradient id="glowGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          {/* Outer glow */}
          <circle cx={cx} cy={cy} r={r + 20} fill="url(#glowGrad)" />
          
          {/* Globe body */}
          <circle cx={cx} cy={cy} r={r} fill="url(#globeGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          
          {/* Grid lines */}
          {[-60, -30, 0, 30, 60].map(lat => {
            const yOffset = (lat / 90) * r;
            const lineR = Math.cos((lat * Math.PI) / 180) * r;
            return (
              <ellipse key={`lat-${lat}`} cx={cx} cy={cy - yOffset} rx={lineR} ry={lineR * 0.3} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            );
          })}
          {[0, 30, 60, 90, 120, 150].map(lng => (
            <ellipse key={`lng-${lng}`} cx={cx} cy={cy} rx={r * Math.abs(Math.cos((lng * Math.PI) / 180))} ry={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" transform={`rotate(${lng}, ${cx}, ${cy})`} />
          ))}

          {/* Land mass dots */}
          {Array.from({ length: 150 }, (_, i) => {
            const lat = 60 - Math.random() * 100;
            const lng = -20 + Math.random() * 160;
            const pos = projectToSphere(lat, lng, cx, cy, r);
            if (!pos.visible) return null;
            return <circle key={i} cx={pos.x} cy={pos.y} r="1.5" fill="rgba(255,255,255,0.15)" />;
          })}

          {/* Route arcs */}
          {routes.map((route, i) => {
            const from = projectToSphere(route.fromLat, route.fromLng, cx, cy, r);
            const to = projectToSphere(route.toLat, route.toLng, cx, cy, r);
            if (!from.visible || !to.visible) return null;
            const midX = (from.x + to.x) / 2;
            const midY = Math.min(from.y, to.y) - 30;
            return (
              <g key={i}>
                <motion.path
                  d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, repeatDelay: 5 }}
                />
                {/* Start pulse */}
                <circle cx={from.x} cy={from.y} r="3" fill="#F97316" opacity="0.8" />
                <circle cx={from.x} cy={from.y} r="6" fill="none" stroke="#F97316" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="3;10;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* End dot */}
                <circle cx={to.x} cy={to.y} r="2" fill="#3b82f6" opacity="0.8" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Hub Labels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute top-[30%] left-[55%] text-[9px] font-black text-[var(--color-brand-orange)] uppercase tracking-widest">Delhi HQ</div>
          <div className="absolute top-[40%] left-[35%] text-[9px] font-black text-white/40 uppercase tracking-widest">Dubai</div>
          <div className="absolute top-[35%] left-[65%] text-[9px] font-black text-white/40 uppercase tracking-widest">KTM</div>
          <div className="absolute top-[55%] left-[50%] text-[9px] font-black text-white/40 uppercase tracking-widest">Mumbai</div>
        </div>
      </div>
    </div>
  );
}
