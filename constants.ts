
import { Service, MenuItem, Booking } from './types';

export const WHATSAPP_NUMBERS = ['6005282194', '6005384083', '9906418899'];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Exquisite Royal Catering',
    description: 'A culinary journey featuring authentic Wazwan and multi-cuisine delicacies crafted by master chefs.',
    imageUrl: 'https://picsum.photos/id/429/800/600',
    category: 'Catering'
  },
  {
    id: 's2',
    title: 'Grand Pandal Architectures',
    description: 'Stunning temporary structures that blend traditional aesthetics with modern engineering.',
    imageUrl: 'https://picsum.photos/id/322/800/600',
    category: 'Pandal'
  },
  {
    id: 's3',
    title: 'Illuminated Tunnel Passages',
    description: 'Walk-through LED and floral tunnels that create a magical first impression for your guests.',
    imageUrl: 'https://picsum.photos/id/600/800/600',
    category: 'Tunnel'
  },
  {
    id: 's4',
    title: 'Floral & Crystal Backdrops',
    description: 'Photogenic stage designs featuring exotic blooms and crystalline elements.',
    imageUrl: 'https://picsum.photos/id/111/800/600',
    category: 'Decor'
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
