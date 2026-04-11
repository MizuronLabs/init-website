import { Link } from "wouter";
import { ArrowRight, Coffee, CheckCircle2, Package, FileText, Star } from "lucide-react";

const coffeeSpecs = [
  { param: "SCA Score", value: "82–87+", note: "Specialty grade threshold ≥80" },
  { param: "Moisture Content", value: "10–12%", note: "Export-managed, GrainPro compatible" },
  { param: "Screen Size", value: "15–18", note: "Grade-specific" },
  { param: "Processing Method", value: "Washed / Natural / Honey", note: "Origin-specific" },
  { param: "Defect Count", value: "Category 1 & 2 verified", note: "Per SCA standards" },
  { param: "Altitude", value: "900–1800 MASL", note: "Origin-dependent" },
  { param: "Crop Year", value: "Current / Forward", note: "Documented per shipment" },
  { param: "Packaging", value: "GrainPro / Jute / Vacuum", note: "Buyer-specified" },
];

const traceabilityFields = [
  { label: "Traceability ID", value: "Batch-level origin code" },
  { label: "Farm / Cooperative", value: "Named source documentation" },
  { label: "Region / Origin", value: "Precise geographic origin" },
  { label: "Processing Station", value: "Wet mill / Dry mill identified" },
  { label: "Processing Method", value: "Washed / Natural / Honey" },
  { label: "Harvest Date", value: "Crop year and season" },
  { label: "Moisture at Export", value: "Verified at point of shipment" },
  { label: "SCA Cupping Score", value: "Available per lot" },
  { label: "Ethical Sourcing", value: "Producer verification on file" },
  { label: "Export Documentation", value: "Full compliance package" },
];

export default function CoffeePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.015_60)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs text-[oklch(50%_0.006_200)] mb-6">
            <Link href="/products" className="hover:text-[oklch(65%_0.12_153)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[oklch(65%_0.12_153)]">Specialty Coffee</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="tag-green mb-4 inline-block">Specialty Grade · Sustainable Commodities</span>
              <h1 className="text-[oklch(95%_0.003_200)] mb-5">
                Specialty Coffee
                <br />
                <span className="text-green-brand">Traceable. Scored. Export-Ready.</span>
              </h1>
              <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed mb-8">
                Mizuron sources specialty-grade coffee with full SCA scoring, moisture analysis, origin documentation, and ethical sourcing verification. Farm-to-port visibility for buyers who require more than a commodity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#product-availability" className="btn-primary">
                  Request Product Availability <ArrowRight size={16} />
                </Link>
                <Link href="/contact#datasheet" className="btn-outline">
                  Request Lot Information
                </Link>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="mz-card p-7">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(65%_0.12_153)] mb-5">Key Specifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {coffeeSpecs.slice(0, 6).map((spec) => (
                  <div key={spec.param} className="border-b border-[oklch(22%_0.009_200)] pb-3">
                    <div className="text-xs text-[oklch(50%_0.006_200)] mb-0.5">{spec.param}</div>
                    <div className="text-sm font-bold text-[oklch(65%_0.12_153)]">{spec.value}</div>
                    <div className="text-[0.65rem] text-[oklch(45%_0.006_200)]">{spec.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[oklch(22%_0.009_200)]">
                <div className="flex flex-wrap gap-2">
                  {["SCA Scored", "Origin Traced", "Ethically Sourced", "Moisture Verified", "Export Ready"].map((tag) => (
                    <span key={tag} className="tag-green text-[0.6rem]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRACEABILITY ========== */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Traceability</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">Farm-to-Port Visibility</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Mizuron's approach to coffee sourcing mirrors our broader commodity standard: every lot is documented from farm or cooperative through to export. Traceability is not a premium feature — it is our baseline.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Each lot carries a traceability ID that links to origin documentation, processing method, SCA cupping score, moisture analysis, and ethical sourcing verification. Buyers receive a complete information package with every shipment.
              </p>
              <p className="text-[oklch(55%_0.006_200)] text-sm leading-relaxed">
                We do not source coffee that cannot be traced. If documentation cannot be produced, the lot does not enter our supply chain.
              </p>
            </div>
            <div className="mz-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(65%_0.12_153)] mb-5">Traceability Fields</h4>
              <div className="flex flex-col gap-3">
                {traceabilityFields.map((field) => (
                  <div key={field.label} className="flex items-start justify-between gap-4 py-2 border-b border-[oklch(22%_0.009_200)] last:border-0">
                    <span className="text-xs text-[oklch(55%_0.006_200)] flex-shrink-0 w-36">{field.label}</span>
                    <span className="text-xs text-[oklch(75%_0.006_200)] text-right">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SCA SCORING ========== */}
      <section className="section-py bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Quality Standard</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">SCA Specialty Grade</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              Specialty Coffee Association (SCA) scoring provides a standardized quality benchmark. Mizuron sources coffee that meets or exceeds the specialty grade threshold of 80 points.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { score: "80–84", grade: "Specialty", color: "oklch(65% 0.12 153)" },
              { score: "85–89", grade: "Premium Specialty", color: "oklch(55% 0.12 153)" },
              { score: "90+", grade: "Exceptional", color: "oklch(45% 0.12 153)" },
              { score: "82–87+", grade: "Mizuron Range", color: "oklch(65% 0.12 153)", highlight: true },
            ].map((tier) => (
              <div key={tier.grade} className={`mz-card p-5 text-center ${tier.highlight ? "border-[oklch(35.5%_0.088_153/0.4)]" : ""}`}>
                <div className="text-2xl font-bold mb-1" style={{ color: tier.color }}>{tier.score}</div>
                <div className="text-xs font-semibold text-[oklch(75%_0.003_200)] mb-0.5">{tier.grade}</div>
                {tier.highlight && <span className="tag-green text-[0.55rem]">Our Range</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INQUIRY CTA ========== */}
      <section className="section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Interested in Specialty Coffee?</h2>
            <p className="text-[oklch(65%_0.006_200)] mb-8 leading-relaxed">
              Contact us with your requirements — origin preference, processing method, volume, and destination. We will provide available lot information and pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#product-availability" className="btn-primary">
                Request Product Availability <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
