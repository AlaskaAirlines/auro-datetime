import { AuroDatetime } from './src/auro-datetime.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-datetime') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroDatetime {});
  }
}

export { registerComponent }
