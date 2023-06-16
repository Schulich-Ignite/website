---
title: Making Things Small
subtitle: An introduction to compression
date: 2023-06-12T00:00:00-06:00
modified_date: 2023-06-12T00:00:00-06:00
difficulty: intermediate
image: ""
authors: 
  - Kieran Wood
tags:
  - optimization
  - theory
  - terminology
---

Compression is the art of taking some data and making it smaller. If you want more details about common compression schemes take a look at our [definition page for compression](/definitions/compression). This article is instead going to focus on howing you compression with code examples, and simple custom compression schemes (don't get excited they're not very good) in python!

## Simple text example

The most common thing we will want to compress is text. We're going to come up with a super simple algorithm to do this. 

There are a few assumptions we're making for this to work somewhat well:

1. Text is in english
2. The text is general (if it's a programming language you want to pick different common words)
3. The text is at least a few paragraphs (if it's super short compression is unlikely to be helpful)

So the plan is this:

1. Create a list of the most common english words sorted by length, include the lowercase and capitalized versions
2. 

```python
common_words = [
    "the","at","there","some","my","of","be","use","her","than",
    "and","this","an","would","first","a","have","each","make","water",
    "to","from","which","like","been","in","or","she","him","call",
    "is","one","do","into","who","you","had","how","time","oil",
    "that","by","their","has","its","it","word","if","look","now",
    "he","but","will","two","find","was","not","up","more","long",
    "for","what","other","write","down","on","all","about","go","day",
    "are","were","out","see","did","as","we","many","number","get",
    "with","when","then","no","come","his","your","them","way","made",
    "they","can","these","could","may","I","said","so","people","part"
]
```
...

```python
common_words = [
    "Compression", "compression", "efficient","encoding","data",
    "the","at","there","some","my","of","be","use","her","than",
    "and","this","an","would","first","a","have","each","make","water",
    "to","from","which","like","been","in","or","she","him","call",
    "is","one","do","into","who","you","had","how","time","oil",
    "that","by","their","has","its","it","word","if","look","now",
    "he","but","will","two","find","was","not","up","more","long",
    "for","what","other","write","down","on","all","about","go","day",
    "are","were","out","see","did","as","we","many","number","get",
    "with","when","then","no","come","his","your","them","way","made",
    "they","can","these","could","may","I","said","so","people","part",
]

common_words += [word.capitalize() for word in common_words]

common_words = sorted(common_words, key=len)[::-1]

def compress(input_text: str) -> str:
  """Takes in some input text and returns the compressed form"""
  result = input_text
  for word in common_words:
    result = result.replace(word, str(common_words.index(word)))
  return result
```
  
Now we have our code it's time to get some text, naturally I figured asking chat GPT to write a few paragraphs on compression would be a good example, so here's the code for testing our system:

```python
input_text = """"
Compression is a fundamental technique used in various fields to reduce the size of data while preserving its essential information. In computer science and information technology, data compression plays a crucial role in storage, transmission, and processing of large amounts of information. By eliminating redundancy and exploiting patterns in data, compression algorithms can significantly reduce file sizes, resulting in more efficient use of storage space and faster data transfer over networks. From simple algorithms like run-length encoding to sophisticated methods like Huffman coding and Lempel-Ziv-Welch (LZW) algorithm, compression enables us to store and transmit data more effectively.

Compression algorithms employ different strategies to achieve efficient data compression. Lossless compression techniques ensure that the compressed data can be fully reconstructed back to its original form without any loss of information. These techniques are commonly used in applications where preserving the integrity of data is critical, such as archiving files, databases, and text documents. On the other hand, lossy compression methods trade off some degree of data fidelity for higher compression ratios. Such techniques are commonly used in multimedia applications like image, audio, and video compression, where the removal of non-essential information or imperceptible details can lead to significant reduction in file sizes while maintaining acceptable perceptual quality.

The benefits of compression extend beyond just saving storage space and reducing transmission time. Compressed data also reduces the demand for computational resources and improves system performance. When processing large datasets, compressed files can be read and decompressed faster than their uncompressed counterparts, allowing for quicker access and analysis. Moreover, compression enables efficient streaming of multimedia content, making it possible to deliver high-quality videos and audio over bandwidth-constrained networks. By minimizing the amount of data that needs to be transmitted, compression contributes to a smoother and more efficient digital experience, whether it's browsing the web, downloading files, or streaming media.

In summary, compression is a vital technique that enables efficient storage, transmission, and processing of data. It utilizes various algorithms and strategies to reduce file sizes while preserving data integrity or achieving perceptual quality. By minimizing storage requirements, improving data transfer speeds, and enhancing system performance, compression plays a central role in modern computing and communication systems, benefiting users across a wide range of applications.
"""

print(len(input_text))

result = compress(inpt_text)

print(len(result))
```

Problems:

- How can we tell which numbers are part of the compression, and which numbers are part of the text?
- In some cases it makes text longer


### Where it gets complicated


### A Better option


```python
from collections import Counter


input_text = """"
Compression is a fundamental technique used in various fields to reduce the size of data while preserving its essential information. In computer science and information technology, data compression plays a crucial role in storage, transmission, and processing of large amounts of information. By eliminating redundancy and exploiting patterns in data, compression algorithms can significantly reduce file sizes, resulting in more efficient use of storage space and faster data transfer over networks. From simple algorithms like run-length encoding to sophisticated methods like Huffman coding and Lempel-Ziv-Welch (LZW) algorithm, compression enables us to store and transmit data more effectively.

Compression algorithms employ different strategies to achieve efficient data compression. Lossless compression techniques ensure that the compressed data can be fully reconstructed back to its original form without any loss of information. These techniques are commonly used in applications where preserving the integrity of data is critical, such as archiving files, databases, and text documents. On the other hand, lossy compression methods trade off some degree of data fidelity for higher compression ratios. Such techniques are commonly used in multimedia applications like image, audio, and video compression, where the removal of non-essential information or imperceptible details can lead to significant reduction in file sizes while maintaining acceptable perceptual quality.

The benefits of compression extend beyond just saving storage space and reducing transmission time. Compressed data also reduces the demand for computational resources and improves system performance. When processing large datasets, compressed files can be read and decompressed faster than their uncompressed counterparts, allowing for quicker access and analysis. Moreover, compression enables efficient streaming of multimedia content, making it possible to deliver high-quality videos and audio over bandwidth-constrained networks. By minimizing the amount of data that needs to be transmitted, compression contributes to a smoother and more efficient digital experience, whether it's browsing the web, downloading files, or streaming media.

In summary, compression is a vital technique that enables efficient storage, transmission, and processing of data. It utilizes various algorithms and strategies to reduce file sizes while preserving data integrity or achieving perceptual quality. By minimizing storage requirements, improving data transfer speeds, and enhancing system performance, compression plays a central role in modern computing and communication systems, benefiting users across a wide range of applications.
"""
import string
counter_text = input_text.translate(str.maketrans('','',string.punctuation,))

counter_text = counter_text.split(" ")

counter = Counter(counter_text)

terms = {x: count for x, count in counter.items() if count >= 2}

words = sorted(list(terms.keys()), key=len)[::-1]

print(terms)


print(len(input_text))
words_common = input_text
for word in words:
    words_common = words_common.replace(word, str(words.index(word)))
print(len(words_common))


print(words_common)
```


## Images
...
