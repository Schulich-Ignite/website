---
name: Compression
tags:
- intermediate
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
- paths
- encoding
whitelisted_definitions:
- encoding
---
Storage space is valuable. Whether it's memory on someones computer that needs to be preserved to keep it running, or space on a drive to keep it from being full. Compression is the act of taking some sort of data and storing it in a form that takes up less space than the original form. Usually this is done by finding out what patterns in the data repeat, and then finding ways to represent those repetitions in more compact forms. Compression can be done in tons of clever ways for various different types of data, but an incredibly common form is text compression.

## Encodings as compression

Some people consider some forms of [encoding](/definitions/encoding) to be compression. This is a reasonable perspective, in fact many forms of encodings are designed specifically to support compression (such as JPEG).

## Text

For text generally speaking you can look for common patterns and then replace them in the text to make it shorter. For example:

![](/img/blog/compression/io-example.png)

Since each character is roughly 1 byte, we saved 13 bytes.

## Images

Images are another common format that requires compression. With images however there are 2 primary types lossless and lossy.

### Lossless

Lossless formats are what we're used to. They take in some data, compress it, and at the end you can decompress it to get back exactly the data you put in. This is handy for things like text (you usually don't want just **some** of a text file), or images that need high fidelity. PNG is a format that is a lossless form of compression. 

### Lossy

Lossy is unlike the systems we've seen before. With typical compression we want to get back **exactly** what we had before we compressed it. With lossy compression we want to be "close". Imagine you have a large image on a small screen, let's say a 1920x1080px image on a 480x720p screen. If we were to resize the image and in the process remove 1/8 of the pixels and just stich together a smaller but "close enough" version of the image, most people wouldn't notice. 

Formats like JPG are lossy. They basically create versions of images that are "close enough" to the original source images. This can cause some issues like [artifacts](https://en.wikipedia.org/wiki/Compression_artifact), a good quick explainer about this can be found [here as a video](https://www.youtube.com/watch?v=yBX8GFqt6GA)

### Base 64

There are multiple different number systems that exist. For the most part people use base 10, which is where numbers go from 0-9, then you add a digit, and then each successive digit is a multiple of 10 (100, 1000, etc.). 

There are several other number systems used in computer science. Base 2 is where you go from 0-1 and then shift up a digit where each digit is a power of 2 (i.e. 0001 is 1, 0010 is 2, 0100 is 4, 1000 is 8 etc.). Or hex which is base 16 where you go from 0-9 then letters A-F.

One other interesting number system we use is base 64. The reason base 64 is handy is because it gives you short text representations for lots of data. This is why in many database systems images are not stored as images. The metadata is stored elsewhere for each image, and the images themselves are stores by taking all the data that makes up the pixels and converting it to base64. 

For example if we take the [5x5 version](/img/blog/compression/t.jpg) of this image:

![](/img/blog/compression/pixel-image.png)

Can be stored as:

```
data:image/jpeg;base64,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
```

With this text representation the text can now be further compressed

## Videos & Audio

Text and images are important, and should be compressed since it's wasteful not to, however videos and audio are some of the largest files you will encounter on devices. This is because inherently the quality is tied to file size. The greater the quality of video and audio the more you need to sample. 

### Sampling

Sampling is basically the frequency you measure at. Obviously when videos and audio is created it needs to be recorded, and in order to record the camera and/or microphone needs to know how quickly it should be capturing information. With Video this is usually in fps (frames per second) where you tell the camera to record for example 30 frames per second (1 frame of video captured every ~33 miliseconds!).

Audio is sampled even more agressively than video, typically it's sampled in kHz, and usually ~48kHz (48,000 samples/second or 1 sample per ~28 microseconds which is 1,000,000 smaller than a second). 

#### The cost of sampling 

So uncompressed if we took a 720p video (1280x720 pixels or 921,600 pixels) at 30fps, using RGB colours (3 8 bit numbers representing the amount of red, green, blue in a frame), and 44.1kHz audio at [16-bit depth](https://www.headphonesty.com/2019/07/sample-rate-bit-depth-bit-rate/) (1,411,200 bits per second) then per second we are storing ~ 83.12 megaBytes per second:

```
Audio + video = total per second
(44,100 samples x 16 bits per sample x 2 channels / 8 bits per byte) + (921,600 pixels * 3 bytes per pixel * 30 frames per second) = total per second
(176,400 bytes) + (82,944,000 bytes) = 83,120,400 bytes/second

83,120,400 bytes per second / 1000 bytes per kiloByte / 1000 kiloBytes per megaByte = 83.12 MegaBytes per second
```

That might not sound like a lot, but for a 1 minute video that's 4.987 Gigabytes or 2.9922 TeraBytes per hour. So if you had a shop with some security cameras and you wanted to record in 720p with 44.1kHz 16-bit audio you would end up with 71.8128 TeraBytes per day, or 26.211672 PetaBytes a year. If we were to buy the largest drive I found on memory express ([this one](https://www.memoryexpress.com/Products/MX00125311)) it's about $30/TeraByte, so for a day it would cost $2,127 and for a year it would be ~$786,350.16. This would never be sustainable for video hosting services. To put this in perspective there's 8760 hours per year, and YouTube has [271,330 hours per **day**](https://www.wyzowl.com/youtube-stats/#:~:text=Around%203.7m%20new%20videos,average%20length%20of%204.4%20minutes.) being uploaded (~$24 million a day, or ~$9 billion a year). So how do we make these smaller?

### Codecs

Codecs are the name given to the systems that are used to encode and decode video files. There are tons of codecs, and tons of variants of codecs that substitute different parts of the compression -> encoding -> decoding pipeline

Some common codecs are:

- [MPEG](https://en.wikipedia.org/wiki/Moving_Picture_Experts_Group#Standards)
- [H.264/AVC](https://en.wikipedia.org/wiki/Advanced_Video_Coding)
- [HEVC](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding)
- [AV1](https://en.wikipedia.org/wiki/AV1)

## Why not just compress everything?

Most things these days are compressed, but you might not always want compression. Compression helps save space, this can be important where space is limited, or where the amount of information sent matters (i.e. over a network). But, this does comes with a few potential tradeoffs. 

|Pros | Cons|
|-----|-----|
|Saves space | Compression algorithms can be intense and take a while to compute|
| Can be faster to load over a network | Since it's a special format you need a program to decompress it which can take time and lots of resources |

So if you have an incredibly weak computer, but a lot of storage, it might be worth trading off the loss of storage space for less computing power needed. Alternatively if you don't have access to install the software to read compressed files, you may be stuck with uncompressed formats.

## Compression systems

Most real world compression systems are based on the encoding they use. But here are a few examples you can look at:

**Text**

Algorithms that make up common compression systems 

- Huffman Coding
    - [How Computers Compress Text: Huffman Coding and Huffman Trees](https://www.youtube.com/watch?v=JsTptu56GM8)
    - [Huffman coding step-by-step example](https://www.youtube.com/watch?v=iEm1NRyEe5c)
    - [How Huffman Trees Work - Computerfile](https://www.youtube.com/watch?v=umTbivyJoiI)
    - [Huffman Coding Visualizer](https://cmps-people.ok.ubc.ca/ylucet/DS/Huffman.html)
- LZ77/LZ1
    - [Elegant Compression in Text (The LZ 77 Method) - Computerphile](https://www.youtube.com/watch?v=goOa3DGezUA)
    - [The Beauty of Lempel-Ziv Compression](https://www.youtube.com/watch?v=RV5aUr8sZD0)
    - [Learn in 5 Minutes: LZ77 Compression Algorithms](https://www.youtube.com/watch?v=jVcTrBjI-eE)
    - [17. LZ77 Encoding, decoding with examples.](https://www.youtube.com/watch?v=zev2A2uWYsM)
    - [String Visualizer](https://kg86.github.io/visstr/dist/vis_str_demo.html)
- Deflate
    - [An explanation of the Deflate Algorithm](https://www.youtube.com/watch?v=O1NATKw6G_U)
    - [An Explanation of the Deflate Algorithm (original publication)](https://www.zlib.net/feldspar.html)
    - [Data Compression (Summer 2020) - Lecture 11 - DEFLATE (gzip)](https://www.youtube.com/watch?v=oi2lMBBjQ8s)

Common compression systems (Use deflate, huffman coding, and LZ77/LZ1)
- Gzip; A generic compression system used in most browsers and applications
    - [Gzip file compression in 100 seconds](https://www.youtube.com/watch?v=NLtt4S9ErIA)
    - [How Gzip Compression Works](https://www.youtube.com/watch?v=maL-SqyXvj8)
    - [Raul Fraile: How GZIP compression works | JSConf EU 2014](https://www.youtube.com/watch?v=wLx5OGxOYUc)
- Brotli; A webpage optimized compression system
    - [Brotli Compression vs GZIP Compression](https://www.youtube.com/watch?v=Uiyu3uo4OAE)
    - [Brotli site](https://www.brotli.org/)
    - [Source code](https://github.com/google/brotli)

**Image**

- JPG; Very common [lossy](#lossy) image compression 
    - [This video](https://www.youtube.com/watch?v=Kv1Hiv3ox8I)
    - These two videos from computephile
        - [Part 1](https://www.youtube.com/watch?v=n_uNPbdenRs)
        - [Part 2](https://www.youtube.com/watch?v=Q2aEzeMDHMA)
    - [This set of articles](https://en.wikibooks.org/wiki/JPEG_-_Idea_and_Practice)
- PNG; Common [lossless](#lossless) image format that also supports transparency
    - [How PNG Works](https://medium.com/@duhroach/how-png-works-f1174e3cc7b7) 
    - [How PNG Works: Compromising Speed for Quality](https://www.youtube.com/watch?v=EFUYNoFRHQI)
    - [Finally understanding PNG](https://compress-or-die.com/Understanding-PNG)
- Base64; A text-based way of storing image data
    - [Base64 Encoding/Decoding explained](https://www.youtube.com/watch?v=7gSSMy_M4HU)
    - [How to Convert Images Into Base 64 Data URLs with JavaScript](https://www.youtube.com/watch?v=EPlXPdNvQEY)
    - [Reduce base64 image file size | JavaScript](https://www.youtube.com/watch?v=fe062UdOKuo)

A good broad topic video can be found [here](https://www.youtube.com/watch?v=Ba89cI9eIg8)

**Video**

- MPEG; Set of formats used for videos (mpeg-4 is also known at `.mp4` files)
    - [What is MPEG Format | What is MPEG 4 Format | What are MPEG 1, MPEG 2 & MPEG 21](https://www.youtube.com/watch?v=F0ZinF-gTrY)
    - [MPEG Algorithm - Video & Audio Compression - Data Compression & Encryption](https://www.youtube.com/watch?v=Ky4CaKw7tdo)
- h.264; THe encoding used for most videos on the web today
    - [H.264 Part 1: Encoding & Decoding Basics](https://www.youtube.com/watch?v=J9RemuYxA4s)
    - [H 264 Video Compression](https://www.youtube.com/watch?v=1PMqXdWJHNs)
    - [An Overview of H.264 Advanced Video Coding](https://www.vcodex.com/an-overview-of-h264-advanced-video-coding/)
    - [api.video h.264](https://api.video/what-is/h-264/)
    - [What is H.264 video encoding? How does H.264 codec work?](https://www.e-consystems.com/blog/camera/technology/what-is-h-264-video-encoding-how-does-h-264-codec-work/)

Most commonly videos are MPEG-4 (`.mp4`) using a `h.264` codec to encode the data. A good broad topic video can be found [here](https://www.youtube.com/watch?v=QoZ8pccsYo4)
