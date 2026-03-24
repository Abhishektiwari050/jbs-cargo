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
  const numLines = svgOptions?.numLines || 100;
  const duration = svgOptions?.duration || 10;

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
          const startX = Math.random() * 1000;
          const amplitude = 50 + Math.random() * 200;
          const frequency = 1 + Math.random() * 3;
          const offset = Math.random() * 1000;
          const speed = duration + Math.random() * duration;
          const opacity = 0.02 + Math.random() * 0.06;

          // Generate a wavy path
          const points: string[] = [];
          for (let y = 0; y <= 1000; y += 20) {
            const x = startX + Math.sin((y / 1000) * Math.PI * frequency + offset) * amplitude;
            points.push(`${y === 0 ? "M" : "L"} ${x} ${y}`);
          }

          return (
            <g key={i}>
              <path
                d={points.join(" ")}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity={opacity}
                className="text-neutral-400"
              >
                <animate
                  attributeName="d"
                  values={`${points.join(" ")};${points.map((p, idx) => {
                    const parts = p.split(" ");
                    const prefix = parts[0];
                    const x = parseFloat(parts[1]) + Math.sin(idx * 0.3) * 30;
                    const y = parts[2];
                    return `${prefix} ${x} ${y}`;
                  }).join(" ")};${points.join(" ")}`}
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
