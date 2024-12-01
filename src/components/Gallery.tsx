import React from 'react';
import { motion } from 'framer-motion';

const sampleImages = [
  'https://images.generated.photos/Z9tbjjPVUVuBP5R0wYxOwhplq1ZNa3jThQ3EQjfh4lY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjkwMTU4LmpwZw.jpg',
  'https://images.generated.photos/G6SIrBnaIt4Zpj74frQg-Z_QVJZqEPKaZBXHb9mKMeE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU3NDY2LmpwZw.jpg',
  'https://images.generated.photos/ejvvf3S4N_o9nEAIfIxZ38bhPP62W5m47innW6LEjYQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAyMjI4LmpwZw.jpg',
  'https://images.generated.photos/h241zJuBwlAaSjBiMpCqW50RX4xfEvkvd-HZg4uRJxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzIzMzQ5LmpwZw.jpg',
  'https://images.generated.photos/ZYtOC5xwOtU17-GvKrEJWZpRunetrjzilvoc0rO-GLQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxOTY3LmpwZw.jpg',
  'https://images.generated.photos/AGajC2_viO_FD9mUUN860fpb8zL_gz_Pw-VC_oX-fw8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIyNTQzLmpwZw.jpg'
];

export const Gallery: React.FC = () => {
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
              Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of AI-generated portraits
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sampleImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Sample portrait ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 
                             transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};