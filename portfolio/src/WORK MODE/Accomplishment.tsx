import React, { useState } from 'react';
import '../CSS/CSS2/Accomplishment.css';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Import icons for next and previous
import C1 from '../assets/Files/C1.png';
import C2 from '../assets/Files/C2.png';
import C3 from '../assets/Files/C3.jpg';
import C4 from '../assets/Files/C4.jpg';

const images = [C1, C2, C3, C4]; // Array of images

const Accomplishment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom level on open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom level
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Min zoom level
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setZoomLevel(1); // Reset zoom level
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setZoomLevel(1); // Reset zoom level
  };

  return (
    <div className="accomplishment-wrapper">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Certificate</h2>

      <div className="container">
        {images.map((image, index) => (
          <div
            key={index}
            data-text={`File ${index + 1}`}
            style={{ '--r': `${index * 10 - 15}` } as React.CSSProperties}
            className="glass"
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`File ${index + 1}`} />
          </div>
        ))}

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[currentIndex]}
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

              {/* Next and Previous Buttons */}
              <button onClick={prevImage} className="prev-button">
                <FaChevronLeft />
              </button>
              <button onClick={nextImage} className="next-button">
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accomplishment;
