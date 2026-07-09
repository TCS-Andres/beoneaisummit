import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI for Small Business Summit 2026 | Branches BE ONE & Barry University AI Center",
  description:
    "Building a Human-Centered AI Economy: advancing human flourishing in the age of artificial intelligence. September 14, 2026 at Barry University, Miami Shores, Florida.",
  openGraph: {
    title: "AI for Small Business Summit 2026",
    description:
      "Building a Human-Centered AI Economy. Hosted by Branches BE ONE and the Barry University AI Center. September 14, 2026, Miami Shores, Florida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
