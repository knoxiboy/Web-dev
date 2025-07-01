// var slugify = require('slugify')

// let a = slugify('some string') // some-string
// console.log(a);

// // if you prefer something other than '-' as separator
// let b = slugify('some string', '_')  // some_string
// console.log(b);


// import {a, b, d} from "./myServer2.js"
// console.log(a, b, d)

// import harry from "./myServer2.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

// above is in format of node.js module

// CommonJS module system

const a = require("./myServer2.js")
console.log(a, __dirname, __filename)