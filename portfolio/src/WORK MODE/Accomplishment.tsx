import React, { useState } from 'react';
import '../CSS/CSS2/Accomplishment.css';

import C1 from '../assets/Files/C1.png';
import C2 from '../assets/Files/C2.png';
import C3 from '../assets/Files/C3.jpg';
import C4 from '../assets/Files/C4.jpg';

const Accomplishment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom level on open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom level
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Min zoom level
  };

  return (
    <div className="accomplishment-wrapper">
      {/* Title Text */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Certificate</h2>
      
      <div className="container">

        {/* Image Thumbnails */}
        <div data-text="File 1" style={{ '--r': '-15' }} className="glass" onClick={() => openModal(C1)}>
          <img src={C1} alt="File 1" />
        </div>
        <div data-text="File 2" style={{ '--r': '5' }} className="glass" onClick={() => openModal(C2)}>
          <img src={C2} alt="File 2" />
        </div>
        <div data-text="File 3" style={{ '--r': '25' }} className="glass" onClick={() => openModal(C3)}>
          <img src={C3} alt="File 3" />
        </div>
        <div data-text="File 4" style={{ '--r': '-5' }} className="glass" onClick={() => openModal(C4)}>
          <img src={C4} alt="File 4" />
        </div>
        
        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImage}
                alt="Full View"
                className="modal-image"
                style={{ transform: `scale(${zoomLevel})` }}
              />
              <button onClick={closeModal} className="modal-close-button">✕</button>
              <div className="zoom-controls">
                <button onClick={zoomOut} disabled={zoomLevel <= 0.5}>-</button>
                <span>{Math.round(zoomLevel * 100)}%</span>
                <button onClick={zoomIn} disabled={zoomLevel >= 3}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishment;
