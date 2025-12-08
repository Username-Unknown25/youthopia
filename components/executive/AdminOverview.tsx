
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Server, AlertTriangle, UserCheck } from 'lucide-react';

const AdminOverview: React.FC = () => {
  const adminLogs: any[] = [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Admin & System Health</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* System Health */}
         <div className="bg-[#111] border border-white/10 p-6 rounded-2xl lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <Activity size={20} className="text-green-400" /> System Status
            </h3>
            <div className="space-y-4">
               <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border-l-4 border-green-500">
                  <div>
                     <div className="font-bold text-white">Database Latency</div>
                     <div className="text-xs text-slate-400">Response time within limits</div>
                  </div>
                  <span className="text-green-400 font-mono font-bold">-- ms</span>
               </div>
               <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border-l-4 border-green-500">
                  <div>
                     <div className="font-bold text-white">API Gateway</div>
                     <div className="text-xs text-slate-400">Traffic load normal</div>
                  </div>
                  <span className="text-green-400 font-mono font-bold">100% Uptime</span>
               </div>
               <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border-l-4 border-green-500">
                  <div>
                     <div className="font-bold text-white">Backup Sync</div>
                     <div className="text-xs text-slate-400">Sync status normal</div>
                  </div>
                  <span className="text-green-400 font-mono font-bold">Synced</span>
               </div>
            </div>
         </div>

         {/* Admin Active Count */}
         <div className="bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
               <Shield size={40} />
            </div>
            <h3 className="text-4xl font-bold text-white mb-1">0</h3>
            <p className="text-slate-400">Active Admins Online</p>
         </div>
      </div>

      {/* Logs */}
      <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
         <h3 className="text-lg font-bold text-white mb-4">Recent Admin Actions</h3>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
               <thead className="bg-white/5 text-xs uppercase font-bold text-white">
                  <tr>
                     <th className="p-3 rounded-l-lg">Admin ID</th>
                     <th className="p-3">Action</th>
                     <th className="p-3">Timestamp</th>
                     <th className="p-3 rounded-r-lg">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {adminLogs.length > 0 ? adminLogs.map(log => (
                     <tr key={log.id}>
                        <td className="p-3 text-white font-medium">{log.admin}</td>
                        <td className="p-3">{log.action}</td>
                        <td className="p-3 font-mono">{log.time}</td>
                        <td className="p-3">
                           <span className={`px-2 py-1 rounded-full text-xs font-bold ${log.status === 'Success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                              {log.status}
                           </span>
                        </td>
                     </tr>
                  )) : (
                     <tr>
                        <td colSpan={4} className="p-8 text-center text-slate-500">No recent logs.</td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default AdminOverview;
