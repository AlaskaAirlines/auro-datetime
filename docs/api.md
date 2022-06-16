# auro-datetime

auro-datetime custom element for the purposes of providing an easy to use date and time API

## Properties

| Property   | Attribute  | Type     | Default | Description                                      |
|------------|------------|----------|---------|--------------------------------------------------|
| `month`    | `month`    | `String` | "short" | Display long version of month. Option `[long]`   |
| `setDate`  | `setDate`  | `String` |         | Pass in string to set date                       |
| `timeZone` | `timeZone` | `String` |         | Pass in string to define [timeZone](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values) |
| `type`     | `type`     | `String` |         | Define type of data to render. Options are `[date, time, year, month, weekday, day, numeric, tzDate, tzTime]` |
| `utc`      | `utc`      | `String` |         | Pass on UTC formatted time code                  |
| `weekday`  | `weekday`  | `String` | "short" | Display long version of weekday. Option `[long]` |

## Slots

| Name   | Description                                  |
|--------|----------------------------------------------|
| `post` | Content that comes after the `pre` content   |
| `pre`  | Content that comes before the `post` content |
