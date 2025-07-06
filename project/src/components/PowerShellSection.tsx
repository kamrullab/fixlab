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
            <Code2 className="text-green-400 mr-3" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">
              POWERSHELL ACTIVATION
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 px-4">
            Recommended Method - One Command Does It All
          </p>
          <div className="flex items-center justify-center gap-3">
            <Terminal className="text-green-400" size={20} />
            <span className="text-green-400 text-lg font-semibold">Run as Administrator</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Quick Start Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-xl p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Play className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Quick Start Guide</h3>
            </div>
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 text-sm">1</span>
                <div>
                  <p className="font-semibold text-white">Right-click Windows Start</p>
                  <p className="text-sm">Access the context menu</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 text-sm">2</span>
                <div>
                  <p className="font-semibold text-white">Select PowerShell (Admin)</p>
                  <p className="text-sm">Choose administrator option</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 text-sm">3</span>
                <div>
                  <p className="font-semibold text-white">Paste the command</p>
                  <p className="text-sm">Copy from the command box</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 text-sm">4</span>
                <div>
                  <p className="font-semibold text-white">Press Enter & Follow</p>
                  <p className="text-sm">Interactive menu will appear</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Command Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-xl p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Terminal className="text-green-400 mr-3" size={24} />
                <span className="text-green-400 font-bold text-xl">PowerShell Command</span>
              </div>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </span>
            </div>
            
            <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
              <code className="text-green-400 text-lg font-mono break-all block">
                {command}
              </code>
            </div>

            <button
              onClick={copyToClipboard}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 text-base font-bold ${
                copied
                  ? 'bg-green-600 text-black shadow-lg transform scale-105'
                  : 'bg-green-600 text-black hover:bg-green-700 shadow-lg hover:transform hover:scale-105'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle size={18} />
                  Command Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Command
                </>
              )}
            </button>

            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p className="flex items-center"><Zap className="text-green-400 mr-2" size={16} />Downloads latest scripts automatically</p>
              <p className="flex items-center"><Shield className="text-green-400 mr-2" size={16} />100% safe and open-source</p>
              <p className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={16} />Interactive menu guidance</p>
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-xl p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">What This Does</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black border border-green-400 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Automatic Detection</h4>
                <p className="text-gray-300 text-sm">Identifies your Windows and Office versions automatically</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Best Method Selection</h4>
                <p className="text-gray-300 text-sm">Recommends optimal activation method for your system</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Interactive Menu</h4>
                <p className="text-gray-300 text-sm">User-friendly interface with step-by-step guidance</p>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Latest Scripts</h4>
                <p className="text-gray-300 text-sm">Always downloads the most recent activation tools</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Screenshot */}
        <div className="text-center">
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-xl p-6 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 mb-6">PowerShell in Action</h3>
            <img
              src="https://github.com/kamrullab/MAS/assets/128359757/0d1bfe80-8338-4ef0-b110-2d7b69576014"
              alt="PowerShell Activation Screenshot"
              className="w-full rounded-lg border border-green-400 shadow-2xl"
              loading="lazy"
            />
            <p className="text-gray-300 mt-4">Live demonstration of the activation process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerShellSection;