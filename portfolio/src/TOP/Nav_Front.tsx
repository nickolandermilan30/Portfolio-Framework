import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import MusicDisk from '../assets/Images/Music_Disk.png';
import aboutYouSong from '../assets/Song/about_you_song.mp3';

function Nav_Front() {
  const [isOpen, setIsOpen] = useState(false);
  const [audio] = useState(new Audio(aboutYouSong));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.preload = 'auto';

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const playMusic = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
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

          <div className="block lg:hidden">
            <button onClick={toggleSideNav} className="text-blue-800 focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>

          <ul className="hidden lg:flex space-x-4 items-center">
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
            <li className="flex items-center">
              <Link to="/about" className="border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                About Me
              </Link>

              {/* Button to play or stop music */}
              <button
                className="w-40 h-11 border-2 bg-white shadow-xl rounded-full ml-5 flex items-center overflow-hidden hover:bg-blue-800 transition duration-300"
                onClick={playMusic}
              >
                <img
                  src={MusicDisk}
                  alt="Music Disk"
                  className={`w-10 h-10 rounded-full ml-1 ${isPlaying ? 'animate-spin' : ''}`}
                />
                <span className="ml-2 text-blue-800 text-sm hover:text-white hover:whitespace-nowrap">
                  {isPlaying ? "Stop Now" : "Play Now"}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-800 bg-opacity-75 lg:hidden">
          <div className="w-2/4 max-w-xs bg-white p-4">
            <button onClick={toggleSideNav} className="text-blue-800 text-2xl float-right">
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center space-y-2 mt-12">
              <li className="w-full">
                <Link to="/socials" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  Service
                </Link>
              </li>
              <li className="w-full">
                <Link to="/ProjCard" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  Projects
                </Link>
              </li>
              <li className="w-full">
                <Link to="/another-page" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  Drawings
                </Link>
              </li>
              <li className="w-full">
                <Link to="/about" className="block border-2 border-blue-800 text-blue-800 w-full px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition duration-400">
                  About Me
                </Link>
              </li>

        {/* Music button for mobile and desktop */}
<button
  className="w-full border-2 bg-white shadow-xl rounded-full flex items-center justify-start overflow-hidden hover:bg-blue-800 transition duration-300 mt-4 lg:mt-0 lg:ml-5"
  onClick={playMusic}
>
  <img
    src={MusicDisk}
    alt="Music Disk"
    className={`w-10 h-10 rounded-full ml-1 ${isPlaying ? 'animate-spin' : ''}`}
  />
  <span className="ml-2 text-blue-800 text-sm hover:text-white hover:whitespace-nowrap">
    {isPlaying ? "Stop Now" : "Play Now"}
  </span>
</button>

            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav_Front;
