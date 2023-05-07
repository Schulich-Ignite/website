---
name: data types
aka:
- primitive types
- basic types
- integer
- string
- integers
- strings
- str
- int
- bool
- boolean
- float
- floats
tags:
- beginner
prerequisites:
- variables
---

Everything starts with data in programming. If you want to be able to do anything you need to be able to work with data. But not all data is formatted the same. Data types are the basic building blocks that let you define what data looks like.

## Primitive vs Derived types

Primitive types are data types that are included by default in most languages. They are the **essential** data types used to build programs. Every type we cover in this article will be a primitive data type.

A derived type is a type that is programmer created and not part of the language. You can create these using [classes/structs](/classes).

## Booleans

Booleans are essentially values that can be used to say if something is `True` or `False`. This comes up a lot in programming, and is often used in conjunction with [conditionals](/definitions/conditionals) to run code if a certain condition is met. 

In most languages these are defined by `True`, or `true` or `1`, and `False` or `false` or `0`. Here is an example of setting a variable to say if it's spring or not in python:

```python
is_summer = False
is_winter = False
is_fall = False
is_spring = True
```

Javascript is the same but lowercase:

```js
isSummer = false
isWinter = false
isFall = false
isSpring = true
```

### Truthyness

In many languages other data types can be checked as if they were booleans to check if they "exist". For example in python empty lists and empty strings are considered `False`.

For example in python:

```python
bool("") # Empty strings are False
bool(0) # 0 is False
bool([]) # Empty lists are False
bool(()) # Empty Tuples are False
bool({}) # Empty sets are False
bool(dict()) # Empty dicts are False

bool("Hi") # True
bool(1) # True
bool(5) # True
```

Javascript is more complicated:

```js
Boolean("") // Empty strings are false
Boolean(0) // 0 is false


Boolean([]) // Empty lists are true
Boolean({}) // Empty JSON objects are true
```

## Numbers

There are several different forms of numbers that exist in programming. There are more than are listed here, this just covers the basics.

### Integers

Integers are whole numbers (no decimals), they are positive **and** negative. In python you just type in a whole number to use them. Also in python division using integer division (`//`) will **always** be an integer:

```python
x = 1
y = -1

large_number = 1_000_000 # Underscores can be used to seperate digits for readability

num = 4 // 2 # Integer division (//) will ALWAYS be an integer
num = 3 // 2 # Will be 1
```

Same thing with javascript:

```js
x = 1
y = -1

large_number = 1_000_000 // Underscores can be used to seperate digits for readability
```

### Floats

Floats (floating point numbers) are decimal numbers. This includes positive **and** negative numbers.

### Lengths

In some languages there are multiple types of integers and floats based on the length/precision. These are less important in languages like javascript/python, but other languages will have constraints for how big numbers can be based on type. For example:

- `i8`,`i16`,`i32`,`i64` etc.; This type is used in many languages to tell you how many digits can be used for integers. Take the number subtract one and raise it to the second power to see the largest/smalles number it can represent. For example `i8` can represent -2^7 to 2^7

There are a ton of these in languages, and they often have slightly different meanings, but here are a few to keep in mind:

- `f8`,`f16`,`f32`,`f64` etc.
- double's
- long's
- long long's
- BigInt
- BigFloat/BigDecimal
- Complex
- etc.

### Signed vs unsigned

Under the hood all numbers are just binary (1's and 0's). You can see how to do these conversions [here](https://www.youtube.com/watch?v=rsxT4FfRBaM). But as part of this there is then a question of how to handle negative numbers. The way most languages solve this is by reserving the first digit in binary to indicate positive or negative. This is called a signed value.

For example `1111` is -7 if it's a signed value (first 1 means negative, and 111 is the actual binary number), and 15 if it's unsigned.

## Text

There are several ways to represent text in most programming languages based on what you need.

### Char

A char is a single character. In many languages this type is actually an integer under the hood. There will be a list where each character has a number corresponding to it and you can convert back and forth between them. Python and Javascript don't use Char's, but in python you can see this text-number conversion with the `ord()` and `chr()` functions:

```python 
ord("a") # 97

chr(97) # 'a'
```


### String

Strings are what we think of as normal text. They allow for the storage of text, in some languages this can be text of any length, in others it's a fixed-length amount of text. In some languages strings consist of [arrays](/definitions/collections) of [Char](#char)'s, in other's they're their own custom type.

In python and javascript they use unlimited (except by system resources) length strings. You can use either double `"` or single quotes `'` to wrap around strings, and you can use 3 of them to do multiline strings:

```python

greeting = "Hello World"
greeting = 'Hello World'


paragraph = """Why hello there,

This string spans multiple lines
"""
paragraph = '''Why hello there,

This string spans multiple lines'''
```

In Javascript you can use either double `"` or single quotes `'` to wrap around strings or use a tilde `\`` to indicate multi-line strings:

```js
greeting = "Hello World"
greeting = 'Hello World'


paragraph = `Why hello there,

This string spans multiple lines
`

paragraph = `Why hello there,

This string spans multiple lines`

```

#### Whitespace Characters

In strings there are often times where you need to include some sort of whitespace. For example this might be instering a newline character in order to simulate pressing the enter key in most text editors (`\n`), or a character to indicate the same effect as pressing tab (`\t`). These are called whitespace characters. They tend to be pretty universal. 


For example in python:

```python

greeting = "Hello there!\nMy name is Kieran. Here are my favourite hobbies\n\t- Skiing\n\t- Coding"

```

In javascript it's the same:

```js

greeting = "Hello there!\nMy name is Kieran. Here are my favourite hobbies\n\t- Skiing\n\t- Coding"

```

Both of these messages would result in:

```
Hello there!
My name is Kieran. Here are my favourite hobbies
    - Skiing
    - Coding
```

#### Formatting

With strings in most languages there are various ways of doing formatting. Formatting allows you to inject data into strings. 

For example let's say you want to have a template email where the variables for recipient (person recieving email) and sender. In python you can put an `f` in front of a string to turn it into a "format string", from there you put the variables inside squigly braces (`{}`), and they will be replaced by the values:

```python
sender = "Kieran"

recipient = "you"

email = f"""
Hello {recipient},

We appreciate you reaching out, we are not open on the weekend and will re-open on monday at 9am to address your email.

Thanks,
{sender}
"""

```

The same can be done in javascript with strings that use a ``` by using squigly braces that have a `$` in front:

```js
sender = "Kieran"

recipient = "you"

email = `
Hello ${recipient},

We appreciate you reaching out, we are not open on the weekend and will re-open on monday at 9am to address your email.

Thanks,
${sender}
`
```

Keep in mind there are security implications to doing this in situations where text is being used to run other code.

#### Encoding

Text under the hood is represented as numbers for each character, there are then different sets of numbers that allow for different sets of characters. These are called the encodings. Different systems use different encodings in order to allow different characters. 

For example ASCII is a very simple encoding that allows 127 different characters. In ASCII 'a' would be 97. Unicode is a set of different encodings that allow for a lot more characters. UTF-8 allows 1,112,064 characters, in our example case 'a' would still be 97, but this is not the case in every encoding. Also because UTF-8 supports more characters you have to be careful with conversions. Japanese characters work in UTF-8 for example, but **not** ASCII.

### Type coercion

Type coercion is the idea that some types can be converted into others using some sort of common representation. For example many strings that contain numbers can be converted from strings to number types. Here is a python version of trying to convert a string into an integer:

```python
int("12") # Returns an integer of 12
```

Here is the javascript equivalent:

```javascript
parseInt("12") // returns an integer of 12
```

This may seem handy but different languages have different rules for how and when this happens. For two confusing examples we can look at javascript:

```javascript
// Example 1
1 + "1" // "11"
"1" - 1 // 0
"123" * 3 // 369
```

In the first example what type the result is depends on the operator you use. Python will have different behaviours. The first two statements will error, but the multiplication...:

```python 
# Example 1
"123" * 3 # "123123123"
```

Type coercions can be dangerous because they are unpredictable. Not everything converts in ways that are obvious. Here is another javascript example:

```js
// Example 2
('b' + 'a' + + 'a'+ 'a').toLowerCase() // 'banana'
```

This example the two + signs throw an error. This error creates a variable with a type of `NaN`. This `NaN` object which is then type coerced to a string, so b gets added to a, which gets added to NaN (as a string) when the broken string gets added to a, which gets added to a and leaves you with "banana".

## Weak vs strong typing

There is an important distinction between various different programming languages. There are two different types of languages as far as types go, stronly typed and weakly typed. 

Weakly typed languages like python and javascript **do not require** you to specify what type each variable is when you create it, instead the type of a variable is **implied** and **changeable**.

So in python you can do something like this:

```python
name = "kieran"
name = 0
name = ["hello", "world"]
```

The only way you can tell what type something is would be to use the `type()` function, see [type checking](#type-checking) for details. You can also add type hinting, which can be useful in ambiguous situations. If you have never heard of [type hints](https://docs.python.org/3/library/typing.html), they are used to define what data type each of the variables/attributes should be. For example a string variable called name would look like this:

```python
name:str
```

And if the variable can more than one type you have the first type on one side of a | and then the other option for the type. So `str | None` would mean the variable could be a string, or a `None` like this:

```python
name: str|None
```

Strongly typed languages like rust and java require you to specify the type of a variable as you declare it. Additionally you **cannot change** the type of a variable.For example in java we have to say what type the variable is:

```java
String name = new String("Kieran");

name = 33; // Throws an error
```

The format in Java is:

```java
Type variableName = value;
```

## Type checking

Type checking is a method in languages to check the types of variables. You can then use [conditionals](/definitions/conditionals) to take certain actions based on these types. In python for example:

```python
type("Hello") # Class <str>

print(type("Hello") == str) # Prints True
```

and in javascript:

```javascript
typeof("Hello") // 'string'
console.log(typeof("Hello") == 'string') // Prints true
```

Python type checking can be very useful, in javascript it it often more confusing than it is helpful because not everything returns values you would expect. The type below is called a [list](/definitions/list), but in javascript it would be called an `object`, several dozen other types would also be called an `object`, which makes checking for it largely useless:

```javascript
typeof([1,2,3]) // 'object'
```

Javascript only has String, Number, Object,Date,Array,Boolean, null https://www.w3schools.com/js/js_typeof.asp, whereas python has hundreds of types to differentiate data!

