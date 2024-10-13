import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splashscreen from './PRELOADER/Splashscreen';
import App from './TOP/Navbar';
import './CSS/index.css';

const Main = () => {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <StrictMode>
      {loading ? (
        <Splashscreen onFinishLoading={handleFinishLoading} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
           
          </Routes>
        </Router>
      )}
    </StrictMode>
  );
};

// Ensure the root element is present before creating the root
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Main />);
} else {
  console.error("Root element not found!");
}
