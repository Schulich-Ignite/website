---
name: Loops
aka:
- while loop
- for loop
- foreach
- iterator
tags:
- beginner
- data-structures
prerequisites:
- variables
- data-types
- functions
- conditionals
---

Loops are a concept in programming that allows you to run some code for a defined number of times. This means if you have an operation you want to run 1000 times, or maybe run some code for every user in a database, or show a menu until someone makes a choice in a game, loops are what you want.

## Parts of a loop

Loops have two main parts, the loop definition, and the loop body. The loop definition defines how long the loop should run for, and/or what data is available inside the loop. The loop body defines what runs inside the loop. There are two popular ways this is done in languages, indentation or squiggly braces:

\*Not real code
```
loop definition:
    loop body

loop definition{
    loop body
}
```

In the first (used by languages like python) everything that is indented will run for each [iteration](#iteration) of the loop, in the second everything inside the {} will run.

## Iteration

Often this process of looping is called iteration. Essentially when loops run they go through multiple runs. So if you imagine a loop that runs a 1000 times there needs to be 1000 iterations to get through it (one for each time the loop body is executed).

### Iterators

Iterators is the name given to types of data that are designed to be looped over. For example if you have some text then in most languages that will be an iterator where you will start at the first letter and be able to loop through each letter one at a time.

You can also usually create your own iterators so that for example if you have some code generating a slideshow you could create an iterator that loops through each slide. The only thing that matters is that you can define a start, an end, and some way to get from one item to another (sometimes items in iterators are called elements).

## loop Types

There are several different types of loops that exist and are used in different situations. Most problems you run into can be approached with more than one option, so pick which one you think works best for you. 

### For

For loops run for a length of time defined by what you are trying to loop over. There is a section below that explains when to use each!


#### C-style

C-Style for loops are what most languages call for loops. They will allow you to define a variable that starts at some value, define an end condition and then loop until the variable equals that condition. Below is an idea of how this might work:

\*Not real code
```
index = 0

for index until index is 10:
    print("Hello")
    index += 1

```

In the above example index starts at 0, on each [iteration](#iteration) it will print hello, and then the index has 1 added to it. The loop runs until the index variable is 10 which is when the loop ends. 

This can be done in python like so:

```python
for index in range(10):
    # Python automatically starts at 0 
    # & adds 1 to index per itteration
    print("hello")
```

or Javascript like so:

```javascript
for (let index = 0; index < 10; index++) {
    console.log("hello");
}
```

#### Foreach

For each loops are a bit different than regular for loops. In a regular for loop you will use integers (numbers) to control how the loop works. Whereas a foreach loop will loop over each item/element in an [iterator](#iterators). 

For example lets say you have a shopping list, and want to print each item in the shopping list, you can do something like this:

\*Not real code
```
shopping_list = ["eggs", "ham", "spam"]
foreach item in shopping_list:
    print(item)
```

This loop would print "eggs", then "ham", then "spam". By default python is one of the only languages that uses foreach as it's for loop. So here is the above example in python:

```python
shopping_list = ["eggs", "ham", "spam"]
for item in shopping_list:
    print(item)
```

When you use the `range()` function in python it actually just generates a list to loop over with a foreach loop. So these two would be the same:

```python
for index in range(10):
    print(index)

for index in [0,1,2,3,4,5,6,7,8,9]:
    print(index)
```

foreach is implemented differently in different languages. Javascript for example runs the loop directly on the data you want to loop over:


```javascript
shopping_list = ["eggs", "ham", "spam"]

shopping_list.forEach(item => {
    // This would be your "loop body"
    console.log(item)
});
```

#### When to use each

Both of these two for loops have advantages and disadvantages. But here are some rules of thumb

**C-style**: If you want to make modifications to items, just want to use numbers or foreach isn't available

**foreach**: If you want to **only read** data. **Some** data types will let you make modifications in foreach loops, but not all of them and not in every language. If you have a list of numbers for example and you add 1 to it, then that change won't save in a lot of languages. Here's a python example:

```python
numbers = [0,1,2,3,4,5,6,7,8]

for number in numbers:
    number += 1

print(numbers) # still [0,1,2,3,4,5,6,7,8]
```

For this to work you would need a c-style loop:

```python
numbers = [0,1,2,3,4,5,6,7,8]

length_numbers = len(numbers)

for index in range(length_numbers):
    numbers[index]  += 1

print(numbers) # now [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### while

while loops are used to run until a certain condition is met. They basically run until whatever condition specified is **true**. So for example this might be a while loop that would run 10 times:

\*Not real code
```
number = 0

while number < 10:
    number += 1
```

In this case the loop would run 10 times, then on the 10th run `number` would be 10 and `number<10` would be false, which would end the loop. This can be useful for tons of things, but the most common is game loops and menus. In games you can have something like:

\*Not real code
```
game_over = false

while not game_over:
    play_game()
```

Which would run until the game_over variable is set to true (perhaps when a player dies). This can be done with menus as well to wait for someone to select something, or anything that can be controlled with a boolean!

Here are the above examples in python:

```python
number = 0

while number < 10:
    number += 1

game_over = False

while not game_over:
    play_game()
```

and in javascript:

```javascript
number = 0

while (number < 10){
    number += 1
}

game_over = false

while (!game_over){
    play_game()
}
```

#### Infinite loops

You need to make sure your while loop **can** end. Most programming languages will not stop you from making a loop that never ends!

## loops and collections

These sorts of loops can be very handy when used with [collections](/definitions/collections). Since collections take multiple steps if you want to run code on everything in them they are a perfect candidate for loops!

### For loops

Let's say for example someone updated their difficulty in a game so you want to increase enemy HP, you could do something like this:

\*Not real code
```
index = 0

enemies = [enemy_1, enemy_2, enemny_3]

for index until index is length(enemies):
    increase_hp(enemies[index])
```

When accessing values in a list/array (`enemies`) you can access each item by it's index. So in this case `enemies[0]` would give you `enemy_1`. Since we start at 0 (all arrays/lists do) and then go until the index is the length of the list, we go through each element and run `increase_hp()` on it. So these two are the same:

\*Not real code
```
increase_hp(enemies[0])
increase_hp(enemy_1)
```

Here is the same example in python:

```python
enemies = [enemy_1, enemy_2, enemy_3]

length_of_enemies = len(enemies)

for index in range(length_of_enemies):
    increase_hp(enemies[index])
```

and in Javascript:

```javascript
enemies = [enemy_1, enemy_2, enemy_3];

lengthOfEnemies = enemies.length;

for (let index = 0; index < lengthOfEnemies; index++) {
    increase_hp(enemies[index]);
}
```

### While loops

Let's say for example someone updated their difficulty in a game so you want to increase enemy HP, you could do something like this:

\*Not real code
```
index = 0

enemies = [enemy_1, enemy_2, enemny_3]

while index < length(enemies):
    increase_hp(enemies[index])
    index += 1
```

When accessing values in a list/array (`enemies`) you can access each item by it's index. So in this case `enemies[0]` would give you `enemy_1`. Since we start at 0 (all arrays/lists do) and then go until the index is the length of the list, we go through each element and run `increase_hp()` on it. So these two are the same:

\*Not real code
```
increase_hp(enemies[0])
increase_hp(enemy_1)
```

Here is the same example in python:

```python
enemies = [enemy_1, enemy_2, enemy_3]

length_of_enemies = len(enemies)

index = 0

while (index < length_of_enemies):
    increase_hp(enemies[index])
    index += 1
```

and in Javascript:

```javascript
enemies = [enemy_1, enemy_2, enemy_3];

lengthOfEnemies = enemies.length;

index = 0

while (index < lengthOfEnemies) {
    increase_hp(enemies[index]);
    index += 1;
}
```

## Other aspects of loops

Sometimes you want more manual control over a loop. For example let's say you want to end a loop early, or skip an item if some condition is true. There are built in options to most languages to do this.

### break

Break can be used to end a loop early. This can be useful if you are looping over something, and want to allow the loop to stop running if the word "stop" is encountered:

\*Not real code
```
foreach word in words:
    if word == "stop":
        break
```

This would break out of the loop when stop is encountered **or** when it reaches the end of the list if stop isn't there. 

Here is an example in python:

```python
for word in words:
    if word == "stop":
        break
```

and in javascript

```javascript
words.forEach(word => {
    if (word == "stop"){
        break
    }
});
```

### continue

continue can be used to "skip" an iteration. For example lets say you want to add 1 to a number if it is even. You could do something like this to skip odd numbers:

\*Not real code
```
numbers = [1,2,3,4,5,6]
length_of_numbers = numbers.length

index = 0

for index until index is length_of_numbers:
    if isOdd(numbers[index]):
        continue
    else:
        numbers[index] += 1
```

Here is an example of this in python:


```python
numbers = [1,2,3,4,5,6]
length_of_numbers = len(numbers)

for index in range(length_of_numbers):
    if not (numbers[index]%2==0): # Is odd number
        continue
    else:
        numbers[index] +=1
```

and in javascript:

```javascript
numbers = [1,2,3,4,5,6]
length_of_numbers = numbers.length

for (let index = 0; index < length_of_numbers; index++) {
    if (!(numbers[index]%2)==0){
        continue
    } else{
        numbers[index] +=1
    }
}
```

