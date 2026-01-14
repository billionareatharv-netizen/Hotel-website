import React from 'react';
import { ROOMS } from '../constants';
import RoomCard from '../components/RoomCard';
import { motion } from 'framer-motion';

const Rooms: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Our Accommodations</h1>
        <p className="text-gray-400">Comfortable, Clean, and Affordable</p>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;