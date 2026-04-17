"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Boxes = ({ className, ...rest }: { className?: string }) => {
  // Dense grid for full viewport coverage after scaling and skewing
  const rows = useMemo(() => new Array(25).fill(1).map((_, i) => i), []);
  const cols = useMemo(() => new Array(20).fill(1).map((_, i) => i), []);

  const colors = [
    "var(--color-brand-orange)",
    "var(--color-brand-blue)",
    "#3b82f6", // blue-500
    "#8b5cf6", // violet-500
    "#f43f5e", // rose-500
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute left-0 p-4 top-0 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 hero-boxes-grid",
        className
      )}
      {...rest}
    >
      {rows.map((i) => (
        <motion.div
          key={`row` + i}
          className="w-64 h-32 border-l border-slate-200 relative"
        >
          {cols.map((j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="w-64 h-32 border-r border-t border-slate-200 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-200 stroke-[1px] pointer-events-none"
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
