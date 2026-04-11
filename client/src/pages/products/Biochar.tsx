import { Link } from "wouter";
import { ArrowRight, Wind, Leaf, Droplets, Zap, Building2, Globe, TrendingUp, Calendar } from "lucide-react";

const roadmapPhases = [
  {
    year: "2024–2025",
    phase: "Foundation",
    title: "Research, Sourcing & Partner Identification",
    items: [
      "Biochar production technology assessment",
      "Feedstock sourcing and supply chain mapping",
      "Pilot production unit evaluation",
      "Institutional partner identification",
      "Market demand validation with early adopters",
    ],
    status: "active",
  },
  {
    year: "2025–2026",
    phase: "Pilot",
    title: "Pilot Production & Market Entry",
    items: [
      "Modular production unit commissioning",
      "Quality parameter definition and testing",
      "First commercial shipments to strategic buyers",
      "Carbon sequestration documentation framework",
      "Distribution partner onboarding",
    ],
    status: "upcoming",
  },
  {
    year: "2026–2027",
    phase: "Scale",
    title: "Infrastructure Scale & Carbon Integration",
    items: [
      "Full-scale production capability",
      "Carbon offset infrastructure development",
      "Government and institutional program integration",
      "International distribution network activation",
      "Long-term offtake agreement framework",
    ],
    status: "roadmap",
  },
];

const biocharBenefits = [
  {
    icon: Leaf,
    title: "Long-Term Carbon Stability",
    description: "Biochar sequesters carbon in a stable form that remains in soil for hundreds to thousands of years, making it a credible carbon management tool.",
  },
  {
    icon: Droplets,
    title: "Water-Holding Capacity",
    description: "Biochar's porous structure significantly improves soil water retention — critical for arid environments, island soils, and drought-prone agricultural regions.",
  },
  {
    icon: TrendingUp,
    title: "Nutrient Retention",
    description: "Biochar reduces nutrient leaching by improving cation exchange capacity, making fertilizer applications more efficient and reducing runoff.",
  },
  {
    icon: Zap,
    title: "Soil Regeneration",
    description: "Applied to degraded soils, biochar accelerates biological recovery, improves microbial activity, and supports long-term fertility restoration.",
  },
  {
    icon: Building2,
    title: "Modular Production",
    description: "Mizuron's production model is designed around modular units that can be deployed at regional scale — enabling distributed production close to feedstock sources.",
  },
  {
    icon: Globe,
    title: "Carbon Infrastructure",
    description: "Beyond the product, Mizuron is building the infrastructure for carbon-linked trade — connecting production, verification, and institutional off-take.",
  },
];

const partnershipTypes = [
  { label: "Biochar Product", description: "Commercial buyers seeking biochar for agricultural, horticultural, or soil restoration applications." },
  { label: "Biochar Production Unit", description: "Partners interested in co-investing in or hosting modular biochar production infrastructure." },
  { label: "Distribution Partnership", description: "Regional distributors seeking to represent Mizuron biochar in their markets." },
  { label: "Carbon Partnership", description: "Organizations exploring carbon offset, carbon credit, or carbon-linked soil restoration collaborations." },
  { label: "Government / Institutional Project", description: "Government bodies, NGOs, and institutional buyers interested in large-scale soil restoration or carbon programs." },
];

export default function Biochar() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(12%_0.008_200)] via-[oklch(16%_0.008_190)] to-[oklch(12%_0.008_200)]" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[oklch(37.5%_0.012_190/0.08)] blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-xs text-[oklch(50%_0.006_200)] mb-6">
            <Link href="/products" className="hover:text-[oklch(65%_0.12_153)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[oklch(65%_0.12_153)]">Biochar 2027 Roadmap</span>
          </div>
          <div className="max-w-3xl">
            <span className="tag-grey mb-4 inline-block">Future Roadmap · Carbon Solutions</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-5">
              Biochar 2027 Roadmap
              <br />
              <span className="text-[oklch(60%_0.012_190)]">Carbon-Smart Soil Infrastructure</span>
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed mb-6">
              Mizuron is building the infrastructure for carbon-smart soil restoration. Our Biochar 2027 Roadmap represents a long-term commitment to modular production, institutional partnerships, and carbon-linked land regeneration.
            </p>
            <p className="text-[oklch(55%_0.006_200)] text-sm leading-relaxed mb-8">
              This vertical is in active development. We invite serious partners — institutional buyers, government programs, distribution networks, and carbon infrastructure investors — to engage early.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#partnership-form" className="btn-primary">
                Partnership Inquiry <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="btn-outline">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT IS BIOCHAR ========== */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <span className="tag-grey mb-4 inline-block">The Product</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">What is Biochar?</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Biochar is a carbon-rich material produced through the pyrolysis of organic biomass at high temperatures in a low-oxygen environment. The result is a stable, porous carbon structure that, when applied to soil, delivers measurable improvements in water retention, nutrient holding capacity, and long-term carbon sequestration.
              </p>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-5">
                Unlike conventional soil amendments, biochar does not break down rapidly. Its carbon stability means that the benefits — and the carbon sequestration — persist for decades or longer, making it a credible tool for both agricultural improvement and carbon management.
              </p>
              <p className="text-[oklch(55%_0.006_200)] text-sm leading-relaxed">
                Mizuron is developing biochar supply capability with a focus on quality-controlled production, technical documentation, and institutional-grade off-take frameworks. We do not overstate current production status — this is an active development program with a defined 2027 commercial target.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100s–1000s", label: "Years", sub: "Carbon stability in soil" },
                { value: "40%+", label: "Water Retention", sub: "Improvement in sandy soils" },
                { value: "30%+", label: "Nutrient Efficiency", sub: "Reduced leaching" },
                { value: "2027", label: "Commercial Target", sub: "Full-scale production" },
              ].map((stat) => (
                <div key={stat.label} className="mz-card p-6">
                  <div className="metric-number mb-1" style={{ color: "oklch(60% 0.012 190)" }}>{stat.value}</div>
                  <div className="text-sm font-semibold text-[oklch(80%_0.003_200)] mb-1">{stat.label}</div>
                  <div className="text-xs text-[oklch(50%_0.006_200)]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="section-py bg-[oklch(15%_0.009_200)] border-y border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-grey mb-4 inline-block">Why Biochar</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">Six Reasons Biochar Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {biocharBenefits.map((b) => (
              <div key={b.title} className="mz-card p-7">
                <div className="w-10 h-10 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center mb-4">
                  <b.icon size={18} className="text-[oklch(60%_0.012_190)]" />
                </div>
                <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm mb-2">{b.title}</h4>
                <p className="text-xs text-[oklch(60%_0.006_200)] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ROADMAP TIMELINE ========== */}
      <section className="section-py">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto" />
            <span className="tag-grey mb-4 inline-block">Development Timeline</span>
            <h2 className="text-[oklch(95%_0.003_200)] mb-4">The 2027 Roadmap</h2>
            <p className="text-[oklch(65%_0.006_200)] max-w-xl mx-auto">
              A structured three-phase development program from research and partner identification through to full-scale production and carbon infrastructure integration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roadmapPhases.map((phase, i) => (
              <div key={phase.phase} className={`mz-card p-7 relative ${phase.status === "active" ? "border-[oklch(35.5%_0.088_153/0.4)]" : ""}`}>
                {phase.status === "active" && (
                  <div className="absolute top-4 right-4">
                    <span className="tag-green text-[0.6rem]">Active</span>
                  </div>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} className="text-[oklch(60%_0.012_190)]" />
                  <span className="text-xs font-bold text-[oklch(60%_0.012_190)] uppercase tracking-wider">{phase.year}</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[oklch(50%_0.006_200)] mb-1">Phase {i + 1} · {phase.phase}</div>
                <h4 className="text-[oklch(90%_0.003_200)] font-semibold text-sm mb-4">{phase.title}</h4>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[oklch(58%_0.006_200)]">
                      <span className="w-1 h-1 rounded-full bg-[oklch(60%_0.012_190)] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERSHIP FORM ========== */}
      <section id="partnership-form" className="section-py-lg bg-[oklch(15%_0.009_200)] border-t border-[oklch(22%_0.009_200)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <div className="section-divider" />
              <span className="tag-grey mb-4 inline-block">Partnership Inquiry</span>
              <h2 className="text-[oklch(95%_0.003_200)] mb-5">Engage Early. Shape the Infrastructure.</h2>
              <p className="text-[oklch(65%_0.006_200)] leading-relaxed mb-6">
                Mizuron is actively building its biochar partner network. Early engagement allows us to tailor production specifications, documentation frameworks, and off-take arrangements to your specific requirements.
              </p>
              <div className="flex flex-col gap-4">
                {partnershipTypes.map((pt) => (
                  <div key={pt.label} className="border-green-left">
                    <div className="text-sm font-semibold text-[oklch(85%_0.003_200)] mb-0.5">{pt.label}</div>
                    <div className="text-xs text-[oklch(55%_0.006_200)]">{pt.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="mz-card p-8">
              <h4 className="text-[oklch(90%_0.003_200)] font-semibold mb-6">Biochar Partnership Inquiry</h4>
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Name *</label>
                    <input type="text" required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Organization *</label>
                    <input type="text" required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors" placeholder="Company / Institution" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Organization Type *</label>
                  <select required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors">
                    <option value="">Select type</option>
                    <option>Government / Institutional</option>
                    <option>Investment Firm</option>
                    <option>NGO / Development Organization</option>
                    <option>Agricultural Business</option>
                    <option>Distribution Company</option>
                    <option>Carbon Project Developer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Country *</label>
                    <input type="text" required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors" placeholder="Country" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Email *</label>
                    <input type="email" required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Interested In *</label>
                  <select required className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors">
                    <option value="">Select interest</option>
                    <option>Biochar Product</option>
                    <option>Biochar Production Unit</option>
                    <option>Distribution Partnership</option>
                    <option>Carbon Partnership</option>
                    <option>Government / Institutional Project</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea rows={4} className="w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors resize-none" placeholder="Describe your interest, project context, or requirements..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Partnership Inquiry <ArrowRight size={16} />
                </button>
                <p className="text-[0.65rem] text-[oklch(40%_0.006_200)] text-center">
                  Your inquiry is treated with confidentiality. Mizuron will respond within 3–5 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
