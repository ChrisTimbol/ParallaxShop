'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerHeight = 72; // Adjust this value based on your container height


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Website</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-black text-white">

        <div className="hero-parallax-container flex justify-center items-center h-96 bg-red-500 text-4xl font-bold relative">
        <div className="TextContainer p-4 text-4xl absolute z-10 rounded-lg bg-cyan-500">
            Hello This is your Web site text Container
          </div>
        </div>

        <div className="h-screen bg-white">

        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
