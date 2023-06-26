import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Азбука атропического дерматита',
  description: 'наметки лендоса',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
      <div>
          {children}
      </div>
      </body>
    </html>
  )
}
