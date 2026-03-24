"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingState {
  text: string;
}

interface MultiStepLoaderProps {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const LoaderCore = ({
  loadingStates,
  currentState,
}: {
  loadingStates: LoadingState[];
  currentState: number;
}) => {
  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col items-start">
      {loadingStates.map((state, index) => {
        const isActive = index === currentState;
        const isComplete = index < currentState;

        return (
          <motion.div
            key={index}
            className={cn("text-left flex gap-4 items-center mb-4")}
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: isActive || isComplete ? 1 : 0.4,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300",
                isComplete
                  ? "bg-[var(--color-brand-orange)] border-[var(--color-brand-orange)]"
                  : isActive
                  ? "border-[var(--color-brand-orange)] bg-transparent"
                  : "border-gray-300 bg-transparent"
              )}
            >
              {isComplete ? (
                <CheckIcon className="text-white w-4 h-4" />
              ) : (
                <span
                  className={cn(
                    "text-sm font-bold",
                    isActive ? "text-[var(--color-brand-orange)]" : "text-gray-400"
                  )}
                >
                  {index + 1}
                </span>
              )}
            </div>
            <span
              className={cn(
                "text-base font-bold transition-colors duration-200",
                isComplete
                  ? "text-[var(--color-brand-orange)]"
                  : isActive
                  ? "text-[var(--color-brand-blue)]"
                  : "text-gray-400"
              )}
            >
              {state.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: MultiStepLoaderProps) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === loadingStates.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [loading, loadingStates.length, duration, loop]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-black text-[var(--color-brand-blue)] uppercase tracking-tight font-display">
                JBS Cargo
              </h3>
              <p className="text-sm text-gray-400 font-medium">Initializing Infrastructure...</p>
            </div>

            <LoaderCore loadingStates={loadingStates} currentState={currentState} />

            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--color-brand-orange)] rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentState + 1) / loadingStates.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
