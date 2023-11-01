import React from 'react';
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { About } from './About';

export const Content = () => {
    return (
        <main className="min-h-screen">
    
            <Hero />
            <About />
            <Features />
        
       {/*      <Testimonials />
            <Contact /> */}


        </main>
    );
};

