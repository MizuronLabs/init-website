import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { ArrowRight, Download, Package, Truck, BarChart3, Building2, Leaf, CheckCircle2, Mail, Globe, ChevronDown } from "lucide-react";
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
  formspreeId: string;
}[] = [
  {
    id: "trial_kit",
    icon: Package,
    title: "Request a Trial Kit",
    subtitle: "Evaluate our vermicompost before committing to a full order. Trial kits are available for qualified buyers.",
    tag: "Soil Nutrition",
    contentRequested: "Vermicompost Trial Kit",
    formspreeId: "mdapqgze",
  },
  {
    id: "technical_datasheet",
    icon: Download,
    title: "Technical Datasheet",
    subtitle: "Download our full technical specifications, batch parameters, and compliance documentation.",
    tag: "Gated Content",
    contentRequested: "Technical Datasheet",
    formspreeId: "xeevjqro",
  },
  {
    id: "export_desk",
    icon: Truck,
    title: "Export Desk Inquiry",
    subtitle: "Speak directly with our export team about packaging, Incoterms, documentation, and logistics.",
    tag: "Trade & Export",
    formspreeId: "mojyaqkj",
  },
  {
    id: "distributor",
    icon: Globe,
    title: "Distributor Inquiry",
    subtitle: "Interested in representing Mizuron products in your market? Submit your distribution inquiry.",
    tag: "Partnership",
    formspreeId: "xpqkazyd",
  },
  {
    id: "product_availability",
    icon: BarChart3,
    title: "Product Availability",
    subtitle: "Check current availability, lot information, and pricing for specific products.",
    tag: "Procurement",
    formspreeId: "xvzdpowq",
  },
  {
    id: "company_profile",
    icon: Building2,
    title: "Company Profile",
    subtitle: "Download the Mizuron Global company profile for your procurement or due diligence process.",
    tag: "Gated Content",
    contentRequested: "Company Profile",
    formspreeId: "xwvaekrn",
  },
  {
    id: "biochar_partnership",
    icon: Leaf,
    title: "Biochar Partnership",
    subtitle: "Explore partnership opportunities in biochar production, distribution, or carbon infrastructure.",
    tag: "Carbon Solutions",
    formspreeId: "xrerzgyy",
  },
  {
    id: "general_contact",
    icon: Mail,
    title: "General Inquiry",
    subtitle: "Any other question or inquiry. Our team will route your message to the right person.",
    tag: "General",
    formspreeId: "mbdqrjzp",
  },
];

// Comprehensive country dial codes with flag emojis
const COUNTRY_CODES = [
  { code: "AF", dial: "+93",  flag: "🇦🇫", name: "Afghanistan" },
  { code: "AL", dial: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "DZ", dial: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "AD", dial: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "AO", dial: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "AG", dial: "+1",   flag: "🇦🇬", name: "Antigua & Barbuda" },
  { code: "AR", dial: "+54",  flag: "🇦🇷", name: "Argentina" },
  { code: "AM", dial: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "AU", dial: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "AT", dial: "+43",  flag: "🇦🇹", name: "Austria" },
  { code: "AZ", dial: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "BS", dial: "+1",   flag: "🇧🇸", name: "Bahamas" },
  { code: "BH", dial: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "BD", dial: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "BB", dial: "+1",   flag: "🇧🇧", name: "Barbados" },
  { code: "BY", dial: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "BE", dial: "+32",  flag: "🇧🇪", name: "Belgium" },
  { code: "BZ", dial: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "BJ", dial: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "BT", dial: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "BO", dial: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "BA", dial: "+387", flag: "🇧🇦", name: "Bosnia & Herzegovina" },
  { code: "BW", dial: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "BR", dial: "+55",  flag: "🇧🇷", name: "Brazil" },
  { code: "BN", dial: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "BG", dial: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "BF", dial: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "BI", dial: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "CV", dial: "+238", flag: "🇨🇻", name: "Cabo Verde" },
  { code: "KH", dial: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "CM", dial: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "CA", dial: "+1",   flag: "🇨🇦", name: "Canada" },
  { code: "CF", dial: "+236", flag: "🇨🇫", name: "Central African Republic" },
  { code: "TD", dial: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "CL", dial: "+56",  flag: "🇨🇱", name: "Chile" },
  { code: "CN", dial: "+86",  flag: "🇨🇳", name: "China" },
  { code: "CO", dial: "+57",  flag: "🇨🇴", name: "Colombia" },
  { code: "KM", dial: "+269", flag: "🇰🇲", name: "Comoros" },
  { code: "CG", dial: "+242", flag: "🇨🇬", name: "Congo" },
  { code: "CR", dial: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "HR", dial: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "CU", dial: "+53",  flag: "🇨🇺", name: "Cuba" },
  { code: "CY", dial: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "CZ", dial: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "DK", dial: "+45",  flag: "🇩🇰", name: "Denmark" },
  { code: "DJ", dial: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "DO", dial: "+1",   flag: "🇩🇴", name: "Dominican Republic" },
  { code: "EC", dial: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "EG", dial: "+20",  flag: "🇪🇬", name: "Egypt" },
  { code: "SV", dial: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "GQ", dial: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
  { code: "ER", dial: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "EE", dial: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "SZ", dial: "+268", flag: "🇸🇿", name: "Eswatini" },
  { code: "ET", dial: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "FJ", dial: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "FI", dial: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "FR", dial: "+33",  flag: "🇫🇷", name: "France" },
  { code: "GA", dial: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "GM", dial: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "GE", dial: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "DE", dial: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "GH", dial: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "GR", dial: "+30",  flag: "🇬🇷", name: "Greece" },
  { code: "GT", dial: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "GN", dial: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "GW", dial: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
  { code: "GY", dial: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "HT", dial: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "HN", dial: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "HK", dial: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "HU", dial: "+36",  flag: "🇭🇺", name: "Hungary" },
  { code: "IS", dial: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "IN", dial: "+91",  flag: "🇮🇳", name: "India" },
  { code: "ID", dial: "+62",  flag: "🇮🇩", name: "Indonesia" },
  { code: "IR", dial: "+98",  flag: "🇮🇷", name: "Iran" },
  { code: "IQ", dial: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "IE", dial: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "IL", dial: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "IT", dial: "+39",  flag: "🇮🇹", name: "Italy" },
  { code: "JM", dial: "+1",   flag: "🇯🇲", name: "Jamaica" },
  { code: "JP", dial: "+81",  flag: "🇯🇵", name: "Japan" },
  { code: "JO", dial: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "KZ", dial: "+7",   flag: "🇰🇿", name: "Kazakhstan" },
  { code: "KE", dial: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "KI", dial: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "KW", dial: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "KG", dial: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "LA", dial: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "LV", dial: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "LB", dial: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "LS", dial: "+266", flag: "🇱🇸", name: "Lesotho" },
  { code: "LR", dial: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "LY", dial: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "LI", dial: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "LT", dial: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "LU", dial: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "MO", dial: "+853", flag: "🇲🇴", name: "Macao" },
  { code: "MG", dial: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "MW", dial: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "MY", dial: "+60",  flag: "🇲🇾", name: "Malaysia" },
  { code: "MV", dial: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "ML", dial: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "MT", dial: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "MH", dial: "+692", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "MR", dial: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "MU", dial: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "MX", dial: "+52",  flag: "🇲🇽", name: "Mexico" },
  { code: "FM", dial: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "MD", dial: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "MC", dial: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "MN", dial: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "ME", dial: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "MA", dial: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "MZ", dial: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "MM", dial: "+95",  flag: "🇲🇲", name: "Myanmar" },
  { code: "NA", dial: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "NR", dial: "+674", flag: "🇳🇷", name: "Nauru" },
  { code: "NP", dial: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "NL", dial: "+31",  flag: "🇳🇱", name: "Netherlands" },
  { code: "NZ", dial: "+64",  flag: "🇳🇿", name: "New Zealand" },
  { code: "NI", dial: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "NE", dial: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "NG", dial: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "NO", dial: "+47",  flag: "🇳🇴", name: "Norway" },
  { code: "OM", dial: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "PK", dial: "+92",  flag: "🇵🇰", name: "Pakistan" },
  { code: "PW", dial: "+680", flag: "🇵🇼", name: "Palau" },
  { code: "PA", dial: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "PG", dial: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "PY", dial: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "PE", dial: "+51",  flag: "🇵🇪", name: "Peru" },
  { code: "PH", dial: "+63",  flag: "🇵🇭", name: "Philippines" },
  { code: "PL", dial: "+48",  flag: "🇵🇱", name: "Poland" },
  { code: "PT", dial: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "QA", dial: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "RO", dial: "+40",  flag: "🇷🇴", name: "Romania" },
  { code: "RU", dial: "+7",   flag: "🇷🇺", name: "Russia" },
  { code: "RW", dial: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "KN", dial: "+1",   flag: "🇰🇳", name: "Saint Kitts & Nevis" },
  { code: "LC", dial: "+1",   flag: "🇱🇨", name: "Saint Lucia" },
  { code: "VC", dial: "+1",   flag: "🇻🇨", name: "Saint Vincent & Grenadines" },
  { code: "WS", dial: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "SM", dial: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "ST", dial: "+239", flag: "🇸🇹", name: "São Tomé & Príncipe" },
  { code: "SA", dial: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "SN", dial: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "RS", dial: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "SC", dial: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "SL", dial: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "SG", dial: "+65",  flag: "🇸🇬", name: "Singapore" },
  { code: "SK", dial: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "SI", dial: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "SB", dial: "+677", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "SO", dial: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "ZA", dial: "+27",  flag: "🇿🇦", name: "South Africa" },
  { code: "SS", dial: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "ES", dial: "+34",  flag: "🇪🇸", name: "Spain" },
  { code: "LK", dial: "+94",  flag: "🇱🇰", name: "Sri Lanka" },
  { code: "SD", dial: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "SR", dial: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "SE", dial: "+46",  flag: "🇸🇪", name: "Sweden" },
  { code: "CH", dial: "+41",  flag: "🇨🇭", name: "Switzerland" },
  { code: "SY", dial: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "TW", dial: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "TJ", dial: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "TZ", dial: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "TH", dial: "+66",  flag: "🇹🇭", name: "Thailand" },
  { code: "TL", dial: "+670", flag: "🇹🇱", name: "Timor-Leste" },
  { code: "TG", dial: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "TO", dial: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "TT", dial: "+1",   flag: "🇹🇹", name: "Trinidad & Tobago" },
  { code: "TN", dial: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "TR", dial: "+90",  flag: "🇹🇷", name: "Turkey" },
  { code: "TM", dial: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "TV", dial: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "UG", dial: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "UA", dial: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "AE", dial: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "GB", dial: "+44",  flag: "🇬🇧", name: "United Kingdom" },
  { code: "US", dial: "+1",   flag: "🇺🇸", name: "United States" },
  { code: "UY", dial: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "UZ", dial: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "VU", dial: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "VE", dial: "+58",  flag: "🇻🇪", name: "Venezuela" },
  { code: "VN", dial: "+84",  flag: "🇻🇳", name: "Vietnam" },
  { code: "YE", dial: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "ZM", dial: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "ZW", dial: "+263", flag: "🇿🇼", name: "Zimbabwe" },
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
  phoneCountryCode: string;
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
  phoneCountryCode: "+960",
  phone: "",
  country: "",
  buyerType: "",
  productInterest: "",
  incoterms: "",
  destinationPort: "",
  estimatedQuantity: "",
  message: "",
};

// ─── Phone Input Component ───────────────────────────────────────────────────
interface PhoneInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  inputClass: string;
}

function PhoneInput({ countryCode, phoneNumber, onCountryCodeChange, onPhoneChange, inputClass }: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRY_CODES.find((c) => c.dial === countryCode) ?? COUNTRY_CODES.find((c) => c.code === "IN")!;

  const filtered = search.trim()
    ? COUNTRY_CODES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRY_CODES;

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search on open
  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <div className="flex gap-0 relative" ref={dropdownRef}>
      {/* Country Code Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2.5 bg-white border border-r-0 border-[oklch(87%_0.010_140)] rounded-l-sm hover:bg-[oklch(96%_0.006_140)] focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors text-sm text-[oklch(22%_0.030_153)] whitespace-nowrap select-none"
        style={{ minWidth: "5.25rem" }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="font-medium tracking-tight text-[oklch(35%_0.025_153)]">{selected.dial}</span>
        <ChevronDown
          size={13}
          className={`text-[oklch(55%_0.015_153)] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1 w-72 bg-white border border-[oklch(87%_0.010_140)] rounded-sm shadow-lg overflow-hidden"
          style={{ boxShadow: "0 8px 30px oklch(0% 0 0 / 0.10)" }}
        >
          {/* Search */}
          <div className="p-2 border-b border-[oklch(90%_0.008_140)]">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search country or code…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-xs px-2.5 py-1.5 bg-[oklch(97%_0.005_140)] border border-[oklch(88%_0.008_140)] rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] text-[oklch(22%_0.030_153)] placeholder:text-[oklch(62%_0.015_153)]"
            />
          </div>
          {/* List */}
          <ul className="max-h-52 overflow-y-auto overscroll-contain">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-xs text-[oklch(60%_0.015_153)] text-center">No results</li>
            )}
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.dial === countryCode && c.code === selected.code}
                  onClick={() => {
                    onCountryCodeChange(c.dial);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-[oklch(95.5%_0.007_140)] ${
                    c.code === selected.code ? "bg-[oklch(94%_0.012_153/0.4)]" : ""
                  }`}
                >
                  <span className="text-base w-6 text-center flex-shrink-0">{c.flag}</span>
                  <span className="flex-1 text-[oklch(25%_0.025_153)] font-medium truncate">{c.name}</span>
                  <span className="text-xs text-[oklch(52%_0.015_153)] font-mono flex-shrink-0">{c.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Phone Number Input */}
      <input
        type="tel"
        className={`${inputClass} rounded-l-none border-l-0 flex-1`}
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => onPhoneChange(e.target.value)}
        inputMode="tel"
      />
    </div>
  );
}

// ─── Main Contact Page ────────────────────────────────────────────────────────
export default function Contact() {
  const [location] = useLocation();
  const [activeForm, setActiveForm] = useState<FormType>("trial_kit");
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as FormType;
    const valid = formConfigs.find((f) => f.id === hash);
    if (valid) setActiveForm(valid.id);
  }, [location]);

  const submitMutation = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData(emptyForm);
      setIsSubmitting(false);
      toast.success("Your inquiry has been received. We will respond within 2–3 business days.");
    },
    onError: (err) => {
      toast.error("Internal record keeping failed, but your message may have been sent. Please contact us directly if you don't hear back.");
      console.error(err);
      setIsSubmitting(false);
    },
  });

  const activeConfig = formConfigs.find((f) => f.id === activeForm)!;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Name and email are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to Formspree
      const fullPhone = formData.phone
        ? `${formData.phoneCountryCode} ${formData.phone}`
        : "";

      const response = await fetch(`https://formspree.io/f/${activeConfig.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhone,
          _subject: `New Inquiry: ${activeConfig.title}`,
          formName: activeConfig.title,
          formType: activeForm,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      // 2. Submit to Internal DB (TRPC)
      submitMutation.mutate({
        ...formData,
        phone: fullPhone || undefined,
        formType: activeForm,
        contentRequested: activeConfig.contentRequested,
        buyerType: (formData.buyerType as any) || undefined,
        incoterms: (formData.incoterms as any) || undefined,
      });
    } catch (err) {
      toast.error("Submission failed. Please try again or email us directly at info@mizuronglobal.com");
      console.error(err);
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white border border-[oklch(87%_0.010_140)] text-[oklch(22%_0.030_153)] text-sm px-3 py-2.5 rounded-sm focus:outline-none focus:border-[oklch(35.5%_0.088_153)] transition-colors placeholder:text-[oklch(62%_0.015_153)]";
  const labelClass = "text-xs font-semibold text-[oklch(48%_0.018_153)] uppercase tracking-wider mb-1.5 block";

  const showTradeFields = ["export_desk", "distributor", "product_availability"].includes(activeForm);
  const showProductField = !["company_profile", "general_contact"].includes(activeForm);

  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO — dark forest green ========== */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(18%_0.045_153)] via-[oklch(22%_0.060_153)] to-[oklch(18%_0.045_153)]" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="tag-green-dark mb-5 inline-block">Contact &amp; Inquiries</span>
            <h1 className="text-[oklch(95%_0.003_200)] mb-5">
              Start a Qualified<br />
              <span className="text-[oklch(65%_0.12_153)]">Conversation.</span>
            </h1>
            <p className="text-[oklch(72%_0.012_153)] leading-relaxed">
              Select the inquiry type that best matches your requirement. Each form routes to the right team and triggers a response within 2–3 business days.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[oklch(97.5%_0.006_140)] to-transparent" />
      </section>

      {/* ========== MAIN CONTENT — light bg ========== */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — Form Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)] mb-4">Select Inquiry Type</h3>
              <div className="flex flex-col gap-2">
                {formConfigs.map((fc) => (
                  <button
                    key={fc.id}
                    onClick={() => { setActiveForm(fc.id); setSubmitted(false); }}
                    className={`flex items-start gap-3 p-4 rounded-sm border text-left transition-all ${
                      activeForm === fc.id
                        ? "border-[oklch(35.5%_0.088_153/0.5)] bg-[oklch(35.5%_0.088_153/0.07)]"
                        : "border-[oklch(87%_0.010_140)] bg-white hover:border-[oklch(35.5%_0.088_153/0.4)]"
                    }`}
                  >
                    <fc.icon size={16} className={`mt-0.5 flex-shrink-0 ${activeForm === fc.id ? "text-[oklch(35.5%_0.088_153)]" : "text-[oklch(55%_0.015_153)]"}`} />
                    <div>
                      <div className={`text-sm font-semibold ${activeForm === fc.id ? "text-[oklch(22%_0.025_153)]" : "text-[oklch(38%_0.020_153)]"}`}>
                        {fc.title}
                      </div>
                      <div className="text-[0.65rem] text-[oklch(55%_0.015_153)] mt-0.5">{fc.tag}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 mz-card p-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[oklch(48%_0.018_153)] mb-3">Direct Contact</h4>
                <div className="flex flex-col gap-2">
                  <div className="text-xs text-[oklch(50%_0.018_153)]">
                    <span className="text-[oklch(35.5%_0.088_153)] font-semibold">Email</span>
                    <br />info@mizuronglobal.com
                  </div>
                  <div className="text-xs text-[oklch(50%_0.018_153)]">
                    <span className="text-[oklch(35.5%_0.088_153)] font-semibold">Response Time</span>
                    <br />2–3 business days
                  </div>
                  <div className="text-xs text-[oklch(50%_0.018_153)]">
                    <span className="text-[oklch(35.5%_0.088_153)] font-semibold">Export Desk</span>
                    <br />Available for qualified buyers
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Active Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="mz-card p-12 text-center">
                  <CheckCircle2 size={40} className="text-[oklch(35.5%_0.088_153)] mx-auto mb-5" />
                  <h3 className="text-[oklch(22%_0.025_153)] font-semibold text-xl mb-3">Inquiry Received</h3>
                  <p className="text-[oklch(50%_0.018_153)] mb-6">
                    Thank you. Your {activeConfig.title.toLowerCase()} has been submitted. Our team will respond within 2–3 business days.
                  </p>
                  {activeConfig.contentRequested && (
                    <p className="text-sm text-[oklch(52%_0.015_153)] mb-6">
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
                  <div className="flex items-start gap-4 mb-7 pb-6 border-b border-[oklch(87%_0.010_140)]">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(93%_0.010_140)] flex items-center justify-center flex-shrink-0">
                      <activeConfig.icon size={18} className="text-[oklch(35.5%_0.088_153)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[oklch(22%_0.025_153)] font-semibold">{activeConfig.title}</h3>
                        <span className="tag-green text-[0.6rem]">{activeConfig.tag}</span>
                      </div>
                      <p className="text-sm text-[oklch(50%_0.018_153)]">{activeConfig.subtitle}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Row 1: Name + Email */}
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

                    {/* Row 2: Organization + Job Title */}
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

                    {/* Row 3: Phone */}
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <PhoneInput
                        countryCode={formData.phoneCountryCode}
                        phoneNumber={formData.phone}
                        onCountryCodeChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
                        onPhoneChange={(phone) => setFormData({ ...formData, phone })}
                        inputClass={inputClass}
                      />
                    </div>

                    {/* Row 4: Country + Buyer Type */}
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

                    {activeConfig.contentRequested && (
                      <div className="bg-[oklch(35.5%_0.088_153/0.06)] border border-[oklch(35.5%_0.088_153/0.2)] rounded-sm p-4">
                        <p className="text-xs text-[oklch(35.5%_0.088_153)]">
                          <span className="font-semibold">Gated Content:</span> After submitting this form, the {activeConfig.contentRequested} will be sent to your email address. Mizuron reviews all requests before delivery.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center"
                    >
                      {isSubmitting ? "Submitting..." : `Submit ${activeConfig.title}`}
                      {!isSubmitting && <ArrowRight size={16} />}
                    </button>

                    <p className="text-[0.65rem] text-[oklch(55%_0.015_153)] text-center">
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
