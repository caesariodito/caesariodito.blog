import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "sesar's blog",
  description: 'Created by Caesario Dito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
