"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingDown, 
  Globe, 
  CreditCard,
  ArrowRight,
  Zap,
  Activity,
  Calendar
} from "lucide-react";

export default function CostAnalytics() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 text-gradient">Cost Analytics</h1>
          <p className="text-sm text-foreground/40 font-medium max-w-xl leading-relaxed">
            Real-time spend mapping across multi-cloud infrastructure. Analyzing and aggregating 4.2k monthly lifecycle events.
          </p>
        </div>
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-white/5">
           <Calendar size={14} className="text-primary" />
           <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Fiscal Q2 // 2026</span>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr,400px] gap-8 mb-12">
        {/* Trend Analysis */}
        <div className="glass p-8 sm:p-12 rounded-[56px] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 sm:p-8">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <TrendingDown size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">-12.4% vs Last Month</span>
             </div>
          </div>

          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-foreground/20 mb-16 flex items-center gap-4">
             Spend Dynamics
             <div className="h-px bg-white/5 flex-1" />
          </h3>

          <div className="h-72 flex items-end justify-between gap-2 md:gap-4 px-2">
            {[20, 35, 25, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
               <div key={i} className="flex-1 group relative">
                  <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                     className={`w-full rounded-t-2xl transition-all duration-500 overflow-hidden relative ${
                       i === 11 
                       ? "bg-primary shadow-[0_0_40px_rgba(220,38,38,0.4)]" 
                       : "bg-white/[0.03] group-hover:bg-white/[0.08]"
                     }`}
                  >
                     {i === 11 && (
                        <motion.div 
                           animate={{ y: ["0%", "100%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                        />
                     )}
                  </motion.div>
                  {i % 2 === 0 && (
                     <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black text-foreground/10 uppercase tracking-widest group-hover:text-foreground/40 transition-colors">
                        M{i+1}
                     </span>
                  )}
               </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
           <StatCard label="Total Monthly Spend" value="$12,404" change="+2.4%" icon={<CreditCard size={18} />} />
           <StatCard label="Savings (Autonomous)" value="$4,120" change="-18.1%" icon={<Zap size={18} />} color="text-primary" />
           <StatCard label="Engine Accuracy" value="99.4%" change="Stable" icon={<Activity size={18} />} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Provider Breakdown */}
        <div className="glass p-8 sm:p-12 rounded-[56px] border border-white/5">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-foreground/20 mb-12">Provider Distribution</h3>
          <div className="space-y-10">
            <ProviderProgress label="AWS Infrastructure" value={64} spend="$7,939" color="bg-primary" />
            <ProviderProgress label="Google Cloud" value={22} spend="$2,729" color="bg-white/20" />
            <ProviderProgress label="Azure Systems" value={14} spend="$1,736" color="bg-white/5" />
          </div>
        </div>

        {/* Global Operations */}
        <div className="glass p-8 sm:p-12 rounded-[56px] border border-white/5 overflow-hidden group">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-foreground/20 mb-12">Global Footprint</h3>
          <div className="h-64 relative flex items-center justify-center">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Globe size={240} className="text-foreground animate-spin-slow" />
             </div>
             
             <div className="relative text-center space-y-4">
                <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-6 relative">
                   <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
                   <span className="text-2xl font-black italic tracking-tighter text-primary">08</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Active Regions</p>
                <div className="flex gap-2 justify-center">
                   <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest">US-EAST-1</div>
                   <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest">EU-WEST-4</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, change, icon, color = "text-foreground" }: { label: string, value: string, change: string, icon: React.ReactNode, color?: string }) {
   return (
      <div className="glass p-8 rounded-[40px] border border-white/5 group hover:border-primary/20 transition-all">
         <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-foreground/20 group-hover:bg-primary/10 group-hover:text-primary transition-all`}>
               {icon}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${change.includes("+") ? "text-success" : change.includes("-") ? "text-primary" : "text-foreground/20"}`}>
               {change}
            </span>
         </div>
         <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20 mb-1">{label}</p>
         <p className={`text-2xl font-black tracking-tighter italic ${color}`}>{value}</p>
      </div>
   );
}

function ProviderProgress({ label, value, spend, color }: { label: string, value: number, spend: string, color: string }) {
  return (
    <div className="space-y-4 group">
      <div className="flex justify-between items-end">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 group-hover:text-foreground transition-colors">{label}</p>
        <p className="text-sm font-black tracking-tighter italic">{spend}</p>
      </div>
      <div className="h-4 w-full bg-white/[0.03] rounded-full overflow-hidden p-1 border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${color} relative overflow-hidden`}
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}
