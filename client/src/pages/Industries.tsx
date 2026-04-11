import { Link } from "wouter";
import { ArrowRight, Hotel, Sprout, Building2, Globe, Ship, Leaf } from "lucide-react";

const industries = [
  {
    icon: Hotel,
    title: "Resort & Island Hospitality",
    tag: "Primary Market",
    description: "Island resorts, eco-lodges, and luxury hospitality groups require premium, reef-safe soil inputs for landscaping, gardens, and sustainability programs. Mizuron's vermicompost is formulated for these environments — low EC, pH-buffered, low-odor, and available in resort-grade packaging.",
    needs: [
      "Reef-safe, low-EC soil amendments",
      "Dhoni-proof and island-ready packaging",
      "Small-format retail and amenity packs",
      "Sustainability reporting documentation",
      "Consistent supply for ongoing programs",
    ],
    products: [
      { name: "Vermicompost", href: "/products/vermicompost" },
      { name: "Specialty Coffee (F&B)", href: "/products/coffee" },
    ],
    cta: { label: "Request a Trial Kit", href: "/contact#trial-kit" },
  },
  {
    icon: Sprout,
    title: "Commercial Horticulture",
    tag: "Core Segment",
    description: "Nurseries, greenhouse operators, and commercial landscaping contractors require technically consistent, professionally screened soil amendments. Mizuron supplies fine-texture, double-sifted vermicompost with defined quality parameters for professional horticultural applications.",
    needs: [
      "Consistent pH and EC parameters",
      "Fine-texture, double-sifted product",
      "Bulk packaging for commercial operations",
      "Lab reports and quality documentation",
      "Scalable supply for seasonal demand",
    ],
    products: [
      { name: "Vermicompost", href: "/products/vermicompost" },
      { name: "Soil Conditioners (Expanding)", href: "/products/agri" },
    ],
    cta: { label: "View Vermicompost", href: "/products/vermicompost" },
  },
  {
    icon: Building2,
    title: "Government & Institutional Programs",
    tag: "Strategic Segment",
    description: "Government greening programs, urban agriculture initiatives, and institutional procurement require scalable supply, full documentation, and compliance-ready products. Mizuron's export documentation capability and quality verification framework are designed for institutional buyers.",
    needs: [
      "Scalable supply for large programs",
      "Full compliance documentation",
      "Phytosanitary and quality certificates",
      "Tender-ready pricing and specifications",
      "Long-term supply reliability",
    ],
    products: [
      { name: "Vermicompost", href: "/products/vermicompost" },
      { name: "Biochar 2027 Roadmap", href: "/products/biochar" },
    ],
    cta: { label: "Contact Export Desk", href: "/contact#export-desk" },
  },
  {
    icon: Globe,
    title: "Import & Distribution",
    tag: "Trade Partner",
    description: "Regional distributors, commodity importers, and trade companies seeking a reliable sourcing partner for sustainable agricultural inputs and premium commodities. Mizuron offers flexible Incoterms, LCL/FCL capability, and full documentation support for distribution networks.",
    needs: [
      "FOB, CIF, DDP Incoterms flexibility",
      "LCL and FCL container readiness",
      "Private-label and custom packaging",
      "Consistent quality across repeat orders",
      "Distributor margin and pricing structure",
    ],
    products: [
      { name: "Vermicompost", href: "/products/vermicompost" },
      { name: "Specialty Coffee", href: "/products/coffee" },
      { name: "High-Value Agri Products", href: "/products/agri" },
    ],
    cta: { label: "Distributor Inquiry", href: "/contact#distributor" },
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    tag: "Growing Segment",
    description: "Organic farms, regenerative agriculture operations, and precision horticulture buyers require inputs that support soil health without chemical dependency. Mizuron's organic inputs are evaluated for their contribution to soil biology, fertility, and long-term productivity.",
    needs: [
      "Organic-compatible soil amendments",
      "Traceable, documented inputs",
      "Consistent quality for certification programs",
      "Bulk supply for farm-scale applications",
      "Technical support documentation",
    ],
    products: [
      { name: "Vermicompost", href: "/products/vermicompost" },
      { name: "Biochar 2027 Roadmap", href: "/products/biochar" },
    ],
    cta: { label: "Request Product Availability", href: "/contact#product-availability" },
  },
  {
    icon: Ship,
    title: "Specialty Food & Beverage",
    tag: "Commodity Buyers",
    description: "Specialty coffee roasters, premium food importers, and F&B procurement teams seeking traceable, SCA-scored, ethically sourced commodities. Mizuron's commodity sourcing standard applies the same quality discipline to food products as to agricultural inputs.",
    needs: [
      "SCA-scored specialty coffee",
      "Full traceability and origin documentation",
      "Moisture content analysis",
      "Ethical sourcing verification",
      "Flexible lot sizes and packaging",
    ],
    products: [
      { name: "Specialty Coffee", href: "/products/coffee" },
      { name: "High-Value Agri Products", href: "/products/agri" },
    ],
    cta: { label: "Request Product Availability", href: "/contact#product-availability" },
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO — dark forest green ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(18%_0.045_153)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-green-dark mb-5 inline-block">Industries We Serve</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-6">
              Built for Buyers Who
              <br />
              <span className="text-[oklch(65%_0.12_153)]">Require More Than Price.</span>
            </h1>
            <p className="text-lg text-[oklch(72%_0.012_153)] leading-relaxed">
              Mizuron serves professional buyers across six industry segments. Each has different requirements — but all share a common need: reliable supply, technical credibility, and export-grade execution.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== INDUSTRIES GRID — white bg ========== */}
      <section className="section-py-lg bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <div key={industry.title} className={`mz-card p-8 ${idx === 0 ? "lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" : ""}`}>
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center">
                      <industry.icon size={18} className="text-[oklch(35.5%_0.088_153)]" />
                    </div>
                    <span className="tag-green text-[0.6rem]">{industry.tag}</span>
                  </div>
                  <h3 className="text-[oklch(22%_0.030_153)] font-semibold text-xl mb-3">{industry.title}</h3>
                  <p className="text-sm text-[oklch(50%_0.018_153)] leading-relaxed mb-5">{industry.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {industry.products.map((p) => (
                      <Link key={p.name} href={p.href} className="tag-grey text-[0.6rem] hover:border-[oklch(35.5%_0.088_153/0.5)] transition-colors">
                        {p.name}
                      </Link>
                    ))}
                  </div>

                  <Link href={industry.cta.href} className="btn-primary text-xs py-2.5 px-4">
                    {industry.cta.label} <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Needs list */}
                {idx === 0 ? (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(35.5%_0.088_153)] mb-4">Key Requirements</h4>
                    <ul className="flex flex-col gap-2.5">
                      {industry.needs.map((need) => (
                        <li key={need} className="flex items-start gap-2.5 text-sm text-[oklch(50%_0.018_153)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(35.5%_0.088_153)] mt-1.5 flex-shrink-0" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-4 pt-4 border-t border-[oklch(87%_0.010_140)]">
                    <h5 className="text-[0.65rem] font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)] mb-2">Key Requirements</h5>
                    <ul className="flex flex-col gap-1.5">
                      {industry.needs.slice(0, 3).map((need) => (
                        <li key={need} className="flex items-start gap-2 text-xs text-[oklch(52%_0.015_153)]">
                          <span className="w-1 h-1 rounded-full bg-[oklch(35.5%_0.088_153)] mt-1.5 flex-shrink-0" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA — dark forest green ========== */}
      <section className="section-py bg-[oklch(25%_0.065_153)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" style={{ background: "oklch(65% 0.12 153)" }} />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Your Industry Not Listed?</h2>
            <p className="text-[oklch(72%_0.012_153)] mb-8 leading-relaxed">
              Mizuron's sourcing capability extends beyond our listed segments. If you have a specific requirement, contact us and we will assess whether we can serve your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Send an Inquiry <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-outline-light">
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
