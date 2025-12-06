
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Clock, ShoppingBag, CheckCircle2, XCircle } from 'lucide-react';
import Button from '../Button';

interface RedemptionRequest {
  id: string;
  user: string;
  item: string;
  cost: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  time: string;
}

const Redemption: React.FC = () => {
  const [requests, setRequests] = useState<RedemptionRequest[]>([
    { id: 'RED-001', user: 'Alex Student', item: 'Diary', cost: 750, status: 'Pending', time: '10 mins ago' },
    { id: 'RED-002', user: 'Priya R.', item: 'Sipper', cost: 550, status: 'Pending', time: '25 mins ago' },
    { id: 'RED-003', user: 'Rahul K.', item: 'Keychain', cost: 350, status: 'Pending', time: '1 hour ago' },
    { id: 'RED-004', user: 'Sarah J.', item: 'Badge', cost: 150, status: 'Pending', time: '2 hours ago' },
  ]);

  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    // In a real app, make API call here

    // Remove from list to simulate processing
    setRequests(prev => prev.filter(req => req.id !== id));

    const message = action === 'approve' 
      ? `Request ${id} Approved` 
      : `Request ${id} Rejected`;
    
    setNotification({ 
        message, 
        type: action === 'approve' ? 'success' : 'error' 
    });

    // Clear notification
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="space-y-6 relative h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Redemption Queue</h2>
        <div className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
           {requests.length} Pending
        </div>
      </div>
      
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden min-h-[400px]">
         <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
         >
            <AnimatePresence mode="popLayout">
            {requests.map((req) => (
              <motion.div 
                layout
                key={req.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow relative overflow-hidden bg-white"
              >
                 <div className="absolute top-0 right-0 p-3">
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                       <Clock size={10} /> {req.status}
                    </span>
                 </div>

                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center">
                       <ShoppingBag size={20} />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-800">{req.item}</h3>
                       <p className="text-xs text-slate-500">{req.id}</p>
                    </div>
                 </div>

                 <div className="bg-slate-50 rounded-xl p-3 mb-4 text-sm border border-slate-100">
                    <div className="flex justify-between mb-1">
                       <span className="text-slate-500">Student:</span>
                       <span className="font-semibold text-slate-700">{req.user}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-slate-500">Cost:</span>
                       <span className="font-bold text-slate-900">{req.cost} pts</span>
                    </div>
                    <div className="flex justify-between mt-1 pt-1 border-t border-slate-200">
                       <span className="text-slate-500 text-xs">Requested:</span>
                       <span className="text-xs text-slate-400">{req.time}</span>
                    </div>
                 </div>

                 <div className="flex gap-2">
                    <Button 
                        variant="white" 
                        fullWidth 
                        onClick={() => handleAction(req.id, 'reject')}
                        className="text-xs py-2 text-red-500 hover:bg-red-50 hover:border-red-200"
                    >
                       <X size={14} className="mr-1" /> Reject
                    </Button>
                    <Button 
                        variant="primary" 
                        fullWidth 
                        onClick={() => handleAction(req.id, 'approve')}
                        className="text-xs py-2 shadow-none bg-green-600 hover:bg-green-700"
                    >
                       <Check size={14} className="mr-1" /> Approve
                    </Button>
                 </div>
              </motion.div>
            ))}
            </AnimatePresence>
            
            {requests.length === 0 && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="col-span-full text-center py-20 text-slate-400 flex flex-col items-center"
                >
                   <CheckCircle2 size={48} className="text-green-100 mb-4" />
                   <p className="font-medium text-slate-500">All caught up!</p>
                   <p className="text-sm">No pending redemption requests.</p>
                </motion.div>
            )}
         </motion.div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold text-sm min-w-[300px] border ${
                    notification.type === 'success' 
                    ? 'bg-white text-green-700 border-green-100' 
                    : 'bg-white text-red-700 border-red-100'
                }`}
            >
                {notification.type === 'success' ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} className="text-green-600" />
                    </div>
                ) : (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                        <XCircle size={18} className="text-red-600" />
                    </div>
                )}
                <div>
                    <div className="text-slate-900">{notification.message}</div>
                    <div className="text-xs text-slate-400 font-normal">Action completed successfully</div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Redemption;
