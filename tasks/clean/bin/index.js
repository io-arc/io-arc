#!/usr/bin/env node
/*!
Clean directory
Clean build directory

https://github.com/io-arc/io-arc/tasks/clean
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("@io-arc/env"),t=e(require("@io-arc/logger")),i=e(require("rimraf"));i("{"+r.DIST+",stats}/*",(function(e){e?t.failed("clean",e):t.complete("clean")}));
