
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Trophy, Activity, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, Star, Zap } from 'lucide-react';
import { events } from '../dashboard/constants';

const Overview: React.FC = () => {
  // Mock Stats Data
  const stats = [
    { 
      label: 'Total Students', 
      value: '1,240', 
      icon: <Users className="text-blue-600" size={24} />, 
      change: '+12%', 
      trend: 'up',
      bg: 'bg-blue-50 text-blue-600'
    },
    { 
      label: 'Event Registrations', 
      value: '3,850', 
      icon: <Calendar className="text-purple-600" size={24} />, 
      change: '+8%', 
      trend: 'up',
      bg: 'bg-purple-50 text-purple-600'
    },
    { 
      label: 'Points Economy', 
      value: '450k', 
      icon: <Trophy className="text-yellow-600" size={24} />, 
      change: '-5%', 
      trend: 'down',
      bg: 'bg-yellow-50 text-yellow-600'
    },
    { 
      label: 'Active Now', 
      value: '342', 
      icon: <Activity className="text-green-600" size={24} />, 
      change: '+24%', 
      trend: 'up',
      bg: 'bg-green-50 text-green-600'
    },
  ];

  // Mock Top Events (taking first few from constants for demo)
  const popularEvents = events.slice(0, 5).map((evt, i) => ({
    ...evt,
    registrations: 450 - (i * 45), // Mock reg count
    capacity: 500,
    trend: i === 0 ? '+15%' : '+5%'
  }));

  // Mock Recent Activity Feed
  const recentActivities = [
    { user: "Sarah Jones", action: "registered for", target: "Pulse Parade", time: "2 mins ago", icon: <Calendar size={14} />, color: "bg-purple-100 text-purple-600" },
    { user: "Mike Tyson", action: "redeemed", target: "Diary", time: "5 mins ago", icon: <Trophy size={14} />, color: "bg-yellow-100 text-yellow-600" },
    { user: "Alex Student", action: "won", target: "Spin the Wheel", time: "12 mins ago", icon: <Zap size={14} />, color: "bg-orange-100 text-orange-600" },
    { user: "Priya R.", action: "joined", target: "Youthopia", time: "15 mins ago", icon: <Users size={14} />, color: "bg-blue-100 text-blue-600" },
    { user: "Rahul K.", action: "submitted feedback for", target: "Tech Talk", time: "22 mins ago", icon: <Star size={14} />, color: "bg-green-100 text-green-600" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
           <p className="text-slate-500 text-sm">Real-time insights into student activities and festival performance.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
           <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
           </span>
           <div className="text-sm font-bold text-slate-700">Festival Live Day 2</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg}`}>{stat.icon}</div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                   {stat.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                   {stat.change}
                </div>
             </div>
             <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
             <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
             
             {/* Decor */}
             <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none scale-150 grayscale">
                {stat.icon}
             </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Chart Area: Registration Trends */}
         <motion.div variants={item} className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900 flex items-center gap-2">
                 <TrendingUp size={20} className="text-brand-purple" /> Traffic & Engagement
               </h3>
               <div className="flex gap-2">
                 <button className="px-3 py-1 text-xs font-bold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">Daily</button>
                 <button className="px-3 py-1 text-xs font-bold bg-white border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-50">Weekly</button>
               </div>
            </div>
            
            {/* Improved Mock Chart */}
            <div className="flex-1 min-h-[250px] flex items-end gap-3 px-2 pb-2 relative">
               {/* Grid Lines */}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-t border-slate-300 w-full" />
                  <div className="border-t border-slate-300 w-full" />
                  <div className="border-t border-slate-300 w-full" />
                  <div className="border-t border-slate-300 w-full" />
               </div>

               {[35, 45, 30, 60, 55, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 0.8, delay: i * 0.05, ease: "backOut" }}
                   className="flex-1 bg-gradient-to-t from-brand-purple/20 to-brand-purple rounded-t-lg relative group cursor-pointer"
                 >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                       {h * 10} Visits
                    </div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                 </motion.div>
               ))}
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-4 px-2 font-mono">
               <span>00:00</span>
               <span>06:00</span>
               <span>12:00</span>
               <span>18:00</span>
               <span>23:59</span>
            </div>
         </motion.div>

         {/* Recent Student Activity */}
         <motion.div variants={item} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
               <Activity size={20} className="text-brand-orange" /> Recent Activity
            </h3>
            <div className="space-y-6 overflow-y-auto max-h-[300px] pr-2">
               {recentActivities.map((act, i) => (
                 <div key={i} className="flex gap-3 relative">
                    {/* Timeline Line */}
                    {i !== recentActivities.length - 1 && (
                      <div className="absolute left-[14px] top-8 bottom-[-24px] w-0.5 bg-slate-100" />
                    )}
                    
                    <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${act.color}`}>
                       {act.icon}
                    </div>
                    <div>
                       <p className="text-sm text-slate-700">
                         <span className="font-bold text-slate-900">{act.user}</span> {act.action} <span className="font-semibold text-brand-purple">{act.target}</span>
                       </p>
                       <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-1">
                          <Clock size={10} /> {act.time}
                       </span>
                    </div>
                 </div>
               ))}
            </div>
            <button className="mt-auto w-full py-3 text-sm font-bold text-slate-500 hover:text-brand-purple border-t border-slate-100 transition-colors">
               View Full Activity Log
            </button>
         </motion.div>
      </div>

      {/* Top Events Section */}
      <motion.div variants={item} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-900 text-lg">Top Performing Events</h3>
             <button className="text-sm font-bold text-brand-purple hover:underline">View All Events</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {popularEvents.map((evt, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                   <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={evt.image} alt={evt.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 truncate">{evt.title}</h4>
                      <p className="text-xs text-slate-500 mb-2">{evt.registrations} / {evt.capacity} Registered</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${(evt.registrations / evt.capacity) * 100}%` }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className={`h-full rounded-full ${i === 0 ? 'bg-gradient-to-r from-brand-orange to-brand-yellow' : 'bg-brand-purple'}`}
                         />
                      </div>
                   </div>
                   <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                         {evt.trend}
                      </div>
                   </div>
                </div>
             ))}
          </div>
      </motion.div>
    </motion.div>
  );
};

export default Overview;
