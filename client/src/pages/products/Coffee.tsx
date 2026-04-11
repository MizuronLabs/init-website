import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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
      {/* ========== HERO — dark forest green ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(18%_0.045_153)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs text-[oklch(65%_0.012_153)] mb-6">
            <Link href="/products" className="hover:text-[oklch(65%_0.12_153)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[oklch(65%_0.12_153)]">Specialty Coffee</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="tag-green-dark mb-4 inline-block">Specialty Grade · Sustainable Commodities</span>
              <h1 className="text-[oklch(95%_0.003_200)] mb-5">
                Specialty Coffee
                <br />
                <span className="text-[oklch(65%_0.12_153)]">Traceable. Scored. Export-Ready.</span>
              </h1>
              <p className="text-lg text-[oklch(72%_0.012_153)] leading-relaxed mb-8">
                Mizuron sources specialty-grade coffee with full SCA scoring, moisture analysis, origin documentation, and ethical sourcing verification. Farm-to-port visibility for buyers who require more than a commodity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#product-availability" className="btn-primary">
                  Request Product Availability <ArrowRight size={16} />
                </Link>
                <Link href="/contact#datasheet" className="btn-outline-light">
                  Request Lot Information
                </Link>
              </div>
            </div>

            {/* Quick Specs — white card on dark hero */}
            <div className="mz-card p-7">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(35.5%_0.088_153)] mb-5">Key Specifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {coffeeSpecs.slice(0, 6).map((spec) => (
                  <div key={spec.param} className="border-b border-[oklch(87%_0.010_140)] pb-3">
                    <div className="text-xs text-[oklch(50%_0.018_153)] mb-0.5">{spec.param}</div>
                    <div className="text-sm font-bold text-[oklch(35.5%_0.088_153)]">{spec.value}</div>
                    <div className="text-[0.65rem] text-[oklch(52%_0.015_153)]">{spec.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[oklch(87%_0.010_140)]">
                <div className="flex flex-wrap gap-2">
                  {["SCA Scored", "Origin Traced", "Ethically Sourced", "Moisture Verified", "Export Ready"].map((tag) => (
                    <span key={tag} className="tag-green text-[0.6rem]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== TRACEABILITY — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Traceability</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">Farm-to-Port Visibility</h2>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Mizuron's approach to coffee sourcing mirrors our broader commodity standard: every lot is documented from farm or cooperative through to export. Traceability is not a premium feature — it is our baseline.
              </p>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Each lot carries a traceability ID that links to origin documentation, processing method, SCA cupping score, moisture analysis, and ethical sourcing verification. Buyers receive a complete information package with every shipment.
              </p>
              <p className="text-[oklch(52%_0.015_153)] text-sm leading-relaxed">
                We do not source coffee that cannot be traced. If documentation cannot be produced, the lot does not enter our supply chain.
              </p>
            </div>
            <div className="mz-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(35.5%_0.088_153)] mb-5">Traceability Fields</h4>
              <div className="flex flex-col gap-3">
                {traceabilityFields.map((field) => (
                  <div key={field.label} className="flex items-start justify-between gap-4 py-2 border-b border-[oklch(87%_0.010_140)] last:border-0">
                    <span className="text-xs text-[oklch(52%_0.015_153)] flex-shrink-0 w-36">{field.label}</span>
                    <span className="text-xs text-[oklch(28%_0.025_153)] text-right font-medium">{field.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SCA SCORING — light sage bg ========== */}
      <section className="section-py bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Quality Standard</span>
            <h2 className="text-[oklch(18%_0.030_153)] mb-4">SCA Specialty Grade</h2>
            <p className="text-[oklch(50%_0.018_153)] max-w-xl mx-auto">
              Specialty Coffee Association (SCA) scoring provides a standardized quality benchmark. Mizuron sources coffee that meets or exceeds the specialty grade threshold of 80 points.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { score: "80–84", grade: "Specialty", color: "oklch(35.5% 0.088 153)" },
              { score: "85–89", grade: "Premium Specialty", color: "oklch(30% 0.088 153)" },
              { score: "90+", grade: "Exceptional", color: "oklch(25% 0.088 153)" },
              { score: "82–87+", grade: "Mizuron Range", color: "oklch(35.5% 0.088 153)", highlight: true },
            ].map((tier) => (
              <div key={tier.grade} className={`mz-card p-5 text-center ${tier.highlight ? "border-[oklch(35.5%_0.088_153/0.4)]" : ""}`}>
                <div className="text-2xl font-bold mb-1" style={{ color: tier.color }}>{tier.score}</div>
                <div className="text-xs font-semibold text-[oklch(38%_0.020_153)] mb-0.5">{tier.grade}</div>
                {tier.highlight && <span className="tag-green text-[0.55rem]">Our Range</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INQUIRY CTA — dark forest green ========== */}
      <section className="section-py bg-[oklch(25%_0.065_153)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" style={{ background: "oklch(65% 0.12 153)" }} />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Interested in Specialty Coffee?</h2>
            <p className="text-[oklch(72%_0.012_153)] mb-8 leading-relaxed">
              Contact us with your requirements — origin preference, processing method, volume, and destination. We will provide available lot information and pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#product-availability" className="btn-primary">
                Request Product Availability <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
