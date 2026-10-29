import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/siteContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteContent.name} — ${siteContent.title}`,
  description: siteContent.intro,
  metadataBase: new URL("https://dlorddev.pages.dev"),
  openGraph: {
    title: `${siteContent.name} — ${siteContent.title}`,
    description: siteContent.intro,
    url: "https://dlorddev.pages.dev",
    siteName: siteContent.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} — ${siteContent.title}`,
    description: siteContent.intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
