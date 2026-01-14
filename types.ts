import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[]; // Added for gallery
  capacity: string;
  amenities: string[];
  featured?: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  location: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: 'exterior' | 'interior' | 'lobby' | 'dining';
  alt: string;
}