"use client";

import { 
  Bell, 
  Shield, 
  Key, 
  Cloud, 
  User, 
  CreditCard,
  ChevronRight,
  ShieldAlert,
  Save,
  Lock,
  Zap,
  RefreshCcw,
  CheckCircle2,
  Mail,
  Building2,
  Globe,
  Wallet,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PlatformSettings() {
  const [activeTab, setActiveTab] = useState("Organization Profile");

  const renderContent = () => {
    switch(activeTab) {
      case "Organization Profile":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <Section label="Core Identity">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputGroup label="Organization Name" value="ElevateX Labs" placeholder="Enter org name" />
                  <InputGroup label="Support Email" value="ops@elevatex.site" placeholder="Enter email" />
                  <InputGroup label="Headquarters" value="Reva University, Bangalore" placeholder="Enter location" />
                  <InputGroup label="Public URL" value="https://elevatex.site" placeholder="Enter URL" />
               </div>
            </Section>
            <Section label="Branding & Voice">
               <div className="space-y-8">
                  <ToggleItem 
                    title="Enable Custom Branding" 
                    desc="Apply your organization's custom hex codes and logo to the dashboard generated reports."
                    enabled={true}
                  />
                  <ToggleItem 
                    title="Slack Notifications Voice" 
                    desc="Use concise, engineering-first tone for all outgoing AI advisor recommendations."
                    enabled={false}
                  />
               </div>
            </Section>
          </motion.div>
        );
      case "Cloud Adapters":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <Section label="Active Infrastructure">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <IntegrationCard name="AWS Production US-East-1" status="Secure & Synced" provider="AWS" />
                  <IntegrationCard name="GCP Staging Core" status="Syncing Error" provider="GCP" hasError />
                  <button className="border-2 border-dashed border-white/5 rounded-[40px] p-10 flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground/20 hover:text-white group">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <Plus size={24} />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest">Connect New Provider</p>
                  </button>
               </div>
            </Section>
            <Section label="Data Sync Policy">
               <ToggleItem 
                  title="Force Real-time Polling" 
                  desc="Sync infrastructure state every 30 seconds. Disabling this defaults to 5-minute batch syncs."
                  enabled={true}
               />
            </Section>
          </motion.div>
        );
      case "Security & Access":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <Section label="Authentication & Guardrails">
               <div className="space-y-8">
                  <ToggleItem 
                    title="Enforce MFA" 
                    desc="Require Multi-Factor Authentication for all administrative actions on the engine."
                    enabled={true}
                  />
                  <ToggleItem 
                    title="Audit Logging" 
                    desc="Record every single API interaction and dashboard change in a permanent vault."
                    enabled={true}
                  />
               </div>
            </Section>
            <Section label="API Keys">
               <div className="flex items-center justify-between p-6 glass rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4">
                     <Key size={18} className="text-primary" />
                     <div>
                        <p className="text-xs font-black uppercase tracking-widest text-foreground">Main Production Key</p>
                        <p className="text-[10px] text-foreground/40 mt-1 font-mono">pk_live_**************************</p>
                     </div>
                  </div>
                  <button className="text-[10px] font-black uppercase text-primary hover:underline transition-all">Regenerate</button>
               </div>
            </Section>
          </motion.div>
        );
      case "Policies & Alerts":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <Section label="Auto-Pause Guardrails">
               <div className="space-y-8">
                  <ToggleItem 
                    title="Protect Production Assets" 
                    desc="Tag-based isolation. Resources with 'env=prod' or 'deployment=managed' will never be paused automatically."
                    enabled={true}
                  />
                  <ToggleItem 
                    title="Snap-State Preservation" 
                    desc="Always attempt a block-level snapshot before pausing any persistent compute instance."
                    enabled={true}
                  />
                  <ToggleItem 
                    title="Dry Run Enforcement" 
                    desc="Safety-first mode. Platform will simulate cost-saving actions and log results without execution."
                    enabled={false}
                  />
               </div>
            </Section>
          </motion.div>
        );
      case "Billing":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <Section label="Subscription Plan">
               <div className="p-10 glass rounded-[40px] border border-primary/20 bg-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Beta Participant Plan</p>
                     <h2 className="text-4xl font-black italic tracking-tighter">Enterprise Early Access</h2>
                     <p className="text-xs text-foreground/40 mt-4 leading-relaxed font-medium">Free for current Innovation & Entrepreneurship course duration.</p>
                  </div>
                  <button className="bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                    Manage Billing
                  </button>
               </div>
            </Section>
            <Section label="Payment Method">
               <div className="flex items-center justify-between p-8 glass rounded-3xl border border-white/5">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-10 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center font-black italic text-xs">VISA</div>
                     <div>
                        <p className="text-sm font-black italic uppercase">Visa Ending in 4242</p>
                        <p className="text-[10px] text-foreground/20 font-medium">Expires 12/28</p>
                     </div>
                  </div>
                  <button className="text-[10px] font-black uppercase text-foreground/20 hover:text-white transition-colors">Replace</button>
               </div>
            </Section>
          </motion.div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 text-gradient">Platform Settings</h1>
        <p className="text-sm text-foreground/40 font-medium max-w-2xl leading-relaxed">
          Configure fleet-wide policies, safety guardrails, and enterprise cloud integrations for your ElevateX autonomous engine.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-12">
        {/* Navigation Sidebar */}
        <div className="space-y-3">
           <SettingsNav 
             active={activeTab === "Organization Profile"} 
             onClick={() => setActiveTab("Organization Profile")}
             icon={<User size={18} />} 
             label="Organization Profile" 
           />
           <SettingsNav 
             active={activeTab === "Cloud Adapters"} 
             onClick={() => setActiveTab("Cloud Adapters")}
             icon={<Cloud size={18} />} 
             label="Cloud Adapters" 
           />
           <SettingsNav 
             active={activeTab === "Security & Access"} 
             onClick={() => setActiveTab("Security & Access")}
             icon={<Shield size={18} />} 
             label="Security & Access" 
           />
           <SettingsNav 
             active={activeTab === "Policies & Alerts"} 
             onClick={() => setActiveTab("Policies & Alerts")}
             icon={<Zap size={18} />} 
             label="Policies & Alerts" 
           />
           <SettingsNav 
             active={activeTab === "Billing"} 
             onClick={() => setActiveTab("Billing")}
             icon={<CreditCard size={18} />} 
             label="Billing & Quotas" 
           />
        </div>

        {/* Content Area */}
        <div className="relative">
           <AnimatePresence mode="wait">
              <div key={activeTab}>
                 {renderContent()}
              </div>
           </AnimatePresence>
           
           <div className="mt-12 py-8 border-t border-white/5 flex justify-end">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
                 <Save size={16} />
                 Commit Changes
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function SettingsNav({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
   return (
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 ${
         active ? "bg-primary/5 border-primary/20 text-primary shadow-2xl" : "bg-transparent border-white/5 text-foreground/40 hover:bg-white/5 hover:text-white"
      }`}>
         <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${active ? "bg-primary/10" : "bg-white/5"}`}>
               {icon}
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
         </div>
         {active && <motion.div layoutId="active-indicator" className="w-1 h-1 rounded-full bg-primary" />}
      </button>
   );
}

function Section({ label, children }: { label: string, children: React.ReactNode }) {
   return (
      <div className="glass p-10 md:p-12 rounded-[56px] border border-white/5">
         <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/20 mb-12 flex items-center gap-4">
            {label}
            <div className="h-px bg-white/5 flex-1" />
         </h3>
         {children}
      </div>
   );
}

function InputGroup({ label, value, placeholder }: { label: string, value: string, placeholder: string }) {
   return (
      <div className="space-y-3">
         <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">{label}</p>
         <input 
            type="text" 
            defaultValue={value} 
            placeholder={placeholder}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-xs font-medium focus:border-primary/40 focus:bg-primary/5 transition-all outline-none text-white selection:bg-primary/40"
         />
      </div>
   );
}

function ToggleItem({ title, desc, enabled }: { title: string, desc: string, enabled: boolean }) {
   const [isOn, setIsOn] = useState(enabled);
   return (
      <div className="flex items-center justify-between gap-12 group">
         <div className="flex-1">
            <p className="text-[13px] font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{title}</p>
            <p className="text-[11px] text-foreground/30 font-medium leading-relaxed max-w-xl">{desc}</p>
         </div>
         <button 
           onClick={() => setIsOn(!isOn)}
           className={`w-16 h-9 rounded-full p-1.5 transition-all duration-500 cursor-pointer ${isOn ? "bg-primary shadow-lg shadow-primary/20" : "bg-white/5 border border-white/10"}`}>
            <div className={`w-6 h-6 rounded-full bg-white transition-all duration-500 transform ${isOn ? "translate-x-7" : "translate-x-0"}`} />
         </button>
      </div>
   );
}

function IntegrationCard({ name, status, provider, hasError = false }: { name: string, status: string, provider: string, hasError?: boolean }) {
   return (
      <div className={`p-10 rounded-[48px] border glass transition-all hover:translate-y-[-8px] group ${hasError ? "border-primary/20" : "border-white/5 hover:border-white/10"}`}>
         <div className="flex justify-between items-start mb-8">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl ${hasError ? "bg-primary/10 text-primary" : "bg-white/5 text-foreground/20"}`}>
               {provider[0]}
            </div>
            {hasError ? (
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary animate-pulse">
                  <ShieldAlert size={14} />
                  <span className="text-[8px] font-black uppercase">Action Required</span>
               </div>
            ) : (
               <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-foreground/10 group-hover:text-success transition-colors">
                  <CheckCircle2 size={18} />
               </div>
            )}
         </div>
         <p className="text-[13px] font-black uppercase tracking-tight mb-2">{name}</p>
         <div className="flex items-center gap-2">
            <RefreshCcw size={12} className={`text-foreground/20 ${!hasError && "animate-spin-slow group-hover:text-success"}`} />
            <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${hasError ? "text-primary" : "text-foreground/20 group-hover:text-success transition-colors"}`}>{status}</p>
         </div>
      </div>
   );
}

const Plus = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
