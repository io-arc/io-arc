#!/usr/bin/env node
/*!
@io-arc/task-copy
Copying files in a directory

Version: 1.0.1
License: ISC

Repository: https://github.com/io-arc/io-arc
Documents: https://io-arc.tech/plugins/tasks/copy.html

Copyright (c) 2020-2021 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),o=require("@io-arc/env"),a=e(require("@io-arc/logger")),c=e(require("cpx")),t=require("kleur"),i=e(require("moment"));(()=>{r.program.version("1.0.1").parse(process.argv);const e=`${o.WS_STATIC_PATH}/**/!(_*|README.md)`;if(o.MODE_ENV===o.MODE.WATCH){const r="HH:mm:ss";c.watch(e,o.DIST).on("copy",e=>{a.message(`[${i().format(r)}] ${e.dstPath} copied !`,t.green)}).on("remove",e=>{a.message(`[${i().format(r)}] ${e.path} removed !`,t.yellow)}).on("watch-error",e=>a.failed("copy",e))}else c.copy(e,o.DIST,e=>{e?a.failed("copy",e):a.complete("copy")})})();
