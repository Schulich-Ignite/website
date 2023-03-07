---
name: loops
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
- 
---

Loops are a concept in programming that allows you to run some code for a defined number of times. This means if you have an operation you want to run 1000 times, or maybe run some code for every user in a database, or show a menu until someone makes a choice in a game, loops are what you want.

## Parts of a loop

Loops have two main parts, the loop definition, and the loop body. The loop definition defines how long the loop should run for, and/or what data is available inside the loop. The loop body defines what runs inside the loop. There are two popular ways this is done in languages, indentation or squiggly braces:

```
loop definition:
    loop body

loop definition{
    loop body
}
```

In the first (used by languages like python) everything that is indented will run for the duration of the loop, in the second everything inside the {} will run.

## Iteration

Often this process of looping is called iteration. Essentially when loops run they go through multiple runs. So if you imagine a loop that runs a 1000 times there needs to be 1000 iterations to get through it.

### Iterators

Iterators is the name given to types of data that are designed to be looped over. For example if you have some text then in most languages that will be an iterator where you will start at the first letter and be able to loop through each letter one at a time.

You can also usually create your own iterators so that for example if you have some code generating a slideshow you could create an iterator that loops through each slide. The only thing that matters is that you can define a start, an end, and some way to get from one item to another (sometimes items in iterators are called elements).

## loop Types

There are several different types of loops that exist and are used in different situations. Most problems you run into can be approached with more than one option, so pick which one you think works best for you. 

### For

For loops run for a length of time defined by what you are trying to loop over.

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
    # & adds 1 per itteration
    print("hello")
```

or Javascript like so:

```js
for (let index = 0; index < 10; index++) {
    console.log("hello");
}
```

#### Foreach

### while

## Other aspects of loops

break
continue

## loops and collections

These sorts of loops can be very handy when used with [collections](definitions/collections). Since collections take multiple steps if you want to run code on everything in them they are a perfect candidate for loops!

### For loops

Let's say for example someone updated their difficulty in a game so you want to increase enemy HP, you could do something like this:

```
index = 0

enemies = [enemy_1, enemy_2, enemny_3]

for index until index is length(enemies):
    increase_hp(enemies[index])
```

When accessing values in a list/array (`enemies`) you can access each item by it's index. So in this case `enemies[0]` would give you `enemy_1`. Since we start at 0 (all arrays/lists do) and then go until the index is the length of the list, we go through each element and run `increase_hp()` on it. 

Here is the same example in python:

```python
enemies = [enemy_1, enemy_2, enemy_3]

length_of_enemies = len(enemies)

for index in range(length_of_enemies):
    increase_hp(enemies[index])
```

and in Javascript:

```js
enemies = [enemy_1, enemy_2, enemy_3];

lengthOfEnemies = enemies.length;

for (let index = 0; index < lengthOfEnemies; index++) {
    increase_hp(enemies[index]);
}
```

