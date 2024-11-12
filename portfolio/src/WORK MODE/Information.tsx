import React, { useState } from 'react';
import certificateImage from '../assets/Files/C1.png';
import certificateImage2 from '../assets/Files/C2.png';

// Modal component to display image in full screen
const ImageModal = ({ src, alt, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
      <img src={src} alt={alt} className="max-w-full max-h-full rounded-md" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

const Information = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="flex flex-col items-center mt-0">
      <div className="text-4xl font-bold mb-48 text-center">Accomplishment/Certificate</div>
      <div className="relative h-[600px] w-1 bg-gray-800">
        {/* Large dots with accompanying boxes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-4 rounded-md w-96">
            <div className="text-xl font-bold mb-4">CAPSTONE PROJECT 2023-2024</div>
            <p className="text-sm">
              • Utilized my foundational knowledge of machine learning and Java programming, along with Firebase Realtime Database, to develop an application using Android Studio.
            </p>
            <p className="text-sm mt-2">
              • Designed and developed the application to adhere to design specifications.
            </p>
            <p className="text-sm mt-2">
              • Conducted manual testing and implemented Extreme Programming (XP) practices from the Software Development Life Cycle (SDLC) for smooth deployment and quality assurance.
            </p>
          </div>
        </div>
        <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full">
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-md w-80">
            <img src={certificateImage} alt="Certificate" className="w-full h-auto rounded-md cursor-pointer" onClick={() => openModal(certificateImage)} />
          </div>
        </div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full">
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-4 rounded-md w-96">
            <div className="text-xl font-bold mb-4">EUNIVATE (FREELANCE) APRIL 2024 - NOV 2024</div>
            <p className="text-sm">
              • Utilized React.js with Vite as the framework, along with Express.js, Tailwind CSS, and MongoDB as the database, to develop a fully responsive website.
            </p>
            <p className="text-sm mt-2">
              • Applied foundational knowledge in implementing APIs and utilizing libraries to create a responsive application.
            </p>
            <p className="text-sm mt-2">
              • Conducted manual testing on the responsive website to identify and address bugs, ensuring the resolution of errors in both the backend and frontend, as well as within the database.
            </p>
          </div>
        </div>
        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full">
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-md w-80">
            <img src={certificateImage2} alt="Certificate" className="w-full h-auto rounded-md cursor-pointer" onClick={() => openModal(certificateImage2)} />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full">
          
        </div>
      </div>


      <div className="h-20" /> 
      {/* Render the modal if an image is clicked */}
      {isModalOpen && <ImageModal src={modalImage} alt="Full View" onClose={closeModal} />}
    </div> 
    
  );
};

export default Information;
