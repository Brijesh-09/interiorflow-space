
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-beige-light transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
        {/* Outer rotating circle */}
        <div className="absolute w-full h-full rounded-full border-4 border-gold-light/30 animate-spin" style={{ animationDuration: '3s' }}></div>
        
        {/* Inner rotating circle (opposite direction) */}
        <div className="absolute w-3/4 h-3/4 rounded-full border-4 border-gold-light/50 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
        
        {/* Spinner dots */}
        <div className="absolute w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 bg-gold-light rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateY(-16px) translateX(-50%)`,
                opacity: (i % 3 === 0) ? 1 : 0.5
              }}
            ></div>
          ))}
        </div>
        
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-14 h-14 bg-beige-light rounded-full flex items-center justify-center shadow-md">
            <span className="font-serif text-xl tracking-widest text-gold-light">S.A</span>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
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
