import React from 'react';
import { Mail, Facebook, Twitter, Shield, Zap, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/90 backdrop-blur-md border-t border-black/10 mt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-dots" />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">About DreamWeaver</h3>
            <p className="text-gray-600 mb-4">
              Transform your portraits using cutting-edge AI technology. Create stunning, 
              professional-grade images while maintaining privacy and security.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@dreamweaver.ai" 
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@dreamweaver.ai
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  DreamWeaver AI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  @DreamWeaverAI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Our Promise</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600">100% Privacy Protection</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600">Lightning-Fast Generation</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600">Quality Results Guaranteed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} DreamWeaver AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};