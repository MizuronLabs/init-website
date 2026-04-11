import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const LOGO_LIGHT = "/logos/logo-light.png";
const LOGO_DARK = "/logos/logo-dark.png";

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
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Use light logo on dark background (hero), and dark logo otherwise if theme is light
  const logoSrc = theme === "dark" ? LOGO_LIGHT : (scrolled ? LOGO_DARK : LOGO_LIGHT);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(12%_0.008_200/0.97)] backdrop-blur-md border-b border-[oklch(26%_0.009_200)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src={logoSrc}
              alt="Mizuron Global"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                    location === item.href
                      ? "text-[oklch(65%_0.12_153)]"
                      : "text-[oklch(75%_0.006_200)] hover:text-[oklch(95%_0.003_200)]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[oklch(17%_0.009_200)] border border-[oklch(26%_0.009_200)] rounded-sm shadow-xl py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[oklch(72%_0.006_200)] hover:text-[oklch(95%_0.003_200)] hover:bg-[oklch(22%_0.009_200)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
              Request Inquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[oklch(75%_0.006_200)] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(15%_0.009_200)] border-t border-[oklch(26%_0.009_200)] max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-[oklch(80%_0.006_200)] hover:text-white hover:bg-[oklch(22%_0.009_200)] rounded-sm transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l border-[oklch(26%_0.009_200)] pl-3 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-xs text-[oklch(65%_0.006_200)] hover:text-[oklch(65%_0.12_153)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[oklch(26%_0.009_200)] mt-2">
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
