"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  { src: "/hero-lifestyle.png",  label: "All Shapes",         span: "md:col-span-2 md:row-span-2" },
  { src: "/macro-magnetic.png",  label: "Magnetic Mount",     span: "" },
  { src: "/color-duo.png",       label: "Color Variants",     span: "" },
  { src: "/clip-lifestyle.png",  label: "Clip on Monitor",    span: "md:col-span-2" },
  { src: "/shape-trio.png",      label: "Three Forms",        span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <p className="t-caption mb-4">Gallery</p>
          <h2 className="t-headline" style={{ color: "#0A0A0A" }}>
            Every angle.<br />
            <span style={{ fontWeight: 200, color: "#C0C0BC" }}>Every moment.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-[12px] font-semibold text-white">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
