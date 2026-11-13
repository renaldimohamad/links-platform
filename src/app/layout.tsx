import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/config/profile";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const title = `${profile.identity.name} — Personal Links`;
const description = `Connect with ${profile.identity.name}. Explore social media, projects, and professional contact links.`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(profile.identity.canonicalUrl),
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: "/", images: profile.identity.avatar ? [{ url: profile.identity.avatar, alt: `${profile.identity.name} profile portrait` }] : undefined },
};

export const viewport: Viewport = { themeColor: profile.appearance.backgroundColor, width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}><body>{children}</body></html>;
}
