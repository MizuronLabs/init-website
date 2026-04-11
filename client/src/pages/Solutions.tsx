import { Link } from "wouter";
import { ArrowRight, Sprout, Package, Wind, Truck, CheckCircle2, FlaskConical, Globe, Shield } from "lucide-react";

const verticals = [
  {
    id: "soil-nutrition",
    icon: Sprout,
    tag: "Live Products",
    title: "Soil Nutrition",
    headline: "Precision Inputs for Professional Soil Management",
    description: "Mizuron's soil nutrition vertical focuses on technically validated, export-grade organic inputs for professional buyers. Our current flagship product — vermicompost — is sourced, screened, and prepared to meet the requirements of resort landscaping, commercial horticulture, and soil restoration programs.",
    subtext: "Every product in this vertical is evaluated against defined parameters: organic carbon content, pH range, EC levels, moisture content, texture grade, and contamination thresholds. We do not supply soil products that cannot meet our export-suitability standard.",
    products: [
      { name: "Vermicompost", status: "Live", href: "/products/vermicompost" },
      { name: "Soil Conditioners", status: "Expanding", href: "/products/agri" },
      { name: "Organic Amendments", status: "Roadmap", href: "/products/agri" },
    ],
    features: [
      "pH-buffered, low EC formulations",
      "Double-sifted, fine-texture presentation",
      "Batch-level quality verification",
      "Export moisture management",
      "Resort-grade and island-market packaging",
      "Lab report and certificate support",
    ],
    cta: { label: "View Vermicompost", href: "/products/vermicompost" },
    accentColor: "oklch(35.5% 0.088 153)",
  },
  {
    id: "commodities",
    icon: Package,
    tag: "Traceable Sourcing",
    title: "Sustainable Commodities",
    headline: "Sourcing Excellence with Farm-to-Port Visibility",
    description: "Mizuron's sustainable commodities vertical covers premium, traceable agri-products sourced with technical discipline. This is not generic commodity trading — it is specialty-grade sourcing with full documentation, quality grading, and ethical supply chain standards.",
    subtext: "Our approach to commodity sourcing mirrors our soil nutrition standard: every product is evaluated for quality grade, moisture content, origin documentation, processing method, and export suitability. We build traceability into the supply chain — not as an afterthought, but as a baseline.",
    products: [
      { name: "Specialty Coffee", status: "Live", href: "/products/coffee" },
      { name: "High-Value Agri Products", status: "Expanding", href: "/products/agri" },
      { name: "Premium Commodities", status: "Roadmap", href: "/products/agri" },
    ],
    features: [
      "SCA scoring for specialty coffee",
      "Moisture content analysis",
      "Quality grade documentation",
      "Origin and traceability IDs",
      "Ethical sourcing verification",
      "Shipment readiness certification",
    ],
    cta: { label: "View Specialty Coffee", href: "/products/coffee" },
    accentColor: "oklch(50% 0.10 153)",
  },
  {
    id: "carbon",
    icon: Wind,
    tag: "2027 Roadmap",
    title: "Carbon & Future Solutions",
    headline: "Carbon-Smart Infrastructure for the Next Decade",
    description: "Mizuron's carbon vertical represents our long-term infrastructure vision. Biochar — a carbon-stable soil amendment with significant nutrient retention and water-holding properties — is the foundation of our 2027 roadmap. This vertical is designed for institutional partners, government programs, and strategic investors.",
    subtext: "We are not overstating the current state of this vertical. Biochar production, carbon offset infrastructure, and institutional partnerships are in active development. We invite serious partners to engage early — through offtake discussions, project collaborations, and strategic inquiry.",
    products: [
      { name: "Biochar", status: "2027 Roadmap", href: "/products/biochar" },
      { name: "Carbon Offset Solutions", status: "Roadmap", href: "/products/biochar" },
      { name: "Soil Restoration Projects", status: "Roadmap", href: "/products/biochar" },
    ],
    features: [
      "Modular biochar production units",
      "Long-term carbon stability",
      "Nutrient retention enhancement",
      "Water-holding capacity improvement",
      "Project partnership framework",
      "Institutional and government collaboration",
    ],
    cta: { label: "Biochar 2027 Roadmap", href: "/products/biochar" },
    accentColor: "oklch(37.5% 0.012 190)",
  },
  {
    id: "trade",
    icon: Truck,
    tag: "Export Execution",
    title: "Trade & Export Execution",
    headline: "End-to-End Export Capability for Serious Buyers",
    description: "Mizuron's trade execution vertical covers the full export cycle — from packaging and palletization to compliance documentation, logistics coordination, and destination port handling. This is not a logistics add-on. It is a core competency.",
    subtext: "We understand that for international buyers, the product is only part of the equation. The ability to receive consistent supply, with correct documentation, in the right packaging, at the right destination — that is what separates a reliable trade partner from a commodity broker.",
    products: [
      { name: "Export Documentation", status: "Live", href: "/logistics" },
      { name: "Container Logistics", status: "Live", href: "/logistics" },
      { name: "Compliance Support", status: "Live", href: "/logistics" },
    ],
    features: [
      "FOB, CIF, DDP Incoterms capability",
      "LCL and FCL container readiness",
      "Moisture-controlled packaging",
      "Palletization to international standards",
      "Phytosanitary and compliance certificates",
      "Buyer-specific labeling and documentation",
    ],
    cta: { label: "View Logistics & Export", href: "/logistics" },
    accentColor: "oklch(55% 0.012 190)",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== PAGE HERO ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.012_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-green mb-5 inline-block">Our Solutions</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-6">
              Four Verticals.
              <br />
              <span className="text-green-brand">One Operational Standard.</span>
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed max-w-2xl">
              Mizuron operates across four interconnected trade verticals. Each is built on the same foundation — technical discipline, reliable sourcing, and export-grade execution. The architecture is modular and designed to scale.
            </p>
          </div>

          {/* Vertical Nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {verticals.map((v) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="flex items-center gap-2 px-4 py-2 border border-[oklch(26%_0.009_200)] text-sm text-[oklch(65%_0.006_200)] hover:border-[oklch(35.5%_0.088_153/0.5)] hover:text-[oklch(65%_0.12_153)] transition-all rounded-sm"
              >
                <v.icon size={14} />
                {v.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VERTICALS ========== */}
      {verticals.map((vertical, idx) => (
        <section
          key={vertical.id}
          id={vertical.id}
          className={`section-py-lg ${idx % 2 === 1 ? "bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]" : ""}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="section-divider" />
                <span className="tag-green mb-4 inline-block">{vertical.tag}</span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center">
                    <vertical.icon size={20} className="text-[oklch(65%_0.12_153)]" />
                  </div>
                  <h2 className="text-[oklch(95%_0.003_200)]">{vertical.title}</h2>
                </div>
                <h3 className="text-[oklch(75%_0.006_200)] text-xl font-normal mb-5">{vertical.headline}</h3>
                <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-4">{vertical.description}</p>
                <p className="text-[oklch(60%_0.006_200)] leading-relaxed mb-8 text-sm">{vertical.subtext}</p>
                <Link href={vertical.cta.href} className="btn-primary">
                  {vertical.cta.label} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Details Panel */}
              <div className={`space-y-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Features */}
                <div className="mz-card p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(65%_0.12_153)] mb-4">Capabilities</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {vertical.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                        <span className="text-sm text-[oklch(72%_0.006_200)]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Products in this vertical */}
                <div className="mz-card p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(65%_0.12_153)] mb-4">Products in this Vertical</h4>
                  <div className="flex flex-col gap-3">
                    {vertical.products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-sm text-[oklch(75%_0.006_200)] group-hover:text-[oklch(95%_0.003_200)] transition-colors">
                          {product.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                            product.status === "Live"
                              ? "bg-[oklch(35.5%_0.088_153/0.2)] text-[oklch(65%_0.12_153)] border border-[oklch(35.5%_0.088_153/0.3)]"
                              : product.status === "Expanding"
                              ? "bg-[oklch(50%_0.10_153/0.15)] text-[oklch(60%_0.10_153)] border border-[oklch(50%_0.10_153/0.25)]"
                              : "bg-[oklch(37.5%_0.012_190/0.15)] text-[oklch(55%_0.012_190)] border border-[oklch(37.5%_0.012_190/0.25)]"
                          }`}>
                            {product.status}
                          </span>
                          <ArrowRight size={12} className="text-[oklch(40%_0.006_200)] group-hover:text-[oklch(65%_0.12_153)] transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ========== FINAL CTA ========== */}
      <section className="section-py-lg bg-[oklch(15%_0.009_200)] border-t border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Start a Conversation</h2>
            <p className="text-[oklch(65%_0.006_200)] mb-8 leading-relaxed">
              Whether you are evaluating a specific product, planning a container order, or exploring a long-term partnership — Mizuron is ready to engage with precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Send an Inquiry <ArrowRight size={16} />
              </Link>
              <Link href="/products/vermicompost" className="btn-outline">
                View Vermicompost
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
