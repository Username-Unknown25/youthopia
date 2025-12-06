import React, { useEffect, useRef } from 'react';
import { motion, Variants, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import { Award, Activity, User, Phone, Book, GraduationCap, Info, Calendar, Clock } from 'lucide-react';
import { UserData } from '../../types';
import { events } from './constants';

interface MeProps {
  points: number;
  user: UserData | null;
  registeredEventIds: string[];
}

const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const Me: React.FC<MeProps> = ({ points, user, registeredEventIds }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  // Safe defaults if user is null (should ideally be handled by parent or a loading state)
  const userData = user || {
    name: "Guest Student",
    school: "N/A",
    class: "N/A",
    stream: "N/A",
    phone: "N/A",
    age: "N/A",
    gender: "N/A",
    adminId: ""
  };

  // Filter events based on registered IDs
  const myEvents = events.filter(e => registeredEventIds.includes(e.id));

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-bl-full pointer-events-none" />
        
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-purple to-brand-pink rounded-full flex items-center justify-center text-4xl shadow-xl z-10 text-white font-bold"
        >
          {userData.name.charAt(0).toUpperCase()}
        </motion.div>
        
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-3xl font-bold text-slate-900">{userData.name}</h2>
          <p className="text-slate-500 text-lg flex items-center justify-center md:justify-start gap-2">
             <GraduationCap size={18} /> {userData.school}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
             <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">{userData.stream} Stream</span>
             <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">Class {userData.class}</span>
             <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold border border-yellow-200">ID: YTH-2025-442</span>
          </div>
        </div>
        
        <motion.div 
          key={points} 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 p-4 rounded-xl text-white text-center min-w-[120px] shadow-lg shadow-slate-900/20 z-10 cursor-default"
        >
           <div className="text-3xl font-bold text-brand-yellow">
             <AnimatedCounter value={points} />
           </div>
           <div className="text-xs uppercase tracking-wider text-slate-400">Total Points</div>
        </motion.div>
      </motion.div>

      {/* Personal Details Card */}
      <motion.div variants={item} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><User size={20} /></div>
            Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 text-slate-500">
                  <Phone size={18} />
                  <span className="text-sm font-medium">Contact</span>
              </div>
              <span className="font-bold text-slate-800">{userData.phone}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Info size={18} />
                    <span className="text-sm font-medium">Age</span>
                  </div>
                  <span className="font-bold text-slate-800">{userData.age}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500">
                    <User size={18} />
                    <span className="text-sm font-medium">Gender</span>
                  </div>
                  <span className="font-bold text-slate-800">{userData.gender}</span>
            </div>
        </div>
      </motion.div>

       <motion.div variants={item} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
             <div className="p-2 bg-brand-pink/10 rounded-lg text-brand-pink"><Activity size={20} /></div>
             Upcoming Registrations
          </h3>
          
          {myEvents.length > 0 ? (
             <ul className="space-y-3">
                {myEvents.map((evt, idx) => (
                  <motion.li 
                    key={evt.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-brand-purple/30 transition-all"
                  >
                     <div className="flex items-center gap-4 mb-2 md:mb-0">
                        {/* Status Dot */}
                        <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
                        <div>
                            <span className="font-bold text-slate-800 block">{evt.title}</span>
                            <span className="text-slate-500 text-xs flex items-center gap-2 mt-1">
                               <Calendar size={12} /> {evt.date} <span className="w-1 h-1 bg-slate-300 rounded-full" /> <Clock size={12} /> {evt.time}
                            </span>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-3 self-end md:self-auto">
                        {idx === 0 && (
                           <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-md">
                             Next Up
                           </span>
                        )}
                        <span className="text-xs font-medium text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">
                           {evt.loc}
                        </span>
                     </div>
                  </motion.li>
                ))}
             </ul>
          ) : (
             <div className="text-center py-8 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p>You haven't registered for any events yet.</p>
                <p className="text-xs mt-1">Head over to "Activities" to start!</p>
             </div>
          )}
        </motion.div>
    </motion.div>
  );
};

export default Me;
