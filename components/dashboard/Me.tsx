import React, { useEffect, useRef } from 'react';
import { motion, Variants, useSpring, useTransform, animate, useMotionValue } from 'framer-motion';
import { Award, User, Phone, Book, GraduationCap, Info } from 'lucide-react';
import { UserData } from '../../types';

interface MeProps {
  bonus: number;
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

const Me: React.FC<MeProps> = ({ bonus, user, registeredEventIds }) => {
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
          key={bonus} 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 p-4 rounded-xl text-white text-center min-w-[120px] shadow-lg shadow-slate-900/20 z-10 cursor-default"
        >
           <div className="text-3xl font-bold text-brand-yellow">
             <AnimatedCounter value={bonus} />
           </div>
           <div className="text-xs uppercase tracking-wider text-slate-400">Total Bonus</div>
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
    </motion.div>
  );
};

export default Me;