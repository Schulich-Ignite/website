---
name: HyperText Transfer Protocol
accronym: http
tags:
- scorch
- data-structures
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
---


## Format

### URL's/URI's

### Headers

### Content

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

- format

### Response

- format

## Other topics to look into

- Berkley sockets
- HTTP versions
- 
