import { useTranslation } from "react-i18next";

const VERIFICATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/verification-process-nDMJAAqRw6eFbQyfPCd3Js.webp";

type Step = { num: string; title: string; text: string };

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true }) as Step[];

  return (
    <section id="how-it-works" className="bg-paper2 py-16 md:py-24" aria-labelledby="how-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Steps */}
          <div>
            <span className="tag fade-up">{t("howItWorks.tag")}</span>
            <h2
              id="how-heading"
              className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-8 fade-up leading-[1.1]"
              style={{ transitionDelay: "80ms" }}
            >
              {t("howItWorks.h2")}{" "}
              <em className="italic">{t("howItWorks.h2em")}</em>
            </h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="flex gap-5 fade-up"
                  style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                >
                  <div className="font-serif text-[2rem] text-paper3 font-semibold min-w-[38px] leading-none">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.05rem] mb-1">{s.title}</h4>
                    <p className="text-[13px] text-ink2 leading-[1.7]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + CTA */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <div className="overflow-hidden mb-6">
              <img
                src={VERIFICATION_IMG}
                alt="Quality verification process — laboratory testing of Indian spice ingredients"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-ink p-6 md:p-8">
              <span className="tag !text-gold2/85">{t("howItWorks.ctaBox.tag")}</span>
              <h3 className="font-serif text-[1.3rem] text-paper mb-3">
                {t("howItWorks.ctaBox.h3")}
              </h3>
              <p className="text-[13px] text-paper/55 leading-[1.7] mb-5">
                {t("howItWorks.ctaBox.sub")}
              </p>
              <a
                href="#contact"
                className="inline-block bg-gold text-paper px-6 py-3 text-[11.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_4px_16px_rgba(15,74,54,0.30)]"
              >
                {t("howItWorks.ctaBox.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
