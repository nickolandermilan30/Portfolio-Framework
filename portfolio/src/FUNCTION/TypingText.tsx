import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text = "" }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

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
    <div className="flex items-center justify-center md:justify-start md:ml-48"> {/* Add margin-left on mobile */}
      <span className="text-3xl md:text-4xl">{displayedText}</span> {/* Adjust font size for mobile */}
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
