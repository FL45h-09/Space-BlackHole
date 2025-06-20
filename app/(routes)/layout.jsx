import Script from "next/script";
import "@/_assets/css/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { FooterSection } from "@/_components/sections/footerSection/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Space – Explore Cosmic 3D Worlds with Next.js, Three.js & GSAP",
  description: "Space Online is a 3D-first web experience built with Next.js, Three.js, and GSAP. Dive into cosmic simulations like black holes, nebulas, and more — fast, interactive, and future-ready.",
};


export default function RootLayout({ children }) {
  const jsonLd ={
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Online Space",
      "url": "https://online-space.vercel.app/",
      "description": "Online Space is a cosmic 3D-first experience built with Next.js, Three.js, and GSAP. Simulate black holes, nebulas, and more – fast, interactive, and future-ready.",
      "publisher": {
        "@type": "Organization",
        "name": "Online Space"
      },
      "image": "https://online-space.vercel.app/os-image.jpg",
      "inLanguage": "en",
  }
  return (
    <html lang="en">
      <head>
        {/* Title & Description */}
        <title>Online Space – Explore 3D Worlds with Next.js, Three.js & GSAP</title>
        <meta name="description" content="Online Space is a cosmic 3D-first experience built with Next.js, Three.js, and GSAP. Simulate black holes, nebulas, and more – fast, interactive, and future-ready." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://online-space.vercel.app/" />

        {/* Robots Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* X-Robots-Tag (redundant fallback via meta, better set via server headers if you can) */}
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />

        {/* Keywords (deprecated for ranking but still useful for niche search engines) */}
        <meta name="keywords" content="Online Space, 3D Web Experience, Next.js, Three.js, GSAP, Cosmic Simulation, Black Hole WebGL, Interactive Universe, WebXR, React Three Fiber" />

        {/* Open Graph */}
        <meta property="og:title" content="Online Space – Explore 3D Worlds" />
        <meta property="og:description" content="Experience cosmic simulations like black holes, built using Next.js, Three.js, and GSAP." />
        <meta property="og:image" content="https://online-space.vercel.app/os-image.jpg" />
        <meta property="og:url" content="https://online-space.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Space – Explore 3D Worlds" />
        <meta name="twitter:description" content="Black holes, stars, nebulas and more – in a real-time WebGL universe." />
        <meta name="twitter:image" content="https://online-space.vercel.app/os-image.jpg" />
      </head>
      <Script id="siteschema-init" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
