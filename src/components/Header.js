import Link from 'next/link'
import Image from 'next/image'
export const Header = () => {
  return (
    <header className="z-10  flex justify-between bg-amber-500 items-center text-white  w-full p-4 absolute">

        
        <div className="text-2xl font-bold ">
{/*           
<Image src="Logo.svg" width={200} height={60} />
 */}          
 <div className="outline-text Cinzel text-4xl">California </div>
          <div>Burrito Shop</div>
        </div>
        
        <nav className="flex ">
          <ul className="list-none flex space-x-4 text-lg font-bold ">
            <Link href="/menu" className="hover:text-black">
            <li className="hover:text-black">
              Menu
            </li>
            </Link>
            <Link href="/story">
            <li className="hover:text-black">
              Story
            </li>
            </Link>
            <Link href="/menu">
            <li className="hover:text-black">
              Locations
            </li>
            </Link>
            <Link href="/menu">
            <li className="hover:text-black">
              Contact
            </li>
            </Link>
          </ul>
        </nav>
   
      
    </header>
  )
}