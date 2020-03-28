#!/usr/bin/env node
/*!
File copy
Copying files in a directory

https://github.com/io-arc/io-arc/tasks/copy
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),t=e(require("@io-arc/logger")),o=e(require("@io-arc/target-directory")),i=e(require("cpx")),c=require("kleur"),a=e(require("moment")),n=o.wsPath("wsDir.static","static")+"/**/!(_*|README.md)";if(r.MODE_ENV===r.MODE.WATCH){i.watch(n,r.DIST).on("copy",(function(e){t.message("["+a().format("HH:mm:ss")+"] "+e.dstPath+" copied !",c.green)})).on("remove",(function(e){t.message("["+a().format("HH:mm:ss")+"] "+e.path+" removed !",c.yellow)})).on("watch-error",(function(e){return t.failed("copy",e)}))}else i.copy(n,r.DIST,(function(e){e?t.failed("copy",e):t.complete("copy")}));
