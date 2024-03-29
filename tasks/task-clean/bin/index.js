#!/usr/bin/env node
/*!
@io-arc/task-clean
Clean build directory

Version: 1.1.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/clean.html

Copyright (c) 2020-2022 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),a=require("@io-arc/env"),i=e(require("@io-arc/logger")),o=e(require("rimraf"));(()=>{r.program.version("1.1.1").parse(process.argv);const e="clean";o(`{${a.DIST},stats}/*`,(r=>{r?i.failed(e,r):i.complete(e)}))})();
