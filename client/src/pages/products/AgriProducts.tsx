import { Link } from "wouter";
import { ArrowRight, Package, CheckCircle2, Globe } from "lucide-react";

const productCategories = [
  {
    name: "Spices & Botanicals",
    description: "Premium-grade spices sourced with moisture analysis, quality grading, and full origin documentation. Suitable for food-grade export and specialty distribution.",
    specs: ["Moisture Verified", "Quality Graded", "Origin Documented", "Export Packaged"],
    status: "Expanding",
  },
  {
    name: "Oilseeds & Pulses",
    description: "High-value oilseeds and pulses with consistent quality grading, contamination screening, and export-ready documentation for commodity importers.",
    specs: ["Quality Graded", "Contamination Screened", "Documented", "Container Ready"],
    status: "Expanding",
  },
  {
    name: "Dried Fruits & Botanicals",
    description: "Premium dried agricultural products with moisture content analysis, quality grading, and ethical sourcing verification for specialty food and health markets.",
    specs: ["Moisture Analyzed", "Ethically Sourced", "Quality Graded", "Export Ready"],
    status: "Roadmap",
  },
  {
    name: "Premium Grains",
    description: "Specialty and heritage grain varieties sourced with full traceability, quality documentation, and export-grade packaging for premium food importers.",
    specs: ["Traceable", "Quality Documented", "Heritage Varieties", "Export Packaged"],
    status: "Roadmap",
  },
];

const sourcingFramework = [
  { label: "Traceability ID", description: "Batch-level origin code linking to producer and processing documentation" },
  { label: "Moisture Content Analysis", description: "Verified at source and at point of export to ensure shelf-life integrity" },
  { label: "Quality Grade", description: "Standardized grading against international or destination-market benchmarks" },
  { label: "Origin Documentation", description: "Named farm, cooperative, or region with geographic verification" },
  { label: "Export Packaging", description: "Moisture-barrier, destination-compliant packaging with batch coding" },
  { label: "Ethical Sourcing", description: "Producer screening for labor practices, environmental compliance, and operational standards" },
  { label: "Documentation", description: "Certificate of origin, phytosanitary certificate, quality report, and compliance package" },
  { label: "Shipment Readiness", description: "Container-ready palletization, labeling, and pre-shipment inspection support" },
];

export default function AgriProducts() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.012_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs text-[oklch(50%_0.006_200)] mb-6">
            <Link href="/products" className="hover:text-[oklch(65%_0.12_153)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[oklch(65%_0.12_153)]">High-Value Agri Products</span>
          </div>
          <div className="max-w-3xl">
            <span className="tag-green mb-4 inline-block">Premium Sourcing · Sustainable Commodities</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-5">
              High-Value Agri Products
              <br />
              <span className="text-green-brand">Sourcing Excellence with Traceability</span>
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed mb-8">
              Mizuron's agri-commodity portfolio is built on the same sourcing standard as our soil nutrition products: technical discipline, ethical screening, and full export documentation. We source premium agricultural commodities for international buyers who require more than price.
            </p>
            <div className="flex flex-wrap gap-3">
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

      {/* ========== SOURCING FRAMEWORK ========== */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Our Approach</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">The Mizuron Commodity Standard</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Every commodity in our portfolio is evaluated against a defined sourcing framework. We do not source products that cannot meet our documentation, quality, and ethical standards — regardless of price.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Our sourcing framework covers eight key dimensions: traceability, moisture analysis, quality grading, origin documentation, export packaging, ethical sourcing, compliance documentation, and shipment readiness.
              </p>
              <p className="text-[oklch(55%_0.006_200)] text-sm leading-relaxed">
                This framework is not aspirational — it is operational. Products that cannot meet these standards are not listed in our portfolio.
              </p>
            </div>
            <div className="mz-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(65%_0.12_153)] mb-5">Sourcing Framework</h4>
              <div className="flex flex-col gap-3">
                {sourcingFramework.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 py-2.5 border-b border-[oklch(22%_0.009_200)] last:border-0">
                    <CheckCircle2 size={13} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[oklch(80%_0.003_200)] mb-0.5">{item.label}</div>
                      <div className="text-xs text-[oklch(55%_0.006_200)]">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT CATEGORIES ========== */}
      <section className="section-py bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto" />
            <span className="tag-green mb-4 inline-block">Portfolio</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Current & Expanding Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productCategories.map((cat) => (
              <div key={cat.name} className="mz-card p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[oklch(90%_0.003_200)] font-semibold">{cat.name}</h3>
                  <span className={`text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                    cat.status === "Expanding"
                      ? "bg-[oklch(50%_0.10_153/0.15)] text-[oklch(60%_0.10_153)] border border-[oklch(50%_0.10_153/0.25)]"
                      : "bg-[oklch(37.5%_0.012_190/0.15)] text-[oklch(55%_0.012_190)] border border-[oklch(37.5%_0.012_190/0.25)]"
                  }`}>
                    {cat.status}
                  </span>
                </div>
                <p className="text-sm text-[oklch(60%_0.006_200)] leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.specs.map((spec) => (
                    <span key={spec} className="tag-grey text-[0.6rem]">{spec}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Looking for a Specific Commodity?</h2>
            <p className="text-[oklch(65%_0.006_200)] mb-8 leading-relaxed">
              Tell us what you need. Mizuron's sourcing capability extends beyond our listed portfolio. If you have a specific commodity requirement, contact us with your specifications and we will assess sourcing feasibility.
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
