

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body
        className={`${inter.className} bg-white text-black h-full selection:bg-gray-50`}>
        <Navbar />
        <main className='max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-full'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
