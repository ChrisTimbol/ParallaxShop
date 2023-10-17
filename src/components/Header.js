import 'next/link'

export const Header = () => {
  return (
    <header className="bg-cyan-500 text-white p-4">

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <span className="outline-text Cinzel text-4xl">California </span>
          Burrito Shop</div>

        <div>
          <div className="Phone"></div>
          <div className="Address"></div>
        </div>

        <nav>
          <ul className="list-none">
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
      </div>
    </header>
  )
}