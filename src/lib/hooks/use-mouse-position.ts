import { useState, useEffect, useRef } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      if (requestRef.current) return;

      requestRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        requestRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return mousePosition;
};
