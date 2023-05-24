---
name: Classes
aka:
- class
- method
- member
- attribute
tags:
- intermediate
- object-oriented
- programming paradigms
- theory
- terminology
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
---

Classes are a programming construct that allows you to organize your code. Essentially you create a class which acts as a kind of template which you can then create instances/objects out of. You can think of this like a cookie cutter being used to make cookies in the same shape. For example you might have a game where you have multiple players, each player has some data associated, and some actions they can take. 

Without classes you would need to track all of this data seperately and find ways to combine it together, but with classes you can have a `Player` class, which can have the data organized in a way that makes it easy to interact with. 

## Attributes/members & methods

Attributes/Members are the name of variables associated with classes, essentially this is the data you want to store. Methods are functions associated with classes.

For example let's say you have a `Player` class that keeps track of people's name, level, inventory and lets each player add items to their inventory. First we could use the `Player` class to create a player instance/object (record of an individual player). Something like this `kieran = Player("Kieran", 1, [])`, where we now have a variable called `kieran`, which is a `Player` with the attributes name `"Kieran"`, the level `1`, and an empty list for the inventory. To get a `Player`'s name you could have `Player.username`, or to register a new item in their inventory you might have `Player.add_to_inventory()`. So for `kieran` we could do `kieran.username` which would return `"Kieran"`, and `kieran.add_to_inventory("sword")` to add a sword to the inventory.

Most importantly the steps for doing all these things are the same for **every** `Player`. This means you can just collect your `Player`'s into a list, and loop through them doing the same actions for every one of them easily!

## Examples of using classes

Below are implementations of the `Player` class from above in Python and Javascript.

### Python

In python **everything** is a class. So it's very easy to get setup with them. Here is an example of the `Player` class from earlier:

```python
class Player:
    def __init__(self, name, level, inventory):
        self.name = name
        self.level = level
        self.inventory = inventory

    def add_to_inventory(self, item):
        self.inventory.append(item)
```

A few things to explain, like most other statements in python everything that is indented after the `:` is considered part of the class. So `__init__()` and `add_to_inventory()` are both methods of the `Player` class. On top of that each of them has a `self` variable at the beginning. The `self` variable refers to the instance, so for example when we create a `PLayer` instance/object using:

```python
kieran = Player("Kieran", 1, [])
```

When creating a new instance/object the `__init__()` function is called. You'll notice there's only 3 items being passed to `__init__()`, that's because `self` is the `kieran` instance passing itself to the init function. This is why in `__init__()` we have `self.name = name` because `name` at this point is just an argument to the function, but `self.name` assigns `name` as an attribute to the instance/object itself! This is why we could do something like this:

```python
kieran = Player("Kieran", 1, [])
kieran.name # "Kieran"
kieran.age # 1
kieran.inventory # []
```

Because `name`, `age`, and `inventory` have been assigned to the instance/object `kieran` itself!

Python also includes a library called [dataclasses](https://docs.python.org/3/library/dataclasses.html), this can be used to create classes that are a bit faster, and also **must** include the types of attributes using [type hints](https://realpython.com/lessons/type-hinting/). This can make them easier to work with long-term since they're more self-documenting. Here is the same player class, but using dataclasses:

```python
from typing import List
from dataclasses import dataclass

@dataclass
class Player:
    name:str
    level:int
    inventory:List[str]

    def add_to_inventory(self, item:str):
        self.inventory.append(item)
```

This works the same way as the other player class except it uses less memory overall (handy if you have a lot of instances/objects), and some people perfer this format!

#### Magic/duner methods

Python has support for magic/dunder (double underscore) methods. These are basically fancy methods that allow for advanced functionality like controlling what happens when you add two classes together. Here are a few of them:

- `__init__()`: This is the magic method that creates a class. It's used to assign attributes to instances, and is run whenever an instance is first created.
- `__post_init__()`: This is a magic method that runs for [dataclasses]() after variables are initialized. This can be useful in cases where values need to be generated via a function (like a `date_created` field that has to get today's date). Details can be found [here](https://docs.python.org/3/library/dataclasses.html#post-init-processing)
- `__repr__()` & `__str__()`: Controls what happens when you print and/or convert an object to a string. Useful for if you need to debug a class. Dataclasses overwrite this method to something more helpful by default, [details here](https://docs.python.org/3/library/dataclasses.html#post-init-processing:~:text=repr%3A%20If%20true,parameter%20is%20ignored.)
- `__add__()`, `__mul__()`, etc.: Operator overriding methods. This allows you to override what happens when you try to add, multiply, subtract, divide etc. with two classes
- `__iter__()`,`__next__()`: Used to create [iterators](https://www.programiz.com/python-programming/iterator) that can be used with for loops. So if you have `Card`s in a `Deck` class you could do `for card in Deck:`
- `__contains__()`: Used to override the `in` keyword. Can be useful in certain situations to enable something like checking if a player is in a game based on username (i.e. `if username in Game:` where Game is a Game class)
- `__enter__()`, `__exit__()`: Used to create [context managers](https://realpython.com/python-with-statement/), essentially code that can use the [with](https://www.geeksforgeeks.org/with-statement-in-python/) statement in python to run specific code at the start and end of a code block. This is useful when you have code that **has** to do things at the end to be safe (i.e. closing files after using them). [ezspreadsheet](https://github.com/Descent098/ezspreadsheet#:~:text=%23%20Store%0Awith%20Spreadsheet,%22animals%22) is an [example](https://github.com/Descent098/ezspreadsheet/blob/master/ezspreadsheet.py#L145-L157) of this. It's a context manager for spreadsheets to load and store objects.

A more exhaustive list can be found [here](https://www.tutorialsteacher.com/python/magic-methods-in-python).

### Javascript

Javascript is the same principle as python, but has some different syntax, here is the `Player` class in javascript:

```js
class Player {
    constructor (name, level, inventory) {
        this.name = name;
        this.level = level;
        this.inventory = inventory;
    }

    add_to_inventory(item){
        this.inventory.push(item);
    }
}
```

In this case the `constructor()` method is where we assign our attributes. To do so we need to pass in any attributes we want to assign, and in the method assign the attributes to `this`. `this` is a way for an instance to reference itself, and works similar to `self` in python (except it's not an argument). Then to use the class we can do:

```js
kieran = new Player("kieran", 1, []);
kieran.add_to_inventory("sword");
```

In order to create a new instance we need to use the `new` keyword. This is what will call our constructor and create the new class instance.

## Object oriented programming

Object-oriented programming (OOP) is a [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) (way to program) based on the concept of objects & classes. Essentially everything is an object, and you build your program using these objects, and creating your own classes and objects. [Java](https://www.java.com/en/) is one of the most popular OOP languages, but there are plenty of others. Most languages allow you to work with multiple paradigms, so for example in python you can call functions on their own i.e. `print("hello")`, whereas in Java you must have a class that calls that function. But do keep in mind that although python looks like it's not object oriented fully, under the hood **everything** is an object (including functions). 

### Inheritance

One of the main advantages of classes people who use object oriented programming talk about is the ability for them to inherit from other classes. What this means is you can have a "base" class, that has some common attributes and methods, which can then be "inherited" from other sub-classes that copy the methods and attributes, while adding their own to it.

For example let's consider an LMS(learning management system; app for doing courses) that has a `User` class, there is then an `Admin` class (given to a teacher), and a `Student` class (given to students). Both `Admin`s and `Student`s will have names, id numbers and emails, but `Admin`s will have courses they teach, and methods to assign a mark to a student, `Student`s will have a set of courses they're enrolled in, and a function to start an exam online. We could model this in python (I will use dataclasses):

```python
from typing import List
from dataclasses import dataclass

@dataclass
class Course:
    name: str

@dataclass
class User:
    name:str
    school_id: str
    email: str

    def send_email(self, content):
        ... # Code to send user an email goes here

@dataclass
class Admin(User):
    courses:List[Course]

    def assign_mark(self, student, mark):
        ... # Code to assign a mark to a student

@dataclass
class Student(User):
    enrolled:List[Course]

    def start_exam(self):
        ... # Code to assign a mark to a student
```

We can then use the classes like this:

```python
# Create example instances
math = Course("MATH-201")
u = User("jamie", "6549872", "jamie@school.com")
kieran = Admin("Kieran", "1234567", "kieran@school.com", [math])
frank = Student("Frank", "4567892", "frank@school.com", [math])

# Subclasses can use the same attributes as inherited class
kieran.name # "Kieran"
kieran.school_id # "1234567"
kieran.email # "kieran@school.com"
kieran.courses # [math]

frank.name # Frank
frank.school_id # "4567892"
frank.email # "frank@school.com"
frank.enrolled # [math]

# They can use their own methods, and methods from inherited class
frank.start_exam()
kieran.send_email("Frank has started their exam")

kieran.assign_mark(frank, 80)
frank.send_email("You got an %80 congrats nerd")
```

As you can see `Admin` and `Student` require all the same attributes to use when creating an instance, and will have the same methods available. You can inherit multiple times. Something could inherit `Admin` or `Student` and it would inherit all of their attributes/methods as well as `User` ones. But you should probably not go more than 2 layers deep with this. It becomes hard to track what's in what classes if you go more than 2 classes deep into inheritance!

The exact same concepts work in javascript as well:

```js
class Course {
    constructor (name) {
        this.name = name
    }
}

class User {
    constructor (name, school_id, email) {
        this.name = name;
        this.school_id = school_id;
        this.email = email;
    }

    send_email(content){
        // Code goes here
    }
}

class Admin extends User {
    constructor (name, school_id, email, courses) {
        super(name, school_id, email);
        this.courses = courses;
    }
    assign_mark(student, mark){
        // Code goes here
    }
}

class Student extends User {
    constructor (name, school_id, email, enrolled) {
        super(name, school_id, email);
        this.enrolled = enrolled;
    }
    start_exam(){
        // Code goes here
    }
}
```

There are two main differences:

1. You say `extends` instead of puttin the class name in brackets you want to inherit from
2. You have to call `super()` in order to instantiate the inherited class

```js
// Create example instances
math = new Course("MATH-201")
u = new User("jamie", "6549872", "jamie@school.com")
kieran = new Admin("Kieran", "1234567", "kieran@school.com", [math])
frank = new Student("Frank", "4567892", "frank@school.com", [math])

// Subclasses can use the same attributes as inherited class
kieran.name // "Kieran"
kieran.school_id // "1234567"
kieran.email // "kieran@school.com"
kieran.courses // [math]

frank.name // Frank
frank.school_id // "4567892"
frank.email // "frank@school.com"
frank.enrolled // [math]

// They can use their own methods, and methods from inherited class
frank.start_exam()
kieran.send_email("Frank has started their exam")

kieran.assign_mark(frank, 80)
frank.send_email("You got an %80 congrats nerd")
```

### Private and public

Up until now everything we've done is public. This means that the code can do whatever it want's with the attributes and methods we define. In some languages (like javascript) you can define private attributes and methods. These are inaccessible to anything but the instance itself. This sounds like it's not very useful, but it can be handy in situations where accessing or modifying variables is more complicated than just doing assignments (validation, blacklist/whitelisting etc.). Here is an example of how to do this in javascript:

```js
class User {
    #is_premium = false;

    constructor (name) {
        this.name = name;
    }

    #ask_database_for_status(requestor){
        if (checkIfAdmin(requestor)){
            return this.#is_premium;
        } else{
            TypeError("You do not have access to this info")
        }
    }

    get_is_premium(requestor){
        return this.#ask_database_for_status(requestor)
    }
}
```

The `#` indicates a private field. In this case it's private and only accessible if the person requesting access is an admin. If we were to try either of these it would throw an error:

```js
q = new User("kieran")

q.#is_premium
q.#ask_database_for_status()
```

In python there is no concept of private. The closest is namespace mangling, this will in most editors hide methods starting with `__` and **not** ending with `__`, and attributes starting with an `_` from the autocomplete, but they are still accessible:


```python

from dataclasses import dataclass

@dataclass
class User:
    name: str
    _is_premium: bool
    
    def __ask_database_for_status(self) -> bool:
        return self._is_premium
    
    def get_is_premium(self):
        return self.__ask_database_for_status()


User("k",False)._is_premium # Works
User("k",False).__ask_database_for_status() # Broken
```

The function `__ask_database_for_status()` will throw an error when you try to access it, but you can get around this. The `__` at the front just does what's called namespace mangling, essentially it changes the name of the function when the file is loaded to `_CLASSNAME__METHOD()`, in our case we could instead do:

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    _is_premium: bool
    
    def __ask_database_for_status(self) -> bool:
        return self._is_premium
    
    def get_is_premium(self):
        return self.__ask_database_for_status()
    
    
User("k",False)._is_premium
User("k",False)._User__ask_database_for_status()
```

and it works as if it were a public method. People usually have good reasons for why they do this, so if you do see `__` or `_` in a python code base it's not recommended to interact with them directly as you might break something.


### Class Methods and attributes

Class methods and attributes are methods and attributes that are attached to a class and not an instance. This has limited use cases, but one might be if you have a `Car` class, you might want a counter that is incremented by 1 everytime a new `Car` is added. This would be best achieved through a class attribute, that way it can be accessed via the class, or any of the instances.

An example of this in the realworld is in [ezprez](https://github.com/Descent098/ezprez) a list called `Slide.all` is made which includes all instances of slide when they're created (see code [here](https://github.com/Descent098/ezprez/blob/master/ezprez/core.py#L106-L119)). This means you can find every `Slide` instance from the class itself, which makes it easy to collect all the `Slide`s and their content.

#### Static

Static is a keyword that means completely different things in different languages. But in languages like javascript it allows you to create class methods and attributes. in C it's used completely differently. 

In purely object oriented languages (like [Java](https://www.java.com/en/)), it's also used to start programs. Everything in java must be explicitly part of a class, and classes need instances, so the question is, how do you start a program?

For example if you were writing a game then in java you might create a `Game` class that has a static method called `main()`. This main function will be attached to the **class** not the method, meaning it can run without creating an instance. So when you run your program java will automatically run `main()`, then create a `Game` instance after, and that's where the code will start running from. This is necessary because code has to be running before you can create instances! This code would look something like this in java:

```java
public class Game {
	public static void main(String[] args){
		System.out.println("Hello, World!");
	}
}
```

Where there is a class called `Game` and the `main()` method will be run if you run the file!

## More Terms, Concepts & Common formatting

This section includes some common terms, concepts and formatting rules for when reading resources on object oriented programming, and classes. Some of these concepts we've already covered, but they have more formal names that I will mention here:

- Instance/object: If you have a `User` class, and that is the template, then an instance/object is an individual `User` that has values assigned to the attributes
- Polymorphism: The ability of an object to take on many forms. It refers to the ability of different objects to be used interchangeably.
- Abstraction: This is the process of abstracting complexity away from code. For an example of this in action see [abstract classes](#abstract-classes)
- Encapsulation: The practice of hiding the internal workings of an object and exposing only what is necessary. It is a way to protect the integrity of an object's data and prevent it from being modified by external code. So instead of having data being public data is private and can **only** be accessed and modified by methods. So if a `User` class has a name attribute, instead of accessing it with `User.name` you would have a `User.get_name()` and `User.set_name()` method, and the name attribute would be private. 

### Formatting

For most classes you will see the name of the class with PascalCase. This means every "word" is capitalized. So for a class representing a player, you would have `Player`, and for a class representing a tic-tac-toe board, you would have `TicTacToeBoard`. The `.` operator is used to show attributes and methods, methods will end with `()`. For example to get the name of a player you might have `Player.name`, and the method for making a move would be `Player.make_move()`.

## Other "types" of classes

Besides just normal classes there are a few common patternss with classes that are available through different "types" of classes.

### Enumerators

Enumerators operate differently in different languages, but in most languages they're used to make labelling data that has set values easier. For example let's say you have a project where people need to include their country (represented by a number), but there are 15 other places that they need to be able to update it from, and you need to keep it consistent. You can make sure that everyone has the same values for this with: 

```python
from enum import Enum

class Countries(Enum):
    Canada = 1
    US = 2
    UK = 3
    Switzerland = 4

Countries.Canada # Lookup by name

Countries(1) # Lookup by value

Countries.Canada.name # "Canada"
Countries.Canada.value # 1
```

There are several other forms of enums avaliable in the [enum](https://docs.python.org/3/library/enum.html) package in python. 

In javascript there is no support with enums, you can get similar functionality with:

```js
const Countries = {
    Canada: 1,
    US: 2,
    UK: 3,
    Switzerland: 4
}

Countries.Canada
```

### Structs

Structs have different meanings in different languages. In some languages (like C++) these are essentially the same as a class in every way, in other languages structs exclusively have attributes. You cannot assign any methods to a struct in these languages. They essentially act as a way to label data, but you cannot assign methods. 

### Abstract classes

An abstract class is a class that cannot be instantiated and is meant to be subclassed by other classes. It is often used to define a common interface for a group of subclasses. In Python, you can create an abstract class by importing the abc module and using the [ABC](https://docs.python.org/3/library/abc.html) class as a base class.

Here's an example of an abstract class in Python:

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

d = Dog()
print(d.speak())

c = Cat()
print(c.speak())
```

In this example, `Animal` is an abstract class that defines an abstract method called speak. The `Dog` and `Cat` classes are subclasses of `Animal` and implement the speak method. When we create an instance of `Dog` or `Cat`, we can call the speak method to get the appropriate animal sound.


In JavaScript, there is no built-in support for abstract classes. However, you can create an abstract class by defining a constructor function and adding methods to its prototype1. Here's an example of an abstract class in JavaScript:

```javascript
function Animal() {
  if (this.constructor === Animal) {
    throw new Error("Cannot instantiate abstract class");
  }
}

Animal.prototype.speak = function() {
  throw new Error("Method 'speak()' must be implemented.");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
  return "Woof!";
};

function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.speak = function() {
  return "Meow!";
};

var d = new Dog();
console.log(d.speak());

var c = new Cat();
console.log(c.speak());
```

In this example, `Animal` is an abstract class that defines an abstract method called speak. The `Dog` and `Cat` classes are subclasses of `Animal` and implement the speak method. When we create an instance of `Dog` or `Cat`, we can call the speak method to get the appropriate `animal` sound.
