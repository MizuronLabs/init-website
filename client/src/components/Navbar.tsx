import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const LOGO_DARK = "/assets/logo-dark.png";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Proof", href: "/#proof" },
  { label: "Categories", href: "/#categories" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/97 backdrop-blur-md border-b border-paper3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-paper/97 backdrop-blur-md border-b border-paper3"
      }`}
    >
      <div className="container flex items-center justify-between h-[66px]">
        {/* Logo — SVG file */}
        <a
          href="/"
          className="block no-underline shrink-0"
          aria-label="Mizuron Global home"
          onClick={(e) => {
            e.preventDefault();
            if (location === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
        >
          <img
            src={LOGO_DARK}
            alt="Mizuron Global — India Ingredient Intelligence"
            className="h-[42px] w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink2 no-underline tracking-[0.03em] font-normal transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="bg-ink text-paper px-[22px] py-[9px] text-[12px] tracking-[0.07em] font-medium no-underline transition-colors duration-200 hover:bg-gold"
          >
            Work With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[66px] bg-paper z-40 overflow-y-auto">
          <div className="container py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-[15px] text-ink2 no-underline border-b border-paper3 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={handleLinkClick}
              className="mt-4 block text-center bg-ink text-paper py-3 text-[13px] tracking-[0.07em] font-medium no-underline transition-colors hover:bg-gold"
            >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
