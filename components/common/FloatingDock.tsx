"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Database, 
  BarChart3, 
  Brain, 
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingDock() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (!isDashboard) return null;

  const items = [
    { label: "Overview", icon: <LayoutDashboard size={22} />, href: "/dashboard" },
    { label: "Resources", icon: <Database size={22} />, href: "/dashboard/resources" },
    { label: "Analytics", icon: <BarChart3 size={22} />, href: "/dashboard/analytics" },
    { label: "AI Advisor", icon: <Brain size={22} />, href: "/dashboard/recommendations" },
    { label: "Settings", icon: <Settings size={22} />, href: "/dashboard/settings" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 rounded-3xl bg-[#0F1218]/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {items.map((item) => (
          <DockItem 
            key={item.label}
            icon={item.icon} 
            label={item.label} 
            href={item.href} 
            active={pathname === item.href}
          />
        ))}
      </motion.div>
    </div>
  );
}

function DockItem({ icon, label, href, active }: { icon: React.ReactNode, label: string, href: string, active: boolean }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
          active 
          ? "bg-primary text-white shadow-lg shadow-primary/30" 
          : "text-foreground/40 hover:text-white hover:bg-white/5"
        }`}
      >
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-black border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
          {label}
        </div>
        
        {icon}
        
        {active && (
          <motion.div 
            layoutId="dock-active"
            className="absolute -bottom-1 left-3 right-3 h-0.5 bg-white rounded-full" 
          />
        )}
      </motion.div>
    </Link>
  );
}
