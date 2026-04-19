"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Activity, Cpu, Database, Wifi, ShieldAlert } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function SystemHUD() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<{id: number, text: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rawLogs = [
      "INIT: ElevateX Engine v1.0.4-beta...",
      "SYNC: Polling AWS CloudWatch metrics (US-East-1)",
      "SYNC: Polling GCP Compute Engine state (Asia-South-1)",
      "ANALYSIS: Core behavioral model active.",
      "DETECTION: Instance inst-9x2f marked as 'Idle'",
      "ACTION: Generating Auto-Pause recommendation...",
      "SECURITY: TLS 1.3 handshake successful.",
      "OPTIMIZATION: Predicted savings: $12.4/kWh per rack.",
      "HEARTBEAT: System nominal. Latency: 12ms."
    ];

    if (isOpen) {
      const interval = setInterval(() => {
        setLogs(prev => {
          const newLog = { 
            id: Date.now() + Math.random(), 
            text: rawLogs[Math.floor(Math.random() * rawLogs.length)] 
          };
          const next = [...prev, newLog];
          return next.slice(-15); // Keep more for a better fill
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <>
      <motion.button 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-40 right-8 z-[80] w-12 h-12 rounded-2xl glass border border-white/5 hidden md:flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/20 transition-all group overflow-hidden"
      >
         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
         <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 text-primary"
              >
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="terminal"
                initial={{ rotate: 90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <Terminal size={18} />
              </motion.div>
            )}
         </AnimatePresence>
         <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-32 right-24 z-[100] w-[380px] h-[580px] flex flex-col glass rounded-[40px] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl"
          >
            {/* HUD Header - More compact */}
            <div className="bg-primary/90 px-8 py-4 flex justify-between items-center backdrop-blur-md">
               <div className="flex items-center gap-3">
                  <Activity size={14} className="text-white animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Engine Live Feed</span>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
                  <X size={16} />
               </button>
            </div>

            {/* Metrics Grid */}
            <div className="p-6 grid grid-cols-2 gap-3 border-b border-white/5 bg-black/40">
               <HUDStat icon={<Cpu size={12} />} label="AI Load" value="14.2%" />
               <HUDStat icon={<Database size={12} />} label="Data Sync" value="99.9%" />
               <HUDStat icon={<Wifi size={12} />} label="Latency" value="12ms" />
               <HUDStat icon={<ShieldAlert size={12} />} label="Threats" value="00" />
            </div>

            {/* Scrolling Logs - Fixed Height, Auto Scroll */}
            <div 
              ref={scrollRef}
              className="flex-1 p-8 font-mono text-[10px] space-y-3 overflow-y-auto scroll-smooth custom-scrollbar bg-black/20"
            >
               {logs.map((log) => (
                 <motion.div 
                   key={log.id}
                   initial={{ opacity: 0, x: -5 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="text-foreground/40 flex gap-3 group border-l-2 border-transparent hover:border-primary/20 pl-2 transition-all"
                 >
                    <span className="text-primary shrink-0 opacity-20 group-hover:opacity-100 transition-opacity">0x</span>
                    <span className="group-hover:text-white transition-colors leading-relaxed">{log.text}</span>
                 </motion.div>
               ))}
               {logs.length === 0 && (
                 <div className="flex flex-col items-center justify-center h-full opacity-10 space-y-4">
                    <Terminal size={32} />
                    <p className="text-[10px] font-black uppercase tracking-widest text-center">Awaiting System Stream...</p>
                 </div>
               )}
            </div>

            {/* HUD Footer */}
            <div className="px-8 py-4 bg-white/5 flex justify-between items-center border-t border-white/5">
               <div className="flex gap-1.5 items-center">
                  {[1,2,3,4].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: [4, 12, 4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="w-1 bg-primary/40 rounded-full"
                    />
                  ))}
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-foreground/20 ml-2">Secure Link Active</span>
               </div>
               <span className="text-[9px] font-black tracking-widest text-foreground/10 uppercase">v1.2 // OPS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HUDStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
   return (
      <div className="glass p-3 rounded-2xl border border-white/5">
         <div className="flex items-center gap-2 text-foreground/20 mb-1">
            {icon}
            <span className="text-[7px] font-black uppercase tracking-[0.2em]">{label}</span>
         </div>
         <p className="text-base font-black italic tracking-tighter text-white">{value}</p>
      </div>
   );
}
