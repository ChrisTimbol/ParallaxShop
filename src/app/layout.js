import './globals.css'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  next: '700'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cinzel.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
