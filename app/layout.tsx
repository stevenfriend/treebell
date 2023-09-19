import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Treebell Online',
  description: 'Educational material for online lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen overflow-y-scroll`}>
        <nav className="flex justify-center p-6 space-x-2">
          <Link href="/">Treebell Online</Link><p>|</p> 
          <Link href="/flashcards">Flashcards</Link><p>|</p> 
          <Link href="/activities">Activities</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
