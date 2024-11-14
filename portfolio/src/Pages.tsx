import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Splashscreen from './PRELOADER/Splashscreen';
import App from './TOP/StartPoint';
import AboutUs from './WORK MODE/AboutMe';
import Socials from './WORK MODE/Service';
import ProjCard from './WORK MODE/ProjectCard';
import Art from './TOP/Art';
import './CSS/index.css';
import './CSS/Transition/transitions.css';

// Define prop types for Splashscreen component if it's expecting props
interface SplashscreenProps {
  onFinishLoading: () => void;
}

const Main: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <StrictMode>
      {loading ? (
        <Splashscreen onFinishLoading={handleFinishLoading as SplashscreenProps['onFinishLoading']} />
      ) : (
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/ProjCard" element={<ProjCard />} />
              <Route path="/Art-page" element={<Art />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      )}
    </StrictMode>
  );
};

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
