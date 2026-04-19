"use client";

import { motion } from "framer-motion";
import Footer from "@/components/marketing/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground selection:bg-primary/30">
      <div className="max-w-4xl mx-auto pb-32">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">
             <Eye size={12} />
             Transparency
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">Privacy Policy</h1>
          <p className="text-foreground/40 font-medium">Last updated: April 18, 2026</p>
        </motion.header>

        <section className="space-y-16">
          <LegalSection title="1. Information We Collect">
            <p>At ElevateX, we collect telemetry data required to optimize your cloud infrastructure. This includes resource utilization metrics (CPU, RAM, I/O), cloud provider metadata, and account settings. We do not access the data stored within your instances or databases.</p>
          </LegalSection>

          <LegalSection title="2. How We Use Data">
            <p>Data is used exclusively to power the autonomous engine. Our AI models analyze usage patterns to determine "idle" states and provide resizing recommendations. We do not sell or share your telemetry data with third parties for marketing purposes.</p>
          </LegalSection>

          <LegalSection title="3. Data Retention">
            <p>Telemetry data is stored securely and retained for a period of 90 days to provide historical context for our AI Advisor. You may request immediate deletion of your historical data at any time via the platform settings.</p>
          </LegalSection>

          <LegalSection title="4. Security Measures">
            <p>All data is encrypted in transit via TLS 1.3 and at rest using AES-256. Access to our internal infrastructure is restricted to essential personnel only and protected by multi-factor authentication.</p>
          </LegalSection>
        </section>
      </div>
      <Footer />
    </main>
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
