
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { Utensils, Star, Info } from 'lucide-react';

const DigitalMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Appetizers' | 'Main Course' | 'Desserts'>('Appetizers');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Utensils className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display mb-4">Culinary <span className="gold-text">Excellence</span></h2>
          <p className="text-gray-400">Discover a menu curated for the most discerning palates.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-16 border-b border-white/5">
          {(['Appetizers', 'Main Course', 'Desserts'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all relative ${
                activeCategory === cat ? 'text-[#D4AF37]' : 'text-gray-500'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" 
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="glass p-6 rounded-xl flex items-center justify-between group hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-display text-white">{item.name}</h4>
                      {item.id === 'm1' && <Star className="w-4 h-4 text-[#D4AF37] fill-current" />}
                    </div>
                    <p className="text-gray-400 text-sm max-w-lg">{item.description}</p>
                  </div>
                  <button className="text-[#D4AF37] p-2 hover:bg-[#D4AF37]/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 italic">Custom menus are available based on your dietary preferences and event scale.</p>
          <button className="gold-gradient px-12 py-4 rounded-full text-black font-bold hover:shadow-2xl transition-all">
            Customize This Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalMenu;
