import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: '決定「可成」，要你才成！',
  description: '決定「可成」，要你才成！',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
