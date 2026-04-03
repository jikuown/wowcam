"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "Introducing cAMOEBA — the most compact webcam ever built. Sony mirrorless sensor, magnetic precision mount, and AI framing that keeps you center frame. Every call. Every time.";

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const words = TEXT.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current || wordsRef.current.length === 0) return;

      // Set initial state — all words dim
      gsap.set(wordsRef.current, { opacity: 0.08 });

      // Scrub each word in sequence as scroll progresses
      gsap.to(wordsRef.current, {
        opacity: 1,
        stagger: {
          each: 0.04,
          from: "start",
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "280vh", background: "#F7F7F5" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
        <p
          className="t-caption mb-10"
          style={{ color: "#888884" }}
        >
          cAMOEBA · Story
        </p>

        {/* Words */}
        <p
          className="flex flex-wrap justify-center max-w-5xl"
          style={{ gap: "0 0.28em" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}
              style={{
                color: "#0A0A0A",
                fontSize: "clamp(1.9rem, 4.5vw, 4.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                willChange: "opacity",
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Scroll hint */}
        <p
          className="absolute bottom-10 text-[13px]"
          style={{ color: "#888884" }}
        >
          Scroll perlahan ↓
        </p>
      </div>
    </div>
  );
}
