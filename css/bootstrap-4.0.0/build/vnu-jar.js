#!/usr/bin/env node
/*!
 * Script to run vnu-jar if Java is available.
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";const childProcess=require("child_process"),vnu=require("vnu-jar");childProcess.exec("java -version",((e,t,i)=>{if(e)return void console.error("Skipping vnu-jar test; Java is missing.");const s=!i.match(/64-Bit/),n=["Attribute “autocomplete” is only allowed when the input type is.*","Attribute “autocomplete” not allowed on element “button” at this point.","Element “img” is missing required attribute “src”.","Element “legend” not allowed as child of element “div” in this context.*","The “date” input type is not supported in all browsers.*","The “time” input type is not supported in all browsers.*","The “main” role is unnecessary for element “main”.","This document appears to be written in Danish.*"].join("|"),r=["-jar",vnu,"--asciiquotes","--skip-non-html","--Werror",`--filterpattern "${n}"`,"_gh_pages/","js/tests/"];return s&&r.splice(0,0,"-Xss512k"),childProcess.spawn("java",r,{shell:!0,stdio:"inherit"}).on("exit",process.exit)}));
