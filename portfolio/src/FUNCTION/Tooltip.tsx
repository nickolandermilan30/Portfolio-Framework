import React from 'react';

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div
      className="absolute bg-gray-800 text-white text-sm rounded p-1 transition-opacity duration-300"
      style={{ zIndex: 10, top: '5%', right: '120%', marginLeft: '10rem' }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
