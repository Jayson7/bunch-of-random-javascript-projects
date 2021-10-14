// Map() in javascript

// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.


// this is the wrong approach because it gives you limited abilities to work with the map values
//  map in a lay man's knowlegde gives us the ability to iterate through an object and do whatever we like with it
var names = new Map();
names["jayson"] = "Abiodun";
names["bj"] = "bolaji";
console.log(names);
for (i in names) {
    console.log(i);
}

// this is the right approach

var realnames = new Map(); // the constructor which initializes our map
realnames.set("jayson", { phone: 08116336975, names: "Adebayo Abiodun" }); //set ab object to the new values
console.log(realnames.get("jayson")); //log out jayson stats
realnames.set("bubu", { phones: "080werey", names: "buhari" });
realnames.set("john", { phones: "080werey", names: "john doss" });
console.log(realnames.has("bubu")); // checking for a value
console.log(realnames.keys()); //Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log(realnames.values()); //Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

//  iteration

for (let [key, values] of realnames) {
    console.log(key + " = " + values);
}

for (let key of realnames.keys()) {
    console.log(key);
}

for (let value of realnames.values()) {
    console.log(value);
}

for (let [key, value] of realnames.entries()) {
    console.log(key + " = " + value);
}

console.log("for each");
//  iterating with for each
values = realnames.values();
realnames.forEach(function(values, key) {
    console.log(key + " = " + values);
});

// ************************************************************************
//another way to look at it
let myMap = new Map();

let keyString = "a string";
let keyObj = {};
let keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"

myMap.get("a string"); // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({}); // undefined, because keyObj !== {}
myMap.get(function() {}); // undefined, because keyFunc !== function () {}