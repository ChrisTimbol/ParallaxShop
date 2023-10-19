
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-8 flex flex-col items-center">
                <div className="flex mb-4 space-x-4">
                    {/* Social Media Links */}
                    <a href="#" className="text-xl hover:text-yellow-500 transition duration-300">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-yellow-500 transition duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-yellow-500 transition duration-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                {/* Contact Information */}
                <div className="mb-4">
                    <p>1234 Somewhere St, Your City, MX 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@mexicanrestaurant.com</p>
                </div>
                {/* Newsletter Subscription Form */}
                <div className="flex flex-col items-center">
                    <p className="mb-2 text-lg">Subscribe for free tacos</p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-800 text-white py-2 px-4 rounded-l"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded-r">
                            Subscribe
                        </button>
                    </div>
                </div>
                {/* Copyright */}
                <p className="mt-8">&copy; 2023 Mexican Restaurant. All rights reserved.</p>
            </div>
        </footer>
    )
}