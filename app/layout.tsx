import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Head from 'next/head';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agro pelo Brasil',
  description: 'CNA | SENAR | ICNA',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className="scroll-smooth">
      <Head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body className={`text-black h-full bg-gradient-to-b from-light_gray via-10% via-white  to-light_gray`}>
        <Navbar />
        <main className={'max-w-container mx-auto h-full '}>
          {children}
          </main>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" defer></script>

      </body>
    </html>
  );
};

export default RootLayout;
