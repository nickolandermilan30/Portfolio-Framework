import React from 'react';
import ProgressBar from '../MIDDLE/ProgressBar'; // Assuming ProgressBar is in the same directory
import LandPage from '../TOP/LandPage'; // Update this path if necessary
import SocialMedia from '../MIDDLE/Socials'; // Assuming ProgressBar is in the same directory

const FrontPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen px-10 pt-10"> 
        <LandPage />
      </div>
      <div className="flex flex-col items-start min-h-screen px-28 pt-10">
        <ProgressBar />
      </div>
      <div className="flex flex-col items-center min-h-screen px-10 pt-10">
        <SocialMedia />
      </div>
    </div>
  );
}

export default FrontPage;
