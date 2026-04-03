"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
    numLines?: number;
  };
}

interface LineData {
  id: number;
  d: string;
  opacity: number;
  duration: number;
}

export const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  children,
  className,
  svgOptions,
}) => {
  const numLines = svgOptions?.numLines || 12;
  const duration = svgOptions?.duration || 15;

  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    const generatedLines: LineData[] = Array.from({ length: numLines }).map((_, i) => {
      const startX = (i * (1000 / numLines)) + (Math.random() * 50);
      const amplitude = 30 + Math.random() * 70;
      const frequency = 0.5 + Math.random() * 1.5;
      const offset = Math.random() * 1000;
      const lineDuration = duration + Math.random() * 5;
      const opacity = 0.03 + Math.random() * 0.05;

      const points: string[] = [];
      for (let y = 0; y <= 1000; y += 250) { 
        const x = startX + Math.sin((y / 1000) * Math.PI * frequency + offset) * amplitude;
        points.push(`${y === 0 ? "M" : "L"} ${x} ${y}`);
      }

      return {
        id: i,
        d: points.join(" "),
        opacity,
        duration: lineDuration,
      };
    });
    setLines(generatedLines);
  }, [numLines, duration]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        {lines.map((line) => (
          <path
            key={line.id}
            d={line.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity={line.opacity}
            className="text-neutral-300"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
