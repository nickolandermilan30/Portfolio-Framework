import React, { useState } from 'react';
import Navbar_WM from './Navbar_WM'; // Adjust the path if needed
import backgroundImage from '../assets/Images/background2.jpg'; // Adjust the import path as needed
import profileImage from '../assets/Images/Profile.jpg'; // Import the profile image
import { FaFileAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa'; // Import necessary icons from react-icons
import { AiFillMail } from 'react-icons/ai'; // Import the envelope icon from react-icons
import ProgressBar from './ProgressBar'; // Assuming ProgressBar is in the same directory
import Project from './Projects';
// Import the project images
import bookImage from '../assets/Project/book.png';
import coffeetectImage from '../assets/Project/coffeetect.png';
import ecommerceImage from '../assets/Project/ecommerce2.png';
import hotelBookingImage from '../assets/Project/Hotel Booking.png';
import rootFarmImage from '../assets/Project/Root Farm.jpg';
import teyvatRestoImage from '../assets/Project/teyvat resto.png';
import eunivateImage from '../assets/Project/Eunivate.png'; // New project image import

const ProjectCard = () => {
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

     

<div className="flex flex-col items-center min-h-screen mt-16 px-10 pt-10"> 
    <Project 
        filteredProjects={filteredProjects} 
        projectTitle={projectTitle} 
        handleMobileClick={handleMobileClick} 
        handleComputerClick={handleComputerClick} 
        handleAllClick={handleAllClick} 
    />
      </div>


      <div className="flex flex-col items-start px-28 pt-10">
      <ProgressBar />
      </div>
      </div>

  );
};

export default ProjectCard;
