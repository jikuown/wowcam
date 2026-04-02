"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

const ICONS = [
  <svg key="mag" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  <svg key="4k"  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M8 15V9l-3 4h4M15 9v6M18 12h-3M18 9v6"/></svg>,
  <svg key="shp" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><polygon points="12 3 19.5 3 15.75 9"/><path d="M12 21l3-6 3 6H12z"/></svg>,
  <svg key="ai"  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
];

export default function ProductOverview() {
  return (
    <section id="overview" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="t-caption mb-4">Overview</p>
          <h2 className="t-headline text-black max-w-lg">Built different.<br />From the inside out.</h2>
        </motion.div>

        {/* Grid-line cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0]">
          {COPY.overview.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ backgroundColor: "#F7F7F5" }}
              className="bg-white p-8 flex flex-col gap-5 transition-colors cursor-default">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ background: i % 2 === 0 ? "var(--green-bg)" : "var(--pink-bg)",
                         color: i % 2 === 0 ? "var(--green)" : "var(--pink)" }}>
                {ICONS[i]}
              </div>
              <div>
                <h3 className="text-[17px] font-black text-black mb-1.5">{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#86868B" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
