import React, { useMemo } from 'react';
import './HeartConfetti.css';

const HeartConfetti = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 4}s`, // between 4 and 7 seconds
        animationDelay: `${Math.random() * 5}s`,
      },
    }));
  }, []);

  return (
    <div className="confetti-container">
      {hearts.map(heart => (
        <div key={heart.id} className="confetti-heart" style={heart.style}></div>
      ))}
    </div>
  );
};

export default HeartConfetti;
