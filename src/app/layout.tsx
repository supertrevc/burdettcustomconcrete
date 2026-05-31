import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { localBusinessJsonLd, DEFAULT_OG_IMAGE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Burdett Custom Concrete | Post Falls, ID Concrete",
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Licensed, bonded, and insured concrete contractor in Post Falls, Idaho. Driveways, patios, stamped concrete, and flatwork. Free estimates: 208-640-1883.",
  applicationName: BUSINESS.shortName,
  authors: [{ name: BUSINESS.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS.shortName,
    locale: "en_US",
    url: "/",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 1200 }],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main-content"
          className="sr-only rounded-md bg-amber px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
