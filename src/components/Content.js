import { Hero } from "./Hero";
import { Features } from "./Features";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { Menu } from './Menu';
import { Contact } from "./Contact";
export const Content = () => {
    return (
        <main className="min-h-screen">

            <Hero />

            <Features />
            {/*             <div className="text-center border-2  border-cyan-500">Insert Image</div>
 */}
          

            <Specials />

            <Menu />



            <Testimonials />

            <Contact />
        </main>
    );
};