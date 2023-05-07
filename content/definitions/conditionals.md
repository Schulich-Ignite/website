---
name: conditionals
aka:
- control flow
- equality check
tags:
- beginner
prerequisites:
- variables
- data-types
---

In programming we don't always want to execute the same code. Sometimes we want to execute code based on something. We might want to check if someone has a premium account before allowing them to access a song, or check if they're in a certain country etc. Conditionals are the way we do these checks, which allow us to conditionally run code based on some sort of check.

Under the hood these checks operate based off booleans. All of the operations done will evaluate to a True or False value which can be checked against. 

## if/else if/else

The main statement used for conditionals is the if statement. This statement is made up of two parts, the condition and the body. The body will only execute if the condition is True. For example in python the `print()` will always execute:

```python
if True:
    print("True!")
```

In this case `print("True!")` is the condition body. In python you end the condition with a colon (`:`), then indent the code that is the body.


The same code can be done in javascript, except you wrap the condition in parenthesis (`()`), and the body in squiggly braces (`{}`):
```js
if (true){
    console.log("True!")
}
```

From here you can create **control flows**, which are statements that allow for multiple *branches* of code where one branch will activate based on a condition. For example code in python that changes based on the current season:

```python
is_summer = False
is_winter = False
is_fall = False
is_spring = True

if is_summer:
    print("It's warm")
elif is_spring:
    print("It's raining")
elif is_fall:
    print("It's getting colder")
else: # assumes is_winter is True
    print("It's snowing!")
```

Javascript is the same idea:

```js
isSummer = false
isWinter = false
isFall = false
isSpring = true

if (is_summer){
    console.log("It's warm")
} else if (is_spring){
    console.log("It's raining")
} else if (is_fall){
    console.log("It's getting colder")
}else{ 
    //Assumes isWinter is trie
    console.log("It's snowing!")

} 
```

The else if/elif statements mean if the original if statement isn't true, then activate based on which ever else if/elif statement is true **that comes first**. The else then says that if none of the above are true do something. Keep in mind you can only have 1 if statement in a chain, but you can have multiple else if/elif. 

## loops

Many loops operate off the same principle as conditionals. There is some sort of condition and you loop until that condition is no longer true. For example with while loops in python:

```python
while not_dead:
    ... # Game continues

game_over = True # Now the game loop is over game_over is True
```

In javascript you can do the same:


```js

while(notDead){
    ... // Game continues
}

gameOver = true // Now the game loop is over gameOver is true
```

This also goes for for loops where you are iterating over something. The condition is something like do this loop **if** the the thing you're iterating over isn't complete. For example in python:

```python
for number in range(10):
    ... # Do stuff
```

Is basically the same as saying do a loop until the range runs out (which in this case is after 10 iterations). The same can be done in javascript, except the condition is more obvious:

```js
for (let number = 0; number < 10; number++) {
    ... // Do stuff
}
```

Which says start `number` at 0, loop until it's greater than 10, and add 1 to it on each iteration.

## Comparison operators

Comparison operators return a boolean value after comparing two values to see if a statement is True or False

| Name | Description | Python | JS |
|------|-------------|--------|----|
|Greater | Checks if something is greater than something else | ```1 < 3 # True``` | ```1 < 3``` | 
|less | Checks if something is less than something else | ```3 > 1 # True``` | ```3 > 1 // true``` | 
|Greater than or equal to| Checks if something is greater than or equal tp something else | ```1 <= 3 # True``` | ```1 <= 3``` | 
|Less than or equal to| Checks if something is Less than or equal tp something else | ```3 => 1 # True``` | ```3 => 1``` | 

## Equal

In programming you can check if values are equal with 2 `=` signs. This has a different meaning in different languages, and some languages offer alternatives to this.

### Value equality

Value equality is typically what the default people use is. Basically this takes the value of two variables and compares them. For example in python:

```python
a = 3
b = 2
c = 3

a == b # False
a != b # True

a == c # True
```

and in javascript:

```js
a = 3
b = 2
c = 3

a == b // False
a != b // True

a == c // True
```

### Value and type

In some languages when you are checking a value the value itself will be derived from different types. For example in python:

```python
1 == True # True
0 == False # True
```

And in javascript:

```js
"1" == 1 // True
```

In javascript we have an option to equality check while forcing a specific type to be checked. We do this by adding an extra `=` to our checks (called a strict comparison):

```js
"1" === 1 // False
```

### Referential

A referential check is done to see if a variable is exactly the same object as another variable. So not just that the value is the same, but that the two variables are actually talking about **the exact same** spot in memory. In python you can do this with `is`:


```python
a = [1,2,3]
b = a
c = [1,2,3]

a == b # True
b == c # True
a == c # True

a is b # True
b is c # False
```

## Logical operators

Logical operators can be used to make a series of statements and only let them be true based on which operator is used.

### And

This operator is only true if **both** statements are true. In python:

```python
True and True # True
True and False # False
False and True # False
False and False # False
```
In javascript

```js
true && true // True
true && false // False
false && true // False
false && false // False
```

### Or

This operator is only true if **either** statements are true. In python:

```python
True or True # True
True or False # True
False or True # True
False or False # False
```
In javascript

```js
true || true // True
true || false // True
false || true // True
false || false // False
```

### not

This operator is reverses a boolean value (True becomes false, False becomes True). In python:

```python
not True # False
not False # True
```
In javascript

```js
!true  // False
!false // True
```
