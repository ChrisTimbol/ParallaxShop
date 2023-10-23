import React from 'react';

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
    // Add more locations if necessary
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Locations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
            <p className="text-gray-600 mb-4">{location.address}</p>
            <p className="text-gray-600 mb-4">Phone: {location.phone}</p>
            <p className="text-gray-600">{location.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
