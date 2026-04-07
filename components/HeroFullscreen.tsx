"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroFullscreen() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const copyRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // clipPath: full → inset rectangle with rounded corners
    tl.to(imageBoxRef.current, {
      clipPath: "inset(6% 5% 6% 5% round 24px)",
      ease: "none",
    }, 0);

    // Copy fades + slides up as card shrinks
    tl.to(copyRef.current, {
      y: -40,
      opacity: 0,
      ease: "none",
    }, 0);

  }, { scope: wrapperRef });

  return (
    // 150vh = enough scroll room without feeling sluggish
    <div ref={wrapperRef} className="relative" style={{ height: "150vh" }}>

      {/* Sticky — 100dvh accounts for mobile browser chrome */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100dvh", background: "#F0EFEB" }}
      >

        {/* Image — starts full-bleed, clipPath shrinks it into a card */}
        <div
          ref={imageBoxRef}
          className="absolute inset-0"
          style={{
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            willChange: "clip-path",
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

          {/* Bottom gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>

        {/* Bottom copy — tagline + CTA */}
        <div
          ref={copyRef}
          className="absolute bottom-0 inset-x-0 px-5 md:px-10"
          style={{
            paddingBottom: "max(env(safe-area-inset-bottom, 0px) + 32px, 40px)",
            willChange: "transform, opacity",
          }}
        >
          <p
            className="text-white"
            style={{
              fontSize: "clamp(2.2rem, 8vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            The last webcam
          </p>
          <p
            className="mb-6"
            style={{
              fontSize: "clamp(2.2rem, 8vw, 5rem)",
              fontWeight: 200,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            you'll ever need.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-bold text-white active:scale-95 transition-transform"
              style={{
                background: "#FF1493",
                boxShadow: "0 4px 24px rgba(255,20,147,0.5)",
              }}
            >
              Order Now
            </a>
            <a
              href="#shapes"
              className="inline-flex items-center px-6 py-3.5 rounded-full text-[14px] font-medium text-white/70 border border-white/25 active:scale-95 transition-transform"
            >
              See the Difference →
            </a>
          </div>

          <p
            className="mt-5 text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Scroll to explore ↓
          </p>
        </div>

        {/* Top-right badges */}
        <div className="absolute top-20 right-5 flex flex-col items-end gap-2">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-[12px] font-black text-white"
            style={{ background: "#FF1493" }}
          >
            4K
          </div>
          <div
            className="px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.75)",
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
