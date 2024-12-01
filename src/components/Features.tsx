import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Image } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Generation",
    description: "State-of-the-art AI technology for stunning portrait transformations"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy Protected",
    description: "Your photos are processed securely and never stored"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Results",
    description: "Get your AI-generated portraits in seconds"
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "High Quality",
    description: "Professional-grade portraits in various styles"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of portrait generation with our cutting-edge features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card bg-white p-6 rounded-xl border-2 border-black/10 
                         shadow-elegant hover:shadow-elegant-hover hover:scale-103
                         transition-all duration-300 ease-in-out"
              >
                <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center 
                              text-primary mb-4 border border-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};