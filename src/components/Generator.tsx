import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WebcamCapture } from './WebcamCapture';
import { CategorySelector } from './CategorySelector';
import { GeneratedImage } from './GeneratedImage';
import { Camera } from 'lucide-react';
import { generateFace } from '../services/api';
import { categories } from '../data/categories';
import type { Category } from '../types';
import toast from 'react-hot-toast';

export const Generator: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<Array<{ url: string; id: string }> | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleCapture = (imageSrc: string) => {
    setCapturedImage(imageSrc);
    setGeneratedImages(null);
    setSelectedCategory(null);
    setError(undefined);
  };

  const handleCategorySelect = async (category: Category) => {
    setIsLoading(true);
    setError(undefined);
    setSelectedCategory(category);

    try {
      const selectedCategoryData = categories.find(c => c.id === category);
      if (!selectedCategoryData) throw new Error('Invalid category selected');

      await new Promise(resolve => setTimeout(resolve, 20000));
      
      const results = await generateFace(selectedCategoryData.prompt, capturedImage || undefined);
      setGeneratedImages(results);
      toast.success('Portraits generated successfully!');
    } catch (err: any) {
      const errorMessage = err.code === 'INSUFFICIENT_BALANCE' 
        ? 'Insufficient API credits to generate portraits'
        : err.message || 'Failed to generate portraits';
      
      setError(errorMessage);
      toast.error(errorMessage);
      setGeneratedImages(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="generator" className="section-gradient py-20">
      <div className="absolute inset-0">
        <div className="floating-dots-up" />
        <div className="floating-dots-down" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Create Your Portrait</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take a photo or upload one to generate stunning AI portraits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-card p-6 border-2 border-black/10 hover:scale-103 transition-all duration-300">
                {!capturedImage ? (
                  <WebcamCapture onCapture={handleCapture} isDisabled={isLoading} />
                ) : (
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 
                                border-2 border-black/10 shadow-elegant">
                      <img 
                        src={capturedImage} 
                        alt="Captured" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => setCapturedImage(null)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 
                               bg-primary text-white rounded-lg shadow-elegant hover:shadow-elegant-hover 
                               transform hover:scale-105 transition-all duration-300
                               border-2 border-primary/20"
                      disabled={isLoading}
                    >
                      <Camera className="w-5 h-5" />
                      <span className="font-medium">Retake Photo</span>
                    </button>
                  </div>
                )}
              </div>

              {capturedImage && (
                <div className="glass-card p-6 border-2 border-black/10 hover:scale-103 transition-all duration-300">
                  <CategorySelector 
                    onSelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                  />
                </div>
              )}
            </div>

            <GeneratedImage 
              images={generatedImages}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};