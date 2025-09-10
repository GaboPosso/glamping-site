export interface Property {
  id: string,
  name: string,
  description: string,
  maxGuest: number,
  basePrice: number,
  images: string[];
  amenities: string[];
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guestCount: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'guest' | 'admin';
  createdAt: Date;
}