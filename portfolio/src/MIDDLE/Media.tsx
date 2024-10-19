import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // Import TikTok icon from Simple Icons

const Media = () => {
  return (
    <div className="flex justify-start space-x-4 mt-6">
      <a href="https://www.facebook.com/nickolander.milan/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <div className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition duration-300">
          <FaFacebook size={24} />
        </div>
      </a>
      <a href="https://www.tiktok.com/@nikoes.30?lang=en" target="_blank" rel="noopener noreferrer" className="social-icon">
        <div className="bg-black text-white p-4 rounded-full hover:bg-gray-700 transition duration-300">
          <SiTiktok size={24} />
        </div>
      </a>
      <a href="https://www.instagram.com/nickolander_/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <div className="bg-pink-500 text-white p-4 rounded-full hover:bg-pink-600 transition duration-300">
          <FaInstagram size={24} />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/nicko-lander-rosales-milan-698030252/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <div className="bg-blue-700 text-white p-4 rounded-full hover:bg-blue-800 transition duration-300">
          <FaLinkedin size={24} />
        </div>
      </a>
      <a href="https://github.com/nickolandermilan30" target="_blank" rel="noopener noreferrer" className="social-icon">
        <div className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-900 transition duration-300">
          <FaGithub size={24} />
        </div>
      </a>
    </div>
  );
}

export default Media;
