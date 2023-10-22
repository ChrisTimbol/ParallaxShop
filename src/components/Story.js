import Image from 'next/image';

export const Story = () => {
    return (
        <section className="About flex flex-col bg-gray-100  items-center justify-center w-full p-8">
            <h1 className="text-4xl font-bold mb-8">Our Story</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
                {/* First Story */}
                <div className="story-card flex flex-col text-center justify-center items-center">
                    <p className="font-sans text-sm mb-2">Decoration Text</p>
                    <h2 className="text-xl font-bold mb-4">Experience Mexican Tradition</h2>
                    <p className="text-lg mb-6">
                        Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.
                    </p>
                </div>
                <div className="h-80 relative border-4 overflow-hidden rounded-lg">
                    <Image src="/Corona.jpg" alt="Hero Image" className="rounded-lg object-cover" layout="fill" />
                </div>

                {/* Second Story */}
                <div className="story-card flex flex-col text-center justify-center items-center">
                    <p className="font-sans text-sm mb-2">Decoration Text</p>
                    <h2 className="text-xl font-bold mb-4">Savor Every Bite</h2>
                    <p className="text-lg mb-6">
                        Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.
                    </p>
                </div>
                <div className="h-80 relative rounded-lg overflow-hidden">
                    <Image src="/BurritoBurger.jpg" alt="Hero Image" className="rounded-lg object-cover" layout="fill" />
                </div>

                {/* Third Story */}
                <div className="story-card flex flex-col text-center justify-center items-center">
                    <p className="font-sans text-sm mb-2">Decoration Text</p>
                    <h2 className="text-xl font-bold mb-4">Authentic Flavors</h2>
                    <p className="text-lg mb-6">
                        Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.
                    </p>
                </div>
                <div className="h-80 relative rounded-lg overflow-hidden">
                    <Image src="/Burrito2.jpg" alt="Hero Image" className="rounded-lg object-cover" layout="fill" />
                </div>
            </div>
        </section>
    );
};
