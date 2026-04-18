import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupplierReadiness() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />

      {/* Page Header */}
      <header className="pt-18 pb-12 border-b border-paper3">
        <div className="container">
          <span className="tag">For Indian Suppliers — Mizuron Global</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] mb-3">
            Helping capable Indian suppliers meet{" "}
            <em className="italic text-gold">international standards</em>
          </h1>
          <p className="text-ink2 text-[1rem] max-w-[600px] leading-[1.8]">
            Mizuron works with Indian manufacturers and exporters who have genuine capability but need stronger
            quality alignment, documentation discipline, and buyer-facing presentation to compete seriously in
            global markets.
          </p>
        </div>
      </header>

      {/* Integrity Bar */}
      <div className="bg-teal2 py-5">
        <div className="container">
          <div className="flex items-start gap-6 flex-wrap">
            <span className="font-serif text-[1.3rem] text-gold/85 leading-snug shrink-0">◆</span>
            <p className="text-[12.5px] text-paper/80 leading-[1.7] max-w-[860px]">
              <strong className="text-paper/95 font-medium">How this fits with our buyer-side work:</strong>{" "}
              Suppliers who complete our readiness programs are assessed against the same standards Mizuron uses
              when verifying suppliers for international buyers. They receive no preferential treatment in
              buyer-side research — they go through independent verification like every other candidate.
              Completing a program does not entitle a supplier to buyer introductions or commercial advantage in
              our buyer-side work.{" "}
              <strong className="text-paper/95 font-medium">Our buyer loyalty is never compromised.</strong>{" "}
              Both our buyer and supplier engagement agreements contain clauses confirming this separation explicitly.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1">

        {/* Who This Is For */}
        <section className="py-20">
          <div className="container">
            <span className="tag">Who This Is For</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">The capability gap Mizuron is built to close</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-10">
              <div>
                <p className="text-[0.95rem] text-ink2 leading-[1.9] mb-4">
                  Many Indian manufacturers produce world-class spices, herbs, and botanical ingredients. The
                  product is excellent. The production capability is real. But when a serious international buyer
                  evaluates them — a procurement officer in Japan, a quality manager in Korea — the engagement
                  breaks down on documentation, presentation, and commercial professionalism.
                </p>
                <p className="text-[0.95rem] text-ink2 leading-[1.9] mb-4">
                  It is not a product problem. It is a translation problem. The supplier cannot yet speak the
                  language that international buyers require before they trust a new source — in documentation
                  discipline, buyer-facing clarity, and the commercial readiness that global markets demand.
                </p>
                <p className="text-[0.95rem] text-ink2 leading-[1.9]">
                  Mizuron bridges this gap. We help suppliers who already have strong capability present
                  themselves with the rigour and professionalism that serious global buyers expect — and require.
                </p>
                <div className="bg-paper2 border border-paper3 border-l-2 border-l-ink3 px-6 py-5 mt-7">
                  <div className="text-[10px] tracking-[0.13em] uppercase text-ink3 font-medium mb-2">
                    Who this is not for
                  </div>
                  <p className="text-[12.5px] text-ink3 leading-[1.75] italic">
                    We do not work with suppliers looking for shortcuts, superficial catalog improvement, or access
                    to buyers in exchange for fees. We work with manufacturers who are serious about sustained
                    international business and prepared to meet the standard — not merely appear to meet it.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-paper2 border border-paper3 p-8">
                  <span className="tag">What international buyers evaluate first</span>
                  <div className="mt-2">
                    {[
                      { label: "Documentation completeness & accuracy", badge: "Critical", cls: "bg-paper3 text-ink3" },
                      { label: "Third-party lab test validity", badge: "Critical", cls: "bg-paper3 text-ink3" },
                      { label: "Certification currency & authenticity", badge: "Critical", cls: "bg-paper3 text-ink3" },
                      { label: "Supply chain traceability", badge: "High", cls: "bg-[#e8f4ee] text-teal" },
                      { label: "Commercial communication quality", badge: "High", cls: "bg-[#e8f4ee] text-teal" },
                      { label: "Export regulatory knowledge", badge: "High", cls: "bg-[#e8f4ee] text-teal" },
                      { label: "Buyer-facing product presentation", badge: "Medium", cls: "bg-paper2 text-ink3 border border-paper3" },
                    ].map((row, i, arr) => (
                      <div
                        key={row.label}
                        className={`flex justify-between items-center py-[0.85rem] ${i < arr.length - 1 ? "border-b border-paper3" : ""}`}
                      >
                        <span className="text-[13px] text-ink2">{row.label}</span>
                        <span className={`text-[10.5px] px-[9px] py-[3px] font-medium tracking-[0.06em] uppercase shrink-0 ml-4 ${row.cls}`}>
                          {row.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11.5px] text-ink3 mt-5 italic font-serif leading-[1.6]">
                    Most Indian exporters fail on the top three before a buyer has reviewed their product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <div className="bg-paper2 py-20">
          <div className="container">
            <span className="tag">The Four Pillars</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">
              What Mizuron focuses on with every supplier engagement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {[
                {
                  num: "I",
                  title: "Documentation Discipline",
                  body: "Ensuring every certificate, specification sheet, and export document is current, authentic, and meets the standards of your target market's customs authority — not just available on request.",
                  points: [
                    "FSSAI, APEDA, Spices Board validity confirmed with issuing bodies",
                    "Third-party CoA review and verification process",
                    "Phytosanitary, certificate of origin, and customs document preparation",
                    "Certification renewal tracking and advance alert systems",
                  ],
                },
                {
                  num: "II",
                  title: "Quality Presentation",
                  body: "Translating technical capability into the visual and written format that international procurement officers actually evaluate — not what looks impressive in an Indian trade directory.",
                  points: [
                    "Buyer-facing capability narrative and company profile",
                    "Product specification sheet restructuring for international formats",
                    "Sample pack documentation and labeling standards",
                    "Website and inquiry response material review",
                  ],
                },
                {
                  num: "III",
                  title: "Commercial Readiness",
                  body: "Sharpening the speed, precision, and professionalism of how you respond to international enquiries, handle sample requests, and structure commercial terms.",
                  points: [
                    "International inquiry response structure and standards",
                    "Sample request fulfilment process and documentation",
                    "Pricing and commercial terms alignment with global norms",
                    "Buyer communication coaching — tone, speed, and precision",
                  ],
                },
                {
                  num: "IV",
                  title: "Strategic Positioning",
                  body: "Identifying which global markets and which buyer tiers are the best fit for your current capacity, product range, and certification profile — so you are not wasting effort on the wrong doors.",
                  points: [
                    "Market-product fit analysis — Japan, Korea, SEA regulatory compatibility",
                    "Buyer tier identification matching your scale and capacity",
                    "Certification gap analysis against target market requirements",
                    "Export positioning for specific ingredient categories",
                  ],
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="p-7 bg-paper border border-paper3 transition-colors duration-200 hover:border-gold"
                >
                  <div className="font-serif text-[3rem] text-paper3 font-semibold leading-none mb-3">{p.num}</div>
                  <h4 className="font-serif text-[1.1rem] mb-2">{p.title}</h4>
                  <p className="text-[13px] text-ink2 leading-[1.75]">{p.body}</p>
                  <ul className="mt-4 pt-4 border-t border-paper3 space-y-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="relative text-[12px] text-ink2 pl-4 leading-[1.65] list-none">
                        <span className="absolute left-0 text-gold">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Mizuron Standard */}
        <div className="bg-ink py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-16 items-center">
              <div>
                <span className="tag" style={{ color: "rgba(196,150,14,0.85)" }}>The Mizuron Standard</span>
                <h2 className="text-paper text-[1.8rem]">
                  You are not buying consulting. You are meeting a standard.
                </h2>
                <p className="text-[13px] text-paper/60 leading-[1.85] mt-4">
                  The assessments Mizuron conducts for supplier readiness are built on the same criteria our
                  international buyer clients use to evaluate Indian suppliers. When you complete a Mizuron
                  readiness engagement, you have been measured against what serious global buyers actually
                  require — not a generic export checklist.
                </p>
                <p className="text-[13px] text-paper/60 leading-[1.85] mt-3">
                  That standard is demanding. Not every supplier who approaches us will meet it. That is the point.
                </p>
              </div>
              <div className="bg-white/4 border border-white/10 border-l-2 border-l-gold p-7 font-serif italic text-[1.05rem] text-paper/82 leading-[1.65]">
                "Mizuron does not represent any supplier to an international buyer. A supplier who completes our
                readiness program may appear in buyer-side research as a candidate — and will go through the same
                independent verification process as every other supplier. No preferential access. No exceptions.
                The standard protects everyone — including you."
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Programs */}
        <section className="py-20">
          <div className="container">
            <span className="tag">Engagement Programs</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">
              Four structured programs. Defined scope. Defined outcomes.
            </h2>
            <p className="text-[13.5px] text-ink2 mt-3 max-w-[640px] leading-[1.8]">
              We do not offer open-ended consulting or hourly advisory. Every engagement has a clear scope, a
              defined deliverable, and a specific outcome. The Readiness Audit is the mandatory starting point
              for Tier 2 and above.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {/* Tier 01 */}
              <div className="bg-paper border border-paper3 p-8 relative transition-all duration-300 hover:border-gold hover:-translate-y-1">
                <div className="font-serif text-[2.4rem] text-paper3 font-semibold leading-none mb-3">01</div>
                <h3 className="font-serif text-[1.15rem] mb-1">Export Readiness Audit</h3>
                <div className="font-serif text-[1.35rem] text-gold mt-4 mb-1">₹55,000</div>
                <div className="text-[11px] text-ink3 mb-1">approx. USD 590</div>
                <div className="text-[10.5px] tracking-[0.08em] uppercase text-ink3 font-medium mb-4">
                  Entry point · 10–14 day delivery
                </div>
                <p className="text-[12.5px] text-ink2 leading-[1.75] mb-5">
                  A diagnostic assessment of your current export profile against Mizuron's buyer-facing standards.
                  You receive a structured gap report with prioritised findings — an honest picture of exactly where
                  you fall short and what closing each gap requires. Not encouragement. Evidence.
                </p>
                <ul className="pt-5 border-t border-paper3 space-y-1">
                  {[
                    "Documentation completeness audit",
                    "Certification validity and authenticity review",
                    "Buyer-facing materials assessment",
                    "Commercial communication review",
                    "Prioritised gap report with action roadmap",
                  ].map((item) => (
                    <li key={item} className="relative text-[12px] text-ink2 pl-4 leading-[1.65] list-none">
                      <span className="absolute left-0 text-gold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier 02 — Featured */}
              <div className="bg-paper2 border border-gold p-8 relative transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-[10px] left-6 bg-gold text-paper text-[10px] tracking-[0.1em] px-[10px] py-[3px] font-medium">
                  Most Requested
                </div>
                <div className="font-serif text-[2.4rem] text-paper3 font-semibold leading-none mb-3">02</div>
                <h3 className="font-serif text-[1.15rem] mb-1">Market-Ready Alignment</h3>
                <div className="font-serif text-[1.35rem] text-gold mt-4 mb-1">₹1,40,000</div>
                <div className="text-[11px] text-ink3 mb-1">approx. USD 1,505</div>
                <div className="text-[10.5px] tracking-[0.08em] uppercase text-ink3 font-medium mb-4">
                  Transformation · 4–5 week engagement
                </div>
                <p className="text-[12.5px] text-ink2 leading-[1.75] mb-5">
                  Based on audit findings, we close your highest-priority gaps: restructuring documentation
                  packages, rebuilding buyer-facing materials, and aligning commercial communication to
                  international standards. Deliverable: a complete, market-ready international profile and
                  documentation pack.
                </p>
                <ul className="pt-5 border-t border-paper3 space-y-1">
                  {[
                    "Complete documentation pack rebuild",
                    "Buyer-facing capability narrative and profile",
                    "Product specification sheets in international format",
                    "Commercial communication framework",
                    "Sample request and inquiry response system",
                    "Market positioning for 1–2 target export regions",
                  ].map((item) => (
                    <li key={item} className="relative text-[12px] text-ink2 pl-4 leading-[1.65] list-none">
                      <span className="absolute left-0 text-gold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier 03 */}
              <div className="bg-paper border border-paper3 p-8 relative transition-all duration-300 hover:border-gold hover:-translate-y-1">
                <div className="font-serif text-[2.4rem] text-paper3 font-semibold leading-none mb-3">03</div>
                <h3 className="font-serif text-[1.15rem] mb-1">International Standards Alignment</h3>
                <div className="font-serif text-[1.35rem] text-gold mt-4 mb-1">₹3,20,000</div>
                <div className="text-[11px] text-ink3 mb-1">approx. USD 3,440</div>
                <div className="text-[10.5px] tracking-[0.08em] uppercase text-ink3 font-medium mb-4">
                  Leadership-level · 7–8 week engagement
                </div>
                <p className="text-[12.5px] text-ink2 leading-[1.75] mb-5">
                  For manufacturers prepared for leadership-level change. We go deeper into operational
                  documentation, quality SOPs, and management systems — producing a 90-day implementation
                  blueprint for becoming a supplier that international buyers seek out, rather than reluctantly
                  accept.
                </p>
                <ul className="pt-5 border-t border-paper3 space-y-1">
                  {[
                    "Operational documentation and SOP review",
                    "Quality consistency systems across batches",
                    "Certification renewal and management process",
                    "Management workshop on international buyer expectations",
                    "Pricing and commercial terms structure review",
                    "90-day implementation roadmap",
                  ].map((item) => (
                    <li key={item} className="relative text-[12px] text-ink2 pl-4 leading-[1.65] list-none">
                      <span className="absolute left-0 text-gold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Advisory Retainer Strip */}
            <div className="bg-paper2 border border-paper3 border-l-[3px] border-l-gold px-8 py-7 mt-5 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 items-center">
              <div>
                <div className="text-[10.5px] tracking-[0.12em] uppercase text-gold font-medium mb-1">
                  Ongoing Program · Tier 4
                </div>
                <h3 className="font-serif text-[1.25rem] mb-1">Export Advisory Retainer</h3>
                <div className="font-serif text-[1.35rem] text-ink mb-1">From ₹1,80,000 / month</div>
                <div className="text-[11px] text-ink3 mb-2">approx. from USD 1,935/month · 3-month minimum</div>
                <p className="text-[11.5px] text-ink3">Available to suppliers who have completed at least Tier 2</p>
              </div>
              <p className="text-[13px] text-ink2 leading-[1.8]">
                Strategic partnership for suppliers actively pursuing or scaling international business. We review
                buyer communications before they are sent, prepare you for buyer visits or trade exhibitions,
                monitor regulatory changes in your target markets, and provide ongoing market intelligence on
                pricing and demand. This is a working partnership — not ad hoc advice on request.
              </p>
            </div>

            {/* Pricing Note */}
            <div className="mt-6 p-5 bg-paper2 border border-paper3 flex items-start gap-4">
              <span className="font-serif text-[1rem] text-gold mt-1 shrink-0">◆</span>
              <p className="text-[12.5px] text-ink2 leading-[1.75]">
                USD conversions use April 2026 exchange rates and are indicative only. All engagements are
                invoiced in INR for Indian suppliers. A formal scope agreement is signed before work begins. The
                Readiness Audit is the mandatory entry point for Tier 2 and above — it ensures every deeper
                engagement addresses the right gaps, not assumed ones. We do not offer hourly consulting, one-off
                document reviews, or any service outside these structured programs.
              </p>
            </div>
          </div>
        </section>

        {/* Conflict of Interest Policy */}
        <div className="bg-paper2 py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <span className="tag">Conflict of Interest Policy</span>
                <h2 className="text-[1.7rem] mb-4">
                  How we keep buyer-side and supplier-side work completely separate
                </h2>
                <p className="text-[13.5px] text-ink2 leading-[1.85] mb-6">
                  If you are an international buyer reading this page: the existence of our supplier readiness
                  programs does not compromise the independence of our buyer-side work. Here is exactly how we
                  enforce that.
                </p>
                <div>
                  {[
                    {
                      title: "Active engagement flag",
                      body: "Any supplier currently in a Mizuron readiness program is ineligible for buyer-side recommendation during the engagement and for six months after completion.",
                    },
                    {
                      title: "Independent verification, always",
                      body: "Suppliers who have completed our programs and appear in buyer research go through the same independent verification as every other candidate. No shortcuts. No prior familiarity assumed.",
                    },
                    {
                      title: "Disclosed in buyer agreements",
                      body: "Our buyer engagement agreement explicitly states that Mizuron operates supplier readiness programs and confirms the separation rules above in writing.",
                    },
                    {
                      title: "No preferential access or referrals",
                      body: "Completing a Mizuron program does not entitle a supplier to buyer introductions, preferential placement, or any commercial advantage in our buyer-side work. Ever.",
                    },
                  ].map((rule) => (
                    <div key={rule.title} className="flex gap-4 py-[0.9rem] border-b border-paper3 last:border-b-0">
                      <span className="text-teal font-serif text-[1rem] mt-[2px] shrink-0">✓</span>
                      <div>
                        <strong className="font-medium text-ink text-[13px] block mb-1">{rule.title}</strong>
                        <p className="text-[12.5px] text-ink2 leading-[1.7]">{rule.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-ink p-10">
                <blockquote className="font-serif italic text-[1.2rem] text-paper/85 leading-[1.6] mb-6">
                  "The goal of our supplier work is not to help suppliers sell more. It is to raise the standard
                  of what Indian ingredient exporters look like to the world. When that standard rises, every
                  international buyer benefits — including the ones Mizuron works with directly."
                </blockquote>
                <div className="text-[10.5px] tracking-[0.1em] uppercase text-paper/35 font-medium">
                  Mizuron Global — Founding Principle
                </div>
                <div className="mt-8 pt-6 border-t border-white/8">
                  <p className="text-[12.5px] text-paper/50 leading-[1.75] italic font-serif">
                    Both our buyer engagement agreement and our supplier program agreement contain explicit clauses
                    confirming these separation rules. We are happy to share this language with any buyer client
                    who requests it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-teal2 py-18 text-center">
          <div className="container max-w-[760px]">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-paper mb-3">
              Are you a capable Indian supplier ready to meet international standards?
            </h2>
            <p className="text-[13.5px] text-paper/70 mb-8">
              The starting point is always the Export Readiness Audit. Tell us your product category and current
              export stage — we will confirm whether Mizuron is the right fit.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/#contact"
                className="inline-block bg-paper text-teal2 font-medium px-7 py-3 text-[13px] tracking-[0.06em] no-underline transition-colors hover:bg-gold hover:text-paper"
              >
                Begin with a Readiness Audit
              </a>
              <a
                href="/#faq"
                className="inline-block bg-transparent text-paper/75 border border-paper/30 px-7 py-3 text-[13px] tracking-[0.06em] no-underline transition-colors hover:border-paper/60 hover:text-paper"
              >
                Read the FAQ first
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
