"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { viewportOnce } from "@/lib/motionVariants";

export default function FeatureSections() {
  return (
    <section id="features" className="overflow-hidden" style={{ background: "var(--bg)" }}>
      {FEATURES.map((feature, i) => {
        const isEven = i % 2 === 0;
        const textAnim = {
          hidden: { opacity: 0, x: isEven ? -30 : 30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        };
        const imgAnim = {
          hidden: { opacity: 0, x: isEven ? 30 : -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
        };

        return (
          <div
            key={feature.tag}
            className="border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <div className={`max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>

              {/* Text */}
              <motion.div className="flex flex-col gap-6" variants={textAnim} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full w-fit" style={{ background: "rgba(255,0,189,0.07)", color: "var(--accent)", border: "1px solid rgba(255,0,189,0.15)" }}>
                  {feature.tag}
                </span>
                <h2 className="font-black tracking-tight leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text)", letterSpacing: "-0.03em" }}>
                  {feature.title}
                </h2>
                <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
                  {feature.body}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-mono font-bold w-fit" style={{ background: "var(--bg-subtle)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                  {feature.detail}
                </div>
              </motion.div>

              {/* Image placeholder */}
              <motion.div variants={imgAnim} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                {/* TODO: replace placeholder — use real feature photography */}
                <div
                  className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-20">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="10" width="30" height="22" rx="3"/><circle cx="20" cy="21" r="6"/><circle cx="20" cy="21" r="2.5"/><rect x="16" y="7" width="8" height="4" rx="2"/></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Feature {i + 1}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
