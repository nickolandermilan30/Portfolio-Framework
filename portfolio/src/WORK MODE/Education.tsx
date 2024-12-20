import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

interface ItemProps {
  icon: typeof faBriefcase | typeof faGraduationCap;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
}

// Single Item Component for Experience or Education
const Item: React.FC<ItemProps> = ({ icon, year, title, subtitle, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
          <FontAwesomeIcon icon={icon} />
        </div>
        {/* Line below icon */}
        <div className="w-px h-20 bg-gray-300"></div>
      </div>
      <div>
        <span className="bg-gray-200 text-gray-700 text-sm font-semibold rounded-full px-2 py-1">{year}</span>
        <h3 className="text-xl font-semibold mt-2">
          {title}
          {subtitle && <span className="text-gray-500 text-base font-normal ml-2">{subtitle}</span>}
        </h3>
        <p className="text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Experience & Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Additional Experience Item */}
        <Item
          icon={faBriefcase}
          year="April 2024 - Sept 2024"
          title="Freelance Graphic & Video Designer"
          description="Designed banners and videos with SEO strategies for improved visibility. Created engaging video content using Canva and supported administrative tasks with client-focused outputs."
        />

        {/* Experience Item */}
        <Item
          icon={faBriefcase}
          year="2023 - 2024"
          title="Capstone Project"
          description="Developed an Android application using machine learning, Java, and Firebase in Android Studio. Ensured design adherence, conducted manual testing, and applied Extreme Programming practices to maintain deployment quality."
        />

        {/* Education Item */}
        <Item
          icon={faGraduationCap} 
          year="July 15, 2024"
          title="Graduating BSIT"
          description="Graduated with a Bachelor’s degree in Information Technology, equipped with foundational and practical skills in software and web development."
        />

        {/* Experience Item */}
        <Item
          icon={faBriefcase}
          year="April 2024 - Nov 2024"
          title="EUnivate (Freelancing)"
          description="Built a fully responsive website using React.js, Vite, Express.js, Tailwind CSS, and MongoDB. Implemented APIs, conducted manual testing, and resolved frontend, backend, and database issues."
        />

        {/* Education Item with Subtitle */}
        <Item
          icon={faGraduationCap} 
          year="Currently"
          title="Web Development -"
          subtitle="Learning"
          description="I am studying web development to deepen my understanding of creating responsive and functional websites, enhance my technical skills, and effectively contribute to projects by utilizing modern frameworks and technologies, as demonstrated by my previous work experiences and educational background."
        />

         {/* Education Item with Subtitle */}
         <Item
          icon={faGraduationCap} 
          year="Currently"
          title="Android Development -"
          subtitle="Learning"
          description="studying application development to enhance my skills in creating innovative solutions, improve my career opportunities, and contribute to the growing demand for efficient and user-friendly digital applications."
        />

      </div>
    </div>
  );
}

export default Education;
