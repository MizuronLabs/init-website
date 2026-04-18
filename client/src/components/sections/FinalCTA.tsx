/*
 * Design: Archival Intelligence
 * Final conversion section — dark background, clear CTA
 */

export default function FinalCTA() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container text-center">
        <div className="max-w-[580px] mx-auto fade-up">
          <span className="text-[10.5px] tracking-[0.14em] uppercase text-gold2/85 font-medium block mb-4">
            Ready to Source With Confidence?
          </span>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-paper mb-4">
            Your next Indian ingredient shipment deserves proper verification
          </h2>
          <p className="text-[14px] text-paper/55 leading-[1.8] mb-8">
            Whether you're evaluating a new supplier, managing an existing relationship, or
            exploring the Indian ingredient market for the first time — start with a conversation.
            No obligation, no generic pitch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-block bg-gold text-paper px-7 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline transition-all duration-200 hover:bg-teal hover:shadow-[0_6px_20px_rgba(15,74,54,0.35)]"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:hello@mizuronglobal.com"
              className="inline-block bg-transparent text-paper px-7 py-3.5 text-[12.5px] tracking-[0.08em] uppercase font-medium no-underline border border-white/20 transition-all duration-200 hover:border-gold2/70 hover:text-gold2"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
