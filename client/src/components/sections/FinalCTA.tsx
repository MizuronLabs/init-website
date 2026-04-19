import { useTranslation } from "react-i18next";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container">
        <div className="max-w-[640px] mx-auto text-center fade-up">

          <span className="text-[10.5px] tracking-[0.14em] uppercase text-gold2/75 font-medium block mb-5">
            {t("finalCta.tag")}
          </span>

          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-paper leading-[1.1] mb-5">
            {t("finalCta.h2")}
            <br />
            <em className="italic text-gold2">{t("finalCta.h2em")}</em>
          </h2>

          <p className="text-[14px] text-paper/50 leading-[1.85] mb-3 max-w-[520px] mx-auto">
            {t("finalCta.sub")}
          </p>

          <p className="text-[13px] text-paper/35 leading-[1.7] mb-9 max-w-[420px] mx-auto">
            {t("finalCta.note")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#contact"
              className="inline-block bg-gold text-paper px-8 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_6px_20px_rgba(15,74,54,0.35)]"
            >
              {t("finalCta.cta1")}
            </a>
            <a
              href="mailto:hello@mizuronglobal.com"
              className="inline-block bg-transparent text-paper px-8 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline border border-white/20 transition-all duration-200 hover:border-gold2/60 hover:text-gold2"
            >
              {t("finalCta.cta2")}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-7 border-t border-white/[0.08]">
            <span className="text-[11px] text-paper/25 tracking-[0.05em]">{t("finalCta.responseTime")}</span>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <span className="text-[11px] text-paper/25 tracking-[0.05em]">{t("finalCta.email")}</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" aria-hidden="true" />
            <span className="text-[11px] text-paper/25 tracking-[0.05em] hidden sm:block">{t("finalCta.location")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
