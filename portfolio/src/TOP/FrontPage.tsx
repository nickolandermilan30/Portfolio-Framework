
import ProgressBar from '../MIDDLE/ProgressBar';
import myPicture from '../assets/Images/My Picture.jpg'; // Adjust the path accordingly

const FrontPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Card containing the oval image, moved higher */}
      <div className="bg-white shadow-md rounded-full p-6 mt-[-200px]"> 
        <img
          src={myPicture}
          alt="Background"
          className="rounded-full w-72 h-96 object-cover" // Oval shape
        />
      </div>

      {/* The ProgressBar is rendered below the card */}
      <div className="mt-8 w-full">
        <ProgressBar />
      </div>
    </div>
  );
}

export default FrontPage;
