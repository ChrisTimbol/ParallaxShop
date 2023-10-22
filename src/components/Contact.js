import Image from 'next/image'

export const Contact = () => {
    return (
        <section className="Contact min-h-screen   flex flex-col items-center py-8 space-y-8">
            <div className="text-5xl font-bold ">Contact Us</div>

            <div className="h-[50vh] w-2/5 relative rounded-lg object-cover overflow-hidden">
                <Image src="/Restaraunt.jpg" fill alt="Restaurant Image" />
            </div>
            <div className="ContactInfo text-center text-3xl space-y-2">
                <p>Email: <a href="mailto:info@example.com" className="text-amber-400 hover:text-amber-300">info@example.com</a></p>
                <p>Phone: <a href="tel:+11234567890" className="text-amber-400 hover:text-amber-300">+1 (123) 456-7890</a></p>
                <p>Visit us at: 123 Main St, Cityville, Country</p>
            </div>
        </section>
    );
};