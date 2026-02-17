
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, User, LogIn, ChevronRight, MessageCircle, Sparkles, LayoutDashboard, Utensils, Home as HomeIcon, MapPin, Calendar, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DigitalMenu from './components/DigitalMenu';
import BookingForm from './components/BookingForm';
import ClientDashboard from './components/ClientDashboard';
import AIAssistant from './components/AIAssistant';
import { User as UserType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'menu' | 'booking' | 'dashboard'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    // Simulate Clerk/NextAuth social login
    setUser({ id: 'u1', name: 'Zaid Ahmad', email: 'zaid@example.com', isLoggedIn: true });
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin}
        onLogout={handleLogout}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onGetStarted={() => setActiveTab('booking')} />
              <Services />
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <Services />
            </motion.div>
          )}

          {activeTab === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <DigitalMenu />
            </motion.div>
          )}

          {activeTab === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <BookingForm />
            </motion.div>
          )}

          {activeTab === 'dashboard' && isLoggedIn && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ClientDashboard user={user} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating AI Assistant */}
      <AIAssistant />

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display mb-4 text-[#D4AF37]">Amaan Services</h3>
            <p className="text-gray-400 max-w-sm">
              Elevating events to an art form. From royal catering to stunning pandal designs, we make your celebrations legendary.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => setActiveTab('services')}>Services</li>
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => setActiveTab('menu')}>Digital Menu</li>
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => setActiveTab('booking')}>Request Quote</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+91 6005282194</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Srinagar, Jammu & Kashmir</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Amaan Catering Services & Event Planner. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
