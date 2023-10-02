import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Head from 'next/head';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Headless CMS',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
      </Head>
      <body className={`bg-white text-black h-full selection:bg-gray-50`}>
        <Navbar />
        <main className={'max-w-container mx-auto lg:px-8 h-full'}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
