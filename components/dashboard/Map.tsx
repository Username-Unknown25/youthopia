
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, Compass, Calendar, ChevronRight, Plus, Minus, Maximize, Locate, Clock } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

const Map: React.FC = () => {
  const { events } = useData();
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const zones = [
    { id: 'main', name: 'Main Stage', color: 'bg-brand-purple', desc: 'Concerts, Inauguration, and Dance Battles.', x: '50%', y: '50%', w: '140px', h: '140px' },
    { id: 'food', name: 'Food Court', color: 'bg-brand-orange', desc: 'Snacks, Drinks, and Chill Zone.', x: '20%', y: '20%', w: '100px', h: '100px' },
    { id: 'tech', name: 'Tech Zone', color: 'bg-blue-500', desc: 'Hackathons, Gaming, and Workshops.', x: '80%', y: '20%', w: '110px', h: '110px' },
    { id: 'art', name: 'Art Arena', color: 'bg-brand-pink', desc: 'Painting, Exhibitions, and Creative Stalls.', x: '20%', y: '80%', w: '120px', h: '120px' },
    { id: 'reg', name: 'Registration', color: 'bg-green-500', desc: 'Help Desk, ID Cards, and entry.', x: '80%', y: '80%', w: '90px', h: '90px' },
  ];

  const getNearbyEvents = (zoneName: string) => {
    // Mapping specific zones to event location keywords for demo purposes
    const matchTerms: Record<string, string[]> = {
        'Main Stage': ['Main Stage', 'Open Air', 'Auditorium'],
        'Food Court': ['Student Parking', 'Gazebo'],
        'Tech Zone': ['Lab', 'IT', 'Conference', 'Seminar'],
        'Art Arena': ['Art', 'Theatre', 'Gallery', 'Auditorium'],
        'Registration': ['Main Building', 'Entrance']
    };
    
    const terms = matchTerms[zoneName] || [];
    return events.filter(e => terms.some(t => e.loc.includes(t))).slice(0, 3);
  };

  const nearbyEvents = activeZone ? getNearbyEvents(zones.find(z => z.id === activeZone)?.name || '') : [];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const handleReset = () => {
      setZoom(1);
      setActiveZone(null);
  };

  // Handle pinch-to-zoom (trackpad) and wheel zooming
  const handleWheel = (e: React.WheelEvent) => {
    // Check for Ctrl key (standard for pinch-to-zoom on trackpads) or just allow wheel zoom
    if (e.ctrlKey || e.metaKey) {
        const delta = e.deltaY * -0.01;
        setZoom(prev => Math.min(Math.max(prev + delta, 1), 4));
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Festival Map</h2>
          <p className="text-slate-500 mt-1">Navigate your way through Youthopia.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
           <Compass size={16} className="text-brand-purple" /> Interactive View
        </div>
      </div>

      <div 
        className="flex-1 bg-slate-100 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden min-h-[500px] flex flex-col" 
        ref={containerRef}
        onWheel={handleWheel}
      >
         
         {/* Map Controls */}
         <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-white/90 backdrop-blur-md rounded-xl p-1.5 shadow-lg border border-slate-100">
             <button onClick={handleZoomIn} className="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors" title="Zoom In"><Plus size={20} /></button>
             <button onClick={handleZoomOut} className="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors" title="Zoom Out"><Minus size={20} /></button>
             <button onClick={handleReset} className="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors" title="Reset View"><Maximize size={20} /></button>
         </div>

         {/* Draggable & Scalable Map Layer */}
         <motion.div
            className="relative w-full h-full cursor-grab active:cursor-grabbing origin-center"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileTap={{ cursor: "grabbing" }}
         >
             {/* Main Map Image */}
             <img 
               src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=2000&auto=format&fit=crop" 
               alt="Youthopia Festival Map"
               className="w-full h-full object-cover pointer-events-none select-none brightness-[0.85] contrast-[1.1]"
               draggable={false}
             />
             
             {/* Map Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

             {/* Zones Markers */}
             {zones.map((zone) => (
                <motion.div
                   key={zone.id}
                   className={`absolute rounded-full shadow-2xl flex items-center justify-center cursor-pointer border-4 border-white/40 backdrop-blur-md transition-all ${zone.color} ${activeZone === zone.id ? 'z-30 scale-125 ring-4 ring-white shadow-brand-purple/50' : 'z-10 hover:scale-110'}`}
                   style={{ 
                     left: zone.x, 
                     top: zone.y, 
                     width: zone.w, 
                     height: zone.h,
                     transform: 'translate(-50%, -50%)' 
                   }}
                   onClick={(e) => {
                       e.stopPropagation();
                       setActiveZone(zone.id);
                   }}
                   whileHover={{ scale: 1.15 }}
                   whileTap={{ scale: 0.95 }}
                >
                   <div className="text-center pointer-events-none flex flex-col items-center justify-center">
                      <MapPin className="text-white drop-shadow-lg mb-1" size={28} strokeWidth={2.5} />
                      <span className="text-white font-bold text-xs md:text-sm drop-shadow-md bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm whitespace-nowrap">
                          {zone.name}
                      </span>
                   </div>
                </motion.div>
             ))}
         </motion.div>

         {/* Interactive Zone Detail Card */}
         <AnimatePresence>
         {activeZone && (
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/95 backdrop-blur-xl p-0 rounded-2xl border border-slate-200 shadow-2xl z-30 overflow-hidden"
            >
               <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        {zones.find(z => z.id === activeZone)?.name}
                        <span className={`w-2.5 h-2.5 rounded-full ${zones.find(z => z.id === activeZone)?.color}`} />
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        {zones.find(z => z.id === activeZone)?.desc}
                    </p>
                  </div>
                  <button onClick={() => setActiveZone(null)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1.5 border border-slate-200 shadow-sm transition-colors">
                     <Info size={16} />
                  </button>
               </div>

               <div className="p-4 bg-white">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                      <Calendar size={12} /> Nearby Events
                  </h4>
                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                     {nearbyEvents.length > 0 ? nearbyEvents.map(evt => (
                        <div key={evt.id} className="flex items-start gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 group cursor-pointer">
                           <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${evt.imageColor} shrink-0 shadow-sm`} />
                           <div className="flex-1 min-w-0">
                               <div className="font-bold text-sm text-slate-800 truncate group-hover:text-brand-purple transition-colors">{evt.title}</div>
                               <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                  <Clock size={10} /> {evt.time}
                               </div>
                           </div>
                           <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 mt-2 transition-transform group-hover:translate-x-0.5" />
                        </div>
                     )) : (
                        <div className="text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                             <p className="text-xs text-slate-400 italic">No scheduled events nearby right now.</p>
                        </div>
                     )}
                  </div>
                  <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 active:scale-95">
                    <Locate size={14} /> Navigate Here
                  </button>
               </div>
            </motion.div>
         )}
         </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide">
          {zones.map(zone => (
             <button 
                key={zone.id} 
                onClick={() => {
                    setActiveZone(zone.id);
                    setZoom(1.2); // Auto zoom slightly on selection
                }}
                className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all border shadow-sm whitespace-nowrap ${activeZone === zone.id ? 'bg-slate-900 text-white border-slate-900 scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
             >
                <div className={`w-2 h-2 rounded-full ${zone.color}`} />
                {zone.name}
             </button>
          ))}
      </div>
    </div>
  );
};

export default Map;
