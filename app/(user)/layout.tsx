import Header from '@/components/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geeky Wizard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        <Banner/>
        {children}
      </body>
    </html>
  )
}
