//***************ES-6 modules*******7/4/21******* */
// A module is a file to make import and export work browser need script tag.
// There are different types of modules such as 
//1.common js : implemented by node.
//1. EcmaScript harmony(ES6) used for both server/client side.
// all the modules work only in strict mode ************ by default they are strict

// IN javascript there are two types of exports
// 1. named export
// 2. default export

// There is only one default export in a file.
// but there could be multiple export in named export.

//now to import the function, class, var, let, or const from another file we do it like this


//import { MEANstack, MERNstact } from "./fullstack.js";
// in case of alising
// import { x, y } from "./fullstack.js";

// // alising can also be used as like this
// import { MEANstack as x, MERNstact as y } from "./fullstack.js";

// // console.log(MEANstack("java", "javascript", "python", "nodejs", "mongodb"));
// // console.log(MERNstact("java", "javascript", "python", "nodejs", "mongodb"));

// // for alising
// console.log(x("java", "javascript", "python", "nodejs", "mongodb"));
// console.log(y("java", "javascript", "python", "nodejs", "mongodb"));


// // default way of importing 
// import anyvariablename from "./fullstack.js"; // default way

// console.log(anyvariablename("madhu", 4, "java", "spring"));

// // now if i want to import another i can't use default as it can only be done once.
// // now i can use the named way of importing
// import { Fullstack1 } from "./fullstack.js" // named way

// console.log(Fullstack1("sashi", 4, "javascript", "reactjs"));

// A way to import all the values using *
// import * as module from "./fullstack.js"

// console.log(module.Fullstack1("madhu", 6, "java", "hibernate"));
// console.log(module.default("sashi", 4, "nodejs", "mongodb"));

// now the way to do it in a class
import pythonstack, { pythonframwork } from "./PythonStack.js"; // same line default and named can be used

console.log(new pythonstack("java", 5, 'madhu'));


console.log(new pythonframwork("javascript", 4, "sashi", "express"));