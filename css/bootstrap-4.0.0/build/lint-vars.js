#!/usr/bin/env node
/*!
 * Script to find unused Sass variables.
 *
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";const fs=require("fs"),path=require("path"),glob=require("glob");function regExpQuote(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}let globalSuccess=!0;function findUnusedVars(e){fs.existsSync(e)&&fs.statSync(e).isDirectory()||(console.log(`"${e}": Not a valid directory!`),process.exit(1)),console.log(`Finding unused variables in "${e}"...`);let s=!1;const o=glob.sync(path.join(e,"**/*.scss"));let n="";o.forEach((e=>{n+=fs.readFileSync(e,"utf8")}));const l=n.match(/(^\$[a-zA-Z0-9_-]+[^:])/gm);console.log(`Found ${l.length} total variables.`),l.forEach((e=>{const o=new RegExp(regExpQuote(e),"g");1===(n.match(o)||[]).length&&(console.log(`Variable "${e}" is not being used.`),s=!0,globalSuccess=!1)})),!1===s&&console.log(`No unused variables found in "${e}".`)}function main(e){e.length<1&&(console.log("Wrong arguments!"),console.log("Usage: lint-vars.js folder [, folder2...]"),process.exit(1)),e.forEach((e=>{findUnusedVars(e)})),!1===globalSuccess&&process.exit(1)}main(process.argv.slice(2));
