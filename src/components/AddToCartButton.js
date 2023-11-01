import React, { useContext } from 'react';

function AddToCartButton({ productId, nonce }) {

    const addToCart = async (productId, quantity) => {
        try {
            const response = await fetch(`http://restarauntwoo.local/wp-json/wc/store/v1/cart/add-item?id=${productId}&quantity=${quantity}`, {
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

        } catch (error) {
            console.error('DUDE ERROR ADDING TO CART');
        }
    };

    return (
        <button
            className="bg-stone-500 text-white px-4 py-2 rounded hover:bg-stone-700 cursor-pointer"
            onClick={() => addToCart(productId, 1)}
        >
            Add to Cart {nonce}
        </button>
    );
}

export default AddToCartButton;
