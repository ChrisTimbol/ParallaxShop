

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">My Website</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
}