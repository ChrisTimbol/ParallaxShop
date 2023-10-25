import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="Hero    bg-[url('/rest.jpg')] bg-cover bg-center">


            <div className="h-screen max-w-screen-xl  bg-center  flex justify-center">
                <div className=" h-full flex items-center  ">

                    <div className="  w-full p-4  bg-stone-900/95  text-white">
                        <h1 className="text-4xl font-bold">California <br /> Burrito Shop</h1>
                        <p className=" font-serif text-lg mb-4 ">
                            Non sunt nostrud ipsum fugiat. Nulla ex ex officia
                            deserunt commodo <br /> pariatur ad cillum adipisicing proident
                            aliqua esse aliquip non.
                        </p>
                        <button className="bg-white  border-2 border-transparent hover:border-white hover:bg-stone-900 hover:text-white text-black text-xl font-semibold p-2 rounded-full mb-4 transition duration-300 ease-in-out">
                            Explore Menu
                        </button>
                    </div>

                </div>

            </div>

        </section>
    )
}
