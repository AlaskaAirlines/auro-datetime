import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-datetime", () => {
  it("auro-datetime is accessible", async () => {
    const el = await fixture(html`
      <auro-datetime></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("baseline test: converts numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("baseline test: converts time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("converts UTC date", async () => {
    const el = await fixture(html`
      <auro-datetime value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Tue, Sep 22, 2020");
  });

  it("renders PM time in lowercase", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T14:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2:00 pm");
  });

  // Wall-clock parity: when no `timezone` attribute is set, all of these
  // should render the same wall-clock time regardless of the input offset.

  it("renders wall-clock time from Hawaii offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock date from Hawaii offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  it("renders wall-clock time from Pacific offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-07:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock time from Alaska offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-08:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock time from Central offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-05:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock time from Mountain offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-06:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock time from Eastern offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-04:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("renders wall-clock time from UTC (Z) input", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("1:38 am");
  });

  it("converts UTC month", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" value="1920-04-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("April");
  });

  it("converts month from ISO date", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" value="1975-07-19T23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("July");
  });

  it("converts UTC numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("9/22/2020");
  });

  it("renders ISO date input", async () => {
    const el = await fixture(html`
      <auro-datetime value="1975-08-19T23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Tue, Aug 19, 1975");
  });

  it("renders numeric date from ISO input", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" value="1975-08-19T23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8/19/1975");
  });

  it("renders time from ISO input", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="1975-08-19T23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("11:15 pm");
  });

  it("converts time to specified timezone", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("9:35 pm");
  });

  it("only year", async () => {
    const el = await fixture(html`
      <auro-datetime type="year" value="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2022");
  });

  it("only month", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" value="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Jul");
  });

  it("shows todays date", async () => {
    const el = await fixture(html`
      <auro-datetime type="date"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("only weekday", async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("custom element is defined", async () => {
    const el = await !!customElements.get("auro-datetime");

    await expect(el).to.be.true;
  });

  // Date-only input

  it("renders date-only ISO input", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-07-14"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  // Invalid input

  it("renders empty when value is not valid ISO 8601", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="not-a-date"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it("renders empty for legacy English-locale strings (no longer supported)", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it("renders empty when value passes ISO regex but is not a real date", async () => {
    // "2022-99-99" matches the ISO-8601 shape but produces Invalid Date.
    // Without an explicit isNaN check the component would render the
    // literal string "Invalid Date" or throw via _zonedWallClockToUtc.
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-99-99"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it("renders empty for date-only input with a Z suffix", async () => {
    // "2020-09-22Z" is not valid ISO 8601 — an offset/Z is only meaningful
    // with a time component. Previously the regex accepted this form and
    // the wall-clock branch silently dropped the Z; now it warns + empties.
    const el = await fixture(html`
      <auro-datetime type="date" value="2020-09-22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it("renders empty for date-only input with a numeric offset", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2020-09-22-07:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it('renders empty for value="" (empty string is not the same as omitted)', async () => {
    // Lit reflects an empty attribute as `""`, not null/undefined. The
    // documented contract: omitted → today's date, invalid → empty + warn.
    // Empty string is not a valid ISO 8601 form, so it should warn and
    // render empty rather than silently render today's date.
    const el = await fixture(html`
      <auro-datetime type="date" value=""></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("");
  });

  it("falls back to viewer-local when timezone is an invalid IANA string", async () => {
    // A typo like "US/Pacfic" makes Intl.DateTimeFormat throw RangeError.
    // The component must validate up front and fall back to viewer-local
    // (undefined timezone) so render doesn't crash.
    const original = console.warn;
    const calls = [];
    console.warn = (...args) => calls.push(args);

    try {
      const el = await fixture(html`
        <auro-datetime type="date" value="2020-09-22T01:38:22Z" timezone="US/Pacfic"></auro-datetime>
      `);

      // Re-trigger to confirm warning is deduplicated per element.
      el.timezone = "US/Pacfic";
      await el.updateComplete;

      const tzWarnings = calls.filter(
        (args) =>
          typeof args[0] === "string" &&
          args[0].includes("not a valid IANA timezone"),
      );
      await expect(tzWarnings.length).to.equal(1);

      // The output is rendered (no throw) and is non-empty; we don't
      // assert exact text because viewer-local output is environment-
      // dependent.
      const root = el.shadowRoot.querySelector(".yield");
      await expect(root.textContent).to.not.equal("");
    } finally {
      console.warn = original;
    }
  });

  // locale (Intl) tests

  it("applies en-US as the default locale when no locale attribute is set", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    await expect(el.locale).to.equal("en-US");
  });

  it("formats numeric date in en-GB locale (DD/MM/YYYY)", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" locale="en-GB" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    // Use a regex rather than a literal to tolerate ICU separator drift
    // (some engine versions render NBSP or different punctuation).
    await expect(root.textContent).to.match(/^22.{0,2}09.{0,2}2020$/u);
  });

  it("formats time in en-GB locale (24-hour) and keeps the leading zero", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" locale="en-GB" value="2020-09-22T08:05:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    // en-GB defaults to 24h; the en-US leading-zero strip must NOT apply.
    await expect(root.textContent).to.match(/^08.05$/u);
  });

  it("preserves de-DE midnight time (00:30) — strip-zero must not eat both zeros", async () => {
    // Regression: an earlier version applied .replace(/^0+/u, "") unconditionally,
    // turning de-DE "00:30" into ":30". The AM/PM gate now prevents this for
    // 24-hour locales. Midnight is the worst-case input because both leading
    // characters are zero.
    const el = await fixture(html`
      <auro-datetime type="time" locale="de-DE" value="2020-09-22T00:30:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("00:30");
  });

  it("preserves fr-FR single-digit hour (01:30) leading zero", async () => {
    // Regression: the leading-zero strip would have lost the "0" in "01:30",
    // dropping the hour: "2-digit" intent for 24-hour locales.
    const el = await fixture(html`
      <auro-datetime type="time" locale="fr-FR" value="2020-09-22T01:30:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("01:30");
  });

  it("formats long month name in fr-FR locale", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" locale="fr-FR" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("septembre");
  });

  it("formats time in fr-FR locale (24-hour, no AM/PM)", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" locale="fr-FR" value="1975-08-19T23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("23:15");
  });

  it("formats date in de-DE locale and is accessible", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
    const root = el.shadowRoot.querySelector(".yield");
    // Assert structure rather than recomputing toLocaleString in the test
    // (which would be tautological). 2020-09-22 was a Tuesday: "Di" or "Di.".
    // Format: <weekday-short>, <day>. <month-short> <year>.
    await expect(root.textContent).to.match(/^Di\.?,\s+22\.\s+\S+\s+2020$/u);
  });

  it('renders de-DE year as a Latin-digit "2020"', async () => {
    // Note: locale CAN affect year output for certain locales — `th-TH`
    // emits Buddhist Era (`พ.ศ. 2563`), `ja-JP` appends `年`, `ar-EG`
    // uses Arabic-Indic digits. See test/locale-smoke.test.js for the
    // full matrix. This test specifically locks in that de-DE renders
    // a plain Latin-digit year, since several latin-script locales do.
    const el = await fixture(html`
      <auro-datetime type="year" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2020");
  });

  it("falls back to en-US when locale is empty string", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" locale="" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("9/22/2020");
  });

  it("canonicalizes the locale tag (EN-gb → en-GB)", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" locale="EN-gb" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    // _effectiveLocale is private but is the source of truth for what
    // toLocaleString receives; verify both the canonicalization and that
    // the rendered output reflects the en-GB ordering.
    await expect(el._effectiveLocale).to.equal("en-GB");
    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.match(/^22.{0,2}09.{0,2}2020$/u);
  });

  it("warns once and falls back to en-US for an invalid locale tag", async () => {
    const original = console.warn;
    const calls = [];
    console.warn = (...args) => calls.push(args);

    try {
      const el = await fixture(html`
        <auro-datetime type="numeric" locale="xx-INVALID-tag" value="2020-09-22T01:38:22Z"></auro-datetime>
      `);

      // Trigger another reactive update with the same invalid value
      // to confirm the warning is deduplicated per element.
      el.locale = "xx-INVALID-tag";
      await el.updateComplete;

      const localeWarnings = calls.filter(
        (args) =>
          typeof args[0] === "string" && args[0].includes("not a valid BCP 47"),
      );
      await expect(localeWarnings.length).to.equal(1);
      await expect(el._effectiveLocale).to.equal("en-US");

      const root = el.shadowRoot.querySelector(".yield");
      await expect(root.textContent).to.equal("9/22/2020");
    } finally {
      console.warn = original;
    }
  });

  it("composes locale with timezone (de-DE in Pacific time)", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" locale="de-DE" value="2020-09-22T01:38:22Z" timezone="US/Pacific"></auro-datetime>
    `);

    // 2020-09-22T01:38:22Z in Pacific (UTC-7 PDT) is 2020-09-21 18:38:22.
    // Assert the de-DE structure for a Monday (Mo) on the 21st of September.
    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.match(/^Mo\.?,\s+21\.\s+\S+\s+2020$/u);
  });

  it("renders ko-KR time with the Korean period prefix intact", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" locale="ko-KR" value="2020-09-22T14:05:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    // ko-KR uses 12h with a Korean period prefix (오후 = PM, 오전 = AM).
    // The output has no ASCII AM/PM, so our humanTime() post-processing
    // must NOT strip the leading zero or lowercase the marker.
    await expect(root.textContent).to.include("오후");
    await expect(root.textContent).to.match(/02.05/u);
  });

  it("renders ja-JP date without ASCII mangling", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" locale="ja-JP" value="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    // Assert presence of the Japanese year/month/day markers rather than
    // a brittle literal — separator and weekday wrapping vary by ICU version.
    await expect(root.textContent).to.include("2020");
    await expect(root.textContent).to.match(/年/u);
    await expect(root.textContent).to.match(/月/u);
    await expect(root.textContent).to.match(/日/u);
  });

  it("converts UTC to specified timezone for time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="2020-09-22T01:38:22Z" timezone="US/Pacific"></auro-datetime>
    `);

    // 2020-09-22T01:38:22Z is 2020-09-21T18:38:22 in PDT (UTC-7)
    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("6:38 pm");
  });

  // timezone + offset semantics

  it("converts when input offset and timezone refer to different zones", async () => {
    // 8:00am EDT (-04:00) is 5:00am PDT.
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00-04:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("5:00 am");
  });

  it("interprets a no-offset value as being in the timezone (viewer-independent)", async () => {
    // Input has no offset. With normalization, the wall-clock is treated as
    // 8am Eastern, so display in Eastern matches the input regardless of
    // the viewer's local zone. Without normalization, JS would parse this
    // as the viewer's local 8am and convert — making output viewer-dependent.
    const el = await fixture(html`
      <auro-datetime type="time" value="2022-07-14T08:00:00" timezone="US/Eastern"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("no-offset+timezone preserves the day across viewer zones", async () => {
    // 23:00 Pacific should render as 23:00 Pacific on the 14th, not bleed
    // into the 15th via a viewer-local parse + conversion.
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-07-14T23:00:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  // A no-offset value near a daylight saving change must still show as
  // written in the timezone. Cases cover a zone behind UTC (New York, Los
  // Angeles) and one ahead of it (Berlin). A time skipped by spring-forward
  // moves forward by the gap; a time repeated by fall-back shows its first
  // occurrence. Output is in the given timezone, so it doesn't depend on the
  // test machine's zone.
  const dstCases = [
    ["2022-03-13T04:00:00", "America/New_York", "4:00 am"],
    ["2022-11-06T03:00:00", "America/New_York", "3:00 am"],
    ["2022-03-27T01:30:00", "Europe/Berlin", "1:30 am"],
    ["2022-03-13T05:00:00", "America/Los_Angeles", "5:00 am"],
    ["2022-03-13T02:30:00", "America/New_York", "3:30 am"],
    ["2022-11-06T01:30:00", "America/New_York", "1:30 am"],
    ["2022-03-27T02:30:00", "Europe/Berlin", "3:30 am"],
    ["2022-10-30T02:30:00", "Europe/Berlin", "2:30 am"],
    ["2022-03-13T04:00:00.500", "America/New_York", "4:00 am"],
  ];

  for (const [value, timezone, expected] of dstCases) {
    it(`shows ${value} in ${timezone} as ${expected} near a daylight saving change`, async () => {
      const el = await fixture(html`
        <auro-datetime type="time" value="${value}" timezone="${timezone}"></auro-datetime>
      `);

      const root = el.shadowRoot.querySelector(".yield");
      await expect(root.textContent).to.equal(expected);
    });
  }

  // A value that matches the ISO shape but isn't a real date must show
  // nothing, not throw, when a timezone is set and there's no offset.
  // The calendar check rejects bad months and days first, so the times here
  // are what reach _zonedWallClockToUtc's NaN guard.
  for (const value of [
    "2022-13-01T00:00:00",
    "2022-99-99",
    "2022-07-14T25:00:00",
    "2022-07-14T12:60:00",
  ]) {
    it(`shows nothing for the out-of-range value ${value} with a timezone`, async () => {
      const el = await fixture(html`
        <auro-datetime type="time" value="${value}" timezone="America/New_York"></auro-datetime>
      `);

      const root = el.shadowRoot.querySelector(".yield");
      await expect(root.textContent).to.equal("");
    });
  }

  // A day that doesn't exist in its month must be rejected in every browser.
  // Chrome would otherwise roll it into the next month (February 30 into
  // March 2), while Firefox and Safari reject it.
  for (const [value, timezone] of [
    ["2022-02-30", undefined],
    ["2022-04-31T10:00:00", undefined],
    ["2023-02-29T08:00:00", "America/New_York"],
  ]) {
    it(`shows nothing and warns for the impossible date ${value}${timezone ? ` in ${timezone}` : ""}`, async () => {
      const original = console.warn;
      const calls = [];
      console.warn = (...args) => calls.push(args);

      try {
        const el = await fixture(html`
          <auro-datetime type="date" value="${value}" timezone="${timezone ?? ""}"></auro-datetime>
        `);

        const root = el.shadowRoot.querySelector(".yield");
        await expect(root.textContent).to.equal("");
        await expect(
          calls.some((args) => String(args[0]).includes(`"${value}"`)),
        ).to.equal(true);
      } finally {
        console.warn = original;
      }
    });
  }

  // Date.UTC maps years 0-99 onto 1900-1999, so a check built on it would
  // reject real dates such as 0001-01-01 (.NET's DateTime.MinValue).
  it("accepts a date in a year before 100", async () => {
    const el = await fixture(html`
      <auro-datetime type="year" value="0001-01-01T00:00:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("1");
  });

  it("shows a time in a year before 100 when a timezone is set", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" value="0050-06-15T08:00:00" timezone="UTC"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("still accepts February 29 in a leap year", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2024-02-29"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Feb 29, 2024");
  });

  it("keeps a skipped spring-forward time on the same day", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-03-13T02:30:00" timezone="America/New_York"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Sun, Mar 13, 2022");
  });

  it("only day", async () => {
    const el = await fixture(html`
      <auro-datetime type="day" value="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("13");
  });

  it("numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" value="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("7/13/2022");
  });

  it("only weekday", async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday" value="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Wed");
  });

  // month and weekday changed after the first render must reach the
  // full-date output, not only the single-part types.

  it("updates the date when month and weekday change after render", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.month = "long";
    el.weekday = "long";
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thursday, July 14, 2022");
  });

  it("updates the default output when month changes after render", async () => {
    const el = await fixture(html`
      <auro-datetime value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.setAttribute("month", "long");
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, July 14, 2022");
  });

  // Removing the attribute sets the property to null, and some frameworks
  // set "" when they unbind it. Both must fall back to the documented
  // "short" default instead of throwing in toLocaleString.

  it("falls back to short names when month and weekday are removed", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" month="long" weekday="long" value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.removeAttribute("month");
    el.removeAttribute("weekday");
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  it("falls back to short names when month and weekday are emptied", async () => {
    const el = await fixture(html`
      <auro-datetime value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.month = "";
    el.weekday = "";
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  it("falls back to a short month for type month when month is removed", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.removeAttribute("month");
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Jul");
  });

  it("falls back to a short weekday for type weekday when weekday is emptied", async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday" weekday="long" value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.weekday = "";
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu");
  });

  it("keeps a numeric date numeric when month changes after render", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" value="2022-07-14T08:00:00"></auro-datetime>
    `);

    el.month = "long";
    await el.updateComplete;

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("7/14/2022");
  });
});
