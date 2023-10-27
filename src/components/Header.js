'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSize = window.innerWidth >= 768 ? 64 : 32;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden'); // Add the overflow-hidden class
    } else {
      document.body.classList.remove('overflow-hidden'); // Remove the overflow-hidden class
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  useEffect(() => {
    // Event listener to handle window resize
    const handleResize = () => {
      if (menuOpen && window.innerWidth >= 768) {
        // Close the menu and remove overflow-hidden class when window size is larger than or equal to 768px
        setMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]); // Re-run effect when menuOpen state changes

  return (
    <header className="z-10 fixed top-0 w-screen text-lg  bg-stone-500 px-8 flex justify-center ">
      <div className="max-w-screen-lg flex justify-between w-full">
        <div className="logo-container ">
          <Image
            src="/Logo.svg"
            alt="Burrito Logo"
            className="transform rotate-90"
            width={logoSize}
            height={logoSize}
          />
        </div>
        <nav className={`md:flex items-center text-stone-200 font-semibold ${menuOpen ? 'flex flex-col absolute text-2xl inset-0 justify-around bg-stone-500 h-screen ' : 'hidden space-x-4 '}`}>
          <Link href="/" className="hover:text-stone-50 " onClick={closeMenu}>Home</Link>
          <Link href="/menu" className="hover:text-stone-50" onClick={closeMenu}>Menu</Link>
          <Link href="/locations" className="hover:text-stone-50" onClick={closeMenu}>Locations</Link>
          <Link href="/contact" className="hover:text-stone-50" onClick={closeMenu}>Contact</Link>
          <Link href="/about" className="hover:text-stone-50" onClick={closeMenu}>About</Link>
        </nav>
        <div className="hamburger-container md:hidden z-50 flex justify-center items-center">
          <button onClick={toggleMenu} className={`focus:outline-none   `}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
