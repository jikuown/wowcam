"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce, fadeUp } from "@/lib/motionVariants";

const GALLERY_ITEMS = [
  { label: "Work From Home Setup", icon: "🏠" },
  { label: "Studio Quality Look", icon: "🎬" },
  { label: "Low Light Magic", icon: "🌙" },
  { label: "Conference Call Ready", icon: "💼" },
  { label: "Travel Companion", icon: "✈️" },
  { label: "Creator Mode", icon: "🎙️" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Gallery</p>
            <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text)", letterSpacing: "-0.03em" }}>
              Setiap momen,<br />frame sempurna.
            </h2>
          </div>
          <p className="text-[13px] max-w-xs" style={{ color: "var(--text-muted)" }}>Real-world shots dari para pengguna WoWcam.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "16/9", background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
            >
              {/* TODO: replace placeholder — insert real gallery photography */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}>
                <span className="text-[11px] font-semibold text-white">{item.label}</span>
              </div>
              {/* Pink dot top-right on hover */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--accent)" }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
