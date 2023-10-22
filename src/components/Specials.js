export const Specials = () => {
    return (
        <section className="Specials flex justify-center bg-gradient-to-r from-yellow-400 to-red-500 text-white py-16">
            <div className="max-w-screen-lg px-8">
                <h2 className="text-5xl font-bold mb-8 text-center">🔥 Hot Special Deals 🔥</h2>

                <div className="flex justify-center items-center w-full space-x-8">
                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg text-gray-800">
                        <div className="h-72 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                            <img src="/taco-image.png" alt="Taco Image" className="h-60 object-cover rounded-lg" />
                        </div>
                        <h3 className="text-4xl font-bold mb-2">
                            $2 Taco Tuesday
                        </h3>
                        <p className="text-lg mb-4">
                            Enjoy delicious tacos for just $2 on Tuesdays! Velit occaecat dolor laborum id tempor.
                        </p>
                    </div>

                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg text-gray-800">
                        <div className="h-72 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                            <img src="/happy-hour-image.png" alt="Happy Hour Image" className="h-60 object-cover rounded-lg" />
                        </div>
                        <h3 className="text-4xl font-bold mb-2">
                            Happy Hour Deals
                        </h3>
                        <p className="text-lg mb-4">
                            Join us for our happy hour deals every weekday from 4 PM to 7 PM. Reprehenderit officia et reprehen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
