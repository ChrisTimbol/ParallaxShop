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
        <section className="Testimonials min-h-[50vh] px-4 bg-green-900 text-white ">
            <h2 className="text-2xl "> Reviews</h2>
            <div className=" flex  items-center  space-x-2 ">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="TestimonialContainer bg-white p-4 rounded-lg shadow-lg  text-gray-800 max-w-lg">
                    <div className="flex">

                        <div className="Icon text-xl ">{testimonial.icon}</div>
                        <div className="text-xs">{testimonial.name}</div>
                    </div>

                    <div className="Feature">{testimonial.text}</div>
                </div>
            ))}
            </div>
        </section>
    );
};
