---
title: Programming Like a Professional (SOLID)
subtitle: A Software Design Principle
date: 2023-08-14T00:00:01-06:00
modified_date: ""
image: /img/blog/edho-pratama-T6fDN60bMWY-unsplash.jpg
authors: ["Cole Pawliw"]
tags:
  - software-engineering
  - software-design
  - SOLID
---

Learning how to program is more than just finding a cool language and writing code. While it's true that anybody can learn to code, most people stop before learning the best practices for developing and maintaining their code. Many years ago, before there were standards in programming, successful applications would have to be rewritten many times over just to make small changes that didn't work with the original code. SOLID principles were created as a standard for all programmers to follow, not only so that your code remains open and flexible for change, but also so that another programmer can work on your code without having to figure out everything you did!

If you want to pursue programming beyond small personal projects, then learning how to follow SOLID principles will help you along that path. We will learn what each of the letters in SOLID stands for, as well as a brief explanation of how to follow that principle. These principles involve much more advanced knowledge of programming than what is typically covered by this blog, so if you have not learned about abstraction, I would recommend doing some personal research on that before coming back to this article. Currently there are no articles on our blog about more advanced forms of object-oriented programming, however there are plenty of resources online about what interfaces are and how they work. A good starting point would be [this online guide.] (https://isaaccomputerscience.org/concepts/dsa_ctm_abstraction?examBoard=all&stage=all)

## Single Responsibility

The S in SOLID stands for the Single-responsibilty principle. The basic description of this principle is "there should never be more than one reason for a class to change." If you recall from our [classes and objects](https://schulichignite.com/blog/c-plus-plus-classes/) article, a class is a special structure in various languages that allows various data and functions to be stored in a single variable. This principle is referring to "changing" a class to mean interfacing said class. In essence, an interface allows for a class to be altered in various ways, such as having its own definitions for functions. This allows for a class to be changed according to different needs, without having to change the original class and ruin other existing code. So to better summarize what this principle is saying: a class should never be changed in more than one way, and if you have more than one change to make to a class, those are different responsibilities and should be handled separately.

Consider an example where you have a class named "User" that is meant to handle any kind of user, but later on in development you realize that you need more specific instances of the User class, such as a Customer and an Admin. Rather than wrapping this class in a new one that has information for both Customers and Admins, it is better to create two separate inheritances, one to be used for Customers, and the other to be used for Admins. This way, any information you add to make a User a Customer is not getting in the way and being unused by Admin users, and vice versa.

## Open Closed

The Open-closed principle states that "software entities should be open for extension, but closed for modification." As we touched open in the previous principle, when changing a class, it is much better to change the class through abstraction (interfaces) or some other method, such as inheritance, rather than changing the code of the class. Let's say you have a functioning program that you need to add new functionality to. If you start adding said functionality by altering the existing code, you introduce the potential of creating bugs in what was already working. This is because you are changing classes that are already established, and you might miss cases in the rest of the code that breaks because of the new changes. Because of this, your entities, in this case we consider classes, should be closed for modification. However this doesn't mean that the entities must remain static. It is best practice to allow the ability for extending your class through the use of inheritance or interfaces, thus your entity is open for extension. By following this principle, you ensure that your existing code remains functionally the same while allowing for new code to be added afterward for whatever reason.

Look back at the previous example and try to think about how this principle could apply. In this case, when creating the User class, it would have been smart to initially design the class with template functions rather than predefined functions, that way any new class type that inherits the User type will be able to define those functions for itself. This form of class writing is known as "Abstraction", and many object-oriented languages have support for this kind of class. [Here] (https://www.w3schools.com/java/java_abstract.asp) is a quick look at abstraction in Java, however I recommend learning beyond what this article details if you are really interested in SOLID. Creating abstract classes allows for new developers to add on to your existing classes with ease.

## Liskov Substitution

L stands for the Liskov substitution principle, which states that "functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it." Unfortunately our articles do not have enough information to help best understand this principle, as it is important for interfaces. The basic idea of this principle is relying on the fact that an interface of a class is essentially a subclass of the original class. Because of this, any instance where the base class is being used should allow for any type of subclass to be used without issue.

If you have a base class called "Vehicle," then create an interface of that class named "Truck," then a function that requires a Vehicle type should be able to work just fine if a Truck is instead passed to it. None of this will make sense if you don't have an understanding of some more advanced OOP methods, so I recommend researching abstraction and inheritance, as they are very important tools to help with writing code.

## Interface Segregation

This principle is very similar to the Single-responsibility principle, the Interface segregation principle states that "clients should not be forced to depend upon interfaces that they do not use." Interfaces should be divided into smaller interfaces that each serve a specific purpose, that way you can keep different functionalities of your code isolated from each other, which can help prevent problems from chaining together if one piece of code doesn't work. What this means is if there is a bug in one use of your code, it becomes easier to isolate the source of the bug because there are no dependencies on other unnecessary pieces of code.

Imagine creating an interface named "Animal" that you want to implement in many ways. This Animal interface is very generic and doesn't do a good job of distinguishing the type of animal. In this scenario, creating new interfaces that extends (similar to abstraction) the original interface would allow you to create mammal, reptile, fish, insect, and avian interfaces. Now when you create an implementation of an animal interface, it can have a better distinction and each interface can have unique functions that the others don't have or need. For example, most of these animal types can lay eggs, but mammals do not, so the mammal interface would have no need for a function lay_egg(), but would instead need give_birth().

## Dependency Inversion

The final SOLID principle has two major points: "High-level modules should not import anything from low-level modules. Both should depend on abstractions," and "Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions." This principle is most important when working with large-scale applications, projects that are typically undertaken by large tech companies. Because of this, it is unlikely that this principle will apply to the majority of programming scenarios. When working on large projects, it is common to see the project be split into different levels, or modules. While a simple approach would be to have each level feed into the next, or to have the lower-level modules directly use the higher-level modules, this creates dependencies that can be difficult to change. In practice, it is best to create abstractions on the higher-level modules that can be accessed by the lower-level modules, thus there is no direct interaction between the modules and everything remains separate and contained. This principle is very complicated and could use an article of its own to completely explain, so in place of an example I suggest simply reading [the Wikipedia page] (https://en.wikipedia.org/wiki/Dependency_inversion_principle) if you're interested in it.

## Summary

Many of these principles are quite complicated, and the reality is most will not apply to whatever you will find yourself working on for the foreseeable future. However if you ever see yourself working for larger companies in the future, then it will be in your best interest to familiarize yourself with SOLID principles. Many of these principles can be summarized in a few simple sentences: Keep different sections of your code separated and distinct from other sections, this is known as modulating the code. Make sure changes that could be needed can be implemented, and if a change is needed, create it as an extension of the code rather than altering the original code.

By following these principles, you will ensure that all your projects remain open to change, are easy to bug test, and can be understood by others.

## References

https://unsplash.com/photos/T6fDN60bMWY
