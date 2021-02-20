#!/usr/bin/env node
/*!
@io-arc/task-clean
Clean build directory

Version: 0.4.0
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://github.com/io-arc/io-arc/tree/master/tasks/clean

Copyright (c) 2020-2021 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),a=require("@io-arc/env"),i=e(require("@io-arc/logger")),o=e(require("rimraf"));(()=>{r.program.version("0.4.0").parse(process.argv);o(`{${a.DIST},stats}/*`,e=>{e?i.failed("clean",e):i.complete("clean")})})();
