---
title: Basics and syntax
description: |
  This page will give you everything you need to get up and running using javascript. It will cover the essentials you need to start building software!
---

## Running JavaScript

JavaScript can be executed in two primary environments: the web browser and Node.js, a server-side runtime environment for JavaScript. To run JavaScript in a browser, you can use the browser's built-in developer console, which allows you to interact with web pages and execute JavaScript code directly. In Node.js, you can create JavaScript files with a `.js` extension and run them using the `node` command in your terminal.

Let's start with the classic "Hello World" example to illustrate how to run JavaScript:

```javascript
// In a web browser console
console.log("Hello, world!");

// In Node.js
console.log("Hello, world!");
```

## Variables and Data Types

Variables are used to store data in your programs. Every variable has a label, it's data and it's data types. The label is the name you assign to it, and the data is on the right hand side of the `=`. The data type is a bit more complicated, and will be explained below.

### Integers, Floats, and Strings

JavaScript is a dynamically typed language, which means you don't need to specify a data type when declaring a variable. Here's how you declare and assign values to variables for different data types:

```javascript
let integerNumber = 42;
let floatNumber = 3.14;
let greeting = "Hello, JavaScript!";
```

### Collections (Arrays)

Arrays are used to store collections of data. They can hold various data types, including numbers, strings, or even other arrays:

```javascript
let fruits = ["apple", "banana", "cherry"];
let mixedArray = [1, "two", 3.0, ["four", 5]];
```

## Functions

Functions in JavaScript allow you to encapsulate and reuse blocks of code. Here's how you define a simple function:

```javascript
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

sayHello("Alice"); // Output: Hello, Alice!
```

## Control Flow

### If Statements

Conditional statements like `if` are used to make decisions in your code:

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's cold.");
}
```

### Truthiness and Boolean Logic Comparisons

JavaScript evaluates values for truthiness. In conditional statements, values like `0`, `null`, `undefined`, `false`, `""` (empty string), and `NaN` are considered falsy, while other values are considered truthy.

```javascript
let isRaining = true;
let isSunny = false;

if (isRaining || isSunny) {
  console.log("The weather is unpredictable!");
}

if (!isRaining && !isSunny) {
  console.log("The weather is clear.");
}
```

### Nested If Statements

You can nest `if` statements to create more complex conditional logic:

```javascript
let hour = 15;

if (hour < 12) {
  console.log("Good morning!");
} else {
  if (hour < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
}
```

## Loops

### For Loops

For loops are used to iterate over a range of values:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
```

### Foreach Loops with Arrays

You can use `for...of` loops to iterate through arrays:

```javascript
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

### While Loops

While loops repeat code while a condition is true:

```javascript
let count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++;
}
```

### Loop Control Statements (break and continue)

You can use `break` to exit a loop prematurely and `continue` to skip the current iteration and move to the next one:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i equals 5
  }
  if (i === 3) {
    continue; // Skip the iteration when i equals 3
  }
  console.log("Value of i: " + i);
}
```

## Defining Your Own Types (Classes)

JavaScript supports object-oriented programming (OOP) and allows you to define your own types using classes. Here's a simple example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let alice = new Person("Alice", 30);
alice.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
```

This article covers the foundational aspects of JavaScript, providing you with a solid starting point for your programming journey. JavaScript is a vast language with numerous advanced features and libraries, so don't hesitate to explore further and build exciting web applications and beyond. Happy coding!