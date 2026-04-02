"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col pt-14 overflow-hidden bg-white">

      {/* ── Top copy ── */}
      <motion.div
        className="flex-shrink-0 flex flex-col items-center text-center px-6 pt-16 pb-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="t-caption mb-5" style={{ color: "#888884" }}>
          Introducing · cAMOEBA
        </motion.p>

        {/* Extreme weight contrast headline */}
        <motion.div variants={item} className="max-w-5xl">
          <h1 style={{ fontSize: "clamp(4rem, 11vw, 10rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#0A0A0A" }}>
            The last webcam
          </h1>
          <h1 style={{ fontSize: "clamp(4rem, 11vw, 10rem)", fontWeight: 200, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#C0C0BC" }}>
            you'll ever need.
          </h1>
        </motion.div>

        <motion.p variants={item}
          className="mt-8 text-[17px] max-w-md leading-relaxed"
          style={{ fontWeight: 300, color: "#888884" }}>
          Kamera laptop kamu sudah cukup lama mempermalukan kamu di Zoom.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex items-center gap-3 flex-wrap justify-center">
          <a href="#cta"
            className="px-7 py-3.5 rounded-full text-[15px] font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: "#FF1493", boxShadow: "0 4px 20px rgba(255,20,147,0.35)" }}>
            Order Now
          </a>
          <a href="#shapes"
            className="px-7 py-3.5 rounded-full text-[15px] font-medium border transition-colors hover:border-black"
            style={{ borderColor: "#E2E2DE", color: "#1A1A18" }}>
            See the Difference →
          </a>
        </motion.div>
      </motion.div>

      {/* ── Exploded product image — full bleed ── */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="relative flex-1 min-h-[50vw] max-h-[700px] mx-6 md:mx-12 lg:mx-20 mb-0"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden"
          style={{ background: "#F7F7F5", minHeight: 320 }}>
          <Image
            src="/exploded-view.png"
            alt="cAMOEBA exploded view showing all internal components"
            fill
            className="object-contain object-center p-6 md:p-12"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Floating labels */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-6 left-6 flex flex-col gap-2"
          >
            {["Sony Mirrorless Sensor", "AI Processing Unit", "Magnetic Base"].map((label, i) => (
              <div key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/80 backdrop-blur-sm"
                style={{ color: "#0A0A0A", border: "1px solid #E2E2DE" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? "#FF1493" : "#2C5F47" }} />
                {label}
              </div>
            ))}
          </motion.div>

          {/* 4K badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-[13px] font-black text-white"
            style={{ background: "#FF1493" }}
          >
            4K
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex-shrink-0 flex items-center justify-center gap-8 md:gap-16 py-7 px-6 border-t"
        style={{ borderColor: "#E2E2DE" }}
      >
        {[["4K", "Resolution"], ["f/2.0", "Aperture"], ["72g", "Weight"], ["0s", "Setup Time"]].map(([val, label]) => (
          <div key={label} className="text-center">
            <p className="text-[22px] md:text-[28px] font-black tracking-tight" style={{ color: "#0A0A0A" }}>{val}</p>
            <p className="text-[11px] font-medium mt-0.5" style={{ color: "#888884" }}>{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
