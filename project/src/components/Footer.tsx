import React from 'react';
import { Github, ExternalLink, Mail, Heart, Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/elitekamrul',
      icon: <Github size={24} />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/elitekamrul',
      icon: <Instagram size={24} />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/elitekamrul',
      icon: <Twitter size={24} />
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@elitekamrul',
      icon: <Youtube size={24} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/elitekamrul',
      icon: <Linkedin size={24} />
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/elitekamrul',
      icon: <Facebook size={24} />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-green-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              FIX LAB
            </h3>
            <p className="text-gray-300 mb-4">
              The ultimate toolkit for Windows and Office activation. Clean, safe, and open-source.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('powershell-section')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  PowerShell Activation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('system-requirements')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-left"
                >
                  System Requirements
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/kamrullab/MAS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  Download Scripts
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://massgrave.dev/unsupported_products_activation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  Unattended Mode
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Activation Methods
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• HWID - Digital License</li>
              <li>• Ohook - Office Activation</li>
              <li>• KMS38 - Until 2038</li>
              <li>• Online KMS - 180 Days</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FIX LAB by Kamrul. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <Heart className="text-red-400 mx-1" size={16} /> for the community
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Follow @elitekamrul on all social platforms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;