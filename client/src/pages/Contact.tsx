import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Download, Package, Truck, Users, BarChart3, Building2, Leaf, CheckCircle2, Mail, Globe } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

type FormType =
  | "trial_kit"
  | "technical_datasheet"
  | "export_desk"
  | "distributor"
  | "product_availability"
  | "company_profile"
  | "biochar_partnership"
  | "general_contact";

const formConfigs: {
  id: FormType;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  tag: string;
  contentRequested?: string;
}[] = [
  {
    id: "trial_kit",
    icon: Package,
    title: "Request a Trial Kit",
    subtitle: "Evaluate our vermicompost before committing to a full order. Trial kits are available for qualified buyers.",
    tag: "Soil Nutrition",
    contentRequested: "Vermicompost Trial Kit",
  },
  {
    id: "technical_datasheet",
    icon: Download,
    title: "Technical Datasheet",
    subtitle: "Download our full technical specifications, batch parameters, and compliance documentation.",
    tag: "Gated Content",
    contentRequested: "Technical Datasheet",
  },
  {
    id: "export_desk",
    icon: Truck,
    title: "Export Desk Inquiry",
    subtitle: "Speak directly with our export team about packaging, Incoterms, documentation, and logistics.",
    tag: "Trade & Export",
  },
  {
    id: "distributor",
    icon: Globe,
    title: "Distributor Inquiry",
    subtitle: "Interested in representing Mizuron products in your market? Submit your distribution inquiry.",
    tag: "Partnership",
  },
  {
    id: "product_availability",
    icon: BarChart3,
    title: "Product Availability",
    subtitle: "Check current availability, lot information, and pricing for specific products.",
    tag: "Procurement",
  },
  {
    id: "company_profile",
    icon: Building2,
    title: "Company Profile",
    subtitle: "Download the Mizuron Global company profile for your procurement or due diligence process.",
    tag: "Gated Content",
    contentRequested: "Company Profile",
  },
  {
    id: "biochar_partnership",
    icon: Leaf,
    title: "Biochar Partnership",
    subtitle: "Explore partnership opportunities in biochar production, distribution, or carbon infrastructure.",
    tag: "Carbon Solutions",
  },
  {
    id: "general_contact",
    icon: Mail,
    title: "General Inquiry",
    subtitle: "Any other question or inquiry. Our team will route your message to the right person.",
    tag: "General",
  },
];

const buyerTypeOptions = [
  { value: "resort_hotel", label: "Resort / Hotel" },
  { value: "distributor", label: "Distributor" },
  { value: "importer", label: "Importer" },
  { value: "government", label: "Government / Institutional" },
  { value: "ngo", label: "NGO / Development Organization" },
  { value: "investment_firm", label: "Investment Firm" },
  { value: "agricultural_business", label: "Agricultural Business" },
  { value: "other", label: "Other" },
];

const productOptions = [
  "Vermicompost",
  "Specialty Coffee",
  "High-Value Agri Products",
  "Biochar (Roadmap)",
  "Multiple Products",
  "Other / Not Sure",
];

interface FormState {
  name: string;
  email: string;
  organization: string;
  jobTitle: string;
  phone: string;
  country: string;
  buyerType: string;
  productInterest: string;
  incoterms: string;
  destinationPort: string;
  estimatedQuantity: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  organization: "",
  jobTitle: "",
  phone: "",
  country: "",
  buyerType: "",
  productInterest: "",
  incoterms: "",
  destinationPort: "",
  estimatedQuantity: "",
  message: "",
};

export default function Contact() {
  const [location] = useLocation();
  const [activeForm, setActiveForm] = useState<FormType>("trial_kit");
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  // Parse hash from URL to auto-select form
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as FormType;
    const valid = formConfigs.find((f) => f.id === hash);
    if (valid) setActiveForm(valid.id);
  }, [location]);

  const submitMutation = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData(emptyForm);
      toast.success("Your inquiry has been received. We will respond within 2–3 business days.");
    },
    onError: (err) => {
      toast.error("Submission failed. Please try again or email us directly.");
      console.error(err);
    },
  });

  const activeConfig = formConfigs.find((f) => f.id === activeForm)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Name and email are required.");
      return;
    }
    submitMutation.mutate({
      ...formData,
      formType: activeForm,
      contentRequested: activeConfig.contentRequested,
      buyerType: formData.buyerType as any || undefined,
      incoterms: formData.incoterms as any || undefined,
    });
  };

  const inputClass = "w-full bg-[oklch(22%_0.009_200)] border border-[oklch(30%_0.009_200)] text-[oklch(85%_0.003_200)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors placeholder:text-[oklch(38%_0.006_200)]";
  const labelClass = "text-xs font-semibold text-[oklch(60%_0.006_200)] uppercase tracking-wider mb-1.5 block";

  // Show trade-specific fields for export/distributor forms
  const showTradeFields = ["export_desk", "distributor", "product_availability"].includes(activeForm);
  const showProductField = !["company_profile", "general_contact"].includes(activeForm);

  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(12%_0.008_200)] via-[oklch(14%_0.012_153)] to-[oklch(12%_0.008_200)]" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="tag-green mb-5 inline-block">Contact & Inquiries</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-5">
              Start a Qualified<br />
              <span className="text-green-brand">Conversation.</span>
            </h1>
            <p className="text-[oklch(65%_0.006_200)] leading-relaxed">
              Select the inquiry type that best matches your requirement. Each form routes to the right team and triggers a response within 2–3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — Form Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)] mb-4">Select Inquiry Type</h3>
              <div className="flex flex-col gap-2">
                {formConfigs.map((fc) => (
                  <button
                    key={fc.id}
                    onClick={() => { setActiveForm(fc.id); setSubmitted(false); }}
                    className={`flex items-start gap-3 p-4 rounded-sm border text-left transition-all ${
                      activeForm === fc.id
                        ? "border-[oklch(35.5%_0.088_153/0.5)] bg-[oklch(20%_0.012_153/0.3)]"
                        : "border-[oklch(22%_0.009_200)] hover:border-[oklch(30%_0.009_200)]"
                    }`}
                  >
                    <fc.icon size={16} className={`mt-0.5 flex-shrink-0 ${activeForm === fc.id ? "text-[oklch(65%_0.12_153)]" : "text-[oklch(45%_0.006_200)]"}`} />
                    <div>
                      <div className={`text-sm font-semibold ${activeForm === fc.id ? "text-[oklch(90%_0.003_200)]" : "text-[oklch(70%_0.006_200)]"}`}>
                        {fc.title}
                      </div>
                      <div className="text-[0.65rem] text-[oklch(45%_0.006_200)] mt-0.5">{fc.tag}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 mz-card p-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(55%_0.006_200)] mb-3">Direct Contact</h4>
                <div className="flex flex-col gap-2">
                  <div className="text-xs text-[oklch(60%_0.006_200)]">
                    <span className="text-[oklch(65%_0.12_153)] font-semibold">Email</span>
                    <br />info@mizuronglobal.com
                  </div>
                  <div className="text-xs text-[oklch(60%_0.006_200)]">
                    <span className="text-[oklch(65%_0.12_153)] font-semibold">Response Time</span>
                    <br />2–3 business days
                  </div>
                  <div className="text-xs text-[oklch(60%_0.006_200)]">
                    <span className="text-[oklch(65%_0.12_153)] font-semibold">Export Desk</span>
                    <br />Available for qualified buyers
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Active Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="mz-card p-12 text-center">
                  <CheckCircle2 size={40} className="text-[oklch(65%_0.12_153)] mx-auto mb-5" />
                  <h3 className="text-[oklch(90%_0.003_200)] font-semibold text-xl mb-3">Inquiry Received</h3>
                  <p className="text-[oklch(62%_0.006_200)] mb-6">
                    Thank you. Your {activeConfig.title.toLowerCase()} has been submitted. Our team will respond within 2–3 business days.
                  </p>
                  {activeConfig.contentRequested && (
                    <p className="text-sm text-[oklch(55%_0.006_200)] mb-6">
                      If you requested gated content, it will be sent to your email address once your inquiry is reviewed.
                    </p>
                  )}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div className="mz-card p-8">
                  {/* Form Header */}
                  <div className="flex items-start gap-4 mb-7 pb-6 border-b border-[oklch(22%_0.009_200)]">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(22%_0.009_200)] flex items-center justify-center flex-shrink-0">
                      <activeConfig.icon size={18} className="text-[oklch(65%_0.12_153)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[oklch(90%_0.003_200)] font-semibold">{activeConfig.title}</h3>
                        <span className="tag-green text-[0.6rem]">{activeConfig.tag}</span>
                      </div>
                      <p className="text-sm text-[oklch(60%_0.006_200)]">{activeConfig.subtitle}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Identity */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email"
                          required
                          className={inputClass}
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Organization</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Company / Institution"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Job Title</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your role"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Country *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          placeholder="Country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Buyer Type</label>
                        <select
                          className={inputClass}
                          value={formData.buyerType}
                          onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                        >
                          <option value="">Select type</option>
                          {buyerTypeOptions.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Product Interest */}
                    {showProductField && (
                      <div>
                        <label className={labelClass}>Product Interest</label>
                        <select
                          className={inputClass}
                          value={formData.productInterest}
                          onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        >
                          <option value="">Select product</option>
                          {productOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Trade Fields */}
                    {showTradeFields && (
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className={labelClass}>Incoterms</label>
                          <select
                            className={inputClass}
                            value={formData.incoterms}
                            onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                          >
                            <option value="">Select</option>
                            <option value="fob">FOB</option>
                            <option value="cif">CIF</option>
                            <option value="ddp">DDP</option>
                            <option value="tbd">To be discussed</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Destination Port</label>
                          <input
                            type="text"
                            className={inputClass}
                            placeholder="e.g. Port of Male"
                            value={formData.destinationPort}
                            onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Est. Quantity</label>
                          <input
                            type="text"
                            className={inputClass}
                            placeholder="e.g. 5 MT / 1 FCL"
                            value={formData.estimatedQuantity}
                            onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                          />
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Message / Additional Details</label>
                      <textarea
                        rows={4}
                        className={`${inputClass} resize-none`}
                        placeholder="Describe your requirements, timeline, or any specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Gated Content Notice */}
                    {activeConfig.contentRequested && (
                      <div className="bg-[oklch(35.5%_0.088_153/0.08)] border border-[oklch(35.5%_0.088_153/0.2)] rounded-sm p-4">
                        <p className="text-xs text-[oklch(65%_0.12_153)]">
                          <span className="font-semibold">Gated Content:</span> After submitting this form, the {activeConfig.contentRequested} will be sent to your email address. Mizuron reviews all requests before delivery.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="btn-primary w-full justify-center"
                    >
                      {submitMutation.isPending ? "Submitting..." : `Submit ${activeConfig.title}`}
                      {!submitMutation.isPending && <ArrowRight size={16} />}
                    </button>

                    <p className="text-[0.65rem] text-[oklch(40%_0.006_200)] text-center">
                      Your information is treated with strict confidentiality. Mizuron does not sell or share contact data.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
