import Navbar from '@/components/Navbar'
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto App',
  description: 'Crypto App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} bg-white dark:bg-[#0D0D12] dark:text-white 
        overflow-x-hidden text-[#0D0D12] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
