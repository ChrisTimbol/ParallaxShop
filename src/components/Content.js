import { Hero } from "./Hero";
import { Story } from "./Story";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { Menu } from './Menu';
import { BannerSpecial } from "./BannerSpecial";
import { Contact } from "./Contact";
export const Content = () => {
    return (
        <main className="min-h-screen">

            <Hero />

            <Story />
            {/*             <div className="text-center border-2  border-cyan-500">Insert Image</div>
 */}
            <BannerSpecial />

            <Specials />

            <Menu />



            <Testimonials />

            <Contact />
        </main>
    );
};