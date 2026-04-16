/*
 * Design: Archival Intelligence — Dark evidence panel
 * Gold left-border accents on problem cards
 */

const problems = [
  {
    title: "Documentation failures at customs",
    text: "One certificate error — expired FSSAI, mismatched packing list, phytosanitary mistake — causes customs holds costing USD 5,000–20,000 in delays, storage, and re-shipment fees.",
  },
  {
    title: "Quality inconsistency after sampling",
    text: "The sample was excellent. The third shipment failed your lab. Without ongoing batch verification, Indian supplier quality drifts significantly — and you absorb the cost.",
  },
  {
    title: "No truly independent verification",
    text: "Most India sourcing agents are paid by suppliers. Their loyalty is structurally divided. You need an advisor working exclusively in your interest — paid entirely by you.",
  },
];

export default function ProblemBar() {
  return (
    <section className="bg-ink py-16 md:py-20" aria-labelledby="problem-heading">
      <div className="container">
        <div className="mb-10 fade-up">
          <span className="tag !text-gold2/85">Why India Sourcing Fails International Buyers</span>
          <h2 id="problem-heading" className="font-serif text-[1.9rem] text-paper">
            The three problems we were built to solve
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="pl-5 border-l-2 border-gold fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h4 className="font-serif text-[1.05rem] text-paper mb-1.5">{p.title}</h4>
              <p className="text-[12.5px] text-paper/55 leading-[1.75]">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
