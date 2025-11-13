import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechBusiness - Transform Your Business With Technology',
  description: 'We deliver cutting-edge technology solutions that drive growth, efficiency, and innovation for businesses of all sizes.',
  keywords: 'technology, cloud solutions, cybersecurity, custom development, data management, business automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}