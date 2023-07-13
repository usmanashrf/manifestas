import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from '@/lib/contextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MapMyMate',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <StateContext>
        {children}
        </StateContext>
        </body>
    </html>
  )
}
