---
title: Advanced
description: |
  If you haven't covered the basics of python I would recommend looking at [our basic syntax overview](/language/python/syntax). This section will cover more advanced methods that will help you once you have the ability to broadly use python more effectively!
excludeTOC: True
---


{{% collapse heading="Type hints" %}}

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

### Enforcing types

Python does not enforce types on function parameters. But you can make your own type enforcement by doing type comparisons. There are two ways to do this. The first is to use `type()` and compare to the class, for example:

```python
def greet(name:str) -> str:
  if not type(name) == str:
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

class Animal:
  def __init__(self, name:str):
    self.name:str = name

def show_animal(animal:Animal):
  if not type(animal) == Animal:
    raise ValueError(f"{animal} is not an Animal")
  return f"This animal is a {animal.name}"
```

This method works **ok**, but it's not the best. For example let's say you have a class that extends the `str` class, it would fail that check:

```python
class MyString(str):
  def __init__(self,value:str):
    if not type(value) == str:
      raise ValueError(f"{value} is not a string")
    self.value = value

  def __str__(self) -> str:
    return self.value  


def greet(name:str) -> str:
  if not type(name) == str:
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

greet(MyString("Kieran")) # ValueError: Kieran is not a string
```

If we want to include subclasses we should use `isinstance()`:

```python
class MyString(str):
  def __init__(self,value:str):
    if not type(value) == str:
      raise ValueError(f"{value} is not a string")
    self.value = value

  def __str__(self) -> str:
    return self.value  


def greet(name:str) -> str:
  if not isinstance(name, str):
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

greet(MyString("Kieran")) # Hello Kieran
```

Here are some good types you can use with `isinstance()` that are more general:

|Type|Uses|package|
|----|----|-------|
| Number | All number types (int and float) work with it |[numbers](https://docs.python.org/3/library/numbers.html).Number|
| Iterable | Any type that can be iterated (a for loop works on it) | Iterable |
| Callable | Any type that can be called with parenthesis `()` (like function objects) | Callable |

For example:

```python
from numbers import Number
print(isinstance(1,Number)) # True
print(isinstance(1.2,Number)) # True
print(isinstance(1j,Number)) # True

from typing import Iterable
print(isinstance([],Iterable)) # True
print(isinstance("",Iterable)) # True
print(isinstance({},Iterable)) # True

from typing import Callable

def greet(name:str) -> str:
  if not isinstance(name, str):
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

is_str = lambda s: isinstance(s, str) # Anonymous function

class SquareNum:
    def __init__(self, num:Number):
        if not isinstance(num, Number):
            raise ValueError(f"{num} is not a Number")
        self.num=num
    
    def __call__(self) -> Number:
        return self.num *self.num

print(isinstance(greet, Callable)) # True
print(isinstance(is_str, Callable)) # True
print(isinstance(SquareNum, Callable)) # True

```

While this works there are even better solutions. [Pydantic](https://docs.pydantic.dev/latest/) is a python package that's designed to help make data validation easy. The package helps with a few things, but mostly it helps solve a very annoying situation that happens constantly. When you get data from a server it will often come down as JSON, which will be converted to a python dictionary. These dictionaries can sometimes be very large. Here's an example from their website:

```python

from pydantic import BaseModel, PositiveInt
class User(BaseModel):
    id: int  
    name: str = 'John Doe'  
    signup_ts: datetime | None  
    tastes: dict[str, PositiveInt]  


external_data = {
    'id': 123,
    'signup_ts': '2019-06-01 12:22',  
    'tastes': {
        'wine': 9,
        b'cheese': 7,  
        'cabbage': '1',  
    },
}

user = User(**external_data)  # Valid data, creates without issue NOTE: cabbage will have int(1) as value not str("1")

external_data = {'id': 'not an int', 'tastes': {}}  

User(**external_data)  # Invalid data, raises ValidationError
```

There are some more strict systems you can use if you want to enforce static typing (checking before you run code). The most popular is [mypy](https://www.mypy-lang.org/), which throws errors if you try to run code that might have the wrong type. There's also a newer library called [pyre](https://pyre-check.org/) from meta (formerly facebook) which has a [playground you can test with](https://pyre-check.org/play?input=%23%20Pyre%20is%20being%20run%20in%20gradual%20typing%20mode%3A%20https%3A%2F%2Fpyre-check.org%2Fdocs%2Ftypes-in-python%2F%23gradual-typing%0A%23%20Use%20the%20%60%23%20pyre-strict%60%20header%20to%20run%20in%20strict%20mode%2C%20which%20requires%20annotations.%0A%0Afrom%20typing%20import%20*%0A%0A%23%20reveal_type%20will%20produce%20a%20type%20error%20that%20tells%20you%20the%20type%20Pyre%20has%0A%23%20computed%20for%20the%20argument%20(in%20this%20case%2C%20int)%0Aclass%20Animal%3A%0A%20%20%20%20def%20__init__(self)%3A%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%20%20%0Aa%20%3D%20Animal()%0A%0Adef%20foo(a%3AAnimal)%20-%3E%20Animal%3A%0A%20%20%20%20return%20a%0A%0Afoo(a)%0Afoo(3)%0A).

There's a few others:

- [Google Pytype](https://google.github.io/pytype/)
- [Microsoft Pyright](https://github.com/Microsoft/pyright)

{{% /collapse %}}

{{% collapse heading="Packing and Unpacking" %}}

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
{{% /collapse %}}


{{% collapse heading="Magic/dunder methods" %}}

Magic/dunder methods are special types of methods that have some sort of special functionality in python. They're often called magic methods, but they're also called dunder (double underscore) methods because they all follow the patern `__<name>__()`. If you've created a class before you've actually used one before `__init__()`. Why can't you have an initialize method just called `init()` or `start()`? Because `__init__()` is reserved as a name and is invoked when the code that creates an instance is called, which is why it works at all.

There are tons of other existing dunder methods to interact with various aspects of python.

### Printing

For example let's say you have a `User` class, when you try to print it to the console you will get something like `<__main__.User object at 0x0000017CC4F90310>`. This isn't super useful, so how could we instead override what prints when we call print on an object? Let's say we have a `name` and `age` attribute, and we want to print `<name>: <age>`.

There is a built in magic method called `__repr__()` (I believe this is a short version of **repr**esentation), this allows you to override the representation of the object (which is what's printed). All we need to do is return a string with what we want to print, for example:

```python
class User:
    def __init__(self, name, age):
      self.name = name
      self.age = age
    
    def __repr__(self):
      return f"{self.name}: {self.age}"

print(User("Kieran", 24)) # Prints: "Kieran: 24"
```

### Conversions

There are tons of magic methods you can define to convert between types. These will also apply in *implicit conversions* (i.e. when printing something a call to convert the object into a string happens). These methods tend to follow this pattern when defined:

```python
def __<type>__(self):
  return value
```

Where type is some type (i.e. `str`, `int`, `float`), and `value` is some value of that type (i.e. `"Class"`, `12`, `3.14`). Let's say for example we have a class (`MyValue`), that class takes in an int or float, and then when casted to a string returns the word representation of a number (i.e. `1` would be `"One"`), and other number types (`int`,`float` return that type of data):

```python
# Define lists of words for numbers 1-19 and multiples of 10 up to 90 (used in string conversion)
ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

class MyValue:
    def __init__(self, value):
      if not type(value) in [float, int]:
        # Try to cast invalid values into a float
        value = float(value)
      self.value = value

    def __int__(self):
      # Returns a int representation of the object
      return int(self.value)

    def __float__(self):
      # Returns a float representation of the object
      return float(self.value)
    
    ###### Defining helper functions to help with the string conversion ######

    def convert_less_than_hundred(self, number):
        # Function to convert a number less than 100 to text
        if number < 20:
            return ones[number]
        else:
            return tens[number // 10] + " " + ones[number % 10]

    def convert_less_than_thousand(self, number):
        # Function to convert a number less than 1_000 to text
        if number < 100:
            return self.convert_less_than_hundred(number)
        else:
            if number % 100 == 0:
                return ones[number // 100] + " Hundred"
            else:
                return ones[number // 100] + " Hundred and " + self.convert_less_than_hundred(number % 100)
    
    def convert_less_than_million(self, number):
        # Function to convert a number less than 1_000_000 to text
        thousands = number // 1000
        remainder = number % 1000
        if remainder == 0:
            return self.convert_less_than_thousand(thousands) + " Thousand"
        else:
            return self.convert_less_than_thousand(thousands) + " Thousand " + self.convert_less_than_thousand(remainder)
    
    def convert_less_than_billion(self, number):
        # Function to convert a number less than 1_000_000_000 to text
        if number >= 1_000_000_000:
            raise ValueError(f"Number provided is too large (only up to billions accepted) recieved: {number}")
        millions = number // 1000000
        remainder = number % 1000000
        if remainder == 0:
            return self.convert_less_than_thousand(millions) + " Million"
        else:
            return self.convert_less_than_thousand(millions) + " Million " + self.convert_integer_to_text(remainder)
    
    def convert_integer_to_text(self, number):
        # Takes in an integer, and converts it to text
        if not isinstance(number, int): # Confirm value is an int
            raise ValueError(f"Value not an integer {number}")
        
        # Handle simple & edge cases cases
        if number == 0:
            return "Zero"
        elif number < 0:
            return "Negative " + self.convert_integer_to_text(-1 * number)

        # Handle 1-999
        elif number < 1000:
            return self.convert_less_than_thousand(number)

        # Handle 1000-999_999
        elif number < 1_000_000:
            return self.convert_less_than_million(number)

        # Handle 1_000_000-999_999_999
        else:
            return self.convert_less_than_billion(number)

    ###### End of Defining helper functions to help with the string conversion ######

    def __str__(self):
        # Returns a string representation of the object
        number = self.value
        # Handle float input
        if isinstance(number, float):
            # Split into part before decimal (integer_part) and after (fractional_part)
            integer_part, fractional_part = str(number).split('.')

            # Convert each part to a str
            integer_text = self.convert_integer_to_text(int(integer_part))
            fractional_text = " ".join([ones[int(n)] if int(n) > 0 else "Zero" for n in fractional_part])
            # Combine if fractional_text exists, else skip and return just integer part
            if fractional_text:
                return integer_text + " point " + fractional_text
            else:
                return integer_text

        # Handle integer input
        elif isinstance(number, int):
            return self.convert_integer_to_text(number)   
```

We can then test this with:

```python
# Test converting integers to strings
print(str(MyClass(1))) # Prints: 'One'
print(str(MyClass(10))) # Prints: 'Ten'
print(str(MyClass(20))) # Prints: 'Twenty Zero'
print(str(MyClass(12))) # Prints: 'Twelve'
print(str(MyClass(45))) # Prints: 'Forty Five'
print(str(MyClass(375))) # Prints: 'Three Hundred and Seventy Five'
print(str(MyClass(5_231))) # Prints: 'Five Thousand Two Hundred and Thirty One'
print(str(MyClass(25_231))) # Prints: 'Twenty Five Thousand Two Hundred and Thirty One'
print(str(MyClass(954_231))) # Prints: 'Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'
print(str(MyClass(8_954_231))) # Prints: 'Eight Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'
print(str(MyClass(85_954_231))) # Prints: 'Eighty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'
print(str(MyClass(345_954_231))) # Prints: 'Three Hundred and Forty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'
print(str(MyClass(999_999_999))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Ninety Nine Thousand Nine Hundred and Ninety Nine'

# Test converting floats to strings
print(str(MyClass(1.0))) # Prints: 'One point Zero'
print(str(MyClass(10.15))) # Prints: 'Ten point One Five'
print(str(MyClass(20.2))) # Prints: 'Twenty Zero point Two'
print(str(MyClass(12.34))) # Prints: 'Twelve point Three Four'
print(str(MyClass(45.734))) # Prints: 'Forty Five point Seven Three Four'
print(str(MyClass(375.841))) # Prints: 'Three Hundred and Seventy Five point Eight Four One'
print(str(MyClass(5_231.9591))) # Prints: 'Five Thousand Two Hundred and Thirty One point Nine Five Nine One'
print(str(MyClass(25_231.12345))) # Prints: 'Twenty Five Thousand Two Hundred and Thirty One point One Two Three Four Five'
print(str(MyClass(954_231.324698))) # Prints: 'Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Three Two Four Six Nine Eight'
print(str(MyClass(8_954_231.5454654))) # Prints: 'Eight Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Five Four Five Four Six Five Four'
print(str(MyClass(85_954_231.45657988))) # Prints: 'Eighty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Four Five Six Five Seven Nine Eight Eight'
print(str(MyClass(345_954_231.5454654))) # Prints: 'Three Hundred and Forty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Five Four Five Four Six Five Four'
print(str(MyClass(999_954_231.0567646))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Zero Five Six Seven Six Four Six'
print(str(MyClass(999_999_999.9999999))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Ninety Nine Thousand Nine Hundred and Ninety Nine point Nine Nine Nine Nine Nine Nine Nine'

# Test converting floats to ints
print(int(MyClass(1.0)))    # Prints: 1
print(int(MyClass(10.15)))  # Prints: 10
print(int(MyClass(20.2)))   # Prints: 20
print(int(MyClass(12.34)))  # Prints: 12
print(int(MyClass(45.734))) # Prints: 45

# Test converting ints to floats
print(float(MyClass(1)))  # Prints: 1.0
print(float(MyClass(10))) # Prints: 10.0
print(float(MyClass(20))) # Prints: 20.0
print(float(MyClass(12))) # Prints: 12.0
print(float(MyClass(45))) # Prints: 45.0
```
  
### Operators

Operators allows you to do operator overloading. This allows you to overwrite what happens when you use an operator (+, -, /, //, % etc.). To do this you just use the pattern of using the operator name with one argument and a return:

```python
class DoMath:
  def __init__(self, value):
    self.value = value

  def __add__(self, value):
    return self.value + value


print(DoMath(5) + 3)
```

Other Operators:

| Function name | Operator |
|`__sub__()`|	`-`|
|`__mul__()`|	`*`|
|`__floordiv__()`|	`//`|
|`__truediv__()`|	`/`|
|`__mod__()`|	`%`|
|`__pow__()`|	`**`|

Keep in mind you can also add an `i` in front of the function name to change the behaviour with assignment operators. For example `__iadd__()` will override behaviour for `+=`

### Logical Comparisons

Logical operators allows you to do logical operator overloading. This allows you to overwrite what happens when you use an operator (`<`, `>`, `<=`, `>=`, `==` etc.). To do this you just use the pattern of using the operator name with one argument and a return (must be a `bool`):

```python
class CheckLessThan:
  def __init__(self, value):
    self.value = value

  def __lt__(self, value):
    return self.value < value

print(DoMath(5) < 3)
```

| Function name | Operator |
|`__lt__()`|	`<`|
|`__le__()`|	`<=`|
|`__eq__()`|	`==`|
|`__ne__()`|	`!=`|
|`__ge__()`|	`>=`|

### Class/data-structure type magic methods

There are also several other dunder methods that exist for creating special types of objects including:

- `__call__()` for callable classes
  - Be careful with this
- `__getitem__()` & `__setitem__()` for key-value pairs (see example in [this post](https://schulichignite.com/blog/verifying-quickly/#hashtable))
  - hash-maps
  - dictionaries
  - etc.
- `__len__()` for container-like structures (what `len()` uses)
  - lists
  - arrays
  - linked-list
  - doubly-linked-lists
- `__enter__()` & `__exit__()` for [context managers](#context-managers)
  - files
  - sockets
- `__iter__()` & `__next__()` for [iterators](#iterators)

### Creating your own dunder methods

Why not create your own magic methods? If you're writing a program it seems "pythonic" to create your own magic methods that can be used by an API (I did this for [this project](https://github.com/Descent098/ezcv/blob/master/ezcv/content.py#L295-L313), where I created `__html__()` to turn a class into HTML). There is an implicit danger with doing this though. 

The PSF (group that makes python) reserves the right to create whatever of these dunder methods they want. This means something like `__html__()` if it ever gets imlemented in python natively will break my app. So if you rely on this in your programs then python can completely break your program at any point, so you need to be careful.

{{% /collapse %}}

{{% collapse heading="Higher order functions" %}}

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
{{% /collapse%}}

{{% collapse heading="Properties (getters and setters)" %}}

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

{{% /collapse %}}


{{% collapse heading="Iterators" %}}

When you use a for loop in python there is something interesting happening under the hood. Iterators are a special type of class that implements the iterator protocol. The protocol operates on classes that have two [magic methods](#magic/dunder-methods). This is what is used when you iterate. For example take this for loop:

```python
shopping_list = ["eggs", "ham", "spam"]

for item in shopping_list:
  print(item)
```

This can functionally be done the same with:

```python
index = 0

while index < len(shopping_list):
  print(shopping_list[index])
  index += 1 
```

You will notice that essentially our loop calls the next item, until there are no more items. This is what the iterator is based on, it asks you to tell it what to call on each iteration (`__iter__()`), and then on each iteration it will call that `Iterable`'s `__next__()` function until a `StopIteration` exception is raised.

### Creating your own Iterator

With that knowledge let's create an iterator to understand how this works:

```python
from typing import List

class ShoppingList:
  def __init__(self, items:List[str]):
    self.items = items
    self.current_index = 0

  def __iter__(self):
    return self # Shopping list is an Iterator and an Iterable
  
  def __next__(self):
    if self.current_index < len(self.items):
        return_value = self.items[self.current_index]
        self.current_index += 1
        return return_value
    raise StopIteration

for item in ShoppingList(["Eggs", "Ham", "Spam"]):
  print(item)
```

This means you can also make `Iterator`s out of things that don't have a defined length. For example let's say you have a database you're looping through, but data is coming in while you're looping. Instead of storing the current state and iterating over that, you can continuously keep iterating until a `StopIteration` is raised!

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

### Generators

A generator is a type of iterator. This will allow you to make an iterator out of results of functions. For example:

```python
def lots_of_numbers():
  for number in range(10_000_000):
    yield number

for number in lots_of_numbers:
  print(number)
```

Essentially you can iterate over results 1 at a time. The question is why? Efficiency.

In order to iterate over 10 million numbers you would normally need to put those numbers in a list, store that list and then iterate over it. This means that data needs to be stored somewhere while iterating. With a generator the value is generated **when it's needed**, and then is "paused" until `next()` is called on it again. So if instead of a full loop I did something like:

```python
def lots_of_numbers():
  for number in range(10_000_000):
    yield number

nums = lots_of_numbers()

print(next(nums)) # prints 0
print(next(nums)) # prints 1
```

Which we can run while using essentially 0 memory. We can also use generators to do memory efficient returns of different values. For example let's say we need to get a bunch of data from an API but don't want to have to store it all we could turn the response into a generator and only process the results one at a time. Lets say for example that `get_user_orders()` sends back a JSON string that we're storing in a file:

```python
def get_user_info():
  yield get_user_name() # "kieran"
  yield get_user_orders() # Returns a large JSON string
  yield get_user_age() # 24

user_info = get_user_info()

print(next(user_info)) # kieran
print(next(user_info)) # prints a large JSON string
print(next(user_info)) # 24
```

This means we only use the memory for `get_user_orders()` when the second `next()` is called, compared to something more traditional like this:


```python
def get_user_info():
  return {
    "name": get_user_name(),
    "orders": get_user_orders(),
    "age": get_user_age()
  }

user_info = get_user_info()

print(user_info) # prints a large JSON string
```

We need to store it in RAM the whole time!


{{% /collapse %}}

{{% collapse heading="Dataclasses" %}}

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

### \_\_post\_init\_\_()

This is a [magic method](#magic/dunder-methods) that runs after your dataclass instance is setup. So for example maybe you want to do some birthday checking to make sure someone's birthday matches their age, and they aren't saying they're over 200 years old:

```python
from datetime import datetime
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age:int
    birthday:datetime

    def __post_init__(self):
      if self.age > 200:
        raise ValueError("You can't be over 200 years old >:(")
      
      if ((datetime.now().year - self.birthday.year) != self.age) and ((datetime.now().year - self.birthday.year) != self.age+1):
        raise ValueError("Your birthday doesn't match your age")
      
      
print(User("Kieran", 24, datetime(1998,10,29)))

# Invalid
print(User("Kieran", 24, datetime(1864,10,5)))
print(User("Kieran", 400, datetime(2023-400,10,5)))
```


### ClassVar's

A class variable is a variable that exists as part of a class **not part of an instance**. This means each instance has **the same value** because it comes from the class they come from. This is handy in many situations such as keeping track of isntances that are created:

```python
from __future__ import annotations
from typing import ClassVar, List
from dataclasses import dataclass

@dataclass
class Slide:
    content: str
    slides: ClassVar[List[Slide]] = []

    def __post_init__(self):
      Slide.slides.append(self)


Slide("Hello World")
Slide("World Hello")
Slide("HeLlO WoRlD")

print(Slide.slides) # [Slide(content='Hello World'), Slide(content='World Hello'), Slide(content='HeLlO WoRlD')]
```

`Slide.slides` will now have a list of every class instance that is created, but keep in mind this means that the instances will **NEVER** be deleted unless you clear them out. So you might end up wasting a ton of memory. You can resolve this by having some sort of `Slide.delete()` method to remove itself from the list when removed:

```python
from __future__ import annotations
from typing import ClassVar, List
from dataclasses import dataclass
@dataclass
class Slide:
    content: str
    slides: ClassVar[List[Slide]] = []

    def __post_init__(self):
      Slide.slides.append(self)
      
    def delete(self):
      Slide.slides.remove(self)

Slide("Hello World")
q = Slide("World Hello")
Slide("HeLlO WoRlD")

print(Slide.slides) # [Slide(content='Hello World'), Slide(content='World Hello'), Slide(content='HeLlO WoRlD')]
q.delete()
print(Slide.slides) # [Slide(content='Hello World'), Slide(content='HeLlO WoRlD')]
```

### Fields

Some types of attributes in dataclasses need to be instantiated in more complex ways. These types require you to use `field()`. For example most lists will need you to use a function to instantiate it:

```python
from typing import ClassVar, List, Any
from dataclasses import dataclass, field

@dataclass
class Student:
  name:str
  age:int
  student_id: str

def create_empty_list() -> List[Any]:
  return []

@dataclass
class School:
  students: List[Student] = field(default_factory=create_empty_list)
```

So in this case the `field()` function takes in a `default_factory` which is a `Callable`. This is a great case for using [anonymous functions/lambdas](#lambdas):

```python
from typing import ClassVar, List, Any
from dataclasses import dataclass, field

@dataclass
class Student:
  name:str
  age:int
  student_id: str

@dataclass
class School:
  students: List[Student] = field(default_factory=lambda: [])
```

{{% /collapse%}}

{{% collapse heading="Context managers" %}}

There are many situations where you will want to have an object exist temporarily, and that object **must** run some code to "close" it. The most common case is files. Check out this python code:

```python
f = open("my_file.txt", "w+")

f.write("some content")

... # more code

f.write("some content")

... # more code

f.write("some content")
```

You will notice we opened the file, wrote to it a few times, and never closed it. Lets say the code between one of the writes took a while, and someone else wanted to write to the file, what happens? In the best case the won't be allowed to write to the file, in the worst case the changes will trample over each other, or just cause a file corruption in some cases (like if an error happens mid-write). This is why we have to close the file between writes:

```python
f = open("my_file.txt", "w+")
f.write("some content")
f.close()

... # more code

f = open("my_file.txt", "w+")
f.write("some content")
f.close()

... # more code

f = open("my_file.txt", "w+")
f.write("some content")
f.close()
```

This is very tedious, and doesn't guarentee you will always remember to close your file. This is where context managers come in. A context manager is an object that defines an "opening", and "close" and will even handle if an error is raised to make sure the file is still closed anyway. You can technically call these manually, but python has a `with` statement that makes this easier:

```python
with open("my_file.txt", "w+") as f:
  f.write("some content")

... # more code

with open("my_file.txt", "w+") as f:
  f.write("some content")

... # more code

with open("my_file.txt", "w+") as f:
  f.write("some content")
```
Now `f` only exists in the indentation level up from the `with` statement! Outside that indentation level it has either not yet been opened, or been closed!

These are implemented with [magic/dunder methods](#magic/dunder-methods).


### Creating your own context managers

To create a context manager you just need a `__enter__()` and `__exit__()` method. For example:

```python
class MyContextManager:
  def __init__(self):
    ...
  
  def __enter__(self):
    print('Opened')
    return self
     
  def __exit__(self, exc_type, exc_value, exc_traceback):
      print('Closed')

  def do_stuff(self):
    print("Hello")

with MyContextManager() as m:
  m.do_stuff()
```

`__enter__()` is self-explanatory, but `__exit__()` has some interesting parameters. Like I said the method will be called even if there is an error thrown. Those parameters tell you if an error occurred (if no error occurs all 3 are `None`):

- exc_type; The type of the error (i.e. `ValueError`)
- exc_value; The instance of the exception raised
- exc_traceback; The [traceback object](https://docs.python.org/3/library/traceback.html) related to the error

{{% /collapse%}}

{{% collapse heading="Lambdas" %}}

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
{{% /collapse%}}
