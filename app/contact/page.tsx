"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import Footer from "@/components/marketing/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#06080A] pt-48 px-6 text-foreground">
      <div className="max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
           <div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Contact Us</h1>
              <p className="text-lg text-foreground/40 font-medium leading-relaxed mb-12">
                 Have questions about ElevateX? Reach out and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                 <ContactItem icon={<Mail size={20} />} label="Email" value="hello@elevatex.cloud" />
                 <ContactItem icon={<MessageSquare size={20} />} label="Discord" value="elevatex-community" />
                 <ContactItem icon={<MapPin size={20} />} label="Base" value="Reva University, Rukmini Knowledge Park, Bangalore" />
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass p-6 sm:p-10 rounded-[48px] border border-white/5"
           >
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormGroup label="Full Name" placeholder="Jane Doe" />
                    <FormGroup label="Email Address" placeholder="jane@company.com" />
                 </div>
                 <FormGroup label="Topic" placeholder="Beta Access, Partnership, Feedback..." />
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/20 ml-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-white/5 border border-white/5 rounded-3xl p-5 text-sm font-medium focus:border-primary/40 focus:outline-none transition-all placeholder:text-white/10"
                      placeholder="How can we help?"
                    />
                 </div>
                 <button className="w-full bg-primary py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors shadow-xl shadow-primary/20">
                    Send Message
                    <Send size={16} />
                 </button>
              </form>
           </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-5 group">
       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-foreground/20 group-hover:text-primary group-hover:bg-primary/10 transition-all border border-white/5">
          {icon}
       </div>
       <div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/10">{label}</p>
          <p className="text-sm font-bold text-foreground/60">{value}</p>
       </div>
    </div>
  );
}

function FormGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-3">
       <label className="text-[10px] font-black uppercase tracking-widest text-foreground/20 ml-2">{label}</label>
       <input 
         type="text" 
         className="w-full bg-white/5 border border-white/5 rounded-full px-6 py-4 text-xs font-medium focus:border-primary/40 focus:outline-none transition-all placeholder:text-white/10"
         placeholder={placeholder}
       />
    </div>
  );
}
