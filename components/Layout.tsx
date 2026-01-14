import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Instagram, Facebook, Mail, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Top Bar - Professional Touch */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 hidden md:block border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 hover:text-white transition"><Phone size={14} /> {HOTEL_INFO.phone}</span>
            <span className="flex items-center gap-2 hover:text-white transition"><Mail size={14} /> {HOTEL_INFO.email}</span>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Clock size={14} /> Check-in: 12:00 PM | Check-out: 11:00 AM</span>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center relative">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight leading-none">Sunshine</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mt-1 group-hover:text-gray-700 transition-colors">Hotel & Luxury Stay</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? 'text-primary-600 font-semibold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-primary-700 transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle size={16} /> Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Drawer - Inside Header for Sticky Behavior */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-b overflow-hidden shadow-xl absolute top-full left-0 w-full z-40"
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-medium px-4 py-3 rounded-lg ${
                      location.pathname === link.path ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
                  className="bg-green-600 text-white text-center py-4 rounded-lg font-bold flex items-center justify-center gap-2 mt-4 shadow-lg"
                >
                  <MessageCircle size={20} /> Instant Booking
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Sunshine</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-sm">
              Discover a sanctuary of luxury and comfort in the heart of the city. 
              We blend traditional hospitality with modern amenities to create unforgettable memories for our guests.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"><Instagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"><Facebook size={22} /></a>
              <a href={`mailto:${HOTEL_INFO.email}`} className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"><Mail size={22} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/rooms" className="hover:text-primary-400 transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Our Rooms</Link></li>
              <li><Link to="/amenities" className="hover:text-primary-400 transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span> Contact & Map</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-primary-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-primary-500 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition">{HOTEL_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle size={20} className="text-primary-500 shrink-0" />
                <a href={`https://wa.me/${HOTEL_INFO.whatsapp}`} className="hover:text-white transition">WhatsApp Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-16 pt-8">
            <div className="container mx-auto px-4 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.
            </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-105 flex items-center justify-center animate-bounce-slow ring-4 ring-green-100"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="white" />
        </a>
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="bg-primary-600 text-white p-4 rounded-full shadow-xl hover:bg-primary-700 transition-all hover:scale-105 flex items-center justify-center ring-4 ring-primary-100"
          aria-label="Call Now"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

export default Layout;