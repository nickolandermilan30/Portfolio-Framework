import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const PersonalInfo = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-16 text-center">Personal Information</h2>
      
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
        {/* First Box with personal details */}
        <div className="flex-1 bg-gray-800 text-white p-6 rounded-lg shadow-md md:order-1 md:max-h-72 overflow-auto">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-300" />
              <span><strong>Name:</strong> Nicko Lander R. Milan</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-300" />
              <span><strong>Location:</strong> Sariaya Quezon</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" />
              <span><strong>Email:</strong> <span className=' text-sm '> nickolandermilan30@gmail.com </span></span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faBriefcase} className="text-gray-300" />
              <span><strong>Employment:</strong> Frontend Developer</span>
            </div>
          </div>
        </div>

        {/* Second Box with map */}
        <div className="flex-1 bg-white text-gray-900 p-6 rounded-lg shadow-md md:order-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500" />
            <span>Sariaya, Quezon</span>
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30988.390158505772!2d121.44038181175749!3d13.866102803578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd37d02ed65d85%3A0xe0ff9bbfce4ec414!2sManggalang%201%2C%20Quezon!5e0!3m2!1sen!2sph!4v1730965096510!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Sariaya, Quezon"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
