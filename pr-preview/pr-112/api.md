<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-datetime

Shows a date or time as text, formatted for a language and region you choose and, optionally, a specific time zone.

**Key capabilities**
- **What to show**: `type` picks the full date, the time, a numeric date, or a single part, such as the year or weekday.
- **Date and time to show**: `value` takes a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and offset; without it, the element shows the current date and time.
- **Language formatting**: `locale` formats month names, separators, and the 12- or 24-hour clock for a language, such as `de-DE`.
- **Time zones**: `timezone` shows the moment in a time zone, such as `America/Los_Angeles`.
- **Name length**: `month="long"` and `weekday="long"` spell out the month and weekday names.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-datetime type="date" value="2022-07-14T08:00:00"&gt;&lt;/auro-datetime&gt;</code></pre>

### Properties and attributes

| Properties | Attributes | Modifiers | Type                                                                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ---------- | --------- | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locale     | locale     |           | string                                                                   | `en-US` | Sets the language and region used to format the date or time, such as `en-GB`, `de-DE`, or `ja-JP` (a BCP 47 language tag). It changes month and weekday names, separators, and whether times use a 12- or 24-hour clock, but not the time zone. A malformed tag logs a console warning and falls back to `en-US`; a well-formed tag the browser doesn't support, such as `zz-ZZ`, uses the browser's default language instead, with no warning.                                                                                                                                                                                                                                                                                                                          |
| month      | month      |           | "short" \| "long"                                                        | `short` | Sets how the month name is written: `short`, such as "Jul", or `long`, such as "July". It applies to the full date and to `type="month"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| timezone   | timezone   |           | string                                                                   |         | Sets the time zone to show the date or time in, such as `America/Los_Angeles` or `UTC` (an IANA time zone name). When `value` has an offset or `Z`, the element converts that moment into this zone; when it has none, the element reads `value` as a time already in this zone. Without it, or with an invalid name, which logs a console warning, the element shows the date and time in `value` as written, or the current date and time in the viewer's own time zone when `value` isn't set. When a `value` with no offset names a time the clocks skip when they spring forward, in this zone or, without it, in the viewer's own zone, it shows later by the length of the skip, usually one hour, so `2022-03-13T02:30:00` in `America/New_York` shows "3:30 am". |
| type       | type       |           | "date" \| "time" \| "year" \| "month" \| "weekday" \| "day" \| "numeric" |         | Sets which part of the date or time to show: `date` for the full date, such as "Thu, Jul 14, 2022", `numeric` for a numeric date, such as "7/14/2022", `time` for the hour and minute, such as "8:00 am", or `year`, `month`, `weekday`, or `day` for that part alone. Without it, or with any other value, the element shows the full date.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| value      | value      |           | string                                                                   |         | Sets the date or time to show, as a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and fractional seconds and an optional `Z` or `±HH:MM` offset, such as `2022-07-14`, `2022-07-14T08:00:00`, or `2022-07-14T08:00:00-07:00`. Without it, the element shows the current date and time from when it last rendered; it doesn't currently update as time passes. Invalid input, including an empty value or another ISO 8601 form, such as `20220714` or a `+0700` offset, logs a console warning and shows nothing.                                                                                                                                                                                                                            |
| weekday    | weekday    |           | "short" \| "long"                                                        | `short` | Sets how the weekday name is written: `short`, such as "Thu", or `long`, such as "Thursday". It applies to the full date and to `type="weekday"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Methods

| Name     | Parameters                                                                               | Return | Description                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| register | `name` (string) - The tag name to register the element under, such as `custom-datetime`. | void   | Registers the element with the browser under a tag name. Use a custom name to run more than one version of the element on the same page. If the tag name is already registered, it does nothing. |

### Slots

| Name      | Description                                                                                                                                                                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Content shown after the `post` slot's content, such as the end of a sentence that includes the date.                                                                                                                                                                                          |
| post      | Content shown after the date or time, such as "local time". The element doesn't currently let content sit right against the date or time: this content, or text right after the element, always shows with a space between them, so a period or comma can't follow the date or time directly. |
| pre       | Content shown before the date or time, such as "Departs". The element doesn't currently let content sit right against the date or time: this content, or text right before the element, always shows with a space between it and the date or time.                                            |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

Without `value`, the element shows today's date.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="date"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Type

Use `type` to choose what to show: `date` for the full date, `numeric` for a short numeric date, `time` for the hour and minute, or `year`, `month`, `weekday`, or `day` for a single part. Without `type`, the element shows the full date.

#### Time

`type="time"` shows the hour and minute. When the time ends in AM or PM, the element writes it in lowercase and drops a leading zero, such as "8:00 am".

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="time"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Numeric date

`type="numeric"` shows the date in numbers, in the order and with the separators that `locale` uses. With the default `en-US` locale, that's month, day, and year, such as "7/14/2022".

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="numeric"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Value

Use `value` to set the date or time to show, as a `YYYY-MM-DD` date or a `YYYY-MM-DDTHH:MM` date-time, with optional seconds and fractional seconds and an optional `Z` or `±HH:MM` offset. It replaces the `setDate` and `utc` attributes from earlier versions. It accepts forms such as these:

- `2022-07-14T08:00:00-07:00`: a date and time with an offset.
- `2022-07-14T08:00:00Z`: a date and time in UTC.
- `2022-07-14T08:00:00`: a date and time with no offset.
- `2022-07-14`: a date only.

Without `timezone`, the element shows the date and time as written in `value`, ignoring any offset or `Z`, except a time the reader's own clocks skip when they spring forward, which shows later by the length of the skip. Invalid input, including an empty value or another ISO 8601 form, such as `20220714` or a `+0700` offset, logs a console warning and shows nothing.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime value="1975-08-19T23:15:30"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime weekday="long" month="long" value="1975-08-19T23:15:30"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="time" value="1975-08-19T23:15:30"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### UTC input

A `value` that ends in `Z` is in UTC. Without `timezone`, the element still shows the date and time as written, so set `timezone` to show that moment in another time zone.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="time" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime weekday="long" month="long" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Time zone

Use `timezone` with an IANA time zone name, such as `America/Los_Angeles` or `UTC`, to show the date or time in that zone. How it works depends on whether `value` has an offset:

- **`value` has an offset or `Z`:** the element converts that moment into `timezone`. For example, `type="time" value="2022-07-14T08:00:00-04:00" timezone="America/Los_Angeles"` shows "5:00 am", because 8:00 am Eastern is 5:00 am Pacific.
- **`value` has no offset:** the element reads `value` as a time already in `timezone`, so every reader sees the same result. For example, `type="time" value="2022-07-14T08:00:00" timezone="America/New_York"` shows "8:00 am" wherever the reader is. Use this form when you know the zone a time belongs to but don't have its offset, such as flight times listed by airport.
- **`value` isn't set:** the element shows the current date or time in `timezone`, as in the example below.

On a day the clocks change in `timezone`, a `value` with no offset still shows as written, except for a time the clocks skip when they spring forward. That time moves later by the length of the skip, usually one hour, so `2022-03-13T02:30:00` in `America/New_York` shows "3:30 am".

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/timezone.html) -->
<!-- The below content is automatically added from ../apiExamples/timezone.html -->
<p>Your time zone: <auro-datetime type="time"></auro-datetime></p>
<p>Hawai'i: <auro-datetime type="time" timezone="Pacific/Honolulu"></auro-datetime></p>
<p>West coast: <auro-datetime type="time" timezone="America/Los_Angeles"></auro-datetime></p>
<p>Mountain: <auro-datetime type="time" timezone="America/Denver"></auro-datetime></p>
<p>Midwest: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
<p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
<p>Puerto Rico: <auro-datetime type="time" timezone="America/Puerto_Rico"></auro-datetime></p>
<p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/timezone.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/timezone.html -->

<pre class="language-html"><code class="language-html">&lt;p&gt;Your time zone: &lt;auro-datetime type="time"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;Hawai'i: &lt;auro-datetime type="time" timezone="Pacific/Honolulu"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;West coast: &lt;auro-datetime type="time" timezone="America/Los_Angeles"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;Mountain: &lt;auro-datetime type="time" timezone="America/Denver"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;Midwest: &lt;auro-datetime type="time" timezone="America/Chicago"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;East coast: &lt;auro-datetime type="time" timezone="America/New_York"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;Puerto Rico: &lt;auro-datetime type="time" timezone="America/Puerto_Rico"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;
&lt;p&gt;UTC: &lt;auro-datetime type="time" timezone="UTC"&gt;&lt;/auro-datetime&gt;&lt;/p&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Locale

Use `locale` with a [BCP 47 language tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument), such as `en-GB`, `de-DE`, or `ja-JP`, to format the date or time for that language and region. Without it, the element uses `en-US`. `locale` changes month and weekday names, separators, and the clock style, but not the time zone.

#### Locale with a full date

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="date" locale="en-GB" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="date" locale="de-DE" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="date" locale="ja-JP" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Locale with a numeric date

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="numeric" locale="en-GB" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="numeric" locale="de-DE" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="numeric" locale="ja-JP" value="2020-09-22T01:38:22Z"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Locale with a time

Times vary the most between locales. The examples below show four patterns: a 12-hour clock with "pm" after the time (`en-US`), a 24-hour clock (`de-DE`), a 12-hour clock with the Korean period word before the time (`ko-KR`), and a 12-hour clock with Arabic-Indic digits and an Arabic period marker (`ar-EG`).

The browser decides whether each locale uses a 12- or 24-hour clock, not the element. Some locales, such as `zh-CN`, `ja-JP`, `de-DE`, `fr-FR`, and `en-GB`, use a 24-hour clock for short times.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="time" locale="en-US" value="2020-09-22T14:05:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="time" locale="de-DE" value="2020-09-22T14:05:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="time" locale="ko-KR" value="2020-09-22T14:05:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="time" locale="ar-EG" value="2020-09-22T14:05:00"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Long month and weekday names

Use `month="long"` to spell out the month name, such as "July", and `weekday="long"` to spell out the weekday name, such as "Thursday".

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="date" month="long" weekday="long"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Invalid `timezone` and `locale` values

An invalid `timezone` or `locale` doesn't break the element. It logs a console warning, once per value for each element, and falls back:

- **Invalid `locale`**, such as the malformed tag `xx-INVALID-tag`: the element uses `en-US`.
- **Invalid `timezone`**, such as the typo `America/Los_Angles`: the element acts as if `timezone` isn't set. With `value` set, it shows the date and time as written, without converting them to the reader's time zone. Without `value`, it shows the current date and time in the reader's own time zone.

A well-formed `locale` tag the browser doesn't support, such as `zz-ZZ`, isn't treated as invalid: it logs no warning, and the browser formats the date in its default language.

## Slot examples

### Pre and post slots

Use the `pre` and `post` slots to add text before and after the date or time. This example also puts content in the default slot, which shows after the `post` content.

The element doesn't currently let content sit right against the date or time. Text in the `pre` or `post` slot, or right before or after the element, always shows with a space between it and the date or time, so a period or comma can't follow the date directly. Word your text to avoid it, as this example does.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/slots.html) -->
<!-- The below content is automatically added from ../apiExamples/slots.html -->
<auro-datetime type="day">
<span slot="pre">Day</span>
<span slot="post">of <auro-datetime type="month" month="long"></auro-datetime> in the year <auro-datetime type="year"></auro-datetime></span>
    falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
</auro-datetime>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/slots.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/slots.html -->

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="day"&gt;
  &lt;span slot="pre"&gt;Day&lt;/span&gt;
  &lt;span slot="post"&gt;of &lt;auro-datetime type="month" month="long"&gt;&lt;/auro-datetime&gt; in the year &lt;auro-datetime type="year"&gt;&lt;/auro-datetime&gt;&lt;/span&gt;
  falls on a &lt;auro-datetime type="weekday" weekday="long"&gt;&lt;/auro-datetime&gt;
&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Local time at the airport

When `value` has an offset and `timezone` isn't set, the element shows the date and time as written in `value`, without converting them to the reader's time zone. Use this to show a flight's local time at its airport, where the offset describes the airport, not the reader.

This example uses `2022-07-13T21:35:00-07:00`, a Pacific time.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="time" value="2022-07-13T21:35:00-07:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="date" value="2022-07-13T21:35:00-07:00"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Eastern time

This example uses `2022-07-14T06:00:00-04:00`, an Eastern time.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="time" value="2022-07-14T06:00:00-04:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="date" value="2022-07-14T06:00:00-04:00"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Hawaii time

This example uses `2022-07-16T08:00:00-10:00`, a Hawaii time.

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

<pre class="language-html"><code class="language-html">&lt;auro-datetime type="time" value="2022-07-16T08:00:00-10:00"&gt;&lt;/auro-datetime&gt;&lt;br&gt;
&lt;auro-datetime type="date" value="2022-07-16T08:00:00-10:00"&gt;&lt;/auro-datetime&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
