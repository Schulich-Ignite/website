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

## Leagalese

There are a lot of terms in this post that are legal terms. Any that aren't explicitly defined you can find here:

- Intellectual Property: The ownership of an idea. For example a cartoon company may own the intellectual property (IP) to a character in their shows. This means other people can't use the character without talking to them first.
- Proprietary: Created by and for someone. For example a company may create a proprietary algorithm to recommend videos to users. 
- Fraud: Knowingly lying to someone in order to gain something. For example lying about being able to speak a language in order to get paid to be a translator.

## Licensing

A license is basically the thing that tells you what you can do with some software. Sometimes you buy "license keys" in order to gain access, othertimes the licenses are implicit, meaning you agree to them when you use the software. These **must** be stated either somewhere in the software, and/or **must** be available in some form to be considered valid. That means if you are just providing a binary/executable, you must have some way for someone to read the license that is available to them. 

Generally in software development we care about licenses for source code (code used to create the program), but licenses can exist in many forms. For example you might buy a license to use a photo, or to "unlock" a peice of software etc. 

Source code licenses can be used to determine:

- If you can use the code in your project
- If you can use the project name in your project
- If you have to send back any changes you make
- If you are allowed to make any changes to the code
- If you are allowed to use the code without purchase
- If the code comes with a warranty 
- If you can change the license to the code & usually which are "compatible"
- etc.

There are a few common misconceptions about source code licenses:

- Projects don't have to have **just 1** license, portions of the code can be licensed differently (this gets messy though)
- Licenses do not imply [copyright](#copyright), just because facebook lets you use code they distribute doesn't mean you can use their brand name


### Open source

Open source is the idea of having people publish the source code to their projects. This means that people "have the freedom" to know what is running on their computers. The argument is that in the same way you can open up an engine in a car, you should be able to "open up the engine" of software.

Other benefits:

- People who want a feature can create it and contribute it back to the project for other people to use
- Bugs and security flaws can be found and patched
- People can learn from existing code
- Privacy audits can be done on code you are running
- Can take [libraries and API's](#apis-and-libraries) and stick them together to build a bigger overall project

Open source is **very** popular in software development. Many of the projects that power the internet are open source. Here are a few examples:


- [linux kernel](https://github.com/torvalds/linux); What runs all "linux" operating systems, which account for over %90 of server market share [^1]. 
- 

#### Copyleft

#### Free as in freedom, not in price

### Closed source

Closed source is what most people will think of as the "default" way to do things. Essentially this means that the source code used to create an app is not disclosed. So for example if you have a large company that distributes videos, you may have no idea what code is running on their servers to process your data. It's important to keep in mind that closed source does not guarentee that something is **propreitary** (created by the company, for the company). Many closed source systems actually rely (sometimes entirely) on [open source](#open-source) software.

Assuming the other software you're using does not have any conflicts with the licenses it is perfectly fine to write closed source software. 

There are some valid reasons to do so:

- You are one of the first groups in a field and want to keep your head start
- You are using methods of solving a problem that haven't been patented/published yet
  - Many countries use a "first to patent" approach, meaning even if you created the technology you can be sued out of using it if someone patents it before you
- You just don't want people to use your code

#### Bad reasons to do closed source

With everything being said, some people opt to do close source for bad reasons. Here are a few **bad reasons** to do closed source.

##### Security through obscurity

The idea is that something can be secured by just making it hard to find. For example you might have a "closed source" file with all the passwords in it, or a server that uses an encryption key in a weird directory so people are less likely to find it.

One real world example of this was a story I heard from someone who wrote firmware for a router company that used to "trust" devices by having them send signals with set time intervals. So for example it would send a letter "a" after establishing a connection at 1, 1.3, 1.5, 1.8, and 3 seconds. The idea being this pattern was so "random", that it should be secure.

**This isn't security**, at best it's just inconvenient for people trying to steal your information. Close sourcing something because you don't know how to do security is just irresponsible, not clever. People should be able to know which encryption system, or software your using and **still not be able to break in**. If just having to know some small peice of information allows people to break in, then it's just a matter of your project having information wortth stealing before someone will get in.

##### Uniqueness/proprietary system

Many times when people are creating projects they intend to sell they will try to not be transparent with the technologies they use. If they create websites they want customers to think they use some "special sauce" system to create them that requires the company. This being a reason to close source is also a bad idea if you are actually just using open source projects to build with. Not only because it's dishonest, but depending on what you're doing the claims themselves can be illegal. 

If you lie to someone in order to get them to work with you you're committing fraud. It's fine if you don't want people to know what you're using, but trying to hide behind closing your source to ramp up the price can create a lot of problems.


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

## References

[^1]: "Linux is used to power 96.3% of the world's top web servers" https://www.enterpriseappstoday.com/stats/linux-statistics.html#:~:text=Linux%20is%20used%20to%20power,the%20world%27s%20top%20web%20servers.&text=In%20fact%2C%2096.3%25%20account%20for,%25)%20are%20the%20main%20players.
