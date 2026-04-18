const advantages = [
  {
    title: "Gujarat-based. India-present.",
    desc: "We operate from Ahmedabad — India's largest spice trading hub. On-ground presence means facilities are verified in person, not from a desk in Singapore or Seoul.",
  },
  {
    title: "100% buyer-side. Always.",
    desc: "We take no money from Indian suppliers. No commissions, no referral fees, no bilateral arrangements. Our revenue comes entirely from the international buyer — and that's structural, not aspirational.",
  },
  {
    title: "Documentation-first methodology.",
    desc: "Every engagement produces professional documentation your compliance team, customs broker, and procurement officer can act on. Not verbal assurances. Not PDFs with logos.",
  },
  {
    title: "Regulatory depth, not breadth.",
    desc: "We understand what Japan's MHLW, Korea's MFDS, Singapore's HSA/SFA, and ASEAN frameworks actually require at the port — and we build documentation accordingly.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper2 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: The story */}
          <div className="fade-up">
            <span className="tag">About Mizuron Global</span>
            <h2
              id="about-heading"
              className="font-serif text-[clamp(1.8rem,3.2vw,2.7rem)] mb-6 leading-[1.1]"
            >
              Built to solve a specific problem in a specific corridor.
            </h2>

            <div className="space-y-5 text-[14.5px] text-ink2 leading-[1.85]">
              <p>
                Every industry has a gap that everyone accepts because no one has fixed it yet.
                In Indian ingredient sourcing, that gap is independent verification.
              </p>
              <p>
                Not certificates — those exist. But the ground-level, buyer-funded confirmation
                of whether a supplier is who they say they are, whether their quality holds past
                the third shipment, and whether their documentation actually satisfies what Japan
                or Korea or Singapore requires at the border. That infrastructure didn't exist in
                the India-to-Asia corridor. We built it.
              </p>
              <p>
                We focus exclusively on spices and Ayurvedic wellness — two categories — and
                four target markets: Japan, Korea, Singapore, and Southeast Asia. That's not
                a limitation. It's a decision. Genuine expertise requires depth, not reach.
                We'd rather be the best in a narrow lane than mediocre everywhere.
              </p>
            </div>

            {/* Founder note — personal, specific, not corporate */}
            <blockquote className="mt-9 pl-5 border-l-2 border-gold">
              <p className="text-[14px] text-ink2 italic leading-[1.85] mb-3">
                "The Indian supply base is genuinely world-class. We've seen suppliers who
                would be exceptional long-term partners for serious international buyers.
                The problem was never quality potential — it was the verification
                infrastructure. We built what should have existed ten years ago."
              </p>
              <footer className="text-[12px] text-ink3 not-italic">
                <strong className="text-ink font-medium">Founding Team</strong>
                {" "}— Mizuron Global, Ahmedabad, Gujarat
              </footer>
            </blockquote>
          </div>

          {/* Right: Structural advantages + markets */}
          <div>
            <div className="mb-7 fade-up">
              <span className="tag">Why Mizuron Global</span>
              <h3 className="font-serif text-[1.45rem] leading-[1.2]">
                Structural advantages, not marketing claims.
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
                Markets We Serve
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { market: "Japan", body: "MHLW, JETRO standards" },
                  { market: "South Korea", body: "MFDS, KFDA compliance" },
                  { market: "Singapore", body: "HSA, SFA documentation" },
                  { market: "Southeast Asia", body: "ASEAN regulatory frameworks" },
                ].map((m) => (
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
