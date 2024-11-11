<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic Date

Using the `auro-datetime` element with `type=date` will return the **current date** based on client local preferences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Numeric Date

Using the `auro-datetime` element with `type=numeric` will return the **current date** based on client local preferences as a numeric type.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/numericDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/numericDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Basic Time

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basicTime.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basicTime.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Time with Capitilization

Using the `cap` attribute will return the basic time string with a capitalized `AM` or `PM`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/cap.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/cap.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Basic date with long weekday and month

Using the additional `month` and `weekday` enum options with `type=date`, `auro-datetime` will return a customized string.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/long.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/long.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Set date/time with string

Use the `setDate` property to inject a specific date into the element and parse as needed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/setDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/setDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Set date with UTC (Zulu) time code

> Times are expressed in ISO 8601 date and time format in UTC (Coordinated Universal Time), with a special UTC designator ("Z").<br>
> `YYYY-MM-DDTHH:MM:SSZ`

Using the `utc` property, be sure to only use a properly-formatted UTC code.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/utc.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/utc.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Set date with code +/- time zone

<auro-alert type="information">The <code>auro-datetime</code> element <strong>does not</strong> support local/time zone conversion. The scope of this element is to use current or specifically assigned date/time data and return a string for display.</auro-alert>

Use `type="tzTime"`or `type="tzDate"` with the `setDate` property to define a new date object in a specific time zone using the `YYYY-MM-DDTHH:MM:SS-HH:MM` model.

Example using `2022-07-13T21:35:00-07:00` with Pacific `(-07:00)` time zone during daylight saving time. (The offset is `(-06:00)` during standard time.)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/plusMinus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/plusMinus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Example using Eastern Time Zone

Example using `2022-07-14T06:00:00-04:00` with Eastern `(-04:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/eastPlusMinus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/eastPlusMinus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Example using Hawaiian Time Zone

Example using `2022-07-14T08:00:00-10:00` with Hawaii `(-10:00)` time zone.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hawaiiPlusMinus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hawaiiPlusMinus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Show current time based on time zone options

Using the `timezone` enum option, users can designate specifically what the **current time** is in any supported timezone. See all [timezone options](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/timezone.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/timezone.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Combinations and Slots

The `auro-datetime` component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/slots.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/slots.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
