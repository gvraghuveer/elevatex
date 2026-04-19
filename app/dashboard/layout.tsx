"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Server, 
  BarChart3, 
  Zap, 
  Settings, 
  Bell, 
  Search,
  ChevronDown,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "../../components/common/Logo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#06080A] text-foreground font-sans pt-20 md:pt-24 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Viewport */}
        <section className="h-full p-6 md:p-10 lg:p-16 max-w-[1600px] mx-auto">
          {children}
        </section>
      </main>
    </div>
  );
}

function SidebarNavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
        active 
          ? "bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5" 
          : "text-foreground/40 hover:text-white hover:bg-white/5"
      }`}
    >
      {active && <motion.div layoutId="sidebar-active" className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
      {icon}
      {label}
    </Link>
  );
}
