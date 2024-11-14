import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const PersonalInfo: React.FC = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
        
        {/* Second Box with map */}
        <div className="flex-1 text-gray-900 p-6 rounded-lg md:order-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
            <span>Manggalang 1 Sariaya, Quezon</span>
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30988.390158505772!2d121.44038181175749!3d13.866102803578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd37d02ed65d85%3A0xe0ff9bbfce4ec414!2sManggalang%201%2C%20Quezon!5e0!3m2!1sen!2sph!4v1730965096510!5m2!1sen!2sph"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
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
