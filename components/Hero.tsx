
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Luxury Event Management</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display leading-[1.1] mb-8"
          >
            Turning <span className="gold-text italic">Moments</span> <br /> Into Legacies
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            Savor the perfection of Kashmiri hospitality. From royal cuisines to architectural pandals, we define the zenith of celebrations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button 
              onClick={onGetStarted}
              className="gold-gradient px-8 py-4 rounded-full text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform group shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Request A Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-all">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold">Watch Our Reel</span>
            </button>
          </motion.div>
        </div>

        {/* Floating elements to simulate 3D depth */}
        <div className="hidden md:block relative h-[600px]">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 w-[400px] h-[500px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Luxury decor"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl font-display">Royal Pandal Design</p>
              <p className="text-[#D4AF37] text-sm">2024 Collection</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 w-[280px] h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass p-4"
          >
            <div className="h-full rounded-xl overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Fine dining"
              />
            </div>
            <p className="text-white text-sm font-medium">Chef's Signature Platter</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
