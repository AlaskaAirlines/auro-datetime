# auro-datetime

The `auro-datetime` element is for the purposes of providing an easy to use date and time API.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                     | Default | Description                                                                                                                                                                                                                                                                                                              |
| ---------- | ---------- | --------- | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| locale     | locale     |           | string                                                                   | `en-US` | BCP 47 language tag for locale-aware date/time formatting (e.g. 'en-GB', 'de-DE', 'ja-JP').                                                                                                                                                                                                                              |
| month      | month      |           | `short` \| `long`                                                        | `short` | Defines format of month                                                                                                                                                                                                                                                                                                  |
| timezone   | timezone   |           | string                                                                   |         | Pass in string to define [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br>When set, the moment described by `value` is converted into this IANA zone for display.<br>When unset, the wall-clock time from the input string is rendered as-is.                                                |
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