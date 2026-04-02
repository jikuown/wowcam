"use client";

import { useRef, useState, useEffect } from "react";

const TEXT = "Introducing cAMOEBA — the most compact webcam ever built. Sony mirrorless sensor, magnetic precision mount, and AI framing that keeps you center frame. Every call. Every time.";

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const words = TEXT.split(" ");

  useEffect(() => {
    const fn = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const frac = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(frac);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[280vh]" style={{ background: "#F7F7F5" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">

        <p className="t-caption mb-10" style={{ color: "#888884" }}>cAMOEBA · Story</p>

        <p className="flex flex-wrap justify-center max-w-5xl" style={{ gap: "0 0.28em" }}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            let opacity = 0.1;
            if (progress > start) {
              opacity = Math.min(1, 0.1 + ((progress - start) / (end - start)) * 0.9);
            }
            return (
              <span key={i} style={{
                opacity,
                color: "#0A0A0A",
                fontSize: "clamp(1.9rem, 4.5vw, 4.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                transition: "opacity 50ms linear",
              }}>
                {word}
              </span>
            );
          })}
        </p>

        <p className="absolute bottom-10 text-[13px] transition-opacity duration-500"
          style={{ color: "#888884", opacity: progress < 0.04 ? 1 : 0 }}>
          Scroll perlahan ↓
        </p>
      </div>
    </div>
  );
}
