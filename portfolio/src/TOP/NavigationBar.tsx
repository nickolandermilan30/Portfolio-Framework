
import { Link } from 'react-router-dom'; // Import Link
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
              <Link to="/socials" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
              Service
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
    </div>
  );
}

export default App;
