import { useTranslation } from "react-i18next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/hero-bg-MxiawnEFY7YVzBSyXSVity.webp";

export default function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) as Array<{ num: string; label: string }>;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 lg:py-36"
      aria-labelledby="hero-heading"
    >
      {/* Right image panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[50%] hidden lg:block z-0"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      >
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/55 to-transparent" />
      </div>

      {/* Subtle decorative letterform */}
      <div
        className="absolute right-[46%] top-4 text-[32rem] font-serif text-ink/[0.016] leading-none select-none hidden xl:block z-0 pointer-events-none"
        aria-hidden="true"
      >
        M
      </div>

      <div className="container relative z-10">
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7 md:mb-10 fade-up">
            <div className="w-9 h-px bg-gold" />
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-gold font-medium leading-[1.6]">
              {t("hero.eyebrow")}
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.3rem,5.2vw,4rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink mb-5 fade-up"
            style={{ transitionDelay: "80ms" }}
          >
            {t("hero.h1")}{" "}
            <em className="italic text-gold">{t("hero.h1em")}</em>
          </h1>

          {/* Clarifying line */}
          <p
            className="text-[0.9rem] text-ink3 mb-5 max-w-[460px] leading-[1.55] tracking-[0.005em] fade-up"
            style={{ transitionDelay: "150ms" }}
          >
            {t("hero.clarify")}
          </p>

          {/* Main subheading */}
          <p
            className="text-[1.02rem] text-ink2 mb-10 max-w-[530px] leading-[1.85] fade-up"
            style={{ transitionDelay: "210ms" }}
          >
            {t("hero.sub")}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-10 md:mb-14 fade-up"
            style={{ transitionDelay: "290ms" }}
          >
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-7 py-3.5 text-[12.5px] tracking-[0.07em] uppercase font-medium no-underline transition-all duration-200 hover:bg-gold hover:shadow-[0_6px_20px_rgba(151,120,46,0.30)]"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#proof"
              className="inline-block bg-transparent text-ink px-7 py-3.5 text-[12.5px] tracking-[0.07em] uppercase font-medium no-underline border border-ink/40 transition-all duration-200 hover:bg-ink hover:border-ink hover:text-paper"
            >
              {t("hero.cta2")}
            </a>
          </div>

          {/* Stats scorecard */}
          <div
            className="pt-7 border-t border-paper3 fade-up"
            style={{ transitionDelay: "370ms" }}
            aria-label="Key statistics"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5">
              {stats.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-[5px]">
                  <span className="font-serif text-[2rem] font-semibold text-ink leading-none">
                    {num}
                  </span>
                  <span className="text-[10px] tracking-[0.1em] text-ink3 uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
