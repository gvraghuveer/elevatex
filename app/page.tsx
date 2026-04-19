"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Zap, 
  Clock, 
  Cpu, 
  BarChart3, 
  Bell, 
  Brain, 
  Github, 
  ChevronRight,
  Cloud,
  Globe,
  Box,
  Layers,
  Slack
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "./assets/hero-bg.png";
import dashboardPreview from "./assets/dashboard-preview.png";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E14] overflow-x-hidden selection:bg-primary/30 text-foreground relative">
      {/* Hero Background Image */}
      <div className="fixed inset-0 -z-20 opacity-40 overflow-hidden">
        <Image 
          src={heroBg} 
          alt="ElevateX Background" 
          fill 
          className="object-cover scale-110 blur-[2px] sm:blur-0"
          priority
        />
      </div>

      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 text-[9px] font-black text-primary mb-8 tracking-[0.2em] uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          DEMO VERSION // BETA ACCESS
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter max-w-5xl leading-[0.95] text-gradient uppercase">
            Run only <br /> when needed.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/40 max-w-2xl mb-12 leading-relaxed font-medium"
        >
          The AI-powered management layer that automatically pauses 
          idle resources and slashes your cloud bill by up to 80%.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mt-4"
        >
          <Link href="/dashboard" className="group w-full sm:w-auto justify-center bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95">
            Start Free Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/features" className="group w-full sm:w-auto justify-center glass text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-white/5">
            See how it works
          </Link>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 w-full max-w-5xl relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full scale-90 opacity-40" />
          <div className="glass-morphism rounded-[32px] p-2 border border-white/5 relative overflow-hidden shadow-2xl animate-float">
             <div className="relative rounded-[24px] overflow-hidden aspect-[16/9] bg-black/60">
                <Image 
                  src={dashboardPreview} 
                  alt="ElevateX Dashboard" 
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Visual accents */}
                <div className="absolute top-3 left-3 p-3 sm:top-8 sm:left-8 sm:p-6 glass rounded-xl sm:rounded-2xl border border-white/5">
                   <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Total Savings</p>
                   <p className="text-xl sm:text-3xl font-black">$42,912.42</p>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar / Integrations */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 text-center">
               Integrates with your entire stack
            </h3>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-100 items-center">
               <div className="flex flex-col items-center gap-3">
                  <Cloud size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">AWS</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Globe size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">GCP</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Box size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Azure</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Layers size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Terraform</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Github size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Github</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <Slack size={32} strokeWidth={1} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Slack</span>
               </div>
            </div>
         </div>
      </section>

      {/* How it Works Workflow */}
      <section className="py-32 px-6 bg-[#06080A]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">The Autonomous Loop</h2>
               <p className="text-lg text-foreground/40 font-medium max-w-2xl mx-auto">A zero-touch engine that operates continuously in the background, ensuring you only pay for active compute.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
               
               {[
                  { step: "01", title: "Observe", desc: "Read-only polling across AWS, GCP, and Azure to establish a baseline of CPU and Network I/O.", delay: 0 },
                  { step: "02", title: "Analyze", desc: "The AI engine filters out cron jobs and background noise to determine true application idle states.", delay: 0.2 },
                  { step: "03", title: "Act", desc: "Resources are safely suspended. When traffic returns, the engine restores state in under 60 seconds.", delay: 0.4 }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: item.delay }}
                     className="glass p-12 rounded-[40px] border border-white/5 relative group"
                  >
                     <div className="text-6xl font-black text-white/20 mb-8 italic group-hover:text-primary/40 transition-colors">{item.step}</div>
                     <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                     <p className="text-foreground/40 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">Platform Capabilities</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-6 h-6 text-primary" />, title: "Rapid Detection", description: "Polled every 30s. Idle declared in under a minute when metrics flatline." },
            { icon: <Cpu className="w-6 h-6 text-primary" />, title: "Auto-Pause Engine", description: "Autonomous lifecycle management. Resume in seconds when requests return." },
            { icon: <Brain className="w-6 h-6 text-primary" />, title: "AI Cost Advisor", description: "Ranked reduction strategies generated every 24 hours based on usage." },
            { icon: <BarChart3 className="w-6 h-6 text-primary" />, title: "Full Visibility", description: "Multi-cloud aggregation into a single, real-time command center." },
            { icon: <Bell className="w-6 h-6 text-primary" />, title: "Smart Alerts", description: "Context-aware notifications that only trigger for meaningful changes." },
            { icon: <Shield className="w-6 h-6 text-primary" />, title: "Secure Guardrails", description: "Safety-first policies that never affect customer-facing production." },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <FeatureCard {...feat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Security Vault */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="glass p-12 md:p-16 rounded-[64px] border border-white/10 shadow-2xl relative"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent -z-10 rounded-[64px]" />
               <Shield className="w-16 h-16 text-primary mb-12" />
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">Zero-Impact <br/><span className="text-gradient italic">Operations.</span></h3>
               <div className="space-y-6">
                  {[
                     "Read-only IAM roles by default",
                     "SOC2 Type II & ISO 27001 Compliant",
                     "Never touches production environments",
                     "Failsafe manual overrides for everything"
                  ].map((point, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                           <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-sm font-black uppercase tracking-widest text-foreground/60">{point}</p>
                     </div>
                  ))}
               </div>
            </motion.div>
            
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Enterprise-grade safety guardrails.</h2>
               <p className="text-lg text-foreground/40 font-medium leading-relaxed">
                  We know that touching your infrastructure is terrifying. That's why ElevateX operates entirely out-of-band. It requires zero agents to be installed, uses strict IAM boundaries, and has a hard-coded policy to completely ignore tagged production clusters.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-2 text-primary text-[11px] font-black uppercase tracking-widest hover:underline mt-4">
                  View Security Whitepaper <ArrowRight size={14} />
               </Link>
            </div>
         </div>
      </section>

      {/* Savings Calculator (Entrepreneurship Hook) */}
      <section className="py-32 px-6 border-y border-white/5 bg-primary/[0.02]">
         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-gradient">
                  How much are <br /> you wasting?
               </h2>
               <p className="text-lg text-foreground/40 font-medium leading-relaxed max-w-sm">
                  Most startups pay for 720 hours of compute per month, but only utilize 140. ElevateX captures the difference.
               </p>
               <div className="space-y-4 pt-10">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-primary">
                     <span>Current Monthly Spend</span>
                     <span>₹50,000</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                     <div className="absolute inset-y-0 left-0 w-[40%] bg-primary shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                     {/* Hover effect to simulate slider */}
                     <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-lg" />
                  </div>
               </div>
            </div>

            <div className="glass p-12 rounded-[56px] border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <Zap size={24} />
                  </div>
               </div>
               
               <div className="space-y-10">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 italic">Projected Annual Savings</p>
                     <motion.h4 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       className="text-6xl md:text-7xl font-black tracking-tighter text-primary italic"
                     >
                        ₹3,14,200
                     </motion.h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-foreground/20">Efficiency Boost</p>
                        <p className="text-2xl font-black text-white">+340%</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-foreground/20">Payback Period</p>
                        <p className="text-2xl font-black text-white">12 Days</p>
                     </div>
                  </div>

                  <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all group">
                     Run Custom Audit 
                     <span className="ml-2 text-primary opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
               </div>
            </div>
         </div>
      </section>


      {/* Bottom CTA */}
      <section className="py-32 px-6">
         <div className="max-w-4xl mx-auto relative overflow-hidden rounded-[48px] p-8 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-primary/10 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent -z-10" />
            <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tight">Ready to stop cloud waste?</h2>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 md:px-12 py-5 w-full sm:w-auto justify-center rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-3 mx-auto transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
               Join Private Beta
               <ChevronRight className="w-5 h-5" />
            </button>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass p-10 rounded-3xl border border-white/5 space-y-6 hover:border-primary/20 transition-all group relative overflow-hidden"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-white/5">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
        <p className="text-foreground/30 leading-relaxed text-sm font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
