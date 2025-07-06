import React from 'react';
import { Settings, ExternalLink, Zap, Bot } from 'lucide-react';

const UnattendedMode: React.FC = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Bot className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              SILENT ACTIVATION MODE
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Automated activation without user interaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <Zap className="text-green-400 mr-2" size={20} />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  What is Unattended Mode?
                </h3>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                Unattended mode allows you to activate Windows and Office without any user interface. 
                This is perfect for automation scripts, system deployment, or when you need to activate 
                multiple machines without manual intervention.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black border border-green-400 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm">Perfect for:</h4>
                  <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
                    <li>• System administrators</li>
                    <li>• Automated deployment scripts</li>
                    <li>• Batch activation of multiple PCs</li>
                    <li>• Silent installation processes</li>
                  </ul>
                </div>
                
                <div className="bg-black border border-green-400 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm">Features:</h4>
                  <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
                    <li>• No user interaction required</li>
                    <li>• Runs completely in background</li>
                    <li>• Automatic method selection</li>
                    <li>• Detailed logging for troubleshooting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <Settings className="text-green-400 mr-2" size={20} />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  How to Use
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-black border border-gray-700 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2 text-xs sm:text-sm">Command Line:</h4>
                  <code className="text-green-400 text-xs break-all">
                    powershell -Command "irm https://get.activated.win | iex" -WindowStyle Hidden
                  </code>
                </div>
                
                <div className="bg-black border border-gray-700 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2 text-xs sm:text-sm">Batch File:</h4>
                  <code className="text-green-400 text-xs">
                    @echo off<br/>
                    powershell -ExecutionPolicy Bypass -Command "irm https://get.activated.win | iex"
                  </code>
                </div>
              </div>
              
              <a
                href="https://massgrave.dev/unsupported_products_activation.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-black font-bold py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                Learn More About Unattended Mode
              </a>
            </div>
            
            <div className="mt-6 bg-black border border-yellow-400 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold mb-2 text-xs sm:text-sm">Important Notes:</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                <li>• Test on a single machine first</li>
                <li>• Ensure proper execution policy is set</li>
                <li>• Monitor logs for any issues</li>
                <li>• Use with appropriate administrative privileges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnattendedMode;