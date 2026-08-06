import type { Metadata } from "next";
import { Fraunces, Karla, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniel Yi - Portfolio",
  description: "Honors Computer Science Student at The Ohio State University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${karla.variable} ${caveat.variable} font-sans antialiased bg-boho-cream text-boho-brown`}>
        {children}
      </body>
    </html>
  );
}
