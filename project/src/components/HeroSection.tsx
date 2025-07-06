import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Download, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'The Ultimate Toolkit for Activating Windows & Office';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }, (_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green-400 mb-4 glitch-text">
            FIX LAB
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">by Kamrul</p>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white text-center px-2">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-green-400">
            <Terminal className="text-green-400" size={16} />
            <span className="text-green-400 text-xs sm:text-sm">PowerShell Ready</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-green-400">
            <Shield className="text-green-400" size={16} />
            <span className="text-green-400 text-xs sm:text-sm">100% Safe</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-green-400">
            <Download className="text-green-400" size={16} />
            <span className="text-green-400 text-xs sm:text-sm">Open Source</span>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => {
              document.getElementById('powershell-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-green-400/50 glow flex items-center gap-2 mx-auto"
          >
            <Zap size={18} className="sm:w-5 sm:h-5" />
            START ACTIVATION
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }
        
        .glow {
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        }
        
        .glow:hover {
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.6);
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(-2px, -2px); }
          30% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          70% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, -2px); }
          90% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;