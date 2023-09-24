---
title: Basics and syntax
description: |
  This page will give you everything you need to get up and running using python. It will cover the essentials you need to start building software!
---

## Creating and using files

Creating and using Python files, also known as Python scripts, is the foundation of writing and running Python programs. Here's a beginner-friendly explanation of how to get started:

### Installing Python
   - Before you start creating Python files, you need to have Python installed on your computer. You can download it from the official Python website ([https://www.python.org/downloads/](https://www.python.org/downloads/)).
   - Follow the installation instructions for your operating system.

### Editing python code
   - You can write Python code using a simple text editor (like Notepad on Windows or TextEdit on macOS) or use specialized Python IDEs (Integrated Development Environments) like Visual Studio Code, PyCharm, or IDLE.
   - Choose the option that suits you best. IDEs provide additional features to make coding easier.

### Creating a Python File

   - In your chosen text editor or IDE, create a new file. To do this, go to "File" > "New" or press `Ctrl`+`N` (Windows) or `Cmd`+`N` (macOS).
   - Save the file with a `.py` extension, which indicates it's a Python script. For example, you can save it as `my_script.py`.

### Writing Your First Python Code 
   - In your newly created Python file, you can start writing Python code. Here's a simple "Hello, World!" example:

   ```python
   print("Hello, World!")
   ```

   - This code uses the `print()` function to display "Hello, World!" on the screen.

### Running Your Python Script
   - To run your Python script, you need to open a terminal or command prompt.
   - Navigate to the directory where your Python file is located using the `cd` command (e.g., `cd Documents` if your file is in the "Documents" folder).
   - Then, type `python` followed by the name of your Python file and press Enter:

   ```
   python my_script.py
   ```

   - Your Python script will execute, and you'll see the output in the terminal.

### Editing and Saving Changes
   - You can make changes to your Python file by opening it in your text editor or IDE, editing the code, and saving the file (usually by pressing `Ctrl`+`S` or `Cmd`+`S`).
   - After saving, you can rerun the script to see the updated results.

### Learning and Experimenting
   - Python is a versatile language with many features and libraries. You can learn by exploring Python tutorials, books, or online courses.
   - As you learn, you can create more complex Python scripts to perform various tasks, from simple calculations to building web applications or analyzing data.

That's the basic process of creating and using Python files. Start with simple scripts like "Hello, World!" and gradually build your skills by tackling more advanced projects. Python is known for its readability and simplicity, making it an excellent choice for beginners to start their coding journey.


## Variables & Types

Python is a versatile programming language that can work with various types of data. Here's a basic overview of three fundamental data types: `int`, `float`, and `str`. These 3 data types help to make up most of the basic operations you will do.

### Integers (`int`)

Integers are whole numbers, which means they don't have any decimal points.

- You can use integers for counting, indexing, and performing arithmetic operations like addition and subtraction.
- For Example: `5`, `-10`, `1000`

```python
my_integer = 42
print(my_integer)  # Output: 42
```

### Floating-Point Numbers (`float`)
   - Floating-point numbers, or floats, are numbers that can have decimal points.
   - You use floats when you need to represent values with precision, such as measurements or calculations involving fractions.
   - Example: `3.14`, `-0.5`, `2.0`

```python
my_float = 3.14159
print(my_float)  # Output: 3.14159
```

### Strings (`str`)
   - Strings are sequences of characters, like text or words, enclosed in single (' '), double (" "), or triple (''' ''' or """ """) quotes.
   - You can manipulate strings, concatenate them (combine them), and perform various operations like searching for specific characters.
   - Example: `'Hello, World!'`, `"Python is fun"`, `'''Triple-quoted strings'''`

```python
my_string = "Hello, World!"
print(my_string)  # Output: Hello, World!
```

These three basic data types are the building blocks for most Python programs. You can perform operations on them, combine them, and use them to represent different kinds of data in your code. As you continue to learn Python, you'll discover more data types and ways to work with them, but these are the essential ones to get started.

### Collections

If you are not familiar you can find details about what collections are [here](https://schulichignite.com/definitions/collections/). 

Python provides two common collection types, lists, and tuples. These collection types allow you to store multiple values in a single variable.

#### Lists
   - A list is an ordered collection of items.
   - You can store various types of data in a list, such as numbers, strings, or even other lists.
   - Lists are mutable, which means you can change their contents (add, remove, or modify elements).

   **Creating a List:**
   To create a list, use square brackets `[]` and separate the items with commas.

   ```python
   my_list = [1, 2, 3, "apple", "banana"]
   ```

   **Accessing Elements:**
   You can access individual elements in a list by their position, called an index. Python uses zero-based indexing, so the first element is at index 0.

   ```python
   first_item = my_list[0]  # Gets the first item (1)
   second_item = my_list[1]  # Gets the second item (2)
   ```

   **Modifying a List:**
   You can change, add, or remove items from a list.

   ```python
   my_list[3] = "cherry"  # Modifies an item (changes "apple" to "cherry")
   my_list.append(4)  # Adds an item to the end (appends 4)
   my_list.remove("banana")  # Removes an item (removes "banana")
   ```

#### Tuples
   - A tuple is similar to a list, but it is immutable, meaning you cannot change its elements once it's created.
   - Tuples are typically used when you want to create a collection of items that should not be modified.

   **Creating a Tuple:**
   To create a tuple, use parentheses `()` and separate the items with commas.

   ```python
   my_tuple = (1, 2, 3, "apple", "banana")
   ```

   **Accessing Elements:**
   You access tuple elements in the same way as with lists, using zero-based indexing.

   ```python
   first_item = my_tuple[0]  # Gets the first item (1)
   second_item = my_tuple[1]  # Gets the second item (2)
   ```

   **Immutable Nature:**
   You cannot change the elements of a tuple after creation. Attempting to do so will result in an error.

   ```python
   my_tuple[3] = "cherry"  # This will raise an error (Tuples are immutable)
   ```

**When to Use Lists vs. Tuples:**
   - Use lists when you need a collection of items that can change over time.
   - Use tuples when you want to create a collection of items that should remain constant.

Here's a simple summary: Lists are like dynamic containers where you can put different things and change them, while tuples are like sealed containers where you put things that won't change. Both are valuable tools in Python, and your choice depends on your specific needs in a program.

## Functions

If you are not familiar you can find details about what functions are [here](https://schulichignite.com/definitions/functions/). 


Python functions are like mini-programs or reusable blocks of code that perform specific tasks. Think of them as functions in math, where you input something, and it gives you a result. In Python, you can create your own functions to perform tasks you need. Here's a beginner-friendly explanation:

### Defining a Function
   - To create a function, you use the `def` keyword, followed by the function name and parentheses `()`. You can also include parameters (input values) inside the parentheses.

   ```python
   def greet(name):
       print("Hello, " + name + "!")
   ```

   - In this example, we defined a function called `greet` that takes one parameter, `name`.

### Calling a Function
   - Once you've defined a function, you can use it by calling it. To call a function, you simply write its name followed by parentheses and any necessary arguments (values for the parameters).

   ```python
   greet("Alice")
   ```

   - This line of code calls the `greet` function and passes `"Alice"` as the `name` parameter.

### Return Values
   - Functions can also return a result using the `return` keyword. This is like the answer you get from a math function.

   ```python
   def add(a, b):
       result = a + b
       return result
   ```

   - In this example, the `add` function takes two parameters, `a` and `b`, adds them together, and returns the result.

   ```python
   sum_result = add(5, 3)
   print(sum_result)  # Output: 8
   ```

   - Here, we call the `add` function with `5` and `3` as arguments and store the result in the `sum_result` variable.

### Reusability
   - Functions make your code more organized and reusable. You can use the same function multiple times throughout your program.

### Scope
   - Variables defined inside a function have local scope, meaning they can only be accessed within that function. Variables outside the function have global scope, which means they can be used throughout your code.

### Built-in Functions
   - Python also comes with many built-in functions, like `print()`, `len()`, and `input()`, which you can use without having to define them yourself.

Here's a simple summary: Functions in Python allow you to define a set of instructions that can be used over and over again. They take input, perform actions, and can return results. Functions are like handy tools you create to make your coding tasks easier and more organized.

## Control flows

Python control flows, especially the `if` statement, help you make decisions in your code. Think of them as instructions to your program to perform certain actions based on conditions. Let's break it down in a beginner-friendly way:

### The `if` Statement
   - The `if` statement is used to make decisions in Python.
   - It allows your program to execute different code blocks depending on whether a condition is true or false.

### Basic `if` Syntax
   - The basic structure of an `if` statement looks like this:

   ```python
   if condition:
       # Code to execute if the condition is True
   ```

   - The `condition` is an expression that evaluates to either `True` or `False`.

### Truthiness
   - In Python, many things can be considered either "truthy" or "falsy." This means that they can be evaluated as equivalent to `True` or `False` in a boolean context.
   - Common truthy values include non-zero numbers, non-empty strings, and non-empty containers (like lists or dictionaries).
   - Common falsy values include `0`, an empty string `""`, and empty containers.

### Boolean Logical Comparisons
   - You can compare values using boolean logical operators to create conditions in your `if` statements.

   - Common boolean operators are:
     - `==` (equal): Checks if two values are equal.
     - `!=` (not equal): Checks if two values are not equal.
     - `<` (less than): Checks if one value is less than another.
     - `>` (greater than): Checks if one value is greater than another.
     - `<=` (less than or equal to): Checks if one value is less than or equal to another.
     - `>=` (greater than or equal to): Checks if one value is greater than or equal to another.

   **Example:**

   ```python
   x = 5
   y = 10

   if x < y:
       print("x is less than y")
   ```

   - In this example, the `if` statement checks if `x` is less than `y`. If it's true, it prints "x is less than y."

### `else` and `elif` (Else-If) Statements
   - You can extend `if` statements with `else` and `elif` (else-if) statements to handle multiple conditions.

   **Example:**

   ```python
   age = 20

   if age < 18:
       print("You are underage.")
   elif age >= 18 and age < 65:
       print("You are an adult.")
   else:
       print("You are a senior citizen.")
   ```

   - In this example, the code checks different conditions based on the age variable and prints an appropriate message.

### Nested `if` Statements
   - You can also nest `if` statements inside other `if` statements to handle more complex conditions.

   **Example:**

   ```python
   x = 5

   if x > 0:
       if x % 2 == 0:
           print("x is a positive even number.")
       else:
           print("x is a positive odd number.")
   else:
       print("x is not a positive number.")
   ```

   - In this example, we have nested `if` statements to determine whether `x` is positive and even or positive and odd.

In summary, `if` statements allow your Python program to make decisions based on conditions. You can use boolean operators to create conditions, and you can include `else` and `elif` statements for more complex decision-making. This is a fundamental building block for creating dynamic and responsive code in Python.

### Loops

Python loops are used to repeatedly execute a block of code. They allow you to automate repetitive tasks by running the same code multiple times. Let's explore Python loops in a beginner-friendly way:

#### The `for` Loop
   - A `for` loop is used when you know how many times you want to repeat a certain action. It's often used to iterate over a sequence, such as a list or a range of numbers.

**Basic `for` Loop Syntax:**
   ```python
   for variable in sequence:
       # Code to execute in each iteration
   ```

   - `variable` represents an item from the sequence in each iteration, and `sequence` is the collection of items to loop through.

**Example:**
   ```python
   fruits = ["apple", "banana", "cherry"]

   for fruit in fruits:
       print(fruit)
   ```

   - In this example, the `for` loop iterates through the `fruits` list and prints each fruit one by one.

#### The `while` Loop
   - A `while` loop is used when you want to repeat a block of code as long as a certain condition is true. It's often used when you don't know in advance how many times the loop will run.

**Basic `while` Loop Syntax:**
   ```python
   while condition:
       # Code to execute as long as the condition is True
   ```

   - The loop will continue running as long as `condition` remains `True`.

**Example:**
   ```python
   count = 0

   while count < 5:
       print("Count: ", count)
       count += 1
   ```

   - In this example, the `while` loop prints the value of `count` as long as it's less than `5`, incrementing `count` in each iteration.

#### Loop Control Statements
   - You can control the flow of loops using special statements:
     - `break`: Terminates the loop prematurely.
     - `continue`: Skips the current iteration and moves to the next.
     
   **Example (using `break`):**
   ```python
   numbers = [1, 2, 3, 4, 5, 6]

   for num in numbers:
       if num == 4:
           break  # Exit the loop when num is 4
       print(num)
   ```

   - In this example, the loop stops when `num` becomes `4`, and the code after the loop continues executing.

   **Example (using `continue`):**
   ```python
   numbers = [1, 2, 3, 4, 5, 6]

   for num in numbers:
       if num % 2 == 0:
           continue  # Skip even numbers
       print(num)
   ```

   - In this example, the loop skips even numbers and continues to the next iteration.

Python loops are powerful tools for automating repetitive tasks and processing data. By understanding `for` and `while` loops and how to control their flow, you can make your programs more dynamic and efficient.

## Defining your own types

In Python, classes are like blueprints for creating objects. Think of a class as a template that defines the properties (attributes) and behaviors (methods) that objects of that class will have. Let's break down Python classes in a beginner-friendly way:

### Class Definition
   - To create a class, you use the `class` keyword, followed by the name of the class (usually starting with a capital letter).

   ```python
   class Dog:
       # Class definition goes here
   ```

   - In this example, we've defined a class called `Dog`.

### Attributes
   - Attributes are variables that store data within a class. They represent the characteristics or properties of objects created from the class.

   ```python
   class Dog:
       breed = "Unknown"  # Attribute to store the dog's breed
       age = 0           # Attribute to store the dog's age
   ```

   - In this class, `breed` and `age` are attributes that every dog object will have.

### Methods
   - Methods are functions defined within a class. They represent the actions or behaviors that objects of the class can perform.

   ```python
   class Dog:
       breed = "Unknown"
       age = 0

       def bark(self):
           print("Woof! Woof!")

       def fetch(self):
           print("Fetching the ball...")
   ```

   - In this class, `bark()` and `fetch()` are methods that represent the actions a dog can do.

### Creating Objects (Instances)
   - To use a class, you create objects (instances) from it. An object is a specific instance of a class.

   ```python
   my_dog = Dog()  # Creating an instance of the Dog class
   ```

   - `my_dog` is now an object of the `Dog` class.

### Accessing Attributes and Methods
   - You can access attributes and methods of an object using dot notation (`object_name.attribute` or `object_name.method()`).

   ```python
   my_dog.breed = "Golden Retriever"  # Setting the breed attribute
   my_dog.age = 3                    # Setting the age attribute

   print("My dog is a", my_dog.breed)  # Accessing the breed attribute
   my_dog.bark()                       # Calling the bark method
   ```

   - Here, we've set the `breed` and `age` attributes and called the `bark()` method on `my_dog`.

### Constructor Method (`__init__`)
   - The `__init__` method is a special method in Python classes. It's called when you create an object from the class and is used to initialize attributes.

   ```python
   class Dog:
       def __init__(self, breed, age):
           self.breed = breed
           self.age = age

       def bark(self):
           print("Woof! Woof!")
   ```

   - When you create a `Dog` object, you need to provide values for `breed` and `age`.

   ```python
   my_dog = Dog("Golden Retriever", 3)
   ```

   - This way, you can create a dog object with specific attributes during its creation.

That's the basic idea of Python classes! Classes allow you to define a blueprint for creating objects with specific attributes and behaviors. They help you organize your code in a structured and reusable way, which is especially useful for building complex applications.
