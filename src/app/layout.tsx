import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serif = localFont({
  src: [
    { path: "../fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});
const sans = localFont({
  src: [
    { path: "../fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/WorkSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: [{ path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Somavarapu Akash — AI systems builder, early-stage venture candidate",
  description:
    "Recent computer science graduate who builds AI systems end to end and is moving into early-stage venture investing. Built VC Friend (2,000+ VC firms); won a national MSME hackathon and a ₹15 lakh government grant.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
