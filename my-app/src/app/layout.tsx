import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from "@/app/footer"
import './globals.css'

import Navbar from '@/app/navbar'
const poppins = Poppins({weight: ['100', '200', '400', '600', '800'],  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ROBOT STUDIO | University of Michigan',
  description: 'Robotics Lab at the University of Michigan interested in human-robot interaction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}