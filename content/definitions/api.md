---
name: Application Programming Interface's
accronym: api
aka:
    - api's
    - apis
    - routes
    - endpoint
    - endpoints
    - REST
    - SOAP
tags:
- scorch
- networking
prerequisites:
- variables
- data-types
- functions
- conditionals
- collections
- http
---

An application program interface is basically a system that allows you to use other people's code and/or systems.

There are lots of things people mean when they say API:

- A set of code that runs other code (libraries, packages)
- Pre-written code that lets you interface with a program that's running (i.e. [starcraft engine](https://github.com/BurnySc2/python-sc2), [Hubspot api](https://github.com/HubSpot/hubspot-api-python), etc.)

## Types of API's

There are several types of API's that exist. This list is not exhaustive, but it includes details about common forms of API's and the basic details about them.

### Web-based

When people talk about web API's they typically mean *ingest/endpoint API's* these are systems where when you go to a URL you get a resource or some data.

For example you might have a weather API where you go to a URL that has your city in it (`http://weather.com/calgary`), and it returns a JSON object with information about the weather in that city.  That means we can talk between servers, and we can use other servers to extend our functionality! Essentially we can treat other people's servers as function calls!

#### Routing

This section assumes you know the information in [this definition](/definitions/http). Routing is essentially a way of defining URL's that do certain actions when you use different HTTP methods on them. 

For example you might send a post request with your order to a "route" at `http://company.com/order/3`, where the 3 is the ID for your account on the `company.com` website.

#### Parameters

Parameters are one of the three ways to send data to a server (the headers and/or the body are the other two). Parameters are two standards used to pass information to a server via the request URL.

##### Query Parameters

With query parameters Values are included after the url with ? and key-value pairs for example:

```
weather.com/today?city=calgary
```

Multiple parameters

```
weather.com/today?city=calgary&measurements=celcius
```

##### Path Parameters

Values that are included in the main URL. So for example weather.com/calgary the API will define
```
weather.com/{city}
```

The /calgary is a variable called city

Multiple Parameters

```
weather.com/{city}/{measurement}

weather.com/calgary/celcius
```

I used {} here to indicate a variable, but some systems use `<>`, like `/<city>`

##### Standards

There are several existing standards that define rules for how to make these sort of API's:

- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)(Representational state transfer)
- [SOAP](https://en.wikipedia.org/wiki/SOAP)(Simple Object Access Protocol)
- [JSON RPC](https://en.wikipedia.org/wiki/JSON-RPC)

You don't have to completely follow these systems, however they are a good to understand

### Engine based

Sometimes when we're making apps that are complicated (like games), there will need to be an "engine", the engine basically runs in the background doing things.

There will then be an API that you use to interact with the "engine" and do things with it.

#### Wrappers

Some API's are complicated… Too complicated. So people will create what are called wrappers. These wrappers are basically pieces of code that use the API under the hood, but make it easier to work with.

This is called an *abstraction layer*, and it does typically introduce some slowdown, but makes more complex systems much easier to use. For example game engines are often wrappers for an API that draws pixels to the screen. Most engine API's are wrappers.


### Hardware based

These API's talk to hardware as if they were applications. Hardware API's are different than endpoints (web-based API's). In endpoints you have to worry about network problems, and malformed data. 

In hardware, you have to do the same, but you have to deal with physical problems as well. People rarely spill a coffee on their $20,000 server, but they do it a lot with microphones, webcams etc.

So your systems have to be much more resilient and adaptable when using hardware than most other types of API's

Generally hardware api's have a few stages:

1. Connection; Setup a connection to the hardware
2. Register callbacks; Callbacks are functions that do something when an event happens
3. Disconnect; Terminate the connection, this can be explicit, or will happen usually when the browser closes (not always though)

#### Connection

Here is what the connection request for a webcam through the browser might look like:

<pre class="mermaid">
flowchart TD
    A[Browser] -->|Request webcam access| B(Computer)
    B --> C{Ask user for permission}
    C -->|No, returns error| A
    C --> |Yes| D{Select which webcam}
    D --> |No webcam available, return error| A
    D --> |Webcam available, establish connection| A

</pre>

Keep in mind that even if a webcam is available, that doesn't mean it works!

#### Callbacks

A callback is basically a function that runs when a certain thing happens. For example you might have a phone calling app, and a callback for when a microphone detects audio. 

The callback function might be a function that then sends the audio signal over a network to someone else in the call.

#### Disconnect

When you're done with a device oyu need to make sure to disconnect, otherwise you can lock out other apps from accessing the device when they need to!
