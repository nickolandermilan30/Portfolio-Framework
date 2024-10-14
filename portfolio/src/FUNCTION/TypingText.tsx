import React, { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setIsTyping(false); // Stop typing
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setIsTyping(true); // Start typing again
        }, 1000); // Pause before restarting
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [index, text]);

  return (
    <div className="flex items-center">
      <span className="text-lg">{displayedText}</span>
      {isTyping && (
        <div
          className="ml-1"
          style={{
            width: '10px', // Adjust width for the box
            height: '24px', // Adjust height for the box
            backgroundColor: 'blue', // Blue background color for the box
            animation: 'pulse 1s infinite', // Add a pulsing animation
          }}
        />
      )}
    </div>
  );
};

export default TypingText;
