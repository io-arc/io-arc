#!/usr/bin/env node
/*!
File copy
Copying files in a directory

https://github.com/io-arc/io-arc/tasks/copy
Version: 0.0.0
License: ISC
Copyright (c) 2020 arc one
*/
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),o=require("@io-arc/env"),a=e(require("@io-arc/logger")),c=e(require("cpx")),t=require("kleur"),i=e(require("moment"));(()=>{r.program.version("0.0.0").parse(process.argv);const e=`${o.WS_STATIC_PATH}/**/!(_*|README.md)`;if(o.MODE_ENV===o.MODE.WATCH){const r="HH:mm:ss";c.watch(e,o.DIST).on("copy",e=>{a.message(`[${i().format(r)}] ${e.dstPath} copied !`,t.green)}).on("remove",e=>{a.message(`[${i().format(r)}] ${e.path} removed !`,t.yellow)}).on("watch-error",e=>a.failed("copy",e))}else c.copy(e,o.DIST,e=>{e?a.failed("copy",e):a.complete("copy")})})();
