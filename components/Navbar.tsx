"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid #D2D2D7" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "#FF00BD" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-black">WoWcam</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium transition-colors hover:text-black"
                style={{ color: "#86868B" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: "#000" }}
            >
              Buy Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-black origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1.5px] bg-black"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-black origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-14 inset-x-0 z-40 md:hidden bg-white border-b border-[#D2D2D7]"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[15px] font-medium text-black border-b border-[#F5F5F7] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="mt-3 py-3 rounded-full text-[15px] font-semibold text-white text-center bg-black"
              >
                Buy Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
