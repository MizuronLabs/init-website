export default function FinalCTA() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container">
        <div className="max-w-[640px] mx-auto text-center fade-up">

          {/* Eyebrow */}
          <span className="text-[10.5px] tracking-[0.14em] uppercase text-gold2/75 font-medium block mb-5">
            Ready to Source With Confidence?
          </span>

          {/* Headline — earned by reading this far */}
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-paper leading-[1.1] mb-5">
            You've done the research.
            <br />
            <em className="italic text-gold2">Now let's have a real conversation.</em>
          </h2>

          {/* Human, specific subheading */}
          <p className="text-[14px] text-paper/50 leading-[1.85] mb-3 max-w-[520px] mx-auto">
            The buyers who reach out aren't guessing — they're serious about getting India
            sourcing right. Whether you're evaluating a specific supplier, reviewing an existing
            relationship, or exploring the market for the first time, we'll tell you exactly
            what we'd do and whether we're the right fit.
          </p>

          <p className="text-[13px] text-paper/35 leading-[1.7] mb-9 max-w-[420px] mx-auto">
            No obligation. No generic pitch deck. Just a direct conversation with someone who
            knows this corridor.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#contact"
              className="inline-block bg-gold text-paper px-8 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_6px_20px_rgba(15,74,54,0.35)]"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:hello@mizuronglobal.com"
              className="inline-block bg-transparent text-paper px-8 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline border border-white/20 transition-all duration-200 hover:border-gold2/60 hover:text-gold2"
            >
              Write to Us Directly
            </a>
          </div>

          {/* Quiet trust closer */}
          <div className="flex items-center justify-center gap-6 pt-7 border-t border-white/[0.08]">
            <span className="text-[11px] text-paper/25 tracking-[0.05em]">Response within 24h IST</span>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <span className="text-[11px] text-paper/25 tracking-[0.05em]">hello@mizuronglobal.com</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" aria-hidden="true" />
            <span className="text-[11px] text-paper/25 tracking-[0.05em] hidden sm:block">Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
