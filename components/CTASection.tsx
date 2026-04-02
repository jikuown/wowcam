"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="py-0 overflow-hidden" style={{ background: "#0A0A0A" }} data-dark>
      <div className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          className="flex flex-col gap-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="t-caption" style={{ color: "rgba(255,255,255,0.35)" }}>cAMOEBA · Available Now</p>

          <h2 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: "white" }}>
            Upgrade your setup today.
          </h2>
          <h2 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 200, letterSpacing: "-0.04em", lineHeight: 0.95, color: "rgba(255,255,255,0.2)" }}>
            Look like you mean it.
          </h2>

          <p style={{ fontWeight: 300, color: "rgba(255,255,255,0.45)", fontSize: 17, lineHeight: 1.7 }}>
            Mulai dari Rp 1.299.000. Free shipping ke seluruh Indonesia.<br />30-day money-back guarantee.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold text-white"
              style={{ background: "#FF1493", boxShadow: "0 4px 24px rgba(255,20,147,0.4)" }}
            >
              Order Now →
            </motion.a>
            <a href="#shapes"
              className="inline-flex items-center px-8 py-4 rounded-full text-[15px] font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors">
              Explore Models
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-4 pt-2">
            {["🚚 Free Shipping", "↩️ 30-Day Returns", "🛡️ 2yr Warranty"].map(b => (
              <span key={b} className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>{b}</span>
            ))}
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{ background: "#161616", aspectRatio: "3/4" }}
        >
          <Image
            src="/hero-lifestyle.png"
            alt="cAMOEBA lifestyle shot — multiple shapes and colors"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
