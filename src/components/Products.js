


export const Products = () => {
    const filterProductsByCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };
    const filteredProducts = selectedCategory
        ? products.filter(product => product.categories.some(cat => cat.id === selectedCategory))
        : products;
    return (
        <>
            <section className="MenuContainer p-4 min-h-screen bg-gray-100 flex flex-col items-center">
                <div className="text-4xl font-bold mb-8 text-black">Our Menu</div>
                <div className="MenuCategories flex w-full justify-around max-w-3xl mb-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`MenuItemCategory  cursor-pointer ${selectedCategory === category.id ? 'text-blue-500' : ''}`}
                            onClick={() => filterProductsByCategory(category.id)}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
                <div className="MenuItemsGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="MenuItem p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <div dangerouslySetInnerHTML={{ __html: product.description }} />
                            <span className="text-green-500 mt-2">${product.price}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
