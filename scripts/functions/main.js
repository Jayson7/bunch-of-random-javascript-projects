// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Traditional Function
function A(a) {
    return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
};

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
(a) => a + 100;

//************************ */

// Traditional Function
function A(a, b) {
    return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;

function A() {
    return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;


// --------------------------------

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;

let a = new AsyncFunction(
    "a",
    "b",
    "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);"
);

a(10, 20).then((v) => {
    console.log(v); // prints 30 after 4 seconds
});