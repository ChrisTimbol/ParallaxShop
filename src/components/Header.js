'use client'
import { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { CartContext } from './Context';

export const Header = ({ nonce }) => {
  const { cartCount, setCartCount } = useContext(CartContext);

  return (
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

        {/* 
        <nav className={`md:flex items-center text-stone-200 font-semibold 'flex flex-col absolute text-2xl inset-0 justify-around bg-stone-500 h-screen ' : 'hidden space-x-4 '}`}>
        */}
        <nav className={`md:flex items-center text-stone-200 font-semibold  'hidden space-x-4 '}`}>
          <Link href="/" className="hover:text-stone-50">Home</Link>
          <Link href="/menu" className="hover:text-stone-50">Menu</Link>
          <Link href="/locations" className="hover:text-stone-50">Locations</Link>
          <Link href="/contact" className="hover:text-stone-50">Contact</Link>
          <Link href="/about" className="hover:text-stone-50">About</Link>
          <Link href="/cart" className="hover:text-stone-50">Cart  {cartCount} </Link>
        </nav>
      </div>
    </header>
  );
};


