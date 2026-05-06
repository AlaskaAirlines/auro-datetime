<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic Date
 
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>

## Basic Time
 
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-time.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-time.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>
 

## Property & Attribute Examples

### International Date Formatting

Use the `locale` attribute with a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) to render dates and times in a specific locale (e.g. `en-GB`, `de-DE`, `ja-JP`). When omitted, the component defaults to `en-US` formatting. The `locale` attribute controls **output formatting only** (month names, separators, 12/24-hour clock); it does not perform timezone conversion. Invalid tags are logged as a warning and fall back to `en-US`.

#### Locale with type="date"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-date.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Locale with type="numeric"

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-numeric.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-numeric.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Locale with type="time"

Time is the most format-divergent type across locales. The examples below highlight four distinct patterns: 12-hour with a Latin am/pm suffix (`en-US`), 24-hour with no marker (`de-DE`), 12-hour with a Korean period prefix (`ko-KR` → `오후`), and 12-hour with Arabic-Indic digits and an Arabic period marker (`ar-EG` → `م`).

Note: the choice of 12-hour vs 24-hour is decided by the runtime's `Intl.DateTimeFormat` per locale, not by this component. Several locales (`zh-CN`, `ja-JP`, `de-DE`, `fr-FR`, `en-GB`) default to a 24-hour clock for the short-time skeleton even though the language has 12-hour period words available — the component honors whatever the platform produces.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-time.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-time.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Long Month and Weekday

Use the `month="long"` attribute to display the full month name, and `weekday="long"` to display the full weekday name.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/long.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/long.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/set-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Type

Use `type` to define the type of data to render. Options are `[date, time, year, month, weekday, day, numeric]`.

#### Numeric Date

Using the `auro-datetime` element with `type=numeric` will return the **current date** based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/numeric-date.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/numeric-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Wall-clock display from offset

When the `value` attribute contains a timezone offset (or `Z`) and no `timezone` attribute is set, the component renders the **wall-clock** components from the input verbatim. This is the right behavior for displaying local airport time on a flight schedule, where the offset describes the location of the flight rather than the viewer.

Example using `2022-07-13T21:35:00-07:00`. The same string is rendered identically regardless of the viewer's location.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### UTC (Zulu) input

The `value` attribute also accepts ISO 8601 strings ending in the `Z` designator. Without a `timezone` attribute, the wall-clock components are rendered as written. To convert into a viewer-meaningful timezone, also set `timezone` (see the timezone example).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/utc.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/utc.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Combining `value` and `timezone`

How the `timezone` attribute composes with the input depends on whether `value` carries an offset:

- **`value` has an offset (or `Z`):** the offset anchors the absolute moment; `timezone` is the display zone. Example: `value="2022-07-14T08:00:00-04:00" timezone="US/Pacific"` renders as `5:00 am` (8am Eastern → 5am Pacific).
- **`value` has no offset:** the wall-clock is interpreted as being in `timezone`, so display in that same zone matches the input verbatim. Example: `value="2022-07-14T08:00:00" timezone="US/Eastern"` renders as `8:00 am` regardless of where the viewer is. This is the recommended shape when consumers know the source zone but don't have an offset readily available (e.g. flight-schedule data keyed by airport).

#### Invalid `timezone` and `locale` values

Both attributes are validated up-front. Invalid inputs do **not** crash the component — they fall back gracefully and log a `console.warn` (deduplicated per element):

- **Invalid `locale`** (e.g. `"xx-INVALID-tag"`) → falls back to `"en-US"`.
- **Invalid `timezone`** (e.g. `"US/Pacfic"` typo) → falls back to behaving as if `timezone` was not specified. With `value` set, that means wall-clock display from the input components — visually the same string for every viewer. With `value` unset, that means the current time in the viewer's machine zone. The warning surfaces the typo so the developer can fix it.

## Slot Examples

### Pre and Post Slots

This example demonstrates the use of the `pre` and `post` slots to customize the content before and after the datetime output.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Example using Eastern Time Zone

Example using `2022-07-14T06:00:00-04:00` with Eastern `(-04:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/east-plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/east-plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Example using Hawaiian Time Zone

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaii-plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaii-plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
