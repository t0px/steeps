import Navbar from '@/components/private/navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/private/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'steeps',
  description: 'Ask anyone, anything.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex text-neutral-800 bg-neutral-100 min-h-screen justify-center">
          <div className='py-12 flex flex-col justify-between w-8/12'>
            <Navbar />
            <main className='h-full py-16'>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
