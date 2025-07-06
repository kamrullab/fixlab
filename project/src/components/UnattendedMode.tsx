import React from 'react';
import { Settings, ExternalLink, Zap, Bot, Terminal, Code, Shield, CheckCircle } from 'lucide-react';

const UnattendedMode: React.FC = () => {
  const features = [
    {
      icon: <Bot className="text-green-400" size={20} />,
      title: 'No User Interaction',
      description: 'Runs completely in background without prompts'
    },
    {
      icon: <Zap className="text-blue-400" size={20} />,
      title: 'Auto Method Selection',
      description: 'Automatically chooses best activation method'
    },
    {
      icon: <Shield className="text-purple-400" size={20} />,
      title: 'Detailed Logging',
      description: 'Comprehensive logs for troubleshooting'
    },
    {
      icon: <Settings className="text-yellow-400" size={20} />,
      title: 'Batch Processing',
      description: 'Perfect for multiple machine deployment'
    }
  ];

  const useCases = [
    'System administrators',
    'Automated deployment scripts',
    'Batch activation of multiple PCs',
    'Silent installation processes',
    'Enterprise environments',
    'Unattended installations'
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
            <Bot className="text-green-400 mr-2" size={20} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              SILENT ACTIVATION MODE
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Automated activation without user interaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* What is Silent Mode */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Zap className="text-green-400 mr-2" size={18} />
              <h3 className="text-base sm:text-lg font-bold text-white">What is Silent Mode?</h3>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              Silent mode allows you to activate Windows and Office without any user interface. 
              Perfect for automation scripts, system deployment, or when you need to activate 
              multiple machines without manual intervention.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-black border border-green-400 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    {feature.icon}
                    <h4 className="text-white font-semibold ml-2 text-xs sm:text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300 md:col-span-2 xl:col-span-1">
            <div className="flex items-center mb-6">
              <Terminal className="text-green-400 mr-2" size={18} />
              <h3 className="text-base sm:text-lg font-bold text-white">Implementation Methods</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <div className="flex items-center mb-3">
                  <Code className="text-green-400 mr-2" size={14} />
                  <h4 className="text-green-400 font-semibold text-xs sm:text-sm">PowerShell Command</h4>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-2">
                  <code className="text-green-400 text-xs break-all">
                    powershell -Command "irm https://get.activated.win | iex" -WindowStyle Hidden
                  </code>
                </div>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <div className="flex items-center mb-3">
                  <Settings className="text-green-400 mr-2" size={14} />
                  <h4 className="text-green-400 font-semibold text-xs sm:text-sm">Batch File (.bat)</h4>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-2">
                  <code className="text-green-400 text-xs">
                    @echo off<br/>
                    powershell -ExecutionPolicy Bypass -Command "irm https://get.activated.win | iex"<br/>
                    pause
                  </code>
                </div>
              </div>
              
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <div className="flex items-center mb-3">
                  <Bot className="text-green-400 mr-2" size={14} />
                  <h4 className="text-green-400 font-semibold text-xs sm:text-sm">Scheduled Task</h4>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-2">
                  <code className="text-green-400 text-xs">
                    schtasks /create /tn "Activation" /tr "powershell -Command 'irm https://get.activated.win | iex'" /sc once /st 00:00
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases & Features */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-green-300 transition-all duration-300 md:col-span-2 xl:col-span-1">
            <div className="flex items-center mb-6">
              <Shield className="text-green-400 mr-2" size={18} />
              <h3 className="text-base sm:text-lg font-bold text-white">Perfect For</h3>
            </div>
            
            <div className="space-y-2 mb-4 sm:mb-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-300 text-xs sm:text-sm">{useCase}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-black border border-green-400 rounded-lg p-3 mb-4 sm:mb-6">
              <h4 className="text-green-400 font-semibold mb-2 text-xs sm:text-sm">Advanced Features</h4>
              <ul className="text-gray-300 text-xs space-y-2">
                <li>• Environment variable support</li>
                <li>• Custom activation parameters</li>
                <li>• Network deployment ready</li>
                <li>• Exit code handling</li>
                <li>• Comprehensive error reporting</li>
                <li>• Registry-based configuration</li>
              </ul>
            </div>
            
            <a
              href="https://massgrave.dev/unsupported_products_activation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-black font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm w-full"
            >
              <ExternalLink size={14} />
              Complete Documentation
            </a>
          </div>
        </div>
        
        {/* Important Notes */}
        <div className="bg-gray-900 bg-opacity-90 border border-yellow-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Settings className="text-yellow-400 mr-2" size={18} />
            <h3 className="text-base sm:text-lg font-bold text-yellow-400">Implementation Guidelines</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Before Deployment</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• Test on a single machine first</li>
                <li>• Verify network connectivity</li>
                <li>• Set proper execution policies</li>
                <li>• Configure antivirus exclusions</li>
                <li>• Prepare rollback procedures</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">During Execution</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• Monitor activation logs</li>
                <li>• Check system resources</li>
                <li>• Verify internet access</li>
                <li>• Handle error conditions</li>
                <li>• Track deployment progress</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Post-Activation</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2">
                <li>• Validate activation status</li>
                <li>• Clean temporary files</li>
                <li>• Update deployment records</li>
                <li>• Re-enable security software</li>
                <li>• Schedule status checks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnattendedMode;