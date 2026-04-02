import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cAMOEBA — The last webcam you'll ever need.",
  description: "Compact 4K AI webcam. Sony sensor. Magnetic mount. Plug & Play.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
