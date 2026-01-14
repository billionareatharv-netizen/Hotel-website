import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, CheckCircle2, Star, Shield, Clock, Wifi, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, ROOMS, REVIEWS } from '../constants';
import RoomCard from '../components/RoomCard';
import BookingForm from '../components/BookingForm';

const Home: React.FC = () => {
  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-6 bg-black/20 backdrop-blur-sm">
              Welcome to Luxury
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              {HOTEL_INFO.name}
            </h1>
            <p className="text-lg md:text-2xl font-light mb-10 text-gray-100 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Experience the perfect blend of comfort, elegance, and warm hospitality in the heart of the city.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a 
                href={`https://wa.me/${HOTEL_INFO.whatsapp}`} 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all flex items-center justify-center gap-3 shadow-xl hover:translate-y-[-2px]"
              >
                <MessageCircle size={22} /> Book via WhatsApp
              </a>
              <a 
                href={`tel:${HOTEL_INFO.phone}`} 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 text-white px-8 py-4 rounded-sm text-lg font-semibold transition-all flex items-center justify-center gap-3 shadow-xl hover:translate-y-[-2px]"
              >
                <Phone size={22} /> Call For Enquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Highlights - Floating Cards */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x border border-gray-100">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-primary-50 p-4 rounded-full text-primary-600 mb-1"><Shield size={28} /></div>
            <h3 className="font-bold text-gray-800 text-lg">Safe & Hygienic</h3>
            <p className="text-xs text-gray-500">Sanitized daily for your safety</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-primary-50 p-4 rounded-full text-primary-600 mb-1"><Clock size={28} /></div>
            <h3 className="font-bold text-gray-800 text-lg">24/7 Reception</h3>
            <p className="text-xs text-gray-500">Always here to serve you</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-primary-50 p-4 rounded-full text-primary-600 mb-1"><Wifi size={28} /></div>
            <h3 className="font-bold text-gray-800 text-lg">Free High-Speed WiFi</h3>
            <p className="text-xs text-gray-500">Stay connected seamlessly</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-primary-50 p-4 rounded-full text-primary-600 mb-1"><MapPin size={28} /></div>
            <h3 className="font-bold text-gray-800 text-lg">Prime Location</h3>
            <p className="text-xs text-gray-500">Close to major attractions</p>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-2 block">Accommodation</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Premium Rooms</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Designed for comfort and relaxation, our rooms offer a peaceful retreat with modern amenities.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {ROOMS.filter(r => r.featured).slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/rooms" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-gray-800 transition shadow-lg group">
            View All Rooms <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-stone-900 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-500 z-0"></div>
                 <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" alt="Fine Dining" className="rounded-sm shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full" />
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary-500 z-0"></div>
               </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">We Redefine Luxury & Comfort</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                At {HOTEL_INFO.name}, we don't just provide a room; we provide an experience. From our world-class culinary delights to our meticulously designed interiors, every detail is crafted to ensure your stay is nothing short of exceptional.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  "Premium Bedding",
                  "Organic Toiletries",
                  "Soundproof Rooms",
                  "Concierge Service",
                  "Valet Parking",
                  "Express Laundry"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="bg-primary-500/20 p-1 rounded-full text-primary-500">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary-400 hover:text-primary-300 font-semibold border-b border-primary-500 pb-1 inline-flex items-center gap-2">
                Learn more about our story <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* Quick Booking Form Section */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
             <BookingForm />
           </div>
           <div className="order-1 md:order-2 space-y-8">
             <div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Start Your Journey Here</h2>
                <div className="w-20 h-1 bg-primary-500 rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready for a memorable stay? Fill out our quick enquiry form, and our reservation team will contact you via WhatsApp with the best available rates and personalized offers.
                </p>
             </div>
             
             <div className="grid gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1"><MessageCircle size={24}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Instant WhatsApp Confirmation</h4>
                    <p className="text-gray-500">Get booking details and payment links directly on your phone.</p>
                  </div>
               </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1"><Phone size={24}/></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">24/7 Personal Assistance</h4>
                    <p className="text-gray-500">Talk to our front desk manager for special requests.</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Guest Reviews</h2>
           <p className="text-gray-500 uppercase tracking-widest font-medium">What our happy clients say</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 hover:border-primary-100 transition-colors">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {review.name.charAt(0)}
                 </div>
                 <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{review.location}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;