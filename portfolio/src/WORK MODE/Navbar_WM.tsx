import { Link } from 'react-router-dom';

const Navbar_WM: React.FC = () => {
  return (
    <div className="mt-2">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center animate-spin">
              <span className="text-black font-bold text-2xl">N</span>
            </div>
          </div>

          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="border-2 font-bold border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-400"
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
