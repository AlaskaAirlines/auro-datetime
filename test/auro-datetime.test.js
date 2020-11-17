import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-datetime.js';

describe('auro-datetime', () => {
  it('auro-datetime is accessible', async () => {
    const el = await fixture(html`
      <auro-datetime></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date converts UTC date', async () => {
    const el = await fixture(html`
      <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Tue, Sep 22, 2020`);
  });

  it('auro-date converts UTC time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`1:38 am`);
  });

  it('auro-date converts UTC month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" utc="1920-04-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`April`);
  });

  it('auro-date converts string month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" setdate="July 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`July`);
  });

  it('auro-date converts UTC numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`9/22/2020`);
  });

  it('auro-date converts manual date', async () => {
    const el = await fixture(html`
      <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Tue, Aug 19, 1975`);
  });

  it('auro-date converts manual numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8/19/1975`);
  });

  it('auro-date converts manual time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`11:15 pm`);
  });

  it('auro-date converts time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date only day', async () => {
    const el = await fixture(html`
      <auro-datetime type="day"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date only year', async () => {
    const el = await fixture(html`
      <auro-datetime type="year"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date only month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date only weekday', async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-date shows todays date', async () => {
    const el = await fixture(html`
      <auro-datetime type="date"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-datetime custom element is defined', async () => {
    const el = await !!customElements.get("auro-datetime");

    await expect(el).to.be.true;
  });
});
