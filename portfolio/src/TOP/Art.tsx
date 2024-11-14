import React, { useState } from 'react';
import Navbar_WM from '../WORK MODE/Navbar_WM2'; // Adjust the path if needed
import PfpImage from '/src/assets/Images/pfp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Import images directly
import Art1 from '/src/assets/Digital Art/Art1.png';
import Art2 from '/src/assets/Digital Art/Art2.webp';
import Art3 from '/src/assets/Digital Art/Art3.png';
import Art4 from '/src/assets/Digital Art/Art4.webp';
import Art5 from '/src/assets/Digital Art/Art5.jpg';
import Art6 from '/src/assets/Digital Art/Art6.webp';
import Art7 from '/src/assets/Digital Art/Art7.jpg';
import Art8 from '/src/assets/Digital Art/Art8.jpg';
import Art9 from '/src/assets/Digital Art/Art9.jpg';
import Art10 from '/src/assets/Digital Art/Art10.jpg';

// Import traditional art images
import Trad1 from '/src/assets/Traditional Art/Trad (1).jpg';
import Trad2 from '/src/assets/Traditional Art/Trad (2).jpg';
import Trad3 from '/src/assets/Traditional Art/Trad (3).jpg';
import Trad4 from '/src/assets/Traditional Art/Trad (4).jpg';
import Trad5 from '/src/assets/Traditional Art/Trad (5).jpg';
import Trad6 from '/src/assets/Traditional Art/Trad (6).jpg';
import Trad7 from '/src/assets/Traditional Art/Trad (7).jpg';
import Trad8 from '/src/assets/Traditional Art/Trad (8).jpg';
import Trad9 from '/src/assets/Traditional Art/Trad (9).jpg';
import Trad11 from '/src/assets/Traditional Art/Trad (11).jpg';
import Trad12 from '/src/assets/Traditional Art/Trad (12).jpg';
import Trad13 from '/src/assets/Traditional Art/Trad (13).jpg';
import Trad14 from '/src/assets/Traditional Art/Trad (14).jpg';
import Trad15 from '/src/assets/Traditional Art/Trad (15).jpg';

interface Artwork {
  year: number;
  imageUrl: string;
  type: 'digital' | 'traditional';
}

const artworks: Artwork[] = [
  { year: 2023, imageUrl: Art1, type: 'digital' },
  { year: 2022, imageUrl: Art2, type: 'digital' },
  { year: 2021, imageUrl: Art3, type: 'digital' },
  { year: 2022, imageUrl: Art4, type: 'digital' },
  { year: 2021, imageUrl: Art5, type: 'digital' },
  { year: 2022, imageUrl: Art6, type: 'digital' },
  { year: 2021, imageUrl: Art7, type: 'digital' },
  { year: 2021, imageUrl: Art8, type: 'digital' },
  { year: 2020, imageUrl: Art9, type: 'digital' },
  { year: 2020, imageUrl: Art10, type: 'digital' },
  { year: 2024, imageUrl: Trad1, type: 'traditional' },
  { year: 2024, imageUrl: Trad2, type: 'traditional' },
  { year: 2013, imageUrl: Trad3, type: 'traditional' },
  { year: 2024, imageUrl: Trad4, type: 'traditional' },
  { year: 2022, imageUrl: Trad5, type: 'traditional' },
  { year: 2023, imageUrl: Trad6, type: 'traditional' },
  { year: 2023, imageUrl: Trad7, type: 'traditional' },
  { year: 2021, imageUrl: Trad8, type: 'traditional' },
  { year: 2022, imageUrl: Trad9, type: 'traditional' },
  { year: 2020, imageUrl: Trad11, type: 'traditional' },
  { year: 2020, imageUrl: Trad12, type: 'traditional' },
  { year: 2020, imageUrl: Trad13, type: 'traditional' },
  { year: 2020, imageUrl: Trad14, type: 'traditional' },
  { year: 2024, imageUrl: Trad15, type: 'traditional' },
];

const Art: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'digital' | 'traditional'>('digital');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSwitch = (type: 'digital' | 'traditional') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedType(type);
      setIsTransitioning(false);
    }, 500);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredArtworks = artworks.filter((art) => art.type === selectedType);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      <Navbar_WM darkMode={darkMode} />

      <div className="text-center py-10 px-4">
        <div className="relative flex justify-center items-center mb-4">
          <div className="absolute w-full h-40 rounded-lg bg-red-500 z-10 -top-10 flex items-center justify-center overflow-hidden">
            <img src={Trad1} alt="Art 3" className="h-full object-cover" />
            <img src={Art2} alt="Art 8" className="h-full object-cover" />
            <img src={Trad3} alt="Art 8" className="h-full object-cover" />
            <img src={Art4} alt="Art 8" className="h-full object-cover" />
            <img src={Trad5} alt="Art 8" className="h-full object-cover" />
            <img src={Art6} alt="Art 8" className="h-full object-cover" />
            <img src={Trad11} alt="Art 8" className="h-full object-cover" />
            <img src={Art8} alt="Art 8" className="h-full object-cover" />
            <img src={Trad9} alt="Art 8" className="h-full object-cover" />
            <img src={Art10} alt="Art 8" className="h-full object-cover" />
            <img src={Trad11} alt="Art 8" className="h-full object-cover" />
            <img src={Art1} alt="Art 8" className="h-full object-cover" />
            <img src={Trad12} alt="Art 8" className="h-full object-cover" />
            <img src={Art5} alt="Art 8" className="h-full object-cover" />
          </div>

          <img
            src={PfpImage}
            alt="Profile"
            className="w-48 h-48 p-2 rounded-full object-cover bg-white border-4 border-white shadow-xl z-20"
          />
        </div>

        <h2 className="text-4xl font-bold mb-6">My Arts</h2>

        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => handleSwitch('traditional')}
            className={`${
              selectedType === 'traditional' ? 'bg-blue-700' : 'bg-blue-500'
            } text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300`}
          >
            Traditional Art
          </button>
          <button
            onClick={() => handleSwitch('digital')}
            className={`${
              selectedType === 'digital' ? 'bg-blue-700' : 'bg-blue-500'
            } text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300`}
          >
            Digital Art
          </button>

          <button
            onClick={toggleDarkMode}
            className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.6)]' : 'bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]'
            }`}
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className={`${darkMode ? 'text-yellow-300' : 'text-gray-700'}`}
              size="lg"
            />
          </button>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((art, index) => (
              <div
                key={index}
                className={`relative group shadow-lg overflow-hidden fade-collapse ${isTransitioning ? 'fade-out' : 'fade-in'}`}
                style={{
                  transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                }}
              >
                <img src={art.imageUrl} alt={`Art ${art.year}`} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-bold">{` ${art.year}`}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No artworks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Art;
