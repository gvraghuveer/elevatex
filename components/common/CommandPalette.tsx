"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, Zap, BarChart3, Settings, User, Terminal, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    { icon: <Zap size={18} />, label: "Go to Dashboard", href: "/dashboard", category: "Navigation" },
    { icon: <BarChart3 size={18} />, label: "View Analytics", href: "/dashboard/analytics", category: "Navigation" },
    { icon: <Settings size={18} />, label: "Platform Settings", href: "/dashboard/settings", category: "System" },
    { icon: <User size={18} />, label: "User Profile", href: "/dashboard/profile", category: "Account" },
    { icon: <Terminal size={18} />, label: "Open Engine Logs", href: "/dashboard", category: "Developer" },
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(search.toLowerCase()) || 
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-[90] glass px-5 py-3 rounded-2xl border border-white/5 hidden md:flex items-center gap-3 group hover:border-primary/20 hover:bg-primary/5 transition-all shadow-2xl"
          >
             <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-foreground/40 group-hover:text-primary transition-colors">
                <Search size={16} />
             </div>
             <div className="flex flex-col items-start pr-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-foreground/20">Spotlight</span>
                <div className="flex items-center gap-1.5">
                   <span className="text-[10px] font-black uppercase text-foreground/60">Press</span>
                   <div className="px-1.5 py-0.5 rounded-md bg-white/10 border border-white/5 text-[9px] font-black text-white flex items-center gap-1">
                      <Command size={10} />
                      <span>K</span>
                   </div>
                </div>
             </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="w-full max-w-2xl glass rounded-[32px] border border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
              >
                <div className="p-6 flex items-center gap-4 border-b border-white/5">
                  <Search className="text-foreground/20" size={20} />
                  <input 
                    autoFocus
                    placeholder="Type a command or search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent border-none outline-none text-lg font-medium w-full text-white placeholder:text-foreground/10"
                  />
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black uppercase text-foreground/40">
                    <Command size={10} />
                    <span>K</span>
                  </div>
                </div>

                <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {filteredActions.length > 0 ? (
                    <div className="space-y-6">
                      {["Navigation", "System", "Account", "Developer"].map(cat => {
                        const catActions = filteredActions.filter(a => a.category === cat);
                        if (catActions.length === 0) return null;
                        return (
                          <div key={cat} className="space-y-2">
                            <h4 className="px-4 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">{cat}</h4>
                            <div className="space-y-1">
                              {catActions.map(action => (
                                <button 
                                  key={action.label}
                                  onClick={() => navigate(action.href)}
                                  className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 group transition-all"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-foreground/40 group-hover:text-primary transition-colors">
                                      {action.icon}
                                    </div>
                                    <span className="text-sm font-bold text-foreground/60 group-hover:text-white transition-colors">{action.label}</span>
                                  </div>
                                  <ArrowRight size={14} className="text-foreground/10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-20 text-center space-y-4">
                      <p className="text-sm font-medium text-foreground/20 italic">No commands found for "{search}"</p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-foreground/10">
                   <span>ElevateX Spotlight // v1.0.4-beta</span>
                   <div className="flex gap-4">
                      <span>↑↓ Navigate</span>
                      <span>⏎ Enter</span>
                      <span>⎋ Close</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
