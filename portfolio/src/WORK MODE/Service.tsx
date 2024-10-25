import React, { useState } from 'react';
import Navbar from '../TOP/NavigationBar'; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import bookImage from '../assets/Project/book.png';
import coffeetectImage from '../assets/Project/coffeetect.png';
import rootFarmImage from '../assets/Project/Root Farm.jpg';
import eunivateImage from '../assets/Project/Eunivate.png'; // New project image import

// Update projects to include images
const projects = [
  { 
    id: 1, 
    title: "Web Design", 
    content: "I create responsive and functional website designs using various free sourced tools. My focus is on enhancing user experience and ensuring seamless interaction throughout the design.", 
    image: bookImage // Updated to use bookImage
  },
  { 
    id: 2, 
    title: "Mobile App Design", 
    content: "I design mobile applications utilizing free tools and templates to create designs that meet user preferences and fulfill their needs.", 
    image: rootFarmImage // Replace with appropriate image
  },
  { 
    id: 3, 
    title: "Mobile Dev", 
    content: "I develop mobile applications and implement machine learning features to enhance functionality and user experience. Utilizing various software tools, I ensure the applications meet user needs effectively.", 
    image: coffeetectImage // Replace with appropriate image
  },
  { 
    id: 4, 
    title: "Front End Web Dev", 
    content: "I create websites with a primary focus on layout and design. My work involves ensuring that each element is well-structured and visually appealing, enhancing the overall user experience.", 
    image: eunivateImage // Replace with appropriate image
  },
];

const Service = () => {
  const [currentProject, setCurrentProject] = useState(0); // Track the current project index

  const handleNext = () => {
    setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center mt-10 px-4 md:px-2">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0">
          {/* Box 1 */}
          <div className="bg-gray-200 rounded shadow-lg w-96 h-96 p-7"> {/* Adjusted padding */}
            <h2 className="text-5xl font-bold text-left m-0">{projects[currentProject].title}</h2> {/* Reduced title size */}
            <p className="text-lg text-left mt-4">{projects[currentProject].content}</p> {/* Reduced margin for the paragraph */}
          </div>

          {/* Box 2 with Image */}
          <div className="bg-gray-200 rounded shadow-lg w-96 h-96 flex flex-col items-center p-7"> {/* Adjusted padding */}
            <img 
              src={projects[currentProject].image} 
              alt={projects[currentProject].title} 
              className="object-contain h-full w-full rounded-lg" // Changed to rounded-lg for subtle rounding
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={handlePrevious}
            className="border-2 border-blue-800 text-blue-800 w-12 h-12 rounded-full hover:bg-blue-800 hover:text-white transition duration-400 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className="border-2 border-blue-800 text-blue-800 w-12 h-12 rounded-full hover:bg-blue-800 hover:text-white transition duration-400 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
