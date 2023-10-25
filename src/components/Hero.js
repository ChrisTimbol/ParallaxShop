import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="Hero  flex ">

            <div className="carousel h-full w-full relative">

{/* 
                <div className="h-screen bg-cover bg-[url('/heroback.jpg')] ">
 */}
                <div className="h-screen bg-cover bg-[url('/rest.jpg')] bg-center ">
                    <div className="flex  items-center h-full p-4">
                        <div className="  w-full lg:w-1/3 lg:ml-64 p-4  bg-stone-900/95  text-white">
                            <h1 className="text-4xl font-bold">California <br /> Burrito Shop</h1>
                            <p className=" font-serif text-lg mb-4 ">
                                Non sunt nostrud ipsum fugiat. Nulla ex ex officia
                                deserunt commodo pariatur ad cillum adipisicing proident
                                aliqua esse aliquip non.
                            </p>
                            <button className="bg-white  border-2 border-transparent hover:border-white hover:bg-stone-900 hover:text-white text-black text-xl font-semibold p-2 rounded-full mb-4 transition duration-300 ease-in-out">
                                Explore Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
