
import { AuroDatetime } from '../../src/auro-datetime.js';

/**
 * The auro-datetime custom element is for the purposes of providing an easy to use date and time API.
 */
class AuroDatetimeWCA extends AuroDatetime {}

if (!customElements.get("auro-datetime")) {
  customElements.define("auro-datetime", AuroDatetimeWCA);
}
