#!/usr/bin/env node
/*!
File copy
Copying files in a directory

https://github.com/io-arc/io-arc/tasks/copy
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),o=e(require("@io-arc/logger")),t=e(require("cpx")),c=require("kleur"),n=e(require("moment")),i=r.WS_STATIC_PATH+"/**/!(_*|README.md)";if(r.MODE_ENV===r.MODE.WATCH){t.watch(i,r.DIST).on("copy",(function(e){o.message("["+n().format("HH:mm:ss")+"] "+e.dstPath+" copied !",c.green)})).on("remove",(function(e){o.message("["+n().format("HH:mm:ss")+"] "+e.path+" removed !",c.yellow)})).on("watch-error",(function(e){return o.failed("copy",e)}))}else t.copy(i,r.DIST,(function(e){e?o.failed("copy",e):o.complete("copy")}));
