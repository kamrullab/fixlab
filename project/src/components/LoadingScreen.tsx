import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('FIX LAB');
  const [loadingMessage, setLoadingMessage] = useState('Initializing...');

  useEffect(() => {
    const messages = [
      'Initializing...',
      'Loading activation modules...',
      'Preparing PowerShell environment...',
      'Connecting to secure servers...',
      'Almost ready...'
    ];
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const newProgress = prev + 4;
        
        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * messages.length);
        if (messageIndex < messages.length) {
          setLoadingMessage(messages[messageIndex]);
        }
        
        return newProgress;
      });
    }, 80);

    const glitchInterval = setInterval(() => {
      const glitchVariations = ['FIX LAB', 'F1X L4B', 'FIX_LAB', 'F!X LAB', 'FIX-LAB'];
      setGlitchText(glitchVariations[Math.floor(Math.random() * glitchVariations.length)]);
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  const createProgressBar = () => {
    const blocks = Array.from({ length: 20 }, (_, i) => {
      const isActive = i < Math.floor(progress / 5);
      return (
        <span
          key={i}
          className={`inline-block w-2 h-4 mx-0.5 transition-all duration-300 ${
            isActive ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-gray-800'
          } rounded-sm`}
        />
      );
    });
    return blocks;
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 gap-1 h-full animate-pulse">
          {Array.from({ length: 400 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-green-400 rounded-full"
              style={{ 
                animationDelay: `${i * 0.05}s`,
                opacity: Math.random() > 0.7 ? 1 : 0
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-green-400 mb-6 glitch-text text-shadow">
            {glitchText}
          </h1>
          <div className="mb-8 bg-black bg-opacity-50 rounded-lg p-4 border border-green-400">
            {createProgressBar()}
          </div>
          <div className="space-y-2">
            <p className="text-green-400 text-xl font-semibold animate-pulse">
              {loadingMessage}
            </p>
            <p className="text-gray-400 text-lg">
              {progress}%
            </p>
          </div>
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center mt-8">
          <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* System status indicators */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="bg-black bg-opacity-50 border border-green-400 rounded p-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse"></div>
            <p className="text-xs text-gray-300">SYSTEM</p>
          </div>
          <div className="bg-black bg-opacity-50 border border-green-400 rounded p-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <p className="text-xs text-gray-300">NETWORK</p>
          </div>
          <div className="bg-black bg-opacity-50 border border-green-400 rounded p-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <p className="text-xs text-gray-300">SECURE</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .glitch-text {
          animation: glitch 0.8s infinite;
        }
        
        .text-shadow {
          text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;