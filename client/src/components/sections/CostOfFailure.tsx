import { useTranslation } from "react-i18next";

type RiskItem = { cost: string; label: string };

export default function CostOfFailure() {
  const { t } = useTranslation();
  const risks = t("cost.risks", { returnObjects: true }) as RiskItem[];

  const barWidths = ["40%", "100%", "100%", null];

  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: The argument */}
          <div className="fade-up">
            <span className="tag !text-gold2/80">{t("cost.tag")}</span>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-paper leading-[1.1] mb-4">
              {t("cost.h2")}
              <br />
              <em className="italic text-gold2">{t("cost.h2em")}</em>
            </h2>
            <p className="text-[14px] text-paper/50 leading-[1.85] mb-10 max-w-[460px]">
              {t("cost.sub")}
            </p>

            {/* Risk data */}
            <div className="space-y-7">
              {risks.map((r, i) => (
                <div
                  key={i}
                  className="fade-up"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-baseline justify-between mb-1.5 gap-4">
                    <span className="text-[11px] tracking-[0.07em] uppercase text-paper/35 font-medium leading-[1.4]">
                      {r.label}
                    </span>
                    <span className="font-serif text-[1.25rem] text-paper whitespace-nowrap leading-none">
                      {r.cost}
                    </span>
                  </div>
                  {barWidths[i] && (
                    <div className="w-full h-[2px] bg-white/[0.07] overflow-hidden">
                      <div className="h-full bg-white/20" style={{ width: barWidths[i]! }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: The comparison box */}
          <div className="fade-up" style={{ transitionDelay: "180ms" }}>
            <div className="bg-white/[0.05] border border-white/[0.09] p-7 md:p-9">
              <h3 className="font-serif text-[1.25rem] text-paper mb-2 leading-[1.2]">
                {t("cost.box.h3")}
              </h3>
              <p className="text-[12.5px] text-paper/40 mb-8 leading-[1.7]">
                {t("cost.box.sub")}
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-paper/45 font-medium">
                      {t("cost.box.row1label")}
                    </span>
                    <span className="font-serif text-paper text-[1.05rem]">{t("cost.box.row1val")}</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-white/25 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-paper/45 font-medium">
                      {t("cost.box.row2label")}
                    </span>
                    <span className="font-serif text-paper text-[1.05rem]">{t("cost.box.row2val")}</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-white/25 w-full" />
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.09]">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-gold2 font-medium">
                      {t("cost.box.row3label")}
                    </span>
                    <span className="font-serif text-gold2 text-[1.05rem]">{t("cost.box.row3val")}</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gold w-[8%]" />
                  </div>
                </div>
              </div>

              <p className="text-[12.5px] text-paper/45 mt-7 leading-[1.75] italic font-serif text-[1rem]">
                {t("cost.box.quote")}
              </p>

              <a
                href="#contact"
                className="inline-block mt-6 bg-gold text-paper px-6 py-3 text-[12px] tracking-[0.07em] uppercase font-medium no-underline transition-colors duration-200 hover:bg-teal"
              >
                {t("cost.box.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
