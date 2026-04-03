// ============================================================
// cAMOEBA — All copy, data constants, and content strings
// ============================================================

export const COPY = {
  brand: "cAMOEBA",
  hero: {
    eyebrow: "Introducing",
    headline: "cAMOEBA",
    sub: "The last webcam you'll ever need.",
    body: "Kamera laptop kamu sudah cukup lama mempermalukan kamu di Zoom.",
    cta_primary: "Order Now",
    cta_secondary: "See How It Works",
  },
  overview: [
    { title: "Compact", desc: "Muat di saku, kuat di meja kerja." },
    { title: "4K Quality", desc: "Tajam di kondisi apapun." },
    { title: "Plug-and-Play", desc: "Colok, langsung jalan. Tanpa drama." },
    { title: "AI Enhanced", desc: "Auto framing dan light correction." },
  ],
  cta: {
    headline: "Upgrade your setup today.",
    button: "Order Now",
  },
};

export const FEATURES = [
  {
    tag: "Crystal Clear",
    title: "Image Quality That Demands Attention",
    body: "Sensor 4K Sony STARVIS dengan lensa glass 6-element. Setiap frame tampil tajam, natural, dan detail—bahkan di ruangan yang tidak ideal.",
    detail: "4K @ 30fps · HDR10 · 85° FOV",
    image: "/macro-magnetic.png",
  },
  {
    tag: "See in the Dark",
    title: "Low Light Performance",
    body: "f/2.0 aperture + AI noise reduction. Cahaya redup bukan alasan lagi.",
    detail: "≥ 0.1 lux · Night Mode AI",
    image: "/clip-lifestyle.png",
  },
  {
    tag: "Just Works",
    title: "Universal Compatibility",
    body: "USB-C plug-and-play. Zoom, Meet, Teams, OBS—semuanya langsung jalan tanpa install apapun.",
    detail: "USB-C · UVC · Zero Driver",
    image: "/hero-lifestyle.png",
  },
];

export const USE_CASES = [
  {
    persona: "Remote Worker",
    title: "Tampil profesional dari rumah.",
    body: "Background blur AI, framing otomatis, pencahayaan yang selalu on-point.",
    badge: "Work From Home",
  },
  {
    persona: "Freelancer",
    title: "Client pertama kali lihat, langsung percaya.",
    body: "First impression di video call itu nyata. cAMOEBA bikin kamu keliatan like you've got it together.",
    badge: "Creator & Freelance",
  },
  {
    persona: "Hybrid Professional",
    title: "Satu kamera, dua dunia.",
    body: "Dari kantor atau dari kafe—cAMOEBA pas di mana pun kamu kerja. Compact, travel-ready, no-fuss setup.",
    badge: "Hybrid Work",
  },
];

export const SPECS = [
  { label: "Resolution", value: "4K UHD (3840×2160)" },
  { label: "Frame Rate", value: "30fps (4K) · 60fps (1080p)" },
  { label: "Field of View", value: "85° (adjustable 65–90°)" },
  { label: "Aperture", value: "f/2.0" },
  { label: "Connectivity", value: "USB-C 3.2 Gen 1" },
  { label: "OS Support", value: "Windows 10+, macOS 11+, Linux, ChromeOS" },
  { label: "AI Features", value: "Auto framing, low-light enhance, background blur" },
  { label: "Microphone", value: "Dual stereo, AI noise cancellation" },
  { label: "Dimensions", value: "68 × 68 × 18 mm" },
  { label: "Weight", value: "72g" },
  { label: "Warranty", value: "2 tahun garansi resmi" },
];

export const NAV_LINKS = [
  { label: "Product", href: "#shapes" },
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#testimonials" },
];

export const FOOTER_LINKS = [
  { label: "Overview", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter / X", href: "#", icon: "twitter" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "TikTok", href: "#", icon: "tiktok" },
];

export const SHAPES = [
  { name: "Square", desc: "The classic. Precise, balanced, universal.", tag: "Most Popular" },
  { name: "Triangle", desc: "Bold geometry. Directional. Unmistakable.", tag: "Bestseller" },
  { name: "Star", desc: "Stand out. Literally.", tag: "Limited" },
];

export const BENTO_FEATURES = [
  {
    tag: "Magnetic Mount",
    title: "Sticks where you need it.",
    body: "Precision magnetic attachment. No screws, no wobble.",
    size: "large",
  },
  {
    tag: "Sony Sensor",
    title: "4K · f/2.0",
    body: "Mirrorless-grade optics.",
    size: "small",
  },
  {
    tag: "Clip Mount",
    title: "Works on anything.",
    body: "Monitor, laptop, bag strap.",
    size: "small",
  },
  {
    tag: "AI Framing",
    title: "Always centered.",
    body: "Auto-tracks your face. Zero effort.",
    size: "medium",
  },
  {
    tag: "Plug & Play",
    title: "Zero setup.",
    body: "USB-C. No drivers. Just works.",
    size: "medium",
  },
];
