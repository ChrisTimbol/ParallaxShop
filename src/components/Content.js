import { Hero } from "./Hero";
export const Content = () => {
    return (
        <main className="min-h-screen">

            <Hero />
            
            <section className="About h-[50vh] bg-green-500 flex flex-col justify-center items-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">About Us</h2>
                    <p className="text-lg">Experience the richness of Mexican culinary traditions at our restaurant. We source the finest ingredients to create mouthwatering dishes.</p>
                </div>
            </section>

            <section className="Menu h-screen border-4 border-cyan-500 flex flex-col justify-center items-center">
                <div className="text-3xl font-bold mb-4">Our Menu</div>
                <div className="MenuItems">
                    {/* Example Menu Items */}
                    <div className="MenuItem">Tacos</div>
                    <div className="MenuItem">Burritos</div>
                    <div className="MenuItem">Enchiladas</div>
                    <div className="MenuItem">Quesadillas</div>
                    {/* Add more menu items as needed */}
                </div>
            </section>

            <section className="Testimonials h-[50vh] bg-green-500 flex flex-col justify-center items-center text-white">
                <div className="Testimonial">
                    <div className="Icon">😊</div>
                    <div className="Feature">Amazing food and friendly staff! I keep coming back for more.</div>
                </div>
                <div className="Testimonial">
                    <div className="Icon">🌮</div>
                    <div className="Feature">The tacos here are simply the best. Authentic and flavorful!</div>
                </div>
                {/* Add more testimonials as needed */}
            </section>

            <section className="Contact h-screen bg-black flex flex-col justify-center items-center text-white">
                <div className="text-3xl font-bold mb-4">Contact Us</div>
                <div className="ContactInfo">
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Visit us at: 123 Main St, Cityville, Country</p>
                </div>
            </section>
        </main>
    );
};