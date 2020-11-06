// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-datetime provides users a way to ...
 *
 * @attr {String} type - Define type of data to render. Options are `[date, time, year, month, weekday, day, numeric]`
 * @attr {String} utc - Pass on UTC time code
 * @attr {String} weekday - Display long version of weekday. Option `[long]`
 * @attr {String} month - Display long version of month. Option `[long]`
 * @attr {String} timeZone - Pass in string to define timeZone
 * @attr {String} setDate - Pass in string to set date
 */

// build the component class
class AuroDatetime extends LitElement {
  constructor() {
    super();

    this.weekday = 'short';
    this.month = 'short';

    /**
     * @private variable
     */
    this.time = {
      hour: "2-digit",
      minute: "2-digit"
    };
  }

  connectedCallback() {
    super.connectedCallback()

    this.dateTemplate = {
      weekday: this.weekday,
      year: "numeric",
      month: this.month,
      day: "numeric"
    };

    this.timeTemplate = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: this.timeZone
    };

    this.template = {};
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      type:       { type: String },
      utc:        { type: String },
      weekday:    { type: String },
      month:      { type: String },
      timeZone:   { type: String },
      setDate:    { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private Internal function generate standard date string
   * @returns {string} - date string
   */
  humanDate() {
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function generate numeric date string
   * @returns {string} - date string
   */
  numericDate() {
    this.dateTemplate.month = 'numeric';
    Reflect.deleteProperty(this.dateTemplate, 'weekday');
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function generate month date string
   * @returns {string} - date string
   */
  humanDateMonth() {
    this.template.month = this.month;
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.template);
  }

  /**
   * @private Internal function generate year date string
   * @returns {string} - date string
   */
  humanDateYear() {
    this.template.year = 'numeric';
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.template);
  }

  /**
   * @private Internal function generate weekday date string
   * @returns {string} - date string
   */
  humanDateWeekday() {
    this.template.weekday = this.weekday;
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.template);
  }

  /**
   * @private Internal function generate day date string
   * @returns {string} - date string
   */
  humanDateDay() {
    this.template.day = "numeric";
    const newDate = new Date();

    return newDate.toLocaleString('en-us', this.template);
  }

  /**
   * @private Internal function generate standard date string from input data
   * @param {string} dateData - Input date data
   * @returns {string} - date string
   */
  setHumanDate(dateData) {
    const newDate = new Date(dateData);

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function generate standard date string from UTC data
   * @param {string} dateData - Input date data
   * @returns {string} - date string
   */
  humanZuluDate(dateData) {
    this.dateTemplate.timeZone = 'UTC';
    const newDate = new Date(dateData);

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function generate standard time string
   * @returns {string} - time string
   */
  humanTime() {

    if (this.utc) {
      this.timeTemplate.timeZone = 'UTC';
      const newTime = new Date(this.utc);

      return newTime.toLocaleString('en-us', this.timeTemplate).replace(/^0+/u, '').toLowerCase();
    } else if (this.setDate) {
      const newTime = new Date(this.setDate);

      return newTime.toLocaleString('en-us', this.timeTemplate).replace(/^0+/u, '').toLowerCase();
    }

    const newTime = new Date();

    return newTime.toLocaleString('en-us', this.timeTemplate).replace(/^0+/u, '').toLowerCase();
  }


  /**
   * @private Internal function UI decision
   * @returns {function} - function determines which style of date data to show2
   */
  whichDate() {
    let result = '';

    switch (this.type) {
      case 'date':
        result = this.humanDate();
        break;
      case 'time':
        result = this.humanTime();
        break;
      case 'year':
        result = this.humanDateYear();
        break;
      case 'month':
        result = this.humanDateMonth();
        break;
      case 'weekday':
        result = this.humanDateWeekday();
        break;
      case 'day':
        result = this.humanDateDay();
        break;
      case 'numeric':
        result = this.numericDate();
        break;
      default: this.humanDate();
    }

    if (this.setDate && !this.type) {
      return this.setHumanDate(this.setDate)
    }

    if (this.utc && !this.type) {
      return this.humanZuluDate(this.utc)
    }

    return result
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <slot name="pre"></slot>
      ${this.whichDate()}
      <slot name="post"></slot>
      <slot></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-datetime")) {
  customElements.define("auro-datetime", AuroDatetime);
}
