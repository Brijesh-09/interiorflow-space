
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const increment = Math.random() * 8 + 3;  // Smoother progress increments
          return Math.min(prevProgress + increment, 100);
        });
      } else {
        clearInterval(timer);
        setFadeOut(true);
        setTimeout(onFinished, 1000);
      }
    }, 120);

    return () => clearInterval(timer);
  }, [progress, onFinished]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-beige-light transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Decorative floating elements */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-gold-light/10"
              style={{
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.05,
                transform: `scale(${Math.random() * 0.5 + 0.7})`,
                animation: `float ${Math.random() * 8 + 10}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main loading animation */}
        <div className="relative w-48 h-48 mb-10">
          {/* Animated spinning rings */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-gold-light/30 animate-spin" 
               style={{ animationDuration: '15s' }} />
          
          <div className="absolute inset-[15%] rounded-full border-4 border-dashed border-gold-light/40 animate-spin" 
               style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          
          <div className="absolute inset-[30%] rounded-full border-4 border-dashed border-gold-light/50 animate-spin" 
               style={{ animationDuration: '9s' }} />
          
          {/* Golden dots at interval positions */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-3 h-3 bg-gold-gradient rounded-full animate-pulse"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translateY(-5.5rem) rotate(${-i * 30}deg)`,
                animationDelay: `${i * 0.1}s`,
                opacity: i % 2 === 0 ? 1 : 0.6
              }}
            />
          ))}
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-beige-light rounded-full flex items-center justify-center shadow-lg animate-morph">
              <span className="font-serif text-2xl tracking-widest text-gold-dark">S.A</span>
            </div>
          </div>
        </div>
        
        {/* Stylish progress bar */}
        <div className="relative w-64 h-1 bg-beige-dark/20 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-gold-gradient bg-[length:200%_auto] animate-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress text */}
        <div className="text-xs font-medium text-gold-dark font-serif tracking-widest">
          {Math.round(progress)}%
        </div>
        
        {/* Loading text with wave animation */}
        <div className="mt-5 flex items-center justify-center">
          {['L','O','A','D','I','N','G'].map((letter, i) => (
            <span 
              key={i}
              className="inline-block mx-px font-serif text-xs text-gold-dark/80"
              style={{
                animation: 'float 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
