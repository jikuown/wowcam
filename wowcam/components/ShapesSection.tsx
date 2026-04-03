"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Color = "green" | "pink";

const SHAPES = [
  { id: "square",   label: "Square",   sub: "The Classic"   },
  { id: "triangle", label: "Triangle", sub: "The Bold"      },
  { id: "star",     label: "Star",     sub: "The Statement" },
];

export default function ShapesSection() {
  const [color, setColor] = useState<Color>("green");

  const greenHex = "#2D6A4F";
  const pinkHex  = "#FF2E93";
  const active   = color === "green" ? greenHex : pinkHex;

  return (
    <section id="shapes" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="t-caption mb-4">Variants</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="t-headline text-black">Pick your shape.<br />Pick your color.</h2>

            {/* Color toggle */}
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold" style={{ color: "#86868B" }}>Color</span>
              <div className="flex items-center gap-2 p-1 rounded-full bg-[#F5F5F7]">
                <button
                  onClick={() => setColor("green")}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold transition-all"
                  style={{
                    background: color === "green" ? greenHex : "transparent",
                    color:      color === "green" ? "#fff"   : "#86868B",
                  }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: greenHex }} />
                  Emerald
                </button>
                <button
                  onClick={() => setColor("pink")}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold transition-all"
                  style={{
                    background: color === "pink" ? pinkHex : "transparent",
                    color:      color === "pink" ? "#fff"  : "#86868B",
                  }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: pinkHex }} />
                  Hot Pink
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes grid — trio side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {SHAPES.map((shape, idx) => (
            <motion.div
              key={shape.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl overflow-hidden flex flex-col"
              style={{ background: color === "green" ? "#EDF5F1" : "#FFF0F6", border: `1px solid ${active}20` }}
            >
              {/* Image area */}
              <div className="relative h-56">
                {/* TODO: save image 2 (shapes trio) as /public/shapes.png */}
                <Image src="/shapes.png" alt={`cAMOEBA ${shape.label}`} fill
                  className="object-contain p-6"
                  style={{ filter: color === "pink" ? "hue-rotate(130deg) saturate(1.5)" : "none",
                           transition: "filter 0.4s ease" }} />
              </div>
              {/* Info */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[17px] font-black text-black">{shape.label}</h3>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: active + "18", color: active }}>
                    {shape.sub}
                  </span>
                </div>
                <p className="text-[13px]" style={{ color: "#86868B" }}>
                  cAMOEBA {shape.label} · {color === "green" ? "Emerald Green" : "Hot Pink"}
                </p>
                <a href="#cta"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors"
                  style={{ color: active }}>
                  Order this shape →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Color duo — full width showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden relative h-72 md:h-96"
          style={{ background: "#F7F7F5" }}
        >
          {/* TODO: save image 5 (color-duo) as /public/color-duo.png */}
          <Image src="/color-duo.png" alt="Emerald and Pink cAMOEBA" fill className="object-contain py-6" />
          <div className="absolute inset-0 flex items-end p-8">
            <div>
              <p className="t-caption mb-2">Two colors. One statement.</p>
              <p className="text-[15px] font-semibold text-black">Emerald Green · Hot Pink</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
