"use client";

import { motion } from "framer-motion";
import Footer from "@/components/marketing/Footer";
import { ShieldCheck, Lock, Activity, Server, Key } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground selection:bg-primary/30">
      <div className="max-w-4xl mx-auto pb-32">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">
             <ShieldCheck size={12} />
             Enterprise Grade
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">Security Architecture</h1>
          <p className="text-xl text-foreground/40 font-medium leading-relaxed max-w-2xl mt-8">
            ElevateX is built on a "Least Privilege" philosophy. We only ask for the minimum permissions required to achieve your cost-saving goals.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <SecurityCard 
              icon={<Key className="text-primary" />}
              title="Identity Management"
              description="We use short-lived tokens and cross-account IAM roles for AWS. Your master credentials never touch our database."
           />
           <SecurityCard 
              icon={<Lock className="text-primary" />}
              title="Zero Data Access"
              description="Our engine lives on the control plane. We never look at your instance disks, databases, or application logic."
           />
           <SecurityCard 
              icon={<Server className="text-primary" />}
              title="Isolated Compute"
              description="Each optimization engine runs in a dedicated, ephemeral container to ensure zero cross-tenant contamination."
           />
           <SecurityCard 
              icon={<Activity className="text-primary" />}
              title="Full Audit Logs"
              description="Every action taken by ElevateX is logged with a detailed audit trail accessible via the dashboard."
           />
        </div>

        <section className="space-y-16">
          <LegalSection title="Infrastructure Safety">
            <p>All ElevateX infrastructure is hosted in SOC2 Type II compliant data centers. We undergo regular automated vulnerability scans and follow OWASP top 10 best practices for our API and Dashboard components.</p>
          </LegalSection>
        </section>
      </div>
      <Footer />
    </main>
  );
}

function SecurityCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-10 rounded-[40px] border border-white/5 group hover:border-primary/20 transition-all">
       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          {icon}
       </div>
       <h3 className="text-lg font-black uppercase tracking-tight mb-2 italic">{title}</h3>
       <p className="text-sm text-foreground/40 font-medium leading-relaxed">{description}</p>
    </div>
  );
}

function LegalSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black uppercase tracking-tight border-l-2 border-primary pl-6">{title}</h2>
      <div className="text-foreground/60 leading-relaxed font-medium pl-6">
        {children}
      </div>
    </div>
  );
}
