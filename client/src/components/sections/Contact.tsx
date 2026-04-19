import { useState, useRef, useEffect, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const dialCodes = [
  { flag: "🇯🇵", code: "+81", country: "Japan" },
  { flag: "🇰🇷", code: "+82", country: "South Korea" },
  { flag: "🇸🇬", code: "+65", country: "Singapore" },
  { flag: "🇹🇭", code: "+66", country: "Thailand" },
  { flag: "🇻🇳", code: "+84", country: "Vietnam" },
  { flag: "🇮🇩", code: "+62", country: "Indonesia" },
  { flag: "🇲🇾", code: "+60", country: "Malaysia" },
  { flag: "🇵🇭", code: "+63", country: "Philippines" },
  { flag: "🇮🇳", code: "+91", country: "India" },
  { flag: "🇨🇳", code: "+86", country: "China" },
  { flag: "🇺🇸", code: "+1", country: "USA" },
  { flag: "🇬🇧", code: "+44", country: "UK" },
  { flag: "🇩🇪", code: "+49", country: "Germany" },
  { flag: "🇦🇺", code: "+61", country: "Australia" },
  { flag: "🌍", code: "", country: "Other" },
];

function PhoneField() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(dialCodes[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="flex relative" ref={ref}>
      <input type="hidden" name="phone_dial_code" value={selected.code} />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative shrink-0 flex items-center gap-1.5 px-3 border border-r-0 border-paper3 bg-paper2 text-[13px] text-ink hover:border-gold focus:outline-none transition-colors min-w-[86px]"
        aria-label="Select country dial code"
      >
        <span>{selected.flag}</span>
        <span className="text-ink2">{selected.code || "—"}</span>
        <ChevronDown size={12} className={`text-ink3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 z-50 w-52 max-w-[calc(100vw-2rem)] bg-paper border border-paper3 shadow-md max-h-60 overflow-y-auto">
          {dialCodes.map((d) => (
            <button
              key={d.country}
              type="button"
              onClick={() => { setSelected(d); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12.5px] text-left hover:bg-paper2 transition-colors ${
                selected.country === d.country ? "text-gold font-medium" : "text-ink2"
              }`}
            >
              <span>{d.flag}</span>
              <span>{d.country}</span>
              <span className="ml-auto text-ink3">{d.code}</span>
            </button>
          ))}
        </div>
      )}
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone number"
        className="flex-1 px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}

const inputClass = "w-full px-3 py-2.5 border border-paper3 bg-paper2 text-[14px] text-ink focus:border-gold focus:outline-none transition-colors";
const labelClass = "block text-[11px] tracking-[0.1em] uppercase text-ink3 mb-1.5 font-medium";
const sectionLabel = "text-[10.5px] tracking-[0.12em] uppercase text-gold font-medium pb-2.5 mb-4 border-b border-paper3";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const nextSteps = t("contact.nextSteps", { returnObjects: true }) as string[];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mbdqrjzp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(t("contact.errorMsg"));
      }
    } catch {
      setError(t("contact.networkError"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-paper2 py-16 md:py-20" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-12 lg:gap-20">

          {/* Left: Contact info */}
          <div className="fade-up">
            <span className="tag">{t("contact.tag")}</span>
            <h2 id="contact-heading" className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] mb-4">
              {t("contact.h2")}
            </h2>
            <p className="text-[14px] text-ink2 leading-[1.8] mb-8 max-w-[480px]">
              {t("contact.sub")}
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <Mail size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">{t("contact.emailLabel")}</div>
                  <a href="mailto:hello@mizuronglobal.com" className="text-[14px] text-ink no-underline hover:text-gold transition-colors">
                    hello@mizuronglobal.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">{t("contact.whatsappLabel")}</div>
                  <a href="https://wa.me/916361406325?text=Hi%20Mizuron%20Global,%20I%20reached%20out%20via%20your%20website.%20I%20am%20interested%20in%20learning%20more%20about%20your%20India%20sourcing%20and%20verification%20services." className="text-[14px] text-ink no-underline hover:text-gold transition-colors">
                    +91 6361 40 6325
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">{t("contact.officeLabel")}</div>
                  <span className="text-[14px] text-ink">{t("contact.officeAddress")}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-ink3 mb-0.5">{t("contact.responseLabel")}</div>
                  <span className="text-[14px] text-ink">{t("contact.responseTime")}</span>
                </div>
              </div>
            </div>

            <div className="bg-paper border border-paper3 p-5 mb-6">
              <h4 className="font-serif text-[1rem] mb-3">{t("contact.nextH4")}</h4>
              <ol className="space-y-2 text-[13px] text-ink2 leading-[1.7]">
                {nextSteps.map((step, i) => (
                  <li key={i} className="pl-5 relative">
                    <span className="absolute left-0 text-gold font-medium">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-[13px] text-ink2 space-y-2">
              <div>
                <span className="text-[10.5px] tracking-[0.08em] uppercase text-gold font-medium block mb-0.5">Based in</span>
                Ahmedabad, Gujarat, India
              </div>
              <div>
                <span className="text-[10.5px] tracking-[0.08em] uppercase text-gold font-medium block mb-0.5">Serving</span>
                Singapore · Japan · South Korea · Southeast Asia
              </div>
              <div>
                <span className="text-[10.5px] tracking-[0.08em] uppercase text-gold font-medium block mb-0.5">Languages</span>
                English · Gujarati · Hindi
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-up" style={{ transitionDelay: "120ms" }}>
            {submitted ? (
              <div className="bg-paper border border-teal p-8 text-center">
                <CheckCircle2 size={40} className="text-teal mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-[1.4rem] mb-2">{t("contact.successH3")}</h3>
                <p className="text-[14px] text-ink2 leading-[1.7]">{t("contact.successP")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-paper border border-paper3 p-6 md:p-8">
                <h3 className="font-serif text-[1.4rem] mb-1">Sourcing Enquiry</h3>
                <p className="text-[12.5px] text-ink3 mb-6">Fields marked * are required. All information is kept strictly confidential.</p>

                {/* About You */}
                <div className="mb-6">
                  <div className={sectionLabel}>{t("contact.formSections.aboutYou")}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="first_name" className={labelClass}>First Name *</label>
                      <input id="first_name" name="first_name" type="text" required className={inputClass} placeholder="First name" autoComplete="given-name" />
                    </div>
                    <div>
                      <label htmlFor="last_name" className={labelClass}>Last Name *</label>
                      <input id="last_name" name="last_name" type="text" required className={inputClass} placeholder="Last name" autoComplete="family-name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="company" className={labelClass}>{t("contact.fields.company")} *</label>
                      <input id="company" name="company" type="text" required className={inputClass} placeholder="Your company" autoComplete="organization" />
                    </div>
                    <div>
                      <label htmlFor="job_title" className={labelClass}>Job Title</label>
                      <input id="job_title" name="job_title" type="text" className={inputClass} placeholder="e.g. Procurement Manager" autoComplete="organization-title" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>{t("contact.fields.email")} *</label>
                      <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="country" className={labelClass}>{t("contact.fields.country")} *</label>
                      <select id="country" name="country" required className={inputClass}>
                        <option value="">{t("contact.fields.countryPlaceholder")}</option>
                        <option>Singapore</option>
                        <option>Japan</option>
                        <option>South Korea</option>
                        <option>Thailand</option>
                        <option>Vietnam</option>
                        <option>Indonesia</option>
                        <option>Malaysia</option>
                        <option>Philippines</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className={labelClass}>{t("contact.fields.phone")}</label>
                    <div className="relative">
                      <PhoneField />
                    </div>
                  </div>
                </div>

                {/* Sourcing Need */}
                <div className="mb-6">
                  <div className={sectionLabel}>{t("contact.formSections.sourcingNeed")}</div>
                  <div className="mb-4">
                    <label htmlFor="ingredient" className={labelClass}>{t("contact.fields.ingredient")} *</label>
                    <input id="ingredient" name="ingredient" type="text" required className={inputClass} placeholder={t("contact.fields.ingredientPlaceholder")} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="industry" className={labelClass}>{t("contact.fields.industry")} *</label>
                      <select id="industry" name="industry" required className={inputClass}>
                        <option value="">{t("contact.fields.industryPlaceholder")}</option>
                        <option>Food manufacturing</option>
                        <option>Nutraceuticals / Supplements</option>
                        <option>Cosmetics / Personal care</option>
                        <option>Herbal / Ayurvedic products</option>
                        <option>Food service / Distribution</option>
                        <option>Pharmaceutical</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="volume" className={labelClass}>{t("contact.fields.volume")}</label>
                      <select id="volume" name="volume" className={inputClass}>
                        <option value="">{t("contact.fields.volumePlaceholder")}</option>
                        <option>Under 1 metric ton</option>
                        <option>1–5 metric tons</option>
                        <option>5–20 metric tons</option>
                        <option>20–100 metric tons</option>
                        <option>100+ metric tons</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="stage" className={labelClass}>{t("contact.fields.stage")}</label>
                    <select id="stage" name="stage" className={inputClass}>
                      <option value="">{t("contact.fields.stagePlaceholder")}</option>
                      <option>Just starting — no suppliers identified yet</option>
                      <option>I have a supplier but need independent verification</option>
                      <option>Currently sourcing but facing quality or documentation issues</option>
                      <option>Looking for a second verified source for an existing ingredient</option>
                      <option>Exploring India as a new sourcing origin</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="concern" className={labelClass}>{t("contact.fields.concern")}</label>
                    <select id="concern" name="concern" className={inputClass}>
                      <option value="">{t("contact.fields.concernPlaceholder")}</option>
                      <option>Documentation errors at customs</option>
                      <option>Quality inconsistency between batches</option>
                      <option>Certification authenticity / fraud risk</option>
                      <option>Supplier reliability and communication</option>
                      <option>Pesticide residue or contamination</option>
                      <option>Traceability and origin verification</option>
                      <option>First time sourcing from India — not sure where to start</option>
                    </select>
                  </div>
                </div>

                {/* Service & Timeline */}
                <div className="mb-6">
                  <div className={sectionLabel}>{t("contact.formSections.serviceTimeline")}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="service" className={labelClass}>{t("contact.fields.service")}</label>
                      <select id="service" name="service" className={inputClass}>
                        <option value="">{t("contact.fields.servicePlaceholder")}</option>
                        <option value="verification">Verification Report — supplier due diligence</option>
                        <option value="retainer">Documentation Retainer — ongoing management</option>
                        <option value="sourcing">Full Sourcing Project — end-to-end</option>
                        <option value="pilot">Pilot engagement — preferred rate</option>
                        <option value="other">Not sure — please recommend</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="reg_market" className={labelClass}>{t("contact.fields.market")}</label>
                      <select id="reg_market" name="reg_market" className={inputClass}>
                        <option value="">{t("contact.fields.marketPlaceholder")}</option>
                        <option>Japan (Food Sanitation Act)</option>
                        <option>South Korea (MFDS)</option>
                        <option>Singapore (HSA / SFA)</option>
                        <option>Southeast Asia — general</option>
                        <option>Multiple markets</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="timeline" className={labelClass}>{t("contact.fields.timeline")}</label>
                    <select id="timeline" name="timeline" className={inputClass}>
                      <option value="">{t("contact.fields.timelinePlaceholder")}</option>
                      <option>Immediately (within 2 weeks)</option>
                      <option>Next 1–2 months</option>
                      <option>Next 3–6 months</option>
                      <option>Exploring for future planning</option>
                    </select>
                  </div>
                </div>

                {/* Additional Context */}
                <div className="mb-6">
                  <div className={sectionLabel}>{t("contact.formSections.additionalContext")}</div>
                  <div className="mb-4">
                    <label htmlFor="message" className={labelClass}>{t("contact.fields.message")}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${inputClass} resize-y`}
                      placeholder={t("contact.fields.messagePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="source" className={labelClass}>{t("contact.fields.source")}</label>
                    <select id="source" name="source" className={inputClass}>
                      <option value="">{t("contact.fields.sourcePlaceholder")}</option>
                      <option>LinkedIn</option>
                      <option>Google search</option>
                      <option>Trade association or directory</option>
                      <option>Referral from a colleague</option>
                      <option>Trade show or industry event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {error && <p className="text-[13px] text-red-600 mb-4">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-ink text-paper py-3.5 text-[13px] tracking-[0.07em] font-medium transition-colors hover:bg-gold disabled:opacity-60"
                >
                  {submitting ? t("contact.submitting") : (
                    <>
                      <Send size={14} />
                      {t("contact.submit")}
                    </>
                  )}
                </button>

                <p className="text-[11px] text-ink3 mt-3 text-center leading-[1.6]">
                  We respond to every enquiry within one business day. Your information is never shared with Indian suppliers or third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
