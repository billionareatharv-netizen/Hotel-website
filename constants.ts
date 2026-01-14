import { Wifi, Car, Coffee, Utensils, Zap, ShieldCheck, Wind, Tv } from 'lucide-react';
import { Room, Amenity, Review, GalleryItem } from './types';

export const HOTEL_INFO = {
  name: "Sunshine Hotel & Stay",
  tagline: "Comfortable Stay | Affordable Prices | Prime Location",
  phone: "+919876543210", // Dummy phone
  whatsapp: "919876543210", // Dummy WhatsApp (no plus)
  address: "123 Sunshine Avenue, Hilltop View, Tourism City, 400001",
  email: "bookings@sunshinehotel.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.83737654321!2d72.85!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe King Room',
    description: 'Experience luxury with our spacious King room featuring modern interiors, a city view, and premium bedding. This room is designed for couples who seek comfort and elegance. It includes a dedicated workspace, a small seating area, and a luxurious bathroom.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', // Bathroom
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80', // Detail
    ],
    capacity: '2 Adults, 1 Child',
    amenities: ['AC', 'Free Wifi', 'Smart TV', 'Breakfast', 'Mini Bar', 'Work Desk', 'City View'],
    featured: true,
  },
  {
    id: 'standard',
    name: 'Standard Cozy Room',
    description: 'Perfect for solo travelers or couples looking for a comfortable stay on a budget without compromising quality. The room offers a cozy ambiance with essential amenities and a clean, hygienic environment.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a063?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a063?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', // Angle 2
    ],
    capacity: '2 Adults',
    amenities: ['Free Wifi', 'TV', 'Room Service', 'Coffee Maker', 'Wardrobe'],
    featured: false,
  },
  {
    id: 'family',
    name: 'Royal Family Suite',
    description: 'An expansive suite designed for families, featuring two queen beds, a living area, and a luxury bath. Enjoy quality time with your loved ones in this spacious accommodation that feels just like home.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', // Extra View
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80', // Detail
    ],
    capacity: '4 Adults, 2 Children',
    amenities: ['AC', 'Free Wifi', 'Bathtub', 'Living Area', 'Balcony', 'Dining Table', 'Refrigerator'],
    featured: true,
  }
];

export const AMENITIES: Amenity[] = [
  { id: 'wifi', name: 'High-Speed Wi-Fi', icon: Wifi, description: 'Seamless connectivity throughout the property.' },
  { id: 'parking', name: 'Secure Parking', icon: Car, description: '24/7 guarded private parking space.' },
  { id: 'service', name: '24/7 Room Service', icon: Coffee, description: 'Delicious food delivered to your room anytime.' },
  { id: 'food', name: 'Fine Dining', icon: Utensils, description: 'Multi-cuisine restaurant with fresh local ingredients.' },
  { id: 'power', name: 'Power Backup', icon: Zap, description: 'Uninterrupted power supply for a hassle-free stay.' },
  { id: 'security', name: '24-Hour Security', icon: ShieldCheck, description: 'CCTV surveillance and trained security staff.' },
  { id: 'ac', name: 'Climate Control', icon: Wind, description: 'Individual AC control in all rooms.' },
  { id: 'tv', name: 'Entertainment', icon: Tv, description: 'Smart TVs with Netflix & Satellite channels.' },
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Rahul Sharma", rating: 5, comment: "Absolutely stunning property! The attention to detail in the rooms and the warmth of the staff made our stay unforgettable.", location: "Mumbai" },
  { id: 2, name: "Sarah Jenkins", rating: 5, comment: "A hidden gem. The hygiene standards were impeccable, and the food was just delicious. Will definitely visit again.", location: "London, UK" },
  { id: 3, name: "Amit Patel", rating: 4, comment: "Great location and very comfortable rooms. Perfect for a family weekend getaway.", location: "Ahmedabad" },
];

export const GALLERY: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', category: 'exterior', alt: 'Hotel Facade' },
  { id: 2, src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', category: 'lobby', alt: 'Luxury Lobby' },
  { id: 3, src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80', category: 'interior', alt: 'Master Bedroom' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', category: 'dining', alt: 'Restaurant Ambience' },
  { id: 5, src: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', category: 'interior', alt: 'Modern Bathroom' },
  { id: 6, src: 'https://images.unsplash.com/photo-1572331165267-854da2b00ca1?auto=format&fit=crop&w=800&q=80', category: 'exterior', alt: 'Swimming Pool' },
  { id: 7, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', category: 'interior', alt: 'Standard Room' },
  { id: 8, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', category: 'interior', alt: 'Living Area' },
];