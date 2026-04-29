<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-datetime

The `auro-datetime` element is for the purposes of providing an easy to use date and time API.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                                             | Default | Description                                                                                       |
| ---------- | ---------- | --------- | ------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------- |
| cap        | cap        |           | boolean                                                                                          |         | Capitalize AM or PM designation                                                                   |
| locale     | locale     |           | string                                                                                           | `en-US` | BCP 47 language tag for locale-aware date/time formatting (e.g. 'en-GB', 'de-DE', 'ja-JP').       |
| month      | month      |           | `short` \| `long`                                                                                | `short` | Defines format of month                                                                           |
| setDate    | setDate    |           | string                                                                                           |         | Pass in string to set date                                                                        |
| timeZone   | timeZone   |           | string                                                                                           |         | Pass in string to define [timeZone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| type       | type       |           | `date` \| `time` \| `year` \| `month` \| `weekday` \| `day` \| `numeric` \| `tzDate` \| `tzTime` |         | Defines type of data to render                                                                    |
| utc        | utc        |           | string                                                                                           |         | Pass in ISO 8601 UTC formatted time code                                                          |
| weekday    | weekday    |           | `short` \| `long`                                                                                | `short` | Defines format of weekday                                                                         |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name | Description                                  |
| ---- | -------------------------------------------- |
| post | Content that comes after the `pre` content   |
| pre  | Content that comes before the `post` content |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic Date

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-datetime type="date"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-datetime type="date"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Basic Time

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-time.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic-time.html -->
  <auro-datetime type="time"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-time.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic-time.html -->

```html
<auro-datetime type="time"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Time with Capitalization

Using the `cap` attribute will return the basic time string with a capitalized `AM` or `PM`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/cap.html) -->
  <!-- The below content is automatically added from ../apiExamples/cap.html -->
  <auro-datetime type="time" cap></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/cap.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/cap.html -->

```html
<auro-datetime type="time" cap></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### International Date Formatting

Use the `locale` attribute with a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) to render dates and times in non-North American formats. When omitted, the component defaults to `en-US` formatting.

#### Locale with type="date"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-date.html) -->
  <!-- The below content is automatically added from ../apiExamples/locale-date.html -->
  <auro-datetime type="date" locale="en-GB" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="date" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="date" locale="ja-JP" utc="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/locale-date.html -->

```html
<auro-datetime type="date" locale="en-GB" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="date" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="date" locale="ja-JP" utc="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Locale with type="numeric"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-numeric.html) -->
  <!-- The below content is automatically added from ../apiExamples/locale-numeric.html -->
  <auro-datetime type="numeric" locale="en-GB" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="numeric" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="numeric" locale="ja-JP" utc="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-numeric.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/locale-numeric.html -->

```html
<auro-datetime type="numeric" locale="en-GB" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="numeric" locale="de-DE" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="numeric" locale="ja-JP" utc="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Long Month and Weekday

Use the `month="long"` attribute to display the full month name, and `weekday="long"` to display the full weekday name.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/long.html) -->
  <!-- The below content is automatically added from ../apiExamples/long.html -->
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/long.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/long.html -->

```html
<auro-datetime type="date" month="long" weekday="long"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date/time with string

Use the `setDate` property to inject a specific date into the element and parse as needed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/set-date.html) -->
  <!-- The below content is automatically added from ../apiExamples/set-date.html -->
  <auro-datetime setDate="August 19, 1975 23:15:30"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" setDate="August 19, 1975 23:15:30"></auro-datetime><br>
  <auro-datetime type="time" setDate="August 19, 1975 23:15:30"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/set-date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/set-date.html -->

```html
<auro-datetime setDate="August 19, 1975 23:15:30"></auro-datetime><br>
<auro-datetime weekday="long" month="long" setDate="August 19, 1975 23:15:30"></auro-datetime><br>
<auro-datetime type="time" setDate="August 19, 1975 23:15:30"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Type

Use `type` to define the type of data to render. Options are `[date, time, year, month, weekday, day, numeric, tzDate, tzTime]`.

#### Numeric Date

Using the `auro-datetime` element with `type=numeric` will return the **current date** based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/numeric-date.html) -->
  <!-- The below content is automatically added from ../apiExamples/numeric-date.html -->
  <auro-datetime type="numeric"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/numeric-date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/numeric-date.html -->

```html
<auro-datetime type="numeric"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Set date with code +/- time zone

<auro-alert type="information">The <code>auro-datetime</code> element <strong>does not</strong> support local/time zone conversion. The scope of this element is to use current or specifically assigned date/time data and return a string for display.</auro-alert>
<br />
Use `type="tzTime"`or `type="tzDate"` with the `setDate` property to define a new date object in a specific time zone using the `YYYY-MM-DDTHH:MM:SS-HH:MM` model.

Example using `2022-07-13T21:35:00-07:00` with Pacific `(-07:00)` time zone during daylight saving time. (The offset is `(-06:00)` during standard time.)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plus-minus.html) -->
  <!-- The below content is automatically added from ../apiExamples/plus-minus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/plus-minus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date with UTC (Zulu) time code

<auro-alert type="information">Times are expressed in ISO 8601 date and time format in UTC (Coordinated Universal Time), with a special UTC designator ("Z").<br>
`YYYY-MM-DDTHH:MM:SSZ`</auro-alert>
<br />
Using the `utc` property, be sure to only use a properly-formatted UTC code.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/utc.html) -->
  <!-- The below content is automatically added from ../apiExamples/utc.html -->
  <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/utc.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/utc.html -->

```html
<auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Pre and Post Slots

This example demonstrates the use of the `pre` and `post` slots to customize the content before and after the datetime output.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/slots.html) -->
  <!-- The below content is automatically added from ../apiExamples/slots.html -->
  <auro-datetime type="year">
    <span slot="pre">In the year </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/slots.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/slots.html -->

```html
<auro-datetime type="year">
  <span slot="pre">In the year </span>
  <span slot="post">
    day<auro-datetime type="day"></auro-datetime>
    of <auro-datetime type="month" month="long"></auro-datetime>
  </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
</auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Example using Eastern Time Zone

Example using `2022-07-14T06:00:00-04:00` with Eastern `(-04:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/east-plus-minus.html) -->
  <!-- The below content is automatically added from ../apiExamples/east-plus-minus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-14T06:00:00-04:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-14T06:00:00-04:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/east-plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/east-plus-minus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-14T06:00:00-04:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-14T06:00:00-04:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Example using Hawaiian Time Zone

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaii-plus-minus.html) -->
  <!-- The below content is automatically added from ../apiExamples/hawaii-plus-minus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaii-plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/hawaii-plus-minus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
