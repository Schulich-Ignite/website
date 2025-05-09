# Schulich Ignite Website

## Table of contents

- [Schulich Ignite Website](#schulich-ignite-website)
  - [Table of contents](#table-of-contents)
  - [How to add/edit content](#how-to-addedit-content)
    - [Dates \& Times](#dates--times)
    - [Site Variables](#site-variables)
    - [Homepage](#homepage)
    - [Blog](#blog)
      - [Fields](#fields)
      - [Note about diagrams](#note-about-diagrams)
    - [Project Showcase](#project-showcase)
      - [Fields](#fields-1)
    - [Beginner / Flare / IndigeSteam](#beginner--flare--indigesteam)
    - [Gallery](#gallery)
    - [Mission](#mission)
    - [Team](#team)
    - [Sponsors](#sponsors)
    - [Contact](#contact)
    - [FAQ's](#faqs)
  - [Development guide](#development-guide)
    - [Infastructure](#infastructure)
    - [Running locally](#running-locally)
      - [Running netlify locally](#running-netlify-locally)
    - [Per-page breakdown](#per-page-breakdown)
      - [Index/Home](#indexhome)
      - [Sessions](#sessions)
      - [Blog](#blog-1)
        - [Blog authors \& tags](#blog-authors--tags)
      - [Project Showcase](#project-showcase-1)
      - [Definitions](#definitions)
      - [Contact](#contact-1)
      - [Building on a Schedule](#building-on-a-schedule)
        - [How it works](#how-it-works)
      - [FAQ's](#faqs-1)

## How to add/edit content

### Dates & Times

The Date field in any content follows a consistent format. This format looks like ```2020-07-08T18:30:00-06:00``` which correlates to Wed Jul 8 15:04 MDT. So the format is ```YYYY-MM-DDTHH:MM:SS-TZ:TZ``` so year followed by month, then day, after that there is a "T" which indicates time, then it goes ```hours:minuets:seconds``` in 24 hour format followed by ```-TZ:TZ``` which is the timezone. In our case it's always ```-06:00```.

### Site Variables

Site variables are used for a large portion of the content. It essentially is the global state for the site.

To edit any of these go to ```config.toml``` in the root directory and modify the variable you want to change. If you haven't used TOML, [here is a primer](https://learnxinyminutes.com/docs/toml/).

Here is a list of the current site variables:
- email: The primary schulich ignite email
- instagram: The schulich ignite instagram link
- facebook: the link to the schulich ignite facebook page
- youtube: The link to the official Schulich ignite YouTube Channel
- linkedin: The link to the Schulich iPygnite LinkedIn Company
- discord: The link to join the discord server
- tiktok: The link to the Schulich Ignite TikTok account
- status: This controls what to display on the header on the front page - it has 3 possible values: 
    - ```status = "closed"``` for when there are no current dates but you have a mailing list
    - ```status = "signup"``` for when there are active sign up links
    - ```status = "live"``` for when the workshops are currently active (this is the default value)
- current_startDate: The start of the first workshop for the current semester
- current_endDate: The end of the last workshop for the current semester
- summaryLength: The number of characters to include in the summary for blog posts, sessions, etc.
- emailListSignup: The link to the mailing list form
- mentorSignUp: The link to the mentor application form
- menteeSignUp: The link to the mentee singup form
- recruitVideo: The link to the recruitment video on the home page
- ignitePoints: The link to the Ignite Points spreadsheet
- sparkDocs: The link to the Spark documentation
- submitBugBusters: The link to the submit form for Bug Busters exercises/projects
- submitPythonicLava: The link to the submit form for Pythonic Lava exercises/projects

### Homepage

The homepage is organized in to four main sections which can be controlled as follows:
1. **Section 1 -** Before Video\
    To edit the contents, you must edit the ```content/home/before-video.md``` which has the following format:
    ```markdown
    ---
        # no parameters
    ---
    {{< row >}}
      {{%3-column%}}
    
      {{< icon >}}icon for column 1{{</ icon>}}
      #### title of column 1
      info for column 1
    
      {{%/3-column%}}
      {{%3-column%}}
    
      {{< icon >}}icon for column 2{{</ icon>}}
      #### title of column 2
      info for column 2
    
      {{%/3-column%}}
      {{%3-column%}}
    
      {{< icon >}}icon for column 3{{</ icon>}}
      #### title of column 3
      info for column 3
    
      {{%/3-column%}}
    {{< /row >}}
    ```
    
    - For each column, you need to provide:
        - an icon name from **iconify** (for example, ```twemoji:man-student``` displays a male student),
            UPDATE: The icons have been changed to images which are stored in static/img/homepage
        - the title (which will be bolded),
        - and the description (which will be displayed below the title). 
    - Currently designed to best display **three** columns, although more are supported - each row will contain three columns.
    - Note that you must control the columns using the syntax provided above. 
        - This formatting is controlled via the files in ```layouts/shortcodes```
    
2. **Section 2 -** Recruitment video\
    You can change the YouTube video that is linked by changing the ```recruitVideo``` parameter in ```content/_index.md```.
    
3. **Section 3 -** After Video\
    To edit the content, you must edit the ```content/home/after-video.md``` which has the following format:
    ```markdown
    ---
        # no parameters
    ---
    {{< row >}}
      {{%2-column-icon%}} icon to display to the left {{%/2-column-icon%}}
      {{%2-column-text%}}
      Text to display to the right of the icon
      {{%/2-column-text%}}
    {{< /row >}}
    
    <br>
    
    {{< row >}}
      {{%3-column-orange%}}
    
      ### Title of column 1
      Content of column 1
    
      {{%/3-column-orange%}}
      {{%3-column-orange%}}
    
      ### Title of column 2
      Content of column 2
    
      {{%/3-column-orange%}}
      {{%3-column-orange%}}
    
      ### Title of column 3
      Content of column 3
    
      {{%/3-column-orange%}}
    {{< /row >}}
    
    ```
    - Note that you must control the columns using the syntax provided above. 
        - This formatting is controlled via the files in ```layouts/shortcodes```
    
4. **Section 4 -** Refer to [Sponsors](#sponsors).

### Blog

New blog posts can be added in ```content/blog``` and existing blog posts can be edited at ```content/blog```. The format is:

```markdown
---
title: "This is the blog post title"
date: 2020-07-08T15:04:38-07:00
image: "/img/ignite-logo.svg"
excludeTOC: False
authors: [Kieran Wood]
video: XoQvbDROucQ
tags:
 - scorch
 - web
 - css
---

Enter blog post here, note the first 20 words will be used in the feed. So make sure to use them wisely, or else your content will be cut off and no one will be able to read it.
```

#### Fields
- Image: The image field is optional, you can specify an image to display for the news story. If you choose not to then just delete the image metadata, and by default the ignite logo will appear for that blog post.
- Date: Note that the datetime format is YYYY-MM-DDTHH:MM:SSTZ. Where TZ is timezone and the T splits the date from the time.
- Authors: a list of the authors for the content (see `/content/authors` for list of names), the value put here will be [urlized](https://gohugo.io/functions/urlize/)
- Tags: Optional, is a list of tags
- video: Optional, A youtube video id(for example https://www.youtube.com/watch?v=XoQvbDROucQ would be everything after `watch?v=` or `XoQvbDROucQ` in this case)
- excludeTOC: A variable on whether to include the table of contents or not, set to true on short posts that don't have headings in the markdown content

#### Note about diagrams

To use diagrams in blog posts you must use [mermaid](https://mermaid.js.org/#/) to do this you would use something like

```html
<pre class="mermaid">
graph TD
    A[fa:fa-user User] -->|1. Request file| B(https://ignite-cdn.com/file.js)
    B --> C[fa:fa-user User]
    C -->|2. Browser takes the TEXT, but doesn't RUN the code| D{hashing algorithm}
    D -->|Output hash matches integrity| E[fa:fa-user User: runs code]
    D -->|Output hash doesn't match| F[fa:fa-user User: retry or throw error]
</pre>
```

which results in:

```mermaid
graph TD
    A[fa:fa-user User] -->|1. Request file| B(https://ignite-cdn.com/file.js)
    B --> C[fa:fa-user User]
    C -->|2. Browser takes the TEXT, but doesn't RUN the code| D{hashing algorithm}
    D -->|Output hash matches integrity| E[fa:fa-user User: runs code]
    D -->|Output hash doesn't match| F[fa:fa-user User: retry or throw error]
```
(if you can't see the graph head [here](https://mermaid.live/edit#pako:eNp1kc1OwzAQhF9l5QsgNangmAMSbcoRpNJKSKQHE29i09oO67VQ1fTdcRL1wo8Plq2Z_TRjn0TtFYpCtCQ7DZuycpDWw1sji0ZmMSDBNm07yLL7_jaHNX5GDAyNOWAPi2vN3IViPjetM4xZrVxeezsf5Pwj3Ey4xTANy1_QSV2O7LscFuS_Bo3lHgOwRtisXjczeI8MymNwVwzr7dOoDLF7KE9aBm1cC_LQejKs7XmCliP0OXKXhgcTWMm1TlzjGNtkPfaw-pmoAIoujPDdf5xLkpHXw-MfDGQ6gk9FdGoESORpJ2bCIllpVHrt0wCvRCpisRJFOipJ-0pU7px8sVOScaUMexIFU8SZkJH9y9HVl_vkKY1MH2dFCnAIeP4Gh6ObgA))

Inline in your markdown (you cannot use standard code fences)

### Project Showcase

New projects can be added in ```content/projects``` and existing projects can be edited at ```content/projects```. The format is:

```markdown
---
title: "This is the project title"
date: 2020-07-08T15:04:38-07:00
image: "/img/projects/image-name.png"
image_alt: Image alt text
authors:
- Chantae Ho
video: XoQvbDROucQ
tags:
  - python
link: https://trinket.io/python/6b57e7810f
difficulty: Beginner
---

Enter project post content here.
```

#### Fields
- Date: Required. Note that the datetime format is YYYY-MM-DDTHH:MM:SSTZ. Where TZ is timezone and the T splits the date from the time.
- Image: Required. Specify an image to display for the project. If you do not choose an image, your project will not appear in the /projects/ page. 
- Image_alt: Optional, but recommended. Alt text for the image, to be read by screen readers. This can be 1-2 sentences long.
- Authors: Optional, a list of the authors for the content
- Video: Optional, A youtube video id (for example https://www.youtube.com/watch?v=XoQvbDROucQ would be everything after `watch?v=` or `XoQvbDROucQ` in this case)
- Tags: Optional, is a list of tags
- Link: Optional, is a link to the project source code. This link should be publically accessible. The link should the entire url, including the https:// part. 
- Difficulty: Required. This should be Beginner/Flare/Scorch, depending on the skill level required to complete the project. 

### Beginner / Flare / IndigeSteam

The beginner, flare and indigesteam session views pull any sessions that exist. The content can be found in ```content/beginner```, ```content/flare```, and ```content/indigesteam``` depending on the targetted session. The format for a session, regardless of beginner, indigesteam or flare, is:

```markdown
---
title: "Name of what the topic is"
number: 0
date: 2020-07-08T18:30:00-06:00
slides: "Google Slides link"
recording: "YouTube link to recording of lecture"
ready: false
---
 
Any additional overview content you want to mention
```

The `ready` variable is used to specify when a session is ready for the public (published & draft were reserved). When false it will not show up in the feed, when true they will - however, the session will only appear once the current date exceeds the `date` parameter. This allows for early, automatic publishing.

Both the slides link and the recording link are optional.

### Gallery

Any images under the folder `static/img/gallery` will be displayed on the gallery page.

### Mission

Everything that has to do with this page is under `content/mission`.  
The contents of this page can be changed in the `_index.md` file. 

### Team

Everything that has to do with this page is under `content/team`.  
The contents of this page can be changed in the `_index.md` file. The markdown content of this file will be used for the text that appears before the team members are listed.

Every file (excluding `_index.md`) inside the this folder will have team member card created for it. To add/edit team members, either add a new file here, or edit one. The format for the file is as follows:

```markdown
---
name: "Team member name"
role: "Team member role"
team: "exec" or "jr exec" or "none"
image: "/img/path-to-image.png"
email: "testemail@ucalgary.ca"
linkedin: "URL to LinkedIn"
---

description of the team member goes here
```

The `team` field controls which area the member will appear in: if `"exec"`, they are on the executive team; if `"jr exec"`, they are on the junior executive team; if `"none"`, they will be listed under "Other Contributors." The email and LinkedIn fields are optional regardless of team; however, if team is `"none"`, only LinkedIn applies - email is not supported when team is `"none"`.

### Sponsors

Everything that has to do with this page is under `content/sponsors`.  
The title and sub-title can be changed in the `_index.md` file.  

Every file (excluding `_index.md`) inside the this folder will have card created for it. To add/edit sponsors, either add a new file here, or edit one. The format for the file is as follows:

```markdown
---
name: "Name of the sponsor"
image: "http://placekitten.com/g/300/300"
---

description about the sponsor goes here
```

### Contact 

The majority of the content is hardcoded to pull from the site variables. For example the email, instagram and all other social links are defined in the site variables. 

The primary exception are the FAQ's, see below for details.

### FAQ's

The FAQ's found on the contact page can be created/edited in ```content/faq```, the default template is:

```markdown
---
question: "How Do I Install Processing?"
---

Your answer goes here :)
```

## Development guide

Below is all the information you will need to maintain/update any **CODE** for the site. 
See above for how to handle content.

### Infastructure

- CMS/Static Site Generator: [Hugo](https://gohugo.io/) 
- Hosting: [GitHub Pages](https://pages.github.com/)
- CDN/DNS: [Cloudflare](https://www.cloudflare.com/en-ca/)
- Domain Name Registrar: [IONOS](https://www.ionos.ca/)

Login details can be found in the usual place ;).

### Running locally

1. [Download & install Hugo](https://gohugo.io/getting-started/installing/)
2. Make any changes
3. Run ```hugo serve -D``` and then navigate to [http://localhost:1313/](http://localhost:1313/)

#### Running netlify locally

There is a built in integration with netlify CMS for editing blog posts. To set it up and use it:

1. [Download & install Hugo](https://gohugo.io/getting-started/installing/)
2. [Download and install nodeJS/NPM]
3. Open a terminal in the root folder (where `config.toml` is) the netlify proxy `npx netlify-cms-proxy-server`
4. Open another terminal in the root folder (where `config.toml` is) and run `hugo serve`
5. Head to http://localhost:1313/admin (or whatever port the terminal with `hugo serve` running says) in your browser

### Per-page breakdown

#### Index/Home

The homepage is organized in to four main sections which can be controlled from ```content/_index.md``` as follows:
1. Section 1 currently uses the content from ```content/home/after-video.md```.
    - Note that this content is formatted using shortcodes from ```layouts/shortcodes/``` to control the columns and rows.
2. Section 2 links to the recruitment video
    - You can change the YouTube video that is linked by changing the ```recruitVideo``` parameter in ```content/_index.md```.
3. Section 3 currently uses the content from ```content/home/before-video.md```.
    - Note that this content is formatted using shortcodes from ```layouts/shortcodes/``` to control the columns and rows.
4. Section 4 pulls from ```layouts/partials/sponsor-feed.html```

#### Sessions

The content for sessions can be found in ```content/sessions```. There are a number of layouts for the sessions system:
1. The single layout; This is what shows up when you navigate to an individual session (```schulichignite.com/sessions/<esession name>```), and can be found in ```layouts/session/single.html```
2. The list layout; This is a dedicated page that shows **ALL** sessions. It is what shows up on ```schulichignite.com/sessions``` and the layout can be found in ```layouts/sessions/list.html```. The description for each session is pulled from `/content/<session>/_index.md` where `<session>` is the session name (i.e. flare)
3. The Feed; This is the feed that pulls in the sessions lists. It can be found in various places on the site and is typically invoked in a template using ```{{ partial "sessions-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/sessions-feed.html```.

#### Blog

The content for the blog can be found in ```content/blog```. There are a number of layouts for the blog system:
1. The single layout; This is what shows up when you navigate to an individual post (```schulichignite.com/blog/<blog post name>```), and can be found in ```layouts/blog/single.html```
2. The list layout; This is a dedicated page that shows **ALL** blog posts. It is what shows up on ```schulichignite.com/blog``` and the layout can be found in ```layouts/blog/list.html```.
3. The Feed; This is the feed that pulls in the news articles into a lists. It can be found in various places on the site and is typically invoked in a template using ```{{ partial "blog-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/blog-feed.html```.

##### Blog authors & tags

For the blog there are [taxonomies](https://gohugo.io/content-management/taxonomies) setup for authors and tags. 

Authors need to be added to `/content/authors/<author_name>/_index.md` where `index.md` is a file with the information about the author. The file has the following fields (only name is required):

```yaml
name: Kieran Wood
email: kieran@canadiancoding.ca     
linkedin: kieran-wood # Just the username (i.e. https://linkedin.in/kieran-wood would be entered here as kieran-wood)
github: descent098 # Just the username (i.e. https://github.com/descent098 would be entered here as descent098)
website: https://kieranwood.ca # The full URL to their website
avatar: /img/blog/avatars/kieran.jpg
```


Can be accessed with:

```html

{{- with $.Site.GetPage "taxonomyTerm" (printf "authors/%s" (urlize "Kieran Wood")) }}
    Author: <a href="{{ .Permalink }}" target="_blank" rel="noopener noreferrer">{{ .Params.name }}</a>
{{end}}
```

You can find the templates for Authors in `/layouts/authors`, there are 2 used:

1. `list.html`: An overview of a **specific author**, and their content
2. `terms.html`: An overview of **all authors**



Tags have no "content", they are generated as they are added to blog posts automatically. You can find the templates for them in `/layouts/tags`, there are 2 used:

1. `list.html`: An overview of a **specific tag**, and it's content
2. `terms.html`: An overview of **all tags**

Can be accessed with:

```html
{{- range .Params.tags }}
    {{- with $.Site.GetPage "taxonomyTerm" (printf "tags/%s" (urlize .)) }}
            <a href="{{ .Permalink }}">{{ .Params.Title }}</a>,
    {{ end }}
{{ end }}
```


#### Project Showcase

The content for the project showcase can be found in ```content/projects```. There are a number of layouts for the blog system:
1. The single layout; This is what shows up when you navigate to an individual post (```schulichignite.com/projects/<project file name>```), and can be found in ```layouts/projects/single.html```
2. The list layout; This is a dedicated page that shows **ALL** projects under their appropriate difficulty tab. It is what shows up on ```schulichignite.com/projects``` and the layout can be found in ```layouts/projects/list.html```.
3. The Feed; This is the feed that pulls in the news articles into a lists. It can be used in various places on the site and is typically invoked in a template using ```{{ partial "projects-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/projects-feed.html```.


#### Definitions

The definitions can be found in `/content/definitions` and the layouts in `/layouts/definitions`, and in the `/blog/single.html` it will parse all of these and highlight them with [bootstrap tooltips](https://getbootstrap.com/docs/5.2/components/tooltips/). 

Definitions have the following fields

```md
---
name: name # Term name
accronym: n # If the term has an accronym version include it here
aka: # Alternative names that you want to be highlighted
- list
- lists
- array
- arrays
- maps
last_modified: 2021-02-26T00:00:00-06:00 # When the definition was last modified
tags: # Tags associated with the definition
- beginner
- data-structures
---
markdown content here
```

*Fields*
- name; Term name/fullname
- accronym; If the term has an accronym version include it here (i.e. HTML for hyper-text markup language)
- aka; List of alternative names that you want to be highlighted
- last_modified; When the definition was last modified
- tags; Tags associated with the definition


#### Contact

The page pulls from the ```/layouts/contact/single.html``` file for templating. The majority of the display is powered by site variables. For example the email, instagram and all other social links are defined in the site variables.

The primary exception are the FAQ's, see below for details.

#### Building on a Schedule

Currently (Oct 21st 2021) the site is set to automatically rebuild every Monday and Wednesday at 5:00pm (`15 17 * * 1,3`) as specified by the `cron` parameter in the `.github/workflows/hugo.yml` file:

```yml
name: Publish Site

on:
  push:
    branches:
      - master
  schedule:
    # Run At 05:00 PM, only on Monday and Wednesday
    - cron:  '0 17 * * 1,3'

jobs:
	... # More stuff here
```

If you need to change this timing I would recommend using [https://crontab.cronhub.io/](https://crontab.cronhub.io/) to change the specification. This is done for when content is pre-built, since only content with a date parameter set to today or earlier will show up in the sessions tab.

##### How it works

The contab above just tells github pages when to run the CI/CD to rebuild the site. The actual magic comes from hugo itself. Specifically the fact that with our current config sessions only show up when 2 conditions are met:

1. The `Ready` flag is set to `True`
2. The datetime stamp provided in the `Date` parameter is less than the current datetime (in other words it's already happened)

This is true of any contetn in `/content/beginner/*.md` and `/content/flare/*.md`. So since they're all set to midnight the day they are being presented (currently how it's setup) it means that  5pm on the same day is higher, and therefore the media will show up when the cronjob runs and rebuilds the site.

#### FAQ's

The content can be found in ```content/faq```, and the display on the contact page is driven through the partial found in ```/layouts/partials/faq.html```. Put simply the html just iterates over pages with the type faq and pulls the question and Content fields into the partial template.

