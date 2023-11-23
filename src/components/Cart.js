
export const Cart = () => {

    const cartProducts = [
        { id: 1, name: 'Product A', price: 19.99 },
        { id: 2, name: 'Product B', price: 29.99 },
        { id: 2, name: 'Product B', price: 29.99 },

        { id: 2, name: 'Product B', price: 29.99 },

        { id: 2, name: 'Product B', price: 29.99 },

    ];

    return (
        <>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Cart</h2>
                <ul>
                    {cartProducts.map(product => (
                        <li key={product.id} className="">
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};