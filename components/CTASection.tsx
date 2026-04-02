"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="cta" className="py-36 px-6 bg-black text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">

        <motion.p
          className="t-caption"
          style={{ color: "#86868B" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WoWcam · Limited Edition
        </motion.p>

        <motion.h2
          className="t-display text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          {COPY.cta.headline}
        </motion.h2>

        <motion.p
          className="text-[17px] max-w-md leading-relaxed"
          style={{ color: "#86868B" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mulai dari Rp 1.299.000. Free shipping · 30-day returns · 2 tahun garansi.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full text-[15px] font-semibold text-black transition-opacity hover:opacity-90"
            style={{ background: "#FF00BD" }}
          >
            {COPY.cta.button} →
          </motion.a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full text-[15px] font-medium border border-[#333] text-white hover:border-white transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
