"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colors = [
  "var(--color-brand-orange)",
  "var(--color-brand-blue)",
  "#3b82f6",
  "#8b5cf6",
  "#f43f5e",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Boxes = React.memo(({ className, ...rest }: { className?: string }) => {
  // Dense grid for full viewport coverage after scaling and skewing
  // Optimized grid density for high performance
  const rows = useMemo(() => new Array(12).fill(1).map((_, i) => i), []);
  const cols = useMemo(() => new Array(10).fill(1).map((_, i) => i), []);

  return (
    <div
      className={cn(
        "absolute left-0 p-4 top-0 flex -translate-x-1/4 -translate-y-1/4 w-[200%] h-[200%] z-0 hero-boxes-grid",
        className
      )}
      style={{ willChange: "transform" }}
      {...rest}
    >
      {rows.map((i) => (
        <motion.div
          key={`row` + i}
          className="w-[24rem] h-[12rem] border-l border-slate-200 relative"
          style={{ backfaceVisibility: "hidden" }}
        >
          {cols.map((j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="w-[24rem] h-[12rem] border-r border-t border-slate-200 relative"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Reduced SVG crosshair density for performance (render only on every 4th) */}
              {(i + j) % 4 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none opacity-40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
});

Boxes.displayName = "Boxes";
