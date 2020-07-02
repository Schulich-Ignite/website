# Schulich Ignite Website

## How to add/edit content

### Site Variables

Site variables are used for a large portion of the content. It essentially is the global state for the site.

To edit any of these go to ```config.toml``` in the root directory and modify the variable you want to change. If you haven't used TOML, [here is a primer](https://learnxinyminutes.com/docs/toml/).

Here is a list of the current site variables:
- email: The primary shulich ignite email
- instagram: The schulich ignite instagram handle
- facebook: the link to the schulich ignite facebook page  
  
TODO: Figure out remainder of variables

### Homepage

The entirety of this page is hardcoded and pulls in feeds of other content types. The only exception is the wording found below the first header in the page. This can be customized in ```content/_index.md```.

### Events

### News

### Lectures


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

#### Lectures

#### Events

#### Contact

The majority of the content is hardcoded to pull from the site variables. For example the email, instagram and all other social links are defined in the site variables.