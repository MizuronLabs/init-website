/*
 * Design: Archival Intelligence
 * Asymmetric layout — founder story left, structural advantages right
 */

const advantages = [
  {
    title: "Gujarat-based, India-present",
    desc: "We operate from Ahmedabad — India's largest spice trading hub. On-ground presence means we verify facilities in person, not from a desk in Singapore.",
  },
  {
    title: "100% buyer-side only",
    desc: "We are never paid by Indian suppliers. Our revenue comes exclusively from international buyers. This structural independence is our core differentiator.",
  },
  {
    title: "Documentation-first methodology",
    desc: "Every engagement produces professional documentation — not verbal assurances. Your compliance team, customs broker, and procurement officer each get what they need.",
  },
  {
    title: "Market-specific regulatory knowledge",
    desc: "We understand what Japan's MHLW, Korea's MFDS, Singapore's HSA/SFA, and ASEAN regulatory frameworks actually require — and we prepare documentation accordingly.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper2 py-16 md:py-20" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Story */}
          <div className="fade-up">
            <span className="tag">About Mizuron Global</span>
            <h2
              id="about-heading"
              className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4"
            >
              Built to solve a specific problem in a specific corridor
            </h2>
            <div className="space-y-4 text-[14px] text-ink2 leading-[1.8]">
              <p>
                Mizuron Global exists because international buyers sourcing Indian ingredients
                face a structural information gap. Indian suppliers are often excellent — but
                their documentation, certification management, and regulatory alignment with
                Asian markets is inconsistent.
              </p>
              <p>
                Most sourcing agents in India are paid by suppliers — creating a fundamental
                conflict of interest. Mizuron Global is structured differently: we work
                exclusively for the buyer, are paid exclusively by the buyer, and our
                recommendations are based on documented evidence — not commercial relationships
                with Indian exporters.
              </p>
              <p>
                We focus on two ingredient categories (spices and Ayurvedic wellness) and four
                target markets (Japan, Korea, Singapore, Southeast Asia) because genuine expertise
                requires depth, not breadth. We'd rather be the best at a narrow scope than
                mediocre across everything.
              </p>
            </div>

            {/* Founder note */}
            <div className="mt-8 pl-5 border-l-2 border-gold">
              <p className="text-[14px] text-ink2 italic leading-[1.8] mb-3">
                "We built Mizuron Global because we saw too many good international buyers get
                burned by preventable problems — documentation errors, quality drift, certification
                gaps. The Indian supply base is world-class. The verification infrastructure wasn't.
                That's the gap we fill."
              </p>
              <div className="text-[12.5px] text-ink3">
                <strong className="text-ink font-medium">Founding Team</strong> — Mizuron Global, Ahmedabad
              </div>
            </div>
          </div>

          {/* Right: Structural advantages */}
          <div>
            <div className="mb-6 fade-up">
              <span className="tag">Why Mizuron Global</span>
              <h3 className="font-serif text-[1.4rem]">Structural advantages, not marketing claims</h3>
            </div>
            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className="bg-paper border border-paper3 p-5 fade-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h4 className="font-serif text-[1.05rem] mb-1.5">{adv.title}</h4>
                  <p className="text-[13px] text-ink2 leading-[1.7]">{adv.desc}</p>
                </div>
              ))}
            </div>

            {/* Markets served */}
            <div className="mt-6 bg-ink p-6 fade-up" style={{ transitionDelay: "320ms" }}>
              <div className="text-[10.5px] tracking-[0.12em] uppercase text-gold2/85 font-medium mb-3">
                Markets We Serve
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { market: "Japan", body: "MHLW, JETRO standards" },
                  { market: "South Korea", body: "MFDS, KFDA compliance" },
                  { market: "Singapore", body: "HSA, SFA documentation" },
                  { market: "Southeast Asia", body: "ASEAN regulatory frameworks" },
                ].map((m) => (
                  <div key={m.market} className="border border-white/10 p-3">
                    <div className="font-serif text-[1rem] text-paper mb-0.5">{m.market}</div>
                    <div className="text-[11px] text-paper/45">{m.body}</div>
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
