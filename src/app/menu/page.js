'use client';
import { useState, useEffect } from 'react'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Image from 'next/image'

export default function Menu() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const WooCommerceAPI = 'http://restarauntwoo.local';
    const key = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
    const secret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

    const WooCommerce = new WooCommerceRestApi({
        url: WooCommerceAPI,
        consumerKey: key,
        consumerSecret: secret,
        version: 'wc/v3',
        axiosConfig: {/* Removes axios error problem */
            headers: {}
        }
    });

    useEffect(() => {

        // Fetch products and categories from WooCommerce API
        WooCommerce.get('products')
            .then((productResponse) => {
                setProducts(productResponse.data);
            })
            .catch((productError) => {
                console.error('Error fetching products:', productError);
            });

        WooCommerce.get('products/categories')
            .then((categoryResponse) => {
                setCategories(categoryResponse.data);
            })
            .catch((categoryError) => {
                console.error('Error fetching categories:', categoryError);
            });
    }, []);

    const filterProductsByCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.categories.some(cat => cat.id === selectedCategory))
        : products;

    return (
        <>
            <section className="MenuContainer p-4 min-h-screen bg-stone-300 flex flex-col items-center">
                <div className="text-4xl font-bold mb-8 text-black">Our Menu</div>
                <div className="MenuCategories flex w-full justify-around max-w-3xl mb-6 pt-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`MenuItemCategory cursor-pointer ${selectedCategory === category.id ? 'text-blue-500' : ''}`}
                            onClick={() => filterProductsByCategory(category.id)}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
                <div className="MenuItemsGrid grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-5xl">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="MenuItem p-4 flex  items-center bg-white rounded-lg shadow-md">
                            <div className="relative h-24 w-48 ">
                                {/* Display the first image of the product, assuming images array is not empty */}
                                {product.images.length > 0 && (
                                    <Image src={product.images[0].src} alt={product.name} fill className=" object-center"/>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                                <div className="" dangerouslySetInnerHTML={{ __html: product.description }} />
                                <span className="text-green-500 font-semibold text-sm">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}