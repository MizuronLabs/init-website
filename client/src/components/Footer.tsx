import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const LOGO_LIGHT = "/assets/logo-light.png";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/mizuron" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/MizuronGlobal" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mizuron.global/" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916361406325?text=Hi%20Mizuron%20Global,%20I%20reached%20out%20via%20your%20website.%20I%20am%20interested%20in%20learning%20more%20about%20your%20India%20sourcing%20and%20verification%20services." },
];

const serviceLinks = [
  { label: "Verification Reports", href: "#services" },
  { label: "Documentation Retainer", href: "#services" },
  { label: "Full Sourcing Projects", href: "#services" },
  { label: "Pilot Engagement", href: "#contact" },
];

const companyLinks = [
  { label: "About Mizuron Global", href: "#about" },
  { label: "Ingredient Categories", href: "#categories" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-16 pb-8" aria-label="Site footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src={LOGO_LIGHT}
              alt="Mizuron Global"
              className="h-[40px] w-auto mb-4"
            />
            <p className="text-[12.5px] text-paper/45 leading-[1.75] max-w-[280px]">
              Verified Indian spice and Ayurvedic ingredient sourcing for food manufacturers,
              nutraceutical companies, and supplement distributors in Japan, Korea, and Southeast
              Asia. Based in Gujarat, India.
            </p>
            <div className="flex gap-2.5 mt-5 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mizuron Global on ${s.label}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-white/12 text-[11.5px] text-paper/55 no-underline transition-all duration-200 hover:border-gold2 hover:text-gold2"
                >
                  <s.icon size={13} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[10.5px] tracking-[0.12em] uppercase text-gold2 mb-4 font-sans font-medium">
              Services
            </h5>
            {serviceLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-[12.5px] text-paper/50 no-underline mb-2 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10.5px] tracking-[0.12em] uppercase text-gold2 mb-4 font-sans font-medium">
              Company
            </h5>
            {companyLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-[12.5px] text-paper/50 no-underline mb-2 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/7 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11.5px] text-paper/30">
            &copy; 2026 Mizuron Global. All rights reserved. Ahmedabad, Gujarat, India.
          </span>
          <span className="font-serif italic text-[13px] text-paper/35">
            India's ingredients. Your confidence.
          </span>
        </div>
      </div>
    </footer>
  );
}
