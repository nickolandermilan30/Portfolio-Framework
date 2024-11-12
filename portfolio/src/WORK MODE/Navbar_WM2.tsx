import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar_WM = ({ darkMode }) => {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center animate-spin">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
          </div>

          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className={`border-2 font-bold px-4 py-2 rounded-full transition duration-400 ${
                  darkMode 
                    ? 'bg-gray-800 text-white border-gray-100 shadow-lg shadow-gray-900' 
                    : 'bg-white text-black border-black shadow-sm'
                } hover:bg-red-800 hover:text-white`}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_WM;
