import React, { useEffect, useState } from 'react';
import '../CSS/Splashscreen.css'; // Importing the custom CSS

const Splashscreen = ({ onFinishLoading }: { onFinishLoading: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false); // State to control showing "WELCOME"

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowWelcome(true); // Show "WELCOME" after "HELLO" animation

      // Adjust the timeout to align with the animations
      setTimeout(onFinishLoading, 900); // Call the callback to notify that loading is complete after showing "WELCOME"
    }, 5000); // 5 seconds total loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onFinishLoading]);

  return (
    loading ? (
      <div className="relative h-screen w-screen overflow-hidden bg-gray-800 flex items-center justify-center">
        <div className="text-9xl text-white font-bold flex falling-hello">
          <span className="falling" style={{ animationDelay: '0s' }}>H</span>
          <span className="rising" style={{ animationDelay: '0.2s' }}>E</span>
          <span className="falling" style={{ animationDelay: '0.4s' }}>L</span>
          <span className="rising" style={{ animationDelay: '0.6s' }}>L</span>
          <span className="falling" style={{ animationDelay: '0.8s' }}>O</span>
        </div>
      </div>
    ) : (
      <div className="relative h-screen w-screen overflow-hidden bg-gray-800 flex items-center justify-center">
        <div className="text-9xl text-white font-bold sliding-welcome">
          WELCOME
        </div>
      </div>
    )
  );
};

export default Splashscreen;
