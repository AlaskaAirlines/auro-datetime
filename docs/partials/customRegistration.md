```js
// Import the class only
import { AuroDatetime } from '@aurodesignsystem/auro-datetime/class';

// Register with a custom name if desired
AuroDatetime.register('custom-datetime');
```

This will create a new custom element `<custom-datetime>` that behaves exactly like `<auro-datetime>`, allowing both to coexist on the same page without interfering with each other.
