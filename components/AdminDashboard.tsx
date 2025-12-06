
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, Sliders, MessageSquare, Gift, LogOut, Menu, X 
} from 'lucide-react';
import Overview from './admin/Overview';
import UsersEvents from './admin/UsersEvents';
import MasterControl from './admin/MasterControl';
import Feedback from './admin/Feedback';
import Redemption from './admin/Redemption';

interface AdminDashboardProps {
  onLogout: () => void;
}

type AdminSection = 'overview' | 'users' | 'master' | 'feedback' | 'redemption';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'master', label: 'Master Control', icon: <Sliders size={20} /> },
    { id: 'users', label: 'Users & Events', icon: <Users size={20} /> },
    { id: 'feedback', label: 'Feedback', icon: <MessageSquare size={20} /> },
    { id: 'redemption', label: 'Redemption', icon: <Gift size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <Overview />;
      case 'users': return <UsersEvents />;
      case 'master': return <MasterControl />;
      case 'feedback': return <Feedback />;
      case 'redemption': return <Redemption />;
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 bg-slate-900 text-white p-2 rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <motion.aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0f172a] text-white shadow-xl transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-slate-800">
           <div>
             <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
               ADMIN PORTAL
             </h1>
             <p className="text-xs text-slate-500 tracking-widest mt-1">YOUTHOPIA CONTROL</p>
           </div>
           <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400">
             <X size={24} />
           </button>
        </div>

        <nav className="p-4 space-y-2 mt-4">
           {menuItems.map(item => (
             <button
               key={item.id}
               onClick={() => {
                 setActiveSection(item.id as AdminSection);
                 setSidebarOpen(false);
               }}
               className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all relative overflow-hidden ${
                 activeSection === item.id 
                   ? 'bg-brand-purple text-white shadow-lg shadow-purple-900/20' 
                   : 'text-slate-400 hover:bg-slate-800 hover:text-white'
               }`}
             >
                <div className="relative z-10 flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
             </button>
           ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 bg-[#0f172a]">
           <button 
             onClick={onLogout}
             className="w-full flex items-center gap-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
           >
             <LogOut size={20} />
             <span className="font-medium">Logout System</span>
           </button>
        </div>
      </motion.aside>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen p-4 md:p-8 bg-slate-50/50">
        <AnimatePresence mode="wait">
           <motion.div
             key={activeSection}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.2 }}
             className="max-w-6xl mx-auto"
           >
              {renderContent()}
           </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
