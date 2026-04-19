import { Check, Info, ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/marketing/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0B0E14] pt-48 pb-20 px-6 text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase uppercase leading-[0.95]">
            Plans that <span className="text-primary">grow with you.</span>
          </h1>
          <p className="text-lg text-foreground/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Free forever for students and open-source. Transparent usage-based pricing for startups and scale-ups.
          </p>
          
          {/* Annual Toggle Mockup */}
          <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-6 bg-white/[0.02] p-1.5 rounded-[32px] sm:rounded-full border border-white/5">
            <button className="bg-primary text-white w-full sm:w-auto px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">Monthly</button>
            <button className="text-foreground/40 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
              Yearly 
              <span className="ml-3 text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          <PricingCard 
            tier="Free"
            price="0"
            description="Perfect for learning and personal projects."
            features={["Up to 5 resources", "Next-day cost sync", "Email alerts", "Community support"]}
          />
          <PricingCard 
            tier="Pro"
            price="49"
            description="For professional teams building in the open."
            features={["Unlimited resources", "Real-time idle detection", "AI recommendations", "Slack & PagerDuty alerts", "API access"]}
            highlighted={true}
          />
          <PricingCard 
            tier="Startup"
            price="Custom"
            description="Bespoke optimization for large-scale infra."
            features={["Single-tenant instance", "Compliance reports", "Dedicated advisor", "Custom integrations", "24/7 Priority SLA"]}
            cta="Contact Sales"
          />
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-[0.4em] mb-16 text-center opacity-40">Frequently asked questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FAQItem question="Is the free tier really free forever?" answer="Yes. We believe in empowering student developers. No credit card required." />
            <FAQItem question="What counts as a resource?" answer="Any monitored VM instance, RDS database, or container cluster node." />
            <FAQItem question="Do you support on-prem?" answer="Currently we support AWS, GCP, and Azure. On-prem support is in our private beta." />
            <FAQItem question="Can I use ElevateX read-only?" answer="Yes. You can disable write permissions and use ElevateX solely for visibility." />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function PricingCard({ tier, price, description, features, highlighted = false, cta = "Get Started" }: { 
  tier: string, 
  price: string, 
  description: string, 
  features: string[], 
  highlighted?: boolean,
  cta?: string
}) {
  return (
    <div className={`relative p-8 md:p-12 rounded-[48px] border ${highlighted ? "border-primary/40 glass bg-primary/5 shadow-2xl" : "border-white/5 glass"} flex flex-col h-full group hover:translate-y-[-8px] transition-all`}>
      {highlighted && (
        <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-black px-6 py-2 rounded-full tracking-[0.2em] shadow-xl">
          Recommended
        </div>
      )}
      <div className="mb-10">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-40 mb-6">{tier}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter">{price === "Custom" ? "" : "$"}{price}</span>
          {price !== "Custom" && <span className="text-foreground/40 text-sm font-bold uppercase tracking-widest">/mo</span>}
        </div>
        <p className="mt-8 text-sm text-foreground/40 font-medium leading-relaxed">
          {description}
        </p>
      </div>
      <ul className="space-y-6 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-4 text-[13px] font-medium opacity-80">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-primary" strokeWidth={4} />
            </div>
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 ${highlighted ? "bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20" : "bg-white/5 text-white hover:bg-white/10"}`}>
        {cta}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="glass p-8 rounded-[32px] border border-white/5 hover:border-primary/20 transition-all">
      <h4 className="font-bold flex items-center gap-3 mb-4 text-sm uppercase tracking-tight">
        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
        {question}
      </h4>
      <p className="text-xs text-foreground/40 leading-relaxed font-medium pl-5">
        {answer}
      </p>
    </div>
  );
}
