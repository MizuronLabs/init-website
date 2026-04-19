import { CheckCircle2, FileText, Shield, FlaskConical, MapPin, Building2, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

type Area = { title: string; desc: string };
type CompRow = { aspect: string; us: string; them: string };

const areaIcons = [Building2, FileText, Shield, FlaskConical, MapPin, Scale];

const reportToc = [
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
];

export default function Proof() {
  const { t } = useTranslation();
  const areas = t("proof.areas", { returnObjects: true }) as Area[];
  const comparison = t("proof.comparison", { returnObjects: true }) as CompRow[];

  return (
    <section id="proof" className="py-16 md:py-20" aria-labelledby="proof-heading">
      <div className="container">
        <span className="tag fade-up">{t("proof.tag")}</span>
        <h2
          id="proof-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-3 fade-up"
          style={{ transitionDelay: "80ms" }}
        >
          {t("proof.h2")}
        </h2>
        <p
          className="text-ink2 text-[15px] max-w-[600px] mb-12 fade-up"
          style={{ transitionDelay: "120ms" }}
        >
          {t("proof.sub")}
        </p>

        {/* Verification checklist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {areas.map((area, i) => {
            const Icon = areaIcons[i] ?? Building2;
            return (
              <div
                key={area.title}
                className="p-5 bg-paper2 border border-paper3 fade-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Icon size={20} className="text-gold mb-3" strokeWidth={1.5} />
                <h4 className="font-serif text-[1.05rem] mb-1.5">{area.title}</h4>
                <p className="text-[12.5px] text-ink2 leading-[1.7]">{area.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Sample report preview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 fade-up">
            <span className="tag">{t("proof.reportTag")}</span>
            <h3 className="font-serif text-[1.5rem] mb-4">{t("proof.reportH3")}</h3>
            <p className="text-[13px] text-ink2 leading-[1.8] mb-5">{t("proof.reportDesc")}</p>
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-gold"
            >
              {t("proof.reportCta")}
            </a>
          </div>
          <div className="lg:col-span-3 fade-up" style={{ transitionDelay: "120ms" }}>
            <div className="bg-paper2 border border-paper3 p-6 md:p-8">
              <div className="text-[10.5px] tracking-[0.12em] uppercase text-gold font-medium mb-4 pb-3 border-b border-paper3">
                Report Table of Contents — Preview
              </div>
              <div className="space-y-0">
                {reportToc.map((item, i) => (
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
          <span className="tag">{t("proof.comparisonTag")}</span>
          <h3 className="font-serif text-[1.5rem] mb-6">{t("proof.comparisonH3")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-paper3">
                  <th className="py-3 pr-4 text-[11px] tracking-[0.1em] uppercase text-ink3 font-medium w-[45%]">Aspect</th>
                  <th className="py-3 px-4 text-[11px] tracking-[0.1em] uppercase text-gold font-medium w-[27.5%]">Mizuron Global</th>
                  <th className="py-3 pl-4 text-[11px] tracking-[0.1em] uppercase text-ink3 font-medium w-[27.5%]">Typical Sourcing Agent</th>
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
              <span className="tag">{t("proof.caseTag")}</span>
              <h3 className="font-serif text-[1.4rem] mb-4">{t("proof.caseH3")}</h3>
              <p className="text-[13.5px] text-ink2 leading-[1.8] mb-4">{t("proof.caseText1")}</p>
              <p className="text-[13.5px] text-ink2 leading-[1.8]">{t("proof.caseText2")}</p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-paper border border-paper3 p-5">
                <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold font-medium mb-3">Engagement Details</div>
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
                    <span className="text-ink3">{t("proof.caseOutcomeLabel")}</span>
                    <span className="text-teal font-medium">{t("proof.caseOutcome")}</span>
                  </div>
                </div>
              </div>
              <div className="bg-ink p-5">
                <div className="text-[10.5px] tracking-[0.1em] uppercase text-gold2/85 font-medium mb-2">Key Finding</div>
                <p className="text-[13px] text-paper/70 leading-[1.7]">
                  Curcumin content overstated by 12%. Independent lab testing revealed 83.4% vs. claimed 95%. Pricing adjusted accordingly, saving the buyer an estimated USD 15,000 annually.
                </p>
              </div>
              <div className="bg-paper2 border border-paper3 p-4">
                <div className="text-[11px] text-gold font-medium">{t("proof.caseSaved")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
