/*
 * Design: Archival Intelligence — Dark evidence panel
 * Makes the economic logic explicit: Mizuron's fee vs cost of failure
 */

const risks = [
  { cost: "USD 5,000 – 20,000", label: "Customs hold due to documentation errors" },
  { cost: "USD 20,000 – 50,000", label: "Rejected shipment — quality or specification failure" },
  { cost: "USD 100,000+", label: "Product recall — adulteration or mislabeling at destination" },
  { cost: "6+ months", label: "Time lost on failed supplier trials and re-sourcing" },
];

export default function CostOfFailure() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Risk data */}
          <div className="fade-up">
            <span className="tag !text-gold2/85">The Economics of Verification</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-paper mb-3">
              Your fee comparison isn't us vs. free.
              <br />
              It's us vs. the cost of getting it wrong.
            </h2>
            <p className="text-[13.5px] text-paper/55 leading-[1.8] mb-8 max-w-[480px]">
              International buyers don't compare our fee to a random sourcing cost. They compare
              it to the cost of a failed shipment, a customs hold, an adulteration risk, or six months
              wasted on unreliable supplier trials.
            </p>
            <div className="space-y-5">
              {risks.map((r, i) => (
                <div
                  key={i}
                  className="pl-4 border-l-2 border-gold fade-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-serif text-[1.5rem] text-paper leading-[1.1]">{r.cost}</div>
                  <div className="text-[11.5px] text-paper/45 mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The comparison */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <div className="bg-paper/[0.06] border border-white/10 p-7 md:p-9">
              <h3 className="font-serif text-[1.3rem] text-paper mb-6">
                A single Verification Report costs less than 10% of one failed shipment
              </h3>

              {/* Visual comparison */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-paper/50 font-medium">
                      One customs rejection
                    </span>
                    <span className="font-serif text-paper text-[1.1rem]">USD 20,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 overflow-hidden">
                    <div className="h-full bg-[oklch(0.58_0.17_22)]/65 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-paper/50 font-medium">
                      One quality failure
                    </span>
                    <span className="font-serif text-paper text-[1.1rem]">USD 50,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 overflow-hidden">
                    <div className="h-full bg-[oklch(0.58_0.17_22)]/65 w-full" />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-gold2 font-medium">
                      Mizuron Verification Report
                    </span>
                    <span className="font-serif text-gold2 text-[1.1rem]">USD 1,200 – 2,500</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 overflow-hidden">
                    <div className="h-full bg-gold2 w-[8%]" />
                  </div>
                </div>
              </div>

              <p className="text-[12.5px] text-paper/50 mt-6 leading-[1.7]">
                One avoided rejection pays for ten reports. Our clients don't see verification as a
                cost — they see it as the cheapest insurance in their supply chain.
              </p>

              <a
                href="#contact"
                className="inline-block mt-6 bg-gold text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-teal"
              >
                Request a Pilot Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
