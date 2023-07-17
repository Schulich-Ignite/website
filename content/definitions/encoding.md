---
name: encoding
aka:
  - sanitizaion
  - encode
  - escaping
  - ASCII
  - UTF-8
  - utf-8
  - ascii
tags:
- intermediate
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
- paths
---

Encoding just means a way to take a set of information in one format, and convert or represent it to another format. You can imagine the same concept (a boat, a sandwhich etc.) being encoded in different languages (spanish, english etc.). But in computer science most often when people are talking about encoding they are talking about text & file encoders.

## Why Encode?

Encoding often provides a universal language that can be spoken between systems. Imagine you're a ship at sea, everyone on the ocean speaks a different human language (english, spanish etc.). How can you comunicate in a language-agnostic way about your position so that the boats don't collide?

Well, if we decide on a system, like say the latitude, then longitude, then bearing (North, South, East, West), then no matter the language you only need to communicate that message for everyone to understand. 

Some encoding schemes have other advantages like: 

- Cryptographic security (A way of authenticating messages/files sent)
- Efficiency (In terms of space files/messages take up)
- Enabling large character sets
- etc.

## Lookup-Based encodings

Lookup based encodings use some sort of [collection](/definitions/collection) to provide a mapping of keys-> values. This could be a number representing a letter, or even a word. Whatever the semantics the idea is that you start with a certain input, run it through an encoding, and then have some way to take the encoding and convert it back to the input text!

### Text & File encoders

The most common use for lookup-based encoders is text and file encoding. Every file you open, every webpage you look at, all of them will have a certian encoding to the file that facilitates the text you see on screen.

#### ASCII

ASCII (American Standard Code for Information Interchange) is one of the simplest of the text encoding systems. Essentailly it's used to map integers to characters. It has 255 values (in the extended version, 128 in the original), which allows it to represent 255 characters using only numbers. A full table can be found [here](https://www.asciitable.com/), but for example we could do a simple python implementation with a subset of the ascii characters:

```python
ASCII_TABLE ={ # This would normally have all 128 or 256 values
  "h":104,
  "e":101,
  "l":108,
  "o":111
}

word = "hello"
result = []
for letter in word:
  result.append(ASCII_TABLE[letter])
print(result) # [104, 101, 108, 108, 111]
```

Documents used to commonly use ascii because each characteris guarenteed to be at most 1 byte (8 bits, since 8 bits can represent 256 values). This made early networking code simpler because you could read files 1 byte at a time and be guarenteed 1 letter!

#### UFT-8

UTF-8 Is a more modern version of ASCII. IT is quite a bit larger and more complicated (can represent 1,112,064 valid character). The first 128 characters of UTF-8 are ASCII compatible. UTF-8 is **usually** the standard for most text editors, webpages, and text files.

**Pros**

- Larger character set (turns out there's a world beyond english)
- [Self-Synchronizing](https://en.wikipedia.org/wiki/Self-synchronizing_code)

**Cons**

- More complicated to implement (more characters) 
- Support for weirder cases ([some emojis are literally two characters added](https://www.fluentpython.com/extra/multi-character-emojis/))

## Other Types of Encodings

As I said, encodings are just a way to represent information from one form to another. This means there's more than just 1-1 lookup encodings. Any standardized string representations of data can be considered an encoding.

### Ship encoding from before

Earlier we talked about the example of having a way to tell other ships about your location and the way you're headed to avoid colisions. Let's update our information we need to include:

- Current location (Longitude, Latitude)
- Current bearing (North, South, East, West and any combination of two of those)
- Current speed (m/s)

To do this we can provide the encoding format:

`long|lat|bearing|speed`

Where longitude and latitude are floating points to 3 decimal places,can be negative or positive, and up to 3 digit numbers (i.e. 0.0 to 999.999). So for example:

`44.810|-166.782|NE|11`

Would be someone Moving north east at 11m/s, at the location ([44.810,-166.782](https://goo.gl/maps/nXWfgErGyhuDuvZy9)). This encoding means that if each character is a byte, we can encode any boat location in the world in 23 bytes! If there are 500,000 boats in the world we could track them all using 11.5Mb of data!

## Programming languages as encodings

Many people call programming languages encodings for the underlying "idea" of a system. Even more common of a comparisson is markup languages like HTML are an encoding for how you want something to look. It's text that uses elements to "represent" a visual interface!

### Paths

If you are interested in more examples of different encodings take a look at our definitions of [paths](/definitions/paths), this covers several other popular encoding schemes for resource location!

## Sanitization

Having these lookup systems is great, but what happens when someone does something invalid? What happens in ASCII if someone puts 512 bits? What happens if someone includes a character that's outside your character set? These questions are all questions of sanitization.

Sanitization is essentially the process of cleaning data to make sure it's safe before usiing it for anything. This can be raising errors and stopping execution for invalid encoded information, or stripping invalid information.

## Honorable mentions

This section just includes some interesting references and encoding systems that help drive home just how diverse encoding can be:

- [Plain Text - Dylan Beattie - NDC Copenhagen 2022 (5:48)](https://youtu.be/gd5uJ7Nlvvo?t=348)
- [Mike's Cube Code - Computerphile (2:52)](https://youtu.be/g9n0a0644B4?t=172)
- [Everything you need to know about emoji 🍭](https://www.smashingmagazine.com/2016/11/character-sets-encoding-emoji/)
- [Storing and displaying images with base64](https://tunghatbh.medium.com/storing-and-displaying-images-with-base64-897b1ceee502)
- [Moorse Code](https://www.britannica.com/topic/Morse-Code)
- [Baudot Code](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/colossus/baudot.html#:~:text=The%20Baudot%20code%20or%20International,%5E5%3D32%20characters%20efficiently.)
- [FEN Chess Encoding](https://www.chess.com/terms/fen-chess)
- [Computer Chess Encodings](https://en.wikipedia.org/wiki/Board_representation_(computer_chess))
- [Unicode Playing cards](https://en.wikipedia.org/wiki/Playing_cards_in_Unicode)
- [Pickling in python (binary encoding)](https://docs.python.org/3/library/pickle.html)
