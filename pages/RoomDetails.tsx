import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ROOMS, HOTEL_INFO, AMENITIES } from '../constants';
import { MessageCircle, Users, CheckCircle2, ChevronLeft, Star, Wifi, Wind, Tv } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const room = ROOMS.find(r => r.id === id);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (room) {
      setActiveImage(room.image);
    }
  }, [id, room]);

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
        <Link to="/rooms" className="text-primary-600 hover:underline flex items-center gap-2">
          <ChevronLeft size={20} /> Back to Rooms
        </Link>
      </div>
    );
  }

  const message = `Hi, I am interested in checking availability for the *${room.name}*.`;
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(message)}`;

  // Find icon for amenities (basic matching)
  const getAmenityIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('wifi')) return <Wifi size={18} />;
    if (lowerName.includes('ac') || lowerName.includes('climate')) return <Wind size={18} />;
    if (lowerName.includes('tv')) return <Tv size={18} />;
    return <CheckCircle2 size={18} />;
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
           <Link to="/rooms" className="inline-flex items-center text-gray-500 hover:text-primary-600 transition">
             <ChevronLeft size={16} className="mr-1" /> Back to Rooms
           </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Content: Gallery & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Hero */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="relative overflow-hidden rounded-xl h-[400px]">
                <AnimatePresence mode='wait'>
                  <motion.img 
                    key={activeImage}
                    src={activeImage || room.image} 
                    alt={room.name} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              
              {/* Additional Thumbnails Grid if exists */}
              {room.images && room.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <img 
                      src={room.image} 
                      alt="Main"
                      className={`w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-90 transition border-2 ${activeImage === room.image ? 'border-primary-500' : 'border-transparent'}`}
                      onClick={() => setActiveImage(room.image)}
                    />
                  {room.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${room.name} view ${idx + 1}`} 
                      className={`w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-90 transition border-2 ${activeImage === img ? 'border-primary-500' : 'border-transparent'}`}
                      onClick={() => setActiveImage(img)}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Room Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                 <h1 className="text-3xl font-serif font-bold text-gray-900">{room.name}</h1>
                 <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full text-sm font-bold">
                    <Star size={16} fill="currentColor" /> 4.9 (120 reviews)
                 </div>
              </div>

              <div className="prose text-gray-600 leading-relaxed mb-8">
                <p>{room.description}</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="text-primary-600">{getAmenityIcon(item)}</div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">House Rules</h3>
                 <ul className="space-y-2 text-sm text-gray-600">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>Check-in: 12:00 PM</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>Check-out: 11:00 AM</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>No smoking in rooms</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>Pets not allowed</li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Sidebar: Booking Card */}
          <div className="lg:col-span-1">
             <div className="sticky top-24">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100">
                  <div className="mb-6">
                    <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Price per night</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl font-serif font-bold text-gray-900">₹{room.price}</span>
                      <span className="text-gray-400 line-through text-sm">₹{room.price + 1000}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      <span className="flex items-center gap-2"><Users size={18} className="text-gray-400" /> Capacity</span>
                      <span className="font-semibold">{room.capacity}</span>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-sm text-green-800 border border-green-100">
                       <p className="font-semibold flex items-center gap-2"><CheckCircle2 size={16} /> Free Cancellation</p>
                       <p className="text-xs opacity-80 mt-1">Before 24 hours of check-in</p>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg hover:translate-y-[-2px]"
                  >
                    <MessageCircle size={24} /> Book on WhatsApp
                  </a>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    No payment required to enquire. You will be redirected to WhatsApp to chat with our manager.
                  </p>
                </div>

                {/* Need Help Card */}
                <div className="mt-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                   <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
                   <p className="text-sm text-gray-600 mb-4">Call us directly for custom requirements.</p>
                   <a href={`tel:${HOTEL_INFO.phone}`} className="text-blue-600 font-bold hover:underline">{HOTEL_INFO.phone}</a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetails;