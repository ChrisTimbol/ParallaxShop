import React from 'react';
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from '@/components/About';
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home({ nonce }) {
  return (
    <main className="min-h-screen">

      <Hero />
      <About />
      <Features />
    {/*      
      <Testimonials />
      <Contact /> 
    */}
    </main>
  );

}
