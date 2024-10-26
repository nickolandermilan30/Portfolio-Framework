import React from 'react';
import TypingText from '../FUNCTION/TypingText'; // Import TypingText component
import Navbar from './Nav_Front';
import Social from '../LINKS/Media';

const StartPoint = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* Navbar with high z-index */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Centered content section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center mt-[-10%] md:mt-0">
        
        {/* Centered TypingText for greeting on mobile, left-aligned on larger screens */}
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
}

export default StartPoint;
