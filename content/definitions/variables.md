---
name: Variables
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

In python this gets a bit more complicated you need to use the global keyword. When you use the global keyword in a function, it tells Python to look for the variable in the global scope instead of the local scope. This means that if you modify the value of a global variable inside a function, the change will be reflected in the global scope, and not just within the function. Take this example:

```python
count = 0

def increment():
    count += 1

increment()
print(count) # 1
```

This code throws am error: `UnboundLocalError: local variable 'count' referenced before assignment`

This is because `count` exists **outside** the function, which means it can't be accessed inside `increment()` because `increment()` only has access to variables that are inside the function. To get this to work we would need to do: 

```python
count = 0

def increment():
    global count # Code wouldn't run without this line
    count += 1

increment()
print(count) # 1
```

Please note that (unfortunately) python does let you **read** global variables without scoping them, but not modify them. For example:

```python
name = "kieran"

def print_name():
    print(name)

print_name()
```

#### Global variables are scary

Using the global keyword in Python can be dangerous because it can lead to unexpected behavior and make code harder to understand and maintain. Here are some of the dangers of using global:

1. **Name clashes**: If you use the same variable name both as a global and local variable, it can lead to unexpected behavior and errors.
1. **Readability and maintainability**: Global variables can make it harder to understand the flow of the code and make it harder to maintain and modify the code in the future.
1. **Debugging**: When debugging code that uses global variables, it can be difficult to trace where a value is being modified or accessed.
1. **Side effects**: Global variables can have unintended side effects on other parts of the code, making it harder to reason about the behavior of the program.


