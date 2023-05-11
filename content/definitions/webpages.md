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
    - html
    - ui-ux
    - web
    - css
    - design
    - frontend
    - js
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

To start with there are 3 primary languages used to build up webpages, and they each have different responsibilities. Unfortunately this is not always the case that each language strictly has one responsibility, web developers like making things complicated. For %90 of webpages you will only encounter these 3 parts.

### HTML

The HTML provides the structure and content of a webpage. Most nouns you find on a page will be the HTML. For example 

![html example](/img/definitions/webpages/html.png)

"That blue **block of text** with **an image underneath**" the block of text, the image, and the order they come in is defined by HTML.

HTML is broken up into elements. These elements have a few parts:

- start tag 
- end tag (sometimes optional)
- Inner content (optional) 
- attributes (optional)

![html elements](/img/definitions/webpages/html2.png)

Here is the source code for the example above (without the blue):

```html
<h1>This is a block of text</h1>
<img src="https://schulichignite.com/img/logos/ignite.svg">
```

In this you can see the first line is a `h1` or heading 1 tag. Tags follow the format of:

```html
<tagname></tagname>
```

Where the angle brackets (`<>`) indicate the start tag, the angle bracket with a "/" (`</>`) are the end tag, and the tag name tells the browser what type of content is included and how it should be interpreted. From there the text inside is called the inner content. 

You will notice the `img` (image) tag has no end tag, it's one of the few tags that doesn't need one. It also has an *attribute* (`src`). Attributes are data that tells the browser about features you want to use with that element. In our case the `src` (source) attribute tells the browser where to get our image from.

### CSS

CSS defines our design, and how the page looks. When looking at a page most adjectives on the page will be defined by css. For example:

![css example](/img/definitions/webpages/html.png)

"That **blue** block of text that is **3em tall** with an image **that is 250px** underneath" the text being blue, the text’s size, and the size of the image would be defined by css

CSS can be written a few ways:

1. Inline
2. Style tags
3. Separate files

#### Inline

Inline styles are where you write CSS directly in the HTML element you want to effect.

```html
<element style="css here"></element>
```
For example:

```html
<h1 style="color:red;font-size:24px;">Red Text</h1>
```
Which results in:

![css example](/img/definitions/webpages/css1.png)

#### Style tag

This method is used to write all of your CSS rules in one place inside your HTML: 

```html
<style> /*CSS HERE*/ </style>
```

This uses *CSS selectors* to choose elements. Inline styles apply directly to the element they're on. Since a style tag isn't attached to an element CSS selectors essentially are a way to tell the browser which HTML elements you're looking for. They are in the format of:

```html
<style>
selector{
    rule: value;
}
</style>
```

For example to make all h1 tags red you can do:

```html
<style>
h1{
    color:red;
} 
</style>
```

CSS selectors get complicated quickly, you can find details about selectors [here](https://www.w3schools.com/cssref/css_selectors.php)

#### File

You can also choose to write styles in a file with css extension (i.e. `file.css`) using the same [CSS selector](https://www.w3schools.com/cssref/css_selectors.php) format as when writing in a style tag (you don't need the actual style tag though). You can then import using a link tag in the HTML like this:

```html
<link rel="stylesheet" href="./file.css">
```

This is the preferred option for writing CSS since it lets you split up files into smaller more manageable pieces and helps keep your files for a project organized. You can also change the `href` attribute to a URL and use someone elses stylesheet! We [wrote a blog post about this here](https://schulichignite.com/blog/how-to-cheat-at-css/#css-frameworks).

### JS

Javsacript defines what **dynamic behaviours** happen on the page. Most **verbs** on a page will be javascript. For example:

![](/img/definitions/webpages/js.gif)

If you have a page where when you **click a button** the number above it will **increment by 1**.

Javascript is a language that is able to run in the browser. This allows you to do many things, but the biggest things advantages are that you can:

- Run code after the page has loaded
- Modify the page directly
- Use it to maintain a connection to a server, or start new connections

So why can't we just use any language? Well, first we have to understand how a page loads:

![](/img/definitions/webpages/js2.png)

In the last step you can see that the user is now loading the page and has stopped talking to the server. So what happens if we need to run code after the user gets the page? We need to run the code in the browser, and the only language that ships directly with the browser is javascript.

Like CSS you can use a tag (`<script>`), or a .js file. But you can also write your code in-browser using the console to test it. Javascript is a full language and too big to cover in this article. 

#### WASM

These days javacsript is not the only language that can run in a browser. WASM ([web assembly](https://webassembly.org/)), is a system that allows you to run code written in other languages in the browser. This has some good performance benefits, as well as making it easy to port old software to run in the browser ([wasm doom 3 port](https://wasm.continuation-labs.com/d3demo/)). However it is not fully supported in the web, and has some limitations that make it hard to use practically. So for now It's recommended to stick to JS for most things.

## MIME Types

The web is not all webpages. Some things that you request over the web (images, videos, zip files etc.) use none of these languages. The way your browser determines how it should handle different responses is down to [MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). A MIME type is just a header (typically called `content-type`), and there is [a list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of approved MIME types recognized by the browser. These act similar to how extensions work on regular computers. For webpages there are typically these 3 MIME TYPES:

- `text/html`: Used for HTML files
- `text/javascript`: Used for javascript files
- `text/css`: Used for Cascading Style Sheet files

