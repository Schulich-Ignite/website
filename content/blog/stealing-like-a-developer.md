---
title: Stealing Like a Developer
subtitle: Using other people's code
date: 2023-03-01T00:00:00-06:00
modified_date: 2023-03-01T00:00:00-06:00
image: /img/blog/stealing.jpg
authors: 
- Kieran Wood
tags:
  - scorch
  - web
  - legal
  - open source
---
No one writes all their own code. We always build on the shoulders of the people that came before us. But how do we do this responsibly, and legally? 

If I see a website I like why can't I just copy the HTMl, CSS, and Javascript then host it myself and change the name? In this article we're going to go over some of the basics of copyright, licensing, and different source code types. 

## Disclaimers and notes

**This is not legal advise**, if you're going to put this into practice get it looked over by a lawyer first. We're not responsible if something goes wrong, I'm a developer not a lawyer. 

On top of that, a few things to consider while reading:

1. Laws change over time
2. Laws are different in different countries
3. Legal systems are often not intuitive. Don't just assume it works "the obvious way", look it up, or ask a lawyer

## Licensing

A license is basically the thing that tells you what you can do with some software. Sometimes you buy "license keys" in order to gain access, othertimes the licenses are implicit, meaning you agree to them when you use the software. These **must** be stated somewhere in the software, and **must** be available to be considered valid. That means if you are just providing a binary/executable, you must have some way for someone to read the license that is available to them. 

Generally in software development we care about licenses for source code (code used to create the program), but licenses can exist in many forms. For example you might buy a license to use a photo, or to "unlock" a peice of software etc. 

A few misconceptions:

- Projects don't have to have 1 license, portions of the code can be licensed differently (this gets messy though)
- Licenses do not imply [copyright](#copyright), just because facebook lets you use code they distribute doesn't mean you can use their brand name
- 

### Closed source


- Security through obscurity isn't security
- If you don't patent an idea people can still often take it
- When you get large enough people who are clever have an incentive to break into your stuff, and are more cleer than you think

### Open source

#### Copyleft


## Vendoring

### API's and Libraries

### Vendoring entire projects

This is actually often allowed. In fact depending on the license provided by the software it's encouraged. One of the packages I wrote a while ago called [ahd]() actually encourages this as a feature to get around some limitations and provide additional customization.

Likewise lots of software projects that are full systems (full apps, not just API's)

That being said you have to keep in mind that closed source software usually does not allow you to do this. Likewise

## Copyright


## Terms of service

## Suggestions

1. Always add **a license**, when in doubt [MIT]() is a great option
2. If you don't have any reason to, open source is usually a good call

## Resources

- [choosealicense.com](https://choosealicense.com/) is a website created by [GitHub](https://github.com/) to help people understand licenses and choose good ones!
