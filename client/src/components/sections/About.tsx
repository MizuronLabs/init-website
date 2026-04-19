import { useTranslation } from "react-i18next";

type Advantage = { title: string; desc: string };
type Market = { market: string; body: string };

export default function About() {
  const { t } = useTranslation();
  const advantages = t("about.advantages", { returnObjects: true }) as Advantage[];
  const markets = t("about.markets", { returnObjects: true }) as Market[];

  return (
    <section id="about" className="bg-paper2 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: The story */}
          <div className="fade-up">
            <span className="tag">{t("about.tag")}</span>
            <h2
              id="about-heading"
              className="font-serif text-[clamp(1.8rem,3.2vw,2.7rem)] mb-6 leading-[1.1]"
            >
              {t("about.h2")}
            </h2>

            <div className="space-y-5 text-[14.5px] text-ink2 leading-[1.85]">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <blockquote className="mt-9 pl-5 border-l-2 border-gold">
              <p className="text-[14px] text-ink2 italic leading-[1.85] mb-3">
                {t("about.quote")}
              </p>
              <footer className="text-[12px] text-ink3 not-italic">
                <strong className="text-ink font-medium">{t("about.quoteAttr")}</strong>
                {" "}— {t("about.quoteLocation")}
              </footer>
            </blockquote>
          </div>

          {/* Right: Structural advantages + markets */}
          <div>
            <div className="mb-7 fade-up">
              <span className="tag">{t("about.whyTag")}</span>
              <h3 className="font-serif text-[1.45rem] leading-[1.2]">
                {t("about.whyH3")}
              </h3>
            </div>

            <div className="space-y-3">
              {advantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className="bg-paper border border-paper3 p-5 fade-up transition-all duration-200 hover:border-gold/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h4 className="font-serif text-[1.05rem] mb-1.5 leading-[1.2]">{adv.title}</h4>
                  <p className="text-[13px] text-ink2 leading-[1.75]">{adv.desc}</p>
                </div>
              ))}
            </div>

            {/* Markets grid */}
            <div
              className="mt-5 bg-ink p-6 fade-up"
              style={{ transitionDelay: "360ms" }}
            >
              <div className="text-[10.5px] tracking-[0.13em] uppercase text-gold2/80 font-medium mb-4">
                {t("about.marketsLabel")}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {markets.map((m) => (
                  <div
                    key={m.market}
                    className="border border-white/10 p-3 transition-colors duration-200 hover:border-gold/30"
                  >
                    <div className="font-serif text-[1rem] text-paper mb-0.5">{m.market}</div>
                    <div className="text-[11px] text-paper/40">{m.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
