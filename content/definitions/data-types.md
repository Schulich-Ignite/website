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
- data-types
---

Everything starts with data in programming. If you want to be able to do anything you need to be able to work with data. But not all data is formatted the same. Data types are the basic building blocks that let you define what data looks like.

## Weak vs strong typing

## Booleans

### Truthyness

- Some languages "like python" will make things true/false based on conditions (empty lists, emtpy strings etc.)

## Numbers


### Integers

### Floats


### Lengths

available in some languages, are considered seperate "types" based on length they allow
- doubles
- longs
- i32
- etc.

## Text

### String

### Char

### Byte-arrays

### Type coercion


```python
int("12") # Returns an integer of 12
```

```javascript
parseInt("12") // returns an integer of 12
```

- Javascript has an ungodly amount of this


```javascript
('b' + 'a' + + 'a' + 'a').toLowerCase() // 'banana'
```
- This example the two + signs create a NaN object which is then type coerced to a string because web developers are useless


## Type checking


```python
type("Hello") # Class <str>

print(type("Hello") == str) # Prints True
```


```javascript
typeof("Hello") // 'string'
console.log(typeof("Hello") == 'string') // Prints true
```

- Basically useless in JS, like the rest of js

```javascript
typeof([1,2,3]) // 'object'
```

- JS only has String, Number, Object,Date,Array,Boolean, null https://www.w3schools.com/js/js_typeof.asp

