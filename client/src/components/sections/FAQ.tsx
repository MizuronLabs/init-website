/*
 * Design: Archival Intelligence
 * Categorised accordion FAQ — four topic groups, gold accents
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqEntry = { q: string; a: string; link?: { href: string; text: string } };

const faqCategories: { label: string; items: FaqEntry[] }[] = [
  {
    label: "About Our Services",
    items: [
      {
        q: "What exactly does Mizuron Global verify in a Supplier Verification Report?",
        a: "We verify six areas: (1) Legal entity — GST registration, IEC code, company incorporation, physical facility confirmed against actual address; (2) Export history — verified shipment records through DGFT and customs data; (3) Certifications — FSSAI, APEDA, Spices Board, organic certificates validity confirmed directly with issuing bodies, not just copies collected; (4) Lab testing — we coordinate independent third-party testing on the actual batch, not just review supplier-provided CoA; (5) Supply chain traceability — source region, farm or collection centre documentation, processing facility standards; (6) Commercial reality — actual MOQ, current price benchmark, lead time against real shipping history. Every report concludes with a clear Proceed / Proceed with Conditions / Do Not Proceed recommendation with supporting evidence.",
      },
      {
        q: "How is Mizuron Global different from a standard India sourcing agent?",
        a: "The fundamental difference is who pays us. Traditional sourcing agents earn commission from Indian suppliers when a deal closes — which creates a financial incentive to recommend suppliers who pay them best, not suppliers who are best for you. Mizuron Global charges fees directly to buyers and accepts zero payments from suppliers. Our recommendations have no commercial conflict of interest. Additionally, most sourcing agents make introductions — they do not produce documented verification reports, manage documentation chains on ongoing shipments, or provide regulatory market intelligence. We do all three.",
      },
      {
        q: "Can you verify a supplier we have already found ourselves?",
        a: "Yes — this is one of our most common engagement types. Many buyers find potential suppliers through trade shows, IndiaMART, or referrals and want independent verification before committing to a first order. Simply provide us the supplier details and your ingredient specification and we conduct a full Verification Report. You do not need to use our sourcing service to access our verification service.",
      },
      {
        q: "Do you handle logistics, freight, or shipping?",
        a: "No — this is intentional. Mizuron Global is a verification, documentation, and intelligence service. We manage the documentation that travels with shipments and ensure everything is correct before goods move. The shipping relationship remains between you and your chosen freight forwarder. We are happy to recommend reliable India-to-Japan, India-to-Korea, and India-to-Southeast Asia freight partners if needed.",
      },
      {
        q: "What happens if the Verification Report recommends we do not proceed?",
        a: "A Do Not Proceed recommendation means we found material issues — falsified certifications, quality inconsistencies, documentation gaps that would not survive your target market's customs inspection, or commercial claims that do not match actual performance. You receive the full report with complete findings regardless. In most cases we identify 1–2 alternative suppliers in the same category and can initiate a follow-on verification if you wish to continue.",
      },
    ],
  },
  {
    label: "Pricing & Process",
    items: [
      {
        q: "How long does a Verification Report take to deliver?",
        a: "Standard delivery is 3–4 weeks from engagement confirmation and payment. This includes facility verification, independent third-party lab testing coordination (requiring physical sample collection and laboratory analysis time), certification validation with issuing bodies, and professional report preparation. An expedited 2-week service is available at a 30% surcharge — subject to scheduling and available on request.",
      },
      {
        q: "What are your payment terms?",
        a: "Verification Reports: 50% on engagement confirmation, 50% on delivery. Documentation Retainers: monthly in advance on the 1st of each month. Sourcing Projects: 40% on engagement, 30% on shortlist delivery, 30% on final report. We invoice in USD and accept international bank transfer (SWIFT) and major payment platforms. A formal engagement agreement is signed before any work begins.",
      },
      {
        q: "What is the pilot engagement offer?",
        a: "We are accepting three international clients at a preferred pilot rate — approximately 50% of standard Verification Report pricing. In exchange, we ask for permission to use the engagement as an anonymised case study and a written testimonial if you are satisfied. This is limited to our first three international engagements. Mention 'pilot' in your enquiry form to check current availability.",
      },
      {
        q: "Do you offer any satisfaction guarantee?",
        a: "For first-time clients, we offer a 50% refund if the Verification Report does not meet the documented standard outlined in our engagement agreement — specifically if any of the six verification areas are incomplete or our recommendation lacks specified supporting evidence. We address gaps through a review stage built into our delivery process before final submission.",
      },
    ],
  },
  {
    label: "Markets & Regulations",
    items: [
      {
        q: "Which countries does Mizuron Global currently serve?",
        a: "Our current focus markets are Singapore, Japan, South Korea, and Southeast Asia broadly (Thailand, Vietnam, Indonesia, Malaysia, Philippines). Japan and Korea represent our highest-complexity regulatory work — we are specifically knowledgeable about Japan's Food Sanitation Act positive list requirements for botanical ingredients and Korea's MFDS import protocols for herbal materials. Singapore is our recommended starting point for buyers new to India sourcing given its English-language business environment and role as a regional procurement hub.",
      },
      {
        q: "Can Mizuron Global help with Japan Food Sanitation Act compliance?",
        a: "Yes — Japan FSA compliance for Indian-origin spices and botanicals is one of our core specialisations. We understand which pesticide residues commonly fail Japan's positive list system for specific Indian spice categories, what documentation Japanese customs requires for each ingredient type, and how to work with Indian suppliers to meet FSA standards before shipment. Our Japan-pathway Verification Reports are priced at the higher tier specifically because of this additional regulatory complexity and testing requirements.",
      },
      {
        q: "What Indian certifications do you check and verify?",
        a: "For every engagement we verify the following as applicable to the ingredient and market: FSSAI license and product approvals, APEDA registration, Spices Board of India registration and quality certification, NPOP organic certification, NOP and EU Organic certification equivalency documentation, ISO 22000 and HACCP certifications, and GI tags where applicable. We confirm validity directly with issuing bodies — not by reviewing supplier-provided copies alone.",
      },
    ],
  },
  {
    label: "For Indian Exporters",
    items: [
      {
        q: "I am an Indian exporter. Can Mizuron Global help me access Asian markets?",
        a: "Yes — we offer structured supplier readiness programs for Indian spice and Ayurvedic ingredient exporters who want to become more credible and export-ready for Japanese, Korean, and Southeast Asian markets. These programs cover documentation audit, quality alignment, buyer-facing presentation, and strategic positioning. Engagements range from ₹55,000 for a Readiness Audit to ₹3,20,000 for a full International Standards Alignment. Note: we maintain strict separation between buyer-side and supplier-side work and will not represent the same supplier to a buyer we are simultaneously advising.",
        link: { href: "/for-suppliers", text: "Learn more about our Supplier Readiness Programs →" },
      },
      {
        q: "Will Mizuron Global recommend my company to your international buyers?",
        a: "Not through a preferential or commercial arrangement. Suppliers who complete our readiness programs are assessed against the same standards Mizuron uses when verifying on behalf of buyers. If an international buyer asks us to source a specific ingredient and you are a verified, credible supplier in that category, you may appear in our research longlist — but you go through the same independent verification process as every other candidate. Completing a readiness program does not entitle you to buyer introductions or preferential placement. This protects the integrity of our buyer-side work and the value of our recommendations.",
      },
    ],
  },
];

function FaqItem({
  item,
  isOpen,
  toggle,
}: {
  item: FaqEntry;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-paper3">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[1.05rem] text-ink pr-4 group-hover:text-gold transition-colors">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-ink3 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-[13.5px] text-ink2 leading-[1.8] pb-1 pr-8">{item.a}</p>
        {item.link && (
          <a
            href={item.link.href}
            className="inline-block text-[13px] text-gold no-underline hover:underline mb-4"
          >
            {item.link.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <section id="faq" className="py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="container">
        {/* Header */}
        <div className="max-w-[680px] mb-12 fade-up">
          <span className="tag">Frequently Asked Questions</span>
          <h2 id="faq-heading" className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4">
            Questions we hear from procurement teams
          </h2>
          <p className="text-[14px] text-ink2 leading-[1.8]">
            If your question isn't answered here, write to us — we respond to every enquiry within
            one business day.
          </p>
        </div>

        {/* Categorised accordion */}
        <div className="max-w-[860px] space-y-10">
          {faqCategories.map((cat, ci) => (
            <div key={cat.label} className="fade-up" style={{ transitionDelay: `${ci * 60}ms` }}>
              <span className="tag block mb-1">{cat.label}</span>
              <div>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  return (
                    <FaqItem
                      key={key}
                      item={item}
                      isOpen={openKey === key}
                      toggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have a question */}
        <div className="max-w-[860px] mt-12 bg-paper2 border border-paper3 p-8 text-center fade-up">
          <h3 className="font-serif text-[1.5rem] mb-2">Still have a question?</h3>
          <p className="text-[13px] text-ink2 mb-6">
            Every enquiry receives a personal response within one business day.
          </p>
          <a
            href="#contact"
            className="inline-block bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
          >
            Send a Question
          </a>
        </div>
      </div>
    </section>
  );
}
