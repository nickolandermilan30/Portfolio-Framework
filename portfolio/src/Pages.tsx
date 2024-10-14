import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Splashscreen from './PRELOADER/Splashscreen';
import App from './TOP/Navbar';
import AboutUs from './WORK MODE/AboutUs'; // Import AboutUs
import './CSS/index.css';
import './CSS/transitions.css'; // Import your custom transitions CSS

const Main = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get the current location

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <StrictMode>
      {loading ? (
        <Splashscreen onFinishLoading={handleFinishLoading} />
      ) : (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<AboutUs />} /> {/* Add route for AboutUs */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      )}
    </StrictMode>
  );
};

// Ensure the root element is present before creating the root
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Router>
      <Main />
    </Router>
  );
} else {
  console.error("Root element not found!");
}
