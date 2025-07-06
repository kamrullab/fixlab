import React, { useState } from 'react';
import { Copy, CheckCircle, Terminal, Play, Code2, Shield, Zap } from 'lucide-react';

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
    <div id="powershell-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="text-green-400 mr-2" size={20} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              POWERSHELL ACTIVATION
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 px-4">
            Recommended Method - One Command Does It All
          </p>
          <div className="flex items-center justify-center gap-2">
            <Terminal className="text-green-400" size={16} />
            <span className="text-green-400 text-sm sm:text-base font-semibold">Run as Administrator</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Quick Start Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Play className="text-green-400 mr-2" size={18} />
              <h3 className="text-base sm:text-lg font-bold text-white">Quick Start Guide</h3>
            </div>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 text-xs">1</span>
                <div>
                  <p className="font-semibold text-white text-sm">Right-click Windows Start</p>
                  <p className="text-xs text-gray-400">Access the context menu</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 text-xs">2</span>
                <div>
                  <p className="font-semibold text-white text-sm">Select PowerShell (Admin)</p>
                  <p className="text-xs text-gray-400">Choose administrator option</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 text-xs">3</span>
                <div>
                  <p className="font-semibold text-white text-sm">Paste the command</p>
                  <p className="text-xs text-gray-400">Copy from the command box</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 text-xs">4</span>
                <div>
                  <p className="font-semibold text-white text-sm">Press Enter & Follow</p>
                  <p className="text-xs text-gray-400">Interactive menu will appear</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Command Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Terminal className="text-green-400 mr-2" size={18} />
                <span className="text-green-400 font-bold text-sm sm:text-base">PowerShell Command</span>
              </div>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </span>
            </div>
            
            <div className="bg-black border border-gray-700 rounded-lg p-3 mb-4">
              <code className="text-green-400 text-xs sm:text-sm font-mono break-all block">
                {command}
              </code>
            </div>

            <div className="flex justify-center">
            <button
              onClick={copyToClipboard}
              className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-bold ${
                copied
                  ? 'bg-green-600 text-black shadow-lg transform scale-105'
                  : 'bg-green-600 text-black hover:bg-green-700 shadow-lg hover:transform hover:scale-105'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-gray-400 space-y-1">
              <p className="flex items-center"><Zap className="text-green-400 mr-2" size={14} />Downloads latest scripts</p>
              <p className="flex items-center"><Shield className="text-green-400 mr-2" size={14} />100% safe and open-source</p>
              <p className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={14} />Interactive menu guidance</p>
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-green-400 mr-2" size={18} />
              <h3 className="text-base sm:text-lg font-bold text-white">What This Does</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <h4 className="text-green-400 font-semibold mb-1 text-sm">Automatic Detection</h4>
                <p className="text-gray-300 text-xs">Identifies your Windows and Office versions</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <h4 className="text-green-400 font-semibold mb-1 text-sm">Best Method Selection</h4>
                <p className="text-gray-300 text-xs">Recommends optimal activation method</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <h4 className="text-green-400 font-semibold mb-1 text-sm">Interactive Menu</h4>
                <p className="text-gray-300 text-xs">User-friendly interface with guidance</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <h4 className="text-green-400 font-semibold mb-1 text-sm">Latest Scripts</h4>
                <p className="text-gray-300 text-xs">Always downloads recent activation tools</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Screenshot */}
        <div className="text-center">
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 sm:mb-6">PowerShell in Action</h3>
            <img
              src="https://github.com/kamrullab/MAS/assets/128359757/0d1bfe80-8338-4ef0-b110-2d7b69576014"
              alt="PowerShell Activation Screenshot"
              className="w-full rounded-lg border border-green-400 shadow-2xl"
              loading="lazy"
            />
            <p className="text-gray-300 mt-3 sm:mt-4 text-sm">Live demonstration of the activation process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerShellSection;