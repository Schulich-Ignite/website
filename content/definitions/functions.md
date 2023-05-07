---
name: functions
aka:
- class methods
- methods
- parameters
tags:
- beginner
prerequisites:
- variables
- data-types
---

Functions are a way to reuse code efficiently. It allows you to define a set of steps of code that should be run when the function is "called", along with a name. 

## Using existing functions

Using (or "calling") existing functions works the same in **most** languages. You find whatever the name of the function is, and you type `function_name()`, some functions take in extra data (called [parameters](#parameters)), so you can "pass" the function this data when you call it. 

For example here is how you print some text to the screen in python using the `print()` function:

```python
print("Hello World")
```

We can do the same thing in javascript using a different function called `console.log()`:

```js
console.log("Hello world")
```

## Parts of a function

To create a function there are several parts you need, all of the parts work to define what the function does, and how it does it.

### Function definition

This is where you define the function name (and optionally [parameters](#parameters)). To define a function you will need to use the definition keyword in whatever language you are writing, and you will need to provide a name. 

For example in python `def` is the definition keyword. So if we were to define a function that will tell you what the weather is today called `todays_weather` we could do it like this:

```python
def todays_weather():
    # This is where the function body will go
```

We could do the same thing in javascript like this:

```js
function todays_weather(){
    // This is where the function body will go
}
```

#### Naming conventions

Languages will have different naming conventions. You **don't have to follow these**, but it's recommended. In python functions are usually "snake case", this means the names are all lowercase, and you seperate words with "_". 

Javascript typically uses camelCase, instead of seperating different words you just capitalize the first letter. So instead of `todays_weather()`, our javascript function should be:

```js
function todaysWeather(){
    // This is where the function body will go
}
```

This changes nothing about the code that is run with a function, it's just a convention people follow in languages to standardize how code looks.

#### Parameters

Parameters are data you can pass to a function in order to be able to re-use code more effectively. For example you might specify a `name` parameter that is used to pass the user's name to a function. Imagine we have a function called `greeting()` that takes this name parameter, it might look like this in python:

```python
def greeting(name):
    # Function body here
```

and like this in javascript

```js
function greeting(name){
    // function body here
}
```

##### Multiple parameters

You can specify multiple parameters for functions, in most languages you can do this with a comma seperated list of names for the parameters. For example a function `game_over()` that takes in a winner and loser parameter. First in python:

```python
def game_over(winner, loser):
    # Function body here
```

Now in javascript a `gameOver()` function with the same parameters:

```js
function gameOver(winner, loser){
    // Function body here
}
```

##### Default and optional values for parameters

You can also specify parameters that have default values. This can be used to make common situations your functions will be run under easier, but also can be used to make some parameters optional if the value is still the default when run. Here is a function `feedback_form_submission()` that takes in data from when someone fills out a form in an app, it takes in the email of the user, and optionally a comment variable:

```python
def feedback_form_submission(name, comment=""):
    # function body here

# Can now call the function with a comment
feedback_form_submission("John Doe", "What an awful event")

# Or call it without a comment
feedback_form_submission("Kieran")
```

In python these are also called keyword arguments (kwargs for short). In javascript it would look like this

```js
function feedback_form_submission(name, comment=""){
    // function body herepython
}

// Can now call the function with a comment
feedback_form_submission("John Doe", "What an awful event")

// Or call it without a comment
feedback_form_submission("Kieran")
```

##### Typed vs Untyped

There are different types of languages, strongly and weakly typed. Strongly typed languages require you to tell the language what the types of each parameter are (integer, string, list etc.). Javascript and python are weakly typed languages, so this isn't **required**, but python does offer type hinting, which can be useful in ambiguous situations. If you have never heard of [type hints](https://docs.python.org/3/library/typing.html), they are used to define what data type each of the variables/attributes should be. For example a string variable called name would look like this:

```python
name:str
```

And if the variable can more than one type you have the first type on one side of a | and then the other option for the type. So `str | None` would mean the variable could be a string, or a `None` like this:

```python
name: str|None
```

We could then apply this to our parameters like this:

```python
def feedback_form_submission(name:str, comment:str=""):
    # function body here
```

### Function body

This is where you define the code that should be run when someone calls a function. This is defined by some sort of *scope identifier*. These scope identifiers change per language, but there are two common ones.

#### Indentation

The indentation level of the code is used to identify the scope in several languages. For example in python let's define a function called `greet_person()` which takes in a name parameter which is a string and uses it to greet them:

```python
def greet_person(name:str):
    # Function body starts here
    print("Hello there")
    print(name)
    # And ends here
```

#### Squiglies

Squiflies (not the actual name) are often used as scope identifiers in languages. For example in javascript you define where a function starts and stops with everything inside squigglies ({}), so a function starts at `{` and ends at `}`. Here is an example of a function that takes in a name, prints a greeting, then the name:

```js
function greetPerson(name){
    console.log("Good morning")
    console.log(name)
}
```

This means when someone calls `greetPerson("kieran")` only the two `console.log()` statements will run!

### Returning

For some functions you will want to return a resulting value. The easiest example of this is returning a number from an addition function:

```python
def add(x, y):
    return x + y
```

or in js

```js
function add(x, y){
    return x + y
}
```

####  Type hinting returns

You can type hint your returns the same as you can with your parameters in python. You simply add a little arrow `->` before you start the function:

```python
def add(x:int, y:int)->int:
    return x + y
```

This tells people what to expect when they retrieve the value of a function and store it in a variable
