
import React from 'react';
import { motion } from 'framer-motion';
import { User as UserType } from '../types';
import { MOCK_BOOKING } from '../constants';
import { CheckCircle2, Circle, Clock, CreditCard, Calendar, MapPin, Download } from 'lucide-react';

interface DashboardProps {
  user: UserType | null;
}

const ClientDashboard: React.FC<DashboardProps> = ({ user }) => {
  const percentagePaid = (MOCK_BOOKING.paid / MOCK_BOOKING.amount) * 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-display mb-2">Welcome Back, <span className="gold-text">{user?.name}</span></h1>
        <p className="text-gray-400">Manage your event details and track progress in real-time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Status Cards */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <Calendar className="absolute -right-4 -top-4 w-24 h-24 text-[#D4AF37]/10" />
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-bold">Next Event</h3>
              <p className="text-2xl text-white font-display mb-1">{MOCK_BOOKING.date}</p>
              <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
                <MapPin className="w-4 h-4" />
                <span>{MOCK_BOOKING.location}</span>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <CreditCard className="absolute -right-4 -top-4 w-24 h-24 text-[#D4AF37]/10" />
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-bold">Payment Status</h3>
              <p className="text-2xl text-white font-display mb-1">₹{(MOCK_BOOKING.amount - MOCK_BOOKING.paid).toLocaleString()} Due</p>
              <div className="w-full bg-white/5 h-2 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percentagePaid}%` }}
                  className="h-full gold-gradient"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{percentagePaid.toFixed(0)}% Paid</p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-display text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                Event Timeline
              </h3>
              <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold uppercase">
                {MOCK_BOOKING.status}
              </span>
            </div>

            <div className="relative space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              {MOCK_BOOKING.timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start relative z-10">
                  <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                    item.completed ? 'bg-[#D4AF37] border-[#D4AF37]' : 'bg-[#121212] border-white/20'
                  }`}>
                    {item.completed && <CheckCircle2 className="w-4 h-4 text-black" />}
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${item.completed ? 'text-white' : 'text-gray-500'}`}>
                      {item.step}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {item.completed ? 'Step completed successfully.' : 'Upcoming milestone.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Actions */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-2xl border-l-4 border-l-[#D4AF37]">
            <h3 className="text-lg font-display text-white mb-4">Dedicated Manager</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center font-bold text-black">
                AM
              </div>
              <div>
                <p className="text-white font-medium">Arshad Malik</p>
                <p className="text-xs text-gray-400">Sr. Planner</p>
              </div>
            </div>
            <button className="w-full bg-white/5 hover:bg-white/10 py-3 rounded-xl text-white transition-all mb-3 text-sm flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              Chat with Arshad
            </button>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Documents</h3>
            <div className="space-y-3">
              <button className="w-full text-left text-sm text-gray-400 hover:text-[#D4AF37] flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all">
                Event Contract.pdf
                <Download className="w-4 h-4" />
              </button>
              <button className="w-full text-left text-sm text-gray-400 hover:text-[#D4AF37] flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all">
                Menu_Final_V2.pdf
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { MessageCircle } from 'lucide-react';
export default ClientDashboard;
