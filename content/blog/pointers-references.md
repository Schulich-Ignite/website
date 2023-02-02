---
title: Pointers and References in C++
subtitle: A quick understanding of memory
date: 2023-02-06T00:00:00-06:00
modified_date: ""
image: /img/blog/pointers.webp
authors:
- Cole Pawliw
tags:
  - C
  - C++
  - Python
  - low-level programming
---
In many high level coding languages, The idea of a pointer either doesn't exist, or is hidden from the programmer's use. This is not the case in languages such as C and C++. However, before we can begin to understand pointers, we must first know how memory works when running a program.

When writing code in a language such as python, you may not have ever considered what is happening behind the scenes with your variables throughout the program. When you run a program, a certain amount of memory is allocated to that application for it to store and use its own information.

Now that the program has a section of memory to use, as it starts running it will assign different things their own location in that memory. Each of these locations is called an "address" and it is how programs keep track of its variables as well as many other things. Each address is the location of 1 byte of memory (8 1's and 0's in [binary](https://www.techtarget.com/whatis/definition/binary#:~:text=files%20in%20computing.-,Binary%20explained,-The%20binary%20numbering)), which can store 256 possible values. When a variable is given a value, that value is then stored in memory at the address indicated by that variable.

For example, given the following code:

```c
int main() {
  int x = 5;
  return 0;
}
```

The variable now known as "x" would be given an address, and any time x is called after being initialized, the program will understand this to be associated with that same place in memory.

Another thing to note, each variable type has its own size. For example, an int will typically be 4 bytes (or 32 bits). When the program assigns x its address in memory, it also notes that this address is for a value of type int, and will then reserve the 4 bytes after that address to only be used by that int.

Other examples of variable types are:

- char (1 byte)
- float (4 bytes)
- double (8 bytes)
- bool (1 byte)

This all exists in python as well, but it's just more hidden:

```python
x = 5
type(x) # Returns <class 'int'>
hex(id(x)) # Returns 0x2bef5e00170
```

The `id()` function will give you the address of the object in memory ([hex()](https://www.programiz.com/python-programming/methods/built-in/hex) converts the value to [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)), and the `type()` function tells you the type of an object. By default user-created classes will print this info on instances

```python
class Animal:
  def __init__(self, name):
    self.name = name

print(Animal("monkey")) # Prints <__main__.Animal object at 0x000002BEF5FEBD00>
```

Now that we have a basic understanding of memory and addresses, we can start learning about pointers.

## Pointers

### What are pointers?

A pointer is a special kind of variable that exists in C and C++. Instead of holding a value like other variables do, the pointer holds an address in memory. This allows you to change the value of a variable without directly using the variable. This has important uses when it comes to writing functions, but we will get to that later.

### How to use pointers

Pointers are creates just like any other variable, it has a type and a name, however a pointer is denoted with the * sign when declaring a variable.

For example, here is code that declares a pointer with the address of x:

```c
int main() {
    int x = 5;
    // The next line will create a new variable that stores the location of x in memory
    int* x_ptr = &x;

    std::cout << "x_ptr is pointing to x, which has a value of: " << *x_ptr << std::endl;

    return 0;
}
```

The first thing to note is when declaring the pointer, we use the notation &x instead of just x. The & symbol tells the program to use the address of the variable, instead of just the variable, so now x_ptr equals the address of x. The values of these addresses are not important to us, all we care about is what is at the address.

Another thing to note is how to use the value that the pointer is pointing to. Again, we use the * notation in the cout to tell the program that we are using a pointer, so it will print the value at that address. Try changing the cout to just have x_ptr and see what happens.

If you tried printing just x_ptr, you should see a seemingly random string of numbers be printed to the console. This is normal, what you just saw was the address of x. If you run this program again, you might see that number change, this is because the memory that was allocated to your program was different this time around.

Now, you might be wondering why you need to write int* when declaring your pointer. This is because a pointer on its own is just a location in memory, and your program won't know what to do with just that. So when creating pointers, you have to state what variable type your pointer actually is, so that the program knows both how many bytes to look at, as well as how to interpret the string of 1's nad 0's that it sees. This also means that you can't assign an int pointer to the address of a character, or any other possibility of mixing pointer types, as this will cause many problems with your code!

You can create a pointer to any variable type you want, including objects, but that is the subject of another post.

### Using pointers in a function

Well we've covered what a pointer is, but why should you bother using them? The answer is functions! A C++ function only has a single return type, but what if I want to change the values of two variables at once? Let's start with a simple function.

We want to write a function that takes two integers as parameters, and switches their values. Thsi can't be done with simple integers, but it can be done with functions, let's see how:

```c
void switch (int * first, int * second) {
  // The first value needs to be stored in a temporary int, otherwise it gets lost when we assign it to the sescond value
  int temp = * first;
  * first = * second;
  * second = temp;

  return;
}

int main() {
  int x = 4, y = 10;

  std::cout << "The current value of x is: " << x << std::endl << "And the current value of y is: " << y << std::endl;

  switch ( & x, & y);

  std::cout << "The new value of x is: " << x << std::endl << "And the new value of y is: " << y << std::endl;

  return 0;
}
```

Try running the code above, you should see the first 2 output lines have x as 4 and y as 10, then the next two lines will say x is 10 and y is 4.

### The hidden truth behind arrays in C++

By now you should know how arrays work in other programming languages, and may have even seen them in C and C++. While the syntax for an array in these languages is very similar to that in python or java, there is another syntax that can also create an array. Consider the following lines of code:

```c
int* ptr = {0, 1, 2, 3, 4};
std::cout << ptr + 2;
```

What do you think that code will print when it is run? Try adding it to your code from earlier and see for yourself!

What's happening here is an array of 5 ints is created, and ptr has the address of the first value stored. Every value in the array comes right after the one before it in memory. This means an array of 5 ints is 5*4, or 20 bytes long in memory. Then, when you write `ptr + 2` you might think a value of 2 is added to the address, but it isn't. Remember that you have to state what variable type the pointer is pointing to, this does more than just tell the program how to read the following bytes, it also allows the use of arrays to be much easier. When you add a value to a pointer, it actually adds that number *multiplied by* the number of bytes in the variable type of the pointer. In other words, the expression `ptr + 2` is actually saying `ptr + 2 * sizeof(int)` or `ptr + 2 * 4`.

The consequence of all of this is that every pointer is actually an array, and every array is actually a pointer! However, it should be noted that if you create a pointer to an array of a certain size, you should never try to use a value greater than that size, as it will have unknown information stored there. You also should never try to change a value outside of the size of your array, because you don't know what you'll be changing, and that could cause bad things to happen.

If you need to change the size of an array, what you actually need to do is create an entirely new array and add all the old values to it.

### A pointer to a pointer???

"Wait, you said before that a pointer can point to any variable type, and you said that a pointer is a kind of variable. Does that mean a pointer can point to a pointer?"

Yes!

Because a pointer is a variable, it has to have its own address in memory. And since the value of a pointer is just an address, you can have a pointer point to another pointer. The syntax is exactly what you might imagine, just add another * when creating the variable.

The purpose of this might not be clear at first, so why don't we take a look at another example function to see why you might want to do this. We will be modifying the switch() function from earlier:

```c
void old_switch(int * first, int * second) {
  int temp = * first;
  * first = * second;
  * second = temp;

  return;
}

void new_switch(int ** first, int ** second) {
  int * temp = * first;
  * first = * second;
  * second = temp;

  return;
}

int main() {
  int x = 4, y = 10;
  int * ptr1 = & x, ptr2 = & y;

  std::cout << "The current value of ptr1 is: " << * ptr1 << std::endl << "And the current value of ptr2 is: " << * ptr2 << std::endl;

  old_switch(ptr1, ptr2);

  std::cout << "The value of ptr1 after old_switch() is: " << * ptr1 << std::endl << "And the value of ptr2 after old_switch() is: " << * ptr2 << std::endl;

  new_switch( & ptr1, & ptr2);

  std::cout << "The value of ptr1 after new_switch() is: " << * ptr1 << std::endl << "And the value of ptr2 after new_switch() is: " << * ptr2 << std::endl;

  return 0;
}
```

The two functions in the above code shows the need for pointers to pointers. Specifically, when you want to swap what values the pointers are pointing to, or to swap two arrays, it is not possible to do so with single pointers. This is because sending the value of the pointer only sends the address of what it is pointing to, so changing that value in the function does not change the original pointer.

### Wrapping up pointers

Pointers are a very useful tool when programming in any language, and are often necessary when using functions. Languages such as java and python also have pointers, but they are called references. The functionality of these references is pretty much the same, but is not done by the programmer. Instead, certain variable types, such as objects, are automatically made references with no extra effort on your part.

Now you need to forget everything you just learned about references in java and python, because C and C++ also have references that are very different.

## References

References in C and C++ are much simpler than pointers, but can still be just as useful. Imagine, instead of having a variable that points to another space in memory, you have a variable that uses the same space in memory as another variable. This variable would be called a reference. What this means is there will be two variables that share space in memory, and will have the same value, so changing one will change the other.

The basic syntax for creating and using references is as follows:

```c
int main() {
  int x = 5;
  // Instead of copying the value of x to a new space in memory
  // This next line will make a new variable using the same space in memory
  int & x_ref = x;

  std::cout << "The value of x is: " << x << std::endl << " And the value of x_ref is: " << x_ref << std::endl;
  std::cout << "The location of x is: " << & x << std::endl << " And the location of x_ref is: " << & x_ref << std::endl;

  return 0;
}
```

If you run the code, you will see that x and x_ref have the same value of 5, and both will have the same location. The & symbol is used both to use the location of a variable, as well as to declare a reference.

Similar to pointers, references can also be used to change local values in a different function. This functionality is important when using classes and objects, which we will cover in a different blog post. For now, let's see how references can be used in functions:

```c
void multiply(int & base, int & factor) {
  base *= factor;

  return;
}

int main() {
  int x = 4, y = 10;

  std::cout << "The current value of x is: " << x << std::endl;

  multiply( & x, & y);

  std::cout << "The new value of x is: " << x << std::endl;

  return 0;
}
```

At the end of this code, x will be equal to 40. This function would never be needed in real code, because the function call can just be replaced with one line, but it is helpful to demonstrate references. In this case, when multiply() is called, there are two functions that have access to the same variable, so multiply can directly change the value of x in main().

## Warnings

Working directly with memory can be a dangerous game, which is why most modern programming languages try to do all the work of pointers for you, so you don't make any mistakes. Here are some things to keep in mind when creating and using pointers:

1. Unless you are working with an array, do not try to do pointer arithmetic with your pointer values (`ptr += 1`). This means don't change the value of a pointer unless it is changing to the location of a new variable. This can cause unexpected problems as you are now working with memory that could be used for something else. Attempting to read the value at this point in memory will most likely return garbage.
2. Never directly assign a pointer a value (e.g. `int* ptr = 20`). Using a pointer such as this will attempt to read an essentially random place in memory. Most modern computers will stop your program if it attempts to access memory it was not allocated, however some machines may not do this, and could instead cause you to overwrite important information.
3. Don't try to mix pointer types, i.e. if you have an int value, don't try to make a float pointer point to it. This will just cause an error, as the compiler will not let you do this.

If you encounter any other problems while working with pointers, a quick google search is usually all that is needed to find out what you did wrong.

## Conclusion

By now you should have an understanding of pointers and references in C++. While all of the code in this post was written in C++, the information can also be applied to C, as long as you understand how to write code normally in C. You can now start using pointers and references in your own code.