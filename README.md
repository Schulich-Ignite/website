# Schulich Ignite Website

## How to add/edit content

### Dates & Times

The Date field in any content follows a consistent format. This format looks like ```2020-07-08T18:30:00-06:00``` which correlates to Wed Jul 8 15:04 MDT. So the format is ```YYYY-MM-DDTHH:MM:SS-TZ:TZ``` so year followed by month, then day, after that there is a "T" which indicates time, then it goes ```hours:minuets:seconds``` in 24 hour format followed by ```-TZ:TZ``` which is the timezone. In our case it's always ```-06:00```.

### Site Variables

Site variables are used for a large portion of the content. It essentially is the global state for the site.

To edit any of these go to ```config.toml``` in the root directory and modify the variable you want to change. If you haven't used TOML, [here is a primer](https://learnxinyminutes.com/docs/toml/).

Here is a list of the current site variables:
- email: The primary shulich ignite email
- instagram: The schulich ignite instagram link
- facebook: the link to the schulich ignite facebook page
- youtube: The link to the official Schulich ignite YouTube Channel
- recruitVideo: The link to the recruitment video
- linkedin: The link to the Schulich iPygnite LinkedIn Company
- discord: The link to join the discord server
- tiktok: The link to the Schulich Ignite TikTok account
- status: This controls what to display on the header on the front page - it has 3 possible values: 
    - ```status = "recruiting"``` for when there are no current dates but you have a mailing list
    - ```status = "signup"``` for when there are active sign up links
    - ```status = "live"``` for when the workshops are currently active (this is the default value)
- current_startDate: The start of the first workshop for the current semester
- current_endDate: The end of the last workshop for the current semester
- summaryLength: The number of characters to include in the summary for news, sessions, etc.
- mentorSignUp: The link to the mentor application form
- menteeSignUp: The link to the mentee singup form
- ignitePoints: The link to the Ignite Points spreadsheet
- sparkDocs: The link to the Spark documentation
- submitBugBusters: The link to the submit form for Bug Busters exercises/projects
- submitPythonicLava: The link to the submit form for Pythonic Lava exercises/projects

### Homepage

All of the content on the front page can be customized in ```content/_index.md```.

### Events

New events can be added in ```content/events``` and any existing events can be edited at ```content/events```. The format is:

```markdown
---
title: "This is the event title"
date: 2020-07-08T15:04:38-07:00
image: "/img/ignite-logo.svg"
---

Enter event description here note the first 20 words will be used in the feed. So make sure to use them wisely, or else your content will be cut off and no one will be able to read it.
```

The image field is optional, you can specify an image to display for the event. If you choose not to then just delete the image metadata, and by default the ignite logo will appear for that event.

Note that the datetime format is YYYY-MM-DDTHH:MM:SSTZ. Where TZ is timezone and the T splits the date from the time.

### News

New news can be added in ```content/news``` and any existing news can be edited at ```content/news```. The format is:

```markdown
---
title: "This is the news article title"
date: 2020-07-08T15:04:38-07:00
image: "/img/ignite-logo.svg"
---

Enter news article here, note the first 20 words will be used in the feed. So make sure to use them wisely, or else your content will be cut off and no one will be able to read it.
```

The image field is optional, you can specify an image to display for the news story. If you choose not to then just delete the image metadata, and by default the ignite logo will appear for that article.

Note that the datetime format is YYYY-MM-DDTHH:MM:SSTZ. Where TZ is timezone and the T splits the date from the time.

### Beginner / Flare

The beginner and flare session views pull any sessions that exist. The content can be found in ```content/beginner``` and ```content/flare``` depending on the targetted session. The format for a session, regardless of beginner or flare, is:

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

### About

Everything that has to do with this page is under `content/about`.  
The title and subtitle can be changed in the `_index.md` file. The markdown content of this file will be used for the 'About the Team' paragraph.

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

Eveerything that has to do with this page is under `content/sponsors`.  
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

### Per-page breakdown

#### Index/Home

In  ```content/_index.md```, the tagline controls the content below the "Who are we?" title on the front page. 
The main content of ```content/_index.md``` is displayed under the "Want to Join?" title on the front page.

#### Sessions

The content for sessions can be found in ```content/sessions```. There are a number of layouts for the sessions system:
1. The single layout; This is what shows up when you navigate to an individual session (```schulichignite.com/sessions/<esession name>```), and can be found in ```layouts/session/single.html```
2. The list layout; This is a dedicated page that shows **ALL** sessions. It is what shows up on ```schulichignite.com/sessions``` and the layout can be found in ```layouts/sessions/list.html```.
3. The Feed; This is the feed that pulls in the sessions lists. It can be found in various places on the site and is typically invoked in a template using ```{{ partial "sessions-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/sessions-feed.html```.

#### Events

The content for events can be found in ```content/events```. There are a number of layouts for the events system:
1. The single layout; This is what shows up when you navigate to an individual event (```schulichignite.com/events/<event name>```), and can be found in ```layouts/events/single.html```
2. The list layout; This is a dedicated page that shows **ALL** events. It is what shows up on ```schulichignite.com/events``` and the layout can be found in ```layouts/events/list.html```.
3. The Feed; This is the feed that pulls in the events lists. It can be found in various places on the site and is typically invoked in a template using ```{{ partial "event-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/event-feed.html```.

#### News

The content for events can be found in ```content/news```. There are a number of layouts for the news system:
1. The single layout; This is what shows up when you navigate to an individual event (```schulichignite.com/news/<news article name>```), and can be found in ```layouts/news/single.html```
2. The list layout; This is a dedicated page that shows **ALL** news articles. It is what shows up on ```schulichignite.com/news``` and the layout can be found in ```layouts/news/list.html```.
3. The Feed; This is the feed that pulls in the news articles into a lists. It can be found in various places on the site and is typically invoked in a template using ```{{ partial "news-feed.html" .}}```. You can find the partial template that controls this in ```layouts/partial/news-feed.html```.

#### Contact

The page pulls from the ```/layouts/contact/single.html``` file for templating. The majority of the display is powered by site variables. For example the email, instagram and all other social links are defined in the site variables.

The primary exception are the FAQ's, see below for details.

#### FAQ's

The content can be found in ```content/faq```, and the display on the contact page is driven through the partial found in ```/layouts/partials/faq.html```. Put simply the html just iterates over pages with the type faq and pulls the question and Content fields into the partial template.


