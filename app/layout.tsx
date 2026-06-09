import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AHMAD RICO MARDIANSYAH - Fullstack Developer Portfolio",
  description: "Building robust, scalable backends and engaging, dynamic frontends. I engineer digital experiences that hit hard and run fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth overflow-x-hidden antialiased`}
    >
      <body className="min-h-screen flex flex-col font-body-md bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
