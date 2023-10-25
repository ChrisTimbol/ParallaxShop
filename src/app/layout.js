import './globals.css'
import { Cinzel } from 'next/font/google'
import { Header } from '@/components/Header'
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
    {/*   <Header /> */}
        {children}
      </body>
    </html>
  )
}
