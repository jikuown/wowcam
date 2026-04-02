"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// Asymmetric grid cells — different sizes for visual interest
const GRID_CELLS = [
  { row: "row-span-2", label: "Hero Shot",     aspect: "aspect-[3/4]",  bg: "#F0F0F0", size: "large"  },
  { row: "row-span-1", label: "Side View",     aspect: "aspect-square",  bg: "#E8E8E8", size: "small"  },
  { row: "row-span-1", label: "Detail",        aspect: "aspect-square",  bg: "#EBEBEB", size: "small"  },
  { row: "row-span-1", label: "In Use",        aspect: "aspect-[4/3]",   bg: "#E5E5E5", size: "medium" },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex flex-col">

      {/* ── Top copy — centered, minimal ── */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="t-caption mb-5">
          WoWcam · Introducing
        </motion.p>

        <motion.h1
          variants={item}
          className="t-display text-black max-w-4xl"
        >
          Look like you<br />
          <em className="not-italic" style={{ color: "#FF00BD" }}>mean it.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-[17px] max-w-md leading-relaxed"
          style={{ color: "#86868B" }}
        >
          Kamera laptop kamu sudah cukup lama mempermalukan kamu di Zoom.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          <a
            href="#cta"
            className="px-6 py-3 rounded-full text-[15px] font-semibold text-white bg-black hover:opacity-75 transition-opacity"
          >
            Buy Now
          </a>
          <a
            href="#comparison"
            className="px-6 py-3 rounded-full text-[15px] font-semibold text-black border border-[#D2D2D7] hover:border-black transition-colors"
          >
            See the Difference
          </a>
        </motion.div>
      </motion.div>

      {/* ── Asymmetric product image grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="w-full max-w-6xl mx-auto px-6 pb-0"
      >
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[55vw] max-h-[560px]">

          {/* Cell 1 — Large, spans 2 rows, col 1 */}
          {/* TODO: replace placeholder — hero product shot */}
          <div
            className="col-span-1 row-span-2 rounded-3xl overflow-hidden flex items-center justify-center relative"
            style={{ background: "#F0F0F0" }}
          >
            <CameraIcon size={48} />
            <span className="absolute bottom-4 left-4 text-[11px] font-semibold text-[#86868B]">
              Front View
            </span>
          </div>

          {/* Cell 2 — Medium top-right */}
          {/* TODO: replace placeholder — side profile */}
          <div
            className="col-span-2 row-span-1 rounded-3xl overflow-hidden flex items-center justify-center relative"
            style={{ background: "#E8E8E8" }}
          >
            <div className="flex items-center gap-4">
              <CameraIcon size={32} />
              <div>
                <p className="text-[11px] font-bold tracking-wider text-[#86868B] uppercase">4K · AI Enhanced</p>
                <p className="text-lg font-bold text-black mt-0.5">WoWcam</p>
              </div>
            </div>
            {/* Pink dot accent */}
            <div
              className="absolute top-4 right-4 w-3 h-3 rounded-full"
              style={{ background: "#FF00BD" }}
            />
          </div>

          {/* Cell 3 — Small bottom middle */}
          {/* TODO: replace placeholder — detail/texture shot */}
          <div
            className="col-span-1 row-span-1 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-2 relative"
            style={{ background: "#EBEBEB" }}
          >
            <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider">f/2.0</span>
            <p className="text-2xl font-bold text-black">Sony</p>
            <span className="text-[11px] text-[#86868B]">Sensor</span>
          </div>

          {/* Cell 4 — Small bottom right */}
          {/* TODO: replace placeholder — lifestyle / in-use shot */}
          <div
            className="col-span-1 row-span-1 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-2"
            style={{ background: "#E5E5E5" }}
          >
            <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider">Plug & Play</span>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "#FF00BD" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

function CameraIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ color: "#C0C0C0" }}>
      <rect x="4" y="10" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="22" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="15" y="7" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
