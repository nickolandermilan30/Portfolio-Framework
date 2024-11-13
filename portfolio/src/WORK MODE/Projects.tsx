import React from 'react';
import { FaMobileAlt, FaLaptop } from 'react-icons/fa'; // Import Font Awesome icons

// Accept props for dynamic data if needed (projectTitle, filteredProjects, handlers)
const Projects = ({ projectTitle, filteredProjects, handleMobileClick, handleComputerClick, handleAllClick }) => {
  return (
    <div className="flex flex-col items-center mt-16">
      {/* Title section */}
      <div className="w-full max-w-4xl px-4 mb-3">
        <div
          className="text-red-800 text-5xl text-center"
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
          {projectTitle} {/* Dynamic project title */}
        </div>
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
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg shadow-lg p-6 w-72 h-72 flex flex-col items-center justify-between mb-4 sm:mb-0 sm:h-72 md:h-80 lg:h-72"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg object-cover h-48 w-full"
            />
            <div className="text-center mt-2 font-bold text-xl">{project.name}</div>

            {/* Technology indicators */}
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
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex items-center mr-2">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-1"></span>
                  <span className="text-sm">Tailwind</span>
                </div>
                <div className="flex items-center mr-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-1"></span>
                  <span className="text-s">MERN</span>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
