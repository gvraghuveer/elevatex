"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  ChevronRight,
  TrendingDown
} from "lucide-react";

const insights = [
  {
    type: "CRITICAL",
    title: "Orphaned EBS Volumes",
    desc: "12 unattached volumes found in us-west-2 region. These resources are not linked to any instance but incur costs.",
    savings: "$210.40/mo",
    impact: "High",
    action: "Purge volumes"
  },
  {
    type: "OPTIMIZE",
    title: "RDS Instance Rightsizing",
    desc: "db-staging-01 has an average CPU utilization of < 5% for the last 30 days. Recommend downsizing from db.m5.large to db.t3.medium.",
    savings: "$45.20/mo",
    impact: "Medium",
    action: "Apply Resize"
  },
  {
    type: "AUTOPAUSE",
    title: "Global Idle Policy",
    desc: "32 development instances are running 24/7 with zero traffic after 6pm UTC. Auto-pause would slash 60% of their spend.",
    savings: "$2,912.00/mo",
    impact: "Severe",
    action: "Deploy Policy"
  }
];

export default function AIRecommendations() {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-12 flex justify-between items-end">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary mb-4 uppercase tracking-widest">
              <Sparkles size={12} fill="currentColor" />
              Intelligence Core Active
           </div>
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">AI Advisor</h1>
          <p className="text-sm text-foreground/40 font-medium">Ranked strategies and autonomous policies to slash waste.</p>
        </div>
        <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5">
           <div className="text-right">
              <p className="text-[10px] font-black uppercase text-foreground/40">Aggregated Potential</p>
              <p className="text-xl font-black text-primary">$3,167.60/mo</p>
           </div>
           <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
              <TrendingDown size={20} className="text-primary" />
           </div>
        </div>
      </header>

      <div className="space-y-8">
        {insights.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            className="group glass p-10 rounded-[48px] border border-white/5 flex flex-col md:flex-row items-center gap-10 hover:border-primary/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary/10 transition-colors">
               {item.type === 'AUTOPAUSE' ? <Zap className="w-8 h-8 text-primary" /> : 
                item.type === 'CRITICAL' ? <AlertCircle className="w-8 h-8 text-primary" /> : 
                <Activity className="w-8 h-8 text-primary" />}
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5 text-foreground/40 group-hover:border-primary group-hover:text-primary transition-colors">{item.impact} Impact</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed font-medium">{item.desc}</p>
              <div className="flex items-center gap-8">
                 <div className="flex items-center gap-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Monthly Savings:</p>
                    <p className="text-lg font-black text-primary">{item.savings}</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Difficulty:</p>
                    <div className="flex gap-1 text-primary">
                       {[1,2,3].map(j => <div key={j} className="w-4 h-1 rounded-full bg-primary/20">
                          {j <= 1 && <div className="w-full h-full bg-primary rounded-full" />}
                       </div>)}
                    </div>
                 </div>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-xl active:scale-95 group/btn whitespace-nowrap">
              {item.action}
              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
