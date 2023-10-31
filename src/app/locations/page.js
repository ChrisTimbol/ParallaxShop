import React from 'react';
import GoogleMap from '@/components/GoogleMap'; // Import the GoogleMap component
import Image from 'next/image'

const Locations = () => {
  const locations = [
    {
      name: 'Main Branch',
      address: '123 Main St, Cityville, Country',
      phone: '+1 (123) 456-7890',
      hours: 'Mon - Fri: 9:00 AM - 9:00 PM, Sat - Sun: 10:00 AM - 8:00 PM'
    },
    {
      name: 'Downtown Branch',
      address: '456 Elm St, Downtown City, Country',
      phone: '+1 (234) 567-8901',
      hours: 'Mon - Sat: 10:00 AM - 10:00 PM, Sun: 11:00 AM - 9:00 PM'
    },

  ];

  return (
    <div className="bg-stone-100 text-white flex justify-center">
  
      <div className="min-h-screen  py-36 max-w-screen-xl ">
      <div className="w-full h-96 lg:h-[40vh] bg-[url('/storefront.jpg')] bg-fixed bg-center bg-cover mb-8 relative overflow-hidden">
        </div>
        <h1 className="text-4xl font-bold text-stone-400 mb-8">Our Locations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
              <GoogleMap address={location.address} /> {/* Use GoogleMap component */}
              <p className="text-stone-200 mb-4 text-lg font-sans">Phone: {location.phone}</p>
              <p className="text-stone-100 font-sans">{location.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Locations;
