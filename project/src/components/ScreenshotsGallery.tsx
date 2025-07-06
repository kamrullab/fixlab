import React, { useState } from 'react';
import { X, ZoomIn, Image as ImageIcon, Camera } from 'lucide-react';

const ScreenshotsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const screenshots = [
    {
      url: 'https://github.com/kamrullab/MAS/assets/128359757/0d1bfe80-8338-4ef0-b110-2d7b69576014',
      title: 'PowerShell Activation Command',
      description: 'Running the activation command in PowerShell'
    },
    {
      url: 'https://github.com/kamrullab/MAS/assets/128359757/f5aad884-a250-4502-847e-aca96eb3f229',
      title: 'Activation Menu Interface',
      description: 'Interactive menu with all activation options'
    },
    {
      url: 'https://github.com/kamrullab/MAS/assets/128359757/2a494b71-3bf2-40a3-a2ce-677a1770cea6',
      title: 'HWID Activation Process',
      description: 'Windows digital license activation in progress'
    },
    {
      url: 'https://github.com/kamrullab/MAS/assets/128359757/bc4a3437-0468-4c4a-82fc-a89bf0fbe890',
      title: 'Activation Status Check',
      description: 'Checking current activation status and validity'
    }
  ];

  const openImage = (url: string) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              SCREENSHOTS GALLERY
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Visual guide to the activation process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-black border border-green-400 rounded-lg p-4 hover:border-green-300 transition-all duration-300"
            >
              <div className="relative group cursor-pointer" onClick={() => openImage(screenshot.url)}>
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full rounded-lg border border-gray-700 shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <ZoomIn className="text-green-400" size={24} />
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center">
                  <ImageIcon className="text-green-400 mr-2" size={16} />
                  {screenshot.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-full max-h-full">
              <button
                onClick={closeImage}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300 z-10"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="max-w-full max-h-full rounded-lg border border-green-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotsGallery;