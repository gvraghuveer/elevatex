"use client";

import Link from "next/link";
import Logo from "../common/Logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Logo />
            <p className="text-sm text-foreground/30 font-medium leading-relaxed max-w-xs">
              Autonomous cloud management and cost reduction engine. Developed for the Innovation & Entrepreneurship course project.
            </p>
            <div className="flex gap-4">
               {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                 <Link key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/30 hover:text-primary hover:border-primary/20 transition-all">
                    <Icon size={18} />
                 </Link>
               ))}
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Product</h4>
             <ul className="space-y-4">
                <FooterLink href="/features">Features</FooterLink>
                <FooterLink href="/roi">ROI Calculator</FooterLink>
                <FooterLink href="/pricing">Pricing Plans</FooterLink>
             </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Resources</h4>
             <ul className="space-y-4">
                <FooterLink href="/about">About Project</FooterLink>
                <FooterLink href="/contact">Get in Touch</FooterLink>
                <FooterLink href="/docs">Professional Docs</FooterLink>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/10">
              &copy; 2026 ELEVATEX CLOUD SYSTEMS &nbsp; // &nbsp; ALL SYSTEMS NOMINAL
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-primary transition-colors">Security</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm font-bold text-foreground/40 hover:text-white transition-colors flex items-center gap-2 group">
        <div className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
        {children}
      </Link>
    </li>
  );
}
