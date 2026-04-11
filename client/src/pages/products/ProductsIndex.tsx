import { Link } from "wouter";
import { ArrowRight, Sprout, Wind, Coffee, Package } from "lucide-react";

const products = [
  {
    icon: Sprout,
    title: "Vermicompost",
    tag: "Live Product",
    description: "Export-grade, double-sifted vermicompost. pH-buffered, low EC, reef-safe. Ideal for resort landscaping, commercial horticulture, and soil restoration.",
    href: "/products/vermicompost",
    status: "Live",
  },
  {
    icon: Wind,
    title: "Biochar 2027 Roadmap",
    tag: "Future Roadmap",
    description: "Carbon-stable soil amendment with significant water retention and nutrient holding capacity. Mizuron's long-term carbon infrastructure play.",
    href: "/products/biochar",
    status: "Roadmap",
  },
  {
    icon: Coffee,
    title: "Specialty Coffee",
    tag: "Live Product",
    description: "SCA-scored specialty coffee with full traceability, moisture analysis, and ethical sourcing verification. Farm-to-port visibility for premium buyers.",
    href: "/products/coffee",
    status: "Live",
  },
  {
    icon: Package,
    title: "High-Value Agri Products",
    tag: "Expanding",
    description: "Premium agricultural commodities sourced with technical discipline — spices, oilseeds, pulses, and specialty grains with full documentation.",
    href: "/products/agri",
    status: "Expanding",
  },
];

export default function ProductsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.012_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="tag-green mb-5 inline-block">Products</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-5">
              The Mizuron Portfolio
            </h1>
            <p className="text-lg text-[oklch(65%_0.006_200)] leading-relaxed">
              Every product in our portfolio is evaluated against a defined quality standard. Select a product to view full specifications, packaging options, and inquiry forms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <Link key={p.title} href={p.href} className="mz-card p-8 block group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center">
                    <p.icon size={20} className="text-[oklch(65%_0.12_153)]" />
                  </div>
                  <span className={`text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                    p.status === "Live"
                      ? "bg-[oklch(35.5%_0.088_153/0.2)] text-[oklch(65%_0.12_153)] border border-[oklch(35.5%_0.088_153/0.3)]"
                      : p.status === "Expanding"
                      ? "bg-[oklch(50%_0.10_153/0.15)] text-[oklch(60%_0.10_153)] border border-[oklch(50%_0.10_153/0.25)]"
                      : "bg-[oklch(37.5%_0.012_190/0.15)] text-[oklch(55%_0.012_190)] border border-[oklch(37.5%_0.012_190/0.25)]"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="text-[oklch(90%_0.003_200)] font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[oklch(60%_0.006_200)] leading-relaxed mb-4">{p.description}</p>
                <div className="flex items-center gap-2 text-[oklch(65%_0.12_153)] text-sm font-semibold group-hover:gap-3 transition-all">
                  View Product <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
