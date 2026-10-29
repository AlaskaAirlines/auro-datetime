// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { html, LitElement } from "lit";

const ISO_8601_REGEX =
  /^(\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?)(Z|[+-]\d{2}:\d{2})?$/u;

/**
 * Shows a date or time as text, formatted for a language and region you choose and, optionally, a specific time zone.
 *
 * **Key capabilities**
 * - **What to show**: `type` picks the full date, the time, a numeric date, or a single part, such as the year or weekday.
 * - **Date and time to show**: `value` takes a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and offset; without it, the element shows the current date and time.
 * - **Language formatting**: `locale` formats month names, separators, and the 12- or 24-hour clock for a language, such as `de-DE`.
 * - **Time zones**: `timezone` shows the moment in a time zone, such as `America/Los_Angeles`.
 * - **Name length**: `month="long"` and `weekday="long"` spell out the month and weekday names.
 *
 * **Example**
 * ```html
 * <auro-datetime type="date" value="2022-07-14T08:00:00"></auro-datetime>
 * ```
 *
 * @summary Date or time text formatted by language and time zone, with full, numeric, and single-part formats.
 * @customElement auro-datetime
 *
 * @slot pre - Content shown before the date or time, such as "Departs". The element doesn't currently let content sit right against the date or time: this content, or text right before the element, always shows with a space between it and the date or time. {@category ui}
 * @slot post - Content shown after the date or time, such as "local time". The element doesn't currently let content sit right against the date or time: this content, or text right after the element, always shows with a space between them, so a period or comma can't follow the date or time directly. {@category ui}
 * @slot - Content shown after the `post` slot's content, such as the end of a sentence that includes the date. {@category ui}
 */

export class AuroDatetime extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  /**
   * Sets the element's default values.
   * @private
   * @returns {void}
   */
  _initializeDefaults() {
    this.weekday = "short";
    this.month = "short";
    this.locale = "en-US";

    /**
     * Tracks invalid locale inputs already warned about, so a parent that
     * re-renders with the same bad value doesn't flood the console.
     * @private
     */
    this._warnedLocales = new Set();

    /**
     * Tracks invalid `timezone` values this element has already warned
     * about, so the same bad value logs only one warning.
     * @private
     */
    this._warnedTimeZones = new Set();

    /**
     * Tracks invalid `value` inputs this element has already warned about,
     * so the same bad value logs only one warning.
     * @private
     */
    this._warnedValues = new Set();

    /**
     * @private
     */
    this._effectiveLocale = this._resolveLocale(this.locale);

    /**
     * @private
     */
    this._effectiveTimeZone = this._resolveTimeZone(this.timezone);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  /**
   * Checks a BCP 47 locale tag and returns its canonical form. Empty or invalid
   * input falls back to `en-US`. Each invalid value logs a console warning the
   * first time this element sees it.
   *
   * @private
   * @param {string} input - The locale tag set on the element.
   * @returns {string} The canonical locale tag, such as `en-GB`, or `en-US` for empty or invalid input.
   */
  _resolveLocale(input) {
    if (!input) {
      return "en-US";
    }
    try {
      return Intl.getCanonicalLocales(input)[0];
    } catch {
      if (this._warnedLocales && !this._warnedLocales.has(input)) {
        this._warnedLocales.add(input);
        console.warn(
          `auro-datetime: "${input}" is not a valid BCP 47 locale tag. Falling back to \`en-US\`.`,
        );
      }
      return "en-US";
    }
  }

  /**
   * Checks an IANA time zone name. An invalid name logs a console warning
   * the first time this element sees it and returns `undefined`, so the
   * element acts as if `timezone` isn't set.
   *
   * @private
   * @param {string | undefined} input - The time zone name set on the element.
   * @returns {string | undefined} The time zone name if it's valid; otherwise, `undefined`.
   */
  _resolveTimeZone(input) {
    if (!input) {
      return undefined;
    }
    try {
      // Creating the formatter is enough to catch an invalid name. Without
      // this check, a typo such as "America/Los_Angles" makes
      // Intl.DateTimeFormat and toLocaleString throw a RangeError at render
      // time.
      new Intl.DateTimeFormat(undefined, { timeZone: input });
      return input;
    } catch {
      if (this._warnedTimeZones && !this._warnedTimeZones.has(input)) {
        this._warnedTimeZones.add(input);
        console.warn(
          `auro-datetime: "${input}" is not a valid IANA timezone. Ignoring it.`,
        );
      }
      return undefined;
    }
  }

  static get properties() {
    return {
      /**
       * Sets the language and region used to format the date or time, such as `en-GB`, `de-DE`, or `ja-JP` (a BCP 47 language tag). It changes month and weekday names, separators, and whether times use a 12- or 24-hour clock, but not the time zone. A malformed tag logs a console warning and falls back to `en-US`; a well-formed tag the browser doesn't support, such as `zz-ZZ`, uses the browser's default language instead, with no warning.
       * @type {string}
       * @default "en-US"
       * @category ui
       */
      locale: { type: String },

      /**
       * Sets how the month name is written: `short`, such as "Jul", or `long`, such as "July". It applies to the full date and to `type="month"`.
       * @type {"short" | "long"}
       * @default "short"
       * @category ui
       */
      month: { type: String },

      /**
       * Sets the time zone to show the date or time in, such as `America/Los_Angeles` or `UTC` (an IANA time zone name). When `value` has an offset or `Z`, the element converts that moment into this zone; when it has none, the element reads `value` as a time already in this zone. Without it, or with an invalid name, which logs a console warning, the element shows the date and time in `value` as written, or the current date and time in the viewer's own time zone when `value` isn't set.
       * @type {string}
       * @category behavior
       */
      timezone: { type: String },

      /**
       * Sets which part of the date or time to show: `date` for the full date, such as "Thu, Jul 14, 2022", `numeric` for a numeric date, such as "7/14/2022", `time` for the hour and minute, such as "8:00 am", or `year`, `month`, `weekday`, or `day` for that part alone. Without it, or with any other value, the element shows the full date.
       * @type {"date" | "time" | "year" | "month" | "weekday" | "day" | "numeric"}
       * @category ui
       */
      type: { type: String },

      /**
       * Sets the date or time to show, as a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and fractional seconds and an optional `Z` or `±HH:MM` offset, such as `2022-07-14`, `2022-07-14T08:00:00`, or `2022-07-14T08:00:00-07:00`. Without it, the element shows the current date and time from when it last rendered; it doesn't currently update as time passes. Invalid input, including an empty value or another ISO 8601 form, such as `20220714` or a `+0700` offset, logs a console warning and shows nothing.
       * @type {string}
       * @category behavior
       */
      value: { type: String },

      /**
       * Sets how the weekday name is written: `short`, such as "Thu", or `long`, such as "Thursday". It applies to the full date and to `type="weekday"`.
       * @type {"short" | "long"}
       * @default "short"
       * @category ui
       */
      weekday: { type: String },
    };
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run more than one version of the element on the same page. If the tag name is already registered, it does nothing.
   * @param {string} [name="auro-datetime"] - The tag name to register the element under, such as `custom-datetime`.
   * @returns {void}
   *
   * @example
   * AuroDatetime.register("custom-datetime"); // registers <custom-datetime>
   */
  static register(name = "auro-datetime") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDatetime);
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("locale")) {
      this._effectiveLocale = this._resolveLocale(this.locale);
    }
    if (changedProperties.has("timezone")) {
      this._effectiveTimeZone = this._resolveTimeZone(this.timezone);
    }
  }

  firstUpdated() {
    // Adds the tag name as an attribute when it differs from auro-datetime.
    this.runtimeUtils.handleComponentTagRename(this, "auro-datetime");
  }

  /**
   * Gets the time zone's offset from UTC at a moment, in milliseconds, such as `-14400000` for New York in summer.
   *
   * @private
   * @param {number} utcMs - The moment, in milliseconds since the epoch.
   * @param {string} timeZone - The IANA time zone name, such as `America/New_York`.
   * @returns {number} The offset in milliseconds: the zone's wall-clock time, read as UTC, minus the moment.
   */
  _zoneOffsetMs(utcMs, timeZone) {
    // formatToParts drops milliseconds, so compare whole seconds.
    const wholeSeconds = Math.floor(utcMs / 1000) * 1000;
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).formatToParts(wholeSeconds);
    const lookup = Object.fromEntries(
      parts.filter((p) => p.type !== "literal").map((p) => [p.type, p.value]),
    );
    const wallClockAsUtc = Date.UTC(
      Number(lookup.year),
      Number(lookup.month) - 1,
      Number(lookup.day),
      Number(lookup.hour),
      Number(lookup.minute),
      Number(lookup.second),
    );
    return wallClockAsUtc - wholeSeconds;
  }

  /**
   * Creates a Date that shows the given wall-clock time when displayed in
   * the given IANA time zone. `_resolveInputDate` uses it when `value` has
   * no offset and `timezone` is set, so the time is read as already being
   * in that zone rather than the viewer's.
   *
   * On a daylight saving change, a time the clocks skip moves forward by
   * the gap, and a time the clocks repeat resolves to its first occurrence.
   * This is the same rule JavaScript uses for local times.
   *
   * @private
   * @param {string} localISO - The ISO 8601 date-time with no offset, such as `2022-07-14T08:00:00`.
   * @param {string} timeZone - The IANA time zone name, such as `America/New_York`.
   * @returns {Date} The moment that reads as `localISO` in `timeZone`.
   */
  _zonedWallClockToUtc(localISO, timeZone) {
    const DAY_MS = 86400000;
    // The wall-clock time read as if it were UTC.
    const naiveMs = new Date(`${localISO}Z`).getTime();

    // A zone's offset changes at most once within a couple of days, so the
    // offsets a day before and a day after cover both sides of any change
    // near this date. Keep each candidate moment that really reads as the
    // wall-clock time in the zone.
    const offsetBefore = this._zoneOffsetMs(naiveMs - DAY_MS, timeZone);
    const offsetAfter = this._zoneOffsetMs(naiveMs + DAY_MS, timeZone);
    const matches = [naiveMs - offsetBefore, naiveMs - offsetAfter]
      .filter((ms) => ms + this._zoneOffsetMs(ms, timeZone) === naiveMs)
      .sort((a, b) => a - b);

    if (matches.length > 0) {
      // One match for ordinary times; two for a repeated time, where the
      // first occurrence wins.
      return new Date(matches[0]);
    }

    // No match: the clocks skip this time. Reading it with the offset from
    // before the change moves it forward by the gap.
    return new Date(naiveMs - offsetBefore);
  }

  /**
   * Gets the Date to show and the `timeZone` option for `Intl.DateTimeFormat`,
   * from `value` and `timezone`. Returns `{ date: null }` for invalid input,
   * including an empty string.
   *
   * @private
   * @returns {{ date: Date | null, timeZoneOption: string | undefined }} The Date to show, or `null` for invalid input, and the `timeZone` option to format it with.
   */
  _resolveInputDate() {
    // How each case resolves:
    // - `value` not set (null or undefined): the current date and time, in
    //   `timezone` if it's set.
    // - `value` invalid, including an empty string: logs a warning and
    //   returns { date: null }. An empty string isn't the same as not set:
    //   Lit gives value="" as an empty string, which isn't valid ISO 8601,
    //   so it's reported as a likely mistake instead of showing the
    //   current date.
    // - `timezone` set and `value` has an offset or Z: reads `value` as an
    //   exact moment and has toLocaleString convert it into `timezone`.
    // - `timezone` set and `value` has no offset: reads `value` as a time
    //   already in `timezone`, so every viewer sees it as written.
    // - `timezone` not set: drops any offset or Z and reads the rest as
    //   local time, so it shows as written.
    const resolvedTz = this._effectiveTimeZone;

    // Only true "omitted" inputs (null/undefined) get the current-date
    // treatment. Empty string falls through to ISO validation, which
    // fails and produces the documented warning and empty output.
    if (this.value == null) {
      return { date: new Date(), timeZoneOption: resolvedTz };
    }

    const match = this.value.match(ISO_8601_REGEX);
    if (!match) {
      if (!this._warnedValues.has(this.value)) {
        this._warnedValues.add(this.value);
        console.warn(
          `auro-datetime: "${this.value}" is not a valid ISO 8601 string.`,
        );
      }
      return { date: null, timeZoneOption: undefined };
    }

    const localPart = match[1];
    const hasOffset = Boolean(match[2]);

    // The regex permits an offset/Z suffix on a bare date (such as "2020-09-22Z"
    // or "2020-09-22-07:00"). Those forms are not valid ISO 8601: an offset
    // is only meaningful with a time component, and the wall-clock branch
    // would silently drop the offset, producing surprising output. Reject
    // them up front so the consumer sees a warning.
    if (hasOffset && !localPart.includes("T")) {
      if (!this._warnedValues.has(this.value)) {
        this._warnedValues.add(this.value);
        console.warn(
          `auro-datetime: "${this.value}" is not a valid ISO 8601 string (offset/Z requires a time component).`,
        );
      }
      return { date: null, timeZoneOption: undefined };
    }

    const normalized = localPart.includes("T")
      ? localPart
      : `${localPart}T00:00:00`;

    // The regex only validates string shape, not value ranges: "2022-99-99"
    // matches but produces an Invalid Date. Detect that and treat it like
    // any other malformed input so render falls back to the documented
    // empty output instead of "Invalid Date" or a thrown RangeError from
    // downstream Intl calls.
    const buildDate = () => {
      if (resolvedTz && !hasOffset) {
        return this._zonedWallClockToUtc(normalized, resolvedTz);
      }
      if (resolvedTz && hasOffset) {
        return new Date(this.value);
      }
      // Wall-clock: keep the components in the input verbatim. JS parses
      // bare "YYYY-MM-DD" as UTC midnight, which shifts the date in the
      // viewer's timezone; appending a time forces local-time parsing.
      return new Date(normalized);
    };

    const date = buildDate();
    if (Number.isNaN(date.getTime())) {
      if (!this._warnedValues.has(this.value)) {
        this._warnedValues.add(this.value);
        console.warn(
          `auro-datetime: "${this.value}" is not a valid ISO 8601 date.`,
        );
      }
      return { date: null, timeZoneOption: undefined };
    }

    return { date, timeZoneOption: resolvedTz };
  }

  /**
   * Formats the full date, such as "Thu, Jul 14, 2022", with the current `month` and `weekday` settings.
   * @private
   * @returns {string} The formatted date, or an empty string when `value` is invalid.
   */
  humanDate() {
    const { date, timeZoneOption } = this._resolveInputDate();
    if (!date) {
      return "";
    }
    // Read month and weekday on every render so later changes show up.
    const template = {
      weekday: this.weekday || "short",
      year: "numeric",
      month: this.month || "short",
      day: "numeric",
    };
    if (timeZoneOption) {
      template.timeZone = timeZoneOption;
    }
    return date.toLocaleString(this._effectiveLocale, template);
  }

  /**
   * Formats the single date part that `type` names: the year, month, weekday, or day.
   * @private
   * @returns {string} The formatted date, or an empty string when `value` is invalid.
   */
  humanDateConversion() {
    const { date, timeZoneOption } = this._resolveInputDate();
    if (!date) {
      return "";
    }
    const template = {};
    if (timeZoneOption) {
      template.timeZone = timeZoneOption;
    }

    switch (this.type) {
      case "day":
        template.day = "numeric";
        break;
      case "month":
        template.month = this.month || "short";
        break;
      case "year":
        template.year = "numeric";
        break;
      case "weekday":
        template.weekday = this.weekday || "short";
        break;
      default:
        break;
    }

    return date.toLocaleString(this._effectiveLocale, template);
  }

  /**
   * Formats the date in numbers, in the order and with the separators `locale` uses, such as "7/14/2022" for `en-US`.
   * @private
   * @returns {string} The formatted date, or an empty string when `value` is invalid.
   */
  numericDate() {
    const { date, timeZoneOption } = this._resolveInputDate();
    if (!date) {
      return "";
    }
    const template = { year: "numeric", month: "numeric", day: "numeric" };
    if (timeZoneOption) {
      template.timeZone = timeZoneOption;
    }
    return date.toLocaleString(this._effectiveLocale, template);
  }

  /**
   * Formats the hour and minute. When the time ends in AM or PM, it lowercases the period and drops a leading zero.
   * @private
   * @returns {string} The formatted time, or an empty string when `value` is invalid.
   */
  humanTime() {
    const { date, timeZoneOption } = this._resolveInputDate();
    if (!date) {
      return "";
    }
    const template = { hour: "2-digit", minute: "2-digit" };
    if (timeZoneOption) {
      template.timeZone = timeZoneOption;
    }

    const formatted = date.toLocaleString(this._effectiveLocale, template);

    // Detect a 12-hour rendered output by the presence of a Latin-script
    // period marker. The pattern matches `am`, `pm`, `a.m.`, `p.m.`
    // (case-insensitive), so it catches en-US (`PM`), en-AU/hi-IN (`pm`),
    // and en-CA/es-MX (`p.m.`) alike. Non-Latin period markers (ko `오후`,
    // ar `م`, zh-TW `下午`) have no ASCII a/p+m chars and correctly fall
    // through unchanged. 24h locales (en-GB, de-DE, fr-FR, ja-JP, and
    // others) also fall through, preserving their leading zeros.
    if (!/[ap]\.?m\.?/iu.test(formatted)) {
      return formatted;
    }

    return formatted.replace(/^0+/u, "").toLowerCase();
  }

  /**
   * Gets the text to show for the current `type`.
   * @private
   * @returns {string} The formatted text; the full date when `type` isn't set or isn't recognized.
   */
  whichDate() {
    switch (this.type) {
      case "date":
        return this.humanDate();
      case "time":
        return this.humanTime();
      case "year":
      case "month":
      case "weekday":
      case "day":
        return this.humanDateConversion();
      case "numeric":
        return this.numericDate();
      default:
        return this.humanDate();
    }
  }

  render() {
    return html`
      <slot name="pre"></slot>
      <span class="yield">${this.whichDate()}</span>
      <slot name="post"></slot>
      <slot></slot>
    `;
  }
}
