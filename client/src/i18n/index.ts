import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import id from "./locales/id.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import th from "./locales/th.json";
import vi from "./locales/vi.json";
import zh from "./locales/zh.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN", name: "English",    flag: "🇬🇧" },
  { code: "ja", label: "JP", name: "日本語",       flag: "🇯🇵" },
  { code: "ko", label: "KR", name: "한국어",       flag: "🇰🇷" },
  { code: "zh", label: "ZH", name: "中文",         flag: "🇸🇬" },
  { code: "th", label: "TH", name: "ภาษาไทย",     flag: "🇹🇭" },
  { code: "vi", label: "VI", name: "Tiếng Việt",  flag: "🇻🇳" },
  { code: "id", label: "ID", name: "Bahasa",      flag: "🇮🇩" },
] as const;

export type LangCode = typeof SUPPORTED_LANGUAGES[number]["code"];

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ja: { translation: ja }, ko: { translation: ko }, zh: { translation: zh }, th: { translation: th }, vi: { translation: vi }, id: { translation: id } },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 1, // /ja/... → ja
      caches: ["localStorage"],
    },
  });

export default i18next;
