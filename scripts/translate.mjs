/**
 * Auto-translate script: reads en.json, detects changed/missing keys vs target locales,
 * and re-translates with Anthropic SDK using culturally-nuanced prompts per language.
 *
 * Usage: node scripts/translate.mjs [--lang ja] [--force]
 *   --lang <code>  Only translate one specific language (default: all)
 *   --force        Re-translate all keys even if they already exist
 *
 * Requires: ANTHROPIC_API_KEY env variable
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = join(__dir, "../client/src/i18n/locales");

const LANGUAGES = [
  {
    code: "ja",
    name: "Japanese",
    guidance: `Write formal business Japanese (丁寧語/敬語). Use 貴社 for the client's company and 弊社 for Mizuron Global.
Use です/ます polite form throughout. For business terms like "verification report", prefer Japanese equivalents (検証レポート).
Maintain a tone appropriate for B2B procurement professionals at large Japanese food and supplement manufacturers.
Do NOT use overly stiff formal Japanese — the tone should feel professional and trustworthy, not cold.`,
  },
  {
    code: "ko",
    name: "Korean",
    guidance: `Write formal business Korean (존댓말). Use 귀사 for the client's company and 저희 for Mizuron Global.
Use formal ending forms (-습니다/-습니까). For business terms, use standard Korean business vocabulary.
Tone should feel professional and trustworthy for B2B procurement professionals in Korean food and supplement companies.`,
  },
  {
    code: "zh",
    name: "Traditional Chinese (Singapore/Taiwan)",
    guidance: `Write Traditional Chinese suitable for Singapore and Taiwan business context.
Use formal but accessible business language. Use 貴公司 for the client's company and 我們/本公司 for Mizuron Global.
Tone should be professional and confident. Avoid Simplified Chinese conventions.`,
  },
  {
    code: "th",
    name: "Thai",
    guidance: `Write polite formal Thai suitable for business communications. Use appropriate polite particles and formal vocabulary.
Tone should be professional and respectful, suitable for B2B procurement professionals in Thai food manufacturing companies.`,
  },
  {
    code: "vi",
    name: "Vietnamese",
    guidance: `Write formal Vietnamese suitable for B2B business context. Use appropriate formal pronouns (chúng tôi for Mizuron Global, quý khách/quý công ty for the client).
Tone should be professional and trustworthy.`,
  },
  {
    code: "id",
    name: "Indonesian (Bahasa Indonesia)",
    guidance: `Write formal Bahasa Indonesia suitable for B2B business context. Use Anda/perusahaan Anda for the client and kami/Mizuron Global for the company.
Tone should be professional and clear, suitable for food manufacturing and supplement industry procurement professionals.`,
  },
];

const ARGS = process.argv.slice(2);
const FORCE = ARGS.includes("--force");
const LANG_FILTER = ARGS.includes("--lang") ? ARGS[ARGS.indexOf("--lang") + 1] : null;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function flattenKeys(obj, prefix = "") {
  const keys = {};
  for (const [k, v] of Object.entries(obj)) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      Object.assign(keys, flattenKeys(v, full));
    } else {
      keys[full] = v;
    }
  }
  return keys;
}

function getValueAtPath(obj, path) {
  return path.split(".").reduce((acc, k) => acc?.[k], obj);
}

function setValueAtPath(obj, path, value) {
  const parts = path.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

async function translateBatch(texts, targetLang, guidance) {
  const payload = JSON.stringify(texts, null, 2);

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: `You are a professional B2B translator specialising in food ingredient sourcing and regulatory compliance content for Asian markets.

Translate the following JSON object from English to ${targetLang}.

TRANSLATION GUIDANCE:
${guidance}

IMPORTANT RULES:
- Return ONLY valid JSON, no markdown, no explanation
- Preserve all JSON keys exactly as-is (only translate values)
- Preserve special characters like ·, —, →, %, USD, etc.
- Do NOT translate proper nouns: Mizuron Global, FSSAI, MHLW, MFDS, HSA, SFA, APEDA, Gujarat, Ahmedabad, ASEAN, HACCP, ISO, DGFT, IEC, GST, NPOP, GI, CoA, OEM, FSA, KFDA, JETRO, IndiaMART
- Do NOT translate country and city names unless the target language has a well-established native form
- Do NOT translate ingredient names (turmeric, ashwagandha, curcumin, etc.) unless they have standard native-language names
- Preserve the exact same JSON structure (arrays must stay arrays, strings must stay strings)
- Keep brand names like "Formspree", "Vercel" untranslated
- For email addresses and URLs, keep them exactly as-is

Source JSON:
${payload}

Return only the translated JSON object.`,
      },
    ],
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`No JSON found in response for ${targetLang}`);
  return JSON.parse(jsonMatch[0]);
}

async function main() {
  const enPath = join(LOCALES_DIR, "en.json");
  const enData = JSON.parse(readFileSync(enPath, "utf-8"));
  const enFlat = flattenKeys(enData);
  const enKeys = Object.keys(enFlat);

  const langs = LANG_FILTER
    ? LANGUAGES.filter((l) => l.code === LANG_FILTER)
    : LANGUAGES;

  for (const lang of langs) {
    console.log(`\n→ Processing ${lang.name} (${lang.code})...`);

    const targetPath = join(LOCALES_DIR, `${lang.code}.json`);
    let targetData = {};
    try {
      targetData = JSON.parse(readFileSync(targetPath, "utf-8"));
    } catch {
      console.log(`  No existing file, creating from scratch`);
    }

    const targetFlat = flattenKeys(targetData);

    // Find keys that need translation
    const missingKeys = FORCE
      ? enKeys
      : enKeys.filter((k) => getValueAtPath(targetData, k) == null);

    if (missingKeys.length === 0) {
      console.log(`  ✓ All ${enKeys.length} keys present, skipping`);
      continue;
    }

    console.log(`  Translating ${missingKeys.length} keys...`);

    // Batch by top-level section to keep context coherent
    const sections = {};
    for (const key of missingKeys) {
      const top = key.split(".")[0];
      if (!sections[top]) sections[top] = {};
      setValueAtPath(sections[top], key.replace(`${top}.`, ""), enFlat[key]);
    }

    for (const [section, sectionData] of Object.entries(sections)) {
      console.log(`    Translating section: ${section}`);
      try {
        const translated = await translateBatch(sectionData, lang.name, lang.guidance);
        // Merge into targetData
        if (!targetData[section]) targetData[section] = {};
        Object.assign(targetData[section], translated);
      } catch (err) {
        console.error(`    ✗ Error translating ${section}:`, err.message);
      }
    }

    writeFileSync(targetPath, JSON.stringify(targetData, null, 2) + "\n", "utf-8");
    console.log(`  ✓ Written to ${lang.code}.json`);
  }

  console.log("\n✓ Translation complete.");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
