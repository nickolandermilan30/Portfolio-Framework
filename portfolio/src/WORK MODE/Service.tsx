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
      <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }} >
      <h2 className="text-5xl  mb-4 text-center mt-3">My Services</h2>
      </div>
      <div className="flex flex-col items-center mt-10 px-4 md:px-2">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0"> 
          {/* Box 1 */}
          <div className="bg-gray-200 rounded shadow-lg w-96 h-96 p-7"> {/* Adjusted padding */}
            <h2 className="text-5xl font-bold text-left m-0">{projects[currentProject].title}</h2> {/* Reduced title size */}
            <p className="text-lg text-left mt-4">{projects[currentProject].content}</p> {/* Reduced margin for the paragraph */}

            {/* Conditional rendering for icons in Web Design */}
            {projects[currentProject].title === "Web Design" && (
              <div className="flex space-x-4 mt-6">
                {/* Figma Icon */}
                <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                    <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                    <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                    <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                  </svg>
                </div>
                {/* Adobe XD Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#ff41c8" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"></path>
                    <path fill="#16020b" d="M9,9v30h30V9H9z M19.093,21.695l1.914-4.883h3.291l-3.34,7.051l3.418,7.168h-3.33l-1.953-4.971 l-1.943,4.971h-3.33l3.418-7.168l-3.35-7.051h3.291L19.093,21.695z M25.069,25.426c0-1.732,0.293-3.024,0.879-3.877 s1.438-1.279,2.559-1.279c0.813,0,1.491,0.352,2.031,1.055v-5.293h2.783v15h-2.51l-0.127-1.074c-0.566,0.847-1.296,1.27-2.188,1.27 c-1.106,0-1.951-0.423-2.534-1.27s-0.881-2.09-0.894-3.73V25.426z M27.843,26.119c0,1.042,0.11,1.77,0.332,2.183 s0.596,0.62,1.123,0.62c0.547,0,0.96-0.244,1.24-0.732v-4.824c-0.273-0.521-0.684-0.781-1.23-0.781 c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188V26.119z"></path>
                  </svg>
                </div>
              </div>
            )}

            {/* Conditional rendering for icons in Mobile App Design*/}
            {projects[currentProject].title === "Mobile App Design" && (
              <div className="flex space-x-4 mt-6">
                {/* Figma Icon */}
                <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
                    <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
                    <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
                    <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
                    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                  </svg>
                </div>
                {/* Adobe XD Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                    <path fill="#ff41c8" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"></path>
                    <path fill="#16020b" d="M9,9v30h30V9H9z M19.093,21.695l1.914-4.883h3.291l-3.34,7.051l3.418,7.168h-3.33l-1.953-4.971 l-1.943,4.971h-3.33l3.418-7.168l-3.35-7.051h3.291L19.093,21.695z M25.069,25.426c0-1.732,0.293-3.024,0.879-3.877 s1.438-1.279,2.559-1.279c0.813,0,1.491,0.352,2.031,1.055v-5.293h2.783v15h-2.51l-0.127-1.074c-0.566,0.847-1.296,1.27-2.188,1.27 c-1.106,0-1.951-0.423-2.534-1.27s-0.881-2.09-0.894-3.73V25.426z M27.843,26.119c0,1.042,0.11,1.77,0.332,2.183 s0.596,0.62,1.123,0.62c0.547,0,0.96-0.244,1.24-0.732v-4.824c-0.273-0.521-0.684-0.781-1.23-0.781 c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188V26.119z"></path>
                  </svg>
                </div>

                 {/* Canva Icon */}
                 <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <linearGradient id="N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1" x1="38.263" x2="10.15" y1="1373.62" y2="1342.615" gradientTransform="translate(0 -1333.89)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#823af3"></stop><stop offset=".36" stop-color="#4b66e1"></stop><stop offset=".906" stop-color="#01f1c4"></stop></linearGradient><path fill="url(#N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1)" fill-rule="evenodd" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24	S12.955,4,24,4S44,12.955,44,24z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z" clip-rule="evenodd"></path>
                </svg>
                </div>

              </div>
            )}

              {/* Conditional rendering for icons in Mobile Dev*/}
              {projects[currentProject].title === "Mobile Dev" && (
              <div className="flex space-x-4 mt-6">
                {/* Android studio Icon */}
                <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#00c853" d="M4,23C4,11.954,12.954,3,24,3s20,8.954,20,20l-20,2L4,23z"></path><path fill="#00e676" d="M44,23c0,11.046-8.954,20-20,20S4,34.046,4,23H44z"></path><path fill="#c2eafd" d="M39.29,42.34v3.16c0,0.19-0.1,0.35-0.25,0.43c-0.14,0.09-0.33,0.1-0.5,0l-2.72-1.59l-4.68-8.15	l-2-3.47l-3.75-6.52l2.93-2.93l3.99,6.94l2.07,3.6L39.29,42.34z"></path><path fill="#9addfb" d="M31.231,28.335c-0.814,1.101-1.869,2.011-3.092,2.648l3.991,6.941	c1.185-0.648,2.272-1.446,3.265-2.346L31.231,28.335z"></path><path fill="#c2eafd" d="M39,23c0,4.24-1.77,8.08-4.62,10.81c-0.96,0.93-2.05,1.73-3.24,2.38C29.02,37.34,26.59,38,24,38	c-2.53,0-4.96-0.62-7.14-1.81l-4.68,8.15l-2.72,1.59c-0.17,0.1-0.36,0.09-0.5,0c-0.15-0.08-0.25-0.24-0.25-0.43v-3.16l10.97-19.07	l2.93,2.93l-3.75,6.53C20.43,33.56,22.18,34,24,34c1.86,0,3.61-0.46,5.14-1.28c1.21-0.63,2.28-1.49,3.17-2.51	C33.99,28.27,35,25.76,35,23H39z"></path><path fill="#37474f" d="M28.5,13H26v-3h-4v3h-2.5c-0.828,0-1.5,0.672-1.5,1.5V23l4.932,4.932c0.59,0.59,1.546,0.59,2.135,0	L30,23v-8.5C30,13.672,29.328,13,28.5,13z M24,22c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5	C26.5,20.881,25.381,22,24,22z"></path>
                </svg>
                </div>

                {/* Firebase Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                  <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path>
                  </svg>
                </div>

                 {/* Tensorflow Icon */}
                 <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <polygon fill="#ffa000" points="16,39.609 23,43.609 23,4 16,8"></polygon><polygon fill="#ffa000" points="23,12.433 6,22.25 6,13.75 23,3.933"></polygon><polygon fill="#ffb300" points="32,39.609 25,43.609 25,4 32,8"></polygon><polygon fill="#ffb300" points="25,12.433 42,22.25 42,13.75 25,3.933"></polygon><polygon fill="#ffb300" points="29,19.732 29,27.365 36,31.407 36,23.775"></polygon>
                </svg>
                </div>

                {/* Tensorflow Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#ffb300" d="M33.5,10C26.044,10,20,16.044,20,23.5C20,30.956,26.044,37,33.5,37S47,30.956,47,23.5	C47,16.044,40.956,10,33.5,10z M33.5,30c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S37.09,30,33.5,30z"></path><path fill="#ffb300" d="M19.14,28.051l0-0.003C17.96,29.252,16.318,30,14.5,30C10.91,30,8,27.09,8,23.5s2.91-6.5,6.5-6.5	c1.83,0,3.481,0.759,4.662,1.976l3.75-6.024C20.604,11.109,17.683,10,14.5,10C7.044,10,1,16.044,1,23.5C1,30.956,7.044,37,14.5,37	c3.164,0,6.067-1.097,8.369-2.919L19.14,28.051z"></path><path fill="#f57c00" d="M8,23.5c0-1.787,0.722-3.405,1.889-4.58l-4.855-5.038C2.546,16.33,1,19.733,1,23.5	c0,3.749,1.53,7.14,3.998,9.586l4.934-4.964C8.74,26.944,8,25.309,8,23.5z"></path><path fill="#f57c00" d="M38.13,18.941C39.285,20.114,40,21.723,40,23.5c0,3.59-2.91,6.5-6.5,6.5	c-1.826,0-3.474-0.755-4.655-1.968l-4.999,4.895C26.298,35.437,29.714,37,33.5,37C40.956,37,47,30.956,47,23.5	c0-3.684-1.479-7.019-3.871-9.455L38.13,18.941z"></path>
                </svg>
                </div>

              </div>
            )}


            {/* Conditional rendering for icons in Front End Web Dev*/}
            {projects[currentProject].title === "Front End Web Dev" && (
              <div className="flex space-x-4 mt-6">
                {/* Visual studio Icon */}
                <div className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                </svg>
                </div>

                {/* vite js Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z"></path><path fill="#fff" d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"></path>
                </svg>
                </div>

                 {/* Tensorflow Icon */}
                 <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                  <linearGradient id="oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1" x1="13.315" x2="38.005" y1="514.906" y2="481.377" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#9231be"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1)" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"></path><linearGradient id="oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2" x1="25.502" x2="37.131" y1="508.764" y2="428.99" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2)" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"></path>
                </svg>
                </div>

                {/* Tensorflow Icon */}
                <div className="w-16 h-16 shadow-lg bg-white rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg>
                </div>

              </div>
            )}





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
