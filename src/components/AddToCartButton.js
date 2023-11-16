import React, { useContext } from 'react';
import { CartContext } from './Context';


function AddToCartButton({ productId, nonce }) {
    const { cartCount, setCartCount } = useContext(CartContext);

    const addToCart = async (productId, quantity) => {
        try {
            const response = await fetch(`http://restarauntwoo.local/wp-json/wc/store/v1/cart/items?id=${productId}&quantity=${quantity}`, {
                method: 'POST',
                headers: {
                    'nonce': nonce
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const cartResponse = await response.json();
            console.log('Item added to cart:', cartResponse);

            // Update the cartCount state first
            setCartCount((prevCartCount) => prevCartCount + 1);

            // Use the updated value of cartCount when setting it in localStorage
            localStorage.setItem('cartCount', cartCount + 1);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <button
            className="bg-stone-500 text-white px-4 py-2 rounded hover:bg-stone-700 cursor-pointer"
            onClick={() => addToCart(productId, 1)}
        >
            Add to Cart
        </button>
    );
}

export default AddToCartButton;
