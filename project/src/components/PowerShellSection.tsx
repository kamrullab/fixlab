import React, { useState } from 'react';
import { Copy, CheckCircle, Terminal, Play, Code2 } from 'lucide-react';

const PowerShellSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = 'irm https://get.activated.win | iex';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div id="powershell-section" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="text-green-400 mr-2" size={24} />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400">
              POWERSHELL ACTIVATION
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 px-4">
            Recommended Method - One Command Does It All
          </p>
          <div className="flex items-center justify-center gap-2">
            <Terminal className="text-green-400" size={16} />
            <span className="text-green-400 text-sm sm:text-base">Run as Administrator</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 sm:p-6 mb-6">
              <div className="flex items-center mb-4">
                <Play className="text-green-400 mr-2" size={18} />
                <h3 className="text-base sm:text-lg font-bold text-white">Quick Start</h3>
              </div>
              <ol className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-green-400 font-bold mr-2">1.</span>
                  <span>Right-click on Windows Start button</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 font-bold mr-2">2.</span>
                  <span>Select "Windows PowerShell (Admin)"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 font-bold mr-2">3.</span>
                  <span>Copy and paste the command below</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 font-bold mr-2">4.</span>
                  <span>Press Enter and follow the menu</span>
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-400 mr-2" size={18} />
                <h3 className="text-base sm:text-lg font-bold text-white">What This Does</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                <li>• Downloads the latest activation scripts</li>
                <li>• Provides interactive menu for all methods</li>
                <li>• Automatically detects your Windows/Office version</li>
                <li>• Applies the best activation method for your system</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-black border border-green-400 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                  <Terminal className="text-green-400 mr-1 sm:mr-2" size={16} />
                  <span className="text-green-400 font-bold text-sm sm:text-base">PowerShell</span>
                  <span className="bg-yellow-500 text-black px-1 sm:px-2 py-1 rounded text-xs font-bold">
                    MOST RECOMMENDED
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    copied
                      ? 'bg-green-600 text-black font-bold shadow-lg'
                      : 'bg-green-600 text-black hover:bg-green-700 font-bold shadow-lg'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="sm:w-4 sm:h-4" />
                      Copy Command
                    </>
                  )}
                </button>
              </div>
              
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <code className="text-green-400 text-xs sm:text-sm md:text-base font-mono break-all">
                  {command}
                </code>
              </div>
              
              <div className="mt-4 text-xs sm:text-sm text-gray-400">
                <p>This command will:</p>
                <p>• Download and execute the activation script</p>
                <p>• Show you an interactive menu</p>
                <p>• Guide you through the activation process</p>
              </div>
            </div>
            
            <div className="mt-6">
              <img
                src="https://github.com/kamrullab/MAS/assets/128359757/0d1bfe80-8338-4ef0-b110-2d7b69576014"
                alt="PowerShell Activation Screenshot"
                className="w-full rounded-lg border border-green-400 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerShellSection;