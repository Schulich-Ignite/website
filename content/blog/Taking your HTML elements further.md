---
title: Taking your HTML elements further
subtitle: Using attributes more effectively
date: 2023-01-11T12:30:00-06:00
modified_date: ""
image: /img/blog/ferenc-almasi-eypcldxhvb0-unsplash.jpg
author:
  name: Kieran Wood
  email: kieran@canadiancoding.ca
  linkedin: kieran-wood
  github: descent098
tags:
  - scorch
  - web
---

## What is an attribute

Attributes are added to HTML elements to provide additional functionality. These are specified next to an opening tag, after the tagname. For example the `href` attribute is used on anchor tags to specify the URL for the link:

```html
<a href="https://schulichignite.com">Click here</a>
```

Many attributes will take an *argument* (some sort of data), but some just need to be specified inline to be set to true. For example:

```html
<a href="https://schulichignite.com" visible>Click here</a>
```

Means the anchor tag has a visible attribute set to True. For the most part people use attributes for very basic things (anchor links, setting target, width & height etc.), but there are more advanced features attributes can be used for.

## On-event Binding

It is often the case on websites that you will want a function to run in javascript when a certain event happens. For example you might want to run a function to add an item to the cart when someone **clicks** a button. Typically this is done in javascript, with something like:

`index.html`

```html
<button id="add">Add to Cart</button>
```

`index.js`

```js
function addToCart(){
    console.log("Added to cart!")
}

btn = document.getElementById("add") // Find the button to add to cart
// Handle multiple event types
events = ['click', 'change']
events.forEach(
    (event) => {
    btn.addEventListener(event, addToCart)
});
```

Instead of handling the binding of the function in Javascript, you can do it directly in the HTML. Simply use "on" and then the same [event type](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing) (not all of them are supported). So for a click you would do `onclick`, and then set the attribute equal to the function call you want to make. So the previous example would instead be:

`index.html`

```html
<button id="add" onclick="addToCart()">Add to Cart</button>
```

`index.js`

```js
function addToCart(){
    console.log("Added to cart!")
}
```

There are some potential **benefits** to this:

- Some people find this much easier to read
- You have less lines of javascript 
- All event listeners are available at a glance in the HTML, whereas in javascript they can be setup anywhere
- If you **only** have access to the HTML you can change/add listeners

There are also some potential **disadvantages** to doing this:

- You have to search different files to find where your javascript is running from
- If you have multiple events it makes your HTML much longer and harder to read
- If you **only** have access to the javascript you can't change the listener

## Aria and Accessibility

In 2015 there was an estimated 253 million people with visual impairment ([source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5820628/#:~:text=In%202015%2C%20there%20were%20an%20estimated%20253%20million%20people%20with%20visual%20impairment%20worldwide.)). Most of the internet is not built well to manage these users. So most of them turn to devices like [screen readers](https://en.wikipedia.org/wiki/Screen_reader) (doing some napkin math about [4.4 million](https://ux.stackexchange.com/questions/57340/percentage-of-screen-readers-users-in-usa#:~:text=To%20answer%20the%20askers%20question%2C%20it%20looks,are%20using%20screen%20readers%20in%20the%20USA) in the US). These devices are great, but often websites [do not make it easy](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) for screen readers to do their job.

[ARIA (Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) is [a specification](https://www.w3.org/TR/html-aria/) for the web that let's you include information for screen readers to help people navigate your site. There are tons of problems it helps solve, but I will talk about 2 common ones, images, and dynamic buttons.

### Images

Images are obviously a challenged for the visually impaired. There are 2 seperate systems to help aria, and alt. By default you should always include an alt tag on an image, it's what screen readers, search engine bots, people with network issues and people who have disabled images will see instead of the image. It looks like this:

```html
<img src="./img/logos/ignite.svg" alt="Schulich ignite logo">
```

There are some problems with this though. Mostly that describing the image doesn't always tell you **why** it's there. For example let's say someone has the image visible in a navigation bar and it takes you to the homepage when you click it. The alt tag helps you understand what it is, but **not what it does**. For that you can use an aria [link role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role):

```html
<img src="./img/logos/ignite.svg" alt="Schulich ignite logo" role="link">
```

### Buttons


Sometimes you want cool looking buttons, to do this you might not include any text, and make the button an image:

```html
<style>
button{
    background: url(https://upload.wikimedia.org/wikipedia/commons/b/bc/Font_Awesome_5_solid_shopping-cart.svg);
    background-size: cover;
    height: 320px;
    width: 350px;
}
</style>

<button></button>
```

This may look cool, but to a screen reader it has no idea what's happening. It just knows there's a button. You can tell screen readers what the button does with an [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label):

```html
<style>
button{
    background: url(https://upload.wikimedia.org/wikipedia/commons/b/bc/Font_Awesome_5_solid_shopping-cart.svg);
    background-size: cover;
    height: 320px;
    width: 350px;
}
</style>

<button aria-label="Add to Cart"></button>
```


### Avoid aria

Aria should not be your first solution. The examples above it's likely better to find a solution that makes more sense without aria. However when you are forced into situations like the ones above make sure you make it easier for the visually impaired!

## ID based navigation

ID's are typically used on elements to make it easier to find them with javascript. This is because ID's have to be unique for every element. So a single call to `document.getElementById()` will return **only 1 element**. This is handy in javascript, but it can also be handy on a site in general.

Because each ID is unique you can also use them to navigate on a page. So for example if you have a tutorial you can put an ID on each section of the tutorial, and then link people to those sections. For example:

```html
<style>
h2{
    height:100vh;
}
</style>

<h2 id="how-to-code">How to code</h2>

<h2 id="how-to-code-well">How to code well</h2>

<h2 id="how-to-code-poorly">How to write javascript</h2>
```

We can then link to each section with `#id` in an anchor tag:

```html
<style>
h2{
    height:100vh;
}
</style>

<h2>Table of contents</h2>
<ul>
    <li>
        <a href="how-to-code">How to code</a>
    </li>
    <li>
        <a href="how-to-code-well">How to code well</a>
    </li>
    <li>
        <a href="how-to-code-poorly">How to write javascript</a>
    </li>
</ul>

<h2 id="how-to-code">How to code</h2>

<h2 id="how-to-code-well">How to code well</h2>

<h2 id="how-to-code-poorly">How to write javascript</h2>
```

You can also make this transition smoother by adding `scroll-behaviour:smooth` on all elements:

```html
<style>
    h2{
        height:100vh;
    }
    *{
        scroll-behavior: smooth;
    }
</style>
<h3>Table of contents</h3>
<ul>
    <li>
        <a href="#how-to-code">How to code</a>
    </li>
    <li>
        <a href="#how-to-code-well">How to code well</a>
    </li>
    <li>
        <a href="#how-to-code-poorly">How to write javascript</a>
    </li>
</ul>

<h2 id="how-to-code">How to code</h2>

<h2 id="how-to-code-well">How to code well</h2>

<h2 id="how-to-code-poorly">How to write javascript</h2>
```


## Hidden

Hidden does exactly what you expect, it hides things. It opperates similarly to `display:none` in CSS. You can then toggle the attribute on and off to show/hide content

```html
<p>html <span hidden>Hypertext Markup Language</span> is great!</p>
```

would show up as `html is great!`

hidden also hides content from [screen readers](https://en.wikipedia.org/wiki/Screen_reader). This can be a positive or a negative, but it's something to keep in mind.

## Data storage, input, validation and modification

The rest of the attributes are used for everything to do with data. HTML may not be a programming language, but some data processing is still done client side, and these attributes help with data storage, input, validation or modification.

### Data values

Sometimes you want to put some extra data in your HTML. For example you might want to filter blog posts by languages, and want to specify the blog post language in an HTML attribute to make it easier to find in javascript. You might do something like this:

```html
<div id="lc" class="blog-post" lang="python">
    <h3>How list comprehensions work in python</h3>
    <a href="/blog/list-comprehensions">Read more</a>
</div>
```

Then in javascript you can check with `getAttribute()` if `lang` exists, good to go... right?

The web is constantly evolving, so using regular attributes can cause problems. What if `lang` down the road is used to specify the **human language** an element's content is in, or used to dynamically allow you to run code in the browser etc. In any of these cases you will need to update your HTML. So there was a syntax added to the HTML specification to allow you to add in these data-storing attributes.

What you do is add `data` to the beginning of the attribute. So for our example we would use:

```html
<div id="lc" class="blog-post" data-lang="python">
    <h3>How list comprehensions work in python</h3>
    <a href="/blog/list-comprehensions">Read more</a>
</div>
```

From here we can then access the variable with the normal `getAttribute()` or `element.dataset`:

```js
post = document.getElementById("lc")

post.getAttribute("data-lang")

post.dataset.lang
```

We now never have to worry about collisions with the official specifications, and can get the same functionality!


### Form attributes

These last few are used to help the user experience when filling out forms better. For all of these the elements must have a [name attribute](https://www.w3schools.com/tags/att_name.asp) (and/or id), and be part of a form element:


|Attribtue | Description | Elements available on | 
|----------|-------------|-----------------------|
|[autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/attributes/autocomplete)| let the browser provide autocomplete suggestions from previous form submissions |`input`, `select` and `textarea`|
|[spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck)| Provides user with spellcheck on text. Please note there are potential [security implications](https://www.otto-js.com/news/article/chrome-and-edge-enhanced-spellcheck-features-expose-pii-even-your-passwords)  | Any/[global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) |
|[accept](https://developer.mozilla.org/en-US/docs/Web/HTML/attributes/accept) | Allows you to specify extensions, or [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers) that are allowed to be uploaded  | `input` with type attribute set to file |
| [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) | Allows you to specify which keyboard type to use, text, numbers etc. (full list [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode#values)). Useful in situations where you only want certain types of input | Any/[global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) | 

### Content editable

<div contenteditable>
Content editable allows users to modify the <code>innerText</code> of an element in-browser. This is really interesting because it allows for natural interactions between people and the content they're consuming.

You could use this for all sorts of stuff, like letting people try out a HTML template in their browser, or write a PDF straight in the browser! To do this just add the <code>contenteditable</code> attribute to <strong>any</strong> tag. Keep in mind any child elements are also editable. So for example:
</div>

```html
<h1>Edit the section below!</h1>
<div contenteditable>
    <h1>My name is, ___ </h1>
    <p> My hobbies are:</p>
    <ul>
        <li>Enter hobbies here</li>
    </ul>
</div>
```

<div contenteditable>
This entire written portion (not the code snippets) of the article has <code>contenteditable</code> enabled, so feel free to modify and test it out!


<h5> Bonus</h5>

One other cool thing you can do with this is combine it with a style</code> tag inside a <code>body</code> that is set to <code>display:block</code>:
</div>

```html
<body>
    <h1>Change the CSS!</h1>
    <style contenteditable style="display:block;">
        h1{
            font-size: 2em;
        }

        body > style{
            background: #333;
            color: #f0f0f0;
            padding: 2em;
            white-space: pre; /*respect tabs and newlines*/
        }
    </style>
    <h2>Edit the section below!</h2>
    <div>
        <h2>My name is Kieran</h2>
        <p> My hobbies are:</p>
        <ul>
            <li>Enter hobbies here</li>
        </ul>
    </div>
</body>
```