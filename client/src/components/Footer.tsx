import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const LOGO_LIGHT = "/assets/logo-light.png";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/mizuron" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/MizuronGlobal" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mizuron.global/" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916361406325?text=Hi%20Mizuron%20Global,%20I%20reached%20out%20via%20your%20website.%20I%20am%20interested%20in%20learning%20more%20about%20your%20India%20sourcing%20and%20verification%20services." },
];

const serviceHrefs = ["/#services", "/#services", "/#services", "/#contact"];
const companyHrefs = ["/#about", "/#categories", "/#faq", "/#contact"];

export default function Footer() {
  const { t } = useTranslation();
  const serviceLinks = t("footer.serviceLinks", { returnObjects: true }) as string[];
  const companyLinks = t("footer.companyLinks", { returnObjects: true }) as string[];

  return (
    <footer className="bg-ink text-paper pt-16 pb-8" aria-label="Site footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src={LOGO_LIGHT}
              alt="Mizuron Global"
              className="h-[64px] w-auto mb-5"
            />
            <p className="text-[12.5px] text-paper/45 leading-[1.75] max-w-[280px]">
              {t("footer.desc")}
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
              {t("footer.servicesLabel")}
            </h5>
            {serviceLinks.map((label, i) => (
              <a
                key={label}
                href={serviceHrefs[i] ?? "/#services"}
                className="block text-[12.5px] text-paper/50 no-underline mb-2 transition-colors hover:text-paper"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10.5px] tracking-[0.12em] uppercase text-gold2 mb-4 font-sans font-medium">
              {t("footer.companyLabel")}
            </h5>
            {companyLinks.map((label, i) => (
              <a
                key={label}
                href={companyHrefs[i] ?? "/#about"}
                className="block text-[12.5px] text-paper/50 no-underline mb-2 transition-colors hover:text-paper"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Supplier Readiness Teaser */}
        <div className="border-t border-white/8 py-6 mb-0 flex items-center justify-between gap-8 flex-wrap">
          <div>
            <div className="text-[10px] tracking-[0.13em] uppercase text-paper/35 font-medium mb-1">
              {t("footer.supplierLabel")}
            </div>
            <p className="text-[12.5px] text-paper/55 max-w-[520px] leading-[1.65]">
              {t("footer.supplierDesc")}
            </p>
          </div>
          <a
            href="/for-suppliers"
            className="text-[12px] text-gold2 no-underline tracking-[0.03em] whitespace-nowrap transition-colors hover:text-paper shrink-0"
          >
            {t("footer.supplierLink")}
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/7 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11.5px] text-paper/30">
            {t("footer.copyright")}
          </span>
          <span className="font-serif italic text-[15px] text-paper/70 tracking-[0.015em]">
            {t("footer.tagline")}
          </span>
        </div>
      </div>
    </footer>
  );
}
