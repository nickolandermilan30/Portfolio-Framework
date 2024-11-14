import React, { useEffect, useState } from 'react';
import '../CSS/Splashscreen.css'; // Import the custom CSS

interface SplashscreenProps {
  onFinishLoading: () => void;
}

const Splashscreen: React.FC<SplashscreenProps> = ({ onFinishLoading }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowWelcome(true);

      // Call the callback to notify that loading is complete after showing "WELCOME"
      setTimeout(onFinishLoading, 900);
    }, 5000); // 5 seconds total loading time

    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-800 flex items-center justify-center">
      {loading ? (
        <div className="text-9xl text-white font-bold splashscreen-falling-hello">
          <span className="splashscreen-falling" style={{ animationDelay: '0s' }}>H</span>
          <span className="splashscreen-rising" style={{ animationDelay: '0.2s' }}>E</span>
          <span className="splashscreen-falling" style={{ animationDelay: '0.4s' }}>L</span>
          <span className="splashscreen-rising" style={{ animationDelay: '0.6s' }}>L</span>
          <span className="splashscreen-falling" style={{ animationDelay: '0.8s' }}>O</span>
        </div>
      ) : showWelcome ? (
        <div className="text-9xl text-white font-bold sliding-welcome">
          WELCOME
        </div>
      ) : null}
    </div>
  );
};

export default Splashscreen;
