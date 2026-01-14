import React from 'react';
import { HOTEL_INFO } from '../constants';
import { Heart, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">About Us</h1>
        <p className="text-gray-400">Serving guests with love since 2010</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Welcome to {HOTEL_INFO.name}</h2>
          <div className="prose text-gray-600 leading-relaxed mb-8">
            <p className="mb-4">
              Nestled in the heart of the city, <strong>{HOTEL_INFO.name}</strong> has been a preferred choice for travelers seeking comfort, luxury, and affordability. Our journey began over a decade ago with a simple mission: to provide a "home away from home" experience for every guest who walks through our doors.
            </p>
            <p>
              Whether you are visiting for business, a family vacation, or a solo adventure, we ensure your stay is memorable. Our prime location offers easy access to major tourist attractions, transport hubs, and business centers, making us the ideal base for your travels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 border-t pt-12">
            <div className="text-center">
              <div className="mx-auto bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Hospitality</h3>
              <p className="text-sm text-gray-500">We treat every guest like family, ensuring personalized care.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Star size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality</h3>
              <p className="text-sm text-gray-500">Premium amenities and spotless cleanliness are our promise.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-sm text-gray-500">Proudly employing local staff and supporting the community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;