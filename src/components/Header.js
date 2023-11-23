'use client'
import { useContext } from 'react'
import Image from 'next/image';
import React, { useState } from 'react';

import Link from 'next/link'
import { CartContext } from './Context';
import { Cart } from '@/components/Cart'
export const Header = ({ nonce }) => {
  const { cartCount, setCartCount } = useContext(CartContext);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible)
  }

  return (
    <>
      <header className="z-10 fixed top-0 w-screen text-lg  bg-stone-500 px-8 flex justify-center ">
        <div className="max-w-screen-lg flex justify-between w-full">
          <div className="logo-container ">
            <Image
              src="/Logo.svg"
              alt="Burrito Logo"
              className="transform rotate-90"
              width={64}
              height={64}
              sizes={50}
            />
          </div>
          <nav className={`md:flex items-center text-stone-200 font-semibold  'hidden space-x-4 '}`}>
            <Link href="/" className="hover:text-stone-50">Home</Link>
            <Link href="/menu" className="hover:text-stone-50">Menu</Link>
            <Link href="/locations" className="hover:text-stone-50">Locations</Link>
            <Link href="/contact" className="hover:text-stone-50">Contact</Link>
            <Link href="/about" className="hover:text-stone-50">About</Link>
            <div onClick={handleCartClick} className="cursor-pointer hover:text-stone-50">Cart {cartCount}</div>

          </nav>

        </div>

      </header>

      {isCartVisible &&
        <div className="flex justify-end pt-20">
          <div className="w-1/5 fixed  right-0 z-30 bg-stone-300 border-1 bor">
            <Cart />
          </div>
        </div>
      }
    </>
  );
};

