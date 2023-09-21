---
title: Advanced
description: |
  If you haven't covered the basics of javascript I would recommend looking at [our basic syntax overview](/language/javascript/syntax). This section will cover more advanced methods that will help you once you have the ability to broadly use javascript
---

## Async/Await and Promises

Handling asynchronous operations is a crucial aspect of modern JavaScript development. Promises and async/await are powerful tools for managing asynchronous code and avoiding callback hell.

### Promises

Promises represent a value that may not be available yet but will be at some point in the future, or possibly not at all. They are commonly used for managing asynchronous operations like fetching data from an API.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data); // Successfully resolve the promise
    }, 1000);
  });
};

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Async/Await

Async/await simplifies working with promises by allowing you to write asynchronous code in a more synchronous style. The `await` keyword can be used within an `async` function to pause execution until a promise is resolved.

```javascript
const fetchData = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
```

## HTTP Requests and Responses with Fetch

To interact with APIs and fetch data from remote servers, JavaScript provides the `fetch` API. It returns a promise that resolves to the response to that request.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

Certainly! Let's start by understanding callbacks, then we'll introduce anonymous functions and discuss how arrow syntax simplifies them.

## Callback Functions

In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in asynchronous operations, such as handling data fetched from a server or responding to user interactions.

Here's a simple example using a callback function to handle a setTimeout operation:

```javascript
function delayedGreeting(callback) {
  setTimeout(function () {
    callback("Hello, world!");
  }, 1000);
}

function displayMessage(message) {
  console.log(message);
}

delayedGreeting(displayMessage);
```

In this example, `delayedGreeting` is a function that takes a callback function as an argument. It uses `setTimeout` to simulate a delay of 1 second before invoking the callback function, which in this case is `displayMessage`.

### Anonymous Functions

Now, let's replace the callback function in our example with an anonymous function. An anonymous function is a function without a name, defined inline when it's needed.

```javascript
function delayedGreeting(callback) {
  setTimeout(function () {
    callback("Hello, world!");
  }, 1000);
}

delayedGreeting(function (message) {
  console.log(message);
});
```

In this modified code, we no longer define a separate `displayMessage` function. Instead, we pass an anonymous function directly as the callback argument to `delayedGreeting`. This anonymous function does the same job as `displayMessage`.

#### Arrow Function Syntax

Arrow function syntax provides a more concise way to create anonymous functions, making the code cleaner and easier to read. Here's how the previous example looks with arrow functions:

```javascript
function delayedGreeting(callback) {
  setTimeout(() => {
    callback("Hello, world!");
  }, 1000);
}

delayedGreeting((message) => {
  console.log(message);
});
```

With arrow functions, you can see that the anonymous callback function is defined using the `() => {}` syntax. It's shorter and more expressive, making it a popular choice for callback functions in modern JavaScript.

## Maps and Sets

JavaScript offers additional built-in data structures beyond arrays and objects.

### Maps

Maps allow you to store key-value pairs, where keys can be of any data type. They are useful when you need a data structure that guarantees order and efficient look-up.

```javascript
const userMap = new Map();
userMap.set("Alice", { age: 25, email: "alice@example.com" });
userMap.set("Bob", { age: 30, email: "bob@example.com" });
```

### Sets

Sets are collections of unique values. They can be used to eliminate duplicate elements from an array or to manage unique data.

```javascript
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // Output: [1, 2, 3, 4]
```

## Event Handlers

Event handling is a crucial part of creating interactive web applications. You can use event listeners to respond to user interactions like clicks, key presses, and form submissions.

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
  console.log("Button clicked!");
  // Perform actions in response to the click event
});
```

## Manipulating the DOM

To create dynamic and interactive web pages, you'll often need to manipulate the DOM. JavaScript provides various methods and properties to modify the structure and content of HTML documents.

```javascript
// Changing text content
const element = document.getElementById("myElement");
element.textContent = "New text content";

// Creating new elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv);

// Removing elements
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);
```
