'use client' // required for using hooks
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext('') // create the context to share

export default function Context({ children }) {
    const [cartCount, setCartCount] = useState()

    useEffect(() => {

        const fetchCartCount = async () => {
            try {
                const response = await fetch('http://restarauntwoo.local/wp-json/wc/store/v1/cart');
                const cartData = await response.json();
                const fetchedCount = cartData?.items_count
                setCartCount(fetchedCount);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        const initializeCartCount = () => {
            const storedCartCount = localStorage.getItem('cartCount');
            if (storedCartCount) {
                setCartCount(parseInt(storedCartCount, 10));
            } else {
                fetchCartCount();
            }
        };

        // Initialize cart count on component mount
        initializeCartCount();
        
  /*       localStorage.clear(); */

    }, []);

    return ( /* Pass to children */
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    )
}

/* use localstorage.setItem('nonce')? */

// fetch nonce here