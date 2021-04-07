// export let MERNstact = function (...courses) {
//     return courses;
// }
// // to export just we need to write export in the start of the function, class, var, let, or const.

// export let MEANstack = function (...courses) {
//     return courses;
// }

// // another way to export is using alising
// let MERNstact = function (...courses) {
//     return courses;
// }

// let MEANstact = function (...courses) {
//     return courses;
// }

// export { MERNstact as x, MEANstact as y }

// now how to use the default way
let Fullstack = function (trainer, duration, ...courses) { // rest parameter must be the last one 
    return { trainer, duration, courses };                 // else syntaxerror
}

let Fullstack1 = function (trainer, duration, ...courses) {
    return { trainer, duration, courses };
}

export default Fullstack;
export { Fullstack1 };

