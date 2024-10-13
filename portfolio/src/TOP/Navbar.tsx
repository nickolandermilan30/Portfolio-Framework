import React from 'react';
import FrontPage from './FrontPage'; // Make sure to adjust the path if needed

function App() {
  return (
    <div className='mt-2'>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center animate-spin">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
          </div>

          <ul className="flex space-x-4">
            <li>
              <button className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                About Me
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* Display the FrontPage component below the nav */}
      <FrontPage />
    </div>
  );
}

export default App;
