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

## Packing and Unpacking

When looking at collections you can "unpack" them. This basically allows you to break them up into peices. For example:

```python
shopping_list = ["eggs", "ham", "spam"]

item1, *remainders = shopping_list

print(item1) # 'eggs'
print(remainders) # ['ham', 'spam']
```

The `*remainder` will "unpack" values. This basically will "consume" collections. So `item1` will access the first item in the list, and `*remainders` will unpack the remaining values into it. This can be used in a ton of situations, one major one is to unpack variables as parameters for functions. So for example let's say someone has a tuple with coordinates `coords = (x, y, z)`, and a function `process_object(x, y, z)`, we can unpack the `coords` variable into the function:

```python
coords = (x, y, z)
process_object(*coords) # Same as process_object(x, y, z)
```

You can also use this to do the oposite and "pack" values to allow for any number of parameters in a function (they will be put into a tuple):

```python
def function(*parameters):
  print(parameters)

function(1, 2, 3, 4, 5) # Prints: (1, 2, 3, 4, 5)
```

You could then unpack them using `*`:

```python
def function(*parameters):
  print(*parameters)

function(1, 2, 3, 4, 5) # Prints: 1 2 3 4 5
```

You can also do this with dictionaries, but it's more complex. It will allow you to get the keys and values from a dictionary. So one useful case is combining two dictionaries. For example let's say you have some of your user info in one dict, and some in another that you want to combine:

```python
user_info_1 = {
  "id": 1,
  "first_name": "Dene",
  "last_name": "Atwill",
}

user_info_2 = {
  "first_name": "Dene",
  "email": "datwill0@wordpress.com",
  "gender": "Male",
  "ip_address": "38.119.114.174"
}

user_info = {**user_info_1, **user_info_2} # {'id': 1, 'first_name': 'Dene', 'last_name': 'Atwill', 'email': 'datwill0@wordpress.com', 'gender': 'Male', 'ip_address': '38.119.114.174'}
```

Additionally this can be used to capture keyword arguments:

```python 
def function(**keyword_arguments):
  print(keyword_arguments) 

function(first_name= "Dene", last_name="Atwill") # prints: {'first_name': 'Dene', 'last_name': 'Atwill'}
```

One great use for this is that it will allow you to write a function that allows you to pass config variables to a function, and you never have to change the function signatures to support new config variables!

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

## Higher order functions

A higher order function will allow you to run code before and after a function executes. To explain how this works you need to understand that **EVERYTHING** in python is an object, including functions. If I look at this example:

```python
def foo(a, b):
  return b-a

print(type(foo)) # <class 'function'>
```

We can see the type of foo is the class function. Specifically it's a class that runs the function body when `__call__()` is called. Adding a parenthesis to the end of a class causes this `__call__()` to happen, so `foo()` is a shortform for `foo.__call__()`. So since it's a class we can pass it as an object the same way we could with other classes and call it later. This can help us solve some more awkward issues like timing functions.

Let's say we want a function we can use to measure how long a function takes to run, the basic code would look like this:

```python
import time

def foo(a, b):
  time.sleep(.3)
  return b-a

before = time.time()
foo(1,2)
after = time.time()

time_taken = after-before

print(f"foo() took {time_taken}") # foo() took 0.30090832710266113
```

So turning this approach into a function we get:

```python
import time

def foo(a, b):
  time.sleep(.3)
  return b-a

def time_function(function_to_time):
  before = time.time()
  function_to_time(1,2)
  after = time.time()
  time_taken = after-before
  return time_taken

print(f"foo() took {time_function(foo)}") # foo() took 0.30090832710266113
```

But, how do we allow for people to pass arguments to the function? We could hardcode passing in 2 parameters, but what if we want to time a function with 3, or 4 parameters? We can allow a function to accept an arbitrary number of arguments to a function using `*`:

```python
import time

def foo(a, b):
  time.sleep(.3)
  return b-a

def time_function(function_to_time, *args):
  before = time.time()
  function_to_time(*args)
  after = time.time()
  time_taken = after-before
  return time_taken

print(f"foo() took {time_function(foo, 1, 2)}") # foo() took 0.30090832710266113
```

`*args` in this case allows us to pass any number of arguments (see [Packing and Unpacking](#packing-and-unpacking) for details and details about using keyword/named arguments).

### Decorators

Decorators are an extra layer of syntactic sugar that allow you to make higher order functions easier to work with. If we take our example of a timing function like this:

```python
import time

def foo(a, b):
  time.sleep(.3)
  return b-a

def time_function(function_to_time, *args):
  before = time.time()
  function_to_time(*args)
  after = time.time()
  time_taken = after-before
  return time_taken

print(f"foo() took {time_function(foo, 1, 2)}") # foo() took 0.30090832710266113
```

From this lets say we want to **always** time the `foo()` function (for example if it was a [benchmark](https://asq.org/quality-resources/benchmarking#:~:text=Benchmarking%20is%20defined%20as%20the,more%20aspects%20of%20their%20operations.) function). We can do this by using an `@` and the function name we want to wrap, and put it before the definition. In order for this to work there is an awkward step, we need to create an inner function, which runs our function:

```python
import time

def time_function(function_to_time):
  def dummy_function(*args):
    before = time.time()
    function_to_time(*args)
    after = time.time()
    time_taken = after-before
    return time_taken
  return dummy_function

@time_function
def foo(a, b):
  time.sleep(.3)
  return b-a

print(f"foo() took {foo(1, 2)}") # foo() took 0.30090832710266113
```

So what just happened? When `foo()` runs `time_function` and passes itself as an instance to `time_function()`. Which is a fancy way to say `foo()` passes itself and it's arguments to `time_function()`. From there we must create a [closure]() to get our variables back. So `dummy_function()` exists to capture `*args` (positional arguments to the function [in our case `1, 2`]).

So all in all we are running `foo()` with it's arguments inside `dummy_function()`, we are then returning the time taken from the function, and with our decorator (the `time_function()`) we are returning the `dummy_function` to be called. So `foo(1,2)` calls `dummy_function(1,2)` and returns it's `time_taken`.

This works great... but keep in mind that when we called `foo()` we got the result of `time_function()` **NOT** the function call. If we wanted the value of the function call we need to capture it in `time_function()`, and return it instead:

```python
import time

def time_function(function_to_time):
  def dummy_function(*args):
    before = time.time()
    result = function_to_time(*args)
    after = time.time()
    time_taken = after-before
    print(f"{function_to_time.__name__}() took {time_taken}") # foo() took 0.30090832710266113
    return result
  return dummy_function

@time_function
def foo(a, b):
  time.sleep(.3)
  return b-a

foo(1,2) # Returns 1
```

If we wanted to return both, we could:

```python
import time

def time_function(function_to_time):
  def dummy_function(*args):
    before = time.time()
    result = function_to_time(*args)
    after = time.time()
    time_taken = after-before
    return result, time_taken
  return dummy_function

@time_function
def foo(a, b):
  time.sleep(.3)
  return b-a

result, time_taken = foo(1,2) # Returns (1, 0.30090832710266113)
print(f"foo() took {time_taken} and had a result of {result}") # foo() took 0.30090832710266113 and had a result of 1
```

## Properties (getters and setters)

Properties are a method in python to enforce the getter-setter pattern. This is more popular in languages like Java, but essentially instead of having tons of attributes that you access directly you have methods that control access to, and modification of certain attributes. This is useful for various scenarios such as:

- Ensuring a provided value is within a range when trying to set an attribute to the value
- If a value is taken from a remote service then ensuring it is up to date when accessing
- In asynchronus contexts it can be used to ensure locks and safe concurrent access/writes

Let's say for example you have an app that displays a dashboard about a city, this includes the name, population and temperature. When people access the population and temperature you want to access external services (like the city registry for population, and a weather monitor for remperature). So every time you want a bit of code to run to make sure the value being accessed is up to date. To do this you can make the attributes for temperature and population into properties. Then for each you will need a property declaration (the getter), and a setter. The getter will be used when people call `City.temperature` or `City.population`, and the setter will run when `City.temperature = value` or `City.population = value` is called.

```python
MINIMUM_TEMPERATURE_CELCIUS = -273 # Absolute zero in celcius

class City:
    def __init__(self, name, population, temperature=0):
        self.name = name
        self.population = population
        self.temperature = temperature

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

So in this case `temperature()` and `population()` are the getters, which means that when you try to access `City.temperature` this function is called and the result is returned. Syntax wise you need to append an underscore to access the current value. Once you have declared a property, you can then create a setter as a decorator, which would be the functions that also take in `value` as a parameter. 

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
