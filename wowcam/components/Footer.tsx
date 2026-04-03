"use client";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t px-6 pt-16 pb-10" style={{ borderColor: "#1A1A1A" }} data-dark>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b" style={{ borderColor: "#1A1A1A" }}>

          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2.5 w-fit">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full" style={{ background: "#2C5F47" }} />
                <div className="absolute inset-[3px] rounded-full" style={{ background: "#FF1493" }} />
                <div className="absolute inset-[6px] rounded-full bg-black" />
              </div>
              <span className="text-[15px] font-black">
                c<span style={{ color: "#FF1493" }}>A</span>MOEBA
              </span>
            </a>
            <p className="text-[13px] max-w-xs" style={{ fontWeight: 300, color: "#888884" }}>
              The most compact 4K AI webcam ever. Look like you mean it.
            </p>
            <div className="flex gap-4 mt-1">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} className="text-[12px] font-medium transition-colors hover:text-white" style={{ color: "#555" }}>
                  {s.label.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="t-caption mb-1" style={{ color: "#333" }}>Product</p>
            {FOOTER_LINKS.slice(0, 5).map(l => (
              <a key={l.label} href={l.href} className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#888884" }}>{l.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="t-caption mb-1" style={{ color: "#333" }}>Support</p>
            {FOOTER_LINKS.slice(5).map(l => (
              <a key={l.label} href={l.href} className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#888884" }}>{l.label}</a>
            ))}
            <a href="#" className="text-[13px] transition-colors hover:text-white w-fit" style={{ color: "#888884" }}>FAQ</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[12px]" style={{ color: "#333" }}>© {new Date().getFullYear()} cAMOEBA. All rights reserved.</p>
          <p className="text-[12px]" style={{ color: "#2A2A2A" }}>
            Dibuat dengan <span style={{ color: "#FF1493" }}>♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
