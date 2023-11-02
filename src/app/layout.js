
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
  const nonce = res.headers.get('Nonce');
  const cartData = await res.json()
  const cartCount = cartData.items_count
  /*   const [cartCount, setCartCount] = useState(0); */

  return (
    <html lang="en" className={cinzel.className}>
      <body className="" >
 {/*        <CartProvider> */}
          <Header nonce={nonce} cartCount={cartCount} />

          {children}
   {/*        </CartProvider> */}
          <Footer />
      
      </body>
    </html>
  )
}

// Create cart context
// pass the context to children? then use it to add items to cart
// use it to store cart and fetch cookies initaly etc
