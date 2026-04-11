import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

// Colored green logo — always on white navbar
const LOGO = "/logos/logo-dark.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Soil Nutrition", href: "/solutions#soil-nutrition" },
      { label: "Sustainable Commodities", href: "/solutions#commodities" },
      { label: "Carbon & Future Solutions", href: "/solutions#carbon" },
      { label: "Trade & Export Execution", href: "/solutions#trade" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Vermicompost", href: "/products/vermicompost" },
      { label: "Biochar 2027 Roadmap", href: "/products/biochar" },
      { label: "Specialty Coffee", href: "/products/coffee" },
      { label: "Agri Products", href: "/products/agri" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Logistics & Export", href: "/logistics" },
  { label: "Sustainability Lab", href: "/sustainability-lab" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/97 backdrop-blur-sm border-b border-[oklch(87%_0.010_140)] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src={LOGO}
              alt="Mizuron Global"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                    location === item.href
                      ? "text-[oklch(35.5%_0.088_153)]"
                      : "text-[oklch(38%_0.025_153)] hover:text-[oklch(35.5%_0.088_153)]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-[oklch(87%_0.010_140)] rounded-sm shadow-lg py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[oklch(42%_0.018_153)] hover:text-[oklch(35.5%_0.088_153)] hover:bg-[oklch(97%_0.006_140)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
              Request Inquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[oklch(38%_0.025_153)] hover:text-[oklch(35.5%_0.088_153)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[oklch(87%_0.010_140)] max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-[oklch(38%_0.025_153)] hover:text-[oklch(35.5%_0.088_153)] hover:bg-[oklch(93%_0.010_140)] rounded-sm transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l-2 border-[oklch(35.5%_0.088_153/0.3)] pl-3 flex flex-col gap-0.5 mb-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-xs text-[oklch(48%_0.018_153)] hover:text-[oklch(35.5%_0.088_153)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[oklch(87%_0.010_140)] mt-2">
              <Link href="/contact" className="btn-primary w-full justify-center text-xs">
                Request Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
