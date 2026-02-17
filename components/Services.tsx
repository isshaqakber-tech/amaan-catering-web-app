
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, VIDEOS } from '../constants';
import { ChevronRight, Play, X, Clock, Video } from 'lucide-react';
import { VideoItem } from '../types';

const Services: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div className="bg-[#121212]">
      {/* Main Services Section */}
      <section className="py-24 px-6">
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

      {/* Video Gallery Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-display text-white">Cinematic <span className="gold-text">Memories</span></h2>
              <p className="text-gray-400 text-sm">Experience our grand setups through our event vlogs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full glass border border-[#D4AF37]/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">{video.category}</span>
                  <h4 className="text-lg font-display text-white mt-1 group-hover:text-[#D4AF37] transition-colors">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden glass border border-[#D4AF37]/20 shadow-[0_0_100px_rgba(212,175,55,0.2)]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Mock Video Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-900 to-black p-12 text-center">
                <Play className="w-20 h-20 text-[#D4AF37] animate-pulse" />
                <div>
                  <h3 className="text-3xl font-display text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-400">Video streaming starting soon...</p>
                  <p className="text-xs text-[#D4AF37]/50 mt-8">Note: This is a cinematic preview for {selectedVideo.category}.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
