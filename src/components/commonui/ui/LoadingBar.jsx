import React from 'react';
import { useState, useEffect } from 'react';

const LoadingBar = ({ isLoading = false, duration = 2000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isLoading && progress < 100) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          const increment = 100 - prevProgress < 10 ? 100 - prevProgress : Math.random() * 10 + 5;
          return Math.min(prevProgress + increment, 99);
        });
      }, duration / 20);
    }

    if (!isLoading) {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isLoading, progress, duration]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: '#f0f0f0',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#2563eb',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default LoadingBar;