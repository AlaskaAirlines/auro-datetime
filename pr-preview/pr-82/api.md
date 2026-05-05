<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-datetime

The `auro-datetime` element is for the purposes of providing an easy to use date and time API.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                     | Default | Description                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------- | --------- | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| locale     | locale     |           | string                                                                   | `en-US` | BCP 47 language tag for locale-aware date/time formatting (e.g. 'en-GB', 'de-DE', 'ja-JP').                                                                                                                                                                                                                              |
| month      | month      |           | `short` \| `long`                                                        | `short` | Defines format of month                                                                                                                                                                                                                                                                                                  |
| timeZone   | timeZone   |           | string                                                                   |         | Pass in string to define [timeZone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br>When set, the moment described by `value` is converted into this IANA zone for display.<br>When unset, the wall-clock time from the input string is rendered as-is.                                                |
| type       | type       |           | `date` \| `time` \| `year` \| `month` \| `weekday` \| `day` \| `numeric` |         | Defines type of data to render                                                                                                                                                                                                                                                                                           |
| value      | value      |           | string                                                                   |         | ISO 8601 date or date-time string. Examples:<br>- `2022-07-14T08:00:00-07:00` (with offset)<br>- `2022-07-14T08:00:00Z` (UTC)<br>- `2022-07-14T08:00:00` (no offset)<br>- `2022-07-14` (date only)<br><br>When omitted, the component renders today's date.<br>Invalid input is logged as a warning and renders nothing. |
| weekday    | weekday    |           | `short` \| `long`                                                        | `short` | Defines format of weekday                                                                                                                                                                                                                                                                                                |

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

### International Date Formatting

Use the `locale` attribute with a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) to render dates and times in a specific locale (e.g. `en-GB`, `de-DE`, `ja-JP`). When omitted, the component defaults to `en-US` formatting. The `locale` attribute controls **output formatting only** (month names, separators, 12/24-hour clock); it does not perform timezone conversion. Invalid tags are logged as a warning and fall back to `en-US`.

#### Locale with type="date"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-date.html) -->
  <!-- The below content is automatically added from ../apiExamples/locale-date.html -->
  <auro-datetime type="date" locale="en-GB" value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="date" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="date" locale="ja-JP" value="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/locale-date.html -->

```html
<auro-datetime type="date" locale="en-GB" value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="date" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="date" locale="ja-JP" value="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Locale with type="numeric"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-numeric.html) -->
  <!-- The below content is automatically added from ../apiExamples/locale-numeric.html -->
  <auro-datetime type="numeric" locale="en-GB" value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="numeric" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="numeric" locale="ja-JP" value="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-numeric.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/locale-numeric.html -->

```html
<auro-datetime type="numeric" locale="en-GB" value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="numeric" locale="de-DE" value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="numeric" locale="ja-JP" value="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Locale with type="time"

Time is the most format-divergent type across locales. The examples below highlight four distinct patterns: 12-hour with a Latin am/pm suffix (`en-US`), 24-hour with no marker (`de-DE`), 12-hour with a Korean period prefix (`ko-KR` → `오후`), and 12-hour with Arabic-Indic digits and an Arabic period marker (`ar-EG` → `م`).

Note: the choice of 12-hour vs 24-hour is decided by the runtime's `Intl.DateTimeFormat` per locale, not by this component. Several locales (`zh-CN`, `ja-JP`, `de-DE`, `fr-FR`, `en-GB`) default to a 24-hour clock for the short-time skeleton even though the language has 12-hour period words available — the component honors whatever the platform produces.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-time.html) -->
  <!-- The below content is automatically added from ../apiExamples/locale-time.html -->
  <auro-datetime type="time" locale="en-US" value="2020-09-22T14:05:00"></auro-datetime><br>
  <auro-datetime type="time" locale="de-DE" value="2020-09-22T14:05:00"></auro-datetime><br>
  <auro-datetime type="time" locale="ko-KR" value="2020-09-22T14:05:00"></auro-datetime><br>
  <auro-datetime type="time" locale="ar-EG" value="2020-09-22T14:05:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-time.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/locale-time.html -->

```html
<auro-datetime type="time" locale="en-US" value="2020-09-22T14:05:00"></auro-datetime><br>
<auro-datetime type="time" locale="de-DE" value="2020-09-22T14:05:00"></auro-datetime><br>
<auro-datetime type="time" locale="ko-KR" value="2020-09-22T14:05:00"></auro-datetime><br>
<auro-datetime type="time" locale="ar-EG" value="2020-09-22T14:05:00"></auro-datetime>
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

### Set date/time with `value`

Use the `value` attribute to pass a single ISO 8601 date or date-time string into the element. The `value` attribute is locale-agnostic and replaces the previous `setDate` and `utc` attributes. Accepted shapes include:

- `2022-07-14T08:00:00-07:00` (date-time with offset)
- `2022-07-14T08:00:00Z` (UTC, Zulu designator)
- `2022-07-14T08:00:00` (date-time, no offset)
- `2022-07-14` (date only)

Invalid input is logged as a warning and renders nothing.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/set-date.html) -->
  <!-- The below content is automatically added from ../apiExamples/set-date.html -->
  <auro-datetime value="1975-08-19T23:15:30"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" value="1975-08-19T23:15:30"></auro-datetime><br>
  <auro-datetime type="time" value="1975-08-19T23:15:30"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/set-date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/set-date.html -->

```html
<auro-datetime value="1975-08-19T23:15:30"></auro-datetime><br>
<auro-datetime weekday="long" month="long" value="1975-08-19T23:15:30"></auro-datetime><br>
<auro-datetime type="time" value="1975-08-19T23:15:30"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Type

Use `type` to define the type of data to render. Options are `[date, time, year, month, weekday, day, numeric]`.

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

#### Wall-clock display from offset

When the `value` attribute contains a timezone offset (or `Z`) and no `timeZone` attribute is set, the component renders the **wall-clock** components from the input verbatim. This is the right behavior for displaying local airport time on a flight schedule, where the offset describes the location of the flight rather than the viewer.

Example using `2022-07-13T21:35:00-07:00`. The same string is rendered identically regardless of the viewer's location.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plus-minus.html) -->
  <!-- The below content is automatically added from ../apiExamples/plus-minus.html -->
  <auro-datetime type="time" value="2022-07-13T21:35:00-07:00"></auro-datetime><br>
  <auro-datetime type="date" value="2022-07-13T21:35:00-07:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/plus-minus.html -->

```html
<auro-datetime type="time" value="2022-07-13T21:35:00-07:00"></auro-datetime><br>
<auro-datetime type="date" value="2022-07-13T21:35:00-07:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### UTC (Zulu) input

The `value` attribute also accepts ISO 8601 strings ending in the `Z` designator. Without a `timeZone` attribute, the wall-clock components are rendered as written. To convert into a viewer-meaningful timezone, also set `timeZone` (see the timezone example).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/utc.html) -->
  <!-- The below content is automatically added from ../apiExamples/utc.html -->
  <auro-datetime value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="time" value="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" value="2020-09-22T01:38:22Z"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/utc.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/utc.html -->

```html
<auro-datetime value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime type="time" value="2020-09-22T01:38:22Z"></auro-datetime><br>
<auro-datetime weekday="long" month="long" value="2020-09-22T01:38:22Z"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Combining `value` and `timeZone`

How the `timeZone` attribute composes with the input depends on whether `value` carries an offset:

- **`value` has an offset (or `Z`):** the offset anchors the absolute moment; `timeZone` is the display zone. Example: `value="2022-07-14T08:00:00-04:00" timeZone="US/Pacific"` renders as `5:00 am` (8am Eastern → 5am Pacific).
- **`value` has no offset:** the wall-clock is interpreted as being in `timeZone`, so display in that same zone matches the input verbatim. Example: `value="2022-07-14T08:00:00" timeZone="US/Eastern"` renders as `8:00 am` regardless of where the viewer is. This is the recommended shape when consumers know the source zone but don't have an offset readily available (e.g. flight-schedule data keyed by airport).

#### Invalid `timeZone` and `locale` values

Both attributes are validated up-front. Invalid inputs do **not** crash the component — they fall back gracefully and log a `console.warn` (deduplicated per element):

- **Invalid `locale`** (e.g. `"xx-INVALID-tag"`) → falls back to `"en-US"`.
- **Invalid `timeZone`** (e.g. `"US/Pacfic"` typo) → falls back to behaving as if `timeZone` was not specified. With `value` set, that means wall-clock display from the input components — visually the same string for every viewer. With `value` unset, that means the current time in the viewer's machine zone. The warning surfaces the typo so the developer can fix it.

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
  <auro-datetime type="time" value="2022-07-14T06:00:00-04:00"></auro-datetime><br>
  <auro-datetime type="date" value="2022-07-14T06:00:00-04:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/east-plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/east-plus-minus.html -->

```html
<auro-datetime type="time" value="2022-07-14T06:00:00-04:00"></auro-datetime><br>
<auro-datetime type="date" value="2022-07-14T06:00:00-04:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Example using Hawaiian Time Zone

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaii-plus-minus.html) -->
  <!-- The below content is automatically added from ../apiExamples/hawaii-plus-minus.html -->
  <auro-datetime type="time" value="2022-07-16T08:00:00-10:00"></auro-datetime><br>
  <auro-datetime type="date" value="2022-07-16T08:00:00-10:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaii-plus-minus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/hawaii-plus-minus.html -->

```html
<auro-datetime type="time" value="2022-07-16T08:00:00-10:00"></auro-datetime><br>
<auro-datetime type="date" value="2022-07-16T08:00:00-10:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
