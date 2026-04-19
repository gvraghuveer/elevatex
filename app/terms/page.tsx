"use client";

import { motion } from "framer-motion";
import Footer from "@/components/marketing/Footer";
import { FileText, Scale, Gavel } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground selection:bg-primary/30">
      <div className="max-w-4xl mx-auto pb-32">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">
             <Scale size={12} />
             Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">Terms of Service</h1>
          <p className="text-foreground/40 font-medium">Last updated: April 18, 2026</p>
        </motion.header>

        <section className="space-y-16">
          <LegalSection title="1. Acceptance of Terms">
            <p>By accessing ElevateX, you agree to comply with these terms. The platform is currently in a "Beta" state as part of an Innovation & Entrepreneurship course project. Usage is at your own risk.</p>
          </LegalSection>

          <LegalSection title="2. Platform Usage">
            <p>You grant ElevateX permission to access your cloud provider APIs (via the credentials you provide) to perform monitoring and automated lifecycle actions (Pause/Resume). You are responsible for any costs incurred at the cloud provider level.</p>
          </LegalSection>

          <LegalSection title="3. Beta Disclaimer">
            <p>ElevateX is provided "as is". While we strive for 100% accuracy, the autonomous engine is experimental. The founders are not liable for any service interruptions or data loss resulting from automated infrastructure actions.</p>
          </LegalSection>

          <LegalSection title="4. Termination">
            <p>We reserve the right to suspend access to the platform for any account found to be abusing the API or engaging in behavior that threatens the security of our infrastructure.</p>
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
