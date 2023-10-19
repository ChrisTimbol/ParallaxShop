import 'next/link'
import Image from 'next/image'
export const Header = () => {
  return (
    <header className="  flex justify-between items-center bg-[url('/img/hero-pattern.svg')] text-white  w-full p-4 fixed">
      {/* When You scroll make navbar fixed and "high and tight" */}

        
        <div className="text-2xl font-bold ">
{/*           
<Image src="Logo.svg" width={200} height={60} />
 */}          
 <div className="outline-text Cinzel text-4xl">California </div>
          <div>Burrito Shop</div>
        </div>
        
        <nav className="flex">
          <ul className="list-none flex space-x-4 text-lg font-bold">
            <li className="">
              Menu
            </li>
            <li className="">
              About
            </li>
            <li className="">
              Locations
            </li>
            <li className="">
              Contact
            </li>
          </ul>
        </nav>
   
      
    </header>
  )
}