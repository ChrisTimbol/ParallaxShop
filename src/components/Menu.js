
export const Menu = () => {
    return (
        <>
<section className="MenuContainer p-4 h-screen bg-gray-100 flex flex-col items-center">
    <div className="text-6xl font-bold mb-8 text-green-700">Our Menu</div>
    <div className="MenuCategories flex w-full justify-around max-w-3xl mb-6">
        <div className="MenuItemCategory">Tacos</div>
        <div className="MenuItemCategory">Burritos</div>
        <div className="MenuItemCategory">Enchiladas</div>
        <div className="MenuItemCategory">Quesadillas</div>
        {/* Add more menu categories as needed */}
    </div>
    <div className="MenuItemsGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Example Menu Items */}
        <div className="MenuItem p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Taco Supreme</h3>
            <p className="text-gray-600">Delicious seasoned beef, lettuce, cheese, and tomatoes wrapped in a warm tortilla.</p>
            <span className="text-green-500 mt-2">$5.99</span>
        </div>
        <div className="MenuItem p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Burrito Grande</h3>
            <p className="text-gray-600">A hearty burrito filled with rice, beans, grilled chicken, cheese, and salsa.</p>
            <span className="text-green-500 mt-2">$7.99</span>
        </div>
        <div className="MenuItem p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Enchilada Platter</h3>
            <p className="text-gray-600">Two enchiladas served with Spanish rice and refried beans.</p>
            <span className="text-green-500 mt-2">$6.49</span>
        </div>
        <div className="MenuItem p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Cheese Quesadilla</h3>
            <p className="text-gray-600">Melted cheese inside a crispy tortilla, served with guacamole and sour cream.</p>
            <span className="text-green-500 mt-2">$4.99</span>
        </div>
        {/* Add more menu items within each category */}
    </div>
</section>
        </>

    )
}