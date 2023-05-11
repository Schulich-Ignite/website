---
name: Webpages
aka:
    - html
    - HTML
    - CSS
    - Cascading Style Sheets
    - Cascading Style Sheet
    - JS
    - Javascript
    - MIME Type
    - mime types
tags:
- scorch
- networking
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
- http
---

When we visit a page on the web we don't tend to think too much about what makes up the page. How does everything show up how it does? and how do we add features to webpages like search bars, and making the same page work no matter what size the screen is?

## Parts

To start with there are 3 primary languages used to build up webpages, and they each have different responsibilities.

### HTML

structure
...

### CSS
design
...

### JS
actions
...

#### WASM

These days javacsript is not the only language that can run in a browser. WASM ([web assembly](https://webassembly.org/)), is a system that allows you to run code written in other languages in the browser. This has some good performance benefits, as well as making it easy to port old software to run in the browser ([wasm doom 3 port](https://wasm.continuation-labs.com/d3demo/)). However it is not fully supported in the web, and has some limitations that make it hard to use practically. So for now It's recommended to stick to JS for most things.

## MIME Types

The web is not all webpages. Some things that you request over the web (images, videos, zip files etc.) use none of these languages. The way your browser determines how it should handle different responses is down to [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). A MIME type is just a header (typically called `content-type`), and there is [a list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of approved MIME types recognized by the browser. These act similar to how extensions work on regular computers.
