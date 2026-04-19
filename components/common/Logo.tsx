"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 select-none transition-transform active:scale-95 ${className}`}>
      <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase">
        Elevate
      </span>
      <span className="text-xl md:text-2xl font-black italic tracking-tighter text-primary uppercase relative">
        -X
        <span className="absolute -top-1 -right-6 text-[8px] font-black text-primary/60 border border-primary/20 px-1 rounded-sm bg-primary/5 italic truncate">BETA</span>
        <motion.span 
          initial={{ opacity: 0.5, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 blur-[2px]" 
        />
      </span>
    </div>
  );
}
