import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-10">
        <div className="floating-dots-up" />
        <div className="floating-dots-down" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <Camera className="w-16 h-16 text-rose-500 mx-auto animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AI Portrait Generator
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transform your photos into stunning AI-generated portraits using our advanced technology. 
            Capture your best moments and let AI create something extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-4"
          >
            <a
              href="#generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 
                       text-white rounded-full text-lg font-semibold shadow-rose 
                       hover:shadow-rose-hover border-2 border-rose-400/50 
                       transform hover:scale-105 transition-all duration-300"
            >
              <Camera className="w-5 h-5" />
              Start Creating
            </a>
            <p className="text-gray-400 text-sm">
              No account required • Instant results • 100% free
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};