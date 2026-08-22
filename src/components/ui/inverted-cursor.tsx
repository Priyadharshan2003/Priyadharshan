"use client";

import React, { useState, useEffect, useRef } from "react";

interface CursorProps {
  size?: number;
}

export const Cursor: React.FC<CursorProps> = ({ size = 60 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -size, y: -size });
  const currentPos = useRef({ x: -size, y: -size });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      if (cursorRef.current) {
        const targetX = targetPos.current.x - size / 2;
        const targetY = targetPos.current.y - size / 2;

        const deltaX = (targetX - currentPos.current.x) * 0.2;
        const deltaY = (targetY - currentPos.current.y) * 0.2;

        currentPos.current.x += deltaX;
        currentPos.current.y += deltaY;

        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "auto";
      document.documentElement.style.cursor = "auto";
    };
  }, [size]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none rounded-full bg-white mix-blend-difference z-[9999] transition-opacity duration-300 will-change-transform"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
};

export default Cursor;
