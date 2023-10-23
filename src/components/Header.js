import Link from 'next/link'
import Image from 'next/image'
export const Header = () => {
  return (
    <header className="z-10  bg-gray-100 flex justify-between  items-center  w-full p-4 ">


      <div className="text-2xl font-bold ">
        {/*           
<Image src="Logo.svg" width={200} height={60} />
 */}
        <div className="outline-text Cinzel text-4xl">California </div>
        <div className="font-bold">Burrito Shop</div>
      </div>

      <nav className="flex ">
        <ul className="list-none flex space-x-4 text-lg font-bold ">
          <Link href="/" className="hover:text-black">
            <li className="hover:text-black">
              Home
            </li>
          </Link>
          <Link href="/menu" className="hover:text-black">
            <li className="hover:text-black">
              Menu
            </li>
          </Link>
          <Link href="/locations">
            <li className="hover:text-black">
              Locations
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-black">
              Contact
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:text-black">
              About
            </li>
          </Link>
        </ul>
      </nav>


    </header>
  )
}