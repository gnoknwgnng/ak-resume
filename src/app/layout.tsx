import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Akash Somavarapu - AI & Automation Professional',
  description: 'Creative professional skilled in React, Next.js, and modern technologies. AI agent developer, n8n workflow automation engineer, and product builder.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}
