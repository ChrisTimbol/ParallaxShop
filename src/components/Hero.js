import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="Hero h-screen flex text-white relative">
            <div className="carousel h-full w-full  text-black relative">
                {/* Use next/image component for background image */}
                <div className="h-full flex flex-col  text-white relative">
                    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                        <Image
                            src="/heroback.jpg"
                            alt="Background Image of burritoes"
                            fill
                            priority
                            className="object-cover"
                            quality={100}
                        />
                    </div>
                    <div className="h-full flex flex-col justify-center items-center p-8 space-y-4">
                        <h2 className="text-5xl text-center font-semibold  ">California Burrito Shop</h2>
                        <p className="text-center font-serif text-2xl ">
                            Non sunt nostrud ipsum fugiat. Nulla ex ex officia
                            deserunt commodo pariatur ad cillum adipisicing proident
                            aliqua esse aliquip non.
                        </p>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mb-4">
                            Explore Menu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}