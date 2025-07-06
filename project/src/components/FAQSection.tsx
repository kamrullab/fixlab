import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this safe to use?',
      answer: 'Yes, absolutely safe. These are clean, open-source scripts with no malware. The code is publicly available and regularly audited by the community.',
      icon: <Shield className="text-green-400" size={20} />
    },
    {
      question: 'Why does my antivirus flag it?',
      answer: 'Antivirus programs use heuristic analysis that can trigger false positives for activation tools. This is normal behavior. Temporarily disable your antivirus during activation, then re-enable it.',
      icon: <AlertTriangle className="text-yellow-400" size={20} />
    },
    {
      question: 'Is activation permanent?',
      answer: 'It depends on the method: HWID & Ohook are permanent and survive reinstalls. KMS38 lasts until 2038. Online KMS renews every 180 days automatically.',
      icon: <CheckCircle className="text-green-400" size={20} />
    },
    {
      question: 'Will Microsoft detect this?',
      answer: 'The activation methods use legitimate Microsoft mechanisms. HWID creates a genuine digital license, and Ohook uses clean activation without modifications to system files.',
      icon: <Shield className="text-green-400" size={20} />
    },
    {
      question: 'What if it doesn\'t work?',
      answer: 'The scripts include troubleshooting options and detailed error messages. Most issues are resolved by running as administrator, disabling antivirus, or using a different activation method.',
      icon: <AlertTriangle className="text-yellow-400" size={20} />
    },
    {
      question: 'Can I use this on multiple computers?',
      answer: 'Yes, you can use these scripts on as many computers as you want. Each activation is independent and doesn\'t affect others.',
      icon: <CheckCircle className="text-green-400" size={20} />
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-green-400 mr-2" size={24} />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
              FAQ & SAFETY
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 px-4">
            Common questions and safety information
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-green-400 rounded-lg overflow-hidden hover:border-green-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center">
                  {faq.icon}
                  <span className="text-white font-semibold ml-2 sm:ml-3 text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>
                {expandedFAQ === index ? (
                  <ChevronUp className="text-green-400 flex-shrink-0" size={16} />
                ) : (
                  <ChevronDown className="text-green-400 flex-shrink-0" size={16} />
                )}
              </button>
              
              {expandedFAQ === index && (
                <div className="px-4 sm:px-6 pb-4 border-t border-gray-800">
                  <p className="text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-black border border-green-400 rounded-lg p-6">
          <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 text-center">
            Safety Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Before Activation:</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li>• Create a system restore point</li>
                <li>• Temporarily disable antivirus</li>
                <li>• Run PowerShell as administrator</li>
                <li>• Close unnecessary programs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">After Activation:</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li>• Re-enable your antivirus</li>
                <li>• Restart your computer</li>
                <li>• Check activation status</li>
                <li>• Delete downloaded files if desired</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;