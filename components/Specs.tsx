"use client";

import { motion } from "framer-motion";
import { SPECS } from "@/lib/constants";

export default function Specs() {
  return (
    <section id="specs" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div className="mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="t-caption mb-4">Specifications</p>
          <h2 className="t-headline text-black">Everything. Specified.</h2>
        </motion.div>

        <motion.div className="rounded-3xl overflow-hidden"
          style={{ border: "1px solid #E0E0E0" }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          {SPECS.map((s, i) => (
            <div key={s.label}
              className="grid grid-cols-2 px-7 py-4 border-b last:border-0 hover:bg-[#FAFAFA] transition-colors group"
              style={{ borderColor: "#F0F0F0" }}>
              <span className="text-[14px] font-medium" style={{ color: "#86868B" }}>{s.label}</span>
              <span className="text-[14px] font-semibold text-black"
                style={{ color: ["Magnetic Force","Colors","Shapes"].includes(s.label)
                  ? "var(--green)" : "inherit" }}>
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
