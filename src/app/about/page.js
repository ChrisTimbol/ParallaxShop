import React from "react";
import Image from 'next/link'

export default function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Burrito Shop!</h1>
        <div className="max-w-2xl mb-8 relative">
            <Image href="Burrito2.jpg" fill priority />
        </div>
        <p className="text-gray-800 text-lg mb-6">
          At our Mexican California Burrito shop, we are passionate about serving
          mouthwatering burritos that burst with authentic flavors. Our chefs
          use the freshest ingredients to create the perfect blend of tastes in
          every bite.
        </p>
        <p className="text-gray-800 text-lg mb-6">
          Whether you're a fan of traditional Mexican flavors or looking to
          explore the unique taste of California-style burritos, our menu has
          something for everyone. From savory meats and grilled vegetables to
          zesty salsas and creamy guacamole, we craft burritos that satisfy
          your cravings and leave you coming back for more.
        </p>
        <p className="text-gray-800 text-lg mb-8">
          Visit us today and experience the essence of Mexican and Californian
          cuisine wrapped in a warm, fresh tortilla. Your taste buds are in for
          a treat!
        </p>
        <p className="text-gray-600 text-sm">
          Follow us on social media:{" "}
          <span className="text-blue-500">@BurritoShop</span>
        </p>
      </div>
    </div>
  );
}