// const { createServer } = require('node:http');
// const { readFileSync } = require('node:fs'); //or const fs = require('node:fs');

// require is for CommonJS modules, while import is for ES modules.

import { a, b, d} from './myServer2.js'; // named imports
console.log(a, b, d); // 1 2 4

import obj from './myServer2.js'; // default import
console.log(obj); // { x: 5, y: 7 }
