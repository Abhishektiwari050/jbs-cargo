"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

export function MovingBorder({
  children,
  duration = 2000,
  borderRadius = "1rem",
  containerClassName,
  borderClassName,
  className,
  onClick,
}: MovingBorderProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative p-[2px] overflow-hidden bg-transparent",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <motion.div
          className={cn(
            "absolute inset-[-100%] rounded-full",
            borderClassName || "bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--color-brand-orange)_360deg)]"
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative bg-[var(--color-brand-blue)] backdrop-blur-xl flex items-center justify-center w-full h-full antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </button>
  );
}
