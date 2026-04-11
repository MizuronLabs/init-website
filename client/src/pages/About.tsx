import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield, Search, Microscope, Globe, Package, Leaf, Users, TrendingUp } from "lucide-react";

const vettingSteps = [
  {
    number: "01",
    icon: Search,
    title: "Supplier Identification & Initial Screening",
    description: "Mizuron identifies and pre-screens producers against baseline criteria: production consistency, facility standards, and minimum output quality. We do not list suppliers who cannot meet our export-suitability threshold.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Technical Parameter Evaluation",
    description: "For soil products, we evaluate N-P-K consistency, organic carbon content, pH range, EC levels, moisture content, and texture grade. For commodities, we assess moisture, grade, origin documentation, and processing method.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Ethical & Operational Audit",
    description: "Suppliers are screened for ethical labor practices, processing discipline, contamination control, and operational reliability. We do not work with producers who cannot demonstrate consistent, clean output.",
  },
  {
    number: "04",
    icon: Package,
    title: "Export Suitability Assessment",
    description: "We evaluate packaging integrity, moisture management, shelf-life stability, and labeling compliance for export requirements. Products must meet destination market standards before Mizuron endorses them.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Documentation & Compliance Readiness",
    description: "Mizuron prepares and verifies export documentation, compliance certificates, and buyer-specific paperwork. Lab reports, testing certificates, and traceability records are maintained at the batch level.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Ongoing Quality Monitoring",
    description: "Supplier relationships are maintained with periodic re-evaluation. Consistency is not assumed — it is verified. Buyers receive the same quality standard across repeat orders.",
  },
];

const exportCapabilities = [
  "FOB, CIF, and DDP Incoterms capability",
  "LCL and FCL container readiness",
  "Moisture-controlled packaging and handling",
  "Palletization to international standards",
  "Batch coding and shipment traceability",
  "Buyer-specific labeling and documentation",
  "Phytosanitary and compliance certificate support",
  "Destination port handling readiness",
];

const philosophyPillars = [
  {
    icon: Leaf,
    title: "Sustainability as a Standard",
    description: "We do not treat sustainability as a marketing claim. It is an operational requirement. Every product in our portfolio is evaluated for its environmental profile, sourcing ethics, and long-term soil or ecosystem impact.",
  },
  {
    icon: Microscope,
    title: "Technical Discipline Over Volume",
    description: "Mizuron is not a volume trader. We prioritize technically validated, consistently performing products over high-volume, low-quality supply. Buyers who require precision choose Mizuron.",
  },
  {
    icon: Globe,
    title: "Export-Grade as a Baseline",
    description: "Every product we source is evaluated against export-grade standards from day one. Packaging, documentation, moisture management, and compliance are not afterthoughts — they are built into our sourcing process.",
  },
  {
    icon: Users,
    title: "Buyer-Centric Relationships",
    description: "We adapt to buyer requirements — not the other way around. From trial kits to full container orders, from resort-grade packaging to bulk commodity supply, Mizuron is built for the buyer's operational reality.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.012_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-green mb-5 inline-block">About Mizuron Global</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-6">
              More Than a Trade Company.
              <br />
              <span className="text-green-brand">A Quality Standard.</span>
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed max-w-2xl">
              Mizuron Global is a sustainability-led merchant exporter and strategic sourcing partner. We supply technically validated agricultural inputs and premium commodities to international buyers — with the operational discipline that serious trade requires.
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHO WE ARE ========== */}
      <section className="section-py-lg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Who We Are</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-6">Built for the Next Generation of Sustainable Trade</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Mizuron Global was founded on a clear premise: the global market for sustainable agricultural inputs and premium commodities is growing — but it is underserved by trade partners with real technical discipline.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                We are not a generic commodity broker. We are a merchant exporter with an operational standard — one that covers supplier vetting, product evaluation, export documentation, and buyer-specific logistics.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed">
                Our portfolio begins with soil nutrition — specifically vermicompost for resort landscaping, horticulture, and soil restoration — and expands into sustainable commodities, specialty coffee, and future carbon solutions through our Biochar 2027 Roadmap.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4", label: "Core Trade Verticals", sub: "Soil · Commodities · Carbon · Logistics" },
                { value: "100%", label: "Batch Traceability", sub: "Origin-to-export visibility" },
                { value: "FOB/CIF/DDP", label: "Incoterms Capability", sub: "Flexible export terms" },
                { value: "2027", label: "Biochar Roadmap", sub: "Carbon infrastructure target" },
              ].map((stat) => (
                <div key={stat.label} className="mz-card p-6">
                  <div className="metric-number mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-[oklch(85%_0.003_200)] mb-1">{stat.label}</div>
                  <div className="text-xs text-[oklch(50%_0.006_200)]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE THINK ========== */}
      <section className="section-py-lg bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Our Sourcing Philosophy</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">How We Think About Trade</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              Four principles that define how Mizuron approaches every sourcing decision, supplier relationship, and buyer engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPillars.map((pillar) => (
              <div key={pillar.title} className="mz-card p-8">
                <div className="w-11 h-11 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center mb-5">
                  <pillar.icon size={20} className="text-[oklch(65%_0.12_153)]" />
                </div>
                <h3 className="text-[oklch(95%_0.003_200)] font-semibold text-lg mb-3">{pillar.title}</h3>
                <p className="text-sm text-[oklch(62%_0.006_200)] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE MIZURON VETTING PROTOCOL ========== */}
      <section id="vetting-protocol" className="section-py-lg">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="section-divider" />
            <span className="tag-green mb-4 inline-block">Quality Assurance</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">
              The Mizuron Vetting Protocol
            </h2>
            <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-4">
              Mizuron does not simply trade — it audits, filters, and qualifies supply. The Mizuron Vetting Protocol is our internal operational standard for supplier evaluation, product qualification, and export readiness assessment.
            </p>
            <p className="text-[oklch(65%_0.006_200)] leading-relaxed">
              When a buyer sources through Mizuron, they receive more than a product. They receive our quality judgment — the result of a structured evaluation process that covers technical parameters, ethical practices, export suitability, and documentation integrity.
            </p>
          </div>

          {/* Protocol Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {vettingSteps.map((step) => (
              <div key={step.number} className="mz-card p-7 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-bold text-[oklch(22%_0.009_200)] font-display select-none">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-[oklch(65%_0.12_153)]" />
                </div>
                <h4 className="text-[oklch(95%_0.003_200)] font-semibold text-sm mb-2 pr-8">{step.title}</h4>
                <p className="text-xs text-[oklch(60%_0.006_200)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Protocol Statement */}
          <div className="border border-[oklch(35.5%_0.088_153/0.3)] bg-[oklch(35.5%_0.088_153/0.05)] rounded-sm p-8 max-w-3xl">
            <div className="border-green-left">
              <p className="text-[oklch(80%_0.003_200)] text-base leading-relaxed font-medium italic">
                "The buyer receives more than a product — they receive Mizuron's quality judgment. Our protocol ensures that every batch leaving our supply chain has been evaluated, documented, and verified against our operational standard."
              </p>
              <p className="text-[oklch(55%_0.006_200)] text-sm mt-3">— Mizuron Global, Sourcing & Quality Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPORT READINESS ========== */}
      <section id="export-readiness" className="section-py-lg bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Export Readiness</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">Built for Cross-Border Trade</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Export readiness is not a feature at Mizuron — it is a baseline. Every product we source is evaluated for its ability to travel, comply with destination market requirements, and arrive in the condition it was dispatched.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-8">
                Our logistics and documentation capability covers the full export cycle — from packaging and palletization to compliance certificates, phytosanitary documentation, and destination port handling readiness.
              </p>
              <Link href="/logistics" className="btn-primary">
                View Logistics & Export <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {exportCapabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3 py-3 border-b border-[oklch(22%_0.009_200)] last:border-0">
                  <CheckCircle2 size={15} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                  <span className="text-sm text-[oklch(72%_0.006_200)]">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SUSTAINABILITY VISION ========== */}
      <section className="section-py-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Long-Term Vision</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">From Soil to Carbon. A 10-Year Infrastructure Play.</h2>
            <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
              Mizuron's current portfolio in soil nutrition and sustainable commodities is the foundation of a longer-term infrastructure vision. Our Biochar 2027 Roadmap represents our commitment to carbon-smart soil restoration, modular production capability, and institutional partnership.
            </p>
            <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-10">
              We are building a trade company that will be relevant not just for today's buyers — but for the institutional partners, government programs, and carbon-linked infrastructure projects of the next decade.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products/biochar" className="btn-primary">
                Biochar 2027 Roadmap <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Strategic Partnership Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
