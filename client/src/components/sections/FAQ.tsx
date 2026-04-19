import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

type FaqEntry = { q: string; a: string; link?: { href: string; text: string } };
type FaqCategory = { label: string; items: FaqEntry[] };

function FaqItem({
  item,
  isOpen,
  toggle,
}: {
  item: FaqEntry;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-paper3">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[1.05rem] text-ink pr-4 group-hover:text-gold transition-colors">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-ink3 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-[13.5px] text-ink2 leading-[1.8] pb-1 pr-8">{item.a}</p>
        {item.link && (
          <a
            href={item.link.href}
            className="inline-block text-[13px] text-gold no-underline hover:underline mb-4"
          >
            {item.link.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");
  const { t } = useTranslation();
  const categories = t("faq.categories", { returnObjects: true }) as FaqCategory[];

  return (
    <section id="faq" className="py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="container">
        <div className="max-w-[680px] mb-12 fade-up">
          <span className="tag">{t("faq.tag")}</span>
          <h2 id="faq-heading" className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4">
            {t("faq.h2")}
          </h2>
          <p className="text-[14px] text-ink2 leading-[1.8]">
            {t("faq.sub")}
          </p>
        </div>

        <div className="max-w-[860px] space-y-10">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="fade-up" style={{ transitionDelay: `${ci * 60}ms` }}>
              <span className="tag block mb-1">{cat.label}</span>
              <div>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  return (
                    <FaqItem
                      key={key}
                      item={item}
                      isOpen={openKey === key}
                      toggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[860px] mt-12 bg-paper2 border border-paper3 p-8 text-center fade-up">
          <h3 className="font-serif text-[1.5rem] mb-2">{t("faq.stillQuestion")}</h3>
          <p className="text-[13px] text-ink2 mb-6">{t("faq.stillSub")}</p>
          <a
            href="#contact"
            className="inline-block bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
          >
            {t("faq.stillCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
