# Glitch JSR — Gaming Lounge Website

Official web application for **Glitch JSR** — Sakchi's premier console and sim racing gaming lounge in Jamshedpur, Jharkhand.

## Features

- **Apex Editorial Dark Aesthetic**: Custom 50/40/10 dark palette engineered for high contrast and modern gaming luxury.
  - **50% Obsidian (`#0B0C10`)**: Deep background and page surfaces.
  - **40% Slate Graphite (`#14161D`)**: Elevated containers, interactive cards, and navigation.
  - **10% Electric Poppy Blue (`#2B7FFF`)**: High-contrast CTAs, highlights, active states, and accents.
  - **Supporting**: Soft White (`#EAEAF0`), Muted Grey (`#A3A6B2`), and Neon Magenta (`#E94DB8`).
- **Smooth Cinematic Scrolling**: Powered by [Lenis](https://lenis.darkroom.engineering/) with custom physics and automated offset calculation for sticky navigation.
- **Scroll-Triggered Reveals**: Framer Motion scroll animations (`whileInView`, staggered card reveals, and micro-hover lifts).
- **Smooth FAQ Accordions**: Smooth expand/collapse transitions with `AnimatePresence` and rotating chevrons.
- **Interactive Day & Time Slot Reservation Widget**: Instant WhatsApp direct booking generation with real-time selection parameters.
- **Real Google Reviews Carousel**: Continuous horizontal marquee ticker with pause-on-hover and directional arrow controls.
- **GTA VI Day-One Launch Showcase**: Dedicated launch week reservation showcase with official 4K artwork.
- **Responsive Layout**: Designed for screens from 320px mobile viewports up to 4K desktop displays.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + Lenis Smooth Scroll
- **Icons**: Lucide React
- **Typography**: Instrument Serif & Plus Jakarta Sans

## Venue Details

- **Location**: Ground Floor, B-1, H.No. 15A, near Ambagan ground, SNP Area, Sakchi, Jamshedpur 831001
- **Phone / WhatsApp**: +91 87978 00779
- **Operating Hours**: 11:00 AM – 11:00 PM Daily
- **Google Profile**: [Google Maps](https://maps.app.goo.gl/4wEsaSLGJcqBTSrh6) (4.9 ★, 78 reviews)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The output will be generated inside the `dist/` directory, ready to deploy to any modern hosting platform (Vercel, Netlify, Cloudflare Pages, etc.).

### Linting

```bash
npm run lint
```

## Deployment

### Vercel / Netlify / Cloudflare Pages

1. Build command: `npm run build`
2. Output directory: `dist`
3. Node version: 18+
