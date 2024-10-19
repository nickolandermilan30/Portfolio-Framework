

import LandPage from '../TOP/LandPage'; // Update this path if necessary
import Media from '../MIDDLE/Media'; // Update this path if necessary

const FrontPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen px-10 pt-10"> 
        <LandPage />
      </div>
      <div className="flex flex-col items-start px-28 pt-10">
        <Media />
      </div>
      
    </div>
  );
}

export default FrontPage;
