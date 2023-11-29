import type { Metadata } from 'next'

import './globals.css'
import {glory} from "../fonts/font";

export const metadata: Metadata = {
  title: 'FlyArt',
  description: 'Welcome to FlyArt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={glory.className}>{children}</body>
    </html>
  )
}
