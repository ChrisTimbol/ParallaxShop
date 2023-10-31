'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const HeaderClient = ({ nonce, cartCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);
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
        <nav className={`md:flex items-center text-stone-200 font-semibold ${menuOpen ? 'flex flex-col absolute text-2xl inset-0 justify-around bg-stone-500 h-screen ' : 'hidden space-x-4 '}`}>
            <Link href="/" className="hover:text-stone-50 " onClick={closeMenu}>Home</Link>
            <Link href="/menu" className="hover:text-stone-50" onClick={closeMenu}>Menu</Link>
            <Link href="/locations" className="hover:text-stone-50" onClick={closeMenu}>Locations</Link>
            <Link href="/contact" className="hover:text-stone-50" onClick={closeMenu}>Contact</Link>
            <Link href="/about" className="hover:text-stone-50" onClick={closeMenu}>About</Link>
            <Link href="/cart" className="hover:text-stone-50" onClick={closeMenu}>Cart {cartCount} </Link>
        </nav>
    );
};

export default HeaderClient;
