import React from 'react';
import { Shield, CheckCircle, Clock, Zap, Award } from 'lucide-react';

const RecommendedMethods: React.FC = () => {
  const methods = [
    {
      name: 'HWID',
      icon: <Shield className="text-green-400" size={32} />,
      description: 'Digital License',
      features: [
        'Permanent activation',
        'No KMS involved',
        'Windows 10/11 only',
        'Survives reinstalls'
      ],
      type: 'Windows',
      color: 'green'
    },
    {
      name: 'Ohook',
      icon: <Zap className="text-blue-400" size={32} />,
      description: 'Clean Office Activation',
      features: [
        'Permanent for Office 2016–2021',
        'No background tasks',
        'Clean activation method',
        'No KMS required'
      ],
      type: 'Office',
      color: 'blue'
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              RECOMMENDED METHODS
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Our top picks for permanent activation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-black border border-green-400 rounded-lg p-4 sm:p-6 hover:border-green-300 transition-all duration-300"
            >
              <div className="text-center mb-6">
                {method.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 mb-2">
                  {method.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  {method.description}
                </p>
                <div className="mt-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    method.color === 'green' 
                      ? 'bg-green-600 text-black'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {method.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                {method.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={14} />
                    <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center mb-2">
                  <Clock className="text-green-400 mr-2" size={14} />
                  <span className="text-green-400 font-semibold text-xs sm:text-sm">Activation Time</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {method.name === 'HWID' ? '2-3 minutes' : '1-2 minutes'}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-black border border-green-400 rounded-lg p-4 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4">
              Why These Methods?
            </h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Permanent Solution</p>
                  <p className="text-gray-300 text-xs">
                    Unlike KMS methods, these don't require renewal
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">No Background Services</p>
                  <p className="text-gray-300 text-xs">
                    Clean activation without running background tasks
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" size={14} />
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Microsoft-Compatible</p>
                  <p className="text-gray-300 text-xs">
                    Uses legitimate Microsoft activation mechanisms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedMethods;