---
name: Packages
aka:
    - modules
    - package managers
tags:
    - intermediate
prerequisites:
    - variables
    - data-types
    - functions
    - conditionals
    - collections
---

Packages allow you to break up code into chunks that make it easier to understand what each piece is doing. How this works is up to the language, typically there will be a defined file/folder structure that is used to define packages.

## Vendoring & remote packages

Vendoring is the name given to importing other people’s code to use in your projects. In some frameworks there will be dedicated folders for this (`/vend`, `/vendor` etc.). This can mean bringing in small pieces of code, or vendoring an entire application This can be used for things like:

- Adding in plugins
- Extending existing code in a framework to support a feature. For example vendoring the authentication system to allow you to use a custom system to authenticate
- Taking an entire existing application and being able to modify it as necessary. For example having a system to manage courses on campus and vendoring it to add your own branding

If you are wondering if you're allowed to vendor a project, [check out our blog post here](https://schulichignite.com/blog/stealing-like-a-developer/) for a very basic rundown of some terms that might be useful. 

### Package managers

Sometimes managing packages can be a hassle. If you're using multiple packages from different people you don't wanna have to manually check if there are new versions individually, or download all of their packages you need manually. Package managers allow you to have a system to help manage your packages easily. 

#### Language Package Managers

Language package managers are incorporated into a programming language and are used to let you install packages you can then use in the language. For example:

- [pip for python](https://www.w3schools.com/python/python_pip.asp)
- [npm for nodeJS](https://docs.npmjs.com/cli/v9) (though technically nodeJS is a runtime not javascript itself)
- [Cargo for rust](https://doc.rust-lang.org/cargo/)
- [Go builtin package manager](https://go.dev/doc/modules/managing-dependencies)

#### OS Package Managers

Some operating systems will ship with package managers (such as [apt](https://en.wikipedia.org/wiki/APT_(software)) or [pacman](https://wiki.archlinux.org/title/pacman)) that help to manage packages that keep the system up and running, and some will even ship with package managers that help manage applications you install. Most linux distributions ship with an easy to access package manager that lets you manage your applications all in one place. Windows and Mac OS don't ship with this functionality, but you can get something close to it with [chocolatey](https://chocolatey.org/) (for windows) and [homebrew](https://brew.sh/) for Mac OS.

#### Application package managers

Some applications will allow users to install additional packages ([mods in video games](https://www.nexusmods.com/about/vortex/), [extensions in spreadsheet apps](https://learn.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-overview) etc.). These application level package managers will sometimes install entire new applications ([game launchers](https://store.epicgames.com/en-US/download)), or just add small pieces of functionality ([mod managers for a game](https://download.curseforge.com/)).

