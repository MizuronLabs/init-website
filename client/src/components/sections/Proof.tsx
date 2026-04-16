/*
 * Design: Archival Intelligence — Proof layer
 * Sample verification report preview, checklist, comparison table, pilot case study
 */

import { CheckCircle2, XCircle, FileText, Shield, FlaskConical, MapPin, Building2, Scale } from "lucide-react";

const verificationAreas = [
  { icon: Building2, title: "Legal Entity & Facility", desc: "GST registration, IEC code, company incorporation, physical facility confirmed against actual address" },
  { icon: FileText, title: "Export History", desc: "Verified shipment records through DGFT and customs data — not self-reported claims" },
  { icon: Shield, title: "Certifications Audit", desc: "FSSAI, APEDA, Spices Board, organic certificates validated directly with issuing bodies" },
  { icon: FlaskConical, title: "Independent Lab Testing", desc: "Third-party lab testing on actual batch — pesticide MRL, heavy metals, microbial, active compounds" },
  { icon: MapPin, title: "Supply Chain Traceability", desc: "Source region, farm or collection centre documentation, processing facility standards" },
  { icon: Scale, title: "Commercial Verification", desc: "Actual MOQ, current price benchmark, lead time verified against real shipping history" },
];

const comparison = [
  { aspect: "Paid by Indian suppliers?", us: "Never", them: "Usually" },
  { aspect: "Works exclusively for buyers?", us: "Always", them: "Rarely" },
  { aspect: "On-ground India presence?", us: "Yes — Gujarat based", them: "Often remote" },
  { aspect: "Independent lab testing?", us: "Every report", them: "Supplier-provided CoA" },
  { aspect: "Market-specific documentation?", us: "Japan, Korea, SEA tailored", them: "Generic" },
  { aspect: "Clear proceed/don't proceed recommendation?", us: "Every report", them: "Rarely" },
  { aspect: "Ongoing monitoring?", us: "Available", them: "Not offered" },
];

export default function Proof() {
  return (
    <section id="proof" className="py-16 md:py-20" aria-labelledby="proof-heading">
      <div className="container">
        <span className="tag fade-up">Proof, Not Just Claims</span>
        <h2
          id="proof-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-3 fade-up"
          style={{ transitionDelay: "80ms" }}
        >
          What a Mizuron Verification Report actually covers
        </h2>
        <p
          className="text-ink2 text-[15px] max-w-[600px] mb-12 fade-up"
          style={{ transitionDelay: "120ms" }}
        >
          Every report concludes with a clear <strong>Proceed</strong>, <strong>Proceed with Conditions</strong>,
          or <strong>Do Not Proceed</strong> recommendation — backed by documented evidence across six
          verification areas.
        </p>

        {/* Verification checklist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {verificationAreas.map((area, i) => (
            <div
              key={area.title}
              className="p-5 bg-paper2 border border-paper3 fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <area.icon size={20} className="text-gold mb-3" strokeWidth={1.5} />
              <h4 className="font-serif text-[1.05rem] mb-1.5">{area.title}</h4>
              <p className="text-[12.5px] text-ink2 leading-[1.7]">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Sample report preview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 fade-up">
            <span className="tag">Sample Report Structure</span>
            <h3 className="font-serif text-[1.5rem] mb-4">
              Professional, structured, filed with confidence
            </h3>
            <p className="text-[13px] text-ink2 leading-[1.8] mb-5">
              Our Verification Reports are 15–25 page professional PDF documents — structured
              so your compliance officer, procurement team, and customs broker can each find
              exactly what they need.
            </p>
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
            >
              Request a Sample Report
            </a>
          </div>
          <div className="lg:col-span-3 fade-up" style={{ transitionDelay: "120ms" }}>
            <div className="bg-paper2 border border-paper3 p-6 md:p-8">
              <div className="text-[10.5px] tracking-[0.12em] uppercase text-gold font-medium mb-4 pb-3 border-b border-paper3">
                Report Table of Contents — Preview
              </div>
              <div className="space-y-0">
                {[
                  "1. Executive Summary & Recommendation",
                  "2. Company Verification — Legal Entity, GST, IEC, Facility",
                  "3. Export History — DGFT Records, Shipment Verification",
                  "4. Certifications Audit — FSSAI, APEDA, Organic, ISO",
                  "5. Lab Testing Results — Pesticide MRL, Heavy Metals, Microbial",
                  "6. Active Compound Verification — Curcumin %, Piperine %, etc.",
                  "7. Supply Chain Traceability — Source Region, Processing",
                  "8. Commercial Profile — MOQ, Pricing, Lead Time",
                  "9. Risk Assessment & Red Flags",
                  "10. Appendices — Lab Certificates, Photos, Raw Data",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-2.5 border-b border-paper3 last:border-0 text-[13px] text-ink2 flex items-center gap-3"
                  >
                    <CheckCircle2 size={14} className="text-teal shrink-0" strokeWidth={1.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="fade-up">
          <span className="tag">Mizuron Global vs. the Alternatives</span>
          <h3 className="font-serif text-[1.5rem] mb-6">
            What we verify vs. what a normal sourcing agent does
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-paper3">
                  <th className="py-3 pr-4 text-[11px] tracking-[0.1em] uppercase text-ink3 font-medium w-[45%]">
                    Aspect
                  </th>
                  <th className="py-3 px-4 text-[11px] tracking-[0.1em] uppercase text-gold font-medium w-[27.5%]">
                    Mizuron Global
                  </th>
                  <th className="py-3 pl-4 text-[11px] tracking-[0.1em] uppercase text-ink3 font-medium w-[27.5%]">
                    Typical Sourcing Agent
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-paper3">
                    <td className="py-3 pr-4 text-[13px] text-ink2">{row.aspect}</td>
                    <td className="py-3 px-4 text-[13px] font-medium text-teal">{row.us}</td>
                    <td className="py-3 pl-4 text-[13px] text-ink3">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pilot case study */}
        <div className="mt-16 bg-paper2 border border-paper3 p-6 md:p-10 fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <span className="tag">Pilot Case Study</span>
              <h3 className="font-serif text-[1.4rem] mb-4">
                Singapore supplement manufacturer — turmeric extract verification
              </h3>
              <p className="text-[13.5px] text-ink2 leading-[1.8] mb-4">
                A mid-size nutraceutical company in Singapore needed to verify a new Indian
                turmeric extract supplier (95% curcumin specification) before committing to a
                recurring order of 2 MT/year. They had found the supplier through a trade show
                but had no independent way to confirm claims.
              </p>
              <p className="text-[13.5px] text-ink2 leading-[1.8]">
                Our Verification Report identified that while the supplier's facility and legal
                standing were confirmed, their curcumin percentage claims were overstated by
                12% based on independent lab testing. We recommended <strong>Proceed with
                Conditions</strong> — specifying batch-level CoA requirements and an adjusted
                pricing benchmark. The client avoided a potential quality dispute worth an
                estimated USD 15,000 on their first annual order.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-paper border border-paper3 p-5">
                <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold font-medium mb-3">
                  Engagement Details
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-ink3">Service</span>
                    <span className="text-ink font-medium">Verification Report</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-ink3">Ingredient</span>
                    <span className="text-ink font-medium">Turmeric Extract 95%</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-ink3">Market</span>
                    <span className="text-ink font-medium">Singapore (HSA/SFA)</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-ink3">Turnaround</span>
                    <span className="text-ink font-medium">3 weeks</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-ink3">Recommendation</span>
                    <span className="text-teal font-medium">Proceed with Conditions</span>
                  </div>
                </div>
              </div>
              <div className="bg-ink p-5">
                <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold2/85 font-medium mb-2">
                  Key Finding
                </div>
                <p className="text-[13px] text-paper/70 leading-[1.7]">
                  Curcumin content overstated by 12%. Independent lab testing revealed 83.4%
                  vs. claimed 95%. Pricing adjusted accordingly, saving the buyer an estimated
                  USD 15,000 annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
