//JS -> Por defecto utiliza CommmonJS
//.mjs -> Utiliar ES Modules
//.cjs -> Utilizar CommonJS

import { sum } from './operation.mjs';
import { sub } from './operation.mjs';
import { mul } from './operation.mjs';
import { div } from './operation.mjs';

console.log(sum(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
console.log(div(2, 0));
