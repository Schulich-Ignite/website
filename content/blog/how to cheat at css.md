---
title: How to cheat at CSS
subtitle: Making design easier
date: 2023-01-11T12:30:00-06:00
author:
    name: Kieran Wood
    email: kieran@canadiancoding.ca
    linkedin: kieran-wood
    github: descent098
tags:
 - scorch
 - web
 - css
---

CSS is the language of design on the web. It's used to control how everything looks. The styling of this text, how the article metadata above this looks, everything. It's what helps define your webpages, and make them look nice... It's also hard to do well

## Traditional Approach

The traditional aproach you might take is to start from scratch, and begin building your CSS incrementally. You start with the outline of some HTML, setup some of the basics, and then start getting specific. We cover how to do this in the [ignite scorch](https://schulichignite.com/scorch/) course. The problem is that this way takes a long time, and a lot of code (as of writing the CSS on this page is ~9300 lines). There's also a ton of design and technical things to worry about, like:

- Mobile responsiveness
- Typography
- Accessibility
- Colour theory
- Whitespacing
- etc.


Not only that, but you can run into the [blank canvas problem](https://www.themodernnomad.com/blank-canvas-paralysis/) a lot while designing from scratch. Don't get me wrong, it's something every developer **should** know how to do, but not something you should **have** to do all the time. For the rest of this article, we're going to talk about tools that will help you to build sites faster, more reliably, and with less headaches!


## CSS Frameworks

CSS frameworks are a "batteries included" way to develop a site. For the most part you just plug them onto your site, and they handle lots of the hard design problems for you. The only cost is that it's often hard to change the decisions they make for you down the road. They're great for people who don't want to do design, but still want nice websites!

There are a few types of CSS frameworks.

### Component based

Component based frameworks intend to setup "components", essentially there is pre-built CSS for common things you want to implement. For example there may be a `image-round` class that rounds images, or an `accordion` class that let's you implement something fancier, like this:

<div class="card col-md-4">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1589101545496-c5dcd131213f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1358&q=80" alt="Pelican">
  <div class="card-body">
    <h5 class="card-title">Pelican</h5>
    <p class="card-text">What a sick bird</p>
  </div>
</div>

```html
<div class="card col-md-4">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1589101545496-c5dcd131213f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="Pelican">
  <div class="card-body">
    <h5 class="card-title">Pelican</h5>
    <p class="card-text">What a sick bird</p>
  </div>
</div>
```

#### Bootstrap

[Bootstrap](https://getbootstrap.com/) is what is used to build the ignite site. It's a very common component library that is used to build millions of sites. It has over 20 built in components, and can be included with [2 lines of HTML (1 link tag for CSS, 1 script for JS)](https://getbootstrap.com/docs/5.3/getting-started/introduction/#:~:text=%3Clink%20href,%3E%3C/script%3E).

##### Themes, Plugins and Applications

Because of it's popularity, there are also a few additional systems built around bootstrap. For example there is a large library of themes from providers like [Bootswatch](https://bootswatch.com/), that will let you build with regular bootstrap, but have a completely different feel.

On top of that there are tons of great IDE plugins/extensions built around bootstrap. One of my favourites is the [snippet plugin](https://marketplace.visualstudio.com/items?itemName=AnbuselvanRocky.bootstrap5-vscode), which lets you type short codes to insert common bootstrap components.

Additionally there are full featured VIDE's (Visual Integrated Development Environments) that will let you build out entire sites visually for bootstrap. The most popular is [bootstrap studio](https://bootstrapstudio.io/) which you can get a free license for with the [github student pack](https://education.github.com/pack)

#### Bulma

[Bulma](https://bulma.io/) is an alternative component library to bootstrap. It's a bit smaller (about 10 components), but it focuses highly on readability, short class names and simplicity. For example here is a [tabs component](https://bulma.io/documentation/components/tabs/) in bulma:

```html
<div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
```

#### Spectre

[Spectre](https://picturepan2.github.io/spectre) is a framework that has a few advantages over bootstrap. But the most interesting is some of the stuff they're doing in their [experiemental section](https://picturepan2.github.io/spectre/experimentals)

### Boilerplate

There are two other CSS frameworks that do the bare minimum to help you get started, and that's it. They're designed to be fast and simple, and are a great way to start on something you **mostly** wanna design yourself, but will get the basics out of the way.

#### Skeleton

[Skeleton](http://getskeleton.com/) is an incredibly small (~400 lines), library that gives you a responsive grid system, typography, buttons, forms, code, tables, and utility classes. Everything else is up to you!

#### Miligram

[Miligram](https://milligram.io/) is a 2kb, it handles the same sort of stuff as skeleton, but includes a few extra bells and whistles (like [quotes](https://milligram.io/blockquotes.html)). It's a great starting point for a design.


### Extensions

Extensions simply aim to extend CSS. You are still writing all the stylesheets yourself, but they serve to just make it easier to do common tasks.

#### SASS/SCSS

[SASS(Syntatically Awesome Style Sheets)/SCSS (sassy CSS)](https://sass-lang.com/) are an example of CSS extensions. They are by far the most popular, and many systems (including bootstrap) offer SCSS on top of traditional CSS. Both are compiled, meaning you have to run some code to convert them to CSS files before you can use them. You can't just use `.scss` or `.sass` files in place of `.css` files.

SASS and SCSS are different, here is an article explaining the [differences here](https://www.geeksforgeeks.org/what-is-the-difference-between-scss-and-sass/). The basics are that SCSS can use existing CSS, and just extends CSS normally, whereas SASS is a whole new language. You can easily convert between the two using [online converters](https://codebeautify.org/sass-to-css-converter). The big advantage with SCSS is it's much more concise, arguably easier to read, and makes variables way easier. Here is an example of complicated nesting being easier with SCSS:

```scss
*{
    box-sizing: border-box;
    margin:0;
    padding: 0;
}

.card{
    /*Style the card class and all sub-components*/
    border-radius: 50%;
    background-color: #ccc;
    
    .title{ /* Any title class element inside the card*/
        font-family: serif;
        font-size: 1.5em;
    }
    
    p{ /* Any paragraph tag inside the card*/
        font-size:1.2em;
    }
    .body{ /* Any body class element inside the card*/
        font-size:1.1em;
        
        figure{ /* Any figure element inside the body, inside a card*/
            width: 25%;
            border-radius: 1% 5%;
        }
        
        
    }
}

article{
    /*Style the article tag and all sub-components*/
    background-color: #141414;
    color: white;
    
    figure{
        /*Any figure  element inside an article*/
        border-radius: 5% 8%;
    }
}
```

Will then expand the nested styles into this css:

```css
* {
	 box-sizing: border-box;
	 margin: 0;
	 padding: 0;
}
 .card {
	/*Style the card class and all sub-components*/
	 border-radius: 50%;
	 background-color: #ccc;
}
 .card .title {
	/* Any title class element inside the card*/
	 font-family: serif;
	 font-size: 1.5em;
}
 .card p {
	/* Any paragraph tag inside the card*/
	 font-size: 1.2em;
}
 .card .body {
	/* Any body class element inside the card*/
	 font-size: 1.1em;
}
 .card .body figure {
	/* Any figure element inside the body, inside a card*/
	 width: 25%;
	 border-radius: 1% 5%;
}
 article {
	/*Style the article tag and all sub-components*/
	 background-color: #141414;
	 color: white;
}
 article figure {
	/*Any figure element inside an article*/
	 border-radius: 5% 8%;
}
```

#### Less

[Less](https://lesscss.org/) is not compiled, instead you can just include the javascript file in the same page as your less files. It's very similar in advantages to SCSS, but beter in cases where you can't compile ahead of time. It also allows you to modify your configurations per-page, since the configuration is done in javascript. The exact same example as the SCSS example will work in Less as well.

### Utility Classes

#### Tailwind

- [TailwindUI](https://tailwindui.com/) 
- [DaisyUI](https://daisyui.com/) 

### React

what is react?

what is a react UI library

#### Material UI

- [Material UI](https://mui.com/)


#### Mantine UI
- [Mantine UI](https://mantine.dev/)

#### React alternatives

There are a few alternatives to react you can check out like:

- [Svelte](https://svelte.dev/) (and [svelte kit](https://kit.svelte.dev/))
- [Solid JS](https://www.solidjs.com/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Mithril JS](https://mithril.js.org/)

## CSS Generators


- https://webcode.tools/generators/css
- [CSS Gradient Generator](https://cssgradient.io/)
- [Grainy CSS Gradients](https://grainy-gradients.vercel.app/) (from https://css-tricks.com/grainy-gradients/)

### Design Trends

- [Glassmorphism](https://ui.glass/generator/) ([alternate](https://css.glass/))
- [Neumorphism](https://neumorphic.design/)

### Backgrounds
- https://coolbackgrounds.io/
- https://vincentgarreau.com/particles.js
- https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/
- https://doodad.dev/pattern-generator/
- https://codepen.io/goodkatz/pen/LYPGxQz
- https://www.app.websitebackgroundmaker.com/get-started
- https://heropatterns.com/
- https://app.haikei.app/
- https://superdesigner.co/tools/backgrounds?type=peak
- https://www.magicpattern.design/tools/css-backgrounds
- https://bgjar.com/
