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

class Colour {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    let { r, g, b } = this;
    return `(${r}, ${g}, ${b})`;
  }
  rgb() {
    let { r, g, b } = this;
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    let { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hsl() {
    let { h, s, l } = this;
    return `hsl(${h},${s}%, ${l}%)`;
  }
  fulllySaturated() {
    let { h, l } = this;
    return `hsl(${h},100%, ${l}%)`;
  }
  opposite() {
    let { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue},${s}%, ${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    else
      // Blue is max
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}
const c1 = new Colour(255, 67, 89, "tomato");
console.log(c1);
console.log(c1.rgb());
console.log(c1.hex());
console.log(c1.rgba(0.7));

// Example 6 -  A Bit More Practice with Classes
console.log("\nSECTION 6 - A Bit More Practice with Classes");

console.log(c1.hsl());
document.body.style.backgroundColor = c1.opposite();

// Example 7 -  Extends, Super, and Subclasses
console.log("\nSECTION 7 - Extends, Super, and Subclasses");

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating, as usual!`;
  }
}
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} said meow!`;
  }
}
const beckie = new Cat("Beckie", 8, 7);
console.log(beckie);
console.log(beckie.eat());
console.log(beckie.meow());
class Dog extends Pet {
  bark() {
    return `${this.name} said bark!`;
  }
  eat() {
    return `${this.name} is scoffing too much as usual!`;
  }
}
const rover = new Dog("Rover", 12);
console.log(rover);
console.log(rover.eat());
console.log(rover.bark());
