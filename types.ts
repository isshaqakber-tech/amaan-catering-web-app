
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Catering' | 'Pandal' | 'Decor' | 'Tunnel';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts';
  price?: string;
}

export interface Booking {
  id: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  date: string;
  location: string;
  amount: number;
  paid: number;
  timeline: { step: string; completed: boolean }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}
