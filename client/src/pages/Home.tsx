import { Link } from "wouter";
import {
  ArrowRight, Shield, Globe, Package, Leaf, BarChart3, Zap,
  CheckCircle2, TrendingUp, Award, Truck, FlaskConical, Coffee,
  Sprout, Wind, ChevronRight, Star
} from "lucide-react";

// ============================================================
// TRUST STRIP
// ============================================================
const trustItems = [
  { icon: Shield, label: "Export Documentation Ready" },
  { icon: Award, label: "Technical Quality Control" },
  { icon: CheckCircle2, label: "Batch-Level Traceability" },
  { icon: Globe, label: "Global Logistics Readiness" },
  { icon: TrendingUp, label: "Scalable Sourcing" },
  { icon: Package, label: "Compliance-Conscious Operations" },
];

// ============================================================
// VERTICALS
// ============================================================
const verticals = [
  {
    icon: Sprout,
    tag: "Live Products",
    title: "Soil Nutrition",
    description: "Export-grade vermicompost and precision soil-health inputs for professional buyers, resort landscaping, and agricultural restoration.",
    href: "/solutions#soil-nutrition",
    accent: "oklch(35.5% 0.088 153)",
  },
  {
    icon: Package,
    tag: "Traceable Sourcing",
    title: "Sustainable Commodities",
    description: "Premium, traceable agri-commodities including specialty coffee and high-value produce — sourced with technical discipline and farm-to-port visibility.",
    href: "/solutions#commodities",
    accent: "oklch(50% 0.10 153)",
  },
  {
    icon: Wind,
    tag: "2027 Roadmap",
    title: "Carbon & Future Solutions",
    description: "Biochar production, carbon-smart soil restoration, and long-term infrastructure partnerships for institutional and government buyers.",
    href: "/solutions#carbon",
    accent: "oklch(37.5% 0.012 190)",
  },
  {
    icon: Truck,
    tag: "Export Execution",
    title: "Trade & Export Execution",
    description: "End-to-end logistics, documentation, compliance, and shipment support. FOB, CIF, DDP capability with container-ready packaging.",
    href: "/solutions#trade",
    accent: "oklch(55% 0.012 190)",
  },
];

// ============================================================
// WHY MIZURON
// ============================================================
const whyItems = [
  {
    number: "01",
    title: "Technical Discipline",
    description: "Every product is evaluated against defined quality parameters — N-P-K consistency, moisture content, pH range, and contamination thresholds.",
  },
  {
    number: "02",
    title: "The Vetting Protocol",
    description: "Mizuron audits, qualifies, and filters supply. Buyers receive our quality judgment — not just a product.",
  },
  {
    number: "03",
    title: "Reliable Sourcing",
    description: "Consistent supply from vetted producers with ethical labor practices, processing discipline, and export-suitable output.",
  },
  {
    number: "04",
    title: "Documentation Readiness",
    description: "Export documentation, compliance certificates, lab reports, and buyer-specific paperwork prepared with precision.",
  },
  {
    number: "05",
    title: "Buyer-Centric Supply",
    description: "From trial kits to full container orders — we adapt to buyer requirements, not the other way around.",
  },
  {
    number: "06",
    title: "Global Trade Understanding",
    description: "Incoterms expertise, destination port knowledge, and cross-border logistics capability built for serious international trade.",
  },
  {
    number: "07",
    title: "Scalable Partnerships",
    description: "Designed for long-term relationships with importers, distributors, resort groups, and institutional buyers.",
  },
];

// ============================================================
// GREEN METRICS
// ============================================================
const greenMetrics = [
  { value: "18%", label: "Organic Carbon Content", sublabel: "Avg. batch verified", color: "oklch(65% 0.12 153)" },
  { value: "6.8–7.2", label: "pH Range", sublabel: "Buffered, reef-safe", color: "oklch(65% 0.12 153)" },
  { value: "<0.8", label: "EC (mS/cm)", sublabel: "Low salinity profile", color: "oklch(65% 0.12 153)" },
  { value: "40%", label: "Water Retention Boost", sublabel: "Soil amendment benefit", color: "oklch(50% 0.10 153)" },
  { value: "100%", label: "Traceability", sublabel: "Batch-level origin data", color: "oklch(50% 0.10 153)" },
  { value: "2027", label: "Biochar Roadmap", sublabel: "Carbon infrastructure target", color: "oklch(37.5% 0.012 190)" },
];

// ============================================================
// PRODUCTS
// ============================================================
const products = [
  {
    icon: Sprout,
    tag: "Live Product",
    name: "Vermicompost",
    description: "Double-sifted, mature, low-odor vermicompost. pH-buffered, low EC, dark and fine-textured. Export-grade for resorts, horticulture, and soil restoration.",
    specs: ["pH 6.8–7.2", "EC <0.8 mS/cm", "OC ≥18%", "Double-Sifted"],
    href: "/products/vermicompost",
    cta: "View Product",
  },
  {
    icon: Wind,
    tag: "2027 Roadmap",
    name: "Biochar",
    description: "Carbon-stable biochar for soil regeneration, nutrient retention, and long-term water-holding capacity. Modular production units. Partnership-ready.",
    specs: ["Carbon Stable", "Nutrient Retention", "Water Holding", "Project Partnerships"],
    href: "/products/biochar",
    cta: "Explore Roadmap",
  },
  {
    icon: Coffee,
    tag: "Specialty Grade",
    name: "Specialty Coffee",
    description: "Traceable single-origin specialty coffee with SCA scoring, moisture analysis, and full processing documentation. Farm-to-port visibility.",
    specs: ["SCA Scored", "Moisture Verified", "Origin Traced", "Export Packaged"],
    href: "/products/coffee",
    cta: "View Details",
  },
  {
    icon: Package,
    tag: "Premium Sourcing",
    name: "High-Value Agri Products",
    description: "Curated premium agri-commodities sourced with technical discipline, ethical screening, and full export documentation support.",
    specs: ["Quality Graded", "Ethically Sourced", "Documented", "Export Ready"],
    href: "/products/agri",
    cta: "View Details",
  },
];

// ============================================================
// INDUSTRIES
// ============================================================
const industries = [
  {
    icon: "🏝️",
    title: "Resorts & Hospitality",
    description: "Reef-safe, low-odor vermicompost for island resort landscaping. Dhoni-proof packaging. Export-ready for Maldives, Seychelles, and tropical markets.",
  },
  {
    icon: "🌿",
    title: "Landscaping & Horticulture",
    description: "Fine-texture, professionally screened organic inputs for premium landscaping contractors and horticultural operations.",
  },
  {
    icon: "🌾",
    title: "Agriculture & Greenhouse",
    description: "Consistent, batch-verified soil amendments for commercial farms, greenhouses, and precision agriculture operations.",
  },
  {
    icon: "🏛️",
    title: "Government & Municipal Greening",
    description: "Scalable supply for public greening projects, urban landscaping, and government soil restoration programs.",
  },
  {
    icon: "📦",
    title: "Retail & Distribution",
    description: "Private-label and branded packaging options for retail distributors and agri-input supply chains.",
  },
  {
    icon: "🚢",
    title: "Commodity Buyers & Importers",
    description: "Container-ready supply with full documentation, compliance support, and flexible Incoterms for international importers.",
  },
  {
    icon: "📈",
    title: "Investors & Project Partners",
    description: "Biochar 2027 Roadmap, carbon offset infrastructure, and long-term strategic collaboration for institutional and investment partners.",
  },
];

// ============================================================
// COMPONENT
// ============================================================
export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(12%_0.008_200)] via-[oklch(15%_0.015_153)] to-[oklch(12%_0.008_200)]" />

        {/* Decorative orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[oklch(35.5%_0.088_153/0.06)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-[oklch(35.5%_0.088_153/0.04)] blur-3xl pointer-events-none" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="animate-fade-in-up mb-6">
              <span className="tag-green">Merchant Exporter · Strategic Sourcing Partner · India</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-[oklch(95%_0.003_200)] font-display mb-6 leading-tight">
              Precision Trade for a{" "}
              <span className="text-green-brand">Sustainable Future</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 text-lg text-[oklch(68%_0.006_200)] max-w-2xl mb-10 leading-relaxed">
              Mizuron Global supplies technically validated sustainable products and premium commodities with export-grade execution. From soil nutrition to carbon solutions — built for serious international buyers.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Product Inquiry <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-outline">
                Explore Solutions
              </Link>
              <Link href="/contact#partnerships" className="btn-ghost">
                Partner With Us <ChevronRight size={16} />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap gap-8 mt-14 pt-10 border-t border-[oklch(26%_0.009_200)]">
              {[
                { value: "4", label: "Core Verticals" },
                { value: "FOB/CIF/DDP", label: "Incoterms Capability" },
                { value: "2027", label: "Biochar Roadmap" },
                { value: "100%", label: "Batch Traceability" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[oklch(65%_0.12_153)] font-display">{stat.value}</div>
                  <div className="text-xs text-[oklch(55%_0.006_200)] uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ========== TRUST STRIP ========== */}
      <section className="border-y border-[oklch(22%_0.009_200)] bg-[oklch(15%_0.009_200)] py-5">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon size={15} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                <span className="text-xs text-[oklch(65%_0.006_200)] font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED VERTICALS ========== */}
      <section className="section-py-lg">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">What We Do</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Four Verticals. One Standard.</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              Mizuron operates across four interconnected trade verticals — each built on the same foundation of technical discipline, reliable sourcing, and export-grade execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {verticals.map((v) => (
              <Link key={v.title} href={v.href}>
                <div className="mz-card p-8 h-full group cursor-pointer">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(35.5%_0.088_153/0.2)] transition-colors">
                      <v.icon size={22} className="text-[oklch(65%_0.12_153)]" />
                    </div>
                    <div className="flex-1">
                      <span className="tag-green text-[0.65rem] mb-2 inline-block">{v.tag}</span>
                      <h3 className="text-[oklch(95%_0.003_200)] text-xl font-semibold mb-2">{v.title}</h3>
                      <p className="text-sm text-[oklch(62%_0.006_200)] leading-relaxed">{v.description}</p>
                      <div className="flex items-center gap-1.5 mt-4 text-[oklch(65%_0.12_153)] text-sm font-semibold">
                        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY MIZURON ========== */}
      <section className="section-py-lg bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Why Mizuron</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">
                More Than a Supplier. A Quality Filter.
              </h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-6">
                Mizuron does not simply trade. We audit, qualify, and filter supply — so that every product reaching a buyer has passed our operational standard. The buyer receives more than a product. They receive Mizuron's quality judgment.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-8">
                Built for procurement heads, importers, resort groups, and institutional buyers who require consistency, documentation, and a trade partner with real operational standards.
              </p>
              <Link href="/about#vetting-protocol" className="btn-primary">
                The Mizuron Vetting Protocol <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right — numbered list */}
            <div className="grid grid-cols-1 gap-4">
              {whyItems.map((item) => (
                <div key={item.number} className="flex gap-4 group">
                  <div className="text-xs font-bold text-[oklch(35.5%_0.088_153)] font-display w-8 flex-shrink-0 pt-0.5">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-[oklch(58%_0.006_200)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== GREEN METRICS PREVIEW ========== */}
      <section className="section-py-lg">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Green Metrics</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Quality Measured. Performance Verified.</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              Our products are evaluated against defined technical parameters. These are not marketing claims — they are operational benchmarks that guide our sourcing and quality control.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {greenMetrics.map((m) => (
              <div key={m.label} className="mz-card p-5 text-center">
                <div className="metric-number mb-1" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs font-semibold text-[oklch(80%_0.003_200)] mb-0.5">{m.label}</div>
                <div className="text-[0.65rem] text-[oklch(50%_0.006_200)]">{m.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/sustainability-lab" className="btn-outline">
              View Sustainability Lab <BarChart3 size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT SHOWCASE ========== */}
      <section className="section-py-lg bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Our Products</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Export-Grade. Technically Validated.</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              A scalable product portfolio built for international buyers — from live products to future roadmap items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div key={product.name} className="mz-card p-6 flex flex-col group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center">
                    <product.icon size={18} className="text-[oklch(65%_0.12_153)]" />
                  </div>
                  <span className="tag-green text-[0.6rem]">{product.tag}</span>
                </div>
                <h3 className="text-[oklch(95%_0.003_200)] font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-xs text-[oklch(60%_0.006_200)] leading-relaxed flex-1 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.specs.map((spec) => (
                    <span key={spec} className="tag-grey text-[0.6rem]">{spec}</span>
                  ))}
                </div>
                <Link href={product.href} className="flex items-center gap-1.5 text-[oklch(65%_0.12_153)] text-sm font-semibold group-hover:gap-2.5 transition-all">
                  {product.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SERVED ========== */}
      <section className="section-py-lg">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Industries We Serve</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Built for Serious Buyers.</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              From island resort groups to government procurement teams — Mizuron is designed for buyers who require reliability, documentation, and a trade partner with real standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.slice(0, 4).map((ind) => (
              <div key={ind.title} className="mz-card p-6">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm mb-2">{ind.title}</h4>
                <p className="text-xs text-[oklch(58%_0.006_200)] leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {industries.slice(4).map((ind) => (
              <div key={ind.title} className="mz-card p-6">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm mb-2">{ind.title}</h4>
                <p className="text-xs text-[oklch(58%_0.006_200)] leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/industries" className="btn-outline">
              View All Industries <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="section-py-lg bg-[oklch(15%_0.009_200)] border-t border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">
              Ready to Source with Precision?
            </h2>
            <p className="text-[oklch(65%_0.006_200)] mb-10 leading-relaxed">
              Whether you are a buyer, importer, distributor, resort group, government procurement team, or strategic investor — Mizuron is built for serious trade relationships. Tell us what you need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {[
                { label: "Request a Trial Kit", href: "/contact#trial-kit" },
                { label: "Technical Datasheet", href: "/contact#datasheet" },
                { label: "Speak to Export Desk", href: "/contact#export-desk" },
                { label: "Become a Distributor", href: "/contact#distributor" },
                { label: "Biochar Partnership", href: "/contact#biochar" },
                { label: "Download Company Profile", href: "/contact#company-profile" },
              ].map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="flex items-center justify-between px-4 py-3 border border-[oklch(26%_0.009_200)] text-sm text-[oklch(75%_0.006_200)] hover:border-[oklch(35.5%_0.088_153/0.5)] hover:text-[oklch(65%_0.12_153)] transition-all group rounded-sm"
                >
                  {cta.label}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Send an Inquiry <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About Mizuron
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
