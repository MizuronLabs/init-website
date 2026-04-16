/*
 * Design: Archival Intelligence
 * Clean accordion FAQ with gold accents
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is Mizuron Global different from a normal India sourcing agent?",
    a: "Most India sourcing agents are paid by Indian suppliers — creating a structural conflict of interest. Mizuron Global is paid exclusively by the international buyer. We never accept commissions, referral fees, or payments from Indian suppliers. Our Verification Reports include a clear Proceed / Proceed with Conditions / Do Not Proceed recommendation — something a supplier-paid agent will never give you honestly.",
  },
  {
    q: "What does a Verification Report actually include?",
    a: "A 15–25 page professional PDF covering six verification areas: legal entity & facility verification, export history (DGFT records), certifications audit (FSSAI, APEDA, organic), independent lab testing (pesticide MRL, heavy metals, microbial, active compounds), supply chain traceability, and commercial verification (MOQ, pricing, lead time). Every report concludes with a clear recommendation and risk assessment.",
  },
  {
    q: "Which markets do you serve?",
    a: "We focus on four target markets: Japan (MHLW/JETRO standards), South Korea (MFDS/KFDA compliance), Singapore (HSA/SFA documentation), and broader Southeast Asia (ASEAN regulatory frameworks). Our documentation is tailored to the specific customs and regulatory requirements of each market — not generic export paperwork.",
  },
  {
    q: "What ingredient categories do you cover?",
    a: "Two core categories: Indian Spices & Specialty Ingredients (functional spices, culinary spices, seed spices, oleoresins) and Ayurvedic & Herbal Wellness Ingredients (adaptogenic herbs, beauty botanicals, herbal teas, standardised extracts). We stay narrow deliberately — genuine expertise requires depth, not breadth.",
  },
  {
    q: "How much does a Verification Report cost?",
    a: "USD 1,200 – 2,500 per report depending on complexity, with a 3–4 week turnaround. For context, a single customs rejection costs USD 5,000–20,000, and a quality failure can cost USD 20,000–50,000. One avoided rejection pays for ten reports. We also offer preferred pilot pricing (~50% of standard rate) for our first international clients.",
  },
  {
    q: "Do you handle the actual purchasing and shipping?",
    a: "We are an advisory and verification firm — not a trading company. We verify suppliers, manage documentation, and monitor quality. The commercial relationship (purchase orders, payments, shipping) remains directly between you and the Indian supplier. This keeps our independence intact and our recommendations unbiased.",
  },
  {
    q: "Can you help with a supplier we've already found?",
    a: "Absolutely. Our Verification Report service is designed exactly for this — you've identified a potential Indian supplier (through a trade show, Alibaba, referral, etc.) and need independent verification before committing. We verify their claims, test their product, and give you a documented recommendation.",
  },
  {
    q: "What is the pilot engagement?",
    a: "For our first 3 international clients, we offer preferred pilot pricing (~50% of standard rate) in exchange for an anonymised case study and testimonial. This lets you access our full verification methodology at a reduced cost while helping us build our public track record. Mention 'pilot' in your enquiry to check availability.",
  },
];

function FaqItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-paper3">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[1.05rem] text-ink pr-4 group-hover:text-gold transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-ink3 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-[13.5px] text-ink2 leading-[1.8] pb-4 pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Heading */}
          <div className="lg:col-span-2 fade-up">
            <span className="tag">Frequently Asked Questions</span>
            <h2 id="faq-heading" className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4">
              Questions we hear from procurement teams
            </h2>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-6">
              If your question isn't answered here, book a discovery call — we're happy to discuss
              your specific situation without obligation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
            >
              Ask a Question
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
