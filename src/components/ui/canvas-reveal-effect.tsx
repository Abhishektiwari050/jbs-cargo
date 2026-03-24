"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

export const CanvasRevealEffect: React.FC<
  React.PropsWithChildren<CanvasRevealEffectProps>
> = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cols = Math.floor(w / dotSize);
    const rows = Math.floor(h / dotSize);

    ctx.clearRect(0, 0, w, h);

    const time = Date.now() * animationSpeed * 0.001;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const noise = Math.sin(i * 0.1 + time) * Math.cos(j * 0.1 + time * 0.5);
        const normalizedNoise = (noise + 1) / 2;
        const opacityIndex = Math.floor(normalizedNoise * (opacities.length - 1));
        const opacity = opacities[opacityIndex];

        const colorIndex = Math.floor(normalizedNoise * colors.length) % colors.length;
        const [r, g, b] = colors[colorIndex];

        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.fillRect(i * dotSize, j * dotSize, dotSize - 1, dotSize - 1);
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [animationSpeed, opacities, colors, dotSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    });

    resizeObserver.observe(container);
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <div ref={containerRef} className={cn("h-full relative w-full", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      )}
    </div>
  );
};
