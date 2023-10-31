'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Menu() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const productsEndpoint = `http://restarauntwoo.local/wp-json/wc/store/v1/products`
        const categoriesEndpoint = `http://restarauntwoo.local/wp-json/wc/store/v1/products/categories`
        /* Fetches all products and stores in products state array */
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

    /* Formats sales price for decimal placement because endpoint displays price as whole number */
    const formatPrice = (price, minorUnit) => {
        const adjustedPrice = (parseFloat(price) / Math.pow(10, minorUnit)).toFixed(minorUnit);
        return `$${adjustedPrice}`;
    };

    const addToCart = (productId, quantity) => {
        const WooCommerceAPI = 'http://restarauntwoo.local/wp-json/wc/store/cart/add-item';
       

        const data = {
            id: productId,
            quantity: quantity,
        };
        /* 
                fetch(`${WooCommerceAPI}/cart/add-item?id=${data.id}&quantity=${data.quantity}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Nonce': nonce,
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(cartResponse => {
                        console.log('Item added to cart:', cartResponse);
                        // Handle the cart response as needed
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
                    */
    };

    /* If selectedCategory =  */
    const filteredProducts = selectedCategory
        ? (selectedCategory === 'All')
            ? products
            : products.filter(product => product.categories.some(cat => cat.name === selectedCategory))
        : products;

    return (
        <>
            <section className="MenuContainer p-4 min-h-screen bg-stone-300 flex flex-col items-center">
                <div className="text-4xl font-bold mb-8 text-black">Our Menu</div>
                <div className="MenuCategories flex w-full justify-around max-w-3xl mb-6 pt-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`MenuItemCategory cursor-pointer ${selectedCategory === category.name ? 'text-blue-500' : ''}`}
                            onClick={() => setSelectedCategory(category.name)}>
                            {category.name}
                        </div>
                    ))}
                </div>

                <div className="MenuItemsGrid grid grid-cols-1 sm:grid-cols-2  gap-4 lg:gap-8 max-w-5xl">
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
                                    <button
                                        className="bg-stone-500 text-white px-4 py-2 rounded hover:bg-stone-700 cursor-pointer"
                                        onClick={() => addToCart(product.id, 1)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}