import './globals.css'
import { Cinzel } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const cinzel = Cinzel(
  {
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '800'],
  },
)

export default async function RootLayout({ children }) {
  /* Fetch nonce for cart */
  const res = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/cart');
  const nonce = res.headers.get('X-WC-Store-API-Nonce');
  const cartData = await res.json()
  const cartCount = cartData.item_count || 'None'

  return (
    <html lang="en" className={cinzel.className}>
      <body className="" >
        <Header nonce={nonce} cartCount={cartCount}/>

        {children}
        <Footer />
      </body>
    </html>
  )
}
