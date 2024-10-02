import { AuroDatetime } from './src/auro-datetime.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-datetime', AuroDatetime);
