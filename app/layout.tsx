import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: {
    default: 'Mokshda Sharma | ML Engineer · GenAI Developer',
    template: '%s | Mokshda Sharma'
  },
  description:
    'Dark, recruiter-optimized AI/ML portfolio for Mokshda Sharma featuring GenAI, RAG, data science, geospatial AI, and production ML projects.',
  keywords: [
    'ML Engineer',
    'GenAI Developer',
    'Data Scientist',
    'RAG',
    'LLM',
    'FastAPI',
    'Streamlit',
    'PyTorch',
    'TensorFlow'
  ],
  authors: [{ name: 'Mokshda Sharma' }],
  openGraph: {
    title: 'Mokshda Sharma | ML Engineer · GenAI Developer',
    description: 'Recruiter-focused AI/ML portfolio with production ML, GenAI, and geospatial intelligence projects.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink font-sans text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(10,16,33,0.95),rgba(5,8,22,1))]" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}