import React from 'react';
import { Monitor, Cpu, HardDrive, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const SystemRequirements: React.FC = () => {
  const windowsVersions = [
    { name: 'Windows 11', supported: true, methods: ['HWID', 'KMS38', 'Online KMS'] },
    { name: 'Windows 10', supported: true, methods: ['HWID', 'KMS38', 'Online KMS'] },
    { name: 'Windows 8.1', supported: true, methods: ['KMS38', 'Online KMS'] },
    { name: 'Windows 8', supported: true, methods: ['KMS38', 'Online KMS'] },
    { name: 'Windows 7', supported: false, methods: [] },
    { name: 'Windows Server 2022', supported: true, methods: ['KMS38', 'Online KMS'] },
    { name: 'Windows Server 2019', supported: true, methods: ['KMS38', 'Online KMS'] },
    { name: 'Windows Server 2016', supported: true, methods: ['KMS38', 'Online KMS'] }
  ];

  const officeVersions = [
    { name: 'Office 2021', supported: true, method: 'Ohook' },
    { name: 'Office 2019', supported: true, method: 'Ohook' },
    { name: 'Office 2016', supported: true, method: 'Ohook' },
    { name: 'Office 365', supported: true, method: 'Ohook' },
    { name: 'Office 2013', supported: false, method: '' },
    { name: 'Office 2010', supported: false, method: '' }
  ];

  return (
    <div id="system-requirements" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Futuristic background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
            }}
          />
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Monitor className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              SYSTEM REQUIREMENTS & COMPATIBILITY
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Check if your system is compatible with our activation methods
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {/* Windows Compatibility */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Monitor className="text-green-400 mr-3" size={24} />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Windows Compatibility
              </h3>
            </div>
            
            <div className="space-y-3">
              {windowsVersions.map((version, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    version.supported 
                      ? 'bg-black border-green-400' 
                      : 'bg-gray-800 border-red-400'
                  }`}
                >
                  <div className="flex items-center">
                    {version.supported ? (
                      <CheckCircle className="text-green-400 mr-3" size={16} />
                    ) : (
                      <AlertCircle className="text-red-400 mr-3" size={16} />
                    )}
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {version.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {version.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className="bg-green-600 text-black px-2 py-1 rounded text-xs font-bold"
                      >
                        {method}
                      </span>
                    ))}
                    {!version.supported && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        Not Supported
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Office Compatibility */}
          <div className="bg-gray-900 bg-opacity-90 border border-green-400 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <HardDrive className="text-green-400 mr-3" size={24} />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Office Compatibility
              </h3>
            </div>
            
            <div className="space-y-3 mb-6">
              {officeVersions.map((version, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    version.supported 
                      ? 'bg-black border-green-400' 
                      : 'bg-gray-800 border-red-400'
                  }`}
                >
                  <div className="flex items-center">
                    {version.supported ? (
                      <CheckCircle className="text-green-400 mr-3" size={16} />
                    ) : (
                      <AlertCircle className="text-red-400 mr-3" size={16} />
                    )}
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {version.name}
                    </span>
                  </div>
                  <div>
                    {version.supported ? (
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                        {version.method}
                      </span>
                    ) : (
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        Not Supported
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* System Requirements */}
            <div className="bg-black border border-green-400 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Cpu className="text-green-400 mr-2" size={16} />
                <h4 className="text-white font-semibold text-sm sm:text-base">Minimum Requirements</h4>
              </div>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                <li>• Administrator privileges required</li>
                <li>• Internet connection for download</li>
                <li>• PowerShell 3.0 or higher</li>
                <li>• Windows Defender or antivirus temporarily disabled</li>
                <li>• At least 100MB free disk space</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Security Notice */}
        <div className="mt-12 bg-gray-900 bg-opacity-90 border border-yellow-400 rounded-lg p-6 relative z-10 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Shield className="text-yellow-400 mr-3" size={24} />
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">
              Important Security Information
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Before Activation:</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                <li>• Create a system restore point</li>
                <li>• Close all Office applications</li>
                <li>• Temporarily disable real-time protection</li>
                <li>• Ensure stable internet connection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Compatibility Notes:</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                <li>• HWID works only on Windows 10/11</li>
                <li>• Ohook supports Office 2016 and newer</li>
                <li>• KMS38 works until year 2038</li>
                <li>• Online KMS requires periodic renewal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemRequirements;