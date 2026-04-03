"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="t-caption mb-4">Features</p>
          <h2 className="t-headline" style={{ color: "#0A0A0A" }}>
            Built different.<br />
            <span style={{ fontWeight: 200, color: "#C0C0BC" }}>On every level.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Cell 1 — Large hero: Magnetic attachment macro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative"
            style={{ background: "#F7F7F5", minHeight: 340 }}
          >
            <Image
              src="/macro-magnetic.png"
              alt="cAMOEBA magnetic attachment — extreme precision"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="t-caption mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Magnetic Mount</p>
              <h3 className="text-[22px] font-bold text-white">Sticks. Perfectly.</h3>
              <p className="text-[14px] mt-1" style={{ fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>
                Zero wobble. Magnetic precision on any surface.
              </p>
            </div>
          </motion.div>

          {/* Cell 2 — Sony sensor stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-3xl p-7 flex flex-col justify-between"
            style={{ background: "#0A0A0A", minHeight: 200 }}
            data-dark
          >
            <p className="t-caption" style={{ color: "rgba(255,255,255,0.4)" }}>Sony Sensor</p>
            <div>
              <p style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-0.04em", color: "#FF1493", lineHeight: 1 }}>4K</p>
              <p style={{ fontSize: 20, fontWeight: 300, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>f/2.0 · HDR10</p>
            </div>
          </motion.div>

          {/* Cell 3 — Clip lifestyle image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-3xl overflow-hidden relative"
            style={{ background: "#F7F7F5", minHeight: 300 }}
          >
            <Image
              src="/clip-lifestyle.png"
              alt="cAMOEBA clip mount on external monitor"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="t-caption mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>Clip Mount</p>
              <h3 className="text-[18px] font-bold text-white">Works on anything.</h3>
            </div>
          </motion.div>

          {/* Cell 4 — AI framing stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="rounded-3xl p-7 flex flex-col gap-4"
            style={{ background: "#F0F7F3" }}
          >
            <p className="t-caption" style={{ color: "#2C5F47" }}>AI Framing</p>
            <h3 className="text-[20px] font-bold" style={{ color: "#0A0A0A" }}>Always centered.</h3>
            <p className="text-[14px]" style={{ fontWeight: 300, color: "#888884" }}>
              Tracks your face automatically. Zero manual adjustment, ever.
            </p>
            <div className="mt-auto flex gap-2">
              {["Auto Track", "Blur BG", "Low Light"].map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "#2C5F47", color: "white" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cell 5 — Plug & play */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-7 flex flex-col justify-between"
            style={{ background: "#FFF0F7" }}
          >
            <p className="t-caption" style={{ color: "#FF1493" }}>Plug & Play</p>
            <div>
              <p style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em", color: "#0A0A0A", lineHeight: 1 }}>0s</p>
              <p style={{ fontWeight: 300, color: "#888884", marginTop: 8, fontSize: 15 }}>
                Setup time. USB-C. No drivers. Just plug and it works.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
