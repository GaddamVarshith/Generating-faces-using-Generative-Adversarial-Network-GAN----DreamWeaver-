import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Take Your Photo",
    description: "Use your device's camera to capture a clear portrait photo"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Processing",
    description: "Our AI technology transforms your photo into various styles"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Download Results",
    description: "Get your generated portraits in high resolution"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20">
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
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your photos into stunning portraits in three simple steps
            </p>
          </div>

          <div className="glass-card p-8 border-3 border-black/15 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl border-3 border-black/15 
                                shadow-elegant hover:shadow-elegant-hover hover:scale-103
                                transition-all duration-300 relative z-10">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 
                                  w-12 h-12 rounded-lg flex items-center justify-center 
                                  text-primary mb-4 border-2 border-primary/15">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 
                                  bg-primary/20 transform -translate-y-1/2 z-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};