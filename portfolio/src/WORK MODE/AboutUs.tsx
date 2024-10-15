import React, { useState } from 'react';
import Navbar_WM from './Navbar_WM'; // Adjust the path if needed
import backgroundImage from '../assets/Images/background.jpg'; // Adjust the import path as needed
import profileImage from '../assets/Images/Profile.jpg'; // Import the profile image
import { FaFileAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa'; // Import necessary icons from react-icons
import { AiFillMail } from 'react-icons/ai'; // Import the envelope icon from react-icons

// Import the project images
import bookImage from '../assets/Project/book.png';
import coffeetectImage from '../assets/Project/coffeetect.png';
import ecommerceImage from '../assets/Project/ecommerce2.png';
import hotelBookingImage from '../assets/Project/Hotel Booking.png';
import rootFarmImage from '../assets/Project/Root Farm.jpg';
import teyvatRestoImage from '../assets/Project/teyvat resto.png';
import eunivateImage from '../assets/Project/Eunivate.png'; // New project image import

const AboutUs = () => {
 // Inside your filteredProjects state
 const [filteredProjects, setFilteredProjects] = useState([
  { image: coffeetectImage, name: 'Coffeetect', link: 'https://github.com/nickolandermilan30/Coffeetect.git' },
  { image: hotelBookingImage, name: 'Hotel Booking', link: 'https://github.com/nickolandermilan30/Hotel-Booking-Sariaya.git' },
  { image: rootFarmImage, name: 'Root Farm', link: 'https://github.com/nickolandermilan30/Crops_Detection.git' },
  { image: teyvatRestoImage, name: 'Teyvat Resto', link: 'https://github.com/nickolandermilan30/Ordering-System.git' },
  { image: eunivateImage, name: 'Eunivate', link: 'https://github.com/nickolandermilan30/EUnivate.git' }, // Added for all projects
]);

  const [projectTitle, setProjectTitle] = useState('Mobile App Projects'); // Initial title

  const handleResumeClick = () => {
    window.open('/src/assets/Files/Resume.pdf', '_blank'); // Adjust the path if needed
  };

  const handleSetGmailClick = () => {
    const email = 'nickolandermilan30@gmail.com';
    const subject = 'Hello';
    const body = 'Hi there, ';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleMobileClick = () => {
    setFilteredProjects([
      { image: coffeetectImage, name: 'Coffeetect', link: 'https://github.com/nickolandermilan30/Coffeetect.git' },
      { image: hotelBookingImage, name: 'Hotel Booking', link: 'https://github.com/nickolandermilan30/Hotel-Booking-Sariaya.git' },
      { image: rootFarmImage, name: 'Root Farm', link: 'https://github.com/nickolandermilan30/Crops_Detection.git' },
      { image: teyvatRestoImage, name: 'Teyvat Resto', link: 'https://github.com/nickolandermilan30/Ordering-System.git' },
      { image: eunivateImage, name: 'Eunivate', link: 'https://github.com/nickolandermilan30/EUnivate.git' }, // Added for mobile filter
    ]);
    setProjectTitle('Mobile App Projects');
  };

  const handleComputerClick = () => {
    setFilteredProjects([
      { image: bookImage, name: 'Book Project', link: 'https://github.com/nickolandermilan30/Landing_page_Books.git' },
      { image: ecommerceImage, name: 'Merch +', link: 'https://github.com/nickolandermilan30/Merch_Ecommerce_Proj.git' },
      { image: eunivateImage, name: 'Eunivate', link: 'https://github.com/nickolandermilan30/EUnivate.git' }, // Include Eunivate for computer projects
    ]);
    setProjectTitle('Website Projects');
  };

   const handleAllClick = () => {
    setFilteredProjects([
      { image: bookImage, name: 'Book Project', link: 'https://github.com/nickolandermilan30/Landing_page_Books.git' },
      { image: ecommerceImage, name: 'Merch +', link: 'https://github.com/nickolandermilan30/Merch_Ecommerce_Proj.git' },
      { image: coffeetectImage, name: 'Coffeetect', link: 'https://github.com/nickolandermilan30/Coffeetect.git' },
      { image: hotelBookingImage, name: 'Hotel Booking', link: 'https://github.com/nickolandermilan30/Hotel-Booking-Sariaya.git' },
      { image: rootFarmImage, name: 'Root Farm', link: 'https://github.com/nickolandermilan30/Crops_Detection.git' },
      { image: teyvatRestoImage, name: 'Teyvat Resto', link: 'https://github.com/nickolandermilan30/Ordering-System.git' },
      { image: eunivateImage, name: 'Eunivate', link: 'https://github.com/nickolandermilan30/EUnivate.git' }, // Added for all projects
    ]);
    setProjectTitle('All Projects');
  };

  return (
    <div
      className="h-60 bg-gray-500 p-4 relative"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar_WM />

      {/* Profile section */}
      <div className="flex flex-col items-center mt-20">
        <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center">
          <img src={profileImage} alt="Profile" className="rounded-full w-36 h-36 object-cover" />
        </div>
        <div className="text-black text-4xl font-bold mt-4 text-center">Nicko Lander Rosales Milan</div>
        <div className="flex mt-4 space-x-2">
          <button
            onClick={handleResumeClick}
            className="flex items-center px-3 py-1 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 text-sm"
          >
            <FaFileAlt className="mr-1" />
            <span>Resume</span>
          </button>
          <button
            onClick={handleSetGmailClick}
            className="flex items-center px-3 py-1 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-800 hover:text-white transition duration-300 text-sm"
          >
            <AiFillMail className="mr-1" />
            <span>Send Gmail</span>
          </button>
        </div>
      </div>

      {/* About Me section */}
      <div className="flex justify-center mt-8">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[700px]">
          <div className="text-black text-4xl mb-3 text-center sm:text-left">About Me</div>
          <p className="text-gray-800 text-xl text-center sm:text-left">
            As a conscientious and dedicated student with a strong sense of responsibility,
            exceptional time management abilities, and the flexibility to adapt to various tasks,
            I am consistently commended by my peers for my diligent work ethic.
            I am deeply committed to assisting your company in reaching its objectives and believe
            that my dedication and skills will be valuable assets to your organization.
            You can trust in my ability to make meaningful contributions that will positively impact
            the success of your company.
          </p>
        </div>
      </div>

      {/* Projects section */}
      <div className="flex flex-col items-center mt-16">
        {/* Title section */}
        <div className="w-full max-w-4xl px-4 mb-3">
          <div className="text-black text-3xl text-center">{projectTitle}</div> {/* Dynamic project title */}
        </div>

        {/* Button section */}
        <div className="flex space-x-2 mb-3">
          <button
            onClick={handleMobileClick}
            className="flex items-center px-3 py-1 border-2 border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-300 text-sm"
          >
            <FaMobileAlt className="mr-1" />
          </button>
          <button
            onClick={handleComputerClick}
            className="flex items-center px-3 py-1 border-2 border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-300 text-sm"
          >
            <FaLaptop className="mr-1" />
          </button>
          <button
            onClick={handleAllClick}
            className="flex items-center px-3 py-1 border-2 border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition duration-300 text-sm"
          >
            <span>ALL</span>
          </button>
        </div>

        {/* Project cards */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 w-full max-w-5xl px-4">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link || '#'} // Use the link or fallback to '#'
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="bg-white rounded-lg shadow-lg p-6 w-72 h-72 flex flex-col items-center justify-between mb-4 sm:mb-0 sm:h-72 md:h-80 lg:h-72"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg object-cover h-48 w-full"
              />
              <div className="text-center mt-2 font-bold text-xl">{project.name}</div>

              {/* Add technology indicators */}
              {project.name === 'Book Project' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-1"></span>
                    <span className="text-sm">HTML</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-1"></span>
                    <span className="text-sm">CSS</span>
                  </div>
                  
                </div>
              )}
              {project.name === 'Merch +' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-1"></span>
                    <span className="text-sm">HTML</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-1"></span>
                    <span className="text-sm">CSS</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-1"></span>
                    <span className="text-sm">JavaScript</span>
                  </div>
                </div>
              )}
                {project.name === 'Coffeetect' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-orange-700 rounded-full mr-1"></span>
                    <span className="text-sm">Java</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-800 rounded-full mr-1"></span>
                    <span className="text-sm">Python</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-1"></span>
                    <span className="text-sm">Tensorflow</span>
                  </div>
                </div>
              )}
              {project.name === 'Hotel Booking' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-orange-700 rounded-full mr-1"></span>
                    <span className="text-sm">Java</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-orange-300 rounded-full mr-1"></span>
                    <span className="text-sm">Firebase</span>
                  </div>
                </div>
              )}
              {project.name === 'Root Farm' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-orange-700 rounded-full mr-1"></span>
                    <span className="text-sm">Java</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-800 rounded-full mr-1"></span>
                    <span className="text-sm">Python</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-1"></span>
                    <span className="text-sm">Tensorflow</span>
                  </div>
                </div>
              )}
               {project.name === 'Teyvat Resto' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-orange-700 rounded-full mr-1"></span>
                    <span className="text-sm">Java</span>
                  </div>
                </div>
              )}
               {project.name === 'Eunivate' && (
                <div className="flex mt-2">
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-1"></span>
                    <span className="text-sm">Javascript</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-1"></span>
                    <span className="text-sm">Tailwind</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-1"></span>
                    <span className="text-sm">Mernstack </span>
                  </div>
                </div>
              )}
              
            </a>
          ))}
        </div>
        
        <div className="h-20" /> 

      </div>
    </div>
    
  );
};

export default AboutUs;
