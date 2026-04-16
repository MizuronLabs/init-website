/*
 * Design: Archival Intelligence
 * Service cards with numbered headers, gold accents, featured card highlight
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <article
              key={svc.num}
              className={`relative p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1 fade-up ${
                svc.featured
                  ? "border-gold bg-paper2"
                  : "border-paper3 bg-paper hover:border-gold"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {svc.featured && (
                <div className="absolute -top-2.5 left-5 bg-gold text-paper text-[10px] tracking-[0.1em] px-2.5 py-[3px] uppercase font-medium">
                  Most Popular
                </div>
              )}
              <div className="font-serif text-[2.6rem] text-paper3 font-semibold leading-none mb-4">
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
            className="shrink-0 bg-gold text-paper px-5 py-2.5 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-teal"
          >
            Check Pilot Availability
          </a>
        </div>
      </div>
    </section>
  );
}
