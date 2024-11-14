import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import Navbar_WM from './Navbar_WM';
import backgroundImage from '../assets/Images/background.jpg';
import profileImage from '../assets/Images/My Picture.jpg';
import Info from './Information';
import PersonalInfo from './Perosnal_Info';
import Complete from './Accomplishment';
import Education from './Education';

const AboutUs: React.FC = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/drive/folders/1QuyCXcz6kiP_ZwfIiz-NxnVnVh5CezPN?usp=sharing', '_blank');
  };

  const handleCoverLetterClick = () => {
    window.open('https://drive.google.com/drive/folders/1pdNwJSISI0392v30pW-oBd7Vb9FQAhyX?usp=sharing', '_blank');
  };


  const handleSendGmailClick = () => {
    const email = 'nickolandermilan30@gmail.com';
    const subject = 'Hello';
    const body = 'Hi there,';
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
  };

  return (
    <div
      className="h-60 bg-gray-500 p-4 relative"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar_WM />

      <div className="flex flex-col items-center mt-20">
        <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center">
          <img src={profileImage} alt="Profile" className="rounded-full w-36 h-36 object-cover" />
        </div>
        <div className="text-black text-4xl font-bold mt-4 text-center">Nicko Lander Rosales Milan</div>
        <div className="flex mt-4 space-x-2">
          <button
            onClick={handleResumeClick}
            className="flex items-center px-3 py-1 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 text-sm"
          >
            <FaFileAlt className="mr-1" />
            <span>Resume</span>
          </button>
          <button
            onClick={handleCoverLetterClick}
            className="flex items-center px-3 py-1 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 text-sm"
          >
            <FaFileAlt className="mr-1" />
            <span>Cover letter</span>
          </button>
          <button
            onClick={handleSendGmailClick}
            className="flex items-center px-3 py-1 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-800 hover:text-white transition duration-300 text-sm"
          >
            <AiFillMail className="mr-1" />
            <span>Send Gmail</span>
          </button>
        </div>
      </div>

      {/* About Me and Personal Info section */}
      <div className="flex flex-col md:flex-row justify-center mt-8 md:space-x-4 space-y-4 md:space-y-0">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[700px] flex-1">
          <div className="text-black text-4xl mb-3 text-center md:text-left">About Me</div>
          <p className="text-gray-800 text-xl text-center md:text-left">
            I am Nicko Lander Rosales Milan, a conscientious and dedicated IT graduate with a strong sense of responsibility and exceptional time management skills.
            I adapt flexibly to diverse tasks and am known for my diligent work ethic.
            My experience spans front-end development using tools like VS Code, MongoDB Compass, and Next.js, with a solid foundation in HTML, CSS, TypeScript, and JavaScript.
            Having freelanced in web and mobile applications, I bring skills in UI/UX design, SEO, and backend knowledge with Java and Python.
            Deeply committed to assisting your company in achieving its goals, I am confident my dedication and skills will make a meaningful, positive impact.
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-lg flex-1">
          <PersonalInfo />
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <Complete />
      </div>

      <div className="flex justify-center mt-20">
        <Info />
      </div>

      <div className="flex justify-center mt-20">
        <Education />
      </div>

      <div className="h-20" />
    </div>
  );
};

export default AboutUs;
