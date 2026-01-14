import React from 'react';
import { AMENITIES } from '../constants';
import { motion } from 'framer-motion';

const Amenities: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
       <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Facilities & Amenities</h1>
        <p className="text-gray-400">Everything you need for a perfect stay</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {AMENITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-stone-50 p-6 rounded-xl border border-stone-100 hover:shadow-lg transition-shadow text-center flex flex-col items-center group"
              >
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:bg-primary-50 transition-colors">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities;