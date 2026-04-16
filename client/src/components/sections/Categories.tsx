/*
 * Design: Archival Intelligence
 * Two-column layout: category description left, ingredient cards right
 * Spice warehouse and botanical wellness images
 */

const SPICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/spice-warehouse-Xvm5eZBko4cpeniNJuDiVx.webp";
const BOTANICAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/botanical-wellness-FfmY4tUN77eqjfiECbNk33.webp";

const spiceCategories = [
  {
    title: "Functional Spices",
    desc: "Turmeric (curcumin-verified), black pepper (piperine content confirmed), ginger — for health-positioned food and supplement applications.",
    tags: ["Curcumin % testing", "Piperine verification", "Pesticide MRL"],
  },
  {
    title: "Culinary Spices",
    desc: "Cumin, coriander, cardamom, chili, fenugreek — verified-origin documentation for food manufacturers needing geographic provenance.",
    tags: ["Origin documentation", "GI certification", "Microbial testing"],
  },
  {
    title: "Seed Spices",
    desc: "Fennel, ajwain, nigella, mustard seed — sourced from specific Indian growing districts with full traceability.",
    tags: ["Region traceability", "Moisture specs", "Adulteration testing"],
  },
  {
    title: "Spice Extracts & Oleoresins",
    desc: "Standardised extracts for nutraceutical and food manufacturers — specification-matched with batch-consistent profiles.",
    tags: ["Active compound %", "Solvent residue", "CoA chain"],
  },
];

const wellnessCategories = [
  {
    title: "Adaptogenic Herbs",
    desc: "Ashwagandha (withanolide-verified), brahmi, shatavari, triphala, tulsi — for supplement manufacturers requiring pharmaceutical-standard documentation.",
    tags: ["Withanolide %", "Heavy metals panel", "Pharmaceutical grade"],
  },
  {
    title: "Beauty & Cosmetic Botanicals",
    desc: "Neem extract, kumkumadi actives, bakuchi (natural retinol alternative), sandalwood, vetiver — for K-beauty and J-wellness formulation.",
    tags: ["Purity testing", "EU cosmetic compliance", "Authenticity verification"],
  },
  {
    title: "Herbal Teas & Functional Blends",
    desc: "Tulsi, moringa, ginger-lemon, spiced wellness blends — for health retailers and branded beverage manufacturers across Southeast Asia.",
    tags: ["Microbial testing", "Pesticide screening", "Origin documentation"],
  },
  {
    title: "Standardised Herbal Extracts",
    desc: "Botanical extracts for OEM supplement manufacturing — confirmed active constituent profiles with full batch documentation.",
    tags: ["Standardisation specs", "HACCP compliance", "CoA chain"],
  },
];

function CategoryCard({ cat, delay }: { cat: typeof spiceCategories[0]; delay: number }) {
  return (
    <div
      className="bg-paper2 border border-paper3 p-5 fade-up"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="font-serif text-[1.1rem] mb-1.5">{cat.title}</h4>
      <p className="text-[13px] text-ink2 leading-[1.7] mb-3">{cat.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {cat.tags.map((tag) => (
          <span key={tag} className="text-[10.5px] px-2 py-[3px] bg-paper3 text-ink2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-16 md:py-20" aria-labelledby="categories-heading">
      <div className="container">
        <span className="tag fade-up">Ingredient Categories</span>
        <h2
          id="categories-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-3 fade-up"
        >
          Focused expertise, not broad coverage
        </h2>
        <p className="text-ink2 text-[15px] max-w-[600px] mb-12 fade-up">
          We deliberately stay narrow. Two core categories, deep expertise — because genuine
          knowledge in a specific domain is worth more than superficial coverage of everything.
        </p>

        {/* Primary: Spices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="fade-up">
            <span className="tag">Primary Category</span>
            <h3 className="font-serif text-[1.7rem] mb-3">Indian Spices & Specialty Ingredients</h3>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-4">
              India supplies over 70% of the world's spices. The global market has shifted toward
              functional spices, culinary authenticity, and clean-label ingredients — all requiring
              verified documentation that most Indian exporters struggle to provide.
            </p>
            <div className="overflow-hidden mb-4">
              <img
                src={SPICE_IMG}
                alt="Indian spice warehouse with organized sacks of turmeric, chili, and cumin"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">Japanese food manufacturers</span>
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">Korean functional food brands</span>
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">SEA ingredient importers</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {spiceCategories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} delay={i * 60} />
            ))}
          </div>
        </div>

        <div className="h-px bg-paper3 mb-16" />

        {/* Secondary: Wellness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="fade-up">
            <span className="tag">Secondary Category</span>
            <h3 className="font-serif text-[1.7rem] mb-3">Ayurvedic & Herbal Wellness Ingredients</h3>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-4">
              Japan and Korea are the world's most sophisticated wellness markets — both actively
              sourcing Indian Ayurvedic ingredients for supplement manufacturing, nutraceutical
              formulation, and K-beauty applications. Most Indian exporters cannot navigate these
              regulatory frameworks. We translate Indian supply into documentation Asian markets accept.
            </p>
            <div className="overflow-hidden mb-4">
              <img
                src={BOTANICAL_IMG}
                alt="Ayurvedic botanical wellness ingredients — ashwagandha, brahmi, moringa, tulsi"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">Japanese supplement manufacturers</span>
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">K-beauty ingredient buyers</span>
              <span className="px-3 py-1.5 border border-paper3 text-[12.5px] text-ink2 bg-paper">SEA wellness distributors</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {wellnessCategories.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} delay={i * 60} />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-teal2 text-paper py-12 md:py-16 text-center fade-up">
          <div className="max-w-[560px] mx-auto px-6">
            <h3 className="font-serif text-[clamp(1.3rem,3vw,2rem)] mb-3 text-paper">
              Don't see your specific ingredient?
            </h3>
            <p className="text-[13.5px] text-paper/70 mb-6">
              If it originates in India and you're sourcing it for Asian manufacturing, Mizuron Global
              can likely help.
            </p>
            <a
              href="#contact"
              className="inline-block bg-paper text-teal2 px-6 py-3 text-[13px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-paper2"
            >
              Ask About Your Ingredient
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
