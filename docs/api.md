# auro-datetime

The `auro-datetime` element is for the purposes of providing an easy to use date and time API.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                                                                                             | Default | Description                                                                                       |
| ---------- | ---------- | --------- | ------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------- |
| cap        | cap        |           | boolean                                                                                          |         | Capitalize AM or PM designation                                                                   |
| month      | month      |           | `short` \| `long`                                                                                | `short` | Defines format of month                                                                           |
| setDate    | setDate    |           | string                                                                                           |         | Pass in string to set date                                                                        |
| timeZone   | timeZone   |           | string                                                                                           |         | Pass in string to define [timeZone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |
| type       | type       |           | `date` \| `time` \| `year` \| `month` \| `weekday` \| `day` \| `numeric` \| `tzDate` \| `tzTime` |         | Defines type of data to render                                                                    |
| utc        | utc        |           | string                                                                                           |         | Pass in ISO 8601 UTC formatted time code                                                          |
| weekday    | weekday    |           | `short` \| `long`                                                                                | `short` | Defines format of weekday                                                                         |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name | Description                                  |
| ---- | -------------------------------------------- |
| post | Content that comes after the `pre` content   |
| pre  | Content that comes before the `post` content |