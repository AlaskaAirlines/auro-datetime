<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

Without `value`, the element shows today's date.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Type

Use `type` to choose what to show: `date` for the full date, `numeric` for a short numeric date, `time` for the hour and minute, or `year`, `month`, `weekday`, or `day` for a single part. Without `type`, the element shows the full date.

#### Time

`type="time"` shows the hour and minute. When the time ends in AM or PM, the element writes it in lowercase and drops a leading zero, such as "8:00 am".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-time.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-time.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Numeric date

`type="numeric"` shows the date in numbers, in the order and with the separators that `locale` uses. With the default `en-US` locale, that's month, day, and year, such as "7/14/2022".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/numeric-date.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/numeric-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Value

Use `value` to set the date or time to show, as a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and fractional seconds and an optional `Z` or `±HH:MM` offset. It replaces the `setDate` and `utc` attributes from earlier versions. It accepts forms such as these:

- `2022-07-14T08:00:00-07:00`: a date and time with an offset.
- `2022-07-14T08:00:00Z`: a date and time in UTC.
- `2022-07-14T08:00:00`: a date and time with no offset.
- `2022-07-14`: a date only.

Without `timezone`, the element shows the date and time as written in `value`, ignoring any offset or `Z`. Invalid input, including an empty value or another ISO 8601 form, such as `20220714` or a `+0700` offset, logs a console warning and shows nothing.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/set-date.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/set-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### UTC input

A `value` that ends in `Z` is in UTC. Without `timezone`, the element still shows the date and time as written, so set `timezone` to show that moment in another time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/utc.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/utc.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Time zone

Use `timezone` with an IANA time zone name, such as `America/Los_Angeles` or `UTC`, to show the date or time in that zone. How it works depends on whether `value` has an offset:

- **`value` has an offset or `Z`:** the element converts that moment into `timezone`. For example, `type="time" value="2022-07-14T08:00:00-04:00" timezone="America/Los_Angeles"` shows "5:00 am", because 8:00 am Eastern is 5:00 am Pacific.
- **`value` has no offset:** the element reads `value` as a time already in `timezone`, so every reader sees the same result. For example, `type="time" value="2022-07-14T08:00:00" timezone="America/New_York"` shows "8:00 am" wherever the reader is. Use this form when you know the zone a time belongs to but don't have its offset, such as flight times listed by airport.
- **`value` isn't set:** the element shows the current date or time in `timezone`, as in the example below.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/timezone.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/timezone.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Locale

Use `locale` with a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument), such as `en-GB`, `de-DE`, or `ja-JP`, to format the date or time for that language and region. Without it, the element uses `en-US`. `locale` changes month and weekday names, separators, and the clock style, but not the time zone.

#### Locale with a full date

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-date.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-date.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Locale with a numeric date

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-numeric.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-numeric.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Locale with a time

Times vary the most between locales. The examples below show four patterns: a 12-hour clock with "pm" after the time (`en-US`), a 24-hour clock (`de-DE`), a 12-hour clock with the Korean period word before the time (`ko-KR`), and a 12-hour clock with Arabic-Indic digits and an Arabic period marker (`ar-EG`).

The browser decides whether each locale uses a 12- or 24-hour clock, not the element. Some locales, such as `zh-CN`, `ja-JP`, `de-DE`, `fr-FR`, and `en-GB`, use a 24-hour clock for short times.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/locale-time.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/locale-time.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Long month and weekday names

Use `month="long"` to spell out the month name, such as "July", and `weekday="long"` to spell out the weekday name, such as "Thursday".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/long.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/long.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Invalid `timezone` and `locale` values

An invalid `timezone` or `locale` doesn't break the element. It logs a console warning, once per value for each element, and falls back:

- **Invalid `locale`**, such as the malformed tag `xx-INVALID-tag`: the element uses `en-US`.
- **Invalid `timezone`**, such as the typo `America/Los_Angles`: the element acts as if `timezone` isn't set. With `value` set, it shows the date and time as written, the same for every reader. Without `value`, it shows the current date and time in the reader's own time zone.

A well-formed `locale` tag the browser doesn't support, such as `zz-ZZ`, isn't treated as invalid: it logs no warning, and the browser formats the date in its default language.

## Slot examples

### Pre and post slots

Use the `pre` and `post` slots to add text before and after the date or time. This example also puts content in the default slot, which shows after the `post` content.

The element doesn't currently let content sit right against the date or time. Text in the `pre` or `post` slot, or right before or after the element, always shows with a space between it and the date or time, so a period or comma can't follow the date directly. Word your text to avoid it, as this example does.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Local time at the airport

When `value` has an offset and `timezone` isn't set, the element shows the date and time as written in `value`, the same for every reader. Use this to show a flight's local time at its airport, where the offset describes the airport, not the reader.

This example uses `2022-07-13T21:35:00-07:00`, a Pacific time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Eastern time

This example uses `2022-07-14T06:00:00-04:00`, an Eastern time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/east-plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/east-plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Hawaii time

This example uses `2022-07-16T08:00:00-10:00`, a Hawaii time.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaii-plus-minus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaii-plus-minus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
