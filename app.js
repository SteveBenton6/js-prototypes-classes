// Example 1 -  What on Earth are Prototypes
console.log("\nSECTION 1 - What on Earth are Prototypes");

const arr = [1, 2, 3];
// Add String yell prototype.
String.prototype.yell = function () {
  return `Amazing!!! ${this.toLowerCase()}!!  Wow!`;
};
let greeting = "hello";
console.log(greeting.yell());

// Example 2 -  An Intro to OOP
console.log("\nSECTION 2 - An Intro to OOP");
// No Code

// Example 3 -  Factory Functions
console.log("\nSECTION 3 - Factory Functions");

// Example 4 -  Constructor Functions
console.log("\nSECTION 4 - Constructor Functions");

// Example 5 -  JS Classes - Syntactical Sugar
console.log("\nSECTION 5 - JS Classes - Syntactical Sugar");

// Example 6 -  A Bit More Practice with Classes
console.log("\nSECTION 6 - A Bit More Practice with Classes");

// Example 7 -  Extends, Super, and Subclasses
console.log("\nSECTION 7 - Extends, Super, and Subclasses");
