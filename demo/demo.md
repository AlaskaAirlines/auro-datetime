# Date/Time

The new auro-datetime custom element makes it really easy to add dates to your web app with a simple HTML API.

## Basic date

<div class="exampleWrapper">
  <auro-datetime type="date"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="date"></auro-datetime>
  ```

</auro-accordion>

## Numeric date

<div class="exampleWrapper">
  <auro-datetime type="numeric"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="numeric"></auro-datetime>
  ```

</auro-accordion>

## Basic time

<div class="exampleWrapper">
  <auro-datetime type="time"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="time"></auro-datetime>
  ```

</auro-accordion>

## Basic date w/long weekday and month

<div class="exampleWrapper">
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
  ```

</auro-accordion>

## Time with options

See all [timezone options](https://bugs.chromium.org/p/chromium/issues/detail?id=928068#c1)

<div class="exampleWrapper">
  <p>Current location: <auro-datetime type="time"></auro-datetime></p>
  <p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
  <p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
  <p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <p>Current location: <auro-datetime type="time"></auro-datetime></p>
  <p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
  <p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
  <p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
  ```

</auro-accordion>

## Set date with UTC time code

<div class="exampleWrapper">
  <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
  <auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
  <auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
  ```

</auro-accordion>

## Set date with string

<div class="exampleWrapper">
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
  <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>
  ```

</auro-accordion>

## Combinations and slots

The auro-datetime component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use.

<div class="exampleWrapper">
  <auro-datetime type="year">
    <span slot="pre">In </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-datetime type="year">
    <span slot="pre">In </span>
    <span slot="post">
      day<auro-datetime type="day"></auro-datetime>
      of <auro-datetime type="month" month="long"></auro-datetime>
    </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
  </auro-datetime>
  ```

</auro-accordion>
