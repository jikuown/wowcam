"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const AVATAR_BG = ["#1E3D2F", "#3D1E2F", "#1E2F3D"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6" style={{ background: "#F7F7F5" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="t-caption mb-4">Reviews</p>
          <h2 className="t-headline" style={{ color: "#0A0A0A" }}>
            Para pengguna<br />
            <span style={{ fontWeight: 200, color: "#C0C0BC" }}>sudah buktikan.</span>
          </h2>
        </motion.div>

        {/* Mobile scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hidden pb-4">
          <div className="flex gap-4 w-max">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="w-[290px] shrink-0 rounded-3xl p-7 bg-white flex flex-col gap-5">
                <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <span key={j} style={{ color: "#FF1493" }} className="text-sm">★</span>)}</div>
                <blockquote className="text-[15px] leading-relaxed text-black flex-1" style={{ fontWeight: 400 }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F0F0EC" }}>
                  {/* TODO: replace placeholder */}
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ background: AVATAR_BG[i] }}>{t.name[0]}</div>
                  <div>
                    <p className="text-[13px] font-semibold text-black">{t.name}</p>
                    <p className="text-[12px]" style={{ color: "#888884" }}>{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-8 bg-white flex flex-col gap-5 cursor-default">
              <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <span key={j} style={{ color: "#FF1493" }} className="text-sm">★</span>)}</div>
              <blockquote className="text-[15px] leading-relaxed text-black flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F0F0EC" }}>
                {/* TODO: replace placeholder */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0" style={{ background: AVATAR_BG[i] }}>{t.name[0]}</div>
                <div>
                  <p className="text-[14px] font-semibold text-black">{t.name}</p>
                  <p className="text-[12px]" style={{ color: "#888884" }}>{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
