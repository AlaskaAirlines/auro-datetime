import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

// Locale smoke test — verifies <auro-datetime> renders the expected output
// across the locale set this component is intended to support.
//
// Reference value source: empirical Intl.DateTimeFormat output in V8
// (Node 20.6.1 / Chromium ICU) for the fixed input 2020-09-22T14:05:00
// (a Tuesday afternoon). Values are hard-coded so that ICU drift in the
// browser becomes a visible test failure, not a silent behavior change.
//
// Time expected values reflect the component's post-processing rule:
// when the formatted output contains a Latin-script am/pm marker
// (matches `AM`, `PM`, `am`, `pm`, `a.m.`, `p.m.` — case-insensitive),
// the leading zero is stripped and the result is lowercased. Locales
// with non-Latin period markers (`오후`, `م`, `下午`) and 24h locales
// fall through the gate and render verbatim.

const VALUE = "2020-09-22T14:05:00";

const CASES = [
  // ── Major English markets ──────────────────────────────────────────
  { locale: "en-US", type: "date", expected: "Tue, Sep 22, 2020" },
  { locale: "en-US", type: "numeric", expected: "9/22/2020" },
  { locale: "en-US", type: "time", expected: "2:05 pm" },
  { locale: "en-US", type: "month", longMonth: true, expected: "September" },

  { locale: "en-GB", type: "date", match: /^Tue, 22 Sept?\.? 2020$/u },
  { locale: "en-GB", type: "numeric", expected: "22/09/2020" },
  { locale: "en-GB", type: "time", expected: "14:05" },
  { locale: "en-GB", type: "month", longMonth: true, expected: "September" },

  { locale: "en-CA", type: "date", expected: "Tue, Sep 22, 2020" },
  { locale: "en-CA", type: "numeric", expected: "2020-09-22" },
  { locale: "en-CA", type: "time", expected: "2:05 p.m." },
  { locale: "en-CA", type: "month", longMonth: true, expected: "September" },

  { locale: "en-AU", type: "date", match: /^Tue, 22 Sept?\.? 2020$/u },
  { locale: "en-AU", type: "numeric", expected: "22/09/2020" },
  { locale: "en-AU", type: "time", expected: "2:05 pm" },
  { locale: "en-AU", type: "month", longMonth: true, expected: "September" },

  // ── European locales (Romance) ─────────────────────────────────────
  {
    locale: "es-ES",
    type: "date",
    match: /^mar,?\s+22(?:\s+de)?\s+sept?\.?(?:\s+de)?\s+2020$/u,
  },
  { locale: "es-ES", type: "numeric", expected: "22/9/2020" },
  { locale: "es-ES", type: "time", expected: "14:05" },
  { locale: "es-ES", type: "month", longMonth: true, expected: "septiembre" },

  { locale: "es-MX", type: "numeric", expected: "22/9/2020" },
  { locale: "es-MX", type: "time", expected: "2:05 p.m." },
  { locale: "es-MX", type: "month", longMonth: true, expected: "septiembre" },

  { locale: "fr-FR", type: "date", match: /^mar\.?\s+22\s+sept\.?\s+2020$/u },
  { locale: "fr-FR", type: "numeric", expected: "22/09/2020" },
  { locale: "fr-FR", type: "time", expected: "14:05" },
  { locale: "fr-FR", type: "month", longMonth: true, expected: "septembre" },

  { locale: "fr-CA", type: "numeric", expected: "2020-09-22" },
  { locale: "fr-CA", type: "time", expected: "14 h 05" }, // distinctive fr-CA "h" separator
  { locale: "fr-CA", type: "month", longMonth: true, expected: "septembre" },

  { locale: "it-IT", type: "numeric", expected: "22/09/2020" },
  { locale: "it-IT", type: "time", expected: "14:05" },
  { locale: "it-IT", type: "month", longMonth: true, expected: "settembre" },

  { locale: "pt-BR", type: "numeric", expected: "22/09/2020" },
  { locale: "pt-BR", type: "time", expected: "14:05" },
  { locale: "pt-BR", type: "month", longMonth: true, expected: "setembro" },

  { locale: "pt-PT", type: "numeric", expected: "22/09/2020" },
  { locale: "pt-PT", type: "time", expected: "14:05" },
  { locale: "pt-PT", type: "month", longMonth: true, expected: "setembro" },

  // ── European locales (Germanic) ────────────────────────────────────
  { locale: "de-DE", type: "date", match: /^Di\.?,\s+22\.\s+\S+\s+2020$/u },
  { locale: "de-DE", type: "numeric", expected: "22.9.2020" },
  { locale: "de-DE", type: "time", expected: "14:05" },
  { locale: "de-DE", type: "month", longMonth: true, expected: "September" },

  { locale: "nl-NL", type: "numeric", expected: "22-9-2020" }, // distinctive `-` separator
  { locale: "nl-NL", type: "time", expected: "14:05" },
  { locale: "nl-NL", type: "month", longMonth: true, expected: "september" },

  { locale: "sv-SE", type: "numeric", expected: "2020-09-22" },
  { locale: "sv-SE", type: "time", expected: "14:05" },
  { locale: "sv-SE", type: "month", longMonth: true, expected: "september" },

  { locale: "da-DK", type: "numeric", expected: "22.9.2020" },
  { locale: "da-DK", type: "time", expected: "14.05" }, // distinctive `.` separator in time
  { locale: "da-DK", type: "month", longMonth: true, expected: "september" },

  { locale: "nb-NO", type: "numeric", expected: "22.9.2020" },
  { locale: "nb-NO", type: "time", expected: "14:05" },
  { locale: "nb-NO", type: "month", longMonth: true, expected: "september" },

  // ── East Asian locales ─────────────────────────────────────────────
  { locale: "ja-JP", type: "numeric", expected: "2020/9/22" },
  { locale: "ja-JP", type: "time", expected: "14:05" },
  { locale: "ja-JP", type: "month", longMonth: true, expected: "9月" },
  { locale: "ja-JP", type: "year", expected: "2020年" }, // year suffix
  { locale: "ja-JP", type: "day", expected: "22日" }, // day suffix

  { locale: "ko-KR", type: "numeric", expected: "2020. 9. 22." },
  { locale: "ko-KR", type: "time", expected: "오후 02:05" }, // 12h with Korean prefix; leading zero correctly preserved (no Latin AM/PM)
  { locale: "ko-KR", type: "month", longMonth: true, expected: "9월" },
  { locale: "ko-KR", type: "year", expected: "2020년" },
  { locale: "ko-KR", type: "day", expected: "22일" },

  { locale: "zh-CN", type: "numeric", expected: "2020/9/22" },
  { locale: "zh-CN", type: "time", expected: "14:05" }, // 24h despite Chinese having 12h words — V8 default
  { locale: "zh-CN", type: "month", longMonth: true, expected: "九月" },
  { locale: "zh-CN", type: "year", expected: "2020年" },
  { locale: "zh-CN", type: "day", expected: "22日" },

  { locale: "zh-TW", type: "numeric", expected: "2020/9/22" },
  { locale: "zh-TW", type: "time", expected: "下午02:05" }, // 12h with Chinese prefix in TW; leading zero preserved
  { locale: "zh-TW", type: "year", expected: "2020年" },

  // ── Right-to-left scripts ──────────────────────────────────────────
  // ar-EG uses Arabic-Indic digits and inserts U+200F (RLM) between segments.
  // Match on structure rather than literal to avoid invisible-character drift.
  {
    locale: "ar-EG",
    type: "numeric",
    match: /^[٠-٩]{2}[‏\s/]+[٠-٩]+[‏\s/]+[٠-٩]{4}$/u,
  },
  { locale: "ar-EG", type: "time", expected: "٠٢:٠٥ م" }, // Arabic-Indic digits + Arabic PM marker
  { locale: "ar-EG", type: "month", longMonth: true, expected: "سبتمبر" },
  { locale: "ar-EG", type: "year", expected: "٢٠٢٠" },

  // ── Other supported locales ────────────────────────────────────────
  { locale: "ru-RU", type: "numeric", expected: "22.09.2020" },
  { locale: "ru-RU", type: "time", expected: "14:05" },
  { locale: "ru-RU", type: "month", longMonth: true, expected: "сентябрь" },

  { locale: "hi-IN", type: "numeric", expected: "22/9/2020" },
  { locale: "hi-IN", type: "time", expected: "2:05 pm" },
  { locale: "hi-IN", type: "month", longMonth: true, expected: "सितंबर" },

  // th-TH defaults to Buddhist Era calendar — 2020 CE = 2563 BE.
  // This is the platform default, not a component bug, but consumers
  // passing `value="2020-..."` will see "2563" rendered.
  { locale: "th-TH", type: "numeric", expected: "22/9/2563" },
  { locale: "th-TH", type: "time", expected: "14:05" },
  { locale: "th-TH", type: "month", longMonth: true, expected: "กันยายน" },
  { locale: "th-TH", type: "year", expected: "พ.ศ. 2563" },

  { locale: "tr-TR", type: "numeric", expected: "22.09.2020" },
  { locale: "tr-TR", type: "time", expected: "14:05" },
  { locale: "tr-TR", type: "month", longMonth: true, expected: "Eylül" },

  { locale: "pl-PL", type: "numeric", expected: "22.09.2020" },
  { locale: "pl-PL", type: "time", expected: "14:05" },
  { locale: "pl-PL", type: "month", longMonth: true, expected: "wrzesień" },
];

describe("auro-datetime locale smoke test", () => {
  for (const c of CASES) {
    const label = `[${c.locale}] type="${c.type}"${c.longMonth ? ' month="long"' : ""} → ${c.expected ?? c.match}`;

    it(label, async () => {
      const monthAttr = c.longMonth ? "long" : "short";
      const el = await fixture(html`
        <auro-datetime
          type="${c.type}"
          locale="${c.locale}"
          month="${monthAttr}"
          value="${VALUE}"
        ></auro-datetime>
      `);

      const root = el.shadowRoot.querySelector(".yield");
      const actual = root.textContent;

      if (c.match) {
        await expect(actual).to.match(c.match);
      } else {
        await expect(actual).to.equal(c.expected);
      }
    });
  }
});
