
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, LogIn, LayoutDashboard, Home, Utensils, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isLoggedIn, 
  onLogin, 
  onLogout, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Calendar },
    { id: 'menu', label: 'Menu', icon: Utensils },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold text-xl">
            A
          </div>
          <span className="text-xl font-display font-bold tracking-widest text-[#D4AF37]">AMAAN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`text-sm font-medium transition-all hover:text-[#D4AF37] ${
                activeTab === link.id ? 'text-[#D4AF37] border-b border-[#D4AF37]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="h-6 w-[1px] bg-white/10" />

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-colors ${activeTab === 'dashboard' ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : ''}`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </button>
              <button 
                onClick={onLogout}
                className="text-sm text-gray-400 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onLogin}
              className="flex items-center gap-2 gold-gradient px-6 py-2 rounded-full text-black font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Client Portal</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#D4AF37]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-[#D4AF37]/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setActiveTab(link.id); setIsMenuOpen(false); }}
                  className="flex items-center gap-4 text-lg text-gray-300"
                >
                  <link.icon className="w-5 h-5 text-[#D4AF37]" />
                  {link.label}
                </button>
              ))}
              <hr className="border-white/5" />
              {isLoggedIn ? (
                <button 
                  onClick={() => { setActiveTab('dashboard'); setIsMenuOpen(false); }}
                  className="flex items-center gap-4 text-lg text-[#D4AF37]"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  My Dashboard
                </button>
              ) : (
                <button 
                  onClick={() => { onLogin(); setIsMenuOpen(false); }}
                  className="flex items-center gap-4 text-lg text-[#D4AF37]"
                >
                  <LogIn className="w-5 h-5" />
                  Client Login
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { AnimatePresence } from 'framer-motion';
export default Navbar;
