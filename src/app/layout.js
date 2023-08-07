"use client"

import Navbar from '@/components/private/navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/private/footer/Footer';
import Sidebar from '@/components/private/sidebar/Sidebar';
import AuthProvider from '@/components/AuthProvider';
import { HiOutlinePlus } from 'react-icons/hi';
import Link from 'next/navigation';
import NewButton from '@/components/private/NewButton';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'steeps',
  description: 'Talk to anyone, about anything.',
  icons: {
    icon: '/favicon.ico'
  }
}
 
//TODO: add edit logic to form with existing data from upload
//TODO: 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex text-neutral-800 bg-neutral-50 min-h-screen justify-center overflow-hidden">
            <NewButton />
            <div className="py-12 flex flex-col justify-between w-7/12 max-lg:w-10/12">
              <Sidebar />
              <Navbar />
              <main className="h-full py-16">{children}</main>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
