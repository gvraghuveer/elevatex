"use client";

import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoNotice() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="fixed bottom-6 left-6 z-[100] max-w-sm glass p-4 rounded-2xl border border-white/10 shadow-2xl flex items-start gap-4 hidden sm:flex"
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
            <AlertTriangle size={16} />
          </div>
          <div className="flex-1 pr-2">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-1">Frontend Mockup</h4>
            <p className="text-[10px] text-foreground/50 font-medium leading-relaxed">
              This is a UI/UX demonstration. The backend engine and live cloud integrations are currently under active development.
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-foreground/40 hover:text-white transition-colors p-1 -mt-1 -mr-1"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
