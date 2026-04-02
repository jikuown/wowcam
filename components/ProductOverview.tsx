"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

const ICONS = ["⬡", "◈", "⊕", "◎"];

export default function ProductOverview() {
  return (
    <section id="overview" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="t-caption mb-4">Why WoWcam</p>
          <h2 className="t-headline text-black max-w-lg">
            Satu produk,<br />semua yang kamu butuhkan.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D2D2D7]">
          {COPY.overview.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "#F5F5F7" }}
              className="bg-white p-8 flex flex-col gap-4 cursor-default transition-colors"
            >
              <span className="text-2xl" style={{ color: "#FF00BD" }}>{ICONS[i]}</span>
              <h3 className="text-[17px] font-bold text-black">{item.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#86868B" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
