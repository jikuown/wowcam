"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main bar ─────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled && !menuOpen
            ? "rgba(255,255,255,0.90)"
            : "transparent",
          backdropFilter: scrolled && !menuOpen ? "blur(20px) saturate(160%)" : "none",
          borderBottom: scrolled && !menuOpen ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="flex items-center justify-between px-5 md:px-8 h-14">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 z-10"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <div className="absolute inset-0 rounded-full" style={{ background: "#2C5F47" }} />
              <div className="absolute inset-[2px] rounded-full" style={{ background: "#FF1493" }} />
              <div
                className="absolute inset-[4px] rounded-full"
                style={{ background: menuOpen ? "#0A0A0A" : scrolled ? "#fff" : "#fff" }}
              />
            </div>
            <span
              className="text-[14px] font-black tracking-tight transition-colors duration-300"
              style={{ color: menuOpen ? "#fff" : "#0A0A0A" }}
            >
              c<span style={{ color: "#FF1493" }}>A</span>MOEBA
            </span>
          </a>

          {/* Desktop nav — center */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium transition-colors duration-200 hover:opacity-100"
                style={{ color: "#888884" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#cta"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-[12px] font-bold tracking-wide text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#FF1493" }}
            >
              Order Now
            </a>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center z-10"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-[5px]">
                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: 45, y: 7, background: "#fff" }
                      : { rotate: 0, y: 0, background: "#0A0A0A" }
                  }
                  transition={{ duration: 0.25 }}
                  className="block w-[22px] h-[1.5px] origin-center"
                />
                <motion.span
                  animate={
                    menuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1, background: "#0A0A0A" }
                  }
                  transition={{ duration: 0.2 }}
                  className="block w-[22px] h-[1.5px] origin-center"
                  style={{ background: "#0A0A0A" }}
                />
                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: -45, y: -7, background: "#fff" }
                      : { rotate: 0, y: 0, background: "#0A0A0A" }
                  }
                  transition={{ duration: 0.25 }}
                  className="block w-[22px] h-[1.5px] origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen overlay menu ──────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 28px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "#0A0A0A" }}
          >
            {/* Nav links */}
            <div className="flex flex-col justify-center flex-1 px-8 pt-20 pb-12 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4 border-b flex items-center justify-between group"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[2rem] font-bold tracking-tight transition-colors group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {link.label}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }} className="text-[1.2rem] group-hover:text-white transition-colors">
                    ↗
                  </span>
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-8 w-full py-4 rounded-2xl text-[15px] font-bold text-white text-center"
                style={{ background: "#FF1493" }}
              >
                Order Now →
              </motion.a>
            </div>

            {/* Footer of overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10 flex items-center justify-between"
            >
              <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
                cAMOEBA · 2025
              </span>
              <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                Made in Indonesia
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
