---

title: How to Write Pseudocode
subtitle: What is Pseudocode and Why Should You Use it?
date: 2023-02-20T00:00:00-06:00
modified_date: ""
image: /img/blog/whiteboarding.jpg
authors: [Cole Pawliw]
tags:
- theory
- terminology
---

Perhaps you have taken a computer science course, and you heard the term "pseudocode" used at some point. If you have ever wondered what this is, here is the guide for you. Even if this has never happened to you, it is good to know what pseudocode is, and how to write it.

Pseudocode is not a programming language. In fact, it exists separate from any language you may know. Pseudocode is a very simple concept, describe the code you want to write in english. It is meant to be created using language that is easy for any human to read and understand, so that they can then implement the code in the language of their choice. Because of this, the general "rule" of pseudocode is that is should not be written in a programming language. As you will see later, this rule can be broken.

## So, why should you care?

When you're working alone on a project, there isn't much need for pseudocode, because you know what you want to create. However, when working in groups, it is often important to express your ideas to others in a clear way. Pseudocode is a way to describe what code should look like to others. Additionally, if there is a very complicated task you want to accomplish, the algorithm needed can often get long and confusing. Writing out your algorithm in pseudocode can make it easier to see the whole picture before you start writing code.

## Writing Pseudocode

When writing pseudocode, everything should be as generic as possible, that way it can be implemented in any language. It is worth noting however, that there are some cases where it can help if you include a little programming syntax.

Let's take a look at an example of some pseudocode to see how all this works. The following is a simple bubble sort algorithm to sort a list of items from low to high:

```
Function starts
Initialize array arr
Initialize arr_end = length of arr

Start loop
    Initialize i = 0
    Start loop
        If arr[i] > arr[i+1]
            swap arr[i] and arr[i+1]
        End if
        Increment i
    End loop
    Decrement arr_end
    If arr_end == 0
        Exit loop
    End if
End loop
```

If you don't know what a bubble sort is, the algorithm will push elements in the array backward until the highest element is at the back. The next loop will result in the second highest element being in the correct spot, it then repeats that until the entire array is sorted. The pseudocode above does an okay job of explaining how the algorithm works. It is very general, and pretty much only uses english. The indentation is a small way to make it easier to read, which is a common coding style. The clarity of this pseudocode can be better. Let's try adding curly brackets to indicate scope.

```
Function starts
Initialize array arr
Initialize arr_end = length of arr

Start loop {
    Initialize i = 0
    Start loop {
        If arr[i] > arr[i+1] {
            swap arr[i] and arr[i+1]
        }
        Increment i
    }
    Decrement arr_end
    If arr_end <= 0 {
        Exit loop
    }
}
```

This change doesn't provide any difference to the code itself, but it provides a visual indicator to when the loops and if statements end. This also allows the removal of a verbal "end" to the loops and if statements, which takes up space and makes things harder to read. While this is ignoring the rule that the pseudocode should be generic from any language, it can be up to the writer's discretion to include syntax from some languages in order to make the pseudocode more clear.

## Conceptual vs. Technical Pseudocode

Pseudocode can be used for simpler things than algorithm writing as well. In the previous section the code written was much more technical, it was made to describe how the sort will be done. Sometimes you don't want to know the technical details yet, you just want to see a general outline of the code. This is more conceptual pseudocode. For example, if you want to write a program that reads a list of items from a file, sorts those items alphabetically, then stores the new list into a new file, the pseudocode could be as follows:

```
Program starts
Initialize array items
Open file

For each item in file {
    Store item to end of items
}

Sort items
Save items to new file
```

The above code is very simple, it outlines what a program will do during the time it is running. The line `Sort items` is the important one, this holds the main functionality of this program. As you can see, the functionality is missing! That's okay, this pseudocode isn't meant to describe how we solve the problem of sorting the items, it just needs to explain the program generally. The actual functionality can be determined by somebody else who writes the sort function later.

Another thing to note in this example, I didn't "start" and "end" the loop, I just made a for loop based on python syntax. When you write your own pseudocode, you can make up how it looks on the fly. There is no set standard for pseudocode. In fact, if you look up examples of pseudocode on Google you will have a hard time finding two examples that look the same.

## A Note About Pseudocode Syntax

One thing to keep in mind however, make sure anybody who is going to read your pseudocode will be able to understand it. If your boss has never touched a programming language in their life, try to write your pseudocode as simple as possible, don't go writing full C syntax to explain it.

That's about all! Pseudocode is not a very complicated topic, and there's a lot of freedom in how you actually go about writing it. So with that, you should be able to go on and write.