"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlaceholdersAndVanishInputProps {
  placeholders: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: PlaceholdersAndVanishInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [placeholders.length]);

  const vanishAndSubmit = useCallback(() => {
    if (!value) return;
    setAnimating(true);

    // Animate the vanish
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = canvas.parentElement?.clientWidth || 300;
        canvas.height = canvas.parentElement?.clientHeight || 50;
        
        ctx.font = "16px Inter, sans-serif";
        ctx.fillStyle = "var(--color-brand-blue)";
        ctx.fillText(value, 16, 30);

        // Pixel explosion effect
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels: { x: number; y: number; r: number; g: number; b: number; a: number }[] = [];

        for (let y = 0; y < imageData.height; y += 2) {
          for (let x = 0; x < imageData.width; x += 2) {
            const i = (y * imageData.width + x) * 4;
            if (imageData.data[i + 3] > 0) {
              pixels.push({
                x, y,
                r: imageData.data[i],
                g: imageData.data[i + 1],
                b: imageData.data[i + 2],
                a: imageData.data[i + 3],
              });
            }
          }
        }

        let frame = 0;
        const maxFrames = 30;
        const animate = () => {
          if (frame >= maxFrames) {
            setAnimating(false);
            setValue("");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
          }
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const progress = frame / maxFrames;
          
          pixels.forEach(pixel => {
            const dx = (Math.random() - 0.5) * progress * 100;
            const dy = -progress * Math.random() * 50;
            const alpha = 1 - progress;
            ctx.fillStyle = `rgba(${pixel.r},${pixel.g},${pixel.b},${alpha})`;
            ctx.fillRect(pixel.x + dx, pixel.y + dy, 2, 2);
          });
          
          frame++;
          requestAnimationFrame(animate);
        };
        animate();
      }
    }

    setTimeout(() => {
      setAnimating(false);
      setValue("");
    }, 600);
  }, [value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit?.(e);
  };

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto bg-white border border-black/10 h-14 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
        value && "bg-gray-50"
      )}
      onSubmit={handleSubmit}
    >
      <canvas ref={canvasRef} className={cn("absolute inset-0 pointer-events-none", !animating && "opacity-0")} />
      
      <input
        ref={inputRef}
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange?.(e);
          }
        }}
        value={value}
        type="text"
        placeholder=" "
        aria-label="Search input"
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-6 pr-20",
          animating && "text-transparent"
        )}
      />

      {/* Animated placeholder */}
      {!value && (
        <div className="absolute inset-0 flex items-center rounded-full pointer-events-none pl-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={`placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="text-sm sm:text-base font-normal text-neutral-500 truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          </AnimatePresence>
        </div>
      )}

      <button
        disabled={!value}
        type="submit"
        aria-label="Submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full disabled:bg-gray-200 bg-black transition duration-200 flex items-center justify-center"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </button>
    </form>
  );
}
