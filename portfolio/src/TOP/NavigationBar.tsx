import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center animate-spin">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
          </div>

          {/* Hamburger menu for mobile view */}
          <div className="block lg:hidden">
            <button onClick={toggleSideNav} className="text-blue-800 focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>

          {/* Desktop navigation menu */}
          <ul className="hidden lg:flex space-x-4 items-center">
            <li>
              <Link to="/" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Art-page" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                Arts
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

      {/* Side navigation menu for mobile view */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-800 bg-opacity-75 lg:hidden">
          <div className="w-2/4 max-w-xs bg-white p-4">
            <button onClick={toggleSideNav} className="text-blue-800 text-2xl float-right">
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center space-y-2 mt-12">
              <li className="w-full">
                <Link to="/" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link to="/Art-page" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  Arts
                </Link>
              </li>
              <li className="w-full">
                <Link to="/about" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
