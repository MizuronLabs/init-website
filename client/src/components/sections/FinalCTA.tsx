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
              className="inline-block bg-gold text-paper px-7 py-3 text-[13px] tracking-[0.06em] font-medium no-underline transition-colors hover:bg-teal"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:hello@mizuronglobal.com"
              className="inline-block bg-transparent text-paper px-7 py-3 text-[13px] tracking-[0.06em] font-medium no-underline border border-white/20 transition-all hover:border-gold2 hover:text-gold2"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
