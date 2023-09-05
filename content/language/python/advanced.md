## Type hints

Type hints are a way in python to specify the **intended** type of a variable (not enforced just highly suggested). This works by having a colon, then the type declaration for each varaible/parameter/attribute. You can even include details about return types in functions with `def function_name(parameter) -> return_type` For example:

```python
age = 21

def greet(name):
   return f"Hello {name}"

class Animal:
   def __init__(self, name):
      self.name = name
```

Can be converted to:

```python
age:int = 21

def greet(name:str) -> str:
   return f"Hello {name}"

class Animal:
   def __init__(self, name:str):
      self.name:str = name
```

This gives an indication to people running your code which data types they should use. Along with this there are a few special types to keep in mind (most need to be imported from the typing module):

| Type | Usage | Example | 
|------|-------|---------|
| Union | To indicate one type **OR** another | A variable called age which can be a string or int could be given as `age:Union[str,int] = "Twenty Three"` |
| Literal | The avlue for the variable is literally one of the subscripted values | x is 2, 4 or 6 **only** `x:Literal[2,4,6]` | 
| Tuple | A tuple is an imutable data type similar to a list, this can mean a tuple, or is used to indicate multiple return values | The function `func()` returns an int and a bool in that order `def func() -> Tuple[int, bool` | 
| List | A list is a collection. Collections can be subscripted to tell you what's inside | users is a list of list of strings `users:List[List[str]] = [["kieran"],["James"]]`
| Callable | This means any object that has a `__call__()` method including functions (yes they are objects) | Passing the function `do_stuff()` to `time(func:Callable)` so it can run it and time it `time(do_stuff)` |  

### Enforcing types (TODO)

...

- Pydantic
- pypy
- mypy

## Properties (TODO)

...

- Setters and getters

```python
MINIMUM_TEMPERATURE_CELCIUS = -273

class City:
    def __init__(self, name, population, temperature=0):
        self.name = name
        self.population = population
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property
    def population(self) -> int:
        api_result = 1_000_000 # A fake call to the external API
        self._population = api_result
        return self._population

    @temperature.setter
    def population(self, value):
        # No special processing
        self._population = value

    @property
    def temperature(self):
        print("Getting value...")
        return self._temperature

    @temperature.setter
    def temperature(self, value):
        print("Setting value...")
        if value < MINIMUM_TEMPERATURE_CELCIUS:
            raise ValueError(f"Temperature below {MINIMUM_TEMPERATURE_CELCIUS} is not possible")
        self._temperature = value
```

## Magic methods (TODO)

...
- `__init__()`
- Conversions: `__repr__()` & `__str__()`
- Operators: `__add__()` & `__mul__()` & `__div__()`
- Logic comparison: `__lt__()`, `__gt__()`, `__le__()`, `__ge__()`, `__eq__()`

- Dangers of implementing your own magic methods

Class/data-structure type magic methods
- `__call__()` for callable classes
  - Be careful with this
- `__getitem__()` & `__setitem__()` for key-value pairs
  - hash-maps
  - dictionaries
  - etc.
- `__len__()` for container-like structures
  - lists
  - arrays
  - linked-list
  - doubly-linked-lists
- `__enter__()` & `__exit__()` for [context managers](#context-managers)
  - files
  - sockets
- `__iter__()` & `__next__()` for [iterators](#iterators)

## Iterators (TODO)

...

### List comprehensions

A list comprehension syntactically shorter way to produce a list of values with a simple calculation. It is intended to replace the design pattern of:

1. instantiating an empty list
2. Iterate and store values in the list
3. return or use list values.

For example:

```python
result = [] # 1. Initialize empty list

# 2. Iterate and store values in the list
for number in range(10): # Square numbers from 0-9 and add them to the result list
    result.append(number**2)

print(result) # 3. Return or use list values
```

Can be shortened to:

```python
result = [number ** 2 for number in range(10)] # Steps 1-2

print(result) # 3. Return or use list values
```

which produces:

```python
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

It does exactly the same as the above example, it is just shorter. The basic syntax is `[operation for variable in iterable]` Were operation is the calculation (or function) being run, variable is the name for the temporary iteration variable made, and iterable is some form of iterable (list, generator, set etc.). We can also do this conditionally, so for example if we wanted to only include even numbers we could do:

```python
evens = [number for number in range(10) if number %2 == 0]
print(evens) # [0, 2, 4, 6, 8]
```

And we can do an if-else statement using:

```python
evens = ["even" if number %2 == 0 else "odd" for number in range(10)]
print(evens) # ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']
```

### Generators (TODO)

...

### Creating your own Iterator (TODO)

...


## Dataclasses

Dataclasses are a special way to define classes in python. They help make classes more efficient, but have some caveats (that I find are positives), namely all your attributes must be defined with type hints. For example here is a `User` class the typical python way:

```python
class User:
   def __init__(self, name, age, birthday):
      self.name = name
      self.age = age
      self.birthday = birthday
```

Now here is the same class in a dataclass:

```python
from datetime import datetime
from dataclasses import dataclass

@dataclass
class User:
      name: str
      age:int
      birthday:datetime
```

The handy thing about this is that the birthday attribute was not clear in the original example. It could have been a 3 value tuple for year, month, day (`(1998,10,28)`), a formatted string `"28-10-1998"` or any other types. But now users know what type they **should use** (this is not enforced).


If you need to run code after a class instance is created you can use `__post_init__(self)`.

### \_\_post\_init\_\_() (TODO)

...


### ClassVars (TODO)

...
- Make sure to have cleanup when deleted

### Fields (TODO)

...

Link to LAMBDA section

## Context managers (TODO)

...

## Lambdas (TODO)

Lambdas are a way in python to declare anonymous functions. What this means is you can assign a function call to a variable. So for example let's take the simplest case, a function that takes in a name and returns a greeting string using the name:

```python 
def generate_greeting(name: str):
   return f"Hello {name}"
```

We can make this a lambda like this:

```python
generate_greeting = lambda name: f"Hello {name}"
```

Lambdas follow the form of:

```python
lambda arguments: # Function body
```

Lambdas always return whatever value is evaluated in the function body. So since we evaluated the string, we get the string back at the end. We can then call it the same way:

```python
generate_greeting("Kieran") # "Hello Kieran"
```

This comes in handy in cases where something needs a `Callable` objet, but you don't need to call it more than once. One example of this is in dataclasses. For some data types (like `List`s) you need to provide a `Callable` object (object with a `__call__()` funtion) to initialize an attribute that is a list. So you can do this with a lambda that returns an empty list like so:

```python
from dataclasses import dataclass, field

empty_list = lambda : []

@dataclass
class Student:
   grades:List[int] = field(default_factory=empty_list) # Initialize Student.grades to an empty list
```

## Decorators (TODO)

...
