"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Ring follows with lerp lag — feels premium
    const tick = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(tick);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor]")) {
        dot.style.opacity = "0";
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.background = "rgba(255,20,147,0.12)";
        ring.style.borderColor = "#FF1493";
      }
    };

    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("a, button, [data-cursor]")) {
        dot.style.opacity = "1";
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.background = "transparent";
        ring.style.borderColor = "#0A0A0A";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: "50%",
          background: "#0A0A0A",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
      {/* Ring — lagged follow */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 32, height: 32,
          borderRadius: "50%",
          border: "1.5px solid #0A0A0A",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.3s, height 0.3s, background 0.3s, border-color 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}
