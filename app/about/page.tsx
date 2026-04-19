"use client";

import { motion } from "framer-motion";
import Footer from "@/components/marketing/Footer";
import { Check, User, Code, PieChart, Globe } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "D Navadeep Reddy",
      role: "CEO",
      initials: "NR",
      icon: <User className="w-5 h-5" />,
      strengths: [
        "Strong understanding of market dynamics and business models",
        "Skilled in identifying opportunities and building strategy",
        "Focused on product vision and growth"
      ]
    },
    {
      name: "G V Raghuveer",
      role: "COO / CTO",
      initials: "RV",
      icon: <Code className="w-5 h-5" />,
      strengths: [
        "Deep technical knowledge in system design and development",
        "Capable of building scalable and efficient infrastructure",
        "Translates ideas into working solutions"
      ]
    },
    {
      name: "Eshan S K",
      role: "CFO / CMO",
      initials: "ES",
      icon: <PieChart className="w-5 h-5" />,
      strengths: [
        "Strong financial planning and cost optimization skills",
        "Good at building partnerships and managing stakeholders",
        "Ensures sustainable growth and resource management"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground overflow-x-hidden">
      <div className="max-w-7xl mx-auto pb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <header className="max-w-3xl mb-24">
            <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              The team behind <br /><span className="text-gradient italic">ElevateX.</span>
            </h1>
            <p className="text-xl text-foreground/40 font-medium leading-relaxed mb-6">
              We are a team of student entrepreneurs from <span className="text-white">REVA University, Bangalore</span>, 
              dedicated to solving cloud inefficiency through autonomous engineering and strategic business logic.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mt-4">
               <Globe size={12} className="text-primary" />
               Reva University, Rukmini Knowledge Park, Bangalore
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">The Vision</h3>
                <p className="text-sm text-foreground/40 leading-relaxed font-medium">
                   ElevateX was born from the realization that cloud waste isn't just a technical problem—it's a financial drain on innovation. Our mission is to automate the gap between "Active" and "Idle" infrastructure.
                </p>
             </div>
             <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">The Strategy</h3>
                <p className="text-sm text-foreground/40 leading-relaxed font-medium">
                   By combining deep technical infrastructure management with a shared-savings business model, we align our success directly with our customers' cost-reduction goals.
                </p>
             </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-6 mb-12">
               <h2 className="text-3xl font-black uppercase tracking-tight">Founding Team</h2>
               <div className="h-px bg-white/5 flex-1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="glass p-10 rounded-[48px] border border-white/5 flex flex-col h-full group hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-xl font-black group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      {member.initials}
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 text-foreground/20 group-hover:text-primary transition-colors">
                      {member.icon}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-1">{member.name}</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-primary">{member.role}</p>
                  </div>

                  <div className="space-y-4 mt-auto">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Key Strengths</p>
                    <ul className="space-y-3">
                      {member.strengths.map((s, j) => (
                        <li key={j} className="flex items-start gap-3 text-[11px] font-medium leading-relaxed text-foreground/40 italic">
                          <Check size={12} className="text-primary mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
