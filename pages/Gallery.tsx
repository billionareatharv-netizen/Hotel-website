import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  return (
    <div className="bg-white min-h-screen pb-20">
       <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Photo Gallery</h1>
        <p className="text-gray-400">A glimpse into our world</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'exterior', 'interior', 'lobby'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === cat 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;