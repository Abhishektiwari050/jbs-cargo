"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
    numLines?: number;
  };
}

export const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  children,
  className,
  svgOptions,
}) => {
  const numLines = svgOptions?.numLines || 12; // Far fewer lines for performance
  const duration = svgOptions?.duration || 15;

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        {Array.from({ length: numLines }).map((_, i) => {
          const startX = (i * (1000 / numLines)) + (Math.random() * 50); // Spread lines evenly
          const amplitude = 30 + Math.random() * 70;
          const frequency = 0.5 + Math.random() * 1.5;
          const offset = Math.random() * 1000;
          const speed = duration + Math.random() * 5;
          const opacity = 0.03 + Math.random() * 0.05;

          // Generate a much simpler path (only 5 points instead of 20)
          const points: string[] = [];
          for (let y = 0; y <= 1000; y += 250) { 
            const x = startX + Math.sin((y / 1000) * Math.PI * frequency + offset) * amplitude;
            points.push(`${y === 0 ? "M" : "L"} ${x} ${y}`);
          }

          return (
            <path
              key={i}
              d={points.join(" ")}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={opacity}
              className="text-neutral-300"
            />
          );
        })}
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
