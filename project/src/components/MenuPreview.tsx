import React from 'react';
import { Monitor, FileText, Star, Layout } from 'lucide-react';

const MenuPreview: React.FC = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Layout className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              ACTIVATION MENU PREVIEW
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Interactive menu with all activation options
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://github.com/kamrullab/MAS/assets/128359757/f5aad884-a250-4502-847e-aca96eb3f229"
              alt="Activation Menu Screenshot"
              className="w-full rounded-lg border border-green-400 shadow-lg"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                Most Recommended Options
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black border border-green-400 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Monitor className="text-green-400 mr-2" size={16} />
                    <span className="text-white font-bold text-sm sm:text-base">[1] HWID</span>
                    <Star className="text-yellow-400 ml-2" size={14} />
                  </div>
                  <p className="text-gray-300 mb-2 text-xs sm:text-sm">
                    Digital License for Windows 10/11
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-green-600 text-black px-2 py-1 rounded text-xs sm:text-sm">
                      Permanent
                    </span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs sm:text-sm">
                      Most Popular
                    </span>
                  </div>
                </div>
                
                <div className="bg-black border border-green-400 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <FileText className="text-green-400 mr-2" size={16} />
                    <span className="text-white font-bold text-sm sm:text-base">[2] Ohook</span>
                    <Star className="text-yellow-400 ml-2" size={14} />
                  </div>
                  <p className="text-gray-300 mb-2 text-xs sm:text-sm">
                    Clean Office Activation (2016-2021)
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-green-600 text-black px-2 py-1 rounded text-xs sm:text-sm">
                      Permanent
                    </span>
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs sm:text-sm">
                      Office
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm">Menu Features</h4>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• Auto-detects your Windows/Office version</li>
                  <li>• Recommends the best activation method</li>
                  <li>• Shows activation status and validity</li>
                  <li>• Provides troubleshooting options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;