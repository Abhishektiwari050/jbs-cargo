"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Boxes = ({ className, ...rest }: { className?: string }) => {
  // Balanced grid size for performance and visual coverage
  const rows = useMemo(() => new Array(60).fill(1).map((_, i) => i), []);
  const cols = useMemo(() => new Array(40).fill(1).map((_, i) => i), []);

  const colors = [
    "var(--color-brand-orange)",
    "var(--color-brand-blue)",
    "var(--color-sky-500)",
    "var(--color-indigo-500)",
    "var(--color-slate-500)",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 hero-boxes-grid",
        className
      )}
      {...rest}
    >
      {rows.map((i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-white/5 relative"
        >
          {cols.map((j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-white/5 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-white/5 stroke-[1px] pointer-events-none"
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
};
