import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsDone(true);
              onComplete();
            }, 800); // matches CSS fade transition
          }, 500);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`preloader ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-logo">
        <div className="preloader-cube">
          <div className="cube-face face-front"></div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </div>
        <div className="preloader-cube-inner">
          <div className="cube-face-inner face-inner-front"></div>
          <div className="cube-face-inner face-inner-back"></div>
          <div className="cube-face-inner face-inner-right"></div>
          <div className="cube-face-inner face-inner-left"></div>
          <div className="cube-face-inner face-inner-top"></div>
          <div className="cube-face-inner face-inner-bottom"></div>
        </div>
      </div>
      <div className="preloader-text">
        {progress === 100 ? 'READY' : `LOADING... ${progress}%`}
      </div>
      <div className="preloader-progress">
        <div className="preloader-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
