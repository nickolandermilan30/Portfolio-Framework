const Information: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between py-12 px-6 md:px-20 bg-white space-y-10 md:space-y-0 md:space-x-10">
      {/* About Me Section */}
      <div className="flex flex-col items-start md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Personal <span className="text-blue-600">Information</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-gray-600 text-lg">
          <p><strong>First Name:</strong> Nicko Lander</p>
          <p><strong>Last Name:</strong> Milan</p>
          <p><strong>Age:</strong> 23 Years</p>
          <p><strong>Nationality:</strong> Filipino</p>
          <p><strong>City:</strong> Sariaya</p>
          <p><strong>Address:</strong> Manggalang 1 Sariaya Quezon</p>
          <p><strong>Phone:</strong> +63 951 074 6215</p>
          <p><strong>Email:</strong> nickolandermilan30@gmail.com</p>
          <p><strong>Languages:</strong> English, Filipino</p>
          <p><strong>LinkedIn:</strong> Nicko Lander Rosales Milan</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-6 mt-14 md:mt-0 md:w-1/2">
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg space-y-2">
          <span className="text-4xl font-bold text-blue-600">1 Year</span>
          <span className="text-gray-600 text-center">Freelance Experience</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg space-y-2">
          <span className="text-4xl font-bold text-blue-600">10+</span>
          <span className="text-gray-600 text-center">Completed Projects</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg space-y-2">
          <span className="text-4xl font-bold text-blue-600">10+</span>
          <span className="text-gray-600 text-center">Mobile Application Projects</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg space-y-2">
          <span className="text-4xl font-bold text-blue-600">6+</span>
          <span className="text-gray-600 text-center">Web Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
