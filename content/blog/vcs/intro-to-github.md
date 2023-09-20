---
title: "Intro to Github"
subtitle: "Taking git repositories online"
date: 2023-09-13T00:00:00-06:00
modified_date: ""
image: /img/blog/vcs/hero.jpg
authors: 
- Kieran Wood
tags:
  - theory
  - vcs
  - project-management
  - open-source
  - computer-science
  - terminology
  - software-engineering
  - legal
---

In the last article we covered git and using it. We talked a bit about remotes, which are services that allow you to use git over the internet. Github is one of these git provider platforms that can act as a remote. This means you can upload your repositories to Github. This makes it much easier to:

- Share your repositories with others
- Have 1 "source of truth" for people on a team to work off
- Download other people's projects
- Have a frontend in order to visually see git changes

Additionally we will talk about the social aspect of coding, and a bit of the legality behind creating and using software!

## Why github

Github isn't the only social git provider. There are several others including [gitlab](https://about.gitlab.com/) and [bitbucket](https://bitbucket.org/). The reason we cover github specifically in this article is because:

1. It's the most popular; While this doesn't mean it's the best it does mean it's the most likely for people to discover your projects, and most likely to have the projects you use hosted on it. It also integrates the best with many services because of it's popularity.
2. It has a ton of features; Outside of just hosting your repositories github has a ton of features that help you with your development. We will cover [a few later](#additional-github-features) in the article
3. It is the one I am most familiar with

## Using Github

To use github you will need an account, you can create one [here](https://github.com/signup). Once you have an account we will now walk through creating a repository, and downloading it locally:

1. Once we have created an account we can initialize a repository directly on github by hitting the plus (+) in the top corner and hitting *New Repository*
 
![](/img/blog/vcs/remote-init.png)

2. We now just have to fill out some fields to finish creating the repository
 
![](/img/blog/vcs/remote-init-2.png)

3. To get our code locally we can use `git clone <URL>`, so in my case I can use `git clone https://descent098/ezcv`

You're now all setup with a git repo that is tied to github. This means every time you push your code it will show up in the repository online! 

### Github desktop

If you do not like the command line you can also visually manage your git repositories using [github desktop](https://desktop.github.com/). This is a handy tool for managing your git repos, and comes with extra features on github. 

![](/img/blog/vcs/github-desktop.png)

### Additional github features

On top of allowing you an easy way to visualize your git repo and versions, there are also several other features such as:

- Seeing analytics for your code (lines added, lines removed etc.) 

![](/img/blog/vcs/node-contribs.png)

- Run [CI/CD](https://www.cisco.com/c/en/us/solutions/data-center/data-center-networking/what-is-ci-cd.html) and automations (through [github actions](https://docs.github.com/en/actions))

![](/img/blog/vcs/actions.png)


- [code analysis](https://github.blog/2020-09-30-code-scanning-is-now-available/) and [quick-jumping](https://github.blog/2023-05-08-github-code-search-is-generally-available/)
- [github pages](https://pages.github.com/)
- [Web based code editor](https://github.blog/2023-02-22-a-beginners-guide-to-learning-to-code-with-github-codespaces/)
- [Management](https://github.blog/2023-05-09-push-protection-is-generally-available-and-free-for-all-public-repositories/) and [planning](https://github.blog/2022-11-15-the-journey-of-your-work-has-never-been-clearer/) tools for multi-person projects
- etc.


You can also unlock additional features if you are a student with [github education](https://education.github.com/). While all these features are great I would recommend also checking out those other providers just to you familiarize yourself with several systems!


## What is open source?

Open source is an interesting movement that came out of early software development. It essentially holds up the principle that people are entitled to certain freedoms from their software, and in their software usage. These liberties vary, but generally are tied to the principles that you should have transparrency in your devices. You should be able to look up the source code to understand how any program running on your machine works, the same way that cars are required to have schematics for their internals so people can service them. Likewise you should be able to modify software you own to your hearts content.

Counterintuitively this approach is incredibly popular, especially with buisnesess. There are lots of benefits with this approach. One of the primary benefits is the ability to have a group of people come together and work on a project. Open source has enabled a ton of projects that run a huge portion of the software you use every day ([linux](https://github.com/torvalds/linux), [python](https://github.com/python/), [nodejs](https://nodejs.org/en), [electron](https://www.electronjs.org/) etc.). For example this website is built with [hugo](https://gohugo.io/), which is fully open source and it's code is available on [github](https://github.com/gohugoio/hugo). Keep in mind that **not everything that is open source is free**. People often use the phrase "free software" to describe open source. This is ["free as in freedom, not price"](https://ell.stackexchange.com/questions/2516/free-as-in-free-speech-not-as-in-free-beer#:~:text=When%20we%20call%20software%20%E2%80%9Cfree%2C%E2%80%9D%20we%20mean%20that%20it%20respects%20the%20users%27%20essential%20freedoms%3A%20the%20freedom%20to%20run%20it%2C%20to%20study%20and%20change%20it%2C%20and%20to%20redistribute%20copies%20with%20or%20without%20changes.%20This%20is%20a%20matter%20of%20freedom%2C%20not%20price%2C%20so%20think%20of%20%E2%80%9Cfree%20speech%2C%E2%80%9D%20not%20%E2%80%9Cfree%20beer.%E2%80%9D). 

### Common open source licenses (TODO)

MIT
APACHE

GPL

https://choosealicense.com/


### Contributing to open source projects (TODO)

- Hacktober
- pull request process