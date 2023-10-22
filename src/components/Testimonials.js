import Link from 'next/link'
export const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Adams',
            icon: '😊',
            text: 'Amazing food and friendly staff! I keep coming back for more.'
        },
        {
            name: 'Rachel Star',
            icon: '🌟',
            text: 'Excellent service and delicious meals. A must-visit for Mexican cuisine enthusiasts!'
        },
        {
            name: 'Elena Rodriguez',
            icon: '👍',
            text: 'Outstanding experience! The flavors are authentic, and the ambiance is delightful.'
        },
        {
            name: 'Michael Smith',
            icon: '🍽️',
            text: 'The variety of dishes is impressive, and each one is a culinary delight. Highly recommended!'
        },
        {
            name: 'Lisa Johnson',
            icon: '😍',
            text: 'Every bite feels like a journey through Mexican culinary traditions. An absolute gem!'
        },
    ];

    return (
        <section className="Testimonials min-h-min items-center flex flex-col space-y-4 p-8 bg-gradient-to-r from-green-700 to-green-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
            <div className="flex justify-center space-x-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-gray-800 max-w-md">
                        <div className="flex items-center mb-4">
                            <div className="text-2xl mr-2">{testimonial.icon}</div>
                            <div className="text-lg font-semibold">{testimonial.name}</div>
                        </div>
                        <p className="text-base">{testimonial.text}</p>
                    </div>
                ))}
            </div>    
            <Link href="testimonials ">
                <div className="w-max bg-amber-500 hover:bg-amber-600
            font-semibold py-2 px-4 rounded 
             transition duration-300">
                    See More
                </div>
            </Link>
        </section>
    );
};
