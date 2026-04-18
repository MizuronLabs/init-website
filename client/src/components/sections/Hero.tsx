/*
 * Design: Archival Intelligence
 * Asymmetric layout with hero-accent panel on right.
 * Gold accents, serif headings, restrained animation.
 */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/hero-bg-MxiawnEFY7YVzBSyXSVity.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32" aria-labelledby="hero-heading">
      {/* Right accent panel with image */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 fade-up">
            <div className="w-9 h-px bg-gold" />
            <span className="text-[10.5px] tracking-[0.14em] uppercase text-gold font-medium">
              India &middot; Singapore &middot; Japan &middot; Korea &middot; Southeast Asia
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.02em] text-ink mb-6 fade-up"
            style={{ transitionDelay: "80ms" }}
          >
            India's finest ingredients.{" "}
            <em className="text-gold italic">Verified.</em> Documented. Trusted.
          </h1>

          {/* Subheading */}
          <p
            className="text-[1.05rem] text-ink2 mb-8 max-w-[520px] leading-[1.8] fade-up"
            style={{ transitionDelay: "160ms" }}
          >
            Mizuron Global helps Asian food and wellness manufacturers source from India with
            absolute confidence — verified suppliers, market-specific documentation, and zero
            customs surprises.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-12 fade-up"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-7 py-3 text-[13px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
            >
              Book a Discovery Call
            </a>
            <a
              href="#proof"
              className="inline-block bg-transparent text-ink px-7 py-3 text-[13px] tracking-[0.06em] font-medium no-underline border-[1.5px] border-ink transition-all hover:bg-ink hover:text-paper"
            >
              See a Sample Report
            </a>
          </div>

          {/* Trust stats */}
          <div
            className="pt-6 border-t border-paper3 flex flex-wrap gap-8 md:gap-12 fade-up"
            style={{ transitionDelay: "320ms" }}
            aria-label="Key statistics"
          >
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-[1.9rem] font-semibold text-ink leading-none">4+</span>
              <span className="text-[10px] tracking-[0.09em] text-ink3 uppercase">Focus Markets</span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-[1.9rem] font-semibold text-ink leading-none">2</span>
              <span className="text-[10px] tracking-[0.09em] text-ink3 uppercase">Core Categories</span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-[1.9rem] font-semibold text-ink leading-none">100%</span>
              <span className="text-[10px] tracking-[0.09em] text-ink3 uppercase">Buyer-Side Only</span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-[1.9rem] font-semibold text-ink leading-none">3&ndash;4w</span>
              <span className="text-[10px] tracking-[0.09em] text-ink3 uppercase">Report Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
