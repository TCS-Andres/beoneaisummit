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

const description =
  "Building a Human-Centered AI Economy: advancing human flourishing in the age of artificial intelligence. September 14, 2026 at Barry University, Miami Shores, Florida.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beoneaisummit.vercel.app"),
  title:
    "AI for Small Business Summit 2026 | Branches BE ONE & Barry University AI Center",
  description,
  openGraph: {
    title: "AI for Small Business Summit 2026",
    description,
    url: "https://beoneaisummit.vercel.app",
    siteName: "AI for Small Business Summit 2026",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI for Small Business Summit 2026, Building a Human-Centered AI Economy, September 14, 2026 at Barry University, Miami Shores.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Small Business Summit 2026",
    description,
    images: ["/og-image.jpg"],
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
