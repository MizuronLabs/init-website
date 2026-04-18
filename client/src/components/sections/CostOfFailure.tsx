const risks = [
  {
    cost: "USD 5,000 – 20,000",
    label: "Customs hold — documentation error at the port of entry",
    bar: "40%",
  },
  {
    cost: "USD 20,000 – 50,000",
    label: "Rejected shipment — quality or specification failure on arrival",
    bar: "100%",
  },
  {
    cost: "USD 100,000+",
    label: "Product recall — adulteration or mislabeling at distribution",
    bar: "100%",
  },
  {
    cost: "6+ months",
    label: "Time lost on failed supplier trials and re-sourcing",
    bar: null,
  },
];

export default function CostOfFailure() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: The argument */}
          <div className="fade-up">
            <span className="tag !text-gold2/80">The Economics of Verification</span>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-paper leading-[1.1] mb-4">
              The comparison isn't us vs. free.
              <br />
              <em className="italic text-gold2">It's us vs. what goes wrong.</em>
            </h2>
            <p className="text-[14px] text-paper/50 leading-[1.85] mb-10 max-w-[460px]">
              International buyers don't compare our fee to nothing. They compare it to a customs
              hold at Narita, a rejected container in Busan, or six months rebuilding a supply
              chain from scratch. The math is straightforward once you see it clearly.
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
                  {r.bar && (
                    <div className="w-full h-[2px] bg-white/[0.07] overflow-hidden">
                      <div
                        className="h-full bg-white/20"
                        style={{ width: r.bar }}
                      />
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
                One Verification Report. Less than 10% of one failed shipment.
              </h3>
              <p className="text-[12.5px] text-paper/40 mb-8 leading-[1.7]">
                A side-by-side reality check.
              </p>

              {/* Bar comparison */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-paper/45 font-medium">
                      One customs rejection
                    </span>
                    <span className="font-serif text-paper text-[1.05rem]">USD 20,000</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-white/25 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-paper/45 font-medium">
                      One quality failure
                    </span>
                    <span className="font-serif text-paper text-[1.05rem]">USD 50,000</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-white/25 w-full" />
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.09]">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[11px] tracking-[0.09em] uppercase text-gold2 font-medium">
                      Mizuron Verification Report
                    </span>
                    <span className="font-serif text-gold2 text-[1.05rem]">USD 1,200 – 2,500</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                    <div className="h-full bg-gold w-[8%]" />
                  </div>
                </div>
              </div>

              {/* The kicker line */}
              <p className="text-[12.5px] text-paper/45 mt-7 leading-[1.75] italic font-serif text-[1rem]">
                "One avoided rejection pays for ten reports. Our clients don't see
                verification as a cost — they see it as the cheapest insurance in
                their supply chain."
              </p>

              <a
                href="#contact"
                className="inline-block mt-6 bg-gold text-paper px-6 py-3 text-[12px] tracking-[0.07em] uppercase font-medium no-underline transition-colors duration-200 hover:bg-teal"
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
