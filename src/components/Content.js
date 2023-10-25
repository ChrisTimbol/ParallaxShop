import React from 'react';
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";

export const Content = () => {
    return (
        <main className="min-h-screen">

            <Hero />

            <Features />



            {/* <Specials />
      <Testimonials />
      <Contact /> 
      */}

        </main>
    );
};

