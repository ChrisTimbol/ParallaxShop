'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden'); // Add the overflow-hidden class
    } else {
      document.body.classList.remove('overflow-hidden'); // Remove the overflow-hidden class
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full ${fixedHeader ? 'h-16' : ''} placeholder`}></div>

      <header className={`z-10 bg-stone-600 flex justify-between items-center w-full text-white m-0 px-4 ${fixedHeader ? 'fixed top-0' : 'static'}`}>
    
      <div className="logo-container z-50 md:pl-8 ">
          <Image
            src="Logo.svg"
            alt="Burrito Logo"
            className={`transform rotate-90`}
            width={64}
            height={64}
          />
        </div>

        <div className="md:hidden z-50 text-black">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        <nav className={`fixed md:static z-20 inset-0 bg-stone-500 md:bg-transparent text-white text-2xl ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className=" list-none flex flex-col items-center md:space-x-4 pt-20  text-2xl md:text-xl space-y-4 md:pt-0 md:space-y-0 md:flex-row ">
            <li className="">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li className="">
              <Link href="/menu" className="hover:text-black">
                Menu
              </Link>
            </li>
            <li className="">
              <Link href="/locations" className="hover:text-black">
                Locations
              </Link>
            </li>
            <li className="">
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};