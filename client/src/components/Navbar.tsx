import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

const LOGO_DARK = "/assets/logo-dark.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];

  const navLinks = [
    { label: t("nav.services"),   href: "/#services" },
    { label: t("nav.howItWorks"), href: "/#how-it-works" },
    { label: t("nav.proof"),      href: "/#proof" },
    { label: t("nav.categories"), href: "/#categories" },
    { label: t("nav.about"),      href: "/#about" },
    { label: t("nav.faq"),        href: "/#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const handleLangChange = (code: string) => {
    setLangOpen(false);
    setIsOpen(false);
    i18n.changeLanguage(code);
    navigate(code === "en" ? "/" : `/${code}`);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/97 backdrop-blur-md border-b border-paper3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-paper/97 backdrop-blur-md border-b border-paper3"
      }`}
    >
      <div className="container flex items-center justify-between h-[60px] lg:h-[88px]">
        {/* Logo */}
        <a
          href="/"
          className="block no-underline shrink-0"
          aria-label="Mizuron Global home"
          onClick={(e) => {
            e.preventDefault();
            if (location === "/" || location === `/${i18n.language}`) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
        >
          <img
            src={LOGO_DARK}
            alt="Mizuron Global — India Ingredient Intelligence"
            className="h-[44px] lg:h-[68px] w-auto"
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

          {/* Language switcher — desktop */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[12px] text-ink2 hover:text-gold transition-colors px-2 py-1.5 border border-transparent hover:border-paper3"
              aria-label="Switch language"
              aria-expanded={langOpen}
            >
              <span className="text-[14px]">{currentLang.flag}</span>
              <span className="tracking-[0.06em] font-medium">{currentLang.label}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-paper border border-paper3 shadow-md z-50">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-left hover:bg-paper2 transition-colors ${
                      lang.code === currentLang.code ? "text-gold font-medium" : "text-ink2"
                    }`}
                  >
                    <span className="text-[15px]">{lang.flag}</span>
                    <span>{lang.name}</span>
                    <span className="ml-auto text-[11px] text-ink3 font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#contact"
            className="bg-ink text-paper px-[22px] py-[10px] text-[11.5px] tracking-[0.09em] uppercase font-medium no-underline transition-all duration-200 hover:bg-gold hover:shadow-[0_4px_16px_rgba(151,120,46,0.28)]"
          >
            {t("nav.cta")}
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
        <div className="lg:hidden fixed inset-0 top-[60px] bg-paper z-40 overflow-y-auto">
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

            {/* Language switcher — mobile */}
            <div className="py-4 border-b border-paper3">
              <div className="text-[10px] tracking-[0.12em] uppercase text-ink3 mb-3">Language</div>
              <div className="grid grid-cols-4 gap-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`flex flex-col items-center gap-1 py-2 px-1 border transition-colors ${
                      lang.code === currentLang.code
                        ? "border-gold bg-paper2 text-gold"
                        : "border-paper3 text-ink2 hover:border-gold/50"
                    }`}
                  >
                    <span className="text-[18px]">{lang.flag}</span>
                    <span className="text-[10px] tracking-[0.06em] font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="/#contact"
              onClick={handleLinkClick}
              className="mt-4 block text-center bg-ink text-paper py-3.5 text-[12px] tracking-[0.09em] uppercase font-medium no-underline transition-all hover:bg-gold"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
