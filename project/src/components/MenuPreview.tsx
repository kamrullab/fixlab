import React from 'react';
import { Monitor, FileText, Star, Layout, Zap, Shield, Clock, Award } from 'lucide-react';

const MenuPreview: React.FC = () => {
  const menuOptions = [
    {
      id: '[1]',
      name: 'HWID',
      icon: <Monitor className="text-green-400" size={20} />,
      description: 'Digital License for Windows 10/11',
      features: ['Permanent activation', 'No KMS involved', 'Survives reinstalls'],
      badge: 'Most Popular',
      badgeColor: 'bg-blue-600'
    },
    {
      id: '[2]',
      name: 'Ohook',
      icon: <FileText className="text-blue-400" size={20} />,
      description: 'Clean Office Activation (2016-2021)',
      features: ['Permanent for Office', 'No background tasks', 'Clean method'],
      badge: 'Recommended',
      badgeColor: 'bg-green-600'
    },
    {
      id: '[3]',
      name: 'KMS38',
      icon: <Clock className="text-purple-400" size={20} />,
      description: 'Windows/Server activation till 2038',
      features: ['Long-term activation', 'Server compatible', 'Reliable method'],
      badge: 'Server',
      badgeColor: 'bg-purple-600'
    },
    {
      id: '[4]',
      name: 'Online KMS',
      icon: <Zap className="text-yellow-400" size={20} />,
      description: '180 Days + auto-renewal',
      features: ['Auto-renewal', 'Wide compatibility', 'Fallback option'],
      badge: 'Compatible',
      badgeColor: 'bg-yellow-600'
    }
  ];

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Layout className="text-green-400 mr-2" size={20} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              ACTIVATION MENU PREVIEW
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Interactive menu with all activation options
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Menu Screenshot */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base sm:text-lg font-bold text-white">Live Menu Interface</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <img
                src="https://github.com/kamrullab/MAS/assets/128359757/f5aad884-a250-4502-847e-aca96eb3f229"
                alt="Activation Menu Screenshot"
                className="w-full rounded-lg border border-green-400 shadow-2xl"
                loading="lazy"
              />
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-black border border-green-400 rounded-lg">
                <p className="text-green-400 font-semibold mb-2 text-sm">Terminal Features:</p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                  <li>• Real-time system detection</li>
                  <li>• Color-coded menu options</li>
                  <li>• Progress indicators</li>
                  <li>• Error handling & troubleshooting</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Menu Options */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Award className="text-green-400 mr-2" size={18} />
                <h3 className="text-base sm:text-lg font-bold text-white">Available Options</h3>
              </div>
              
              <div className="space-y-3">
                {menuOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-black border border-green-400 rounded-lg p-3 sm:p-4 hover:border-green-300 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-green-400 font-bold text-sm mr-2">{option.id}</span>
                        {option.icon}
                        <span className="text-white font-bold text-sm ml-2">{option.name}</span>
                        <Star className="text-yellow-400 ml-1" size={12} />
                      </div>
                      <span className={`${option.badgeColor} text-white px-2 py-1 rounded-full text-xs font-bold`}>
                        {option.badge}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-2 text-xs sm:text-sm">{option.description}</p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {option.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-800 text-green-400 px-1 sm:px-2 py-1 rounded text-xs border border-green-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Menu Features */}
            <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Shield className="text-green-400 mr-2" size={16} />
                <h4 className="text-base sm:text-lg font-bold text-white">Smart Menu Features</h4>
              </div>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="bg-black border border-green-400 rounded-lg p-3">
                  <h5 className="text-green-400 font-semibold mb-1 text-sm">Auto-Detection</h5>
                  <p className="text-gray-300 text-xs">Detects Windows/Office version and recommends best method</p>
                </div>
                
                <div className="bg-black border border-green-400 rounded-lg p-3">
                  <h5 className="text-green-400 font-semibold mb-1 text-sm">Status Check</h5>
                  <p className="text-gray-300 text-xs">Shows current activation status and validity period</p>
                </div>
                
                <div className="bg-black border border-green-400 rounded-lg p-3">
                  <h5 className="text-green-400 font-semibold mb-1 text-sm">Troubleshooting</h5>
                  <p className="text-gray-300 text-xs">Built-in diagnostic tools and error resolution</p>
                </div>
                
                <div className="bg-black border border-green-400 rounded-lg p-3">
                  <h5 className="text-green-400 font-semibold mb-1 text-sm">Progress Tracking</h5>
                  <p className="text-gray-300 text-xs">Real-time progress indicators and detailed logs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;