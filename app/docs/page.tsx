"use client";

import { motion } from "framer-motion";
import { Book, Zap, Shield, Cloud, Terminal, Code } from "lucide-react";
import Footer from "@/components/marketing/Footer";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground">
      <div className="max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-16">
          {/* Internal Nav */}
          <aside className="hidden lg:block space-y-8">
            <div className="space-y-4">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Getting Started</h4>
               <ul className="space-y-2">
                  <DocsLink active>Introduction</DocsLink>
                  <DocsLink>Quickstart Guide</DocsLink>
                  <DocsLink>Core Concepts</DocsLink>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Architecture</h4>
               <ul className="space-y-2">
                  <DocsLink>Cloud Adapters</DocsLink>
                  <DocsLink>AI Recommendations</DocsLink>
                  <DocsLink>Security Model</DocsLink>
               </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Documentation</h1>
              <p className="text-lg text-foreground/40 font-medium leading-relaxed mb-12">
                ElevateX is built for infrastructure teams who want to automate cloud waste reduction without sacrificing reliability. Our platform connects to your cloud providers and applies autonomous lifecycle management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                 <DocCard icon={<Zap />} title="Real-time Execution" description="Control resources with sub-minute latency across AWS, GCP, and Azure." />
                 <DocCard icon={<Shield />} title="Safety Guardrails" description="Built-in exclusion zones that ensure production flows are never interrupted." />
              </div>

              <div className="prose prose-invert max-w-none">
                 <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Introduction</h2>
                 <p className="text-foreground/60 mb-8 leading-relaxed">
                   To get started, navigate to your <span className="text-primary font-bold">Dashboard</span> and connect your first cloud account. We support IAM-based authentication for secure, read-write access to resource lifecycle states.
                 </p>
                 <div className="bg-white/5 border border-white/5 rounded-2xl p-6 font-mono text-[11px] text-primary/80">
                    # Example installation check<br />
                    $ npx elevatex-cli auth login<br />
                    $ elevatex status --all
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function DocsLink({ children, active = false }: { children: React.ReactNode, active?: boolean }) {
  return (
    <li>
      <button className={`text-[11px] font-black uppercase tracking-widest transition-colors ${active ? "text-primary" : "text-foreground/20 hover:text-white"}`}>
        {children}
      </button>
    </li>
  );
}

function DocCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-8 rounded-3xl border border-white/5 space-y-4 hover:border-primary/20 transition-all group">
       <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <h3 className="text-sm font-black uppercase tracking-tight">{title}</h3>
       <p className="text-[11px] text-foreground/40 font-medium leading-relaxed">{description}</p>
    </div>
  );
}
