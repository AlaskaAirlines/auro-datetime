// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { html, LitElement } from "lit";

const ISO_8601_REGEX =
  /^(\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?)(Z|[+-]\d{2}:\d{2})?$/u;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows a date or time as text, formatted for the reader's language and, optionally, a specific time zone.
 *
 * **Key capabilities**
 * - **What to show**: `type` picks the full date, the time, a numeric date, or a single part such as the year or weekday.
 * - **Any moment**: `value` takes an ISO 8601 date or date-time; without it, the element shows today's date.
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
 * @slot pre - Content shown before the date or time, such as "Departs". {@category ui}
 * @slot post - Content shown after the date or time, such as "local time". {@category ui}
 * @slot - Content shown after the `post` slot's content. Use `post` instead when you can, so the order is clear in the markup. {@category ui}
 */

// build the component class
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
     * Tracks invalid timeZone inputs already warned about. Same dedup
     * pattern as `_warnedLocales`.
     * @private
     */
    this._warnedTimeZones = new Set();

    /**
     * Tracks invalid value inputs already warned about. Same dedup
     * pattern as `_warnedLocales`.
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
   * Validate and canonicalize a BCP 47 locale tag. Falls back to "en-US"
   * for empty or invalid input. The first invalid value seen per element
   * is logged via `console.warn`; subsequent identical inputs are silent.
   *
   * @private
   * @param {string} input - User-supplied locale tag.
   * @returns {string} Canonical locale tag (e.g. "en-GB"), or "en-US" on fallback.
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
          `auro-datetime: "${input}" is not a valid BCP 47 locale tag. Falling back to "en-US".`,
        );
      }
      return "en-US";
    }
  }

  /**
   * Validate an IANA timezone identifier. Invalid input warns once per
   * unique value per element and resolves to `undefined`, which makes
   * the rest of `_resolveInputDate` behave as if `timezone` was never
   * specified — i.e. wall-clock display from the input components.
   *
   * Without this guard, a typo like `"US/Pacfic"` would cause
   * `Intl.DateTimeFormat` / `toLocaleString` to throw `RangeError` at
   * render time and crash the component.
   *
   * Note: when `value` is also unset, the wall-clock branch resolves to
   * "today's date in the viewer's machine zone," which is viewer-
   * dependent. This narrow case is the only scenario where two viewers
   * see different output for the same component; the warning surfaces
   * the typo so the developer can fix it.
   *
   * @private
   * @param {string | undefined} input - Consumer-supplied timezone.
   * @returns {string | undefined} Valid timezone, or undefined on fallback.
   */
  _resolveTimeZone(input) {
    if (!input) {
      return undefined;
    }
    try {
      // Constructing the formatter is enough to surface a RangeError;
      // we don't need to format anything yet.
      new Intl.DateTimeFormat(undefined, { timeZone: input });
      return input;
    } catch {
      if (this._warnedTimeZones && !this._warnedTimeZones.has(input)) {
        this._warnedTimeZones.add(input);
        console.warn(
          `auro-datetime: "${input}" is not a valid IANA timezone. Falling back to viewer-local.`,
        );
      }
      return undefined;
    }
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,

      /**
       * Sets the language and region used to format the date or time, such as `en-GB`, `de-DE`, or `ja-JP` (a BCP 47 language tag). It changes month and weekday names, separators, and whether times use a 12- or 24-hour clock, but not the time zone. An invalid tag logs a console warning and falls back to `en-US`.
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
       * Sets the time zone to show the date or time in, such as `America/Los_Angeles` or `UTC` (an IANA time zone name). When `value` has an offset or `Z`, the moment is converted into this zone; when it has none, `value` is read as a time already in this zone. Without it, the date and time in `value` are shown as written. An invalid name logs a console warning and is ignored.
       * @type {string}
       * @category behavior
       */
      timezone: { type: String },

      /**
       * Sets what to show. Use `date` for the full date, such as "Thu, Jul 14, 2022", `numeric` for a short numeric date, such as "7/14/2022", and `time` for the hour and minute, such as "8:00 am". Use `year`, `month`, `weekday`, or `day` to show only that part. Without it, or with any other value, the element shows the full date.
       * @type {"date" | "time" | "year" | "month" | "weekday" | "day" | "numeric"}
       * @category ui
       */
      type: { type: String },

      /**
       * Sets the date or time to show, as an ISO 8601 date or date-time, such as `2022-07-14`, `2022-07-14T08:00:00`, or `2022-07-14T08:00:00-07:00`. Without it, the element shows the current date and time from when it last rendered; it doesn't currently update as time passes. Invalid input, including an empty value, logs a console warning and shows nothing.
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
   * Registers the element with the browser under a tag name. Use a custom name to run more than one version of the element on the same page.
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
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-datetime");
  }

  /**
   * Construct a UTC Date that, when displayed in the given IANA timezone,
   * shows the supplied wall-clock components. Used when `value` has no
   * offset but `timeZone` is set — the wall-clock is interpreted as being
   * in the target zone rather than the viewer's local zone.
   *
   * Algorithm: parse the wall-clock as if it were UTC (a "naive" Date),
   * ask Intl what that moment looks like in the target zone, and use the
   * delta between the two to recover the true UTC moment.
   *
   * @private
   * @param {string} localISO - ISO string with no offset, e.g. "2022-07-14T08:00:00".
   * @param {string} timeZone - IANA zone, e.g. "US/Eastern".
   * @returns {Date}
   */
  _zonedWallClockToUtc(localISO, timeZone) {
    const naiveUtc = new Date(`${localISO}Z`);
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).formatToParts(naiveUtc);
    const lookup = Object.fromEntries(
      parts.filter((p) => p.type !== "literal").map((p) => [p.type, p.value]),
    );
    const seenInZone = new Date(
      `${lookup.year}-${lookup.month}-${lookup.day}T${lookup.hour}:${lookup.minute}:${lookup.second}Z`,
    );
    const offsetMs = naiveUtc.getTime() - seenInZone.getTime();
    return new Date(naiveUtc.getTime() + offsetMs);
  }

  /**
   * Resolve the `value` and `timezone` attributes into a Date and an optional
   * timeZone option for `Intl.DateTimeFormat`.
   *
   * Behavior:
   * - `value` omitted (null/undefined): returns today's date. `timezone`
   *   (if any) is honored.
   * - `value` invalid (including empty string ""): warns and returns
   *   `{ date: null }`. Empty is *not* the same as omitted — Lit reflects
   *   `value=""` as the empty string, which is not a valid ISO 8601
   *   form, so we surface it as a typo rather than silently rendering
   *   today's date.
   * - `timezone` set + input has offset/Z: parses as an absolute moment
   *   (offset honored) and asks `toLocaleString` to convert into the target zone.
   * - `timezone` set + input has no offset: interprets the wall-clock as
   *   being in the target zone, so display in that zone matches the input
   *   verbatim. This is viewer-independent.
   * - Default (no `timezone`): strips the offset/Z from the input and treats
   *   the remaining wall-clock components as local time, so they render verbatim.
   *
   * @private
   * @returns {{ date: Date | null, timeZoneOption: string | undefined }}
   */
  _resolveInputDate() {
    const resolvedTz = this._effectiveTimeZone;

    // Only true "omitted" inputs (null/undefined) get the today's-date
    // treatment. Empty string falls through to ISO validation, which will
    // fail and produce the documented warn + empty render.
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

    // The regex permits an offset/Z suffix on a bare date (e.g. "2020-09-22Z"
    // or "2020-09-22-07:00"). Those forms are not valid ISO 8601 — an offset
    // is only meaningful with a time component — and the wall-clock branch
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

    // The regex only validates string shape, not value ranges — "2022-99-99"
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
   * Internal function to generate full date string.
   * @private
   * @returns {string} - Date string.
   */
  humanDate() {
    const { date, timeZoneOption } = this._resolveInputDate();
    if (!date) {
      return "";
    }
    // Read month and weekday on every render so later changes show up.
    const template = {
      weekday: this.weekday,
      year: "numeric",
      month: this.month,
      day: "numeric",
    };
    if (timeZoneOption) {
      template.timeZone = timeZoneOption;
    }
    return date.toLocaleString(this._effectiveLocale, template);
  }

  /**
   * Internal function to format a single date part (year/month/weekday/day).
   * @private
   * @returns {string} - Date string.
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
        template.month = this.month;
        break;
      case "year":
        template.year = "numeric";
        break;
      case "weekday":
        template.weekday = this.weekday;
        break;
      default:
        break;
    }

    return date.toLocaleString(this._effectiveLocale, template);
  }

  /**
   * Internal function to generate numeric date string MM/DD/YYYY.
   * @private
   * @returns {string} - Date string.
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
   * Internal function to generate standard time string.
   * @private
   * @returns {string} - Time string.
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
    // through unchanged. 24h locales (en-GB, de-DE, fr-FR, ja-JP …) also
    // fall through, preserving their leading zeros.
    if (!/[ap]\.?m\.?/iu.test(formatted)) {
      return formatted;
    }

    return formatted.replace(/^0+/u, "").toLowerCase();
  }

  /**
   * Internal function UI decision.
   * @private
   * @returns {string} - String determined by `type` (or full date if no type set).
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

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <slot name="pre"></slot>
      <span class="yield">${this.whichDate()}</span>
      <slot name="post"></slot>
      <slot></slot>
    `;
  }
}
