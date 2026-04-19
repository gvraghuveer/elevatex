"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Zap, 
  TrendingDown, 
  Clock, 
  Server,
  ArrowUpRight,
  ShieldCheck,
  Brain
} from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Fleet Overview</h1>
          <p className="text-sm text-foreground/40 font-medium">Global cloud resource performance and efficiency audit.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/5 hover:bg-white/5 transition-all">Export PDF</button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">Run Fleet Audit</button>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard label="Monthly Spend" value="₹12,405" delta="-12%" trend="down" />
        <StatCard label="Estimated Savings" value="₹4,291" delta="+24%" trend="up" />
        <StatCard label="Resources Protected" value="58" delta="+4" trend="up" />
        <StatCard label="Health Score" value="98.2%" delta="Nominal" trend="none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Card */}
        <div className="lg:col-span-2 glass p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10" />
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black uppercase tracking-tight">Cloud Spend Forecast</h3>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-white/10">1D</span>
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold cursor-pointer">1W</span>
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-white/10">1M</span>
            </div>
          </div>
          
          <div className="h-64 flex items-end gap-2 px-2">
            {[35, 45, 30, 60, 40, 75, 50, 65, 45, 80, 55, 70].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className={`flex-1 rounded-t-lg transition-all ${i === 9 ? "bg-primary shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "bg-white/10 group-hover:bg-white/20"}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-6 px-2 text-[10px] font-black uppercase tracking-widest text-foreground/20">
            <span>Oct 01</span>
            <span>Oct 07</span>
            <span>Oct 14</span>
            <span>Oct 21</span>
            <span>Oct 28</span>
          </div>
        </div>

        {/* AI Recommendations Snippet */}
        <div className="glass p-8 rounded-[32px] border border-white/5 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Brain size={20} />
             </div>
             <h3 className="text-xl font-black uppercase tracking-tight">AI Advisor</h3>
          </div>
          
          <div className="space-y-4 mb-auto">
             <RecommendationItem 
                title="Stale DB Instance" 
                save="₹142/mo" 
                desc="db-prod-replica has 0 connections for 7 days."
             />
             <RecommendationItem 
                title="S3 Lifecyle Policy" 
                save="₹890/mo" 
                desc="Move 4.2TB of logs to Glacier Instant Retrieval."
             />
             <RecommendationItem 
                title="EKS Rightsizing" 
                save="₹315/mo" 
                desc="Cluster 'omega' is over-provisioned by 4 nodes."
             />
          </div>

          <button className="w-full mt-10 py-4 glass border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
             View Deep Insights
          </button>
        </div>
      </div>

      {/* Live Activity Feed */}
      <section className="mt-12 glass rounded-[40px] border border-white/5 overflow-hidden">
        <div className="bg-white/5 px-6 sm:px-8 py-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Engine Live Feed // Autonomous Ops</span>
           </div>
           <span className="text-[10px] font-mono text-foreground/20">System Nominal // 58 Resources Protected</span>
        </div>
        <div className="p-8 font-mono text-[11px] space-y-3 h-48 overflow-y-auto custom-scrollbar">
           <ActivityLog time="20:31:05" type="INFO" msg="Scanning AWS US-East-1 for idle compute resources..." />
           <ActivityLog time="20:31:08" type="WARN" msg="Detected 3 idle EC2 instances in t3.medium tier." />
           <ActivityLog time="20:31:12" type="ACTION" msg="Executing Auto-Pause on inst-0a2b4c6d (Project Alpha)..." highlight />
           <ActivityLog time="20:31:15" type="SUCCESS" msg="Instance paused. State snapshot preserved. Delta: -₹0.04/hr" />
           <ActivityLog time="20:31:22" type="INFO" msg="AI Advisor: S3 Lifecycle recommendation generated for Bucket 'logs-stg'." />
           <ActivityLog time="20:31:30" type="INFO" msg="Polling heartbeat received from Azure-Staging-01." />
           <ActivityLog time="20:31:40" type="DEBUG" msg="Cross-correlating CPU patterns for EKS cluster 'omega'..." />
        </div>
      </section>
    </div>
  );
}

function ActivityLog({ time, type, msg, highlight = false }: { time: string, type: string, msg: string, highlight?: boolean }) {
   return (
      <div className={`flex gap-4 group transition-colors ${highlight ? "text-primary bg-primary/5 -mx-4 px-4 py-1 rounded" : "text-foreground/40 hover:text-white"}`}>
         <span className="text-foreground/20 shrink-0 group-hover:text-primary transition-colors">[{time}]</span>
         <span className={`w-16 shrink-0 font-black ${
           type === 'SUCCESS' ? "text-success" : 
           type === 'WARN' ? "text-primary" : 
           type === 'ACTION' ? "text-white" : 
           "text-foreground/20"
         }`}>[{type}]</span>
         <span className="flex-1 italic">{msg}</span>
      </div>
   );
}

function StatCard({ label, value, delta, trend }: { label: string, value: string, delta: string, trend: 'up' | 'down' | 'none' }) {
  return (
    <div className="glass p-8 rounded-[32px] border border-white/5 group hover:border-primary/20 transition-all">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-3">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-4xl font-black tracking-tighter">{value}</h3>
        <div className={`flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full ${
          trend === 'down' ? "bg-primary/20 text-primary border border-primary/10" : 
          trend === 'up' ? "bg-success/20 text-success border border-success/10" : 
          "bg-white/5 text-white/40"
        }`}>
          {trend === 'down' && <ArrowUpRight className="w-3 h-3 rotate-90" />}
          {trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
          {delta}
        </div>
      </div>
    </div>
  );
}

function RecommendationItem({ title, save, desc }: { title: string, save: string, desc: string }) {
   return (
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
         <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-black uppercase tracking-tight">{title}</p>
            <p className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full">{save}</p>
         </div>
         <p className="text-[11px] text-foreground/40 font-medium leading-relaxed">{desc}</p>
      </div>
   );
}
