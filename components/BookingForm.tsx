
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBERS } from '../constants';
import { Calendar, Users, MapPin, Send, MessageCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Amaan Services! I'd like to inquire about an event.%0A%0A*Details:*%0A- Name: ${formData.name}%0A- Date: ${formData.date}%0A- Location: ${formData.location}%0A- Guests: ${formData.guests}%0A- Message: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-3xl relative z-10 border-[#D4AF37]/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display mb-4">Reserve Your <span className="gold-text">Date</span></h2>
          <p className="text-gray-400">Fill out the form below and our concierge team will reach out within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
              placeholder="Zaid Ahmad"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Event Date</label>
            <div className="relative">
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                required
                type="date" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Expected Guests</label>
            <div className="relative">
              <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                required
                type="number" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                placeholder="e.g. 500"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Venue Location</label>
            <div className="relative">
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                placeholder="Srinagar, J&K"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Specific Requirements</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none resize-none"
              placeholder="Tell us more about your vision..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button 
              type="submit"
              className="w-full gold-gradient py-5 rounded-xl text-black font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire via WhatsApp
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Your data is encrypted and secure.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
