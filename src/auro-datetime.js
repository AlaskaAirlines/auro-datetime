// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';

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

  /**
   * @private Internal function generate date string
   * @returns {string} - date string
   */
  humanDate() {
    let newDate = new Date();

    if (this.utc) {
      this.dateTemplate.timeZone = 'UTC';
      newDate = new Date(this.utc);

    } else if (this.setDate) {
      newDate = new Date(this.setDate);

    }

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function to determine new Date object based on input type
   * @returns {string} - date string
   */
  humanDateConversion() {
    let newDate = new Date();

    if (this.utc) {
      this.template.timeZone = 'UTC';
      newDate = new Date(this.utc);
    } else if (this.setDate) {
      newDate = new Date(this.setDate);
    }

    switch (this.type) {
      case 'day':
        this.template.day = "numeric";

        return newDate.toLocaleString('en-us', this.template);
      case 'month':
        this.template.month = this.month;

        return newDate.toLocaleString('en-us', this.template);
      case 'year':
        this.template.year = 'numeric';

        return newDate.toLocaleString('en-us', this.template);
      case 'weekday':
        this.template.weekday = this.weekday;

        return newDate.toLocaleString('en-us', this.template);

      default: newDate.toLocaleString('en-us', this.template);
    }

    return null;
  }

  /**
   * @private Internal function generate numeric date string 00/00/0000
   * @returns {string} - date string
   */
  numericDate() {
    this.dateTemplate.month = 'numeric';
    Reflect.deleteProperty(this.dateTemplate, 'weekday');
    let newDate = new Date();

    if (this.utc) {
      this.dateTemplate.timeZone = 'UTC';
      newDate = new Date(this.utc);

      return newDate.toLocaleString('en-us', this.dateTemplate);
    } else if (this.setDate) {
      newDate = new Date(this.setDate);

      return newDate.toLocaleString('en-us', this.dateTemplate);
    }

    return newDate.toLocaleString('en-us', this.dateTemplate);
  }

  /**
   * @private Internal function generate standard time string
   * @returns {string} - time string
   */
  humanTime() {
    let newTime = new Date();

    if (this.utc) {
      this.timeTemplate.timeZone = 'UTC';
      newTime = new Date(this.utc);
    } else if (this.setDate) {
      newTime = new Date(this.setDate);
    }

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
      case 'month':
      case 'weekday':
      case 'day':
        result = this.humanDateConversion();
        break;
      case 'numeric':
        result = this.numericDate();
        break;
      default: this.humanDate();
    }

    if (this.setDate && !this.type) {
      return this.humanDate();
    } else if (this.utc && !this.type) {
      return this.humanDate();
    }

    return result
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

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-datetime")) {
  customElements.define("auro-datetime", AuroDatetime);
}
