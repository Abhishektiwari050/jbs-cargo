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
    <motion.button
      onClick={onClick}
      className={cn(
        "relative p-[2px] overflow-hidden bg-transparent rounded-[var(--border-radius)]",
        containerClassName
      )}
      animate={{
        "--border-radius": borderRadius,
      } as any}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute inset-0 rounded-[var(--border-radius)]"
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
          "relative bg-[var(--color-brand-blue)] backdrop-blur-xl flex items-center justify-center w-full h-full antialiased rounded-[calc(var(--border-radius)-2px)]",
          className
        )}
      >
        {children}
      </div>
    </motion.button>
  );
}

export const MovingBorderWrapper = ({
  children,
  duration = 2000,
  borderRadius = "1.75rem",
  containerClassName,
  borderClassName,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "bg-transparent relative text-xl  p-[1px] overflow-hidden rounded-[var(--border-radius)]",
        containerClassName
      )}
      animate={{
        "--border-radius": borderRadius,
      } as any}
    >
      <div
        className="absolute inset-0 rounded-[calc(var(--border-radius)*0.96)]"
      >
        <MovingBorder duration={duration} borderRadius={borderRadius} borderClassName={borderClassName}>
          {children}
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased rounded-[calc(var(--border-radius)*0.96)]",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
