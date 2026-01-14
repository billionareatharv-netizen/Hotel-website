import React from 'react';
import BookingForm from '../components/BookingForm';
import { HOTEL_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
       <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Contact Us</h1>
        <p className="text-gray-400">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
               <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Get In Touch</h2>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600"><MapPin /></div>
                   <div>
                     <p className="font-bold text-gray-800">Address</p>
                     <p className="text-gray-600 max-w-xs">{HOTEL_INFO.address}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600"><Phone /></div>
                   <div>
                     <p className="font-bold text-gray-800">Phone</p>
                     <a href={`tel:${HOTEL_INFO.phone}`} className="text-gray-600 hover:text-primary-600">{HOTEL_INFO.phone}</a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600"><Mail /></div>
                   <div>
                     <p className="font-bold text-gray-800">Email</p>
                     <a href={`mailto:${HOTEL_INFO.email}`} className="text-gray-600 hover:text-primary-600">{HOTEL_INFO.email}</a>
                   </div>
                 </div>
                  <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600"><Clock /></div>
                   <div>
                     <p className="font-bold text-gray-800">Reception Hours</p>
                     <p className="text-gray-600">24/7 Open</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 overflow-hidden h-80">
              <iframe 
                src={HOTEL_INFO.mapUrl} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;