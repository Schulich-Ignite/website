---
name: Collections
aka:
- list
- lists
- array
- arrays
- maps
tags:
- beginner
- data-structures
prerequisites:
- variables
- data-types
- functions
---

Collections are a data type that is used to hold multiple other data types. For example lets say you wanted to keep track of all of the names of items in a player inventory. You could put them into a collection to keep track of all of them in one variable, instead of a seperate variable for each item!

## Collection types

There are tons of different types of collections, some of the names are not always exactly the same acrosss languages, so keep that in mind when looking at this info!

### Lists

Lists are a dynamic collection. They basically let you add as much (besides memory constraints) data as you want. In strongly typed languages (ones where you have to specify types), they can only have 1 data type, in most other languages they can take whatever data you want. Here is an example of what it might look like in a **non-strongly typed language**:

```
ages = [18,21,18,19,20]
```

This gives you a list where

![array](/img/definitions/collections/array.png)

You can then access the element using it's *index*. The index is essentially the number that indicates where in the list a value is (starting from 0). You can access this using `ages[index]`. So if you wanted to access the **second** element you could use `ages[1]` (which in this case would be 21):

![array access](/img/definitions/collections/array_access.png)



#### Lists in python

Here are the basics in python:

```python
# Create a list
shopping_list = ["eggs", "ham", "spam"]

## Add items to the list
shopping_list.append("jam")
shopping_list.append(3) # Don't have to be the same types

print(shopping_list) # ['eggs', 'ham', 'spam', 'jam', 3]

## DON'T DO THIS, IT ADDS EACH CHARACTER TO THE LIST
shopping_list += "yams"
print(shopping_list) # ['eggs', 'ham', 'spam', 'jam', 3, 'y', 'a', 'm', 's']

## Get length of list
len(shopping_list) # 9

## Accessing items

### Access first item
print(shopping_list[0])

### Access second item
print(shopping_list[1])

### access last item
print(shopping_list[-1])

### access second last item
print(shopping_list[-2])

## Removing items

### Remove item at index and return value
shopping_list.pop(-1) # 's'
print(shopping_list) # ['eggs', 'ham', 'spam', 'jam', 3, 'y', 'a', 'm'] 
#### If you exclude a number it defaults to last item
shopping_list.pop()  # 'm'

### Remove the FIRST item where the value matches what is provided
shopping_list.remove('y')
print(shopping_list) # ['eggs', 'ham', 'spam', 'jam', 3, 'a'] 
shopping_list.append("eggs") # Add another eggs item
shopping_list.remove('eggs') # Remove FIRST eggs item
print(shopping_list) # ['ham', 'spam', 'jam', 3, 'a', 'eggs'] 

### Remove an item and don't return it's value
del(shopping_list[4]) 
print(shopping_list) # ['ham', 'spam', 'jam', 3, 'eggs']
#### BE CAREFUL del() will delete the whole list if you forget the index

## Slices will let you get part of a list
### They are in the form of: list[start:stop:step]
### Where start (default 0) is the index to start from
### Stop (default is blank/end of list) is where to stop
### Step (default 1) is how to go through indexes (i.e. 2 would mean skip every other index)

### Get every item from index 1 onwards
shopping_list[1:] # ['spam', 'jam', 3, 'eggs']

### Get every item except the last one
shopping_list[:-1] # ['ham','spam', 'jam', 3]

### Get items between index 1 and go until the second last
shopping_list[1:-2] # ['spam', 'jam']

# Print each item nicely by 'unpacking' them
print(*shopping_list) # ham spam jam 3 a eggs

### To clear a whole list use del() or list.clear()

shopping_list.clear()
print(shopping_list) # []
```
#### Lists in Javascript

In javascript they call lists arrays (to be confusing).

```javascript
// Create a list
shopping_list = ["eggs", "ham", "spam"]

// Add items to the list
shopping_list.push("jam")
shopping_list.push(3) // Don't have to be the same types

console.log(shopping_list) // ['eggs', 'ham', 'spam', 'jam', 3]

// DON'T DO THIS, IT CONVERTS THE LIST TO A STRING AND ADDS IT TO THE LAST ELEMENT
shopping_list += "yams"
console.log(shopping_list) // 'eggs,ham,spam,jam,3yams'

shopping_list = ['eggs', 'ham', 'spam', 'jam', 3] // Resetting to a list

// Get length of list
shopping_list.length // 5

// Accessing items

/// Access first item
console.log(shopping_list[0])

/// Access second item
console.log(shopping_list[1])

/// access last item
console.log(shopping_list[shopping_list.length-1])

/// access second last item
console.log(shopping_list[shopping_list.length-2])

// Removing items

/// Remove item at index and return value
//// Splice takes it's first argument as where to start removing from
//// Second argument is how many things to remove
//// So in this case remove 1 item starting from index 2 and return it
shopping_list.splice(2,1) // ['spam']
console.log(shopping_list) // ['eggs', 'ham', 'jam', 3]

/// Remove last item and return value
shopping_list.pop()  // 3
console.log(shopping_list) // ['eggs', 'ham', 'jam']

/// Remove ALL items where the value matches what is provided
shopping_list.push("eggs") // ['eggs', 'ham', 'jam', 'eggs']
shopping_list = shopping_list.filter(function (item) {
    return item !== "eggs";
});
console.log(shopping_list) // ['ham', 'jam']

// Slices will let you get part of an array
/// They are in the form of: list.slice(start,stop)
/// Where start (default 0) is the index to start from
/// Stop (default is blank/end of list) is where to stop

shopping_list = ['eggs', 'ham', 'spam', 'jam'] // Resetting array

/// Get every item from index 1 onwards
shopping_list.slice(1) // ['ham', 'spam', 'jam']

/// Get every item except the last one
shopping_list.slice(0,-1) // ['eggs', 'ham', 'spam']

/// Get items between index 1 and go until the second last
shopping_list.slice(1,-2) // ['ham']

// Print each item nicely by 'spreading' them
console.log(...shopping_list) // 'eggs ham spam jam'

/// To clear a whole array reassign it to an empty array

shopping_list = []
```

### Arrays

Arrays are one of the most basic collection types. These are typically quite restrictive, but very fast. You will have to specify the length of an array as well as the types it will contain. 

So for example if you want to store the ages of 5 people as integers you might do something like this:

\*Not real code
```
ages[5]<Int> = [18,21,18,19,20]
```

This gives you an array where:

![array](/img/definitions/collections/array.png)

You can then access the element using it's *index*. The index is essentially the number that indicates where in the list a value is (starting from 0). You can access this using `ages[index]`. So if you wanted to access the **second** element you could use `ages[1]` (which in this case would be 21):

![array access](/img/definitions/collections/array_access.png)


**Javascript and python do not follow the same standards outlined here**

For python there is a thing called an array (and sometimes people call lists arrays), but it **only restricts the type not the length** ([documentation here](https://docs.python.org/3/library/array.html)):

```python
from array import array

my_array = array('Q') # Values must be an int/unsigned long long
my_array.append(4) # Add 4 to the array

print(my_array) # prints array('Q', [4])
print(my_array[0]) # prints 4
```

In javascript the closest thing is a [typedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), but this is much more complicated to use.

### Sets

Sets are collections that require **unique** items. This is implemented different ways in different languages, but for example:

```
words = set("hello", "oranges", "hello", "great")
print(words) # ["hello", "oranges", "great"]
```

Even though "hello" was given twice it only appears once. This makes sets great for checking if something exists. Imagine you are searching through a book, and want to check if the book has the word "disperate" in it. Now lets say there are 900 times the word "the" appears. To search all the words you have to search through all 900 repeats of "the", but with a set there's only 1.

Here are how sets work in python:

```python
words = {"hello", "oranges", "hello", "great"}

print(words) # {'hello', 'great', 'oranges'}

# Add values
words.add("goodbye") 
words.add("hello")

print(words) # {'hello', 'great', 'oranges', 'goodbye'}
```
In javasript

```javascript
words = new Set(["hello", "oranges", "hello", "great"])

console.log(words) // Set(3) {'hello', 'oranges', 'great'}

// add values
words.add("goodbye") 
words.add("hello")

console.log(words) // Set(4) {'hello', 'oranges', 'great', 'goodbye'}
```

### Tuple's

Tuples are similar to lists, except once the values have been added they can't be changed (it's immutable). So you can't add items to a tuple, it's stuck how it is. This can be handy for data you don't want to let be modified. For example someone's birthday:

```
birthday = ('oct', 29, 1998)

birthday[2] += 1 # ERROR
```

You don't want to accidentally have someone add something to the birthday because the data doesn't change!

Here are how tuples work in python:

```python
birthday = ('oct', 29, 1998)
```

Javascript does not have tuples!


### Associative Arrays/Maps/JSON/Dictionaries

These are the first collection that does not use indexes for it's elements. All of these are different names for what are called key-value stores. Instead of using indexes you can set your own 'key', which maps to a value. This lets you represent abstract data with it's own labels easily. For example information about a user:


```
user = {"name": "Kieran", "age":24, "developer":true}

user["name"] # "Kieran"
```

Here is how you can do this in python with dictionaries (any class can also be a dictionary [see vars()](https://www.w3schools.com/python/ref_func_vars.asp)):

```python
user = {
    "name": "Kieran",
    "age":24,
    "developer":True
}

print(user["name"]) # "Kieran"

if user["developer"]: 
    # This would print in this case
    print("Is a developer!")

user["language"] = "english"
print(user) # {'name': 'Kieran', 'age': 24, 'developer': True, 'language': 'english'}
```

Javascript has 2 popular options, JSON, and maps. Maps are typically a lot faster, but JSON is more popular:

```javascript
// JSON
user = {
    "name": "Kieran",
    "age":24,
    "developer":true
}

console.log(user["name"]) // "Kieran"

if (user["developer"]){
    // This would print in this case
    console.log("Is a developer!")
} 
user["language"] = "english"

console.log(user) // {name: 'Kieran', age: 24, developer: true, language: 'english'}

//Maps
user = new Map()

user.set("name", "Kieran")
user.set("age", 24)
user.set("developer",true)

console.log(user.get("name")) // "Kieran"

if (user.get("developer")){
    // This would print in this case
    console.log("Is a developer!")
} 

user.set("language","english")
console.log(user) // Map(4) {'name' => 'Kieran', 'age' => 24, 'developer' => true, 'language' => 'english'}
```
