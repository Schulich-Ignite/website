---
name: variables
aka:
- vars
- let
- const
tags:
- beginner
- data-structures
---

When working with code you will inevitably want to store some information. To store information we use variables. Variables are basically labels we can use to refer to information more easily. Different languages have different rules about how to create variables, and how to use them, but every language has variables in some form.

## Mutability

Mutability is the concept that you can change variables. Some types of data you store are able to be mutated so that their content can be changed, others cannot. If a variable cannot be changed it is called an immutable variable.

### Constants

Constants exist in some languages, constants cannot be updated regardless of the type used. These are good for things that don't change (like the value of PI, or the [gravitational constant](https://en.wikipedia.org/wiki/Gravitational_constant))

## Assignment/reassignment

When creating a variable you will need to assign it some data. Some operations you preform on the data will mutate the data, others will not. Here are some examples in python of assignment, mutating operations, and non-mutating operations:

```python
# Assignment
age = 24

# Mutation (changes data)
## Add one to age and reassign it to the age variable
age = age + 1
age += 1 # Same thing as above, just shorter

# Non-mutating operations (doesn't change data)
age + 1
```

Here is the javascript equivalent:

```javascript
// Assignment
age = 24

// Mutation (changes data)
/// Add one to age and reassign it to the age variable
age = age + 1
age += 1 // Same thing as above, just shorter

// Non-mutating operations (doesn't change data)
age + 1
```

## Variable scope

Variables don't exist forever. If they did then long running programs would be very inefficient. What programming languages do instead is they *scope* variables, so they get deleted when they're no longer needed. The scoping rules, and how they apply differ by language.

This also helps to avoid some common issues that might come up with variables. For example lets say you have some code that uses the variable `name` then later you have some code that also uses `name`. In this case whichever one comes last would override the other. However if they are in different scopes, then they can be used independent of one another.

### Global

Most languages have a concept of a "global" scope. This is basically where any of the variables in this scope can be modified from anywhere. Sometimes this is necessary, but most of the time this creates bugs because any part of the software can change this data. That means that if you are trying to use the variable `name` for the users name, and `name` for a dog, then the variable will be overridden with one or the other.

In javascript `var` is used to declare **global** variables. This means they can be modified from **anywhere** in the code. 

```javascript
var name = "Kieran" // Global
let name = "Kieran" //Scoped
name = "Kieran"     // Scoped
```

In python you need to use the global keyword:

```python
global name = "Kieran"
```
