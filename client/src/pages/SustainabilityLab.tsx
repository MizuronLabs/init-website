import { Link } from "wouter";
import { ArrowRight, BarChart3, Droplets, Leaf, Recycle, Package, FlaskConical, Globe, TrendingUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const primaryMetrics = [
  {
    icon: Leaf,
    label: "Organic Carbon Content",
    value: "18%",
    unit: "avg",
    sublabel: "Per batch, verified",
    description: "Organic carbon is the primary indicator of vermicompost maturity and soil-building capacity. Our sourcing standard requires ≥18% OC across all export batches.",
    color: "oklch(65% 0.12 153)",
    progress: 72,
  },
  {
    icon: Droplets,
    label: "Water Retention Potential",
    value: "40%",
    unit: "improvement",
    sublabel: "Soil amendment benefit",
    description: "Vermicompost application significantly improves soil water-holding capacity — critical for island soils, sandy substrates, and drought-prone agricultural environments.",
    color: "oklch(55% 0.12 153)",
    progress: 40,
  },
  {
    icon: Recycle,
    label: "Organic Waste Diverted",
    value: "100%",
    unit: "feedstock",
    sublabel: "Agricultural by-product",
    description: "Vermicompost production converts agricultural organic waste into a high-value soil amendment — a circular economy model that reduces waste while building soil health.",
    color: "oklch(50% 0.10 153)",
    progress: 100,
  },
  {
    icon: BarChart3,
    label: "CO₂ Sequestration Potential",
    value: "~0.5t",
    unit: "CO₂e/t",
    sublabel: "Biochar estimate (2027 target)",
    description: "Biochar application is estimated to sequester approximately 0.5 tonnes of CO₂ equivalent per tonne of biochar applied, based on published research. Mizuron's 2027 Roadmap targets verified carbon sequestration capability.",
    color: "oklch(60% 0.012 190)",
    progress: 50,
  },
];

const traceabilityMetrics = [
  { label: "Batch ID Traceability", value: "100%", description: "Every export batch carries a unique identifier linking to production source, quality parameters, and documentation." },
  { label: "Origin Documentation", value: "100%", description: "All products are sourced from named, documented producers. Anonymous sourcing is not part of the Mizuron standard." },
  { label: "Moisture Verification", value: "100%", description: "Moisture content is verified at source and at point of export for all products in our portfolio." },
  { label: "Ethical Sourcing Screening", value: "100%", description: "All suppliers are screened for ethical labor practices, environmental compliance, and operational standards." },
];

const qualityMetrics = [
  { param: "pH Range", target: "6.8–7.2", status: "Verified per batch" },
  { param: "EC (mS/cm)", target: "< 0.8", status: "Verified per batch" },
  { param: "Organic Carbon", target: "≥ 18%", status: "Verified per batch" },
  { param: "Nitrogen (N)", target: "1.5–2.5%", status: "Typical range" },
  { param: "Phosphorus (P)", target: "0.8–1.5%", status: "Typical range" },
  { param: "Potassium (K)", target: "0.8–1.2%", status: "Typical range" },
  { param: "Moisture Content", target: "25–35%", status: "Export-managed" },
  { param: "Texture Grade", target: "Double-Sifted", status: "Processing standard" },
];

export default function SustainabilityLab() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.015_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-green mb-5 inline-block">Sustainability Lab</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-6">
              Green Metrics.
              <br />
              <span className="text-green-brand">Quality Measured. Impact Tracked.</span>
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed">
              Mizuron's Sustainability Lab is our operational transparency platform. These are not marketing claims — they are the technical benchmarks that guide our sourcing, quality control, and environmental accountability.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PRIMARY METRICS DASHBOARD ========== */}
      <section className="section-py">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Green Metrics Dashboard</span>
          <h2 className="text-[oklch(95%_0.003_200)] mb-8">Core Performance Indicators</h2>

          {/* Metric Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {primaryMetrics.map((m, i) => (
              <button
                key={m.label}
                onClick={() => setActiveMetric(i)}
                className={`mz-card p-5 text-left transition-all ${activeMetric === i ? "border-[oklch(35.5%_0.088_153/0.5)] bg-[oklch(20%_0.012_153/0.3)]" : ""}`}
              >
                <m.icon size={18} className="mb-3" style={{ color: m.color }} />
                <div className="metric-number text-2xl mb-1" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs font-semibold text-[oklch(75%_0.003_200)] mb-0.5">{m.unit}</div>
                <div className="text-[0.65rem] text-[oklch(50%_0.006_200)]">{m.label}</div>
              </button>
            ))}
          </div>

          {/* Active Metric Detail */}
          <div className="mz-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  {(() => { const M = primaryMetrics[activeMetric]; return <M.icon size={22} style={{ color: M.color }} />; })()}
                  <h3 className="text-[oklch(90%_0.003_200)] font-semibold">{primaryMetrics[activeMetric].label}</h3>
                </div>
                <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-4">{primaryMetrics[activeMetric].description}</p>
                <div className="flex items-center gap-3">
                  <span className="tag-green text-[0.65rem]">{primaryMetrics[activeMetric].sublabel}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="metric-number text-5xl mb-2" style={{ color: primaryMetrics[activeMetric].color }}>
                  {primaryMetrics[activeMetric].value}
                </div>
                <div className="text-sm text-[oklch(55%_0.006_200)] mb-4">{primaryMetrics[activeMetric].unit}</div>
                {/* Progress bar */}
                <div className="w-full bg-[oklch(22%_0.009_200)] rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${primaryMetrics[activeMetric].progress}%`,
                      background: primaryMetrics[activeMetric].color,
                    }}
                  />
                </div>
                <div className="text-[0.65rem] text-[oklch(45%_0.006_200)] mt-1">{primaryMetrics[activeMetric].progress}% of benchmark</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRACEABILITY DASHBOARD ========== */}
      <section className="section-py bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Shipment-Level Traceability</span>
          <h2 className="text-[oklch(95%_0.003_200)] mb-8">Supply Chain Visibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {traceabilityMetrics.map((m) => (
              <div key={m.label} className="mz-card p-7">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm">{m.label}</h4>
                  <div className="metric-number text-2xl" style={{ color: "oklch(65% 0.12 153)" }}>{m.value}</div>
                </div>
                <p className="text-xs text-[oklch(60%_0.006_200)] leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BATCH-LEVEL QUALITY VISIBILITY ========== */}
      <section className="section-py">
        <div className="container">
          <div className="section-divider" />
          <span className="tag-green mb-4 inline-block">Batch-Level Quality Visibility</span>
          <h2 className="text-[oklch(95%_0.003_200)] mb-4">Quality Parameters by Product</h2>
          <p className="text-[oklch(65%_0.006_200)] mb-8 max-w-2xl">
            The following parameters represent our vermicompost quality standard. Each batch is evaluated against these benchmarks. Batch-specific reports are available upon request.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[oklch(26%_0.009_200)]">
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)]">Parameter</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)]">Target / Range</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)]">Verification Status</th>
                  <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)]">Batch Verified</th>
                </tr>
              </thead>
              <tbody>
                {qualityMetrics.map((q, i) => (
                  <tr key={q.param} className={`border-b border-[oklch(22%_0.009_200)] ${i % 2 === 0 ? "bg-[oklch(15%_0.009_200/0.5)]" : ""}`}>
                    <td className="py-3 px-4 text-sm text-[oklch(75%_0.006_200)]">{q.param}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-[oklch(65%_0.12_153)]">{q.target}</td>
                    <td className="py-3 px-4 text-xs text-[oklch(55%_0.006_200)]">{q.status}</td>
                    <td className="py-3 px-4">
                      <CheckCircle2 size={14} className="text-[oklch(35.5%_0.088_153)]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[oklch(40%_0.006_200)] mt-4">
            * These parameters represent typical batch ranges. Batch-specific lab reports available upon request. Values subject to seasonal and source variation within stated ranges. Mizuron does not present unsupported claims as final legal statements.
          </p>
        </div>
      </section>

      {/* ========== CIRCULAR ECONOMY ========== */}
      <section className="section-py bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <span className="tag-green mb-4 inline-block">Circular Economy</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">Responsible Sourcing. Reduced-Loss Logistics.</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Mizuron's sustainability approach is operational, not aspirational. We build circular economy logic into our sourcing — converting agricultural by-products into high-value soil amendments, reducing waste at source, and minimizing loss through moisture-controlled packaging and logistics.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-8">
                Our carbon-conscious trade framework extends to packaging intelligence — reducing single-use materials, optimizing container utilization, and supporting buyers in meeting their own sustainability reporting requirements.
              </p>
              <Link href="/products/biochar" className="btn-primary">
                Biochar 2027 — Carbon Infrastructure <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Recycle, label: "Circular Feedstock", description: "Agricultural waste converted to premium soil amendment" },
                { icon: Package, label: "Packaging Intelligence", description: "Moisture-barrier, reduced-waste export packaging" },
                { icon: Globe, label: "Carbon-Conscious Trade", description: "Logistics optimized for container utilization and reduced loss" },
                { icon: FlaskConical, label: "Quality Validation", description: "Lab-backed parameters, not marketing claims" },
              ].map((item) => (
                <div key={item.label} className="mz-card p-5">
                  <item.icon size={18} className="text-[oklch(65%_0.12_153)] mb-3" />
                  <div className="text-sm font-semibold text-[oklch(85%_0.003_200)] mb-1">{item.label}</div>
                  <div className="text-xs text-[oklch(55%_0.006_200)]">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section-py">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-divider mx-auto" />
            <h2 className="text-[oklch(95%_0.003_200)] mb-5">Request Technical Documentation</h2>
            <p className="text-[oklch(65%_0.006_200)] mb-8 leading-relaxed">
              Buyers, procurement teams, and sustainability officers can request batch-level quality reports, technical datasheets, and compliance documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#datasheet" className="btn-primary">
                Request Technical Datasheet <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
