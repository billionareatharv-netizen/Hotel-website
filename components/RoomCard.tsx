import React from 'react';
import { Room } from '../types';
import { Wifi, Tv, Users, Wind, ArrowRight, Bed } from 'lucide-react';
import { HOTEL_INFO } from '../constants';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const message = `Hi, I am interested in checking availability for the *${room.name}*.`;
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-sm text-sm font-bold text-gray-900 shadow-sm border border-gray-100">
          ₹{room.price} <span className="font-normal text-xs text-gray-500">/ night</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <Link to={`/rooms/${room.id}`}>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors cursor-pointer">{room.name}</h3>
          </Link>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">{room.description}</p>
          
          {/* Features Preview */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs mb-6 border-t border-b border-gray-50 py-3">
            <span className="flex items-center gap-1.5"><Users size={16} className="text-primary-500" /> {room.capacity}</span>
            {room.amenities.includes('AC') && (
              <span className="flex items-center gap-1.5"><Wind size={16} className="text-primary-500" /> AC</span>
            )}
             <span className="flex items-center gap-1.5"><Wifi size={16} className="text-primary-500" /> WiFi</span>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-sm font-medium text-sm text-center hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-sm"
          >
            Check Availability
          </a>
           <Link
            to={`/rooms/${room.id}`}
            className="bg-gray-50 text-gray-800 border border-gray-200 py-3 px-4 rounded-sm font-medium text-sm text-center hover:bg-gray-100 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;