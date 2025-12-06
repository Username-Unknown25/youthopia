import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-brand-dark flex flex-col items-center justify-center z-50 overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px]" 
         />
         <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink rounded-full blur-[120px]" 
         />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-300 font-light mb-6 tracking-[0.2em] uppercase"
        >
          Welcome To
        </motion.p>

        {/* Logo Placeholder */}
        <motion.div
          animate={{ 
            rotate: [0, -5, 5, -5, 0],
            scale: [1, 1.05, 1],
            filter: ["drop-shadow(0 0 0px rgba(249,115,22,0))", "drop-shadow(0 0 20px rgba(249,115,22,0.4))", "drop-shadow(0 0 0px rgba(249,115,22,0))"]
          }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          className="bg-white/10 p-8 rounded-full backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
        >
          <PartyPopper size={80} className="text-brand-orange" />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple tracking-tighter"
        >
          YOUTHOPIA
        </motion.h1>

        <motion.div 
           initial={{ width: 0, opacity: 0 }}
           animate={{ width: 120, opacity: 1 }}
           transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
           className="h-1 bg-gradient-to-r from-brand-orange to-brand-purple mt-4 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;