export const Specials = () => {
    return (
        <>
            <section className="Specials min-h-screen bg-green-500 items-center text-white">
                <h2 className="text-3xl p-4 text-center ">Special Deals</h2>

                <div className="flex  justify-center items-center w-full">
                    
                    <div className="w-1/2 p-8  rounded-lg ">
                        <div className="h-72 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                            Taco Image
                        </div>
                        <h3 className="text-3xl ">
                            $2 Taco Tuesday
                        </h3>
                        <p className="text-sm ">
                            Enjoy delicious tacos for just $2 on Tuesdays! Velit occaecat dolor laborum id tempor.
                        </p>
                    </div>

                    <div className="w-1/2 p-8  rounded-lg ">
                        <div className="h-72 bg-gray-700 flex justify-center items-center rounded-lg mb-4">
                            Happy Hour Image
                        </div>
                        <h3 className="text-3xl ">
                            Happy Hour Deals
                        </h3>
                        <p className="text-sm ">
                            Join us for our happy hour deals every weekday from 4 PM to 7 PM. Reprehenderit officia et reprehen.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
