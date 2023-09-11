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
      <body className={inter.className}>
        <nav>
          <Link className="bg-white" href="/">Treebell Online</Link>
          <Link href="/flashcards">Flashcards</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
