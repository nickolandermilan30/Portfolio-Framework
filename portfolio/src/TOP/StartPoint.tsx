import React, { useEffect, useState } from 'react';
import TypingText from '../FUNCTION/TypingText';
import Navbar from './Nav_Front';
import Social from '../LINKS/Media';
import '../SCSS/BG.scss';
import '../CSS/Cursor_square.css';

interface Position {
  x: number;
  y: number;
}

const StartPoint: React.FC = () => {
  const [squarePosition, setSquarePosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setSquarePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar with high z-index */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Background effect with animated squares */}
      <div className="absolute inset-0 -z-10 white">
        <div className="squares">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="square"></div>
          ))}
        </div>
      </div>

      {/* Mouse-follow rotating square */}
      <div
        className="fixed -z-10 pointer-events-none rotating-square"
        style={{
          left: `${squarePosition.x}px`,
          top: `${squarePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
          backgroundColor: 'gray',
        }}
      ></div>

      {/* Centered content section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center mt-[-10%] md:mt-0">
        <div className="w-full max-w-screen-lg px-4 text-center md:text-left">
          <TypingText text="Hi there, I'm" />
        </div>

        {/* Display your name */}
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          Nicko Lander R. Milan
        </h1>
        <h1 className="text-3xl md:text-4xl ml-0 md:ml-56 mt-1 w-full max-w-screen-lg px-4">
          Frontend Web Developer
        </h1>
        
        {/* Social links */}
        <div className="mt-4">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default StartPoint;
