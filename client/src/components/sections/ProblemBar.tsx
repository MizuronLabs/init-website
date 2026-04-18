const problems = [
  {
    num: "01",
    title: "Your sourcing agent is paid by the supplier.",
    detail: "Which makes you the product, not the client.",
    text: "Most India sourcing agents earn commission from the exporter. This creates a structural conflict that shapes every recommendation they make — and that you have no visibility into. When the supplier and the agent have a commercial relationship, your interests come second.",
    cost: "Invisible until it costs you",
    costUnit: "conflict of interest",
  },
  {
    num: "02",
    title: "Documentation is built for export — not for your market.",
    detail: "FSSAI satisfies India. Your customs officer needs more.",
    text: "What Japan's MHLW, Korea's MFDS, or Singapore's HSA actually requires at the port is a different document set than what Indian exporters routinely produce. That gap — between 'certified for export' and 'compliant for import' — is where shipments get held.",
    cost: "USD 5,000 – 20,000",
    costUnit: "per customs hold",
  },
  {
    num: "03",
    title: "The sample was excellent. The third shipment wasn't.",
    detail: "Sustained quality requires sustained verification.",
    text: "Without ongoing batch-level oversight, quality drifts. Indian suppliers optimize for the sample when they know they're being evaluated. Curcumin levels, moisture content, residue thresholds — these shift over time unless someone is watching. Continuously.",
    cost: "USD 20,000 – 50,000",
    costUnit: "per rejected shipment",
  },
];

export default function ProblemBar() {
  return (
    <section
      className="bg-ink py-16 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12 max-w-[600px] fade-up">
          <span className="tag !text-gold2/80">Why India Sourcing Fails International Buyers</span>
          <h2
            id="problem-heading"
            className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] text-paper leading-[1.12]"
          >
            Three structural problems. We were built to close all of them.
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-ink p-7 md:p-9 flex flex-col gap-4 fade-up group hover:bg-white/[0.04] transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <span className="font-serif text-[2.8rem] font-semibold text-white/[0.08] leading-none select-none group-hover:text-white/[0.12] transition-colors duration-300">
                {p.num}
              </span>

              {/* Title */}
              <div>
                <h3 className="font-serif text-[1.12rem] text-paper leading-[1.25] mb-1">
                  {p.title}
                </h3>
                <p className="text-[11.5px] tracking-[0.04em] text-gold2/70 italic font-sans">
                  {p.detail}
                </p>
              </div>

              {/* Body */}
              <p className="text-[13px] text-paper/50 leading-[1.8] flex-1">
                {p.text}
              </p>

              {/* Cost indicator */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="font-serif text-[1.3rem] text-paper/80 leading-none">
                  {p.cost}
                </div>
                <div className="text-[10.5px] tracking-[0.08em] uppercase text-paper/35 mt-1">
                  {p.costUnit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 fade-up" style={{ transitionDelay: "380ms" }}>
          <p className="text-[13.5px] text-paper/45 max-w-[480px] leading-[1.7]">
            None of these problems are about Indian quality. They're about the verification
            infrastructure — and that's exactly what we've built.
          </p>
          <a
            href="#services"
            className="text-[11.5px] tracking-[0.09em] uppercase text-gold2 font-medium no-underline hover:text-gold2/70 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            See how we solve them
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
