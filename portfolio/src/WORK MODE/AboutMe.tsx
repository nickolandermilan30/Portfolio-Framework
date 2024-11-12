import React, { useState } from 'react';
import Navbar_WM from './Navbar_WM'; // Adjust the path if needed
import backgroundImage from '../assets/Images/background.jpg'; // Adjust the import path as needed
import profileImage from '../assets/Images/My Picture.jpg'; // Import the profile image
import { FaFileAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa'; // Import necessary icons from react-icons
import { AiFillMail } from 'react-icons/ai'; // Import the envelope icon from react-icons
import Info from './Information';
import PersonalInfo from './Perosnal_Info';


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

  const [projectTitle, setProjectTitle] = useState('Mobile App Projects'); 

  const handleResumeClick = () => {
    window.open('/src/assets/Files/Nickolander Resume.pdf', '_blank'); 
  };

  const handleResumeClick2 = () => {
    window.open('/src/assets/Files/Cover letter Nicko Lander R. Milan.pdf', '_blank'); 
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
            onClick={handleResumeClick2}
            className="flex items-center px-3 py-1 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 text-sm"
          >
            <FaFileAlt className="mr-1" />
            <span>Cover letter</span>
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

      <div className="flex justify-center mt-20">
  <PersonalInfo />
</div>
      
<div className="flex justify-center mt-20">
  <Info />
</div>

        <div className="h-20" /> 
        

   
      </div>

  );
};

export default AboutUs;
