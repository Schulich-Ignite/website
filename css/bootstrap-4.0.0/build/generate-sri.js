#!/usr/bin/env node
/*!
 * Script to generate SRI hashes for use in our docs.
 * Remember to use the same vendor files as the CDN ones,
 * otherwise the hashes won't match!
 *
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";const fs=require("fs"),path=require("path"),sriToolbox=require("sri-toolbox"),sh=require("shelljs");sh.config.fatal=!0;const configFile=path.join(__dirname,"../_config.yml"),files=[{file:"dist/css/bootstrap.min.css",configPropertyName:"css_hash"},{file:"dist/js/bootstrap.min.js",configPropertyName:"js_hash"},{file:"assets/js/vendor/jquery-slim.min.js",configPropertyName:"jquery_hash"},{file:"assets/js/vendor/popper.min.js",configPropertyName:"popper_hash"}];files.forEach(s=>{fs.readFile(s.file,"utf8",(e,o)=>{if(e)throw e;const i=sriToolbox.generate({algorithms:["sha384"]},o);console.log(`${s.configPropertyName}: ${i}`),sh.sed("-i",new RegExp(`(\\s${s.configPropertyName}:\\s+"|')(\\S+)("|')`),`$1${i}$3`,configFile)})});