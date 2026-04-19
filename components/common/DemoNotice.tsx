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
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:left-6 z-[100] flex items-center justify-center sm:block p-6 sm:p-0 bg-[#06080A]/90 sm:bg-transparent backdrop-blur-xl sm:backdrop-blur-none"
        >
          <div className="relative w-full max-w-sm glass p-8 sm:p-4 rounded-[40px] sm:rounded-2xl border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-4">
            <div className="w-16 h-16 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
              <AlertTriangle className="w-8 h-8 sm:w-4 sm:h-4" />
            </div>
            <div className="flex-1 pr-0 sm:pr-2">
              <h4 className="text-sm sm:text-[11px] font-black uppercase tracking-widest text-white mb-2 sm:mb-1">Frontend Mockup</h4>
              <p className="text-xs sm:text-[10px] text-foreground/50 font-medium leading-relaxed">
                This is a UI/UX demonstration. The backend engine and live cloud integrations are currently under active development.
              </p>
            </div>
            
            {/* Close 'X' - Top Right on Mobile, Inline on Desktop */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 sm:static sm:top-auto sm:right-auto text-foreground/40 hover:text-white transition-colors p-2 sm:p-1 sm:-mt-1 sm:-mr-1 bg-white/5 sm:bg-transparent rounded-full sm:rounded-none"
            >
              <X className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            </button>

            {/* Acknowledge Button - Only visible on Mobile */}
            <button 
              onClick={() => setIsVisible(false)}
              className="sm:hidden w-full mt-4 bg-primary hover:scale-105 transition-all active:scale-95 text-white py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20"
            >
              Acknowledge & Continue
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
