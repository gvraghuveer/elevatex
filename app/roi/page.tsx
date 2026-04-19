"use client";

import { motion } from "framer-motion";
import { Zap, TrendingDown, Clock, ShieldCheck, Brain, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/marketing/Footer";

export default function ROIPage() {
  const [spend, setSpend] = useState(50000);
  const [savings, setSavings] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [carbon, setCarbon] = useState(0);

  useEffect(() => {
    // Logic: Avg savings of 70% for aggressive optimization
    const calculatedSavings = spend * 0.73 * 12;
    // Logic: Carbon footprint reduction (mock calculation)
    const calculatedCarbon = (spend / 1000) * 0.8;
    // Logic: Efficiency gain based on utilization (mock)
    const calculatedEfficiency = 340 + (spend / 10000);

    setSavings(calculatedSavings);
    setCarbon(calculatedCarbon);
    setEfficiency(calculatedEfficiency);
  }, [spend]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground overflow-x-hidden">
      <div className="max-w-7xl mx-auto pb-32">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/40 hover:text-white transition-colors mb-12 group">
           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
           <span className="text-[10px] font-black uppercase tracking-widest">Back to Ecosystem</span>
        </Link>

        <header className="max-w-3xl mb-24">
           <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
             Cloud ROI <br /><span className="text-gradient italic">Calculator.</span>
           </h1>
           <p className="text-xl text-foreground/40 font-medium leading-relaxed">
             Quantify the impact of autonomous lifecycle management. Input your monthly recurring cost to see the ElevateX advantage.
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           {/* Calculator Controls */}
           <div className="space-y-12">
              <div className="space-y-6">
                 <div className="flex justify-between items-end">
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary">Monthly Spend</h3>
                    <span className="text-3xl font-black italic">{formatCurrency(spend)}</span>
                 </div>
                 
                 <div className="relative h-12 flex items-center">
                    <input 
                      type="range" 
                      min="5000" 
                      max="1000000" 
                      step="5000"
                      value={spend}
                      onChange={(e) => setSpend(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary focus:outline-none"
                    />
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-primary rounded-full pointer-events-none shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                      style={{ width: `${(spend / 1000000) * 100}%` }}
                    />
                 </div>

                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-foreground/20">
                    <span>₹5,000</span>
                    <span>₹10,00,000+</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <CalculatorInput label="Est. Node Count" value={`${Math.round(spend / 1200)} Nodes`} />
                 <CalculatorInput label="Avg. Idle Rate" value="68%" />
              </div>

              <div className="p-8 glass rounded-[40px] border border-white/5 space-y-4">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground/20 italic">Optimization Focus</h4>
                 <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest cursor-pointer">Aggressive</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 text-foreground/40 text-[10px] font-black uppercase tracking-widest border border-white/5 hover:bg-white/10 transition-all cursor-pointer">Balanced</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 text-foreground/40 text-[10px] font-black uppercase tracking-widest border border-white/5 hover:bg-white/10 transition-all cursor-pointer">Safety-First</span>
                 </div>
              </div>
           </div>

           {/* Results Card */}
           <div className="glass p-12 md:p-16 rounded-[64px] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent -z-10" />
              
              <div className="space-y-12">
                 <div className="flex justify-between items-start">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 italic text-primary">Potential Annual Savings</p>
                       <motion.h2 
                         key={savings}
                         initial={{ scale: 0.95, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic tracking-tighter text-primary group-hover:scale-105 transition-transform origin-left duration-700"
                       >
                         {formatCurrency(savings)}
                       </motion.h2>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                       <Zap size={32} />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                    <ResultItem label="Carbon Offset" value={`${carbon.toFixed(1)} Tons`} icon={<Globe className="w-4 h-4 text-emerald-500" />} />
                    <ResultItem label="Efficiency Gain" value={`+${efficiency.toFixed(1)}%`} icon={<TrendingDown className="w-4 h-4 text-primary" />} />
                    <ResultItem label="Auto-Actions/mo" value={`${(spend / 120).toFixed(0)}`} icon={<Brain className="w-4 h-4 text-primary" />} />
                    <ResultItem label="Payback Period" value="12 Days" icon={<Clock className="w-4 h-4 text-primary" />} />
                 </div>

                 <button className="w-full py-6 rounded-3xl bg-primary text-white text-xs font-black uppercase tracking-[0.4em] shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Generate Business Proposal
                 </button>
              </div>
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function CalculatorInput({ label, value }: { label: string, value: string }) {
   return (
      <div className="p-6 glass rounded-[32px] border border-white/5 space-y-2">
         <p className="text-[9px] font-black uppercase tracking-widest text-foreground/20">{label}</p>
         <p className="text-xl font-black italic">{value}</p>
      </div>
   );
}

function ResultItem({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
   return (
      <div className="space-y-3">
         <div className="flex items-center gap-2">
            {icon}
            <p className="text-[9px] font-black uppercase tracking-widest text-foreground/20">{label}</p>
         </div>
         <p className="text-3xl font-black italic tracking-tighter">{value}</p>
      </div>
   );
}

const Globe = ({ className }: { className?: string }) => (
   <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
   </svg>
);
