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

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}
const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());

// Example 4 -  Constructor Functions
console.log("\nSECTION 4 - Constructor Functions");

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const color1 = new Color(255, 50, 0);
console.log(color1);
console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba(0.8));
// document.body.style.backgroundColor = color1.rgb();
// document.body.style.backgroundColor = color1.hex();
document.body.style.backgroundColor = color1.rgba(0.6);

// Example 5 -  JS Classes - Syntactical Sugar
console.log("\nSECTION 5 - JS Classes - Syntactical Sugar");

// Example 6 -  A Bit More Practice with Classes
console.log("\nSECTION 6 - A Bit More Practice with Classes");

// Example 7 -  Extends, Super, and Subclasses
console.log("\nSECTION 7 - Extends, Super, and Subclasses");
