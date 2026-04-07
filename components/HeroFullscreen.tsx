"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroFullscreen() {
  const wrapperRef  = useRef<HTMLDivElement>(null);  // outer scroll room
  const stickyRef   = useRef<HTMLDivElement>(null);  // sticky viewport
  const imageBoxRef = useRef<HTMLDivElement>(null);  // the image card
  const copyRef     = useRef<HTMLDivElement>(null);  // bottom copy
  const overlayRef  = useRef<HTMLDivElement>(null);  // dark overlay on image

  useGSAP(() => {
    if (!wrapperRef.current) return;

    // ── Timeline scrubbed to outer scroll room ──────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
      },
    });

    // Phase 1 (0→0.6): image pulls in — borderRadius 0→28px, slight scale down
    tl.to(imageBoxRef.current, {
      borderRadius: "28px",
      scale: 0.88,
      ease: "none",
    }, 0);

    // Overlay darkens slightly as it pulls in (feels more dramatic)
    tl.to(overlayRef.current, {
      opacity: 0,
      ease: "none",
    }, 0);

    // Copy fades up and out
    tl.to(copyRef.current, {
      y: -48,
      opacity: 0,
      ease: "none",
    }, 0);

  }, { scope: wrapperRef });

  return (
    // Outer — scroll room (200vh = gives enough travel for the animation)
    <div ref={wrapperRef} className="relative" style={{ height: "200vh" }}>

      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "#F7F7F5" }}
      >

        {/* ── Image card — starts full-screen, animates to card ── */}
        <div
          ref={imageBoxRef}
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "0px",
            willChange: "transform, border-radius",
          }}
        >
          <Image
            src="/hero-lifestyle.png"
            alt="cAMOEBA — The last webcam you'll ever need"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />

          {/* Dark gradient overlay — bottom for copy legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.72) 100%)",
            }}
          />

          {/* Animated overlay (fades out as card shrinks) */}
          <div
            ref={overlayRef}
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.18)",
              willChange: "opacity",
            }}
          />
        </div>

        {/* ── Bottom copy — tagline + CTA ──────────────── */}
        <div
          ref={copyRef}
          className="absolute bottom-0 inset-x-0 px-5 md:px-10 pb-10 md:pb-14"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Jargon / tagline */}
          <p
            className="text-white mb-3"
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            The last webcam
          </p>
          <p
            className="mb-7"
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            you'll ever need.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-bold text-white transition-all active:scale-95"
              style={{
                background: "#FF1493",
                boxShadow: "0 4px 24px rgba(255,20,147,0.45)",
              }}
            >
              Order Now
            </a>
            <a
              href="#shapes"
              className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-medium text-white/70 border border-white/20 hover:text-white hover:border-white/50 transition-colors"
            >
              See the Difference →
            </a>
          </div>

          {/* Scroll hint */}
          <p
            className="mt-8 text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Scroll to explore ↓
          </p>
        </div>

        {/* ── Top-right badge ─────────────────────────── */}
        <div
          className="absolute top-20 right-5 md:right-10 flex flex-col items-end gap-2"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-[12px] font-black text-white"
            style={{ background: "#FF1493" }}
          >
            4K
          </div>
          <div
            className="px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Sony Sensor
          </div>
        </div>

      </div>
    </div>
  );
}
