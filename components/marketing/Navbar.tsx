"use client";

import { Zap, Menu, X, ArrowRight, Bell, User, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../common/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isDashboard = pathname?.startsWith("/dashboard");

  const notifications = [
    { id: 1, title: "Savings Alert", desc: "AI Engine paused 3 idle instances. Saved $42.10 today.", time: "2m ago", read: false },
    { id: 2, title: "Report Ready", desc: "Your weekly cloud spend audit is now available for review.", time: "1h ago", read: true },
    { id: 3, title: "Security Sync", desc: "AWS US-East-1 credentials successfully rotated.", time: "5h ago", read: true },
  ];

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "ROI", href: "/roi" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo Container */}
          <Link href="/" className="group relative z-50">
            <Logo />
          </Link>

          {/* Desktop Nav - Perfectly Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 glass p-1 rounded-full border border-white/5 shadow-2xl h-11 z-50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 h-full flex items-center rounded-full text-[11px] font-black uppercase tracking-widest transition-colors ${
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA / Dashboard Utils */}
          <div className="flex items-center gap-4 relative z-50 h-11">
            {isDashboard ? (
              <div className="flex items-center gap-4 pl-4 border-l border-white/10 relative h-11">
                <button
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileOpen(false);
                  }}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-all relative"
                >
                  <Bell size={16} />
                  {notifications.some(n => !n.read) && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-ping" />
                  )}
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-4 w-80 glass rounded-[32px] border border-white/5 p-6 shadow-2xl overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Notifications</h4>
                        <button className="text-[9px] font-black uppercase text-primary hover:underline">Mark All Read</button>
                      </div>
                      <div className="space-y-4">
                        {notifications.map(n => (
                          <div key={n.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                              <p className={`text-[11px] font-black uppercase italic ${n.read ? "text-foreground/40" : "text-white"}`}>{n.title}</p>
                              <span className="text-[9px] font-medium text-foreground/20">{n.time}</span>
                            </div>
                            <p className="text-[10px] text-foreground/30 leading-relaxed line-clamp-2">{n.desc}</p>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-6 py-3 border-t border-white/5 text-[9px] font-black uppercase tracking-widest text-foreground/20 hover:text-white transition-colors">
                        View All Activity
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/dashboard/profile"
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-xs transition-all border ${pathname === "/dashboard/profile"
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                      : "bg-primary/20 border-primary/20 text-primary hover:bg-primary/30"
                    }`}
                >
                NA
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-primary text-white border border-primary/20 px-8 h-11 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 flex items-center gap-2 group whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass w-11 h-11 rounded-xl border border-white/10 text-white flex items-center justify-center shrink-0"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full pt-32 px-10 space-y-8">
              {(isDashboard ? [
                { name: "Overview", href: "/dashboard" },
                { name: "Resources", href: "/dashboard/resources" },
                { name: "Analytics", href: "/dashboard/analytics" },
                { name: "AI Advisor", href: "/dashboard/recommendations" },
                { name: "Settings", href: "/dashboard/settings" }
              ] : navLinks).map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-white/5"
              >
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-white w-full py-6 rounded-3xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest"
                >
                  Sign Up
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
