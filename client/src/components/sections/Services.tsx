/*
 * Design: Archival Intelligence
 * Service cards with numbered headers, gold accents, featured card highlight
 * Extended service detail sections below the overview grid
 */

const services = [
  {
    num: "01",
    title: "Verification Report",
    desc: "Independent due diligence on a specific Indian ingredient supplier before you place your first order.",
    price: "USD 1,200 – 2,500",
    note: "Per report · 3–4 week delivery",
    items: [
      "Legal entity & facility verification",
      "Third-party lab test coordination",
      "Certifications validity audit",
      "Supply chain traceability check",
      "Risk assessment & clear recommendation",
    ],
    featured: false,
  },
  {
    num: "02",
    title: "Documentation Retainer",
    desc: "Ongoing monthly documentation and compliance management for your active Indian supplier relationships.",
    price: "USD 600 – 2,800/mo",
    note: "6-month minimum · 3 tiers available",
    items: [
      "Pre-shipment documentation checklist",
      "Certificate expiry monitoring",
      "Monthly regulatory briefing",
      "Supplier relationship management",
      "Market price & quality tracking",
    ],
    featured: true,
  },
  {
    num: "03",
    title: "Full Sourcing Project",
    desc: "End-to-end: find, verify, and facilitate your first order with a new Indian ingredient supplier.",
    price: "USD 3,500 – 12,000",
    note: "Project fee + 2–3% deal fee (capped)",
    items: [
      "Market intelligence & supplier longlist",
      "Verification of top 3 shortlisted suppliers",
      "Sample coordination & negotiation support",
      "First order end-to-end monitoring",
      "Complete documentation package",
    ],
    featured: false,
  },
];

const verificationAreas = [
  {
    label: "Company Verification",
    desc: "GST, IEC code, physical facility address confirmed, export history via customs data",
  },
  {
    label: "Third-Party Lab Testing",
    desc: "Pesticide residues, heavy metals, active compound verification, microbial panel",
  },
  {
    label: "Certification Audit",
    desc: "FSSAI, APEDA, Spices Board, organic certificates — validity confirmed with issuing bodies",
  },
  {
    label: "Supply Chain Traceability",
    desc: "Source region, farm or collection centre, processing facility, storage standards",
  },
  {
    label: "Commercial Reality Check",
    desc: "Actual MOQ, price benchmark vs. market, lead time vs. shipping history",
  },
  {
    label: "Risk Assessment",
    desc: "Red flags identified, alternative supplier comparison, clear Proceed / Conditions / Do Not Proceed",
  },
];

const retainerTiers = [
  {
    tier: "Tier 1",
    range: "USD 600–800 / month",
    desc: "1 ingredient · 1 supplier · up to 4 shipments per year",
  },
  {
    tier: "Tier 2",
    range: "USD 1,200–1,600 / month",
    desc: "2–3 ingredients · up to 8 shipments per year",
  },
  {
    tier: "Tier 3",
    range: "USD 2,000–2,800 / month",
    desc: "4–6 ingredients · full documentation management",
  },
];

const retainerDeliverables = [
  {
    title: "Pre-shipment documentation checklist",
    desc: "Every shipment reviewed before departure — CoA, phytosanitary, packing list, invoice, certificate of origin all verified correct and market-compliant.",
  },
  {
    title: "Certificate validity tracking",
    desc: "60-day advance alerts before any supplier certification expires — no more mid-shipment compliance failures.",
  },
  {
    title: "Monthly regulatory briefing",
    desc: "One-page update on regulatory changes in your target market affecting your specific ingredients — Japan FSA, Korea MFDS, Singapore HSA.",
  },
  {
    title: "Supplier relationship monitoring",
    desc: "Monthly check-in with your supplier, pricing benchmarking against current market, quality consistency tracking across batches.",
  },
];

const sourcingPhases = [
  {
    phase: "Phase 1",
    weeks: "Week 1–2",
    title: "Market Intelligence",
    desc: "India supply landscape, sourcing regions, pricing benchmarks, regulatory pathway for your target market.",
  },
  {
    phase: "Phase 2",
    weeks: "Week 2–3",
    title: "Supplier Longlist",
    desc: "8–12 candidates researched, screened by specification and volume, reduced to shortlist of 4–5.",
  },
  {
    phase: "Phase 3",
    weeks: "Week 3–5",
    title: "Verification",
    desc: "Full verification report on top 3 suppliers, sample coordination, reference checks with prior buyers.",
  },
  {
    phase: "Phase 4–5",
    weeks: "Week 5–6",
    title: "First Order",
    desc: "Negotiation support, documentation preparation, end-to-end first shipment monitoring.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20" aria-labelledby="services-heading">
      <div className="container">
        <span className="tag fade-up">Our Services</span>
        <h2
          id="services-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-3 fade-up"
          style={{ transitionDelay: "80ms" }}
        >
          Three ways Mizuron Global works with you
        </h2>
        <p
          className="text-ink2 text-[15px] max-w-[560px] mb-10 fade-up"
          style={{ transitionDelay: "120ms" }}
        >
          Each service is designed to reduce your risk at a specific stage of the India sourcing
          journey — from first evaluation to ongoing trade.
        </p>

        {/* Overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <article
              key={svc.num}
              className={`relative p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1 fade-up ${
                svc.featured
                  ? "border-gold bg-paper2 shadow-[0_4px_24px_rgba(151,120,46,0.12)]"
                  : "border-paper3 bg-paper hover:border-gold/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {svc.featured && (
                <div className="absolute -top-2.5 left-5 bg-gold text-paper text-[10px] tracking-[0.1em] px-2.5 py-[3px] uppercase font-medium">
                  Most Popular
                </div>
              )}
              <div className="font-serif text-[2.4rem] text-ink/10 font-semibold leading-none mb-4 select-none">
                {svc.num}
              </div>
              <h3 className="font-serif text-[1.15rem] mb-2">{svc.title}</h3>
              <p className="text-[13px] text-ink2 leading-[1.7]">{svc.desc}</p>
              <div className="font-serif text-[1.3rem] text-gold mt-4 mb-1">{svc.price}</div>
              <div className="text-[11px] text-ink3 mb-4">{svc.note}</div>
              <ul className="pt-4 border-t border-paper3 space-y-1">
                {svc.items.map((item) => (
                  <li
                    key={item}
                    className="text-[12px] text-ink2 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Pilot strip */}
        <div className="mt-8 bg-paper2 border border-paper3 border-l-[3px] border-l-gold px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 fade-up">
          <div className="flex-1">
            <h4 className="font-serif text-[1rem] mb-0.5">
              Pilot engagement — first 3 international clients
            </h4>
            <p className="text-[13px] text-ink2">
              Preferred pilot pricing (~50% of standard rate) in exchange for an anonymised case
              study and testimonial. Mention "pilot" in your enquiry.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-gold text-paper px-5 py-2.5 text-[11.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_4px_16px_rgba(15,74,54,0.25)]"
          >
            Check Pilot Availability
          </a>
        </div>

        {/* ─── Detailed Service Breakdowns ─── */}
        <div className="mt-20 space-y-16 fade-up" style={{ transitionDelay: "160ms" }}>

          {/* 01 Verification Report */}
          <div className="border-t border-paper3 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
              <div>
                <div className="font-serif text-[4rem] text-paper3 font-semibold leading-none mb-2" aria-hidden="true">01</div>
                <h3 className="font-serif text-[1.45rem] mb-1">Verification Report</h3>
                <div className="font-serif text-[1.4rem] text-gold mb-1">USD 1,200 – 2,500</div>
                <div className="text-[11.5px] text-ink3 mb-1">Per supplier · 3–4 week turnaround</div>
                <div className="text-[11.5px] text-ink3 mb-5">Higher rate for Japan/Korea pathways</div>
                <a
                  href="#contact"
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-[11.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-gold hover:shadow-[0_4px_16px_rgba(151,120,46,0.25)]"
                >
                  Request a Report
                </a>
              </div>
              <div>
                <p className="text-ink2 text-[14px] leading-[1.8] mb-6">
                  Independent due diligence on a specific Indian supplier before you commit to an
                  order. Our most requested service — used by buyers who found a supplier themselves
                  and need independent verification before the first shipment moves.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {verificationAreas.map((area) => (
                    <div key={area.label} className="p-4 bg-paper2 border border-paper3">
                      <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold font-medium mb-1.5">
                        {area.label}
                      </div>
                      <p className="text-[12.5px] text-ink2 leading-[1.65]">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 02 Documentation Retainer */}
          <div className="border-t border-paper3 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
              <div>
                <div className="font-serif text-[4rem] text-paper3 font-semibold leading-none mb-2" aria-hidden="true">02</div>
                <h3 className="font-serif text-[1.45rem] mb-1">Documentation Retainer</h3>
                <div className="font-serif text-[1.4rem] text-gold mb-1">USD 600 – 2,800/mo</div>
                <div className="text-[11.5px] text-ink3 mb-4">6-month minimum engagement</div>

                <div className="space-y-2 mb-5">
                  {retainerTiers.map((t) => (
                    <div key={t.tier} className="text-[12px] text-ink2 pl-3 border-l-2 border-gold leading-[1.85]">
                      <span className="block text-ink font-medium text-[12px]">{t.tier} — {t.range}</span>
                      {t.desc}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-[11.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-gold hover:shadow-[0_4px_16px_rgba(151,120,46,0.25)]"
                >
                  Discuss a Retainer
                </a>
              </div>
              <div>
                <p className="text-ink2 text-[14px] leading-[1.8] mb-6">
                  Monthly documentation and compliance management for buyers placing regular orders
                  from India. For manufacturers who need assurance that every shipment is
                  documentation-clean before it moves — without hiring dedicated India-side staff.
                </p>
                <div className="space-y-3">
                  {retainerDeliverables.map((d) => (
                    <div key={d.title} className="flex gap-3 p-4 bg-paper2">
                      <span className="text-gold text-[14px] mt-[2px] shrink-0">—</span>
                      <div>
                        <strong className="block text-[13px] font-medium mb-0.5">{d.title}</strong>
                        <p className="text-[12.5px] text-ink2 leading-[1.65]">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 03 Full Sourcing Project */}
          <div className="border-t border-paper3 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
              <div>
                <div className="font-serif text-[4rem] text-paper3 font-semibold leading-none mb-2" aria-hidden="true">03</div>
                <h3 className="font-serif text-[1.45rem] mb-1">Full Sourcing Project</h3>
                <div className="font-serif text-[1.4rem] text-gold mb-1">USD 3,500 – 12,000</div>
                <div className="text-[11.5px] text-ink3 mb-1">Project fee + 2–3% deal facilitation</div>
                <div className="text-[11.5px] text-ink3 mb-5">Deal fee capped at USD 3,000 · 6-week delivery</div>
                <a
                  href="#contact"
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-[11.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-gold hover:shadow-[0_4px_16px_rgba(151,120,46,0.25)]"
                >
                  Discuss a Project
                </a>
              </div>
              <div>
                <p className="text-ink2 text-[14px] leading-[1.8] mb-6">
                  For manufacturers entering India sourcing for the first time, replacing a failed
                  supplier, or scaling into new ingredient categories. Mizuron Global handles
                  everything from initial market intelligence through to your first confirmed,
                  documented shipment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sourcingPhases.map((p) => (
                    <div key={p.phase}>
                      <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold font-medium mb-1">
                        {p.phase} · {p.weeks}
                      </div>
                      <h5 className="font-serif text-[1rem] mb-1">{p.title}</h5>
                      <p className="text-[12.5px] text-ink2 leading-[1.65]">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
