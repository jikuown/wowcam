"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ColorVariant = "emerald" | "pink";

const COLORS = {
  emerald: { label: "Emerald Green", hex: "#2C5F47", bg: "#F0F7F3" },
  pink:    { label: "Hot Pink",      hex: "#FF1493", bg: "#FFF0F7" },
};

export default function ColorToggle() {
  const [active, setActive] = useState<ColorVariant>("emerald");

  return (
    <section className="py-28 px-6" style={{ background: "#F7F7F5" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="t-caption mb-4">Color Variants</p>
          <h2 className="t-headline" style={{ color: "#0A0A0A" }}>
            Your camera,<br />your color.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Image area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: COLORS[active].bg, transition: "background 0.5s ease", aspectRatio: "4/3" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/color-duo.png"
                  alt={`cAMOEBA in ${COLORS[active].label}`}
                  fill
                  className="object-contain object-center p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="t-title mb-2"
                  style={{ color: COLORS[active].hex }}
                >
                  {COLORS[active].label}
                </motion.h3>
              </AnimatePresence>
              <p style={{ fontWeight: 300, color: "#888884", fontSize: 16, lineHeight: 1.7 }}>
                Dua warna. Satu visi. Pilih yang paling kamu.
                Emerald untuk yang bold-understated. Pink untuk yang wanna be seen.
              </p>
            </div>

            {/* Toggle buttons */}
            <div className="flex gap-3">
              {(Object.keys(COLORS) as ColorVariant[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all"
                  style={{
                    borderColor: active === key ? COLORS[key].hex : "#E2E2DE",
                    background: active === key ? COLORS[key].bg : "white",
                  }}
                  data-cursor
                >
                  <div className="w-5 h-5 rounded-full shadow-inner"
                    style={{ background: COLORS[key].hex }} />
                  <span className="text-[13px] font-semibold" style={{ color: "#0A0A0A" }}>
                    {COLORS[key].label}
                  </span>
                  {active === key && (
                    <motion.div layoutId="color-check" className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: COLORS[key].hex }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: "white" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: "#2C5F47" }} />
              <span className="text-[13px] font-medium" style={{ color: "#0A0A0A" }}>In stock · Ships in 2–3 days</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
