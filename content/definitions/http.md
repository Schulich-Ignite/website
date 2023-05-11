---
name: HyperText Transfer Protocol
accronym: http
tags:
- scorch
- networking
- web
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
- webpages
---

HTTP (HyperText Transfer Protocol) is the way most of the web communicates. It's the system that governs how your computer talks to servers around the world to retrieve webpages, talk to your online calendar, and even send messages in [point of sales systems](https://chromis.co.uk/). It basically gives you a set of rules to follow and a way for computers to talk to one another. It runs on top of existing networking hardware connections and is often something you can directly access as part of web development frameworks.

## Format

HTTP is a request-response system. This means there is one computer (the client) that sends a request to another computer (the host), which then generates and sends a response. An easy analogy would be to think of sending mail. Someone sends a letter, it gets delivered, and then someone sends a response. 

### URL's/URI's

The first thing you need in order to be able to send a request is somewhere to send it to. URL's are used in the browser to indicate where you want to go on the web, and what pages you want to access. For example this page has a URL of `https://schulichignite.com/definitions/http`. This follows a format of: `protocol://domain_name/slug`. So in this URL `https` is the protocol, `schulichignite.com` is the domain name, and `/definitions/http` is the slug.

#### Protocols

Http is a protocol. This basically tells the browser how it should format it's communications. HTTP is the one used on most of the internet (or [https](https://www.cloudflare.com/learning/ssl/what-is-https/)), but there's also [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), [file](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/jj710207(v=vs.85)) and other protocols that can be used.

### Domains

A domain is something you purchase from a domain name registrar. The only way to communicate between two computers is an IP address, something like `192.168.1.1`. The problem is that these suck to use, so domains allow you (with the help of DNS) to register a domain name and map it to an IP address. 

So if we were to buy `schulichignite.com`, and then register a DNS record of `@ A 192.168.1.1` then `@` means this domain, an A record means map an IP address, and 192.168.1.1 is our hypothetical server. So when someone goes to `http://schulichignite.com` it would be the same as going to `http://192.168.1.1`, and they would get our server!

### Slugs

Slugs are used to identify different resources when you get to a server. Leaving a URL at the "home/root URL" (i.e. `http://schulichignite.com`) sets the slug to `/`. From there this means you can have a bunch of webpages that your server can serve to a user based on what slug they provide. So for example `https://schulichignite.com/scorch` gives us a slug of `/scorch`. So first the `https://schulichignite.com` tells our browser to lookup the server for schulichignite.com (let's say it's IP is `192.168.1.1`), then comunicates to it over HTTP and asks for the `/scorch` page!

### Headers

Headers are key-value pairs that are used to communicate information between the client and host. This is essentially extra data used to inform one another about settings, preferences, security standards etc. Headers are in key-value format, so for example to indicate the date you might do:

```http
Date: Wed, 10 May 2023 20:34:20GMT
```

Headers can include whatever information you want, but there are many standards that are existing and respected by many http servers, so be careful if you are making your own up that they aren't taken already!

#### MIME Types

When we work on our computer we often use extensions to tell what type a file is. This doesn't work in networking. Instead we use [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) to indicate what type of resource something is. This is what changes how your browser processes a page so it can tell when it should treat a URL as a PDF vs a HTML page vs an image etc. A MIME type is just a header (typically called `content-type`), and there is [a list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of approved MIME types recognized by the browser.

### Content

Content is just the plain text associated with the resource you are looking to access. If it's a webpage then it's the HTML/CSS/JS source code, if it's an image it's the raw binary data etc.

## Process

when looking at HTTP communication there is the host and the client. The host is the system that recieves a request and has the resource that is being requested by the client. The steps for HTTP communication are:

1. Client sends an HTTP request with the info of the Host they want to contact, and the slug/uri
2. Host parses the HTTP request, and processes it as needed to find the resource user wants
3. Host generates and HTTP response and sends it back to client

<pre class="mermaid">
flowchart TD
    a[Client] --1. REQUEST: GET me /web on schulichignite.com --> b[Host]
    b --3. RESPONSE: HTML file for the page schulichignite.com/web --> a
    b--2. finds requested resource associated with /web on server-->b
</pre>

### Request

These are used to request **CRUD** (Create, read, update delete) operations from a server. Keep in mind that in order to send a request to a server you need the IP address, and you need to allow a port on the host computer to be open. A port is what allows you to specify where on the host machine you want to access. This means one computer can run multiple servers by running them on different ports. Most commonly you will use port 80 for http, and 443 for https.

#### Request Methods

There are various things you can request from a server, at the start of an HTTP request you need to specify what **method** you want to request with. This will determine how the server interprets what you want to do such as:

- **Get**ting a webpage
- **Post**ing the data from a form you filled out
- **Put**ting a new image on your instagram page
- Requesting to **delete** something from your account

Once sent they will await for a response

HTTP has a ton of request methods for telling the server what you want to do, here are a few:

- **GET**: give me the resource at the slug I requested (used to *get* pages)
- **POST**: Take the data I'm giving you and process it (used to *post* some information to the server)
- **PUT**: Take the data I'm giving you and create a new resource on the server (*put* this image I'm posting on my account)
- **DELETE**: *Delete* the resource I'm requesting


#### Parameters

Parameters are one of the three ways to send data to a server (the headers and/or the body are the other two). Parameters are two standards used to pass information to a server via the request URL.

##### Query Parameters

With query parameters Values are included after the url with ? and key-value pairs for example:

    weather.com/today?city=calgary

Multiple parameters

	weather.com/today?city=calgary&measurements=celcius

##### Path Parameters

Values that are included in the main URL. So for example weather.com/calgary the API will define

	weather.com/{city} The /calgary is a variable called city

Multiple Parameters

	weather.com/{city}/{measurement}
	weather.com/calgary/celcius

I used {} here to indicate a variable, but some systems use `<>`, like `/<city>`

##### Parameter security

When you put things in a URL they are visible, **don't put private info there!**

Path parameters:

	weather.com/login/{username}/{password}
	weather.com/login/john/P455W0RD

Query Parameters:

	weather.com/login?password=P455W0RD&username=john

Now someone only has to look at the user's browser history to steal the password for the user account!


#### Request Example

Requests are just plain text, the format is as follows:

```http
METHOD /slug HTTP/version
header: value

content
```

So when making a GET request to http://schulichignite.com/scorch via HTTP 1.1 you would send (no content because GET requests don't need content):

```http
GET /beginner HTTP/1.1
Host: schulichignite.com
```

When sending data via a POST request, you also have a body, here's an example of a form submission on example.com/form :

```http
POST /form HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: <needs to be calculated>

name=kieran&age=24
```

\*The Content-Type header indicates a [MIME type](#mime-types)

When sending data via a POST request, you also have a body, here's an example of a JSON body on weather.com/calgary :

```http
POST /calgary HTTP/1.1
Host: weather.com
Content-Type: application/json
Content-Length: <needs to be calculated>

{"date":"11/29/2022"}
```

\*The Content-Type header indicates a [MIME type](#mime-types)

### Response

Once a request is received the server will generate a response, this response looks similar to a request but with some different fields.

Some additional documentation can be found [here](https://developer.mozilla.org/en-US/docs/Glossary/Response_header)

Annoyingly basically **every header** in an HTTP response **is optional, except status codes.**

#### Response/status Codes

Status codes are how a host tells a client how processing their request went. This is the only required header in a response. [There are a lot of them](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), but here's the basics:

- [100-199](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response): Give me some info
- [200-299](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_success): All good
- [300-399](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_redirection): Hold up, gotta do something first
- [400-499](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_client_errors): Client error
- [500-599](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_server_errors): Host Error

\*Typically they will also have a message associated, eg: 404 Not Found

#### Response Example

Responses are also just plain text, the format is as follows:

```http
status_code message
header: value

content
```

Here is an example of a simple html page response:

```http
200 OK
Content-Type: text/html; charset=utf-8
Server: cloudflare
Date: Tue, 29 Nov 2022 20:34:20 GMT

<!doctype html><html><head></head><body><h1>Hello World</h1></body></html>
```

Error codes will often have no content, they may be as simple as:

```http
404 Not Found
```

Or if there's an error page they might have a "full" response:

```http
404 NOT FOUND
Date: Tue, 29 Nov 2022 20:34:20 GMT
Content-Type: text/html; charset=utf-8
Server: cloudflare

<!doctype html><html><head></head><body><h1>Oops... Couldn't find that page</h1></body></html>
```

## Other topics to look into

- [Berkley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets)
- [HTTP versions](https://www.youtube.com/watch?v=0OrmKCB0UrQ)
- [TCP/UDP](https://www.youtube.com/watch?v=qqRYkcta6IE)
