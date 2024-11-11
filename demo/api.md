<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-datetime

The auro-datetime custom element is for the purposes of providing an easy to use date and time API.

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

### Basic Date

Using the `auro-datetime` element with `type=date` will return the **current date** based on client local preferences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-datetime type="date"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-datetime type="date"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Numeric Date

Using the `auro-datetime` element with `type=numeric` will return the **current date** based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/numericDate.html) -->
  <!-- The below content is automatically added from ../apiExamples/numericDate.html -->
  <auro-datetime type="numeric"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/numericDate.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/numericDate.html -->

```html
<auro-datetime type="numeric"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Basic Time

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basicTime.html) -->
  <!-- The below content is automatically added from ../apiExamples/basicTime.html -->
  <auro-datetime type="time"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basicTime.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basicTime.html -->

```html
<auro-datetime type="time"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Time with Capitilization

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

### Basic date with long weekday and month

Using the additional `month` and `weekday` enum options with `type=date`, `auro-datetime` will return a customized string.

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/setDate.html) -->
  <!-- The below content is automatically added from ../apiExamples/setDate.html -->
  <auro-datetime setDate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setDate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime type="time" setDate="August 19, 1975 23:15:30"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/setDate.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/setDate.html -->

```html
<auro-datetime setDate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime weekday="long" month="long" setDate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime type="time" setDate="August 19, 1975 23:15:30"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Set date with UTC (Zulu) time code

> Times are expressed in ISO 8601 date and time format in UTC (Coordinated Universal Time), with a special UTC designator ("Z").<br>
> `YYYY-MM-DDTHH:MM:SSZ`

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

### Set date with code +/- time zone

<auro-alert type="information">The <code>auro-datetime</code> element <strong>does not</strong> support local/time zone conversion. The scope of this element is to use current or specifically assigned date/time data and return a string for display.</auro-alert>
Use `type="tzTime"`or `type="tzDate"` with the `setDate` property to define a new date object in a specific time zone using the `YYYY-MM-DDTHH:MM:SS-HH:MM` model.

Example using `2022-07-13T21:35:00-07:00` with Pacific `(-07:00)` time zone during daylight saving time. (The offset is `(-06:00)` during standard time.)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plusMinus.html) -->
  <!-- The below content is automatically added from ../apiExamples/plusMinus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plusMinus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/plusMinus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Example using Eastern Time Zone

Example using `2022-07-14T06:00:00-04:00` with Eastern `(-04:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/eastPlusMinus.html) -->
  <!-- The below content is automatically added from ../apiExamples/eastPlusMinus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-14T06:00:00-04:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-14T06:00:00-04:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/eastPlusMinus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/eastPlusMinus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-14T06:00:00-04:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-14T06:00:00-04:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Example using Hawaiian Time Zone

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaiiPlusMinus.html) -->
  <!-- The below content is automatically added from ../apiExamples/hawaiiPlusMinus.html -->
  <auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaiiPlusMinus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/hawaiiPlusMinus.html -->

```html
<auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime><br>
<auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Show current time based on time zone options

Using the `timezone` enum option, users can designate specifically what the **current time** is in any supported timezone. See all [timezone options](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/timezone.html) -->
  <!-- The below content is automatically added from ../apiExamples/timezone.html -->
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
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/timezone.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/timezone.html -->

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

The `auro-datetime` component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use.

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
