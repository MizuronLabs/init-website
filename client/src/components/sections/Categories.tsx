import { useTranslation } from "react-i18next";

const SPICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/spice-warehouse-Xvm5eZBko4cpeniNJuDiVx.webp";
const BOTANICAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/botanical-wellness-FfmY4tUN77eqjfiECbNk33.webp";

type CategoryCard = { title: string; desc: string; tags: string[] };

function Card({ cat, delay }: { cat: CategoryCard; delay: number }) {
  return (
    <div
      className="bg-paper2 border border-paper3 p-5 fade-up transition-all duration-200 hover:border-gold/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="font-serif text-[1.1rem] mb-1.5">{cat.title}</h4>
      <p className="text-[13px] text-ink2 leading-[1.7] mb-3">{cat.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {cat.tags.map((tag) => (
          <span key={tag} className="text-[10.5px] px-2.5 py-1 bg-paper3 text-ink2 border border-transparent transition-colors duration-150 hover:border-gold/40 hover:text-ink">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Categories() {
  const { t } = useTranslation();
  const spiceItems = t("categories.spiceItems", { returnObjects: true }) as CategoryCard[];
  const wellnessItems = t("categories.wellnessItems", { returnObjects: true }) as CategoryCard[];
  const spicesBuyers = t("categories.spicesBuyers", { returnObjects: true }) as string[];
  const wellnessBuyers = t("categories.wellnessBuyers", { returnObjects: true }) as string[];

  return (
    <section id="categories" className="py-16 md:py-20" aria-labelledby="categories-heading">
      <div className="container">
        <span className="tag fade-up">{t("categories.tag")}</span>
        <h2
          id="categories-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-3 fade-up"
        >
          {t("categories.h2")}
        </h2>
        <p className="text-ink2 text-[15px] max-w-[600px] mb-12 fade-up">
          {t("categories.sub")}
        </p>

        {/* Primary: Spices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="fade-up">
            <span className="tag">{t("categories.spicesTag")}</span>
            <h3 className="font-serif text-[1.7rem] mb-3">{t("categories.spicesH3")}</h3>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-4">{t("categories.spicesDesc")}</p>
            <div className="overflow-hidden mb-4">
              <img
                src={SPICE_IMG}
                alt="Indian spice warehouse with organized sacks of turmeric, chili, and cumin"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {spicesBuyers.map((b) => (
                <span key={b} className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">{b}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {spiceItems.map((cat, i) => (
              <Card key={cat.title} cat={cat} delay={i * 60} />
            ))}
          </div>
        </div>

        <div className="h-px bg-paper3 mb-16" />

        {/* Secondary: Wellness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="fade-up">
            <span className="tag">{t("categories.wellnessTag")}</span>
            <h3 className="font-serif text-[1.7rem] mb-3">{t("categories.wellnessH3")}</h3>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-4">{t("categories.wellnessDesc")}</p>
            <div className="overflow-hidden mb-4">
              <img
                src={BOTANICAL_IMG}
                alt="Ayurvedic botanical wellness ingredients — ashwagandha, brahmi, moringa, tulsi"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {wellnessBuyers.map((b) => (
                <span key={b} className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">{b}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {wellnessItems.map((cat, i) => (
              <Card key={cat.title} cat={cat} delay={i * 60} />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-teal2 text-paper py-12 md:py-16 text-center fade-up">
          <div className="max-w-[560px] mx-auto px-6">
            <h3 className="font-serif text-[clamp(1.3rem,3vw,2rem)] mb-3 text-paper">
              {t("categories.ctaBanner")}
            </h3>
            <p className="text-[13.5px] text-paper/70 mb-6">
              {t("categories.ctaBannerSub")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-paper text-teal2 px-6 py-3 text-[12px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-paper2 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
            >
              {t("categories.ctaBannerCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
