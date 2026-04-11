import { Link } from "wouter";
import { MapPin, Mail, Phone, ArrowUpRight, Linkedin, Globe } from "lucide-react";

const LOGO_LIGHT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/2qY7LtaKLgCV3LoWz2F2nM/mizuron-logo-light-1024_8e546806.png";

const footerLinks = {
  company: [
    { label: "About Mizuron", href: "/about" },
    { label: "The Vetting Protocol", href: "/about#vetting-protocol" },
    { label: "Sourcing Philosophy", href: "/about#sourcing" },
    { label: "Export Readiness", href: "/about#export-readiness" },
    { label: "Partnerships", href: "/contact#partnerships" },
  ],
  solutions: [
    { label: "Soil Nutrition", href: "/solutions#soil-nutrition" },
    { label: "Sustainable Commodities", href: "/solutions#commodities" },
    { label: "Carbon & Future Solutions", href: "/solutions#carbon" },
    { label: "Trade & Export Execution", href: "/solutions#trade" },
    { label: "Sustainability Lab", href: "/sustainability-lab" },
  ],
  products: [
    { label: "Vermicompost", href: "/products/vermicompost" },
    { label: "Biochar 2027 Roadmap", href: "/products/biochar" },
    { label: "Specialty Coffee", href: "/products/coffee" },
    { label: "High-Value Agri Products", href: "/products/agri" },
  ],
  resources: [
    { label: "Logistics & Export", href: "/logistics" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Request Technical Datasheet", href: "/contact#datasheet" },
    { label: "Download Company Profile", href: "/contact#company-profile" },
    { label: "Contact Export Desk", href: "/contact" },
  ],
};

const trustItems = [
  "Export Documentation Ready",
  "Technical Quality Control",
  "Batch-Level Traceability",
  "Global Logistics Readiness",
  "Scalable Sourcing Capability",
  "Compliance-Conscious Operations",
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(10%_0.008_200)] border-t border-[oklch(22%_0.009_200)]">
      {/* Trust Strip */}
      <div className="border-b border-[oklch(22%_0.009_200)] py-4 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs text-[oklch(60%_0.006_200)] uppercase tracking-widest font-medium">
                <span className="w-1 h-1 rounded-full bg-[oklch(35.5%_0.088_153)] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <img src={LOGO_LIGHT} alt="Mizuron Global" className="h-9 w-auto mb-5" />
            </Link>
            <p className="text-sm text-[oklch(60%_0.006_200)] leading-relaxed mb-5 max-w-xs">
              A sustainability-led merchant exporter and strategic sourcing partner. Supplying technically validated agricultural inputs and premium commodities to global buyers with export-grade precision.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-[oklch(60%_0.006_200)]">
              <a href="mailto:trade@mizuronglobal.com" className="flex items-center gap-2 hover:text-[oklch(65%_0.12_153)] transition-colors">
                <Mail size={13} className="text-[oklch(35.5%_0.088_153)]" />
                trade@mizuronglobal.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-[oklch(35.5%_0.088_153)]" />
                India — Export Operations
              </span>
              <span className="flex items-center gap-2">
                <Globe size={13} className="text-[oklch(35.5%_0.088_153)]" />
                Serving Global Markets
              </span>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[oklch(26%_0.009_200)] text-[oklch(60%_0.006_200)] hover:border-[oklch(35.5%_0.088_153)] hover:text-[oklch(65%_0.12_153)] transition-colors rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(95%_0.003_200)] mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[oklch(60%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(95%_0.003_200)] mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[oklch(60%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(95%_0.003_200)] mb-4">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[oklch(60%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(95%_0.003_200)] mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-1 text-sm text-[oklch(60%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors group">
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[oklch(22%_0.009_200)] py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(45%_0.006_200)]">
            © {new Date().getFullYear()} Mizuron Global. All rights reserved. Merchant Exporter & Strategic Sourcing Partner.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-[oklch(45%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[oklch(45%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
