---
title: Updates to the Schulich ignite blog
subtitle: Introducing the new Blog and Showcase
date: 2023-01-30T00:00:00-06:00
modified_date: ""
image: /img/blog/writing.webp
authors: 
- Cole Pawliw
- Kieran Wood
tags:
  - updates
  - web
  - seo
---

## Introducing the new Blog and Showcase

Currently, this blog is being used to give updates about upcoming events for the club, and awards. Starting now, we're changing the primary purpose of this blog to be a place where anybody can come to learn about topics in computer science and topics around computer science that we don't teach during our sessions. This includes topics that are expanding directly on what we teach, or topics in fields we don't cover during any of our sessions! Our first post is now up, and is about [the dangers of cdn's](https://schulichignite.com/blog/dangers-of-cdns/). 

Alongside the new blog posts, we're planning to also have a project showcase. These showcases will be in the same place, and will be a way to see some of the cool things that can be done with the programming skills we teach! These showcases will be from both mentors and mentee's to show you what's possible, and help inspire more projects. The posts will show off what the project does, as well as some of interesting code and concepts that make it work!

Starting January 30th, there will be one new post every week either teaching a new conputer science topic, or showcasing an interesting project. So please check back here every week if you're interested in learning more about programming!

## How to contribute

If you are interested we would love to have more people contribute. If you have a project, or topic you want to write about we would love to have you help. If you don't have a topic, but are interested in getting experience writing we also have a list of curated topics to choose from!

The topics don't explicitly have to be about python, web development, or explicitly technical (can be about creating content for websites, or design etc.). So long as it's well written, and explains anything we don't cover we're happy to have it (AI/ML, embedded systems, OS etc.)!

If you are interested fill out [the form here](https://docs.google.com/forms/d/e/1FAIpQLSds_793iSMZRsRdHArcrfsNKYb6WXTDgaSkd2C8umjOL_E58Q/viewform?usp=sharing) and we will get back to you as soon as possible!

## Technical Details

In the spirit of covering computer science topics, for those of you interested we will also go into details about some of the features added to the blog. Anyone who is interested in creating their own blog can use these as a great starting point for feature ideas!

### How we create content

All of our source code is [open source](https://github.com/schulich-Ignite/website). [Hugo](https://gohugo.io/) with [markdown files](https://www.markdownguide.org/) are how we create the content that then gets converted to HTML pages, and then it is all hosted with [github pages](https://pages.github.com/). Our HTML is primarily styled using the css framework [bootstrap](https://getbootstrap.com/)!

### Taxonomies

Categorizing content can be hard. For us we chose to use [hugo taxonomies](https://gohugo.io/content-management/taxonomies/), there will be a post written about taxonomies in general down the road. Basically this system is what lets you click on the author name ([here](https://schulichignite.com/authors/kieran-wood/) is the one for Kieran Wood), or tags in an article ([here](https://schulichignite.com/tags/web/) is the one for web), and see all the posts that are associated with it. This makes it easier for people to find the content they want based on the tag, or the author and also allows us to create RSS feeds.

### RSS Feeds

RSS (Really Simple Syndication) is a system used to allow people to subscribe to content. In our case when you scroll to the bottom of pages you will see a *subscribe to rss feed* message with the rss icon <i class="bi bi-rss"></i> if you have an RSS feed aplication (like [feedly](https://feedly.com/)) you can then subscribe to the RSS feed and will recieve updates when a new post is made. 

The way this works is there will be a url to an [xml](https://en.wikipedia.org/wiki/XML) file. That file will contain the current content, and will tell your app where to check for new posts. An RSS feed reader will then check for new posts at where the xml file specifies.

We have 3 types of RSS feeds:

1. The whole blog; Can be found at the bottom of any blog post (and [here](https://schulichignite.com/blog/index.xml)), and the blog feed. This will update you when **any** new post is made

2. Tag; If you click on a tag it will take you to a feed for that tag ([here](https://schulichignite.com/tags/web/index.xml) is the one for web), you can then subscribe to posts made that have **that tag** using the URL at the bottom of the page.

3. Author; If you click on an author, you can then subscribe to posts made that have **that author** using the URL at the bottom of the page ([here](https://schulichignite.com/authors/kieran-wood/index.xml) is the one for [Kieran Wood](https://schulichignite.com/authors/kieran-wood/))

### Mermaid

Words are hard sometimes, so we often use graphs and diagrams. [mermaid](https://mermaid.js.org/#/) is a system that allows us to create diagrams in markdown files easily. This allows us to do a ton of diagrams, graphs, charts etc. So if we wanted to have a diagram of a user flow chart checking out the blog:

<pre class="mermaid">
flowchart LR
    A[Turn on PC] --> B{Do I wanna learn?}
    B -- Yes ----> C[Read ignite blog]
    B -- No ----> E[Netflix]
</pre>

Or a [user journey graph](https://mermaid.js.org/syntax/userJourney.html):

<pre class="mermaid">
journey
    title My day
    section Go to class
      Get ready: 3: Me
      Go to school: 2: Me
      Do classwork: 1: Me
    section Go home
      Go to computer: 2: Me
      Read ignite blog: 5: Me
</pre>


### Share links

Blogs are only important if people actually read them. When getting started it's hard to get traction. A great way to help with this is to provide a 1-click solution to share links to blog posts that are helpful. Luckily **most** major social media platforms have an API to make sharing content easy. 

For the most part they are a [query  parameter](https://www.branch.io/glossary/query-parameters/) where you just provide the URL, for example:

```html
https://www.facebook.com/sharer/sharer.php?u=<URL>
```

This will go to facebook, run `sharer.php` on facebook, with a variable `u` which will equal the URL you want to share (`<URL>`). You can find the actual URL's you need from sites like [share link generator](https://www.sharelinkgenerator.com/), and then just programatically insert the current URL into them (make sure to [escape/encode it](https://www.urlencoder.org/#:~:text=URL%2Dencoding%2C%20also,in%20HTTP%20requests.))

### Sitemaps

Search engines need a way to find your site. They have lots of methods now to look for new sites, but there are many times this doesn't work well, or takes a very long time. The same is true for new content on your site. So what you can do is give google a map that tells it where all the pages of your site are (called a sitemap). This is an [xml](https://en.wikipedia.org/wiki/XML) file that tells search engines where to go. You can find ours at [https://schulichignite.com/sitemap.xml](https://schulichignite.com/sitemap.xml). It's also worth looking at [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) if you **don't** want search engines to find certain pages.

### OpenGraph

Last but not least if we're going to get people to share our content we want to make sure the previews look good. [opengraph](https://ogp.me/) is a protocol that let's you define how your pages look when you share them!

This includes what image pops up, the title, the description etc.
