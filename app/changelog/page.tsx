"use client";

import { motion } from "framer-motion";
import { GitBranch, Rocket, Bug, Star } from "lucide-react";
import Footer from "@/components/marketing/Footer";

export default function ChangelogPage() {
  const updates = [
    {
      version: "v1.0.0-rc",
      date: "April 19, 2026",
      title: "Production Polish & Mobile Overhaul",
      items: [
        "Comprehensive responsive sweep across all 5 dashboard sub-pages",
        "Redesigned Settings navigation into a horizontal sliding pill-menu for mobile",
        "Overhauled the Demo Notice into a full-screen blurred modal on small devices",
        "Integrated Vercel Speed Insights for real-time Core Web Vitals tracking",
        "Stabilized Navbar animations to eliminate layoutId jumping during navigation",
        "Deployed custom cloud favicon and resolved footer z-index overlapping"
      ],
      type: "Update"
    },
    {
      version: "v0.1.0-beta",
      date: "April 18, 2026",
      title: "Initial Launch & MVP",
      items: [
        "Core AI Advisor engine implemented for waste detection",
        "Unified dashboard with AWS/GCP cross-cloud view",
        "Crimson visual identity and glassmorphism UI rollout",
        "Responsive desktop/mobile layouts refined"
      ],
      type: "Launch"
    },
    {
      version: "v0.0.9-alpha",
      date: "April 12, 2026",
      title: "Navigation Unification",
      items: [
        "Merged marketing and platform headers for seamless UX",
        "Introduced Skeleton loading states for fast feedback",
        "Fixed transition flicker on cross-route navigation"
      ],
      type: "Fix"
    }
  ];

  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground">
      <div className="max-w-4xl mx-auto pb-32">
        <h1 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase italic">Changelog</h1>

        <div className="space-y-24">
           {updates.map((update, i) => (
             <motion.div 
               key={update.version}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="relative border-l border-white/5 pl-12"
             >
                <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                   <span className="text-xs font-black text-primary uppercase tracking-widest">{update.version}</span>
                   <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.2em]">{update.date}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{update.title}</h3>
                <ul className="space-y-4">
                   {update.items.map((item, j) => (
                     <li key={j} className="flex items-start gap-3 text-sm text-foreground/40 font-medium">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
             </motion.div>
           ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
