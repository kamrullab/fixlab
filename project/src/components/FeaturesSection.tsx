import React from 'react';
import { Check, Monitor, FileText, Clock, Settings, AlertCircle, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="text-green-400" size={24} />,
      title: 'HWID (Digital License)',
      description: 'Windows 10/11 permanent activation'
    },
    {
      icon: <FileText className="text-green-400" size={24} />,
      title: 'Ohook',
      description: 'Office 2016–2021 clean activation'
    },
    {
      icon: <Clock className="text-green-400" size={24} />,
      title: 'KMS38',
      description: 'Windows/Server activation till 2038'
    },
    {
      icon: <Settings className="text-green-400" size={24} />,
      title: 'Online KMS',
      description: '180 Days + auto-renewal'
    },
    {
      icon: <AlertCircle className="text-green-400" size={24} />,
      title: 'Change Edition',
      description: 'Check Status, Troubleshoot'
    }
  ];

  return (
    <div className="py-20 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Add futuristic background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
            }}
          />
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Zap className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              ACTIVATION CAPABILITIES
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Comprehensive toolkit for all your activation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center">
                <Check className="text-green-400 mr-2" size={14} />
                <span className="text-green-400 text-xs sm:text-sm">Available</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center relative z-10">
          <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto backdrop-blur-sm">
            {/* Futuristic header image */}
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Futuristic Technology"
                className="w-full h-20 sm:h-24 md:h-32 object-cover rounded-lg border border-green-400 opacity-60"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4">
              Why Choose FIX LAB?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Clean & Safe</h4>
                  <p className="text-gray-300 text-xs">No malware, open-source scripts</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Permanent</h4>
                  <p className="text-gray-300 text-xs">HWID & Ohook methods last forever</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Easy to Use</h4>
                  <p className="text-gray-300 text-xs">One-click PowerShell activation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Regular Updates</h4>
                  <p className="text-gray-300 text-xs">Always up-to-date with latest methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;