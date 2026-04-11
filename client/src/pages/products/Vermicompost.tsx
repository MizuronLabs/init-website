import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Download, FlaskConical, Package, Truck, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const specs = [
  { param: "pH Range", value: "6.8 – 7.2", note: "Buffered, reef-safe" },
  { param: "EC (Electrical Conductivity)", value: "< 0.8 mS/cm", note: "Low salinity profile" },
  { param: "Organic Carbon (OC)", value: "≥ 18%", note: "Batch verified" },
  { param: "Nitrogen (N)", value: "1.5 – 2.5%", note: "Consistent range" },
  { param: "Phosphorus (P)", value: "0.8 – 1.5%", note: "Available form" },
  { param: "Potassium (K)", value: "0.8 – 1.2%", note: "Soluble form" },
  { param: "Moisture Content", value: "25 – 35%", note: "Export-managed" },
  { param: "Texture Grade", value: "Double-Sifted", note: "Fine, uniform" },
  { param: "Odor Profile", value: "Low / Earthy", note: "Mature compost" },
  { param: "Color", value: "Dark Brown / Black", note: "Mature indicator" },
];

const packagingOptions = [
  { format: "5 kg Retail Bag", description: "Premium branded packaging for resort amenity programs and retail distribution", suitable: "Resorts, Retail" },
  { format: "25 kg Woven Bag", description: "Standard export packaging with moisture barrier and batch coding", suitable: "Distributors, Horticulture" },
  { format: "50 kg Jumbo Bag", description: "Bulk handling for commercial landscaping and agricultural operations", suitable: "Commercial Buyers" },
  { format: "500 kg / 1000 kg FIBC", description: "Container-ready bulk bags for large-scale import and distribution", suitable: "Importers, Container Orders" },
];

const applications = [
  { title: "Resort & Hotel Landscaping", description: "Reef-safe, low-odor formulation ideal for island resort gardens, golf courses, and outdoor hospitality environments. Dhoni-proof packaging available." },
  { title: "Commercial Horticulture", description: "Fine-texture, professionally screened product for greenhouse operations, nurseries, and premium horticultural contractors." },
  { title: "Soil Restoration", description: "High organic carbon content and balanced pH support degraded soil rehabilitation and long-term fertility improvement." },
  { title: "Agriculture & Greenhouse", description: "Consistent N-P-K profile and low EC make this suitable for precision agriculture, hydroponic integration, and greenhouse growing media." },
  { title: "Government Greening Programs", description: "Scalable supply capability for public landscaping, urban greening, and government-mandated soil improvement projects." },
];

const faqs = [
  {
    q: "What makes Mizuron vermicompost export-grade?",
    a: "Our vermicompost is double-sifted, moisture-managed for export, and evaluated against defined technical parameters including pH, EC, organic carbon content, and contamination thresholds. Each batch is documented and traceable to its production source.",
  },
  {
    q: "Is this product safe for reef-adjacent and island environments?",
    a: "Yes. The low EC (< 0.8 mS/cm) and pH-buffered profile (6.8–7.2) make this product suitable for island and coastal environments where salinity runoff and soil pH management are critical concerns.",
  },
  {
    q: "What documentation is available?",
    a: "We can provide batch-level quality reports, phytosanitary certificates, certificate of origin, moisture content analysis, and compliance documentation for most destination markets. Contact our export desk for destination-specific requirements.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "We accommodate orders from trial kits (for evaluation) through to full container (FCL) orders. Minimum commercial order quantities vary by packaging format and destination. Contact us with your requirements.",
  },
  {
    q: "What Incoterms do you offer?",
    a: "We offer FOB, CIF, and DDP terms depending on destination and order volume. Our export team can advise on the most suitable arrangement for your logistics setup.",
  },
  {
    q: "Can you provide private-label packaging?",
    a: "Yes. We offer private-label and custom-branded packaging for distributors and retail buyers with minimum order requirements. Contact us to discuss specifications.",
  },
];

export default function Vermicompost() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO — dark forest green ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(18%_0.045_153)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs text-[oklch(65%_0.012_153)] mb-6">
            <Link href="/products" className="hover:text-[oklch(65%_0.12_153)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[oklch(65%_0.12_153)]">Vermicompost</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="tag-green-dark mb-4 inline-block">Live Product · Soil Nutrition</span>
              <h1 className="text-[oklch(95%_0.003_200)] mb-5">
                Export-Grade<br />
                <span className="text-[oklch(65%_0.12_153)]">Vermicompost</span>
              </h1>
              <p className="text-lg text-[oklch(72%_0.012_153)] leading-relaxed mb-8">
                Double-sifted, mature, low-odor vermicompost. pH-buffered for reef-safe applications. Low EC for salinity-sensitive environments. Dark, fine-textured, and export-ready for professional buyers worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#trial-kit" className="btn-primary">
                  Request a Trial Kit <ArrowRight size={16} />
                </Link>
                <Link href="/contact#datasheet" className="btn-outline-light">
                  <Download size={15} /> Technical Datasheet
                </Link>
                <Link href="/contact#export-desk" className="btn-outline-light">
                  Speak to Export Desk
                </Link>
              </div>
            </div>

            {/* Quick Specs Panel — white card on dark hero */}
            <div className="mz-card p-7">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(35.5%_0.088_153)] mb-5">Key Parameters</h4>
              <div className="grid grid-cols-2 gap-3">
                {specs.slice(0, 6).map((spec) => (
                  <div key={spec.param} className="border-b border-[oklch(87%_0.010_140)] pb-3">
                    <div className="text-xs text-[oklch(50%_0.018_153)] mb-0.5">{spec.param}</div>
                    <div className="text-sm font-bold text-[oklch(35.5%_0.088_153)]">{spec.value}</div>
                    <div className="text-[0.65rem] text-[oklch(52%_0.015_153)]">{spec.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[oklch(87%_0.010_140)]">
                <div className="flex flex-wrap gap-2">
                  {["pH Buffered", "Low EC", "Double-Sifted", "Reef-Safe", "Export Ready"].map((tag) => (
                    <span key={tag} className="tag-green text-[0.6rem]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== FULL SPECIFICATIONS — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Technical Specifications</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">Full Parameter Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[oklch(87%_0.010_140)]">
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)]">Parameter</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)]">Value / Range</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.param} className={`border-b border-[oklch(87%_0.010_140)] ${i % 2 === 0 ? "bg-[oklch(97%_0.006_140)]" : ""}`}>
                    <td className="py-3 px-4 text-sm text-[oklch(38%_0.020_153)]">{spec.param}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-[oklch(35.5%_0.088_153)]">{spec.value}</td>
                    <td className="py-3 px-4 text-xs text-[oklch(52%_0.015_153)]">{spec.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[oklch(55%_0.015_153)] mt-4">
            * Parameters represent typical batch ranges. Specific batch reports available upon request. Values subject to seasonal and source variation within stated ranges.
          </p>
        </div>
      </section>

      {/* ========== APPLICATIONS — light sage bg ========== */}
      <section className="section-py bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Applications</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app) => (
              <div key={app.title} className="mz-card p-6">
                <h4 className="text-[oklch(22%_0.025_153)] font-semibold text-sm mb-2">{app.title}</h4>
                <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PACKAGING — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Packaging Options</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">Export-Ready Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {packagingOptions.map((pkg) => (
              <div key={pkg.format} className="mz-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center flex-shrink-0">
                  <Package size={18} className="text-[oklch(35.5%_0.088_153)]" />
                </div>
                <div>
                  <h4 className="text-[oklch(22%_0.025_153)] font-semibold text-sm mb-1">{pkg.format}</h4>
                  <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed mb-2">{pkg.description}</p>
                  <span className="tag-grey text-[0.6rem]">Suitable for: {pkg.suitable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMPLIANCE & DOCUMENTATION — light sage bg ========== */}
      <section className="section-py bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Compliance & Documentation</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">Documentation Readiness</h2>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Mizuron prepares and verifies export documentation for each shipment. Our documentation package is designed to meet the requirements of professional importers, government procurement, and resort supply chains.
              </p>
              <p className="text-xs text-[oklch(52%_0.015_153)] leading-relaxed">
                Where technical, environmental, regulatory, compliance, or certification claims appear, Mizuron structures documentation so these can be supported by uploaded lab reports, certificates, and compliance documents. We do not present unsupported claims as final legal statements.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { icon: FileText, label: "Certificate of Origin" },
                { icon: FlaskConical, label: "Batch Quality Report / Lab Analysis" },
                { icon: CheckCircle2, label: "Phytosanitary Certificate" },
                { icon: Package, label: "Packing List & Weight Certificate" },
                { icon: Truck, label: "Bill of Lading / Airway Bill" },
                { icon: FileText, label: "Moisture Content Analysis" },
                { icon: CheckCircle2, label: "Heavy Metal & Pathogen Testing (on request)" },
                { icon: FileText, label: "Buyer-Specific Compliance Documentation" },
              ].map((doc) => (
                <div key={doc.label} className="flex items-center gap-3 py-2.5 border-b border-[oklch(87%_0.010_140)] last:border-0">
                  <doc.icon size={14} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                  <span className="text-sm text-[oklch(38%_0.020_153)]">{doc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container max-w-3xl">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">FAQ</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">Common Questions</h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="mz-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-[oklch(22%_0.025_153)] pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                    : <ChevronDown size={16} className="text-[oklch(52%_0.015_153)] flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[oklch(87%_0.010_140)]">
                    <p className="text-sm text-[oklch(50%_0.018_153)] leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
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
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Ready to Source Vermicompost?</h2>
            <p className="text-[oklch(72%_0.012_153)] mb-8 leading-relaxed">
              Request a trial kit for evaluation, download the technical datasheet, or speak directly with our export team about your requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#trial-kit" className="btn-primary">
                Request a Trial Kit <ArrowRight size={16} />
              </Link>
              <Link href="/contact#datasheet" className="btn-outline-light">
                <Download size={15} /> Download Technical Datasheet
              </Link>
              <Link href="/contact#export-desk" className="btn-outline-light">
                Speak to Export Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
