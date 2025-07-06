import React from 'react';
import { Download, Github, ExternalLink, FileArchive, Package } from 'lucide-react';

const DownloadsSection: React.FC = () => {
  const downloads = [
    {
      name: 'GitHub Repository',
      url: 'https://github.com/kamrullab/MAS',
      icon: <Github className="text-white" size={24} />,
      description: 'Official repository with source code',
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      name: 'Bitbucket Mirror',
      url: 'https://bitbucket.org/WindowsAddict/microsoft-activation-scripts',
      icon: <ExternalLink className="text-blue-400" size={24} />,
      description: 'Alternative download source',
      color: 'bg-blue-900 hover:bg-blue-800'
    },
    {
      name: 'Direct ZIP Download',
      url: 'https://github.com/kamrullab/MAS/archive/refs/heads/main.zip',
      icon: <FileArchive className="text-green-400" size={24} />,
      description: 'Direct download as ZIP file',
      color: 'bg-green-900 hover:bg-green-800'
    },
    {
      name: 'Software Collection',
      url: 'https://kamrul.pages.dev/soft/',
      icon: <Package className="text-purple-400" size={24} />,
      description: 'Download all software free',
      color: 'bg-purple-900 hover:bg-purple-800'
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Package className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              DOWNLOADS
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Get the latest activation scripts and software
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {downloads.map((download, index) => (
            <a
              key={index}
              href={download.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${download.color} border border-green-400 rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-center mb-4">
                  {download.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {download.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {download.description}
                </p>
              </div>
              <div className="flex items-center justify-center text-green-400">
                <Download size={16} className="mr-1" />
                <span className="text-sm">Download</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="bg-gray-900 border border-green-400 rounded-lg p-8">
          <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-6 text-center">
            Download Instructions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">For PowerShell Method:</h4>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 mb-2 text-xs sm:text-sm">No download required! Just run:</p>
                <code className="text-green-400 text-xs sm:text-sm break-all">
                  irm https://get.activated.win | iex
                </code>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">For Traditional Method:</h4>
              <div className="bg-black border border-gray-700 rounded-lg p-4">
                <ol className="text-gray-300 text-xs sm:text-sm space-y-1">
                  <li>1. Download ZIP from any source above</li>
                  <li>2. Extract to a folder</li>
                  <li>3. Navigate to All-In-One-Version</li>
                  <li>4. Run the .cmd file as administrator</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-black border border-yellow-400 rounded-lg">
            <h4 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">Important Notes:</h4>
            <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
              <li>• All download sources contain identical content</li>
              <li>• GitHub is the primary source with latest updates</li>
              <li>• Bitbucket serves as a reliable backup mirror</li>
              <li>• Always verify file integrity after download</li>
              <li>• Check for updates regularly for best compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsSection;