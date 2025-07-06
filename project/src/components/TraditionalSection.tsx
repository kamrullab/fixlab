import React from 'react';
import { Download, FolderOpen, Settings, ExternalLink, Archive } from 'lucide-react';

const TraditionalSection: React.FC = () => {
  const downloadLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kamrullab/MAS',
      icon: <ExternalLink className="text-green-400" size={20} />
    },
    {
      name: 'Bitbucket',
      url: 'https://bitbucket.org/WindowsAddict/microsoft-activation-scripts',
      icon: <ExternalLink className="text-green-400" size={20} />
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Archive className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              TRADITIONAL ACTIVATION
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Download and Run Manually
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <div className="bg-black border border-green-400 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
                <Settings className="text-green-400 mr-2" size={24} />
                Step-by-Step Guide
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Download the .zip</h4>
                    <p className="text-gray-300 text-xs">
                      Get the latest version from GitHub or Bitbucket
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Extract the file</h4>
                    <p className="text-gray-300 text-xs">
                      Unzip to a folder on your desktop
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Go to All-In-One-Version</h4>
                    <p className="text-gray-300 text-xs">
                      Navigate to the All-In-One-Version folder
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 text-xs">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">Run AIO.cmd as admin</h4>
                    <p className="text-gray-300 text-xs">
                      Right-click → "Run as administrator"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-black border border-green-400 rounded-lg p-4 mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
                <Download className="text-green-400 mr-2" size={24} />
                Download Options
              </h3>
              
              <div className="space-y-3">
                {downloadLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gray-800 border border-green-400 rounded-lg p-3 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      {link.icon}
                      <span className="text-white font-semibold ml-2 text-xs sm:text-sm">
                        {link.name}
                      </span>
                    </div>
                    <span className="text-green-400">→</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center mb-2">
                  <FolderOpen className="text-green-400 mr-2" size={14} />
                  <span className="text-white font-semibold text-xs sm:text-sm">Quick Download</span>
                </div>
                <a
                  href="https://github.com/kamrullab/MAS/archive/refs/heads/main.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Direct ZIP Download
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-green-400 rounded-lg p-4">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                Important Notes
              </h3>
              <ul className="space-y-1 text-gray-300 text-xs sm:text-sm">
                <li>• Disable antivirus temporarily during activation</li>
                <li>• Always run as administrator</li>
                <li>• Windows Defender may show false positives</li>
                <li>• Create a restore point before proceeding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalSection;