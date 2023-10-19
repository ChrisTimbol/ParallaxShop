import Image from 'next/image'

export const Story = () => {
    return (
        <>
            <section className="About  flex items-center justify-center w-full ">

                <div className="grid grid-cols-3   ">

                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="font-sans text-sm">decoration text</p>
                        <h2>Our Story</h2>
                        <p className="text-lg p-4">Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.</p>
                        <p className="text-lg p-4">Experience the richness of Mexican</p>
                    </div>

                    <div className="h-96 relative  rounded-sm overflow-hidden">
                        <Image src="/Corona.jpg" alt="Hero Image" className="rounded-sm object-cover" fill />
                    </div>

                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="font-sans text-sm">decoration text</p>
                        <h2>Our Story</h2>
                        <p className="text-lg p-4">Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.</p>
                        <p className="text-lg p-4">Experience the richness of Mexican</p>
                    </div>



                    <div className="h-96 relative  rounded-sm overflow-hidden">
                        <Image src="/BurritoBurger.jpg" alt="Hero Image" className="rounded-sm object-cover" fill />
                    </div>
                    <div className="flex  flex-col text-center  justify-center items-center">
                        <p className="font-sans text-sm">decoration text</p>
                        <h2>Our Story</h2>
                        <p className="text-lg p-4">Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.</p>
                        <p className="text-lg p-4">Experience the richness of Mexican</p>
                    </div>
                    <div className="h-96 relative  rounded-sm overflow-hidden">
                        <Image src="/Burrito2.jpg" alt="Hero Image" className="rounded-sm object-cover" fill />
                    </div>


                </div>

            </section>
        </>
    );
};