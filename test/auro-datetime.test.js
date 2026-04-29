import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-datetime", () => {
  it("auro-datetime is accessible", async () => {
    const el = await fixture(html`
      <auro-datetime></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("baseline test: converts numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("baseline test: converts time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("converts UTC date", async () => {
    const el = await fixture(html`
      <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Tue, Sep 22, 2020");
  });

  it("Shows PM", async () => {
    const el = await fixture(html`
      <auro-datetime cap type="tzTime" setDate="2022-07-14T14:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2:00 PM");
  });

  // ------------------------------

  it("converts setDate to Hawaii TIME in time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts setDate to Hawaii DATE in time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzDate" setDate="2022-07-14T08:00:00-10:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Thu, Jul 14, 2022");
  });

  it("converts setDate to Pacific time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-07:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts setDate to Alaska time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-08:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts setDate to Central time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-05:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts setDate to Mountain time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-06:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts setDate to Eastern time zone", async () => {
    const el = await fixture(html`
      <auro-datetime type="tzTime" setDate="2022-07-14T08:00:00-04:00"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8:00 am");
  });

  it("converts UTC time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("1:38 am");
  });

  it("converts UTC month", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" utc="1920-04-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("April");
  });

  it("converts string month", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" setdate="July 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("July");
  });

  it("converts UTC numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("9/22/2020");
  });

  it("converts manual date", async () => {
    const el = await fixture(html`
      <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Tue, Aug 19, 1975");
  });

  it("converts manual numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("8/19/1975");
  });

  it("converts manual time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("11:15 pm");
  });

  it("converts time", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("9:35 pm");
  });

  it("only year", async () => {
    const el = await fixture(html`
      <auro-datetime type="year" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2022");
  });

  it("only month", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" setDate="2022-07-13T21:35:00-07:00" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Jul");
  });

  it("shows todays date", async () => {
    const el = await fixture(html`
      <auro-datetime type="date"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("only weekday", async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
  });

  it("custom element is defined", async () => {
    const el = await !!customElements.get("auro-datetime");

    await expect(el).to.be.true;
  });

  // locale (Intl) tests

  it("applies en-US as the default locale when no locale attribute is set", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    await expect(el.locale).to.equal("en-US");
  });

  it("formats numeric date in en-GB locale (DD/MM/YYYY)", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" locale="en-GB" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("22/09/2020");
  });

  it("formats long month name in fr-FR locale", async () => {
    const el = await fixture(html`
      <auro-datetime type="month" month="long" locale="fr-FR" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("septembre");
  });

  it("formats time in fr-FR locale (24-hour, no AM/PM)", async () => {
    const el = await fixture(html`
      <auro-datetime type="time" locale="fr-FR" setdate="August 19, 1975 23:15:30"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("23:15");
  });

  it("formats date in de-DE locale and is accessible", async () => {
    const el = await fixture(html`
      <auro-datetime type="date" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    await expect(el).to.be.accessible();
    const root = el.shadowRoot.querySelector(".yield");
    const expected = new Date("2020-09-22T01:38:22Z").toLocaleString("de-DE", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
    await expect(root.textContent).to.equal(expected);
  });

  it("locale does not affect non-date types like year", async () => {
    const el = await fixture(html`
      <auro-datetime type="year" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("2020");
  });

  it("only day", async () => {
    const el = await fixture(html`
      <auro-datetime type="day" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("13");
  });

  it("numeric date", async () => {
    const el = await fixture(html`
      <auro-datetime type="numeric" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("7/13/2022");
  });

  it("only weekday", async () => {
    const el = await fixture(html`
      <auro-datetime type="weekday" setDate="2022-07-13T21:35:00Z" timezone="US/Pacific"></auro-datetime>
    `);

    const root = el.shadowRoot.querySelector(".yield");
    await expect(root.textContent).to.equal("Wed");
  });
});
