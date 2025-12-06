import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, TrendingUp } from 'lucide-react';

const StudentOverview: React.FC = () => {
  const stats = [
    { label: 'Total Student Base', value: '1,240', change: '+12%', icon: <Users size={20} />, color: 'text-blue-400' },
    { label: 'Active Engagement', value: '85%', change: '+5%', icon: <TrendingUp size={20} />, color: 'text-green-400' },
    { label: 'Total Points Issued', value: '450k', change: '+8%', icon: <Trophy size={20} />, color: 'text-yellow-400' },
    { label: 'Event Participation', value: '3,850', change: '+15%', icon: <Calendar size={20} />, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Student Ecosystem Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] border border-white/10 p-6 rounded-2xl relative overflow-hidden group"
          >
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl text-white">{stat.icon}</div>
                <span className={`text-xs font-bold ${stat.color} bg-white/5 px-2 py-1 rounded`}>{stat.change}</span>
             </div>
             <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
             <p className="text-sm text-slate-400">{stat.label}</p>
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/10 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Daily Footfall</h3>
            <div className="h-64 flex items-end gap-2">
               {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                   className="flex-1 bg-gradient-to-t from-blue-900/50 to-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                 />
               ))}
            </div>
         </div>
         <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Points Circulation</h3>
             <div className="h-64 flex items-end gap-2">
               {[30, 40, 35, 50, 60, 80, 75].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                   className="flex-1 bg-gradient-to-t from-yellow-900/50 to-yellow-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                 />
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default StudentOverview;