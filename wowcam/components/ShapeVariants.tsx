"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SHAPES } from "@/lib/constants";

export default function ShapeVariants() {
  return (
    <section id="shapes" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="t-caption mb-4">Three Forms. One Vision.</p>
            <h2 className="t-headline" style={{ color: "#0A0A0A" }}>
              Pick your shape.
            </h2>
          </div>
          <p className="text-[15px] max-w-xs" style={{ fontWeight: 300, color: "#888884" }}>
            Same Sony sensor. Same 4K quality. Different personality.
          </p>
        </motion.div>

        {/* Image — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl overflow-hidden mb-10"
          style={{ background: "#F0EFEB", aspectRatio: "16/7" }}
        >
          <Image
            src="/shape-trio.png"
            alt="cAMOEBA in three shapes: Square, Triangle, Star"
            fill
            className="object-contain object-center py-6 px-12"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>

        {/* Shape cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SHAPES.map((shape, i) => (
            <motion.div
              key={shape.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-7 overflow-hidden"
              style={{ background: "#F7F7F5" }}
            >
              {/* Tag */}
              <span
                className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full mb-5"
                style={{ background: i === 0 ? "#FFF0F7" : i === 1 ? "#F0F7F3" : "#FFF8F0",
                  color: i === 0 ? "#FF1493" : i === 1 ? "#2C5F47" : "#C47F17" }}
              >
                {shape.tag}
              </span>

              {/* Big shape icon */}
              <div className="text-5xl mb-4">
                {["▪", "▲", "★"][i]}
              </div>

              <h3 className="text-[20px] font-bold mb-2" style={{ color: "#0A0A0A" }}>{shape.name}</h3>
              <p className="text-[14px]" style={{ fontWeight: 300, color: "#888884" }}>{shape.desc}</p>

              {/* Color dots */}
              <div className="flex gap-2 mt-5">
                <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ background: "#2C5F47" }} />
                <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ background: "#FF1493" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
