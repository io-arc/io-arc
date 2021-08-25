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
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=require("commander"),o=require("@io-arc/env"),a=e(require("@io-arc/logger")),t=e(require("cpx")),c=require("kleur"),i=e(require("moment"));(()=>{r.program.version("1.0.1").parse(process.argv);const e="copy",s=`${o.WS_STATIC_PATH}/**/!(_*|README.md)`;if(o.MODE_ENV===o.MODE.WATCH){const r="HH:mm:ss";t.watch(s,o.DIST).on("copy",(e=>{a.message(`[${i().format(r)}] ${e.dstPath} copied !`,c.green)})).on("remove",(e=>{a.message(`[${i().format(r)}] ${e.path} removed !`,c.yellow)})).on("watch-error",(r=>a.failed(e,r)))}else t.copy(s,o.DIST,(r=>{r?a.failed(e,r):a.complete(e)}))})();
