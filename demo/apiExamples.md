<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-datetime

auro-datetime custom element for the purposes of providing an easy to use date and time API

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| [cap](#cap)      | `cap`      | `Boolean` |         | Capitalize AM or PM designation                  |
| [month](#month)    | `month`    | `String`  | "short" | Display long version of month. Option `[long]`   |
| [setDate](#setDate)  | `setDate`  | `String`  |         | Pass in string to set date                       |
| [timeZone](#timeZone) | `timeZone` | `String`  |         | Pass in string to define [timeZone](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values) |
| [type](#type)     | `type`     | `String`  |         | Define type of data to render. Options are `[date, time, year, month, weekday, day, numeric, tzDate, tzTime]` |
| [utc](#utc)      | `utc`      | `String`  |         | Pass in ISO 8601 UTC formatted time code         |
| [weekday](#weekday)  | `weekday`  | `String`  | "short" | Display long version of weekday. Option `[long]` |

## Slots

| Name   | Description                                  |
|--------|----------------------------------------------|
| [post](#post) | Content that comes after the `pre` content   |
| [pre](#pre)  | Content that comes before the `post` content |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

This is a default configuration using the `<auro-datetime>` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-datetime type="date"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-datetime type="date"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Numeric

Using the `<auro-datetime>` element with type `numeric` will return the **current date** based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/numeric.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/numeric.html -->
  <auro-datetime type="numeric"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/numeric.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/numeric.html -->

```html
<auro-datetime type="numeric"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Basic Time

Using the `<auro-datetime>` element with type `time` will return the **current date** based on client local preferences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/time.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/time.html -->
  <auro-datetime type="time"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/time.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/time.html -->

```html
<auro-datetime type="time"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Cap Attribute

Using the `cap` attribute will return the basic time string with a capitalized `AM` or `PM`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/time.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/time.html -->
  <auro-datetime type="time"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/time.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/time.html -->

```html
<auro-datetime type="time"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Basic datetime with long weekday and month

Using the additional `month` and `weekday` enum options with type `date`, `<auro-datetime>` will return a customized string.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/longDatetime.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/longDatetime.html -->
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/longDatetime.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/longDatetime.html -->

```html
<auro-datetime type="date" month="long" weekday="long"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date/time with string

Use the `setdate` property to inject a specific date into the element and parse as needed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/setDatetime.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/setDatetime.html -->
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/setDatetime.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/setDatetime.html -->

```html
<auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date with UTC (Zulu) time code

Use the `setdate` property to inject a specific date into the element and parse as needed.

<blockquote>
  <p>Times are expressed in ISO 8601 date and time format in UTC (Coordinated Universal Time), with a special UTC designator ("Z"). <br>
    <code>YYYY-MM-DDTHH:MM:SSZ</code>
  </p>
</blockquote>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/setDatetime.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/setDatetime.html -->
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/setDatetime.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/setDatetime.html -->

```html
<auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date with code +/- time zone

Use `type="tzTime"` or `type="tzDate"` with the `setDate` property to define a new date object in a specific time zone using the `YYYY-MM-DDTHH:MM:SS-HH:MM` model.

Example using `2022-07-13T21:35:00-07:00` with Pacific `(-07:00)` time zone during daylight saving time. (The offset is `(-06:00)` during standard time).

***Side Note:*** The `<auro-datetime>` element **does not** support local/time zone conversion. The scope of this element is to use current or specifically assigned date/time data and return a string for display.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/timezoneChange.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/timezoneChange.html -->
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/timezoneChange.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/timezoneChange.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
<auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Show current time based on time zone options

Using the `timezone` enum option, users can designate specifically what the current time is in any supported timezone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/timezone.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/timezone.html -->
  <p>Current location: <auro-datetime type="time"></auro-datetime></p>
  <p>Hawai'i: <auro-datetime type="time" timezone="US/Hawaii"></auro-datetime></p>
  <p>West coast: <auro-datetime type="time" timezone="US/Pacific"></auro-datetime></p>
  <p>Mountain: <auro-datetime type="time" timezone="US/Mountain"></auro-datetime></p>
  <p>Mid-west: <auro-datetime type="time" timezone="US/Central"></auro-datetime></p>
  <p>East coast: <auro-datetime type="time" timezone="US/Eastern"></auro-datetime></p>
  <p>Puerto Rico: <auro-datetime type="time" timezone="America/Puerto_Rico"></auro-datetime></p>
  <p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/timezone.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/timezone.html -->

```html
<p>Current location: <auro-datetime type="time"></auro-datetime></p>
<p>Hawai'i: <auro-datetime type="time" timezone="US/Hawaii"></auro-datetime></p>
<p>West coast: <auro-datetime type="time" timezone="US/Pacific"></auro-datetime></p>
<p>Mountain: <auro-datetime type="time" timezone="US/Mountain"></auro-datetime></p>
<p>Mid-west: <auro-datetime type="time" timezone="US/Central"></auro-datetime></p>
<p>East coast: <auro-datetime type="time" timezone="US/Eastern"></auro-datetime></p>
<p>Puerto Rico: <auro-datetime type="time" timezone="America/Puerto_Rico"></auro-datetime></p>
<p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Combinations and Slots

The `<auro-datetime>` component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/slots.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/slots.html -->
  <auro-datetime type="year">
    <span slot="pre">In the year </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/slots.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/slots.html -->

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
