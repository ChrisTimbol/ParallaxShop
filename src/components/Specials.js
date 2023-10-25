import Image from 'next/image'
import Link from 'next/link'
export const Specials = () => {
    return (
        <section className="Specials border-green-500 border-2 ">
            <div className="max-w-screen-lg ">
                <h2 className="text-4xl font-bold mb-8 text-center"> Special Deals </h2>

                <div className="flex justify-center items-center w-full ">
                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg text-gray-800">
                        <div className="h-60 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                            $2 Taco Tuesday
                        </h3>
                        <p className="text-lg mb-4">
                            Enjoy delicious tacos for just $2 on Tuesdays! Velit occaecat dolor laborum id tempor.
                        </p>
                    </div>

                    <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg text-gray-800">
                        <div className="h-60 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                            Happy Hour Deals
                        </h3>
                        <p className="text-lg mb-4">
                            Join us for our happy hour deals every weekday from 4 PM to 7 PM. Reprehenderit officia et reprehen.
                        </p>
                    </div>
                </div>
            </div>


            {/* Order Now Button */}
            <div className="text-center p-4">
                <Link href="/order" className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
                    Order Now!
                </Link>
            </div>
        </section>
    );
};
