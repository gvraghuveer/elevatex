"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Filter, 
  Search, 
  MoreHorizontal, 
  Circle,
  Activity,
  ArrowUpRight
} from "lucide-react";

const resources = [
  { id: "v-8291", name: "api-gateway-prod", type: "EC2", region: "us-east-1", status: "Active", spend: "$412.50", utilization: "12%" },
  { id: "v-3120", name: "redis-cache-beta", type: "ElastiCache", region: "eu-west-1", status: "Paused", spend: "$0.00", utilization: "0%" },
  { id: "v-4921", name: "worker-node-04", type: "EC2", region: "us-west-2", status: "Active", spend: "$182.20", utilization: "8%" },
  { id: "v-7102", name: "customer-db-replica", type: "RDS", region: "us-east-1", status: "Active", spend: "$290.00", utilization: "15%" },
  { id: "v-1123", name: "analytics-job-01", type: "Lambda", region: "us-east-1", status: "Paused", spend: "$0.00", utilization: "0%" },
];

export default function ResourceInventory() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Resource Inventory</h1>
          <p className="text-sm text-foreground/40 font-medium">Manage and audit your multi-cloud infrastructure in real-time.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all">
          <Plus size={16} strokeWidth={3} />
          Add Provider
        </button>
      </header>

      <div className="glass rounded-[32px] border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
              <input 
                type="text" 
                placeholder="Filter resources..." 
                className="bg-white/5 border border-white/5 rounded-full py-2 px-10 text-xs focus:border-primary/40 focus:outline-none transition-all placeholder:text-foreground/20"
              />
            </div>
            <button className="glass px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5">
               <Filter size={14} />
               Regional View
            </button>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">{resources.length} resources found</p>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 border-b border-white/5">
              <th className="px-8 py-6">Resource</th>
              <th className="px-8 py-6">Type</th>
              <th className="px-8 py-6">Region</th>
              <th className="px-8 py-6">Status</th>
              <th className="px-8 py-6 text-right">Spend/mo</th>
              <th className="px-8 py-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {resources.map((item) => (
              <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                       <Activity className="w-4 h-4 text-foreground/20 group-hover:text-primary transition-colors" />
                     </div>
                     <div>
                        <p className="text-sm font-bold">{item.name}</p>
                        <p className="text-[10px] text-foreground/20 font-medium">ID: {item.id}</p>
                     </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-[11px] font-black uppercase tracking-widest opacity-60">{item.type}</td>
                <td className="px-8 py-6 text-[11px] font-bold opacity-40 italic">{item.region}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    item.status === 'Active' 
                      ? "bg-primary/10 text-primary border border-primary/10" 
                      : "bg-white/5 text-foreground/20 border border-white/5"
                  }`}>
                    <Circle className={`w-1.5 h-1.5 ${item.status === 'Active' ? "fill-primary" : "fill-foreground/20"}`} />
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right font-black tracking-tighter text-sm">{item.spend}</td>
                <td className="px-8 py-6 text-right">
                  <button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center mx-auto text-foreground/20 hover:text-white transition-all">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
