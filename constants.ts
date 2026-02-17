
import { Service, MenuItem, Booking, VideoItem } from './types';

export const WHATSAPP_NUMBERS = ['6005282194', '6005384083', '9906418899'];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Exquisite Royal Catering',
    description: 'A culinary journey featuring authentic Wazwan and multi-cuisine delicacies crafted by master chefs.',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    category: 'Catering'
  },
  {
    id: 's2',
    title: 'Grand Pandal Architectures',
    description: 'Stunning temporary structures that blend traditional aesthetics with modern engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
    category: 'Pandal'
  },
  {
    id: 's3',
    title: 'Illuminated Tunnel Passages',
    description: 'Walk-through LED and floral tunnels that create a magical first impression for your guests.',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop',
    category: 'Tunnel'
  },
  {
    id: 's4',
    title: 'Floral & Crystal Backdrops',
    description: 'Photogenic stage designs featuring exotic blooms and crystalline elements.',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
    category: 'Decor'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Royal Wedding Highlights - Srinagar',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    videoUrl: '#',
    duration: '3:45',
    category: 'Wedding Vlog'
  },
  {
    id: 'v2',
    title: 'Corporate Gala: Pandal Setup Reveal',
    thumbnail: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop',
    videoUrl: '#',
    duration: '2:15',
    category: 'Corporate'
  },
  {
    id: 'v3',
    title: 'Tunnel Entrance & Decor Walkthrough',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    videoUrl: '#',
    duration: '1:50',
    category: 'Decor Reveal'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'm1', name: 'Tabakh Maaz', description: 'Crispy deep-fried ribs of lamb, a signature Wazwan starter.', category: 'Appetizers' },
  { id: 'm2', name: 'Chicken Seekh Kebab', description: 'Spiced minced chicken skewers grilled to perfection.', category: 'Appetizers' },
  { id: 'm3', name: 'Rista', description: 'Small lamb meatballs in a saffron-flavored red gravy.', category: 'Main Course' },
  { id: 'm4', name: 'Roganjosh', description: 'Aromatic lamb curry flavored with mawal and Kashmiri chilies.', category: 'Main Course' },
  { id: 'm5', name: 'Phirni', description: 'Creamy ground rice pudding flavored with saffron and almonds.', category: 'Desserts' }
];

export const MOCK_BOOKING: Booking = {
  id: 'B-8821',
  status: 'Confirmed',
  date: '2024-12-25',
  location: 'Heritage Grand Palace, Srinagar',
  amount: 450000,
  paid: 200000,
  timeline: [
    { step: 'Initial Consultation', completed: true },
    { step: 'Venue Inspection', completed: true },
    { step: 'Menu Selection', completed: true },
    { step: 'Decor Finalization', completed: false },
    { step: 'Final Execution', completed: false }
  ]
};
