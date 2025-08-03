
import React from 'react';
import './SplitText.css';

const SplitText = ({ text, speed, revealSpeed, style }) => {
  const characters = text.split('');

  return (
    <div className="split-text" style={style}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            animationDelay: `${index * speed}ms`,
            animationDuration: `${revealSpeed}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
