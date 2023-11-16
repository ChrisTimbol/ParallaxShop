import MenuClient from '@/components/MenuClient'

export default async function Menu() {
    const res = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/cart', { cache: 'no-store' });
    const nonce = res.headers.get('Nonce')
   // const cartToken = res.headers.get('Cart-Token');

/*     
    const products = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/products')
    const categories = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/products/categories')     
*/

    return (
        <>
            <div className="py-32"></div>
            <MenuClient nonce={nonce}  />
        </>
    )
}