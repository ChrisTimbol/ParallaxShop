import './globals.css'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel(
  {
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '800'],
  },
)



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cinzel.className}>
      <body className="">
        {children}
      </body>
    </html>
  )
}
