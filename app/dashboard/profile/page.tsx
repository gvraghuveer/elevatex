"use client";

import { 
  User, 
  Mail, 
  MapPin, 
  Shield, 
  Smartphone, 
  History, 
  ArrowRight,
  LogOut,
  Camera,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfilePage() {
  const user = {
    name: "Name",
    initials: "NA",
    role: "Role",
    email: "[EMAIL_ADDRESS]",
    location: "Location",
    joined: "Joined",
    status: "Status"
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-8">
         <Link href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-white hover:bg-white/10 transition-all">
            <ArrowLeft size={14} />
            Back to Dashboard
         </Link>
      </div>
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 text-gradient">User Profile</h1>
        <p className="text-sm text-foreground/40 font-medium max-w-2xl leading-relaxed">
          Manage your presence, identity, and security footprint within the ElevateX autonomous engine.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-32">
        {/* Left Column: Avatar & Basic Info */}
        <div className="space-y-8">
           <div className="glass p-10 rounded-[56px] border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="relative inline-block mb-6 pt-4">
                 <div className="w-32 h-32 rounded-[48px] bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-5xl font-black text-primary italic shadow-2xl shadow-primary/10">
                    {user.initials}
                 </div>
                 <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform">
                    <Camera size={18} />
                 </button>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight italic">{user.name}</h2>
              <p className="text-xs font-black uppercase tracking-widest text-primary mt-2">{user.role}</p>
              
              <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                 <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-foreground/20">
                    <span>Member Since</span>
                    <span className="text-foreground">{user.joined}</span>
                 </div>
                 <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-foreground/20">
                    <span>Status</span>
                    <span className="text-success">{user.status}</span>
                 </div>
              </div>
           </div>

           <button className="w-full glass p-6 rounded-3xl border border-white/5 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest text-foreground/20 hover:text-primary hover:border-primary/20 transition-all">
              <LogOut size={18} />
              Sign Out
           </button>
        </div>

        {/* Right Columns: Detailed Settings */}
        <div className="lg:col-span-2 space-y-8">
           <Section label="Personal Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <ProfileDetail icon={<Mail size={16} />} label="Email Address" value={user.email} />
                 <ProfileDetail icon={<MapPin size={16} />} label="Location / Entity" value={user.location} />
                 <ProfileDetail icon={<Smartphone size={16} />} label="Rescue Phone" value="+91 •••• ••• 4242" />
                 <ProfileDetail icon={<History size={16} />} label="Preferred Timezone" value="IST (UTC+5:30)" />
              </div>
              <div className="mt-10 pt-8 border-t border-white/5 flex justify-end">
                 <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Request Identity Update</button>
              </div>
           </Section>

           <Section label="Security Center">
              <div className="space-y-6">
                 <SecurityPrompt 
                    title="Two-Factor Authentication" 
                    desc="MFA is currently active across all hardware-backed devices."
                    active={true}
                 />
                 <SecurityPrompt 
                    title="Hardware Key Sync" 
                    desc="YubiKey 5C detected and registered as primary fallback."
                    active={true}
                 />
                 <SecurityPrompt 
                    title="Session Lockdown" 
                    desc="Automatically sign out from all devices except this one."
                    active={false}
                 />
              </div>
           </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="glass p-12 rounded-[56px] border border-white/5">
       <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-foreground/20 mb-12 flex items-center gap-4">
          {label}
          <div className="h-px bg-white/5 flex-1" />
       </h3>
       {children}
    </div>
  );
}

function ProfileDetail({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="space-y-3">
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/20">
          {icon}
          {label}
       </div>
       <p className="text-sm font-bold text-foreground pl-6">{value}</p>
    </div>
  );
}

function SecurityPrompt({ title, desc, active }: { title: string, desc: string, active: boolean }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
       <div className="space-y-1">
          <p className="text-[13px] font-black uppercase tracking-tight italic flex items-center gap-2">
             {title}
             {active && <CheckCircle2 size={14} className="text-success" />}
          </p>
          <p className="text-[10px] text-foreground/30 font-medium leading-relaxed">{desc}</p>
       </div>
       <button className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
         active ? "bg-success/5 border border-success/20 text-success" : "bg-white/5 border border-white/10 text-foreground/20 hover:text-white"
       }`}>
          {active ? "Configured" : "Enable"}
       </button>
    </div>
  );
}
