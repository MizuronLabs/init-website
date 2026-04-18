/*
 * Design: Archival Intelligence
 * Contact form with real submission via Web3Forms
 * Asymmetric layout: info left, form right
 */

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try emailing us directly.");
      }
    } catch {
      setError("Network error. Please try emailing us directly at hello@mizuronglobal.com");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-paper2 py-16 md:py-20" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <div className="fade-up">
            <span className="tag">Get In Touch</span>
            <h2
              id="contact-heading"
              className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4"
            >
              Start with a conversation
            </h2>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-8 max-w-[480px]">
              Book a 20-minute discovery call or send us your enquiry. We'll understand your
              situation and recommend the right engagement — no obligation, no generic pitch.
              Mention "pilot" if you'd like to discuss preferred pilot pricing.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <Mail size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">Email</div>
                  <a href="mailto:hello@mizuronglobal.com" className="text-[14px] text-ink no-underline hover:text-gold transition-colors">
                    hello@mizuronglobal.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">WhatsApp</div>
                  <a href="https://wa.me/916361406325?text=Hi%20Mizuron%20Global,%20I%20reached%20out%20via%20your%20website.%20I%20am%20interested%20in%20learning%20more%20about%20your%20India%20sourcing%20and%20verification%20services." className="text-[14px] text-ink no-underline hover:text-gold transition-colors">
                    +91 6361 40 6325
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">Office</div>
                  <span className="text-[14px] text-ink">
                    Regus, 2nd Floor, Privilon East Wing, SG Highway, Ahmedabad 380054
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">Response Time</div>
                  <span className="text-[14px] text-ink">Within 24 hours (IST business days)</span>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-paper border border-paper3 p-5">
              <h4 className="font-serif text-[1rem] mb-2">What happens after you enquire?</h4>
              <ol className="space-y-1.5 text-[13px] text-ink2 leading-[1.7]">
                <li className="pl-4 relative">
                  <span className="absolute left-0 text-gold font-medium">1.</span>
                  We reply within 24 hours with 2–3 clarifying questions
                </li>
                <li className="pl-4 relative">
                  <span className="absolute left-0 text-gold font-medium">2.</span>
                  20-minute discovery call to understand your needs
                </li>
                <li className="pl-4 relative">
                  <span className="absolute left-0 text-gold font-medium">3.</span>
                  Written proposal with scope, timeline, and pricing
                </li>
                <li className="pl-4 relative">
                  <span className="absolute left-0 text-gold font-medium">4.</span>
                  You decide — no follow-up pressure
                </li>
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-up" style={{ transitionDelay: "120ms" }}>
            {submitted ? (
              <div className="bg-paper border border-teal p-8 text-center">
                <CheckCircle2 size={40} className="text-teal mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-[1.4rem] mb-2">Enquiry received</h3>
                <p className="text-[14px] text-ink2 leading-[1.7]">
                  Thank you for reaching out. We'll review your enquiry and respond within 24
                  hours with next steps. Check your inbox (and spam folder) for our reply.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-paper border border-paper3 p-6 md:p-8">
                {/* Web3Forms access key - replace with actual key */}
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                <input type="hidden" name="subject" value="New Enquiry — Mizuron Global Website" />
                <input type="hidden" name="from_name" value="Mizuron Global Website" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <h3 className="font-serif text-[1.3rem] mb-5">Send us your enquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                      Country / Market
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                      placeholder="e.g. Japan, Korea, Singapore"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="verification">Verification Report</option>
                    <option value="retainer">Documentation Retainer</option>
                    <option value="sourcing">Full Sourcing Project</option>
                    <option value="pilot">Pilot Engagement</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="ingredient" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                    Ingredient / Product of Interest
                  </label>
                  <input
                    id="ingredient"
                    name="ingredient"
                    type="text"
                    className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
                    placeholder="e.g. Turmeric extract 95% curcumin, Ashwagandha KSM-66"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors resize-y"
                    placeholder="Tell us about your sourcing needs, timeline, and any specific requirements..."
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-600 mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-ink text-paper py-3 text-[13px] tracking-[0.06em] font-medium transition-colors hover:bg-gold disabled:opacity-60"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={14} />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-[11px] text-ink3 mt-3 text-center">
                  We respond within 24 hours. Your information is never shared with Indian suppliers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
