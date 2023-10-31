'use client'
import Image from 'next/image';
import HeaderClient from './HeaderClient';

export const Header = ({ nonce, cartCount }) => {
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

        <p className="text-white flex justify-center items-center font-semibold">Nonce: {nonce}</p>

      <HeaderClient nonce={nonce} cartCount={cartCount}/>

      </div>

    </header>
  );
};


