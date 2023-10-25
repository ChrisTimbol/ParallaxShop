import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="Contact min-h-screen flex flex-col items-center py-8 space-y-8">
      <div className="text-5xl font-bold">Contact Us</div>

      <div className="h-[50vh] w-2/5 relative rounded-lg object-cover overflow-hidden">
        <Image src="/Burrito.svg" fill alt="Restaurant Image" />
      </div>

      <div className="ContactInfo text-center text-3xl space-y-2">
        <p>Email: <a href="mailto:info@example.com" className="text-amber-400 hover:text-amber-300">info@example.com</a></p>
        <p>Phone: <a href="tel:+11234567890" className="text-amber-400 hover:text-amber-300">+1 (123) 456-7890</a></p>
        <p>Visit us at: 123 Main St, Cityville, Country</p>
      </div>

      <div className="OpeningHours text-center text-3xl space-y-2">
        <p>Opening Hours:</p>
        <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
      </div>

      <div className="SocialMediaLinks text-center space-x-4">
        <a href="https://www.facebook.com/YourRestaurant" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Facebook</a>
        <a href="https://www.instagram.com/YourRestaurant" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Instagram</a>
        <a href="https://twitter.com/YourRestaurant" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">Twitter</a>
      </div>

      <div className="ContactForm w-2/3 mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="border rounded-lg py-2 px-4" required />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="border rounded-lg py-2 px-4" required />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-lg mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" className="border rounded-lg py-2 px-4" required></textarea>
          </div>
          <button type="submit" className="bg-amber-400 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
