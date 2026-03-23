"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = ({
  children,
  className,
  containerClassName,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "12px",
  background = "var(--color-brand-blue)",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  [key: string]: any;
}) => {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--background": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {/* spark container */}
      <div className="absolute inset-0 block [container-type:size]">
        {/* spark */}
        <div className="absolute inset-0 h-[100cqh] animate-shimmer [aspect-ratio:1] [background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)] [inset:-100%] [mask:linear-gradient(white,transparent_50%)]" />
      </div>

      {/* backdrop */}
      <div className="absolute [background:var(--background)] [border-radius:var(--border-radius)] [inset:var(--shimmer-size)]" />

      <div className="z-10 flex items-center gap-2">{children}</div>
    </button>
  );
};
