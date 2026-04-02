"use client";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#222] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#222]">

          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 w-fit">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#FF00BD" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-[15px] font-bold text-white">WoWcam</span>
            </a>
            <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: "#86868B" }}>
              Kamera 4K AI-powered. Look like you mean it.
            </p>
            <div className="flex gap-4 mt-1">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} className="text-[12px] font-medium transition-colors hover:text-white" style={{ color: "#86868B" }}>
                  {s.label.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <p className="t-caption mb-1" style={{ color: "#555" }}>Product</p>
            {FOOTER_LINKS.slice(0, 5).map((l) => (
              <a key={l.label} href={l.href} className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#86868B" }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <p className="t-caption mb-1" style={{ color: "#555" }}>Support</p>
            {FOOTER_LINKS.slice(5).map((l) => (
              <a key={l.label} href={l.href} className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#86868B" }}>
                {l.label}
              </a>
            ))}
            <a href="#" className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#86868B" }}>FAQ</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[12px]" style={{ color: "#555" }}>
            © {new Date().getFullYear()} WoWcam. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "#444" }}>
            Dibuat dengan <span style={{ color: "#FF00BD" }}>♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
