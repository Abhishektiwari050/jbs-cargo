"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export const CountUpStats = ({ 
  value, 
  duration = 2 
}: { 
  value: string; 
  duration?: number 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Extract number and suffix (e.g., "6,000+" -> number: 6000, suffix: "+")
  const numericValue = parseInt(value.replace(/,/g, ""));
  const suffix = value.replace(/[0-9,]/g, "");

  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const end = numericValue;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCount(Math.floor(end * progress));

        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {isNumeric ? count.toLocaleString() + suffix : value}
    </span>
  );
};
