import React, { useState } from 'react';
import Navbar from '../TOP/NavigationBar'; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { id: 1, title: "Project 1", content: "Content for Project 1 goes here." },
  { id: 2, title: "Project 2", content: "Content for Project 2 goes here." },
  { id: 3, title: "Project 3", content: "Content for Project 3 goes here." },
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
          <div className="bg-gray-200 p-28 rounded shadow-lg flex-1 h-96">
            <h2 className="text-xl font-bold text-center">{projects[currentProject].title}</h2>
            <p className="text-center">{projects[currentProject].content}</p>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-200 p-28 rounded shadow-lg flex-1 h-96">
            <h2 className="text-xl font-bold text-center">Box 2</h2>
            <p className="text-center">Content for the second box goes here.</p>
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
