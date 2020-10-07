#!/usr/bin/env node
"use strict";
/*!
 * Script to update version number references in the project.
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */const fs=require("fs"),path=require("path"),sh=require("shelljs");function regExpQuote(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function regExpQuoteReplacement(e){return e.replace(/[$]/g,"$$")}sh.config.fatal=!0;const DRY_RUN=!1;function walkAsync(e,s,r,n){s.has(path.parse(e).base)||fs.readdir(e,((o,t)=>{o?n(o):t.forEach((o=>{const t=path.join(e,o);fs.lstat(t,((e,o)=>{e?process.nextTick(n,e):o.isDirectory()?process.nextTick(walkAsync,t,s,r,n):o.isFile()&&process.nextTick(r,t)}))}))}))}function replaceRecursively(e,s,r,n,o){n=new RegExp(regExpQuote(n),"g"),o=regExpQuoteReplacement(o);walkAsync(e,s,(e=>{r.has(path.parse(e).ext)&&sh.sed("-i",n,o,e)}),(e=>{console.error("ERROR while traversing directory!:"),console.error(e),process.exit(1)}))}function main(e){2!==e.length&&(console.error("USAGE: change-version old_version new_version"),console.error("Got arguments:",e),process.exit(1));const s=e[0],r=e[1];replaceRecursively(".",new Set([".git","node_modules","vendor"]),new Set(["",".css",".html",".js",".json",".md",".scss",".txt",".yml"]),s,r)}main(process.argv.slice(2));
