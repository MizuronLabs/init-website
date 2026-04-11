import { Link } from "wouter";
import {
  ArrowRight, Package, BarChart3,
  CheckCircle2, Truck,
  Wind, ChevronRight, FileCheck, Layers, Microscope,
  MapPin, Box, ClipboardCheck
} from "lucide-react";

// ============================================================
// VERMICOMPOST SPECS — hero metrics
// ============================================================
const heroMetrics = [
  { value: "≥18%", label: "Organic Carbon" },
  { value: "6.8–7.2", label: "pH Range" },
  { value: "<0.8", label: "EC mS/cm" },
  { value: "100%", label: "Batch Traced" },
];

// ============================================================
// QUALITY PILLARS
// ============================================================
const qualityPillars = [
  {
    icon: Microscope,
    title: "Lab-Verified Parameters",
    description: "Every batch is tested against defined benchmarks — N-P-K consistency, moisture content, pH range, electrical conductivity, and contamination thresholds before release.",
  },
  {
    icon: Layers,
    title: "Double-Sifted Processing",
    description: "Fine-textured, mature vermicompost processed through a two-stage sifting protocol. No coarse material. No unprocessed matter. Professionally finished for premium applications.",
  },
  {
    icon: MapPin,
    title: "Source-Verified Supply",
    description: "Produced from vetted agricultural waste streams with full feedstock documentation. Ethical inputs, controlled production environment, and repeatable output quality.",
  },
  {
    icon: Box,
    title: "Export-Grade Packaging",
    description: "Available in moisture-sealed export bags, bulk supersacks, and container-ready formats. Packaging engineered for long-haul transit to island resorts, ports, and distribution hubs.",
  },
  {
    icon: FileCheck,
    title: "Documentation Precision",
    description: "Lab reports, phytosanitary certificates, certificate of origin, material safety data sheets — prepared in full, tailored to destination market requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance-Conscious",
    description: "Aligned with international organic and agri-input import standards. Export operations structured for USDA NOP, EU Organic, and equivalent compliance frameworks.",
  },
];

// ============================================================
// GREEN METRICS
// ============================================================
const greenMetrics = [
  { value: "≥18%", label: "Organic Carbon", sublabel: "Avg. batch verified" },
  { value: "6.8–7.2", label: "pH Range", sublabel: "Buffered, reef-safe" },
  { value: "<0.8", label: "EC (mS/cm)", sublabel: "Low salinity profile" },
  { value: "40%", label: "Water Retention Boost", sublabel: "Soil amendment benefit" },
  { value: "100%", label: "Batch Traceability", sublabel: "Origin + process data" },
  { value: "Double", label: "Sift Grade", sublabel: "Fine texture, no coarse" },
];

// ============================================================
// TRACEABILITY STEPS
// ============================================================
const traceSteps = [
  { step: "01", title: "Feedstock Origin", detail: "Documented agricultural waste inputs with source farm data" },
  { step: "02", title: "Production Batch", detail: "Each lot assigned a unique batch reference at processing" },
  { step: "03", title: "Lab Testing", detail: "Parameters verified before approval for export release" },
  { step: "04", title: "Packaging Record", detail: "Volume, packaging format, and date recorded per consignment" },
  { step: "05", title: "Export Documentation", detail: "Full paper trail from production site to destination port" },
];

// ============================================================
// INCOTERMS / EXPORT
// ============================================================
const exportCapabilities = [
  { label: "FOB", detail: "Free on Board — Indian departure port" },
  { label: "CIF", detail: "Cost, Insurance & Freight — to destination" },
  { label: "DDP", detail: "Delivered Duty Paid — full landed service" },
];

// ============================================================
// OTHER VERTICALS (de-emphasized)
// ============================================================
const otherVerticals = [
  {
    icon: Wind,
    tag: "2027 Roadmap",
    title: "Biochar",
    description: "Carbon-stable biochar for soil regeneration and nutrient retention. Modular production units in development. Partnership-ready for institutional buyers.",
    href: "/products/biochar",
  },
  {
    icon: Package,
    tag: "Specialty Grade",
    title: "Sustainable Commodities",
    description: "Traceable specialty coffee and premium agri-commodities. Farm-to-port visibility with full export documentation support.",
    href: "/solutions#commodities",
  },
  {
    icon: Truck,
    tag: "Export Execution",
    title: "Trade & Logistics",
    description: "End-to-end export services — compliance, documentation, freight coordination, and incoterms execution for all Mizuron products.",
    href: "/logistics",
  },
];

// ============================================================
// INDUSTRIES
// ============================================================
const industries = [
  {
    icon: "🏝️",
    title: "Resorts & Hospitality",
    description: "Reef-safe, low-odor, low-EC vermicompost for island resort landscaping. Dhoni-proof packaging. Maldives, Seychelles, tropical markets.",
  },
  {
    icon: "🌿",
    title: "Landscaping & Horticulture",
    description: "Fine-texture, professionally screened organic inputs for premium landscaping and commercial horticultural operations.",
  },
  {
    icon: "🌾",
    title: "Agriculture & Greenhouse",
    description: "Consistent, batch-verified soil amendments for commercial farms, greenhouses, and precision agriculture.",
  },
  {
    icon: "🏛️",
    title: "Government & Municipal",
    description: "Scalable supply for public greening, urban landscaping, and government soil restoration programs.",
  },
  {
    icon: "📦",
    title: "Retail & Distribution",
    description: "Private-label and branded packaging options for agri-input distributors and retail supply chains.",
  },
  {
    icon: "🚢",
    title: "Importers & Commodity Buyers",
    description: "Container-ready supply with full documentation, compliance support, and flexible incoterms for international buyers.",
  },
];

// ============================================================
// COMPONENT
// ============================================================
export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ========== HERO — stays dark, warm forest green ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(17%_0.040_153)]" />
        <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full bg-[oklch(35.5%_0.088_153/0.12)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-[oklch(50%_0.10_153/0.08)] blur-3xl pointer-events-none" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up mb-6">
              <span className="tag-green-dark">Soil Nutrition · Vermicompost Exporter · India</span>
            </div>

            <h1 className="animate-fade-in-up delay-100 text-[oklch(95%_0.003_200)] font-display mb-6 leading-tight">
              Soil Nutrition You Can{" "}
              <span className="text-[oklch(65%_0.12_153)]">Verify.</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg text-[oklch(72%_0.012_153)] max-w-2xl mb-10 leading-relaxed">
              Mizuron supplies export-grade vermicompost — lab-tested, double-sifted, batch-traced — to international buyers, resort groups, and professional distributors who require more than a product claim.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Product Inquiry <ArrowRight size={16} />
              </Link>
              <Link href="/products/vermicompost" className="btn-outline-light">
                View Vermicompost
              </Link>
              <Link href="/contact#datasheet" className="flex items-center gap-1.5 text-sm font-medium text-[oklch(65%_0.10_153)] hover:text-[oklch(75%_0.10_153)] transition-colors">
                Technical Datasheet <ChevronRight size={15} />
              </Link>
            </div>

            {/* Hero Metrics */}
            <div className="animate-fade-in-up delay-500 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-[oklch(30%_0.020_153)]">
              {heroMetrics.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-bold text-[oklch(65%_0.12_153)] font-display">{m.value}</div>
                  <div className="text-xs text-[oklch(58%_0.015_153)] uppercase tracking-wider mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fade to light body */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== PRODUCT FOCUS — VERMICOMPOST (light-sage bg) ========== */}
      <section className="section-py-lg bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Our Hero Product</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">
                Export-Grade Vermicompost. No Compromises.
              </h2>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-4">
                Mizuron's vermicompost is processed to a professional standard — mature, dark, fine-textured, and low-odor. Designed for buyers who cannot afford inconsistency: island resorts, premium horticultural operations, and commercial farms with defined input specifications.
              </p>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-8">
                Every batch carries full documentation — lab results, batch reference, packaging records, and export certificates — so you know exactly what you are receiving before the shipment arrives.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/vermicompost" className="btn-primary">
                  View Full Product Details <ArrowRight size={16} />
                </Link>
                <Link href="/contact#trial-kit" className="btn-outline">
                  Request Trial Kit
                </Link>
              </div>
            </div>

            {/* Right — Spec Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Organic Carbon", value: "≥18%", note: "Batch-verified average" },
                { label: "pH Range", value: "6.8–7.2", note: "Buffered, reef-safe" },
                { label: "EC Level", value: "<0.8 mS/cm", note: "Low salinity — safe for sensitive ecosystems" },
                { label: "Texture Grade", value: "Double-Sifted", note: "Fine, uniform, professional finish" },
                { label: "Moisture", value: "25–35%", note: "Optimal handling range" },
                { label: "Maturity", value: "Fully Cured", note: "No active decomposition" },
              ].map((spec) => (
                <div key={spec.label} className="mz-card p-5">
                  <div className="text-[oklch(35.5%_0.088_153)] font-bold font-display text-lg mb-1">{spec.value}</div>
                  <div className="text-[oklch(22%_0.025_153)] font-semibold text-xs mb-1">{spec.label}</div>
                  <div className="text-[oklch(52%_0.015_153)] text-[0.65rem] leading-snug">{spec.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== QUALITY PILLARS (white bg) ========== */}
      <section className="section-py-lg bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Product Quality</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-4">Built to a Standard, Not a Price Point.</h2>
            <p className="text-[oklch(48%_0.018_153)] max-w-xl mx-auto">
              Premium buyers expect consistency. Our quality system is built around that expectation — from sourcing inputs to final packaging and export certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualityPillars.map((pillar) => (
              <div key={pillar.title} className="mz-card p-7">
                <div className="w-10 h-10 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center mb-5">
                  <pillar.icon size={18} className="text-[oklch(35.5%_0.088_153)]" />
                </div>
                <h3 className="text-[oklch(22%_0.030_153)] font-semibold text-base mb-3">{pillar.title}</h3>
                <p className="text-sm text-[oklch(50%_0.018_153)] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOURCING INTEGRITY (light-sage bg) ========== */}
      <section className="section-py-lg bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Sourcing Integrity</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">
                More Than a Supplier. A Quality Filter.
              </h2>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-5">
                Mizuron does not simply pass product from producer to buyer. We audit supply, qualify producers, and filter output against defined standards. What reaches a buyer has already passed our operational judgment — not just the seller's assurance.
              </p>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-8">
                Ethical feedstock sourcing, verified production conditions, and transparent processing records form the foundation of every consignment we ship.
              </p>
              <Link href="/about#vetting-protocol" className="btn-primary">
                The Vetting Protocol <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  number: "01",
                  title: "Producer Qualification",
                  body: "Farms and processors are evaluated against defined quality, ethical, and operational criteria before being approved as supply sources.",
                },
                {
                  number: "02",
                  title: "Input Verification",
                  body: "Feedstock materials are documented by type, source, and agricultural origin to ensure clean, traceable compost inputs.",
                },
                {
                  number: "03",
                  title: "Process Oversight",
                  body: "Production conditions — moisture, temperature, duration — are monitored and recorded throughout the composting process.",
                },
                {
                  number: "04",
                  title: "Batch Release Control",
                  body: "No batch is released for export without passing our internal quality check and receiving a documented clearance reference.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-5 border-l-2 border-[oklch(35.5%_0.088_153/0.35)] pl-5">
                  <div className="text-[0.7rem] font-bold text-[oklch(35.5%_0.088_153)] font-display w-6 flex-shrink-0 pt-0.5">{item.number}</div>
                  <div>
                    <h4 className="text-[oklch(22%_0.030_153)] font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRACEABILITY (white bg) ========== */}
      <section className="section-py-lg bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Traceability</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-4">Every Batch. Every Step. Documented.</h2>
            <p className="text-[oklch(48%_0.018_153)] max-w-xl mx-auto">
              Full chain-of-custody from feedstock origin to destination port. Buyers receive a complete documentation package — not just a product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {traceSteps.map((s, i) => (
              <div key={s.step} className="mz-card p-6 relative">
                {i < traceSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-[oklch(35.5%_0.088_153/0.4)]" />
                )}
                <div className="text-[oklch(35.5%_0.088_153)] font-bold font-display text-xs mb-3">{s.step}</div>
                <h4 className="text-[oklch(22%_0.030_153)] font-semibold text-sm mb-2">{s.title}</h4>
                <p className="text-[0.7rem] text-[oklch(52%_0.018_153)] leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPORT READINESS (light-sage bg) ========== */}
      <section className="section-py-lg bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Export Readiness</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">
                Container-Ready. Documentation-Complete.
              </h2>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-5">
                Mizuron handles the full export stack. Product is packaged in export-grade formats, documentation is prepared to destination market standards, and shipment logistics are coordinated with precision.
              </p>
              <p className="text-[oklch(42%_0.018_153)] leading-relaxed mb-8">
                We support FOB, CIF, and DDP incoterms — adapting to the buyer's procurement model and destination port requirements.
              </p>
              <Link href="/logistics" className="btn-outline">
                Logistics & Export Details <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {/* Incoterms */}
              <div className="mz-card p-6">
                <h4 className="text-[oklch(22%_0.030_153)] font-semibold text-sm mb-4 uppercase tracking-wider">Incoterms Capability</h4>
                <div className="grid grid-cols-3 gap-3">
                  {exportCapabilities.map((t) => (
                    <div key={t.label} className="text-center p-3 border border-[oklch(87%_0.010_140)] rounded-sm bg-[oklch(97%_0.006_140)]">
                      <div className="text-[oklch(35.5%_0.088_153)] font-bold font-display text-lg">{t.label}</div>
                      <div className="text-[0.62rem] text-[oklch(50%_0.018_153)] mt-1 leading-snug">{t.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentation */}
              <div className="mz-card p-6">
                <h4 className="text-[oklch(22%_0.030_153)] font-semibold text-sm mb-4 uppercase tracking-wider">Documentation Package</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Lab Test Report",
                    "Certificate of Origin",
                    "Phytosanitary Certificate",
                    "MSDS / Safety Sheet",
                    "Packing List & Invoice",
                    "Buyer-Specific Formats",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-xs text-[oklch(42%_0.018_153)]">
                      <CheckCircle2 size={11} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GREEN METRICS (white bg) ========== */}
      <section className="section-py-lg bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Technical Benchmarks</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-4">Quality Measured. Performance Verified.</h2>
            <p className="text-[oklch(48%_0.018_153)] max-w-xl mx-auto">
              These are not marketing claims. They are operational parameters that govern our sourcing, processing, and quality control decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {greenMetrics.map((m) => (
              <div key={m.label} className="mz-card p-5 text-center">
                <div className="metric-number mb-1">{m.value}</div>
                <div className="text-xs font-semibold text-[oklch(22%_0.025_153)] mb-0.5">{m.label}</div>
                <div className="text-[0.65rem] text-[oklch(52%_0.015_153)]">{m.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/sustainability-lab" className="btn-outline">
              View Full Sustainability Lab <BarChart3 size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SERVED (light-sage bg) ========== */}
      <section className="section-py-lg bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Who We Serve</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-4">Built for Buyers Who Require Standards.</h2>
            <p className="text-[oklch(48%_0.018_153)] max-w-xl mx-auto">
              From island resort procurement teams to government greening programs — Mizuron is structured for buyers who need consistency, documentation, and a reliable trade partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.title} className="mz-card p-6">
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h4 className="text-[oklch(22%_0.030_153)] font-semibold text-sm mb-2">{ind.title}</h4>
                <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/industries" className="btn-outline">
              Explore All Industries <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== OTHER VERTICALS (white bg) ========== */}
      <section className="section-py-lg bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="mb-12">
            <div className="section-divider" />
            <span className="tag-green mb-4 inline-block">What Else We Trade</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-3">Expanding Trade Portfolio.</h2>
            <p className="text-[oklch(48%_0.018_153)] max-w-2xl">
              Beyond vermicompost, Mizuron operates additional trade verticals — all built on the same sourcing discipline and export-grade execution standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherVerticals.map((v) => (
              <Link key={v.title} href={v.href}>
                <div className="mz-card p-7 h-full group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center group-hover:bg-[oklch(35.5%_0.088_153/0.12)] transition-colors">
                      <v.icon size={16} className="text-[oklch(35.5%_0.088_153)]" />
                    </div>
                    <span className="tag-grey text-[0.6rem]">{v.tag}</span>
                  </div>
                  <h3 className="text-[oklch(22%_0.030_153)] font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed mb-4">{v.description}</p>
                  <div className="flex items-center gap-1.5 text-[oklch(35.5%_0.088_153)] text-xs font-semibold">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA — Rich dark green brand section ========== */}
      <section className="section-py-lg bg-[oklch(25%_0.065_153)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto" style={{ background: "oklch(65% 0.12 153)" }} />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">
              Ready to Source with Confidence?
            </h2>
            <p className="text-[oklch(72%_0.012_153)] mb-10 leading-relaxed">
              Whether you are a resort group, distributor, importer, or government procurement team — Mizuron is designed for buyers who require verified quality, complete documentation, and a trade partner with real standards.
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
                  className="flex items-center justify-between px-4 py-3 border border-[oklch(40%_0.040_153)] text-sm text-[oklch(75%_0.012_153)] hover:border-[oklch(65%_0.12_153/0.6)] hover:text-[oklch(88%_0.008_153)] transition-all group rounded-sm"
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
              <Link href="/about" className="btn-outline-light">
                Learn About Mizuron
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
