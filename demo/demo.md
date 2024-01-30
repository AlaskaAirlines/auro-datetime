# Date/Time

The new `auro-datetime` custom element makes it really easy to add dates to your web app with a simple HTML API.

## Basic date

Using the `auro-datetime` element with type `date` will return the ____current date____ based on client local preferences.

<div class="exampleWrapper">
  <auro-datetime type="date"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="date"></auro-datetime>
  ```

</auro-accordion>

## Numeric date

Using the `auro-datetime` element with type `numeric` will return the __current date__ based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <auro-datetime type="numeric"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="numeric"></auro-datetime>
  ```

</auro-accordion>

## Basic time

Using the `auro-datetime` element with type `time` will return the __current time__ based on client local preferences.

<div class="exampleWrapper">
  <auro-datetime type="time"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="time"></auro-datetime>
  ```

</auro-accordion>

Using the `cap` attribute will return the basic time string with a capitalized `AM` or `PM`.

<div class="exampleWrapper">
  <auro-datetime type="time" cap></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="time" cap></auro-datetime>
  ```

</auro-accordion>

## Basic date w/long weekday and month

Using the additional `month` and `weekday` enum options with type `date`, `auro-datetime` will return a customized string.

<div class="exampleWrapper">
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
  ```

</auro-accordion>

## Set date/time with string

Use the `setdate` property to inject a specific date into the element and parse as needed.

<div class="exampleWrapper">
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime><br>
  <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime type="time" setdate="August 19, 1975 23:15:30"></auro-datetime>
  ```

</auro-accordion>

## Set date with UTC (Zulu) time code

Using the `utc` property, be sure to __only__ use a properly-formatted UTC code.

> Times are expressed in ISO 8601 date and time format in UTC (Coordinated Universal Time), with a special UTC designator ("Z").<br>
> `YYYY-MM-DDTHH:MM:SSZ`

<div class="exampleWrapper">
  <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime type="time" utc="2020-09-22T01:38:22Z"></auro-datetime><br>
  <auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
  ```

</auro-accordion>

## Set date with code +/- time zone

<auro-alert type="information">The <code>auro-datetime</code> element <strong>does not</strong> support local/time zone conversion. The scope of this element is to use current or specifically assigned date/time data and return a string for display.</auro-alert>

Use `type="tzTime"`or `type="tzDate"` with the `setDate` property to define a new date object in a specific time zone using the `YYYY-MM-DDTHH:MM:SS-HH:MM` model.

Example using `2022-07-13T21:35:00-07:00` with Pacific `(-07:00)` time zone during daylight saving time. (The offset is `(-06:00)` during standard time.)

<div class="exampleWrapper">
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  ```

</auro-accordion>

Example using `2022-07-14T06:00:00-04:00` with Eastern `(-04:00)` time zone.

<div class="exampleWrapper">
  <auro-datetime type="tzTime" setDate="2022-07-14T06:00:00-04:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-14T06:00:00-04:00"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="tzTime" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  <auro-datetime type="tzDate" setDate="2022-07-13T21:35:00-07:00"></auro-datetime>
  ```

</auro-accordion>

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime><br>
  <auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="tzTime" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
  <auro-datetime type="tzDate" setDate="2022-07-16T08:00:00-10:00"></auro-datetime>
  ```

</auro-accordion>

## Show current time based on time zone options

Using the `timezone` enum option, users can designate specifically what the __current time__ is in any supported timezone. See all [timezone options](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values)

<div class="exampleWrapper">
  <p>Current location: <auro-datetime type="time"></auro-datetime></p>
  <p>Hawai'i: <auro-datetime type="time" timezone="US/Hawaii"></auro-datetime></p>
  <p>West coast: <auro-datetime type="time" timezone="US/Pacific"></auro-datetime></p>
  <p>Mountain: <auro-datetime type="time" timezone="US/Mountain"></auro-datetime></p>
  <p>Mid-west: <auro-datetime type="time" timezone="US/Central"></auro-datetime></p>
  <p>East coast: <auro-datetime type="time" timezone="US/Eastern"></auro-datetime></p>
  <p>Puerto Rico: <auro-datetime type="time" timezone="America/Puerto_Rico"></auro-datetime></p>
  <p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

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

</auro-accordion>

## Combinations and slots

The `auro-datetime` component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use.

<div class="exampleWrapper">
  <auro-datetime type="year">
    <span slot="pre">In the year </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="year">
    <span slot="pre">In the year </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
  ```

</auro-accordion>
