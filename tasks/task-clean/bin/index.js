#!/usr/bin/env node
/*!
Clean directory
Clean build directory

https://github.com/io-arc/io-arc/tree/master/tasks/clean
Version: 0.2.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),a=require("@io-arc/env"),i=e(require("@io-arc/logger")),o=e(require("rimraf"));(()=>{r.program.version("0.2.0").parse(process.argv);o(`{${a.DIST},stats}/*`,e=>{e?i.failed("clean",e):i.complete("clean")})})();
