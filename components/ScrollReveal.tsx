"use client";

import { useRef, useState, useEffect } from "react";

const TEXT =
  "Introducing WoWcam — kamera paling kompak yang pernah ada. Dengan sensor Sony mirrorless, AI framing otomatis, dan plug-and-play tanpa drama. Webcam yang layak kamu bawa ke mana saja.";

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const words = TEXT.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const frac = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setProgress(frac);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[320vh]">

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden">

        {/* Caption */}
        <p className="t-caption mb-10">WoWcam · Story</p>

        {/* Word-reveal text */}
        <p
          className="flex flex-wrap justify-center max-w-5xl"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            gap: "0 0.28em",
          }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            let opacity = 0.12;
            if (progress > start) {
              opacity = Math.min(1, 0.12 + ((progress - start) / (end - start)) * 0.88);
            }
            return (
              <span
                key={i}
                style={{ opacity, color: "#000", transition: "opacity 60ms linear" }}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Scroll hint — fades out once scrolling */}
        <p
          className="absolute bottom-10 text-[13px]"
          style={{ color: "#86868B", opacity: progress < 0.05 ? 1 : 0, transition: "opacity 0.4s" }}
        >
          Scroll perlahan ↓
        </p>
      </div>
    </div>
  );
}
