"use client";

import { motion } from "framer-motion";
import { USE_CASES } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportOnce, fadeUp } from "@/lib/motionVariants";

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>Use Cases</p>
          <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text)", letterSpacing: "-0.03em" }}>
            Siapa pun kamu,<br />WoWcam untuk kamu.
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.persona}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6 rounded-2xl p-8 group"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full w-fit" style={{ background: "var(--bg-subtle)", color: "var(--text-muted)" }}>
                {uc.badge}
              </span>
              <div className="text-4xl">{["🧑‍💻", "🎨", "🏢"][i]}</div>
              <div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: "var(--text)" }}>{uc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{uc.body}</p>
              </div>
              <div className="h-[1px] w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--accent)" }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
