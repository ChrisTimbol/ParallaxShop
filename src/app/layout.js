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
/* 
async function GetData() {
  const res = await fetch('http://restarauntwoo.local/wp-json/wc/store/cart');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const nonceHeader = headers.get('Nonce');

  console.log('Nonce:', nonceHeader);
  return nonceHeader;
}
 */
export default function RootLayout({ children }) {

  return (
    <html lang="en" className={cinzel.className}>

      <body className="">

        <Header  />
        {children}
        <Footer />
      </body>
    </html>
  )
}
