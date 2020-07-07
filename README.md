# Schulich Ignite Website

## How to add/edit content

### Site Variables

Site variables are used for a large portion of the content. It essentially is the global state for the site.

To edit any of these go to ```config.toml``` in the root directory and modify the variable you want to change. If you haven't used TOML, [here is a primer](https://learnxinyminutes.com/docs/toml/).

Here is a list of the current site variables:
- email: The primary shulich ignite email
- instagram: The schulich ignite instagram link
- facebook: the link to the schulich ignite facebook page
- YouTube: The link to the official Schulich ignite YouTube Channel
- LinkedIn: The link to the Schulich ignite LinkedIn Company
- Discord: The link to join the discord server

### Homepage

The entirety of this page is hardcoded and pulls in feeds of other content types. The only exception is the wording found below the first header in the page. This can be customized in ```content/_index.md```.

### Events

### News

### Sessions

### Team

Eveerything that has to do with this page is under `content/team`.  
The title and sub-title can be changed in the `_index.md` file.  

Every file (excluding `_index.md`) inside the this folder will have card created for it. To add/edit team members, either add a new file here, or edit one. The format for the file is as follows:

```markdown
---
<!-- Name of the team member -->
name: "Jane Doe"
<!-- Their role on the team -->
role: "President of things"
<!-- Image to display on their card -->
image: "http://placekitten.com/g/300/300"
---

<!-- Content of the card goes here. This can also include HTML or markdown -->
example content
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

The entirety of this page is hardcoded and pulls in feeds of other content types. The only exception is the wording found below the first header in the page. This can be customized in ```content/_index.md```.

#### Sessions

#### Events

#### Contact

The majority of the content is hardcoded to pull from the site variables. For example the email, instagram and all other social links are defined in the site variables.