import { FaUser, FaBriefcase, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons
import TypingText from '../FUNCTION/TypingText'; // Import TypingText component

const LandPage = () => {
  return (
    <div>
      <div className="flex items-start justify-center min-h-screen">
        <h1
          className="text-[16rem] md:text-[42rem] font-bold text-center mt-[-4rem] md:mt-[-15rem] relative z-[-1] text-blue-800 tracking-tight"
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
          Nicko
        </h1>
      </div>

      {/* Responsive Container for the boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-[-20rem] md:mt-[-14rem] md:space-x-4 space-y-4 md:space-y-0">
        {/* First Box with User Icon */}
        <div className="p-3 bg-gray-200 rounded-full shadow-md w-full max-w-sm text-left flex items-center">
          <div className="bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center">
            <FaUser className="text-2xl" style={{ color: '#15B392' }} /> {/* User Icon with custom color */}
          </div>
          <span className="ml-4 text-lg font-semibold">
            <TypingText text="Nicko Lander R. Milan" /> {/* Typing animation for Name */}
          </span>
        </div>

        {/* Second Box with Work Icon */}
        <div className="p-3 bg-gray-200 rounded-full shadow-md w-full max-w-sm text-left flex items-center">
          <div className="bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center">
            <FaBriefcase className="text-2xl" style={{ color: '#A66E38' }} /> {/* Work Icon with custom color */}
          </div>
          <span className="ml-4 text-xs font-semibold">
            <TypingText text="Front End Web Developer" /> {/* Typing animation for Title */}
          </span>
        </div>

        {/* Third Box with GitHub Icon */}
        <div className="p-3 bg-gray-200 rounded-full shadow-md w-full max-w-sm text-left flex items-center">
          <div className="bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center">
            <FaGithub className="text-2xl" style={{ color: 'black' }} /> {/* GitHub Icon with custom color */}
          </div>
          <span className="ml-4 text-xs font-semibold">
            <TypingText text="363 Contributions" /> {/* Typing animation for Title */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
