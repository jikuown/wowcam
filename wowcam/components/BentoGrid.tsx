"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

export default function BentoGrid() {
  return (
    <section id="features" className="py-28 px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">

        <motion.div className="mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="t-caption mb-4">Features</p>
          <h2 className="t-headline text-black max-w-lg">
            Every detail.<br />Engineered.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">

          {/* ── Cell 1: Exploded + Magnetic — LARGE ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="md:col-span-7 rounded-3xl overflow-hidden relative bg-white flex flex-col"
            style={{ minHeight: 380, border: "1px solid #E8E8E8" }}
          >
            {/* TODO: save image 1 as /public/exploded.png */}
            <div className="relative flex-1 min-h-[220px]">
              <Image src="/exploded.png" alt="cAMOEBA internals" fill className="object-contain p-8" />
            </div>
            <div className="p-7 pt-0">
              <p className="t-caption mb-2" style={{ color: "var(--green)" }}>{FEATURES[0].tag}</p>
              <h3 className="text-[20px] font-bold text-black leading-snug mb-2">{FEATURES[0].title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#86868B" }}>{FEATURES[0].body}</p>
              <p className="text-[12px] font-bold mt-3" style={{ color: "var(--green)" }}>{FEATURES[0].detail}</p>
            </div>
          </motion.div>

          {/* ── Cell 2: Sony Sensor — TALL RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative bg-black flex flex-col"
            style={{ minHeight: 380 }}
          >
            {/* TODO: save image 3 as /public/macro-mount.png */}
            <div className="relative flex-1 min-h-[200px]">
              <Image src="/macro-mount.png" alt="Sony sensor lens" fill className="object-cover opacity-80" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)" }} />
            </div>
            <div className="p-7 relative z-10">
              <p className="t-caption mb-2" style={{ color: "var(--pink)" }}>{FEATURES[1].tag}</p>
              <h3 className="text-[20px] font-bold text-white leading-snug mb-2">{FEATURES[1].title}</h3>
              <p className="text-[14px] leading-relaxed text-white/60">{FEATURES[1].body}</p>
              <p className="text-[12px] font-bold mt-3" style={{ color: "var(--pink)" }}>{FEATURES[1].detail}</p>
            </div>
          </motion.div>

          {/* ── Cell 3: Clip Extension — WIDE BOTTOM LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative bg-white flex flex-col"
            style={{ minHeight: 320, border: "1px solid #E8E8E8" }}
          >
            {/* TODO: save image 4 as /public/lifestyle-clip.png */}
            <div className="relative flex-1 min-h-[160px]">
              <Image src="/lifestyle-clip.png" alt="cAMOEBA clip extension" fill className="object-cover" />
            </div>
            <div className="p-7 pt-5">
              <p className="t-caption mb-2" style={{ color: "var(--green)" }}>{FEATURES[2].tag}</p>
              <h3 className="text-[18px] font-bold text-black leading-snug mb-1">{FEATURES[2].title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#86868B" }}>{FEATURES[2].body}</p>
            </div>
          </motion.div>

          {/* ── Cell 4: Stats grid — BOTTOM RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }}
            className="md:col-span-7 rounded-3xl bg-white grid grid-cols-2 gap-px overflow-hidden"
            style={{ minHeight: 220, border: "1px solid #E8E8E8" }}
          >
            {[
              { label: "Pull Force", value: "3kg",  sub: "Neodymium", color: "var(--green)" },
              { label: "Sensor",     value: "Sony", sub: "Mirrorless", color: "var(--pink)"  },
              { label: "Weight",     value: "68g",  sub: "Ultralight", color: "var(--green)" },
              { label: "Shapes",     value: "3×",   sub: "Sq · Tri · Star", color: "var(--pink)" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center p-7 bg-white hover:bg-[#F7F7F5] transition-colors gap-1">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: "#86868B" }}>{stat.label}</span>
                <span className="text-[2.4rem] font-black leading-none tracking-tight" style={{ color: stat.color }}>{stat.value}</span>
                <span className="text-[12px] font-medium" style={{ color: "#AAAAAA" }}>{stat.sub}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
