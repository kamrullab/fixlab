import React from 'react';
import { Download, ExternalLink, Package } from 'lucide-react';

const SoftwareDownloads: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Package className="text-green-400 mr-2" size={20} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
              SOFTWARE COLLECTION
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300">
            Download all software free
          </p>
        </div>
        
        <div className="bg-black border border-green-400 rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-3">
            Complete Software Library
          </h3>
          <p className="text-gray-300 mb-4 text-sm">
            Access our comprehensive collection including Windows, Office, Adobe Creative Suite, 
            antivirus software, and essential applications.
          </p>
          
          <a
            href="https://kamrul.pages.dev/soft/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={18} />
            Browse Software Collection
            <ExternalLink size={16} />
          </a>
          
          <div className="mt-4 text-xs text-gray-400">
            Operating Systems • Productivity Suites • Security Tools • Media Applications
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDownloads;