import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import FrontPage from './FrontPage'; // Make sure to adjust the path if needed
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function App() {
  // State to manage the side nav visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the side nav
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-2'>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center animate-spin">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
          </div>

          {/* Mobile icon button */}
          <div className="block lg:hidden">
            <button onClick={toggleSideNav} className="text-blue-800 focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>

          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link to="/socials" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                Service
              </Link>
            </li>
            <li>
              <Link to="/ProjCard" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/another-page" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                Drawings
              </Link>
            </li>
            <li>
              <Link to="/about" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Side Navigation for Mobile */}
      {isOpen && (
  <div className="fixed inset-0 z-50 flex justify-end bg-gray-800 bg-opacity-75 lg:hidden">
    <div className="w-2/4 max-w-xs bg-white p-4">
      {/* Close button as an icon */}
      <button onClick={toggleSideNav} className="text-blue-800 text-2xl float-right">
        <FaTimes />
      </button>
      <ul className="flex flex-col items-center space-y-2 mt-12">
        <li className="w-full"> {/* Full width for the list item */}
          <Link to="/socials" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
            Service
          </Link>
        </li>
        <li className="w-full"> {/* Full width for the list item */}
          <Link to="/ProjCard" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
            Projects
          </Link>
        </li>
        <li className="w-full"> {/* Full width for the list item */}
          <Link to="/another-page" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
            Drawings
          </Link>
        </li>
        <li className="w-full"> {/* Full width for the list item */}
          <Link
            to="/about"
            className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400"
          >
            About Me
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}


      {/* Display the FrontPage component below the nav */}
      <FrontPage />
    </div>
  );
}

export default App;
