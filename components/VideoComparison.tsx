"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoComparison() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (isDragging) update(e.clientX); };
    const onUp = () => setIsDragging(false);
    const onTouch = (e: TouchEvent) => { if (isDragging) update(e.touches[0].clientX); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, update]);

  return (
    <section id="comparison" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="t-caption mb-4">Before · After</p>
          <h2 className="t-headline text-black">Satu drag, ribuan kata.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-3xl overflow-hidden"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              border: "1px solid #D2D2D7",
            }}
            onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); update(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); update(e.touches[0].clientX); }}
          >
            {/* BEFORE */}
            {/* TODO: replace placeholder */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#2A2A2A" }}>
              <div className="text-center">
                <p className="text-[28px] font-bold text-white opacity-20">480p</p>
                <p className="text-[12px] mt-1 font-medium tracking-widest uppercase" style={{ color: "#666" }}>Built-in Webcam</p>
              </div>
            </div>

            {/* AFTER */}
            {/* TODO: replace placeholder */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, background: "#F5F5F7" }}
            >
              <div className="text-center">
                <p className="text-[28px] font-bold text-black" style={{ color: "#FF00BD" }}>4K</p>
                <p className="text-[12px] mt-1 font-medium tracking-widest uppercase text-black">cAMOEBA</p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-[1px] pointer-events-none"
              style={{ left: `${position}%`, background: "#FF00BD", transform: "translateX(-50%)" }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center pointer-events-none border-2 border-white shadow-md"
              style={{ left: `${position}%`, background: "#FF00BD" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 4L2 7L5 10M9 4L12 7L9 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-black/60 text-white/60 backdrop-blur-sm">
              Built-in Webcam
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-sm" style={{ color: "#FF00BD" }}>
              cAMOEBA
            </div>
          </div>

          <p className="text-center mt-4 text-[13px]" style={{ color: "#86868B" }}>
            ← Drag to compare →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
