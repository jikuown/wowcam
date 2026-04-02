import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WoWcam — Look like you mean it.",
  description: "Kamera 4K plug-and-play dengan AI enhancement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
