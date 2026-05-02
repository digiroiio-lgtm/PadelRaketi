import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { organizationSchema, webSiteSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  metadataBase: new URL("https://padelraketi.com"),
  title: {
    template: "%s | PadelRaketi.com",
    default: "En İyi Padel Raketleri 2026 – Karşılaştırma & İnceleme | PadelRaketi.com",
  },
  description:
    "Türkiye'nin en kapsamlı padel raketi rehberi. 2026 en iyi padel raketleri, fiyat karşılaştırması, uzman incelemeleri ve satın alma rehberi.",
  keywords: [
    "padel raketi",
    "en iyi padel raketi",
    "padel raket fiyatları",
    "padel raketi karşılaştırma",
    "Wilson padel",
    "Adidas Metalbone",
    "Nox padel raketi",
  ],
  authors: [{ name: "PadelRaketi.com Uzman Ekibi" }],
  creator: "PadelRaketi.com",
  publisher: "PadelRaketi.com",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://padelraketi.com",
    siteName: "PadelRaketi.com",
    title: "En İyi Padel Raketleri 2026 – PadelRaketi.com",
    description:
      "Türkiye'nin en kapsamlı padel raketi rehberi. Uzman incelemeleri, fiyat karşılaştırması.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PadelRaketi.com - En İyi Padel Raketleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@padelraketi",
    creator: "@padelraketi",
  },
  alternates: {
    canonical: "https://padelraketi.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50">
        <JsonLd schema={[organizationSchema(), webSiteSchema()]} />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
