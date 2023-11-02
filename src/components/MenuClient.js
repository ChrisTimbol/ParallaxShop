'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

/* Fetches and displays all products and categories */
function MenuClient({ nonce }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const productsEndpoint = `http://restarauntwoo.local/wp-json/wc/store/v1/products`
        const categoriesEndpoint = `http://restarauntwoo.local/wp-json/wc/store/v1/products/categories`

        fetch(productsEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        /* Fetches categories stores in category state array */
        fetch(categoriesEndpoint)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const formatPrice = (price, minorUnit) => {
        const adjustedPrice = (parseFloat(price) / Math.pow(10, minorUnit)).toFixed(minorUnit);
        return `$${adjustedPrice}`;
    };

    const filteredProducts = selectedCategory
        ? selectedCategory === 'All'
            ? products
            : products.filter(product => product.categories.some(cat => cat.name === selectedCategory))
        : products;

    return (
        <section className="MenuContainer p-4 min-h-screen bg-stone-300 flex flex-col items-center">
            <div className="MenuItemsGrid grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 max-w-5xl">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="MenuItem flex  items-center bg-white rounded-lg shadow-md">
                        <div className="relative h-36 w-48 ">
                            {/* Display the first image of the product, assuming images array is not empty */}
                            {product.images.length > 0 && (
                                <Image
                                    src={product.images[0].src}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes={50}
                                    className="p-4"
                                />
                            )}
                        </div>

                        <div className="px-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <div className="text-sm " dangerouslySetInnerHTML={{ __html: product.description }} />
                            <div className="flex w-full items-center justify-between">
                                <div className="text-green-500  font-sans font-semibold text-sm">
                                    {formatPrice(product.prices.price, product.prices.currency_minor_unit)}
                                </div>
                        
{/*                                 <AddToCartButton productId={product.id} nonce={nonce} />
 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MenuClient;
