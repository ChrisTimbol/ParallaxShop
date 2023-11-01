import MenuClient from '@/components/MenuClient'

export default async function Menu() {
    const res = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/cart', { cache: 'no-store' } );
    const nonce = res.headers.get('X-WC-Store-API-Nonce')

    const date = res.headers.get('Date')
    const cartToken = res.headers.get('Cart-Token');
    return (
        <>
            <div className="py-32"></div>
                <p>{nonce}</p>
                <p>{date}</p>
                <MenuClient nonce={nonce} cartToken={cartToken} />

        </>
    )
}