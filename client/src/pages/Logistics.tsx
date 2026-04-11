import { Link } from "wouter";
import { ArrowRight, Package, FileText, Shield, Globe, CheckCircle2, Container, Anchor } from "lucide-react";

const packagingFormats = [
  { format: "5 kg Retail Bag", type: "Retail / Amenity", description: "Premium branded packaging for resort amenity programs, retail distribution, and sample orders.", suitable: "Resorts, Retail, Distributors" },
  { format: "25 kg Woven PP Bag", type: "Standard Export", description: "Industry-standard export packaging with moisture barrier liner and batch coding. Palletizable.", suitable: "Distributors, Horticulture, Agriculture" },
  { format: "50 kg Woven PP Bag", type: "Commercial", description: "Bulk commercial packaging for large-scale landscaping and agricultural operations.", suitable: "Commercial Buyers, Farms" },
  { format: "500 kg FIBC (Jumbo Bag)", type: "Bulk Export", description: "Container-ready flexible intermediate bulk containers for high-volume import operations.", suitable: "Importers, Container Orders" },
  { format: "1000 kg FIBC", type: "Bulk Export", description: "Maximum-volume FIBC for full container load (FCL) operations and large-scale distribution.", suitable: "Large Importers, FCL Buyers" },
  { format: "Custom / Private Label", type: "Buyer-Specified", description: "Custom-branded packaging for distributors and retail buyers. Minimum order requirements apply.", suitable: "Branded Distribution" },
];

const incotermsData = [
  {
    term: "FOB",
    full: "Free On Board",
    description: "Mizuron delivers goods to the named port of shipment and loads them onto the buyer's vessel. Risk transfers at the ship's rail. Buyer arranges and pays for main carriage and insurance.",
    suitable: "Experienced importers with established freight arrangements",
  },
  {
    term: "CIF",
    full: "Cost, Insurance & Freight",
    description: "Mizuron arranges and pays for carriage and insurance to the named destination port. Risk transfers when goods are loaded onto the vessel at origin.",
    suitable: "Buyers preferring a single landed cost with insurance included",
  },
  {
    term: "DDP",
    full: "Delivered Duty Paid",
    description: "Mizuron delivers goods to the buyer's named destination, cleared for import and with all duties paid. Maximum responsibility on Mizuron. Discuss availability with our export team.",
    suitable: "Buyers requiring door-to-door delivery with no import complexity",
  },
];

const documentationList = [
  { doc: "Commercial Invoice", description: "Itemized invoice with product details, quantity, unit price, and total value" },
  { doc: "Packing List", description: "Detailed list of packages, weights, and dimensions per shipment" },
  { doc: "Certificate of Origin", description: "Official document certifying the country of origin of the goods" },
  { doc: "Phytosanitary Certificate", description: "Government-issued certificate confirming products meet importing country plant health requirements" },
  { doc: "Bill of Lading / Airway Bill", description: "Shipping contract and receipt of goods from the carrier" },
  { doc: "Moisture Content Analysis", description: "Laboratory report verifying moisture content at point of export" },
  { doc: "Quality / Inspection Report", description: "Batch-level quality parameters and inspection findings" },
  { doc: "Fumigation Certificate", description: "Certificate confirming fumigation treatment where required by destination country" },
  { doc: "Heavy Metal & Pathogen Testing", description: "Laboratory testing report available on request for regulated markets" },
  { doc: "Buyer-Specific Compliance Documents", description: "Additional documentation as required by specific destination market regulations" },
];

const logisticsCapabilities = [
  { icon: Container, title: "LCL Capability", description: "Less-than-container-load shipments for smaller orders and trial quantities. Cost-effective for new buyer relationships." },
  { icon: Anchor, title: "FCL Capability", description: "Full container load for high-volume orders. 20ft and 40ft container configurations available." },
  { icon: Package, title: "Palletization", description: "Standard and custom palletization to international dimensions. Stretch-wrapped and secured for container loading." },
  { icon: Shield, title: "Moisture Management", description: "Moisture-barrier packaging, desiccant placement, and humidity-controlled handling for sensitive products." },
  { icon: FileText, title: "Labeling Standards", description: "Buyer-specified labeling, batch coding, and destination market compliance labeling." },
  { icon: Globe, title: "Destination Handling", description: "Pre-shipment coordination with destination agents for smooth customs clearance and delivery." },
];

const inputClass = "w-full bg-white border border-[oklch(87%_0.010_140)] text-[oklch(22%_0.030_153)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors placeholder:text-[oklch(62%_0.015_153)]";
const labelClass = "text-xs font-semibold text-[oklch(48%_0.018_153)] uppercase tracking-wider mb-1.5 block";

export default function Logistics() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO — dark forest green ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(18%_0.045_153)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-green-dark mb-5 inline-block">Logistics & Export</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-6">
              Export-Competent.
              <br />
              <span className="text-[oklch(65%_0.12_153)]">End-to-End Execution.</span>
            </h1>
            <p className="text-lg text-[oklch(72%_0.012_153)] leading-relaxed">
              Mizuron's logistics capability covers the full export cycle — from packaging and palletization to compliance documentation, freight coordination, and destination handling readiness. This is not a logistics add-on. It is a core competency.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== CAPABILITIES — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Core Capabilities</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">What We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {logisticsCapabilities.map((cap) => (
              <div key={cap.title} className="mz-card p-7">
                <div className="w-10 h-10 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center mb-4">
                  <cap.icon size={18} className="text-[oklch(35.5%_0.088_153)]" />
                </div>
                <h4 className="text-[oklch(22%_0.025_153)] font-semibold text-sm mb-2">{cap.title}</h4>
                <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PACKAGING — light sage bg ========== */}
      <section className="section-py bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Packaging Options</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-8">Export-Ready Packaging Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {packagingFormats.map((pkg) => (
              <div key={pkg.format} className="mz-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[oklch(22%_0.025_153)] font-semibold text-sm">{pkg.format}</h4>
                  <span className="tag-grey text-[0.6rem]">{pkg.type}</span>
                </div>
                <p className="text-xs text-[oklch(50%_0.018_153)] leading-relaxed mb-3">{pkg.description}</p>
                <div className="text-[0.65rem] text-[oklch(52%_0.015_153)]">
                  <span className="text-[oklch(35.5%_0.088_153)]">Suitable for:</span> {pkg.suitable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INCOTERMS — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Trade Terms</span>
          <h2 className="text-[oklch(18%_0.030_153)] mb-4">Incoterms Capability</h2>
          <p className="text-[oklch(50%_0.018_153)] mb-8 max-w-2xl">
            Mizuron understands real export execution. We offer flexible Incoterms arrangements to accommodate buyers at different levels of import experience and logistics capability.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {incotermsData.map((inc) => (
              <div key={inc.term} className="mz-card p-7">
                <div className="text-3xl font-bold text-[oklch(35.5%_0.088_153)] font-display mb-1">{inc.term}</div>
                <div className="text-xs font-semibold text-[oklch(52%_0.015_153)] uppercase tracking-wider mb-4">{inc.full}</div>
                <p className="text-sm text-[oklch(50%_0.018_153)] leading-relaxed mb-4">{inc.description}</p>
                <div className="border-green-left">
                  <div className="text-xs text-[oklch(52%_0.015_153)]">{inc.suitable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DOCUMENTATION — light sage bg ========== */}
      <section className="section-py bg-[oklch(93.5%_0.012_140)] border-y border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Documentation</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">Buyer Documentation Package</h2>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Mizuron prepares a complete documentation package for every shipment. Our documentation standard is designed to meet the requirements of professional importers, government procurement, and regulated destination markets.
              </p>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Destination-specific requirements vary. Contact our export desk with your destination country and product requirements, and we will confirm the applicable documentation package.
              </p>
              <Link href="/contact#export-desk" className="btn-primary">
                Contact Export Desk <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {documentationList.map((doc) => (
                <div key={doc.doc} className="flex items-start gap-3 py-3 border-b border-[oklch(87%_0.010_140)] last:border-0">
                  <CheckCircle2 size={13} className="text-[oklch(35.5%_0.088_153)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[oklch(28%_0.025_153)] mb-0.5">{doc.doc}</div>
                    <div className="text-xs text-[oklch(52%_0.015_153)]">{doc.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== INQUIRY FORM — white bg ========== */}
      <section className="section-py bg-white border-b border-[oklch(87%_0.010_140)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Export Planning</span>
              <h2 className="text-[oklch(18%_0.030_153)] mb-5">Start Your Export Inquiry</h2>
              <p className="text-[oklch(50%_0.018_153)] leading-relaxed mb-5">
                Provide your shipment requirements and our export team will respond with a detailed proposal covering product availability, packaging options, documentation, and pricing.
              </p>
              <p className="text-[oklch(52%_0.015_153)] text-sm leading-relaxed">
                Mizuron qualifies leads through our inquiry process. Providing accurate information about your destination port, Incoterms preference, and estimated quantity helps us respond with precision.
              </p>
            </div>
            <div className="mz-card p-8">
              <h4 className="text-[oklch(22%_0.025_153)] font-semibold mb-6">Export Inquiry Form</h4>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelClass}>Organization *</label>
                    <input type="text" required className={inputClass} placeholder="Company name" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Product of Interest *</label>
                  <select required className={inputClass}>
                    <option value="">Select product</option>
                    <option>Vermicompost</option>
                    <option>Specialty Coffee</option>
                    <option>High-Value Agri Products</option>
                    <option>Biochar (Roadmap)</option>
                    <option>Multiple Products</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Incoterms *</label>
                    <select required className={inputClass}>
                      <option value="">Select</option>
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>DDP</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Destination Port *</label>
                    <input type="text" required className={inputClass} placeholder="e.g. Port of Male" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Estimated Quantity</label>
                    <input type="text" className={inputClass} placeholder="e.g. 5 MT / 1 FCL" />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" required className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Export Inquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
