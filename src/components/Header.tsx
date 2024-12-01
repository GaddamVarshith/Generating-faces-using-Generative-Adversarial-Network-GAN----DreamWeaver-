import React, { useState } from 'react';
import { Sparkles, Github, Menu, X } from 'lucide-react';
import { HowItWorksModal } from './HowItWorksModal';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md border-b border-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-xl font-bold text-primary">
                DreamWeaver
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-primary/80 hover:text-primary transition-colors"
              >
                How it Works
              </button>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-black/10 
                         hover:border-primary hover:text-primary hover:shadow-elegant-hover transition-all"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </nav>
            
            <button className="md:hidden text-primary/80 hover:text-primary">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <HowItWorksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};