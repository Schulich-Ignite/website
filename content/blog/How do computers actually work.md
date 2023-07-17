---
title: A brief overview of how computers work
subtitle: From Electricity to Python
date: 2023-07-17T00:00:01-06:00
modified_date: ""
image: /img/blog/pexels-craig-dennis-57007.jpg
authors: ["Brendan Smiley"]
tags:
  - computer-science
  - electrical-engineering
  - logic-gates
---

This article covers a brief overview of how computers work and how they came to be. It does not intend to be a comprehensive explanation or a professional opinion on the subject. Instead, it is meant to be a high-level overview of how computers came to be and how they work.

There are many additional processes in between the ones discussed in this article. However, as an intermediate software developer, this is what I wish I knew when I started programming.

## TLDR

The combination of electricity and transistors was used to create logic gates. Logic gates were then used to create programming languages. Programming languages were then used to create complex programs like operating systems and web browsers.

<pre class="mermaid">
graph LR
    A[Electricity] --> B[Transistors]
    B --> C[Logic Gates]
    C --> D[Programming Languages]
    D --> E[Operating Systems]
    D --> F[Web Browsers]
    D --> G[Video Games]
    D --> O[Other Technologies]
</pre>

[How does knowing this make me a better programmer](#how-is-lower-level-computer-knowledge-useful-when-programming)

## Electricity - A Simplified Circuit

Electricity itself could be a whole other blog post so we will consider its "coming to be" out of scope for this post. However, computers are just a lump of special materials utilizing electricity. We can use electricity to turn things ON and OFF. Everyone should understand this, you can turn your house lights ON or OFF.

Below is an example of a simple light bulb circuit:
![Circuit](/img/blog/HowDoComputersWork/circuit.png)

- **Wires:** used to connect the components, often made of copper as it moves electricity well.

- **Battery:** used to provide electricity to the circuit. Batteries are made of chemicals that react to create electricity.

- **Light Bulb:** used to convert electricity into light. Light bulbs are made of wire wrapped in a loop. When electricity flows through the wire, it heats up and glows.

- **Switch:** used to open or close the circuit. When the switch is closed, electricity flows through the circuit. When the switch is open, electricity does not flow.

The foundation of computers is on the concept of whether something is ON or OFF. In computers, this is called 1 or 0 respectively (binary). A transistor is an electrical component that we can use to switch between 1 and 0 (like the light switch above).

## Transistors and Logic Gates - The building blocks of computers

To show you how we go from **_physical_** electricity to **_virtual_** logic, we need to review transistors and logic gates. You do not need a comprehensive understanding of this section.

As mentioned earlier, transistors are electrical components that can switch between 1 and 0 (ON and OFF).

Here is a photo of some transistors [^1]:
![Transistor](/img/blog/HowDoComputersWork/Transistorer.jpg)

Using transistors, we can create very unique electrical circuits that have different functions. For instance, a “AND gate” would check if 2 light bulbs are on ( 1 AND 1). However, “OR Gate” would check if either light bulb is on ( 1 OR 0, 0 OR 1).

The people who made these complex logic gates with electrical circuits converted them into **Black Boxes** for others to use.

**A Black Box is the idea that you have no idea how the insides of the box work, you only know what comes in, and what comes out. You can enter an input and know the expected output.** [^2]

<img src="/img/blog/HowDoComputersWork/Black_box_diagram.svg.png" alt="Black Box" width="40%">

Turning Complete is an excellent game that helps teach the different levels of "black boxing" involved with logic gates.

Turning Complete[^3]:

<iframe width="80%" height="315" src="https://www.youtube.com/embed/-YY73ejihZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

As you can see from the video, you can eventually use those 1 and 0s to create Assembly Language. From Assembly, you can then make more programming languages.

## Programming Languages - The building blocks of computer programs

Python is a high-level programming language **built from C.** That means **Guido van Rossum** (The author of Python) wrote Python in C programming language. **Dennis Ritchie** wrote C in Assembly and **Kathleen Booth** wrote Assembly in Binary (1's and 0's)!

The following diagram helps describe programming hierarchy [^4].

![Computer Languages](/img/blog/HowDoComputersWork/computer-languages.png)

Programming languages show that the computer science and software engineering community depends on each other and builds off each other’s work.

You should hopefully now understand that Python is just a bunch of 1’s and 0’s. Streamed TV shows are just a bunch of 1’s and 0’s. Everything on a computer is just a bunch of 1’s and 0’s.

## How is lower-level computer knowledge useful when programming?

### 1. Computers are just a bunch of 1’s and 0’s

Understand that when you program you are giving DISTINCT instruction. Therefore when you write code you must be EXACT with everything you type or the computer will not understand.

This doesn't just stop at syntax errors, you may write something that “works” as the computer will run it but it doesn’t “work” how you wanted it to. Logical errors are the most important errors to catch, and they are the hardest to catch.

Here is an example of a logic error that a human must catch. In both cases, the code will run but the first output is not what we want.

```python
#  A function that is supposed to exponentiate a number
def wrong_exponent_function(number, exponent):
    return number * exponent

def correct_exponent_function(number, exponent):
    return number ** exponent

# This shows that the code "works" but it is not "correct"
```

How can you account for logic errors? Do [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing) on your programs.

Now, this is not to say that you should not use AI or other new technologies, as they could also detect the above logic error and fix it for you.
However, we must ensure that we are writing code that is **_correct_** and does more than just **_works_**. AI Chat models have been known to [hallucinate](<https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)>) which can lead to large amounts of code that **_works_** but is not **_correct_**.
Therefore, always be mindful of logical errors when you are **_communicating with a computer_**.

### 2. Encapsulation of your code

Transistors, Logic Gates, and higher-level programming languages are all examples of encapsulation. Encapsulation is the idea of hiding the complexity of something and only showing the user what they need to know. The scientist and engineers of the past have continuously used encapsulation to make computers easier to use.

When you are programming, you should always be thinking about how you can encapsulate your code. This will make your code easier to read and easier to debug.

## References

[^0]: Craig Dennis, Pexels, "Green and Grey Circuit Board ", https://www.pexels.com/photo/green-and-grey-circuit-board-57007/.
[^1]:
    Transistorer (cropped).jpg, Mister rf, https://commons.wikimedia.org/wiki/File:Transistorer_(cropped).jpg
    .

[^2]: Black box diagram.svg, Belbury,https://en.wikipedia.org/wiki/File:Black_box_diagram.svg.
[^3]: Turning Complete, LevelHead, https://www.youtube.com/watch?v=-YY73ejihZo.
[^4]:
    Middle Tennessee State University
    , "Computer Languages", https://www.cs.mtsu.edu/~xyang/2170/computerLanguages.html.

[^5]: GitHub CoPilot, Aided formatting the markdown, https://copilot.github.com/.
