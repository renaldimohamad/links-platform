import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { profile } from "@/config/profile";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});
const ogImageUrl = new URL(profile.seo.ogImage, profile.identity.canonicalUrl).toString();
export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  applicationName: "LINKS",
  metadataBase: new URL(profile.identity.canonicalUrl),
  alternates: { canonical: profile.identity.canonicalUrl },
  openGraph: {
    type: "website",
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.identity.canonicalUrl,
    siteName: profile.identity.name,
    locale: "id_ID",
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: profile.seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: [ogImageUrl],
  },
  robots: { index: true, follow: true },
  icons: profile.identity.avatar
    ? { icon: profile.identity.avatar, apple: profile.identity.avatar }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: profile.appearance.colors.background,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={instrumentSans.variable}>
      <body>{children}</body>
    </html>
  );
}
