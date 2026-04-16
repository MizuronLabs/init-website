/*
 * Design: Archival Intelligence
 * Numbered steps with large faded serif numerals, verification image on right
 */

const VERIFICATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454826694/Sz2WXn73m6MgVBcMywT6dB/verification-process-nDMJAAqRw6eFbQyfPCd3Js.webp";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    text: "We understand your ingredient, specification, regulatory market, and timeline in a 30-minute no-obligation call.",
  },
  {
    num: "02",
    title: "Supplier research & shortlisting",
    text: "We identify and screen candidates across India's key sourcing regions against your specification and volume requirements.",
  },
  {
    num: "03",
    title: "On-ground verification",
    text: "We verify facilities, certifications, third-party lab results, and documentation — aligned to your specific market's customs requirements.",
  },
  {
    num: "04",
    title: "Report & recommendation",
    text: "A professional, structured report with our ranked recommendation and complete supporting documentation.",
  },
  {
    num: "05",
    title: "Ongoing monitoring",
    text: "We continue managing documentation and supplier quality on every shipment — so nothing slips through.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper2 py-16 md:py-20" aria-labelledby="how-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Steps */}
          <div>
            <span className="tag fade-up">How It Works</span>
            <h2
              id="how-heading"
              className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-8 fade-up"
              style={{ transitionDelay: "80ms" }}
            >
              From enquiry to verified shipment
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
              <span className="tag !text-gold2/85">Your Next Step</span>
              <h3 className="font-serif text-[1.3rem] text-paper mb-3">
                Not sure which service fits?
              </h3>
              <p className="text-[13px] text-paper/55 leading-[1.7] mb-5">
                Book a 20-minute discovery call. We'll understand your situation and recommend
                the right engagement — no obligation, no generic pitch.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gold text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-teal"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
