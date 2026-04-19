"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  Cloud, 
  Globe, 
  Box, 
  Layers, 
  Github, 
  Slack, 
  Zap, 
  Activity, 
  Search, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Brain 
} from "lucide-react";
import Footer from "@/components/marketing/Footer";

const features = [
  {
    title: "AI Infrastructure Monitoring",
    description: "ElevateX polls every resource every 30 seconds across AWS, GCP, and Azure. Our model analyzes CPU, memory, and network I/O simultaneously to declare an 'Idle' state with 99.9% accuracy.",
    icon: <Search className="w-8 h-8 text-primary" />,
    points: ["30s polling frequency", "Multi-metric cross-analysis", "Zero-impact monitoring"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    reverse: false
  },
  {
    title: "Autonomous Auto-Pause Engine",
    description: "Define simple guardrails: if idle > 15min and environment != production, pause the resource. ElevateX handles the complex provider API calls and state preservation automatically.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    points: ["Native API integration", "Automatic state snapshots", "Resume in < 60 seconds"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    reverse: true
  },
  {
    title: "Deep Cost Analytics",
    description: "Full visibility into your cloud footprint. Aggregate spend by provider, region, or custom tags. Track historical trends and correlate infrastructure actions with pricing deltas.",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    points: ["Granular tag-based tracking", "Interactive trend mapping", "Weekly Slack summaries"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    reverse: false
  },
  {
    title: "Predictive AI Advisor",
    description: "The engine analyzes 30-day patterns to forecast future waste. Receive ranked, high-confidence recommendations for resizing, reserved instance purchasing, and legacy cleanups.",
    icon: <Brain className="w-8 h-8 text-primary" />,
    points: ["ML-driven waste forecasting", "One-click optimization", "Confidence-scored actions"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    reverse: true
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground overflow-x-hidden selection:bg-primary/30">
      <div className="max-w-7xl mx-auto pb-48">
        {/* Hero Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">
             <Activity size={12} />
             Platform Anatomy
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
            Intelligence that <br /><span className="text-gradient italic">saves by default.</span>
          </h1>
          <p className="text-xl text-foreground/40 leading-relaxed font-medium max-w-2xl">
            ElevateX is a closed-loop autonomous system. It doesn't just watch your cloud—it actively manages it to eliminate waste without impacting performance.
          </p>
        </motion.header>

        {/* Feature Sections */}
        <div className="space-y-48">
          {features.map((feature, i) => (
            <section 
              key={feature.title} 
              className={`flex flex-col lg:items-center gap-16 lg:gap-32 ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight italic">
                  {feature.title}
                </h2>
                <p className="text-lg text-foreground/40 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <div className="space-y-4 pt-4">
                  {feature.points.map((point, j) => (
                    <div key={j} className="flex items-center gap-4 text-[13px] font-black uppercase tracking-widest text-foreground/60">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check size={14} className="text-white" strokeWidth={4} />
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="flex-1 relative group"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="glass rounded-[48px] p-4 border border-white/5 relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale opacity-50 contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                     <div className="glass px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Live Insight // Autonomous Control</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>

        {/* Integration Hub */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10" />
          <div className="glass rounded-[64px] p-16 md:p-32 border border-white/5 text-center space-y-16">
            <header className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">Built for your tech ecosystem.</h2>
              <p className="text-foreground/40 font-medium">Native connectivity with the tools you already rely on. No custom agents or complex tunneling required.</p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {[
                { name: "AWS", icon: <Cloud /> },
                { name: "GCP", icon: <Globe /> },
                { name: "Azure", icon: <Box /> },
                { name: "Terraform", icon: <Layers /> },
                { name: "Github", icon: <Github /> },
                { name: "Slack", icon: <Slack /> },
              ].map(brand => (
                <div key={brand.name} className="flex flex-col items-center gap-6 group hover:translate-y-[-8px] transition-transform">
                  <div className="w-20 h-20 bg-white/5 rounded-[32px] flex items-center justify-center text-3xl hover:bg-primary/10 hover:text-primary transition-all border border-white/5">
                    {brand.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase">{brand.name}</span>
                </div>
              ))}
            </div>

            <div className="pt-16">
               <button className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-2xl shadow-primary/20 hover:scale-105">
                  Request Custom Adapter
               </button>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
