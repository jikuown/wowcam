"use client";

import { motion } from "framer-motion";
import { SPECS } from "@/lib/constants";

export default function Specs() {
  return (
    <section id="specs" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="t-caption mb-4">Specifications</p>
          <h2 className="t-headline text-black">Semua yang perlu kamu tahu.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden"
        >
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className="grid grid-cols-2 px-7 py-4 border-b border-[#F5F5F7] last:border-0 hover:bg-[#FAFAFA] transition-colors"
            >
              <span className="text-[14px] font-medium" style={{ color: "#86868B" }}>
                {spec.label}
              </span>
              <span className="text-[14px] font-medium text-black">{spec.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
