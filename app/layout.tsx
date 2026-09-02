import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Metalysa | Metalysa Aceros',
  description: 'Reciclaje de chatarra ferrosa y barra de acero en Talcahuano.',
  icons: {
    icon: '/img/metalysa-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // layout base
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}