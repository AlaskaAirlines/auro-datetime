// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { html, LitElement } from "lit";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-datetime` element is for the purposes of providing an easy to use date and time API.
 * @customElement auro-datetime
 *
 * @slot pre - Content that comes before the `post` content
 * @slot post - Content that comes after the `pre` content
 */

// build the component class
export class AuroDatetime extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.weekday = "short";
    this.month = "short";
    this.locale = "en-US";

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  connectedCallback() {
    super.connectedCallback();

    this.dateTemplate = {
      weekday: this.weekday,
      year: "numeric",
      month: this.month,
      day: "numeric",
    };

    this.timeTemplate = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: this.timeZone,
    };

    this.template = {};
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,

      /**
       * Capitalize AM or PM designation
       */
      cap: { type: Boolean },

      /**
       * BCP 47 language tag for locale-aware date/time formatting (e.g. 'en-GB', 'de-DE', 'ja-JP').
       * @type {string}
       * @default 'en-US'
       */
      locale: { type: String },

      /**
       * Defines format of month
       * @type {'short' | 'long'}
       * @default 'short'
       */
      month: { type: String },

      /**
       * Pass in string to set date
       */
      setDate: { type: String },

      /**
       * Pass in string to define [timeZone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
       */
      timeZone: { type: String },

      /**
       * Defines type of data to render
       * @type {'date' | 'time' | 'year' | 'month' | 'weekday' | 'day' | 'numeric' | 'tzDate' | 'tzTime'}
       */
      type: { type: String },

      /**
       * Pass in ISO 8601 UTC formatted time code
       */
      utc: { type: String },

      /**
       * Defines format of weekday
       * @type {'short' | 'long'}
       * @default 'short'
       */
      weekday: { type: String },
    };
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-datetime"] - The name of the element that you want to register.
   *
   * @example
   * AuroDatetime.register("custom-datetime") // this will register this element to <custom-datetime/>
   *
   */
  static register(name = "auro-datetime") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDatetime);
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("locale")) {
      if (!this.locale) {
        this.locale = "en-US";
      } else {
        try {
          Intl.getCanonicalLocales(this.locale);
        } catch {
          console.warn(`auro-datetime: "${this.locale}" is not a valid BCP 47 locale tag. Falling back to "en-US".`);
          this.locale = "en-US";
        }
      }
    }
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-datetime");
  }

  /**
   * Internal function generate date string.
   * @private
   * @returns {string} - Date string.
   */
  humanDate() {
    let newDate = new Date();

    if (this.utc) {
      this.dateTemplate.timeZone = "UTC";
      newDate = new Date(this.utc);
    } else if (this.setDate) {
      newDate = new Date(this.setDate);
    }

    return newDate.toLocaleString(this.locale, this.dateTemplate);
  }

  /**
   * Internal function to determine new Date object based on input type.
   * @private
   * @returns {string} - Date string.
   */
  humanDateConversion() {
    let newDate = new Date();

    if (this.utc) {
      this.template.timeZone = "UTC";
      newDate = new Date(this.utc);
    } else if (this.setDate) {
      newDate = new Date(this.setDate);
    }

    switch (this.type) {
      case "day":
        this.template.day = "numeric";
        break;
      case "month":
        this.template.month = this.month;
        break;
      case "year":
        this.template.year = "numeric";
        break;
      case "weekday":
        this.template.weekday = this.weekday;
        break;

      default:
        this.template.weekday = this.template;
    }

    return newDate.toLocaleString(this.locale, this.template);
  }

  /**
   * Internal function generate numeric date string 00/00/0000.
   * @private
   * @returns {string} - Date string.
   */
  numericDate() {
    this.dateTemplate.month = "numeric";
    Reflect.deleteProperty(this.dateTemplate, "weekday");
    let newDate = new Date();

    if (this.utc) {
      this.dateTemplate.timeZone = "UTC";
      newDate = new Date(this.utc);
    } else if (this.setDate) {
      newDate = new Date(this.setDate);
    }

    return newDate.toLocaleString(this.locale, this.dateTemplate);
  }

  /**
   * Internal function generate standard time string.
   * @private
   * @returns {string} - Time string.
   */
  humanTime() {
    let newTime = new Date();

    if (this.utc) {
      this.timeTemplate.timeZone = "UTC";
      newTime = new Date(this.utc);
    } else if (this.setDate) {
      newTime = new Date(this.setDate);
    }

    if (this.cap) {
      return newTime
        .toLocaleString(this.locale, this.timeTemplate)
        .replace(/^0+/u, "");
    }

    return newTime
      .toLocaleString(this.locale, this.timeTemplate)
      .replace(/^0+/u, "")
      .toLowerCase();
  }

  /**
   * Internal function to generate proper time zone local.
   * @private
   * @returns {string} - Date/Time zone string.
   * @param {string} template - Determines which template model to use.
   */
  tzTime(template) {
    const scrubNumber = -6;
    const scrubTimeZone = this.setDate.slice(0, scrubNumber);
    const newDateTime = new Date(scrubTimeZone);

    if (this.cap) {
      return newDateTime.toLocaleString(this.locale, template).replace(/^0+/u, "");
    }

    return newDateTime
      .toLocaleString(this.locale, template)
      .replace(/^0+/u, "")
      .replace("AM", "am")
      .replace("PM", "pm");
  }
 
  /**
   * Internal function UI decision.
   * @private
   * @returns {function} - Function determines which style of date data to show.
   */
  whichDate() {
    let result = "";

    switch (this.type) {
      case "date":
        result = this.humanDate();
        break;
      case "tzDate":
        result = this.tzTime(this.dateTemplate);
        break;
      case "tzTime":
        result = this.tzTime(this.timeTemplate);
        break;
      case "time":
        result = this.humanTime();
        break;
      case "year":
      case "month":
      case "weekday":
      case "day":
        result = this.humanDateConversion();
        break;
      case "numeric":
        result = this.numericDate();
        break;
      default:
        this.humanDate();
    }

    if (this.setDate && !this.type) {
      return this.humanDate();
    }
    if (this.utc && !this.type) {
      return this.humanDate();
    }

    return result;
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
