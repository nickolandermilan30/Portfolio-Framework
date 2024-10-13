import React, { useState } from 'react';
import myPicture from '../assets/Images/My Picture.jpg'; // Adjust the path as needed
import githubLogo from '../assets/Media/github.png';
import instagramLogo from '../assets/Media/instagram.png';
import discordLogo from '../assets/Media/discord.png';
import tiktokLogo from '../assets/Media/tiktok.png';
import TypingText from '../FUNCTION/TypingText'; // Import the TypingText component
import Tooltip from '../FUNCTION/Tooltip'; // Import the Tooltip component

const FrontPage = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to manage which icon is hovered

  // Function to handle mouse enter and set hovered icon
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="px-4 py-8 flex flex-col md:flex-row items-center md:items-start md:px-20">
<div className="text-center md:text-left mt-6 md:mt-28 flex-1">
  <p className="mt-2 ml-1 text-lg">Hi There 👋 I'm</p>
  <h1 className="text-2xl md:text-4xl font-bold">Nicko Lander R. Milan</h1>
  <TypingText /> {/* Use TypingText component for typing animation */}
</div>



      
      <div className="p-4 w-64 md:w-96 ml-0 md:ml-16 bg-white shadow-lg rounded-full flex items-center justify-center">
  <img 
    src={myPicture} 
    alt="My Picture" 
    className="w-full h-auto rounded-full" // Responsive image with rounded corners
  />
</div>


  

      <div className="text-center md:text-right mt-10 flex-1 relative">
        <h1 className="text-3xl md:text-4xl font-bold">Expertise</h1>

        {/* Stacked Social Media Logos */}
        <div className="flex flex-row md:flex-col items-center md:items-end mt-6 space-x-4 md:space-x-0 md:space-y-8 md:mr-10">
          {/* Github Icon with Tooltip */}
          <div 
            onMouseEnter={() => handleMouseEnter("github")} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="https://github.com/nickolandermilan30" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="Github" className="w-12 h-12 md:w-14 md:h-14" />
            </a>
            {hoveredIcon === "github" && <Tooltip text="@nickolandermilan30" />}
          </div>

          {/* Instagram Icon with Tooltip */}
          <div 
            onMouseEnter={() => handleMouseEnter("instagram")} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="https://www.instagram.com/nickolander_/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="w-12 h-12 md:w-14 md:h-14" />
            </a>
            {hoveredIcon === "instagram" && <Tooltip text="@nickolander_" />}
          </div>
          
          {/* Discord Icon with Tooltip */}
          <div 
            onMouseEnter={() => handleMouseEnter("discord")} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
              <img src={discordLogo} alt="Discord" className="w-12 h-12 md:w-14 md:h-14" />
            </a>
            {hoveredIcon === "discord" && <Tooltip text="@mikoes_30" />}
          </div>

          {/* TikTok Icon with Tooltip */}
          <div 
            onMouseEnter={() => handleMouseEnter("tiktok")} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="https://www.tiktok.com/@nikoes.30" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok" className="w-12 h-12 md:w-14 md:h-14" />
            </a>
            {hoveredIcon === "tiktok" && <Tooltip text="@nikoes.30" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
