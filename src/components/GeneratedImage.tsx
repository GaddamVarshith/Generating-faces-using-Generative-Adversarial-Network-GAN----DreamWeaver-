import React from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, AlertCircle } from 'lucide-react';

interface GeneratedImageProps {
  images: { url: string; id: string }[] | null;
  isLoading: boolean;
  error?: string;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ images, isLoading, error }) => {
  const handleDownload = (url: string, index: number) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `dreamweaver-portrait-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-white/50 backdrop-blur-sm rounded-xl border border-black/5">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <Loader2 className="w-12 h-12 text-primary/30" />
          </div>
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
        <p className="mt-4 text-gray-600 font-medium">Creating your portraits...</p>
        <p className="text-sm text-gray-500">This may take a few moments</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-red-50 rounded-xl border border-red-100 p-6">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-500 text-center font-medium">{error}</p>
        {error.includes('balance') && (
          <p className="text-sm text-red-400 mt-2 text-center">
            Please check your API account or contact support for assistance.
          </p>
        )}
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] bg-white/50 backdrop-blur-sm rounded-xl border border-black/5">
        <div className="max-w-sm text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">Ready to Generate</h3>
          <p className="text-gray-500">
            Take or upload a photo and select a style to generate your AI portraits
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-black/5 p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2 
                          ring-1 ring-black/5 shadow-elegant">
              <img
                src={image.url}
                alt={`Generated portrait ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 
                         transition-transform duration-300"
              />
            </div>
            <button
              onClick={() => handleDownload(image.url, index)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 
                       bg-white rounded-lg shadow-elegant hover:shadow-elegant-hover 
                       border border-black/5 text-primary transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};