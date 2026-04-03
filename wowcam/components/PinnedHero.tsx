"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // Headline drifts up and fades
      tl.to(headlineRef.current, {
        y: -120,
        opacity: 0,
        ease: "none",
      }, 0);

      // Sub fades out slightly later
      tl.to(subRef.current, {
        y: -60,
        opacity: 0,
        ease: "none",
      }, 0.05);

      // Product image scales up subtly + drifts up
      tl.to(imageRef.current, {
        scale: 1.08,
        y: -40,
        ease: "none",
      }, 0);

      // Badge drifts opposite direction
      tl.to(badgeRef.current, {
        y: 30,
        opacity: 0,
        ease: "none",
      }, 0);
    },
    { scope: containerRef }
  );

  return (
    // Outer — tall enough for scroll room
    <div ref={containerRef} className="relative" style={{ height: "220vh" }}>

      {/* Inner sticky */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col">

        {/* Copy */}
        <div
          ref={headlineRef}
          className="flex-shrink-0 flex flex-col items-center text-center px-6 pt-20 pb-6"
          style={{ willChange: "transform, opacity" }}
        >
          <p className="t-caption mb-5" style={{ color: "#888884" }}>
            Introducing · cAMOEBA
          </p>
          <div className="max-w-5xl">
            <h2
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#0A0A0A",
              }}
            >
              The last webcam
            </h2>
            <h2
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                fontWeight: 200,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#C0C0BC",
              }}
            >
              you'll ever need.
            </h2>
          </div>
        </div>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-center text-[17px] mb-6"
          style={{ fontWeight: 300, color: "#888884", willChange: "transform, opacity" }}
        >
          Kamera laptop kamu sudah cukup lama mempermalukan kamu di Zoom.
        </p>

        {/* Product image */}
        <div
          ref={imageRef}
          className="relative flex-1 mx-6 md:mx-12 lg:mx-20 rounded-3xl overflow-hidden"
          style={{ background: "#F7F7F5", willChange: "transform" }}
        >
          <Image
            src="/exploded-view.png"
            alt="cAMOEBA exploded view"
            fill
            className="object-contain object-center p-6 md:p-10"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Labels */}
          <div className="absolute top-5 left-5 flex flex-col gap-2">
            {["Sony Mirrorless Sensor", "AI Processing Unit", "Magnetic Base"].map(
              (label, i) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/80 backdrop-blur-sm"
                  style={{ color: "#0A0A0A", border: "1px solid #E2E2DE" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: i === 0 ? "#FF1493" : "#2C5F47" }}
                  />
                  {label}
                </div>
              )
            )}
          </div>

          {/* 4K badge */}
          <div
            ref={badgeRef}
            className="absolute top-5 right-5 w-14 h-14 rounded-2xl flex items-center justify-center text-[13px] font-black text-white"
            style={{ background: "#FF1493", willChange: "transform, opacity" }}
          >
            4K
          </div>
        </div>

        {/* Stat strip */}
        <div
          className="flex-shrink-0 flex items-center justify-center gap-8 md:gap-16 py-5 px-6 border-t"
          style={{ borderColor: "#E2E2DE" }}
        >
          {[
            ["4K", "Resolution"],
            ["f/2.0", "Aperture"],
            ["72g", "Weight"],
            ["0s", "Setup Time"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <p
                className="text-[22px] md:text-[28px] font-black tracking-tight"
                style={{ color: "#0A0A0A" }}
              >
                {val}
              </p>
              <p className="text-[11px] font-medium mt-0.5" style={{ color: "#888884" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
