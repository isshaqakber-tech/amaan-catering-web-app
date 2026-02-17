
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display mb-6">World-Class <span className="gold-text">Craftsmanship</span></h2>
            <p className="text-gray-400 text-lg">
              We don't just host events; we curate emotions. Explore our specialized services designed for those who settle for nothing less than extraordinary.
            </p>
          </div>
          <button className="text-[#D4AF37] border-b border-[#D4AF37] pb-1 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View All Services <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-3">{service.category}</span>
                <h3 className="text-2xl font-display text-white mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <div className="mt-6 w-10 h-1 bg-[#D4AF37] transition-all group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
