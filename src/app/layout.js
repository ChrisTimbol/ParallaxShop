import './globals.css'
import { Cinzel } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import CartProvider from '@/components/Context';

const cinzel = Cinzel(
  {
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '800'],
  },
)

export default async function RootLayout({children}) {

  /* Nonce must be fetched on server component */
  const res = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/cart')
  const fetchedNonce = res.headers.get('Nonce') 
  return (
    <html lang="en" className={cinzel.className}>
      <body className="" >
        <CartProvider>
          <Header nonce={fetchedNonce} />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}