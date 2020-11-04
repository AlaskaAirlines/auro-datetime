import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-datetime.js';

describe('auro-datetime', () => {
  it('sets the CSS class on auro-datetime > div element', async () => {
    const el = await fixture(html`
      <auro-datetime cssclass="testClass"></auro-datetime>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-datetime is accessible', async () => {
    const el = await fixture(html`
      <auro-datetime cssclass="testClass"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-datetime custom element is defined', async () => {
    const el = await !!customElements.get("auro-datetime");

    await expect(el).to.be.true;
  });
});
