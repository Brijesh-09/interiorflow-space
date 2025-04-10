
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const increment = Math.random() * 10 + 5;
          return Math.min(prevProgress + increment, 100);
        });
      } else {
        setFadeOut(true);
        setTimeout(onFinished, 1000);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [progress, onFinished]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute w-full h-full animate-morph bg-gold-light/10 border border-gold-light/20"></div>
        <div className="absolute w-full h-full animate-morph animation-delay-200 bg-gold-light/10 border border-gold-light/20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-xl tracking-widest text-gold-light">S.A</span>
        </div>
      </div>
      
      <div className="w-48 h-[2px] bg-beige-dark/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gold-gradient bg-[length:200%_auto] animate-shimmer transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-2 text-xs font-medium text-gold-light">{Math.round(progress)}%</div>
    </div>
  );
};

export default LoadingScreen;
