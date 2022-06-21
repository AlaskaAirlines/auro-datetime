import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-datetime.js';

describe('auro-datetime', () => {
  it('auro-datetime is accessible', async () => {
    const el = await fixture(html`
      <auro-datetime></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('baseline test: converts numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('baseline test: converts time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('converts UTC date', async () => {
    const el = await fixture(html`
      <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Tue, Sep 22, 2020`);
  });

  // ------------------------------

  it('converts setDate to Hawaii TIME in time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });

  it('converts setDate to Hawaii DATE in time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzDate" setDate="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`thu, jul 14, 2022`);
  });

  it('converts setDate to Pacific time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-07:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });

  it('converts setDate to Alaska time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-08:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });

  it('converts setDate to Central time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-05:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });

  it('converts setDate to Mountain time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-06:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });

  it('converts setDate to Eastern time zone', async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-04:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8:00 am`);
  });


  it('converts UTC time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`1:38 am`);
  });

  it('converts UTC month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" utc="1920-04-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`April`);
  });

  it('converts string month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" setdate="July 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`July`);
  });

  it('converts UTC numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`9/22/2020`);
  });

  it('converts manual date', async () => {
    const el = await fixture(html`
      <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Tue, Aug 19, 1975`);
  });

  it('converts manual numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`8/19/1975`);
  });

  it('converts manual time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`11:15 pm`);
  });

  it('converts time', async () => {
    const el = await fixture(html`
      <auro-datetime type="time" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`9:35 pm`);
  });

  it('only year', async () => {
    const el = await fixture(html`
      <auro-datetime type="year" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`2022`);
  });

  it('only month', async () => {
    const el = await fixture(html`
      <auro-datetime type="month" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Jul`);
  });

  it('shows todays date', async () => {
    const el = await fixture(html`
      <auro-datetime type="date"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('only weekday', async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it('custom element is defined', async () => {
    const el = await !!customElements.get("auro-datetime");

    await expect(el).to.be.true;
  });

  it('only day', async () => {
    const el = await fixture(html`
      <auro-datetime type="day" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`13`);
  });

  it('numeric date', async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`7/13/2022`);
  });

  it('only weekday', async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector('.yield');
    await expect(root.textContent).to.equal(`Wed`);
  });
});
